
const PRESETS = [
  { id: 'all', label: '全講座', filter: () => true },
  { id: 'intro', label: '全社導入の第一歩', filter: c => c.level === '入門' },
  { id: 'm365', label: 'Microsoft活用', filter: c => c.platform === 'Microsoft' },
  { id: 'google', label: 'Google活用', filter: c => c.platform === 'Google' },
  { id: 'dx', label: 'DX推進向け', filter: c => c.audience.includes('DX推進') || c.audience.includes('経営企画') },
  { id: 'dev', label: '開発者向け', filter: c => c.audience.includes('開発者') },
];

const state = {
  search: '',
  preset: 'all',
  filters: {
    level: 'すべて',
    category: 'すべて',
    platform: 'すべて',
    audience: 'すべて',
  },
  selectedId: COURSES[0]?.id || null,
  compareIds: [],
  diagnosis: null,
};

const els = {
  searchInput: document.getElementById('searchInput'),
  presetWrap: document.getElementById('presetWrap'),
  levelChips: document.getElementById('levelChips'),
  categoryChips: document.getElementById('categoryChips'),
  platformChips: document.getElementById('platformChips'),
  audienceChips: document.getElementById('audienceChips'),
  courseGrid: document.getElementById('courseGrid'),
  detailPanel: document.getElementById('detailPanel'),
  resultCount: document.getElementById('resultCount'),
  compareEmpty: document.getElementById('compareEmpty'),
  compareTableWrap: document.getElementById('compareTableWrap'),
  envSelect: document.getElementById('envSelect'),
  audienceSelect: document.getElementById('audienceSelect'),
  goalSelect: document.getElementById('goalSelect'),
  levelSelect: document.getElementById('levelSelect'),
  runDiagnosisBtn: document.getElementById('runDiagnosisBtn'),
  resetDiagnosisBtn: document.getElementById('resetDiagnosisBtn'),
  diagnosisResult: document.getElementById('diagnosisResult'),
  copyProposalBtn: document.getElementById('copyProposalBtn'),
};

function uniq(list) {
  return [...new Set(list)];
}

function getOptions(key) {
  if (key === 'level') return ['すべて', ...uniq(COURSES.map(c => c.level))];
  if (key === 'category') return ['すべて', ...uniq(COURSES.map(c => c.category))];
  if (key === 'platform') return ['すべて', ...uniq(COURSES.map(c => c.platform))];
  if (key === 'audience') return ['すべて', ...uniq(COURSES.flatMap(c => c.audience))];
  return ['すべて'];
}

function scoreCourse(course, answers) {
  let score = 0;
  const reasons = [];

  if (answers.env && course.platform === answers.env) {
    score += 4;
    reasons.push(`利用基盤「${answers.env}」に一致`);
  } else if (answers.env === 'Mixed' && ['Microsoft', 'Google', 'Mixed', '汎用生成AI'].includes(course.platform)) {
    score += 2;
    reasons.push('複数基盤の環境でも提案しやすい');
  }

  if (answers.audience && course.audience.includes(answers.audience)) {
    score += 4;
    reasons.push(`主受講者「${answers.audience}」に適合`);
  }

  if (answers.goal) {
    const mappedGoal = answers.goal;
    if (course.goalTags.includes(mappedGoal)) {
      score += 5;
      reasons.push(`導入目的「${mappedGoal}」に直結`);
    }
    if (mappedGoal === 'アプリ開発' && course.category === 'アプリ開発') score += 2;
    if (mappedGoal === '業務効率化' && course.category === '業務効率化') score += 2;
    if (mappedGoal === 'AIエージェント' && course.category === 'AIエージェント') score += 2;
    if (mappedGoal === '仕様駆動' && course.category === '開発プロセス') score += 3;
    if (mappedGoal === 'AI実装' && course.category === 'AI実装') score += 3;
    if (mappedGoal === 'PoC' && course.goalTags.includes('PoC')) score += 3;
  }

  if (answers.level && course.level === answers.level) {
    score += 3;
    reasons.push(`希望難易度「${answers.level}」に一致`);
  }

  if (course.level === '入門' && (answers.audience === '非エンジニア' || answers.audience === 'ビジネス職')) {
    score += 1;
  }
  if (course.level === '上級' && answers.audience === '開発者') {
    score += 1;
  }

  return { score, reasons };
}

function getFilteredCourses() {
  const q = state.search.trim().toLowerCase();
  const preset = PRESETS.find(p => p.id === state.preset) || PRESETS[0];

  return COURSES.filter(course => {
    const haystack = [
      course.title,
      course.shortTitle,
      course.category,
      course.platform,
      course.level,
      ...course.audience,
      ...course.tools,
      ...course.goalTags,
      ...course.recommended,
      ...course.value,
      course.summary,
    ].join(' ').toLowerCase();

    const searchMatch = !q || haystack.includes(q);
    const levelMatch = state.filters.level === 'すべて' || course.level === state.filters.level;
    const categoryMatch = state.filters.category === 'すべて' || course.category === state.filters.category;
    const platformMatch = state.filters.platform === 'すべて' || course.platform === state.filters.platform;
    const audienceMatch = state.filters.audience === 'すべて' || course.audience.includes(state.filters.audience);
    const presetMatch = preset.filter(course);

    return searchMatch && levelMatch && categoryMatch && platformMatch && audienceMatch && presetMatch;
  });
}

function renderPresetButtons() {
  els.presetWrap.innerHTML = PRESETS.map(item => `
    <button class="preset-btn ${state.preset === item.id ? 'active' : ''}" data-preset="${item.id}" type="button">${item.label}</button>
  `).join('');
  els.presetWrap.querySelectorAll('[data-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.preset = btn.dataset.preset;
      render();
    });
  });
}

function renderChipGroup(container, key) {
  const current = state.filters[key];
  container.innerHTML = getOptions(key).map(value => `
    <button class="chip ${current === value ? 'active' : ''}" data-key="${key}" data-value="${value}" type="button">${value}</button>
  `).join('');
  container.querySelectorAll('[data-key]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.filters[key] = btn.dataset.value;
      render();
    });
  });
}

function buildCourseCard(course) {
  const selected = course.id === state.selectedId;
  const inCompare = state.compareIds.includes(course.id);

  return `
    <article class="course-card ${selected ? 'active' : ''}" data-course-id="${course.id}">
      <div class="card-top">
        <div>
          <span class="badge">${course.category}</span>
        </div>
        <span class="badge level-${course.level}">${course.level}</span>
      </div>
      <h3>${course.title}</h3>
      <p>${course.summary}</p>
      <div class="badge-row">
        <span class="badge">${course.platform}</span>
        <span class="badge">${course.track}</span>
        <span class="badge">${course.duration}</span>
      </div>
      <div class="card-meta">
        <div class="meta-box">
          <div class="meta-label">対象者</div>
          <div class="meta-value">${course.audience.slice(0, 3).join(' / ')}</div>
        </div>
        <div class="meta-box">
          <div class="meta-label">主要ツール</div>
          <div class="meta-value">${course.tools.slice(0, 2).join(' / ')}</div>
        </div>
      </div>
      <div class="card-actions">
        <button class="action-btn primary" data-select-id="${course.id}" type="button">詳細を見る</button>
        <button class="action-btn" data-compare-id="${course.id}" type="button">${inCompare ? '比較解除' : '比較に追加'}</button>
      </div>
    </article>
  `;
}

function renderCourseGrid(filtered) {
  els.courseGrid.innerHTML = filtered.length
    ? filtered.map(buildCourseCard).join('')
    : `<div class="card" style="padding:24px;color:var(--muted)">条件に合う講座がありません。フィルターを緩めてください。</div>`;

  els.courseGrid.querySelectorAll('[data-course-id]').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('[data-compare-id]') || e.target.closest('[data-select-id]')) return;
      state.selectedId = card.dataset.courseId;
      renderDetail();
      renderCourseGrid(getFilteredCourses());
    });
  });

  els.courseGrid.querySelectorAll('[data-select-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      state.selectedId = btn.dataset.selectId;
      renderDetail();
      renderCourseGrid(getFilteredCourses());
      if (window.innerWidth < 1180) {
        document.getElementById('detailPanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  els.courseGrid.querySelectorAll('[data-compare-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleCompare(btn.dataset.compareId);
    });
  });
}

function renderDetail() {
  const course = COURSES.find(c => c.id === state.selectedId);
  if (!course) {
    els.detailPanel.innerHTML = `<div class="detail-empty">講座を選択してください。</div>`;
    return;
  }

  els.detailPanel.innerHTML = `
    <div class="detail-head">
      <div>
        <span class="badge">${course.category}</span>
        <div class="detail-title">${course.title}</div>
      </div>
      <span class="badge level-${course.level}">${course.level}</span>
    </div>
    <p class="detail-summary">${course.summary}</p>

    <div class="small-pills">
      ${course.audience.map(item => `<span>${item}</span>`).join('')}
    </div>

    <div class="detail-meta-grid">
      <div class="meta-box"><div class="meta-label">利用基盤</div><div class="meta-value">${course.platform}</div></div>
      <div class="meta-box"><div class="meta-label">実施形式</div><div class="meta-value">${course.format}</div></div>
      <div class="meta-box"><div class="meta-label">時間</div><div class="meta-value">${course.duration}</div></div>
      <div class="meta-box"><div class="meta-label">前提</div><div class="meta-value">${course.prerequisite}</div></div>
    </div>

    <div class="detail-section">
      <h4>ゴール・得られるスキル</h4>
      <ul>${course.value.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>

    <div class="detail-section">
      <h4>主要ツール</h4>
      <div class="small-pills">${course.tools.map(item => `<span>${item}</span>`).join('')}</div>
    </div>

    <div class="detail-section">
      <h4>こんな企業に推奨</h4>
      <ul>${course.recommended.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>

    <div class="detail-section">
      <h4>主なプログラム要素</h4>
      <ul>${course.schedule.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>

    <div class="proposal-note">
      <strong>提案トーク例：</strong><br>
      「${course.shortTitle}」は、<strong>${course.audience[0]}</strong>を主対象に、
      <strong>${course.goalTags[0]}</strong>を短期間で立ち上げたい企業に相性が良い講座です。
      主要ツールは<strong>${course.tools[0]}</strong>で、${course.duration}で実施できます。
    </div>
  `;
}

function toggleCompare(courseId) {
  const index = state.compareIds.indexOf(courseId);
  if (index >= 0) {
    state.compareIds.splice(index, 1);
  } else {
    if (state.compareIds.length >= 3) {
      alert('比較は3講座までです。');
      return;
    }
    state.compareIds.push(courseId);
  }
  renderCompare();
  renderCourseGrid(getFilteredCourses());
}

function renderCompare() {
  const items = COURSES.filter(c => state.compareIds.includes(c.id));
  if (!items.length) {
    els.compareEmpty.classList.remove('hidden');
    els.compareTableWrap.classList.add('hidden');
    els.compareTableWrap.innerHTML = '';
    return;
  }

  els.compareEmpty.classList.add('hidden');
  els.compareTableWrap.classList.remove('hidden');

  const rows = [
    ['講座名', items.map(c => c.shortTitle)],
    ['カテゴリ', items.map(c => c.category)],
    ['難易度', items.map(c => c.level)],
    ['利用基盤', items.map(c => c.platform)],
    ['対象者', items.map(c => c.audience.join(' / '))],
    ['主要ツール', items.map(c => c.tools.join(' / '))],
    ['主な価値', items.map(c => c.value[0])],
    ['推奨用途', items.map(c => c.goalTags.join(' / '))],
  ];

  els.compareTableWrap.innerHTML = `
    <table class="compare-table">
      <thead>
        <tr>
          <th>比較軸</th>
          ${items.map(c => `<th>${c.shortTitle}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${rows.map(([head, values]) => `
          <tr>
            <th>${head}</th>
            ${values.map(v => `<td>${v}</td>`).join('')}
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function renderDiagnosis() {
  const result = state.diagnosis;
  if (!result || !result.length) {
    els.diagnosisResult.className = 'diagnosis-result empty';
    els.diagnosisResult.textContent = '条件を選ぶと、おすすめ上位3講座を表示します。';
    return;
  }

  els.diagnosisResult.className = 'diagnosis-result';
  els.diagnosisResult.innerHTML = result.map((item, idx) => `
    <div class="diagnosis-item">
      <div class="diagnosis-top">
        <strong>${idx + 1}. ${item.course.shortTitle}</strong>
        <span class="score-pill">適合度 ${item.score}</span>
      </div>
      <div style="color:var(--muted); line-height:1.7;">${item.course.summary}</div>
      <ul style="margin:8px 0 0 18px; color:var(--muted); line-height:1.8;">
        ${item.reasons.slice(0,3).map(reason => `<li>${reason}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function runDiagnosis() {
  const answers = {
    env: els.envSelect.value,
    audience: els.audienceSelect.value,
    goal: els.goalSelect.value,
    level: els.levelSelect.value,
  };

  const scored = COURSES.map(course => {
    const scoredResult = scoreCourse(course, answers);
    return { course, ...scoredResult };
  })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  state.diagnosis = scored;
  renderDiagnosis();
}

function buildProposalText() {
  const selected = COURSES.find(c => c.id === state.selectedId) || COURSES[0];
  const compareItems = COURSES.filter(c => state.compareIds.includes(c.id));
  const diagnosisItems = state.diagnosis || [];

  return [
    '【Embex Education 生成AI研修 提案メモ】',
    '',
    `■ 推奨中心講座`,
    `- ${selected.title}`,
    `- カテゴリ: ${selected.category}`,
    `- 対象者: ${selected.audience.join(' / ')}`,
    `- 利用基盤: ${selected.platform}`,
    `- 時間: ${selected.duration}`,
    `- 実施形式: ${selected.format}`,
    `- 主な価値: ${selected.value.join(' / ')}`,
    '',
    '■ 提案時の訴求ポイント',
    ...selected.recommended.map(item => `- ${item}`),
    '',
    diagnosisItems.length ? '■ 診断結果 上位候補' : '',
    ...diagnosisItems.flatMap((item, idx) => [
      `${idx + 1}. ${item.course.shortTitle}（適合度 ${item.score}）`,
      ...item.reasons.map(reason => `   - ${reason}`),
    ]),
    '',
    compareItems.length ? '■ 比較候補' : '',
    ...compareItems.map(item => `- ${item.shortTitle} / ${item.category} / ${item.level} / ${item.platform}`),
    '',
    '■ 備考',
    '- 全講座とも標準は1Day・6時間、オンライン／オフライン両対応。',
    '- 顧客の利用基盤（Microsoft / Google / 開発ツール）と受講者層に合わせて選定すると提案精度が高い。',
  ].filter(Boolean).join('\n');
}

async function copyProposalText() {
  const text = buildProposalText();
  try {
    await navigator.clipboard.writeText(text);
    const original = els.copyProposalBtn.textContent;
    els.copyProposalBtn.textContent = 'コピーしました';
    setTimeout(() => { els.copyProposalBtn.textContent = original; }, 1400);
  } catch (err) {
    alert('コピーに失敗しました。');
  }
}

function render() {
  renderPresetButtons();
  renderChipGroup(els.levelChips, 'level');
  renderChipGroup(els.categoryChips, 'category');
  renderChipGroup(els.platformChips, 'platform');
  renderChipGroup(els.audienceChips, 'audience');

  const filtered = getFilteredCourses();
  els.resultCount.textContent = filtered.length;

  if (!filtered.some(course => course.id === state.selectedId)) {
    state.selectedId = filtered[0]?.id || null;
  }

  renderCourseGrid(filtered);
  renderDetail();
  renderCompare();
  renderDiagnosis();
}

els.searchInput.addEventListener('input', (e) => {
  state.search = e.target.value;
  render();
});

els.runDiagnosisBtn.addEventListener('click', runDiagnosis);
els.resetDiagnosisBtn.addEventListener('click', () => {
  els.envSelect.value = '';
  els.audienceSelect.value = '';
  els.goalSelect.value = '';
  els.levelSelect.value = '';
  state.diagnosis = null;
  renderDiagnosis();
});
els.copyProposalBtn.addEventListener('click', copyProposalText);

render();

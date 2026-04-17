const COURSES = [
  {
    "id": "01",
    "title": "生成AI活用ワークショップ",
    "shortTitle": "生成AI活用",
    "category": "ビジネス基礎",
    "track": "Business",
    "level": "入門",
    "platform": "汎用生成AI",
    "technicality": 1,
    "audience": [
      "ビジネス職",
      "非エンジニア",
      "全社研修"
    ],
    "tools": [
      "ChatGPT等",
      "PCまたはタブレット"
    ],
    "duration": "1Day・6時間",
    "format": "オンライン／オフライン",
    "summary": "生成AIの基礎知識とプロンプトの要点を、業務別の活用例とともに学び、チームごとに『生成AI活用テンプレート』まで作る入門講座。",
    "value": [
      "生成AIとプロンプトの本質を理解",
      "自分の業務に合わせて使えるようになる",
      "組織全体での活用イメージを具体化"
    ],
    "recommended": [
      "全社導入の最初の1本",
      "非エンジニア中心の導入",
      "まず安全に活用を始めたい企業"
    ],
    "goalTags": [
      "基礎定着",
      "業務活用",
      "プロンプト設計"
    ],
    "schedule": [
      "言語モデルとプロンプト",
      "プロンプトの書き方のポイント",
      "業務別プロンプト活用例",
      "安心して利用するための注意点",
      "個人ワークとグループワーク",
      "成果発表・最新トピック"
    ],
    "prerequisite": "プログラミング知識不要"
  },
  {
    "id": "02",
    "title": "Microsoft 365 Copilot活用ワークショップ",
    "shortTitle": "Microsoft 365 Copilot活用",
    "category": "業務効率化",
    "track": "Business",
    "level": "入門",
    "platform": "Microsoft",
    "technicality": 1,
    "audience": [
      "ビジネス職",
      "非エンジニア",
      "M365利用企業"
    ],
    "tools": [
      "Microsoft 365 Copilot",
      "PC"
    ],
    "duration": "1Day・6時間",
    "format": "オンライン／オフライン",
    "summary": "Copilot Chat、リサーチ、ノートブック、Officeアプリ内Copilot、エージェント作成機能までを、実務目線で再現できる形に整理する講座。",
    "value": [
      "M365 Copilotの全体像を理解",
      "業務ごとの使い分けを習得",
      "再現可能なプロンプトの型を持ち帰り"
    ],
    "recommended": [
      "M365導入済み企業",
      "Office業務を効率化したい企業",
      "Copilotの定着率を上げたい企業"
    ],
    "goalTags": [
      "業務効率化",
      "Office活用",
      "M365定着"
    ],
    "schedule": [
      "Microsoft 365 Copilotの全体像",
      "Copilot Chat・リサーチ・ノートブック",
      "Officeアプリ内Copilot活用",
      "自社業務向けプロンプト作成",
      "エージェント作成機能で社内ナレッジ連携",
      "ワーク・成果発表"
    ],
    "prerequisite": "プログラミング知識不要。M365 Copilot利用環境推奨"
  },
  {
    "id": "03",
    "title": "Microsoft 365 Copilot／Copilot Studio 業務自動化とAIエージェント構築ワークショップ",
    "shortTitle": "M365 Copilot / Copilot Studio",
    "category": "AIエージェント",
    "track": "Business",
    "level": "中級",
    "platform": "Microsoft",
    "technicality": 2,
    "audience": [
      "DX推進",
      "ビジネス職",
      "M365利用企業"
    ],
    "tools": [
      "Microsoft 365 Copilot",
      "Copilot Studio",
      "PC"
    ],
    "duration": "1Day・6時間",
    "format": "オンライン／オフライン",
    "summary": "RAG型エージェント作成、Copilot Studioによるフロー・ツール作成まで踏み込む、Microsoft環境の上位講座。",
    "value": [
      "Copilot / Chat / Studioの役割分担を理解",
      "社内ナレッジを根拠に答えるエージェントを構築",
      "業務フロー自動化の入口を習得"
    ],
    "recommended": [
      "社内問い合わせ自動化を進めたい企業",
      "M365をAIエージェント化したい企業",
      "DX部門主導のPoC"
    ],
    "goalTags": [
      "AIエージェント",
      "RAG",
      "業務自動化"
    ],
    "schedule": [
      "ビジネス向けCopilot概要とAIエージェント",
      "Copilot Chatの活用",
      "M365 Copilotでのエージェント作成",
      "RAG型エージェントのミニワーク",
      "Copilot Studioによるフロー・ツール作成",
      "グループワーク・成果発表"
    ],
    "prerequisite": "M365利用企業向け。非エンジニア可"
  },
  {
    "id": "04",
    "title": "Google Workspace × Gemini 業務自動化とAIエージェント構築ワークショップ",
    "shortTitle": "Google Workspace × Gemini",
    "category": "AIエージェント",
    "track": "Business",
    "level": "中級",
    "platform": "Google",
    "technicality": 2,
    "audience": [
      "DX推進",
      "ビジネス職",
      "Google Workspace利用企業"
    ],
    "tools": [
      "Gemini",
      "Google Workspace",
      "PC"
    ],
    "duration": "1Day・6時間",
    "format": "オンライン／オフライン",
    "summary": "Gemini、Deep Research、Gems、NotebookLM、Canvas＋GAS連携まで含め、Google環境での業務自動化とAIエージェント構築を学ぶ講座。",
    "value": [
      "Google系AIサービスの役割分担を理解",
      "情報整理とプロンプト設計を実務に落とし込む",
      "GemsやNotebookLMを業務活用へ接続"
    ],
    "recommended": [
      "Google Workspace中心の企業",
      "Gmail/Docs/SheetsのAI活用を進めたい企業",
      "Googleで社内AIを作りたい企業"
    ],
    "goalTags": [
      "AIエージェント",
      "Google活用",
      "業務自動化"
    ],
    "schedule": [
      "Geminiと関連サービスの概要",
      "Google内情報をもとにした活用法",
      "Workspaceアプリ内Gemini活用",
      "Gems構築とナレッジ設計",
      "Canvas・NotebookLM",
      "AIエージェント構築ワーク"
    ],
    "prerequisite": "Google Workspace利用企業向け。非エンジニア可"
  },
  {
    "id": "05",
    "title": "Excel × AIエージェントによるデータ処理業務効率化ワークショップ",
    "shortTitle": "Excel × AIエージェント",
    "category": "業務効率化",
    "track": "Business",
    "level": "中級",
    "platform": "Mixed",
    "technicality": 2,
    "audience": [
      "現場担当",
      "ビジネス職",
      "非エンジニア"
    ],
    "tools": [
      "Excel",
      "ChatGPT/Gemini/M365 Copilot",
      "Python"
    ],
    "duration": "1Day・6時間",
    "format": "オンライン／オフライン",
    "summary": "Excel業務を軸に、AIに聞く・AIにアプリを作らせる・AIをエージェント化する、という3つの使い分けを習得する講座。",
    "value": [
      "Excel業務の効率化パターンを理解",
      "Vibe CodingやRAGの実務利用を整理",
      "業務改善の引き出しを増やす"
    ],
    "recommended": [
      "Excel業務が多い部門",
      "定型レポート作成を効率化したい企業",
      "現場改善テーマが多い企業"
    ],
    "goalTags": [
      "業務効率化",
      "Excel活用",
      "データ処理"
    ],
    "schedule": [
      "言語モデルとプロンプト",
      "生成AIと業務効率化の基礎",
      "生成AI成果物の活用",
      "Excelドキュメントを知識源にする方法",
      "Vibe Codingとアプリ利用",
      "リスクと対策"
    ],
    "prerequisite": "プログラミング知識不要。Excel業務経験があると効果大"
  },
  {
    "id": "06",
    "title": "データAIPM ワークショップ",
    "shortTitle": "データAIPM",
    "category": "企画・PM",
    "track": "Business",
    "level": "中級",
    "platform": "汎用生成AI",
    "technicality": 2,
    "audience": [
      "PM",
      "管理職",
      "DX推進",
      "経営企画"
    ],
    "tools": [
      "PC"
    ],
    "duration": "1Day・6時間",
    "format": "オンライン／オフライン",
    "summary": "AIの使いどころ、PoC設計、リスク対策、Go/No-Go判断までを整理し、自社のデータAIプロジェクト計画を作るPM向け講座。",
    "value": [
      "AIの種類と使い分けを理解",
      "プロジェクト企画立案力を獲得",
      "PoC評価と推進の実務観点を身につける"
    ],
    "recommended": [
      "DX企画部門",
      "AI導入テーマを選定したい企業",
      "経営判断の前段を整理したい企業"
    ],
    "goalTags": [
      "企画立案",
      "PoC",
      "AI導入判断"
    ],
    "schedule": [
      "データAIPMとは",
      "AIの種類と使い分け",
      "生成AIの概要・RAG・AIエージェント",
      "ケーススタディ",
      "データAIプロジェクト計画作成",
      "PoC計画作成と成果共有"
    ],
    "prerequisite": "プログラミング知識不要"
  },
  {
    "id": "07",
    "title": "Geminiで加速するアイデアの具現化 実践AIアプリ開発ワークショップ",
    "shortTitle": "Gemini実践AIアプリ開発",
    "category": "アプリ開発",
    "track": "Builder",
    "level": "中級",
    "platform": "Google",
    "technicality": 2,
    "audience": [
      "ビジネス職",
      "非エンジニア",
      "新規事業"
    ],
    "tools": [
      "Gemini Canvas",
      "Gem",
      "Google Workspace"
    ],
    "duration": "1Day・6時間",
    "format": "オンライン／オフライン",
    "summary": "Gemini CanvasによるAIプログラミングと、GemによるAIエージェント構築を通じて、AIを『使う』から『作る・組み込む』に進む講座。",
    "value": [
      "日本語指示でアプリ開発・保存・共有ができる",
      "AI機能をアプリへ組み込む考え方を理解",
      "Canvas / Gem / NotebookLM / 標準チャットの使い分けを習得"
    ],
    "recommended": [
      "ノーコード寄りで試作したい企業",
      "アイデアをすぐ形にしたい新規事業部門",
      "Google環境での内製を始めたい企業"
    ],
    "goalTags": [
      "アプリ開発",
      "AI機能組み込み",
      "プロトタイプ"
    ],
    "schedule": [
      "Canvasによるアプリ開発の基本",
      "Canvas応用とAI機能組み込み",
      "Gemの基本と作成",
      "Googleサービス連携",
      "独自ソリューションのグループワーク",
      "成果発表"
    ],
    "prerequisite": "プログラミング知識不要"
  },
  {
    "id": "08",
    "title": "Dify活用ワークショップ",
    "shortTitle": "Dify活用",
    "category": "アプリ開発",
    "track": "Builder",
    "level": "中級",
    "platform": "No-code",
    "technicality": 2,
    "audience": [
      "DX推進",
      "業務改善",
      "ビジネス職"
    ],
    "tools": [
      "Dify",
      "PC"
    ],
    "duration": "1Day・6時間",
    "format": "オンライン／オフライン",
    "summary": "Difyでチャットボット、RAG、画像認識、Web検索、外部連携などのアプリをノーコードで作り、自社向けソリューションまで企画する講座。",
    "value": [
      "ノーコードで生成AIアプリを開発",
      "価値の出るAIアプリの見極め力を獲得",
      "プロトタイプ開発と発表まで体験"
    ],
    "recommended": [
      "開発部隊が少ない企業",
      "PoCを高速に回したい企業",
      "DX部門で多様な業務課題を抱える企業"
    ],
    "goalTags": [
      "ノーコード",
      "RAG",
      "PoC"
    ],
    "schedule": [
      "生成AIを活用したシステムとは",
      "Dify入門と基本操作",
      "アイデアを形にする方法",
      "ケーススタディ",
      "独自ソリューション開発ワーク",
      "成果発表と実例共有"
    ],
    "prerequisite": "ChatGPT等の利用経験があると望ましい"
  },
  {
    "id": "09",
    "title": "AIコーディングエージェント Cursor入門ワークショップ",
    "shortTitle": "Cursor入門",
    "category": "開発者向け",
    "track": "Developer",
    "level": "中級",
    "platform": "Developer Tools",
    "technicality": 3,
    "audience": [
      "開発者",
      "技術企画",
      "AI導入検討者"
    ],
    "tools": [
      "Cursor",
      "Java",
      "PC"
    ],
    "duration": "1Day・6時間",
    "format": "オンライン／オフライン",
    "summary": "Tab補完、インライン編集、Composer Agent、Context、Cursorルール、MCP連携までを整理し、AIと協働する開発工程を体験する講座。",
    "value": [
      "Cursorの基本操作とベストプラクティスを習得",
      "要件定義からレビューまでの各フェーズで活用",
      "Context設定やMCP拡張まで理解"
    ],
    "recommended": [
      "開発生産性を上げたい企業",
      "Cursor導入を検討している企業",
      "AIコーディングの標準化を進めたい企業"
    ],
    "goalTags": [
      "開発生産性",
      "AIコーディング",
      "開発標準化"
    ],
    "schedule": [
      "AIエージェントとCursorの基本",
      "基本的な使い方",
      "個人ワークでアプリ作成",
      "Cursorベストプラクティス",
      "個人ワーク: システム開発",
      "成果発表・最新情報"
    ],
    "prerequisite": "生成AI基礎知識があると望ましい。Java事前準備あり"
  },
  {
    "id": "10",
    "title": "AIコーディングエージェント GitHub Copilot入門ワークショップ",
    "shortTitle": "GitHub Copilot入門",
    "category": "開発者向け",
    "track": "Developer",
    "level": "中級",
    "platform": "Developer Tools",
    "technicality": 3,
    "audience": [
      "開発者",
      "SE",
      "プログラマー"
    ],
    "tools": [
      "GitHub Copilot",
      "PC"
    ],
    "duration": "1Day・6時間",
    "format": "オンライン／オフライン",
    "summary": "コード補完やインラインチャットからAgentモード、MCP連携までを扱い、GitHub Copilotを開発工程の各フェーズで使いこなす講座。",
    "value": [
      "GitHub Copilotの基本操作を習得",
      "要件定義・設計・実装・テスト・レビューでの活用を整理",
      "設定・拡張やプロンプトのベストプラクティスを理解"
    ],
    "recommended": [
      "GitHub Copilot導入済み企業",
      "Pythonなどの基礎知識がある開発チーム",
      "生成AIで開発速度を上げたい企業"
    ],
    "goalTags": [
      "開発生産性",
      "AIコーディング",
      "レビュー効率化"
    ],
    "schedule": [
      "AIエージェントとは",
      "GitHub Copilotの基本",
      "基本的な使い方",
      "フェーズ別活用方法",
      "個人ワークとグループワーク",
      "成果発表"
    ],
    "prerequisite": "Python等のプログラミング基礎知識がある方推奨"
  },
  {
    "id": "11",
    "title": "AIコーディングエージェント Claude Code入門ワークショップ",
    "shortTitle": "Claude Code入門",
    "category": "開発者向け",
    "track": "Developer",
    "level": "中級",
    "platform": "Developer Tools",
    "technicality": 3,
    "audience": [
      "開発者",
      "技術企画",
      "AI導入検討者"
    ],
    "tools": [
      "Claude Code",
      "Java",
      "PC"
    ],
    "duration": "1Day・6時間",
    "format": "オンライン／オフライン",
    "summary": "ターミナル操作、対話的コード生成、レビュー、ファイル操作、CLAUDE.md、MCPサーバー連携まで扱うCLI型AIコーディング講座。",
    "value": [
      "Claude Codeの基本操作を習得",
      "開発各フェーズでの使い方を体系化",
      "CLI中心のAI開発フローを理解"
    ],
    "recommended": [
      "CLI中心でAI活用したい開発組織",
      "Claude Code導入検討企業",
      "MCP連携を含めた高度活用をしたい企業"
    ],
    "goalTags": [
      "開発生産性",
      "CLI活用",
      "AIコーディング"
    ],
    "schedule": [
      "AIエージェントとClaude Codeの基本",
      "ターミナル操作・対話モード・スラッシュコマンド",
      "個人ワークでアプリ作成",
      "業務活用ベストプラクティス",
      "個人ワーク: システム開発",
      "成果発表・最新情報"
    ],
    "prerequisite": "生成AI基礎知識があると望ましい。Java事前準備あり"
  },
  {
    "id": "12",
    "title": "GitHub Copilotによる仕様駆動開発（SDD）の実践ワークショップ",
    "shortTitle": "GitHub Copilot × SDD",
    "category": "開発プロセス",
    "track": "Developer",
    "level": "上級",
    "platform": "Developer Tools",
    "technicality": 3,
    "audience": [
      "PM",
      "テックリード",
      "開発者"
    ],
    "tools": [
      "GitHub Copilot",
      "Spec Kit",
      "PC"
    ],
    "duration": "1Day・6時間",
    "format": "オンライン／オフライン",
    "summary": "仕様作成→設計計画→タスク分解→実装の4フェーズを、GitHub CopilotとSpec Kitで進める仕様駆動開発の実践講座。",
    "value": [
      "SDDの考え方と実践方法を理解",
      "仕様書を軸にAIと協働するノウハウを獲得",
      "AIに正確に意図を伝える設計力を強化"
    ],
    "recommended": [
      "品質と再現性を高めたい企業",
      "チーム開発を標準化したい企業",
      "仕様不明確がボトルネックの開発組織"
    ],
    "goalTags": [
      "仕様駆動",
      "開発プロセス",
      "品質向上"
    ],
    "schedule": [
      "まずはノリでAIと開発してみる",
      "SDDとは",
      "GitHub Copilotについて",
      "TODOアプリで体験",
      "課題と対策・ベストプラクティス",
      "ミニECサイトで実践"
    ],
    "prerequisite": "Pythonなどの基本的なプログラミング経験が望ましい"
  },
  {
    "id": "13",
    "title": "PythonとLangChain/LangGraphによるAIエージェント構築ワークショップ",
    "shortTitle": "Python × LangChain / LangGraph",
    "category": "AI実装",
    "track": "Developer",
    "level": "上級",
    "platform": "Developer Tools",
    "technicality": 3,
    "audience": [
      "開発者",
      "PM",
      "テックリード"
    ],
    "tools": [
      "Python",
      "LangChain",
      "LangGraph",
      "OpenAI API"
    ],
    "duration": "1Day・6時間",
    "format": "オンライン／オフライン",
    "summary": "LLMプログラミング、チェーンによるワークフロー構築、AIエージェント実装を3フェーズで学び、実装内製化に踏み込む講座。",
    "value": [
      "LangChain/LangGraphによるワークフロー・エージェント構築",
      "Web検索連携やHuman-in-the-Loopなど実践パターンを習得",
      "LangFuseやMCP、デプロイ観点まで俯瞰"
    ],
    "recommended": [
      "AIエージェントを内製したい企業",
      "技術選定まで含めて理解したい企業",
      "プロダクトへの実装を見据える企業"
    ],
    "goalTags": [
      "AI実装",
      "LangGraph",
      "内製化"
    ],
    "schedule": [
      "AIエージェントとは",
      "LLMプログラミングの基本",
      "LangChain入門",
      "LangChain応用",
      "LangGraph入門と実装ワーク",
      "LangFuse入門・関連トピック"
    ],
    "prerequisite": "Pythonの基本文法と生成AIの基礎知識があると望ましい"
  }
];
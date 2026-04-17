# Embex Education 講座ライブラリーアプリ

Embex Educationが顧客企業へ生成AI研修を提案する際に、講座を体系的・視覚的に比較しやすくするための静的Webアプリです。

## この完成版で入れた強化ポイント

1. **PDF記載の各講座説明をより忠実に反映**
   - 13講座それぞれに、概要・対象者・主要ツール・ゴール・推奨企業像・主なプログラム要素を整理して実装しています。
2. **おすすめ講座診断を追加**
   - 利用基盤、受講者、導入目的、希望難易度から推奨上位講座を表示します。
3. **公開用ファイル一式に整備**
   - ビルド不要の静的HTML/CSS/JS構成です。GitHub Pagesへそのまま配置できます。

## ファイル構成

```text
embex-course-library/
├─ index.html
├─ styles.css
├─ courses.js
├─ app.js
├─ README.md
└─ .nojekyll
```

## 使い方

### ローカルで確認

1. この一式を同じフォルダに置く
2. `index.html` をブラウザで開く

ローカルでもそのまま動きます。

### GitHub Pagesで公開

#### いちばん簡単な方法

1. GitHubで新しいリポジトリを作成
2. このファイル一式を**リポジトリ直下**にアップロード
3. GitHubの `Settings` → `Pages` を開く
4. `Build and deployment` の `Source` を **Deploy from a branch** にする
5. `Branch` を **main**、フォルダを **/(root)** にする
6. 保存する
7. 数分待つと公開URLが発行される

#### ファイルツリーの置き方

```text
your-repository/
├─ index.html
├─ styles.css
├─ courses.js
├─ app.js
├─ README.md
└─ .nojekyll
```

## 公開時の注意

- `index.html` は必ず**リポジトリ直下**に置いてください。
- `.nojekyll` を入れているので、GitHub Pagesの不要なJekyll処理を回避できます。
- このアプリはCDN画像や外部ビルドに依存していないため、公開トラブルが起きにくい構成です。

## カスタマイズしやすい箇所

### 講座データを編集したい場合

`courses.js` の `COURSES` 配列を編集してください。

### 色やデザインを変えたい場合

`styles.css` の以下を中心に調整します。

- `:root` の色変数
- `.hero-copy`
- `.card`
- `.badge`
- `.btn`

### 提案メモの文面を変えたい場合

`app.js` 内の `buildProposalText()` を編集してください。

## 想定利用シーン

- 営業担当が商談で講座候補を絞り込む
- 顧客企業が講座を比較して選定する
- DX推進部門向け、非エンジニア向け、開発者向けで導線を分けて提案する
- 研修提案資料の前段ヒアリング補助として使う

## 補足

今回の構成は、**ReactやNode環境なし**で動作するようにしています。GitHub Pages公開を最優先にしたためです。
必要なら次段階として、以下も追加できます。

- 顧客企業ロゴ差し替え
- 問い合わせフォーム連携
- PDFダウンロード導線
- 顧客別の提案シナリオ保存
- 管理画面から講座データ更新

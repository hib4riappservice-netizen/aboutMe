# HIB4RI LP

開発サイトをまとめて紹介するための、静的HTML/CSS/JSのランディングページです。
ビルド不要。ブラウザで `index.html` を開くだけで確認できます。

## 構成

- `index.html` — ページ構造
- `style.css` — デザイン（水色〜紫の水彩調グラデーション + 濃紺バー）
- `data.js` — **編集するのはほぼここだけ**。プロフィール情報と開発サイト一覧
- `script.js` — `data.js` の内容を画面に描画するロジック
- `assets/avatar-placeholder.svg` — アイコンの仮画像（差し替えてください）
- `assets/sites/placeholder.svg` — サイトロゴの仮画像（差し替えてください）

## 内容を編集する

`data.js` を開いて書き換えてください。

```js
const PROFILE = {
  name: "HIB4RI",
  tagline: "アプリ開発サービス",
  bio: "自己紹介文...",
  avatar: "assets/avatar-placeholder.svg", // 自分のアイコン画像パスに差し替え
  social: [
    { label: "X", url: "https://x.com/your_id", icon: "x" },
  ],
};
```

## サイトを追加する

`SITES` 配列にオブジェクトを1つ追加するだけです（順番は上から表示されます）。

```js
const SITES = [
  {
    name: "サービス名",
    category: "カテゴリ",
    description: "一言説明",
    url: "https://example.com",
    image: "assets/sites/your-logo.png",
  },
  // 増えたらここに追記していくだけでOK
];
```

各カードにはスクリーンショットではなく**サービスロゴ**を表示します（青〜紫のグラデーションタイル上に余白付きで自動配置されるので、白背景のない透過PNGでも問題ありません）。ロゴ画像は `assets/sites/` に置いて、`image` にそのパスを指定してください。

## 公開方法（例）

どれも無料でOK、GitHubリポジトリを作ってpushするだけで公開できます。

- **GitHub Pages**: リポジトリの Settings → Pages で公開
- **Netlify / Vercel**: リポジトリを連携するだけで自動デプロイ

公開後のURLをXのプロフィールのリンク欄に貼れば完了です。

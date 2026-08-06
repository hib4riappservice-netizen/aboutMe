// ここを編集してプロフィール情報・開発サイト情報を更新してください。
// サイトを追加したいときは SITES 配列に要素を1つ追加するだけでOKです。

const PROFILE = {
  name: "HIB4RI",
  tagline: "アプリ開発サービス",
  bio: "誰かの「困った」を解決したい ――― そんな思いで個人開発をしています。",
  avatar: "assets/avatar.png",
  social: [
    {
      label: "X",
      url: "https://x.com/hib4ri_app",
      icon: "x",
    },
  ],
};

// name        : サービス名
// category    : カテゴリ（例: "ツール", "ゲーム", "SNS" など）
// description : 一言説明
// url         : サービスへの遷移リンク
// image       : サービスロゴ画像パス（透過PNG推奨。カード内で自動的に余白付き表示されます）
const SITES = [
  {
    name: "ワダイの戸棚",
    category: "配信",
    description:
      "配信者の「話したいのに話せない」を解決するための話題管理サービス。",
    url: "https://www.wadai-no-todana.com/",
    image: "assets/logo.png",
  },
];

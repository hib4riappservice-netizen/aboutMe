// ここを編集してプロフィール情報・開発サイト情報を更新してください。
// サイトを追加したいときは SITES 配列に要素を1つ追加するだけでOKです。

const PROFILE = {
  name: "HIB4RI",
  tagline: "アプリ開発サービス",
  bio: '誰かの「困った」を解決したい ―――<br class="bio-break">そんな思いで個人開発をしています。',
  avatar: "assets/avatar.png",
  social: [
    {
      label: "X",
      url: "https://x.com/hib4ri_app",
      icon: "x",
    },
    {
      label: "SPOON",
      url: "https://www.spooncast.net/jp/@hib4ri?utm_source=spoon_share&utm_medium=referral&utm_campaign=profile_share&utm_content=317825027&utm_term=317825027&ts=1786022145472",
      icon: "spoon",
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
    image: "assets/wadai-no-todana-logo.png",
  },
  {
    name: "タスクノート",
    category: "ツール",
    description: "シンプルに使えるタスク管理アプリ（ダミー）。",
    url: "https://example.com/",
    image: "assets/sites/placeholder.svg",
  },
  {
    name: "ポモッコ",
    category: "生産性",
    description: "ポモドーロタイマーで集中をサポート（ダミー）。",
    url: "https://example.com/",
    image: "assets/sites/placeholder.svg",
  },
  {
    name: "レシピポン",
    category: "生活",
    description: "冷蔵庫の残り物からレシピを提案（ダミー）。",
    url: "https://example.com/",
    image: "assets/sites/placeholder.svg",
  },
  {
    name: "ヨミトル",
    category: "教育",
    description: "読書記録と感想を残せるミニアプリ（ダミー）。",
    url: "https://example.com/",
    image: "assets/sites/placeholder.svg",
  },
  {
    name: "オトタビ",
    category: "音楽",
    description: "旅の思い出に音楽でしおりを作るサービス（ダミー）。",
    url: "https://example.com/",
    image: "assets/sites/placeholder.svg",
  },
  {
    name: "カケイボAI",
    category: "金融",
    description: "AIが家計簿を自動で分類・提案（ダミー）。",
    url: "https://example.com/",
    image: "assets/sites/placeholder.svg",
  },
  {
    name: "ネムログ",
    category: "健康",
    description: "睡眠の質を記録して振り返れるアプリ（ダミー）。",
    url: "https://example.com/",
    image: "assets/sites/placeholder.svg",
  },
  {
    name: "コトバコ",
    category: "SNS",
    description: "短い言葉だけでつながる小さなSNS（ダミー）。",
    url: "https://example.com/",
    image: "assets/sites/placeholder.svg",
  },
  {
    name: "シャシンビン",
    category: "写真",
    description: "写真をテーマ別に自動整理するツール（ダミー）。",
    url: "https://example.com/",
    image: "assets/sites/placeholder.svg",
  },
  {
    name: "ミチクサ",
    category: "ゲーム",
    description: "街を歩いて探索するのんびり系ゲーム（ダミー）。",
    url: "https://example.com/",
    image: "assets/sites/placeholder.svg",
  },
];

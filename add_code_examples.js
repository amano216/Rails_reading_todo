// Script to add code examples to questions
const codeExamples = {
  // 超初級 (1-20) - 10 code examples
  2: {
    question: "次のコマンドは何をしますか？",
    code: "rails new blog_app",
    options: [
      "新しいRailsアプリケーション'blog_app'を作成",
      "Railsをインストール",
      "サーバーを起動",
      "データベースを作成"
    ],
    explanation: "rails newコマンドは指定した名前で新しいRailsアプリケーションを作成します。"
  },
  4: {
    question: "次のコマンドの実行結果は？",
    code: "rails server",
    options: [
      "開発用サーバーをポート3000で起動",
      "本番サーバーにデプロイ",
      "サーバーを停止",
      "サーバーを再起動"
    ],
    explanation: "rails serverは開発用サーバーを起動し、デフォルトでhttp://localhost:3000でアクセスできます。"
  },
  6: {
    question: "次のコードはMVCのどの部分？",
    code: "class User < ApplicationRecord\n  validates :email, presence: true\nend",
    options: [
      "Model（モデル）",
      "View（ビュー）",
      "Controller（コントローラー）",
      "Routes（ルート）"
    ],
    explanation: "ApplicationRecordを継承したクラスはModelです。データとビジネスロジックを扱います。"
  },
  8: {
    question: "次のコードはMVCのどの部分？",
    code: "class PostsController < ApplicationController\n  def show\n    @post = Post.find(params[:id])\n  end\nend",
    options: [
      "Controller（コントローラー）",
      "Model（モデル）",
      "View（ビュー）",
      "Helper（ヘルパー）"
    ],
    explanation: "ApplicationControllerを継承したクラスはControllerで、リクエストを処理します。"
  },
  10: {
    question: "次のコマンドは何を生成しますか？",
    code: "rails generate scaffold Article title:string content:text",
    options: [
      "Article用の完全なCRUD機能一式",
      "Articleモデルのみ",
      "Articleコントローラーのみ",
      "Articleビューのみ"
    ],
    explanation: "scaffoldはModel、Controller、View、Migration等のCRUD機能一式を生成します。"
  },
  12: {
    question: "次のコードの実行環境を確認する方法は？",
    code: "Rails.env",
    options: [
      "現在のRails実行環境を文字列で返す",
      "環境変数を全て表示",
      "Railsのバージョンを表示",
      "Rubyのバージョンを表示"
    ],
    explanation: "Rails.envは現在の実行環境（development/test/production）を返します。"
  },
  14: {
    question: "次のエラーの原因は？",
    code: "NoMethodError: undefined method `name' for nil:NilClass",
    options: [
      "nilオブジェクトに対してnameメソッドを呼んでいる",
      "nameメソッドが定義されていない",
      "構文エラー",
      "データベース接続エラー"
    ],
    explanation: "nilオブジェクトに対してメソッドを呼ぶとNoMethodErrorが発生します。"
  },
  16: {
    question: "次のERBコードの出力は？",
    code: "<h1><%= @title %></h1>",
    options: [
      "@titleの値をh1タグで表示",
      "コードをそのまま表示",
      "何も表示しない",
      "エラーが発生"
    ],
    explanation: "<%= %>はRubyコードを実行し、結果をHTMLに出力します。"
  },
  18: {
    question: "次のRubyコードの出力は？",
    code: "3.times { puts 'Rails' }",
    options: [
      "Railsを3回出力",
      "Railsを1回出力",
      "3を出力",
      "エラーが発生"
    ],
    explanation: "timesメソッドは指定回数だけブロックを実行します。"
  },
  20: {
    question: "次のコードは何をログに記録しますか？",
    code: "Rails.logger.info 'Processing payment for order #123'",
    options: [
      "INFOレベルでメッセージをログに記録",
      "エラーメッセージを記録",
      "デバッグメッセージを記録",
      "警告メッセージを記録"
    ],
    explanation: "Rails.logger.infoは情報レベルのメッセージをログファイルに記録します。"
  },

  // 初級 (21-60) - 20 code examples
  22: {
    question: "次のコマンドで生成されるファイルは？",
    code: "rails generate model User name:string email:string",
    options: [
      "Userモデルとマイグレーションファイル",
      "Userコントローラーのみ",
      "Userビューのみ",
      "User用のルーティング"
    ],
    explanation: "rails generate modelはモデルクラスとデータベースマイグレーションファイルを生成します。"
  },
  24: {
    question: "次のバリデーションの意味は？",
    code: "validates :title, presence: true, length: { maximum: 100 }",
    options: [
      "titleは必須で最大100文字",
      "titleは任意で最大100文字",
      "titleは必須で最小100文字",
      "titleは100文字固定"
    ],
    explanation: "presence: trueで必須、length: { maximum: 100 }で最大文字数を指定します。"
  },
  26: {
    question: "次のコードで@userに何が代入される？",
    code: "def show\n  @user = User.find(params[:id])\nend",
    options: [
      "指定されたIDのUserレコード",
      "全てのUserレコード",
      "最初のUserレコード",
      "最後のUserレコード"
    ],
    explanation: "findメソッドは指定されたIDに対応するレコードを1件取得します。"
  },
  28: {
    question: "次のERBコードの<% %>と<%= %>の違いは？",
    code: "<% if @user %>\n  <%= @user.name %>\n<% end %>",
    options: [
      "<% %>は実行のみ、<%= %>は実行して出力",
      "両方とも同じ",
      "<%= %>は実行のみ、<% %>は出力",
      "どちらも出力する"
    ],
    explanation: "<% %>はRubyコードを実行、<%= %>は実行結果を出力します。"
  },
  30: {
    question: "次のルート定義で生成されるパスは？",
    code: "resources :articles",
    options: [
      "articles用の7つのRESTfulルート",
      "articlesという1つのルート",
      "indexルートのみ",
      "showルートのみ"
    ],
    explanation: "resourcesは7つのRESTfulアクション（index, show, new, create, edit, update, destroy）のルートを生成します。"
  },
  32: {
    question: "次のマイグレーションは何をする？",
    code: "class CreatePosts < ActiveRecord::Migration[7.0]\n  def change\n    create_table :posts do |t|\n      t.string :title\n      t.text :content\n      t.timestamps\n    end\n  end\nend",
    options: [
      "postsテーブルを作成",
      "postsテーブルを削除",
      "postsテーブルを更新",
      "postsテーブルの名前を変更"
    ],
    explanation: "create_tableメソッドは新しいデータベーステーブルを作成します。"
  },
  34: {
    question: "次のコードでの@postsの内容は？",
    code: "@posts = Post.where(published: true).order(created_at: :desc)",
    options: [
      "公開済みの投稿を作成日時の降順で取得",
      "全ての投稿を取得",
      "未公開の投稿を取得",
      "削除された投稿を取得"
    ],
    explanation: "whereで条件絞り込み、orderで並び替えを行います。:descは降順です。"
  },
  36: {
    question: "次のフォームヘルパーは何を生成？",
    code: "<%= form_with model: @user do |form| %>\n  <%= form.text_field :name %>\n<% end %>",
    options: [
      "Userモデル用のフォームとnameテキストフィールド",
      "検索フォーム",
      "ログインフォーム",
      "削除確認フォーム"
    ],
    explanation: "form_withはモデルに基づいたフォームを生成し、text_fieldはテキスト入力欄を作成します。"
  },
  38: {
    question: "次のStrong Parametersの役割は？",
    code: "def user_params\n  params.require(:user).permit(:name, :email)\nend",
    options: [
      "許可されたパラメータのみを受け取る",
      "全てのパラメータを受け取る",
      "パラメータを拒否する",
      "パラメータを暗号化する"
    ],
    explanation: "Strong Parametersは許可された属性のみを受け取り、セキュリティを向上させます。"
  },
  40: {
    question: "次のコールバックはいつ実行される？",
    code: "class User < ApplicationRecord\n  before_save :downcase_email\nend",
    options: [
      "レコード保存前",
      "レコード保存後",
      "レコード削除前",
      "レコード読込時"
    ],
    explanation: "before_saveコールバックはレコードがデータベースに保存される直前に実行されます。"
  },
  42: {
    question: "次のアソシエーションの意味は？",
    code: "class Post < ApplicationRecord\n  belongs_to :user\n  has_many :comments\nend",
    options: [
      "投稿は1人のユーザーに属し、複数のコメントを持つ",
      "投稿は複数のユーザーを持つ",
      "投稿はコメントに属する",
      "投稿はユーザーを持たない"
    ],
    explanation: "belongs_toは1対多の「多」側、has_manyは1対多の「1」側の関係を定義します。"
  },
  44: {
    question: "次のヘルパーメソッドが生成するものは？",
    code: "<%= link_to 'Edit', edit_post_path(@post) %>",
    options: [
      "投稿編集ページへのリンク",
      "新規投稿ページへのリンク",
      "投稿一覧へのリンク",
      "投稿削除リンク"
    ],
    explanation: "link_toはHTMLのaタグを生成し、edit_post_pathは編集ページのURLを生成します。"
  },
  46: {
    question: "次のコードの@userの状態は？",
    code: "@user = User.new(name: 'Alice', email: 'alice@example.com')",
    options: [
      "メモリ上に作成されたが、DBには保存されていない",
      "データベースに保存済み",
      "削除された",
      "更新された"
    ],
    explanation: "newメソッドはオブジェクトをメモリ上に作成しますが、データベースには保存しません。"
  },
  48: {
    question: "次のコードでデータベースに保存するには？",
    code: "@post = Post.new(title: 'Hello', content: 'World')\n# ？",
    options: [
      "@post.save",
      "@post.new",
      "@post.delete",
      "@post.find"
    ],
    explanation: "saveメソッドでオブジェクトをデータベースに保存します。"
  },
  50: {
    question: "次のリダイレクトの動作は？",
    code: "redirect_to root_path",
    options: [
      "ルートURLにリダイレクト",
      "前のページに戻る",
      "エラーページに移動",
      "ログインページに移動"
    ],
    explanation: "redirect_toは指定したパスにHTTPリダイレクトを実行します。"
  },
  52: {
    question: "次のflashメッセージはいつ表示される？",
    code: "flash[:notice] = 'Successfully created!'",
    options: [
      "次のリクエストで1回だけ",
      "永続的に表示",
      "現在のリクエストのみ",
      "表示されない"
    ],
    explanation: "flashメッセージは次のリクエストで1回だけ表示される一時的なメッセージです。"
  },
  54: {
    question: "次のセッションコードの動作は？",
    code: "session[:user_id] = @user.id",
    options: [
      "ユーザーIDをセッションに保存",
      "ユーザーをログアウト",
      "セッションを削除",
      "クッキーを削除"
    ],
    explanation: "sessionハッシュを使ってユーザー情報をセッションに保存し、ログイン状態を維持します。"
  },
  56: {
    question: "次のGemfileの記述は何を意味する？",
    code: "gem 'devise', '~> 4.9'",
    options: [
      "deviseのバージョン4.9.x系を使用",
      "deviseのバージョン4.9のみ使用",
      "deviseの最新版を使用",
      "deviseのバージョン4以上を使用"
    ],
    explanation: "~>は指定バージョン以上で、次のメジャーバージョン未満を意味します。"
  },
  58: {
    question: "次のコードで確認できる環境は？",
    code: "if Rails.env.production?\n  # 本番環境の処理\nend",
    options: [
      "本番環境かどうかをチェック",
      "開発環境かどうかをチェック",
      "テスト環境かどうかをチェック",
      "全ての環境で実行"
    ],
    explanation: "Rails.env.production?は現在の環境が本番環境かをtrue/falseで返します。"
  },
  60: {
    question: "次のStrong Parametersでネストした属性を許可するには？",
    code: "params.require(:post).permit(:title, :content, # ?)",
    options: [
      "comments_attributes: [:id, :content]",
      "comments: [:id, :content]",
      "[:comments][:id, :content]",
      "comments.id, comments.content"
    ],
    explanation: "ネストした属性は_attributesをつけてハッシュで許可します。"
  },

  // 中級 (61-120) - 30 code examples
  62: {
    question: "次のスコープの定義は何を返す？",
    code: "scope :published, -> { where(status: 'published').order(created_at: :desc) }",
    options: [
      "公開済みの記事を新しい順で",
      "下書きの記事",
      "削除済みの記事",
      "全ての記事"
    ],
    explanation: "スコープは再利用可能なクエリを定義します。->はラムダ式です。"
  },
  65: {
    question: "次のN+1問題を解決する方法は？",
    code: "@posts = Post.all\n@posts.each { |post| puts post.user.name }",
    options: [
      "Post.includes(:user)",
      "Post.joins(:user)",
      "Post.where(user: true)",
      "Post.find_by_user"
    ],
    explanation: "includesメソッドは関連データを事前読み込みしてN+1問題を解決します。"
  },
  68: {
    question: "次のトランザクションの動作は？",
    code: "ActiveRecord::Base.transaction do\n  @user.save!\n  @profile.save!\nend",
    options: [
      "両方成功または両方失敗",
      "個別に保存",
      "最初だけ保存",
      "最後だけ保存"
    ],
    explanation: "トランザクションは全ての操作が成功するか、全て失敗するかを保証します。"
  },
  71: {
    question: "次のカスタムバリデーターの実装で正しいのは？",
    code: "validate :end_date_after_start_date\n\ndef end_date_after_start_date\n  # ?\nend",
    options: [
      "errors.add(:end_date, 'must be after start date') if end_date <= start_date",
      "return false if end_date <= start_date",
      "raise 'Invalid date' if end_date <= start_date",
      "end_date > start_date"
    ],
    explanation: "カスタムバリデーションではerrors.addでエラーメッセージを追加します。"
  },
  74: {
    question: "次のActive Jobの実行タイミングは？",
    code: "UserMailer.welcome(@user).deliver_later",
    options: [
      "非同期でバックグラウンド実行",
      "即座に同期実行",
      "5分後に実行",
      "実行されない"
    ],
    explanation: "deliver_laterはメール送信をバックグラウンドジョブとして非同期実行します。"
  },
  77: {
    question: "次のコンサーンの使い方は？",
    code: "module Trackable\n  extend ActiveSupport::Concern\n  \n  included do\n    before_save :set_tracked_at\n  end\nend",
    options: [
      "モデルに共通機能を追加するモジュール",
      "コントローラー専用",
      "ビュー専用",
      "ルーティング専用"
    ],
    explanation: "Concernは複数のモデルで共有する機能をモジュール化する仕組みです。"
  },
  80: {
    question: "次のキャッシュの有効期限は？",
    code: "Rails.cache.fetch('user_count', expires_in: 1.hour) do\n  User.count\nend",
    options: [
      "1時間",
      "1分",
      "1日",
      "無期限"
    ],
    explanation: "expires_in: 1.hourでキャッシュの有効期限を1時間に設定します。"
  },
  83: {
    question: "次のActive Storageコードの動作は？",
    code: "@user.avatar.attach(params[:avatar])",
    options: [
      "アバター画像をユーザーに添付",
      "アバター画像を削除",
      "アバター画像をダウンロード",
      "アバター画像を表示"
    ],
    explanation: "attachメソッドはActive Storageを使ってファイルをモデルに添付します。"
  },
  86: {
    question: "次のWebSocketコードは何を行う？",
    code: "ActionCable.server.broadcast('chat_channel', message: 'Hello')",
    options: [
      "chat_channelの全購読者にメッセージ送信",
      "特定ユーザーにメッセージ送信",
      "メッセージを受信",
      "チャンネルを作成"
    ],
    explanation: "broadcastは指定チャンネルの全購読者にリアルタイムでメッセージを送信します。"
  },
  89: {
    question: "次のRack middlewareの役割は？",
    code: "config.middleware.use Rack::Attack",
    options: [
      "リクエストのレート制限とブロック",
      "ファイルアップロード",
      "データベース接続",
      "ビューのレンダリング"
    ],
    explanation: "Rack::Attackは悪意のあるリクエストをブロックするミドルウェアです。"
  },
  92: {
    question: "次のサービスオブジェクトパターンの利点は？",
    code: "class CreateOrder\n  def initialize(user, params)\n    @user = user\n    @params = params\n  end\n  \n  def call\n    # ビジネスロジック\n  end\nend",
    options: [
      "複雑なビジネスロジックをカプセル化",
      "データベース速度向上",
      "ビューの簡略化",
      "ルーティングの改善"
    ],
    explanation: "サービスオブジェクトは複雑なビジネスロジックをモデルから分離します。"
  },
  95: {
    question: "次のデコレーターパターンの用途は？",
    code: "class UserDecorator < SimpleDelegator\n  def full_name\n    \"#{first_name} #{last_name}\"\n  end\nend",
    options: [
      "プレゼンテーション層のロジックを分離",
      "データベースアクセス",
      "バリデーション追加",
      "ルーティング定義"
    ],
    explanation: "デコレーターはビューに関するロジックをモデルから分離します。"
  },
  98: {
    question: "次のポリシーオブジェクトの役割は？",
    code: "class PostPolicy\n  def initialize(user, post)\n    @user = user\n    @post = post\n  end\n  \n  def update?\n    @user == @post.author || @user.admin?\n  end\nend",
    options: [
      "認可ロジックの管理",
      "認証処理",
      "データ検証",
      "ルート定義"
    ],
    explanation: "ポリシーオブジェクトは「誰が何をできるか」という認可ロジックを管理します。"
  },
  101: {
    question: "次のフォームオブジェクトの利点は？",
    code: "class RegistrationForm\n  include ActiveModel::Model\n  \n  attr_accessor :email, :password, :terms_accepted\n  \n  validates :terms_accepted, acceptance: true\nend",
    options: [
      "複数モデルにまたがるフォームロジックの管理",
      "データベース高速化",
      "ビューの自動生成",
      "ルーティング簡略化"
    ],
    explanation: "フォームオブジェクトは複雑なフォームロジックをモデルから分離します。"
  },
  104: {
    question: "次のクエリオブジェクトの目的は？",
    code: "class RecentPublishedPosts\n  def self.call(limit: 10)\n    Post.published\n        .where('created_at > ?', 1.week.ago)\n        .order(created_at: :desc)\n        .limit(limit)\n  end\nend",
    options: [
      "複雑なクエリロジックの再利用",
      "ビューの生成",
      "コントローラーの作成",
      "ルーティング設定"
    ],
    explanation: "クエリオブジェクトは複雑なデータベースクエリを整理・再利用可能にします。"
  },
  107: {
    question: "次のレスポンダーの動作は？",
    code: "respond_to do |format|\n  format.html { redirect_to @post }\n  format.json { render json: @post }\nend",
    options: [
      "リクエスト形式に応じて異なるレスポンスを返す",
      "全て同じレスポンス",
      "HTMLのみ返す",
      "JSONのみ返す"
    ],
    explanation: "respond_toはリクエストのフォーマットに応じて適切なレスポンスを返します。"
  },
  110: {
    question: "次のETAGの役割は？",
    code: "fresh_when(etag: @post, last_modified: @post.updated_at)",
    options: [
      "条件付きGETでキャッシュ制御",
      "データの暗号化",
      "認証トークン",
      "セッション管理"
    ],
    explanation: "ETAGは変更がない場合に304 Not Modifiedを返してパフォーマンスを向上させます。"
  },
  113: {
    question: "次のバッチ処理の利点は？",
    code: "User.find_each(batch_size: 1000) do |user|\n  NewsMailer.weekly(user).deliver_later\nend",
    options: [
      "メモリ効率的に大量データを処理",
      "処理速度の向上",
      "データベース容量削減",
      "エラー防止"
    ],
    explanation: "find_eachは大量レコードをバッチで処理し、メモリ使用量を抑えます。"
  },
  116: {
    question: "次のインデックスの効果は？",
    code: "add_index :posts, [:user_id, :created_at]",
    options: [
      "user_idとcreated_atでの検索を高速化",
      "データ挿入を高速化",
      "データ削除を高速化",
      "テーブルサイズ削減"
    ],
    explanation: "複合インデックスは複数カラムでの検索やソートを高速化します。"
  },
  119: {
    question: "次のカウンターキャッシュの動作は？",
    code: "class Comment < ApplicationRecord\n  belongs_to :post, counter_cache: true\nend",
    options: [
      "投稿のコメント数を自動で更新",
      "コメント数を毎回計算",
      "コメントを削除",
      "コメントをキャッシュ"
    ],
    explanation: "counter_cacheは関連レコード数をカラムに保存してCOUNTクエリを避けます。"
  }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = codeExamples;
}
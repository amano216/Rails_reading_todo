const questions = [
    // 初級問題 (1-35)
    {
        id: 1,
        level: "初級",
        category: "基本概念",
        question: "Ruby on Railsの基本原則「DRY」は何の略ですか？",
        options: [
            "Don't Repeat Yourself",
            "Do Repeat Yourself", 
            "Data Repository Yield",
            "Dynamic Ruby Yield"
        ],
        correct: 0,
        explanation: "DRYは「Don't Repeat Yourself」の略で、コードの重複を避ける原則です。"
    },
    {
        id: 2,
        level: "初級",
        category: "MVC",
        question: "MVCパターンで、ユーザーインターフェースを担当するのはどれですか？",
        options: ["Model", "View", "Controller", "Router"],
        correct: 1,
        explanation: "Viewはユーザーインターフェース（UI）を担当し、HTMLやERBテンプレートなどで構成されます。"
    },
    {
        id: 3,
        level: "初級",
        category: "基本概念",
        question: "Railsの設定より規約（Convention over Configuration）の利点は何ですか？",
        options: [
            "設定ファイルが多くなる",
            "開発速度が向上する",
            "カスタマイズが難しくなる",
            "メモリ使用量が増える"
        ],
        correct: 1,
        explanation: "規約に従うことで設定を最小限にし、開発速度を向上させることができます。"
    },
    {
        id: 4,
        level: "初級",
        category: "コマンド",
        question: "新しいRailsアプリケーションを作成するコマンドはどれですか？",
        options: [
            "rails new app_name",
            "rails create app_name",
            "rails init app_name",
            "rails start app_name"
        ],
        correct: 0,
        explanation: "rails new app_nameコマンドで新しいRailsアプリケーションを作成できます。"
    },
    {
        id: 5,
        level: "初級",
        category: "MVC",
        question: "Railsでデータベースとのやり取りを担当するのは？",
        options: ["View", "Controller", "Model", "Helper"],
        correct: 2,
        explanation: "Modelがデータベースとのやり取りやビジネスロジックを担当します。"
    },
    {
        id: 6,
        level: "初級",
        category: "ルーティング",
        question: "config/routes.rbファイルの役割は何ですか？",
        options: [
            "データベース設定",
            "URLとコントローラーアクションのマッピング",
            "ビューテンプレートの設定",
            "gemの管理"
        ],
        correct: 1,
        explanation: "routes.rbはURLパスとコントローラーのアクションをマッピングする設定ファイルです。"
    },
    {
        id: 7,
        level: "初級",
        category: "データベース",
        question: "Railsでデータベースのスキーマを変更するファイルを何と呼びますか？",
        options: ["Schema", "Migration", "Seed", "Structure"],
        correct: 1,
        explanation: "Migrationファイルを使ってデータベースのスキーマを段階的に変更できます。"
    },
    {
        id: 8,
        level: "初級",
        category: "コマンド",
        question: "Railsサーバーを起動するコマンドは？",
        options: [
            "rails start",
            "rails run",
            "rails server",
            "rails serve"
        ],
        correct: 2,
        explanation: "rails server（または rails s）コマンドでRailsサーバーを起動します。"
    },
    {
        id: 9,
        level: "初級",
        category: "基本概念",
        question: "Gemfileの役割は何ですか？",
        options: [
            "JavaScriptライブラリの管理",
            "Rubyの依存関係（gem）の管理",
            "データベース設定",
            "ルーティング設定"
        ],
        correct: 1,
        explanation: "GemfileはアプリケーションのRuby依存関係（gem）を管理するファイルです。"
    },
    {
        id: 10,
        level: "初級",
        category: "MVC",
        question: "RESTfulなルーティングで、新規作成画面を表示するアクションは？",
        options: ["create", "new", "show", "index"],
        correct: 1,
        explanation: "newアクションは新規作成フォームを表示するために使用されます。"
    },
    {
        id: 11,
        level: "初級",
        category: "ビュー",
        question: "RailsのビューテンプレートでRubyコードを埋め込むための記法は？",
        options: [
            "<? ?>",
            "<% %>",
            "{{ }}",
            "[[ ]]"
        ],
        correct: 1,
        explanation: "<% %>はRubyコードを実行し、<%= %>は結果を出力します。"
    },
    {
        id: 12,
        level: "初級",
        category: "データベース",
        question: "rails db:migrateコマンドの役割は？",
        options: [
            "データベースを削除する",
            "未実行のマイグレーションを実行する",
            "データベースをバックアップする",
            "テストデータを作成する"
        ],
        correct: 1,
        explanation: "rails db:migrateは未実行のマイグレーションファイルを実行してデータベーススキーマを更新します。"
    },
    {
        id: 13,
        level: "初級",
        category: "ActiveRecord",
        question: "ActiveRecordで全てのレコードを取得するメソッドは？",
        options: ["find", "all", "get", "fetch"],
        correct: 1,
        explanation: "Model.allで全てのレコードを取得できます。"
    },
    {
        id: 14,
        level: "初級",
        category: "コントローラー",
        question: "コントローラーでビューに変数を渡すための記法は？",
        options: [
            "変数名の前に$を付ける",
            "変数名の前に@を付ける",
            "変数名の前に#を付ける",
            "特別な記法は不要"
        ],
        correct: 1,
        explanation: "@variable_nameのようにインスタンス変数を使ってビューに値を渡します。"
    },
    {
        id: 15,
        level: "初級",
        category: "環境",
        question: "Railsのデフォルトの開発環境は？",
        options: ["production", "development", "test", "staging"],
        correct: 1,
        explanation: "developmentが開発用のデフォルト環境です。"
    },
    {
        id: 16,
        level: "初級",
        category: "Helper",
        question: "link_toヘルパーメソッドの役割は？",
        options: [
            "画像タグを生成",
            "フォームを生成",
            "リンクタグを生成",
            "スクリプトタグを生成"
        ],
        correct: 2,
        explanation: "link_toはHTMLのaタグ（リンク）を生成するヘルパーメソッドです。"
    },
    {
        id: 17,
        level: "初級",
        category: "ActiveRecord",
        question: "モデルでバリデーションを設定するメソッドは？",
        options: ["validates", "validate", "valid", "validation"],
        correct: 0,
        explanation: "validatesメソッドを使ってモデルのバリデーションルールを設定します。"
    },
    {
        id: 18,
        level: "初級",
        category: "セッション",
        question: "Railsでセッションデータを保存する変数は？",
        options: ["@session", "$session", "session", "SESSION"],
        correct: 2,
        explanation: "sessionハッシュを使ってセッションデータを保存・取得します。"
    },
    {
        id: 19,
        level: "初級",
        category: "Asset Pipeline",
        question: "app/assets/javascriptsディレクトリの役割は？",
        options: [
            "HTMLファイルを配置",
            "JavaScriptファイルを配置",
            "画像ファイルを配置",
            "CSSファイルを配置"
        ],
        correct: 1,
        explanation: "app/assets/javascriptsはアプリケーションのJavaScriptファイルを配置するディレクトリです。"
    },
    {
        id: 20,
        level: "初級",
        category: "テスト",
        question: "Railsのデフォルトのテストフレームワークは？",
        options: ["RSpec", "Minitest", "Cucumber", "Jasmine"],
        correct: 1,
        explanation: "MinitestがRailsのデフォルトのテストフレームワークです。"
    },
    {
        id: 21,
        level: "初級",
        category: "Generator",
        question: "モデルを生成するRailsコマンドは？",
        options: [
            "rails generate model",
            "rails create model",
            "rails new model",
            "rails make model"
        ],
        correct: 0,
        explanation: "rails generate model（または rails g model）でモデルを生成します。"
    },
    {
        id: 22,
        level: "初級",
        category: "ルーティング",
        question: "resourcesメソッドで生成される7つのRESTfulアクションに含まれないのは？",
        options: ["index", "show", "delete", "edit"],
        correct: 2,
        explanation: "deleteではなくdestroyが正しいアクション名です。7つのアクションは：index, show, new, create, edit, update, destroy"
    },
    {
        id: 23,
        level: "初級",
        category: "データベース",
        question: "database.ymlファイルの役割は？",
        options: [
            "マイグレーション設定",
            "データベース接続設定",
            "シードデータ設定",
            "インデックス設定"
        ],
        correct: 1,
        explanation: "database.ymlはデータベースへの接続情報を環境ごとに設定するファイルです。"
    },
    {
        id: 24,
        level: "初級",
        category: "ActiveRecord",
        question: "find_byメソッドの特徴は？",
        options: [
            "複数のレコードを返す",
            "最初に見つかった1件を返す",
            "エラーを発生させる",
            "必ずnilを返す"
        ],
        correct: 1,
        explanation: "find_byは条件に一致する最初のレコードを返し、見つからない場合はnilを返します。"
    },
    {
        id: 25,
        level: "初級",
        category: "フォーム",
        question: "form_withヘルパーのデフォルトの送信方法は？",
        options: ["同期送信", "Ajax（非同期）送信", "GET送信", "WebSocket送信"],
        correct: 1,
        explanation: "Rails 6以降、form_withはデフォルトでAjax（非同期）送信を行います。"
    },
    {
        id: 26,
        level: "初級",
        category: "パーシャル",
        question: "パーシャルビューのファイル名の特徴は？",
        options: [
            "拡張子が.partial",
            "ファイル名が_で始まる",
            "ファイル名が@で始まる",
            "拡張子が.erb.partial"
        ],
        correct: 1,
        explanation: "パーシャルビューのファイル名はアンダースコア（_）で始まります。例：_form.html.erb"
    },
    {
        id: 27,
        level: "初級",
        category: "コンソール",
        question: "Railsコンソールを起動するコマンドは？",
        options: [
            "rails terminal",
            "rails console",
            "rails shell",
            "rails irb"
        ],
        correct: 1,
        explanation: "rails console（または rails c）でRailsコンソールを起動できます。"
    },
    {
        id: 28,
        level: "初級",
        category: "ActiveRecord",
        question: "has_many関連付けの反対側で使用する関連付けは？",
        options: ["has_one", "belongs_to", "has_and_belongs_to", "through"],
        correct: 1,
        explanation: "has_manyの反対側ではbelongs_toを使用します。例：Userがhas_many :postsなら、Postはbelongs_to :user"
    },
    {
        id: 29,
        level: "初級",
        category: "ビュー",
        question: "application.html.erbファイルの役割は？",
        options: [
            "エラーページ",
            "レイアウトテンプレート",
            "ホームページ",
            "設定ファイル"
        ],
        correct: 1,
        explanation: "application.html.erbは全体のレイアウトテンプレートとして機能します。"
    },
    {
        id: 30,
        level: "初級",
        category: "コントローラー",
        question: "before_actionの役割は？",
        options: [
            "アクション実行後の処理",
            "アクション実行前の処理",
            "エラー処理",
            "ログ出力"
        ],
        correct: 1,
        explanation: "before_actionは指定したアクションの実行前に特定のメソッドを実行します。"
    },
    {
        id: 31,
        level: "初級",
        category: "HTTP",
        question: "RESTfulなAPIで、リソースの更新に使用するHTTPメソッドは？",
        options: ["GET", "POST", "PUT/PATCH", "DELETE"],
        correct: 2,
        explanation: "PUTまたはPATCHメソッドがリソースの更新に使用されます。"
    },
    {
        id: 32,
        level: "初級",
        category: "セキュリティ",
        question: "Strong Parametersの目的は？",
        options: [
            "パフォーマンス向上",
            "マスアサインメント脆弱性の防止",
            "SQLインジェクション防止",
            "XSS攻撃防止"
        ],
        correct: 1,
        explanation: "Strong Parametersは許可されたパラメータのみを受け付けることで、マスアサインメント脆弱性を防ぎます。"
    },
    {
        id: 33,
        level: "初級",
        category: "テスト",
        question: "fixturesの役割は？",
        options: [
            "テスト用のサンプルデータ",
            "テストカバレッジ測定",
            "テスト実行順序の制御",
            "テスト結果のレポート"
        ],
        correct: 0,
        explanation: "fixturesはテスト用のサンプルデータを提供するYAMLファイルです。"
    },
    {
        id: 34,
        level: "初級",
        category: "環境変数",
        question: "Rails.envの役割は？",
        options: [
            "環境変数の設定",
            "現在の実行環境の取得",
            "環境の切り替え",
            "環境変数の削除"
        ],
        correct: 1,
        explanation: "Rails.envは現在の実行環境（development, test, production等）を取得します。"
    },
    {
        id: 35,
        level: "初級",
        category: "ActiveSupport",
        question: "2.days.agoのような時間計算を可能にするのは？",
        options: ["ActiveRecord", "ActionView", "ActiveSupport", "ActionController"],
        correct: 2,
        explanation: "ActiveSupportがRubyの基本クラスを拡張し、便利なメソッドを提供します。"
    },

    // 中級問題 (36-70)
    {
        id: 36,
        level: "中級",
        category: "ActiveRecord",
        question: "N+1問題を解決するためのメソッドは？",
        options: ["find", "includes", "where", "limit"],
        correct: 1,
        explanation: "includesメソッドを使用することで、関連データを事前に読み込み、N+1問題を解決できます。"
    },
    {
        id: 37,
        level: "中級",
        category: "コールバック",
        question: "after_createコールバックが実行されるタイミングは？",
        options: [
            "レコード作成前",
            "レコード作成後",
            "レコード更新後",
            "レコード削除後"
        ],
        correct: 1,
        explanation: "after_createはレコードがデータベースに作成された直後に実行されます。"
    },
    {
        id: 38,
        level: "中級",
        category: "スコープ",
        question: "default_scopeの使用における注意点は？",
        code: "class Post < ApplicationRecord\n  default_scope { where(published: true) }\nend",
        options: [
            "パフォーマンスが向上する",
            "全てのクエリに自動的に適用される",
            "テストが簡単になる",
            "メモリ使用量が減る"
        ],
        correct: 1,
        explanation: "default_scopeは全てのクエリに自動的に適用されるため、予期しない動作の原因となることがあります。"
    },
    {
        id: 39,
        level: "中級",
        category: "トランザクション",
        question: "ActiveRecord::Base.transactionの役割は？",
        options: [
            "クエリの高速化",
            "複数の操作をアトミックに実行",
            "キャッシュの管理",
            "接続プールの管理"
        ],
        correct: 1,
        explanation: "transactionブロック内の全ての操作が成功するか、全て失敗するかを保証します。"
    },
    {
        id: 40,
        level: "中級",
        category: "バリデーション",
        question: "カスタムバリデーションを実装する方法は？",
        code: "class User < ApplicationRecord\n  validate :custom_validation\n  \n  private\n  def custom_validation\n    # validation logic\n  end\nend",
        options: [
            "validateメソッドを使用",
            "validatesメソッドを使用",
            "valid?メソッドをオーバーライド",
            "before_validationコールバックを使用"
        ],
        correct: 0,
        explanation: "validateメソッド（単数形）でカスタムバリデーションメソッドを指定します。"
    },
    {
        id: 41,
        level: "中級",
        category: "ActionCable",
        question: "ActionCableの主な用途は？",
        options: [
            "メール送信",
            "WebSocket通信によるリアルタイム機能",
            "バックグラウンドジョブ",
            "キャッシュ管理"
        ],
        correct: 1,
        explanation: "ActionCableはWebSocketを使用してリアルタイム機能を実装するためのフレームワークです。"
    },
    {
        id: 42,
        level: "中級",
        category: "ActiveJob",
        question: "ActiveJobでジョブを非同期実行するメソッドは？",
        options: [
            "perform",
            "perform_now",
            "perform_later",
            "perform_async"
        ],
        correct: 2,
        explanation: "perform_laterメソッドでジョブをキューに追加し、非同期で実行します。"
    },
    {
        id: 43,
        level: "中級",
        category: "認証",
        question: "has_secure_passwordを使用するための前提条件は？",
        options: [
            "bcrypt gemのインストール",
            "devise gemのインストール",
            "jwt gemのインストール",
            "oauth2 gemのインストール"
        ],
        correct: 0,
        explanation: "has_secure_passwordはbcrypt gemを使用してパスワードをハッシュ化します。"
    },
    {
        id: 44,
        level: "中級",
        category: "キャッシング",
        question: "フラグメントキャッシングを実装するヘルパーは？",
        options: [
            "cache_page",
            "cache do",
            "fragment_cache",
            "cache_action"
        ],
        correct: 1,
        explanation: "cache doブロックを使用してビューの一部をキャッシュできます。"
    },
    {
        id: 45,
        level: "中級",
        category: "関連付け",
        question: "has_many :throughと has_and_belongs_to_manyの違いは？",
        options: [
            "パフォーマンスの違い",
            "中間テーブルにモデルを持つかどうか",
            "使用できるRailsバージョン",
            "データベースの種類"
        ],
        correct: 1,
        explanation: "has_many :throughは中間テーブルにモデルを持ち、追加の属性やバリデーションを設定できます。"
    },
    {
        id: 46,
        level: "中級",
        category: "メタプログラミング",
        question: "define_methodの用途は？",
        options: [
            "メソッドの削除",
            "動的なメソッド定義",
            "メソッドのエイリアス作成",
            "メソッドの検索"
        ],
        correct: 1,
        explanation: "define_methodを使用して実行時に動的にメソッドを定義できます。"
    },
    {
        id: 47,
        level: "中級",
        category: "concern",
        question: "ActiveSupport::Concernの利点は？",
        options: [
            "パフォーマンス向上",
            "モジュールの依存関係を簡潔に記述",
            "メモリ使用量削減",
            "セキュリティ向上"
        ],
        correct: 1,
        explanation: "Concernを使用することで、モジュールの依存関係やクラスメソッドの定義を簡潔に記述できます。"
    },
    {
        id: 48,
        level: "中級",
        category: "デコレーター",
        question: "delegateメソッドの役割は？",
        code: "class Post < ApplicationRecord\n  belongs_to :user\n  delegate :name, to: :user, prefix: true\nend",
        options: [
            "メソッドの委譲",
            "メソッドのオーバーライド",
            "メソッドの削除",
            "メソッドのキャッシュ"
        ],
        correct: 0,
        explanation: "delegateは他のオブジェクトのメソッドを委譲し、post.user_nameのように呼び出せるようにします。"
    },
    {
        id: 49,
        level: "中級",
        category: "STI",
        question: "Single Table Inheritance (STI)で使用するカラム名は？",
        options: ["class", "type", "kind", "category"],
        correct: 1,
        explanation: "STIではtypeカラムを使用してサブクラスを識別します。"
    },
    {
        id: 50,
        level: "中級",
        category: "フォーム",
        question: "accepts_nested_attributes_forの用途は？",
        options: [
            "フォームのバリデーション",
            "関連モデルの同時保存",
            "フォームのスタイリング",
            "CSRFトークンの生成"
        ],
        correct: 1,
        explanation: "accepts_nested_attributes_forを使用すると、親モデルと関連モデルを同時に作成・更新できます。"
    },
    {
        id: 51,
        level: "中級",
        category: "クエリ",
        question: "pluckメソッドとselectメソッドの違いは？",
        options: [
            "返り値の型（配列 vs ActiveRecord::Relation）",
            "実行速度",
            "使用できるデータベース",
            "メモリ使用量"
        ],
        correct: 0,
        explanation: "pluckは配列を直接返し、selectはActiveRecord::Relationを返します。pluckの方が軽量です。"
    },
    {
        id: 52,
        level: "中級",
        category: "マイグレーション",
        question: "reversibleメソッドの用途は？",
        options: [
            "マイグレーションの高速化",
            "双方向マイグレーションの定義",
            "マイグレーションのスキップ",
            "マイグレーションのロック"
        ],
        correct: 1,
        explanation: "reversibleブロックを使用して、upとdownの動作を明示的に定義できます。"
    },
    {
        id: 53,
        level: "中級",
        category: "CSRF",
        question: "protect_from_forgeryの役割は？",
        options: [
            "SQLインジェクション防止",
            "CSRF攻撃の防止",
            "XSS攻撃の防止",
            "DDoS攻撃の防止"
        ],
        correct: 1,
        explanation: "protect_from_forgeryはCSRFトークンを使用してクロスサイトリクエストフォージェリを防ぎます。"
    },
    {
        id: 54,
        level: "中級",
        category: "アセット",
        question: "asset_pathヘルパーの利点は？",
        options: [
            "画像の圧縮",
            "フィンガープリント付きパスの生成",
            "画像のリサイズ",
            "CDNへのアップロード"
        ],
        correct: 1,
        explanation: "asset_pathはアセットのフィンガープリント付きパスを生成し、キャッシュ管理を改善します。"
    },
    {
        id: 55,
        level: "中級",
        category: "I18n",
        question: "I18n.tメソッドの短縮形は？",
        options: ["translate", "t", "trans", "i18n"],
        correct: 1,
        explanation: "tメソッドはI18n.translateの短縮形で、国際化された文字列を取得します。"
    },
    {
        id: 56,
        level: "中級",
        category: "ミドルウェア",
        question: "Rackミドルウェアを追加する設定ファイルは？",
        options: [
            "config/routes.rb",
            "config/application.rb",
            "config/environment.rb",
            "config/middleware.rb"
        ],
        correct: 1,
        explanation: "config/application.rbでconfig.middleware.useを使ってRackミドルウェアを追加します。"
    },
    {
        id: 57,
        level: "中級",
        category: "エラーハンドリング",
        question: "rescue_fromの用途は？",
        options: [
            "データベースエラーの防止",
            "コントローラーでの例外処理",
            "ビューエラーの処理",
            "JavaScriptエラーの処理"
        ],
        correct: 1,
        explanation: "rescue_fromを使用してコントローラーで特定の例外をキャッチし、カスタム処理を実行できます。"
    },
    {
        id: 58,
        level: "中級",
        category: "パフォーマンス",
        question: "counter_cacheの目的は？",
        options: [
            "クエリ数の削減",
            "メモリ使用量の削減",
            "ディスク容量の削減",
            "CPUの使用率削減"
        ],
        correct: 0,
        explanation: "counter_cacheは関連レコード数をカラムにキャッシュし、COUNT クエリを削減します。"
    },
    {
        id: 59,
        level: "中級",
        category: "ActiveStorage",
        question: "Active Storageでファイルアップロードを実装するメソッドは？",
        options: [
            "has_attached_file",
            "has_one_attached",
            "mount_uploader",
            "attach_file"
        ],
        correct: 1,
        explanation: "has_one_attached（または has_many_attached）でActive Storageのファイルアップロードを設定します。"
    },
    {
        id: 60,
        level: "中級",
        category: "Webpacker",
        question: "Webpackerの役割は？",
        options: [
            "Rubyコードのコンパイル",
            "JavaScriptのバンドル管理",
            "データベースの管理",
            "メール送信"
        ],
        correct: 1,
        explanation: "WebpackerはWebpackを使用してJavaScriptをバンドル・管理するRailsのgemです。"
    },
    {
        id: 61,
        level: "中級",
        category: "ルーティング",
        question: "namespaceとscopeの違いは？",
        options: [
            "パフォーマンス",
            "URLとコントローラーのパスへの影響",
            "使用できるHTTPメソッド",
            "セキュリティレベル"
        ],
        correct: 1,
        explanation: "namespaceはURLとコントローラーの両方に影響し、scopeはより柔軟な設定が可能です。"
    },
    {
        id: 62,
        level: "中級",
        category: "テスト",
        question: "assert_differenceの用途は？",
        code: "assert_difference 'User.count', 1 do\n  post users_path, params: { user: { name: 'Test' } }\nend",
        options: [
            "パフォーマンステスト",
            "数値の変化をテスト",
            "ビューのテスト",
            "ルーティングのテスト"
        ],
        correct: 1,
        explanation: "assert_differenceはブロック実行前後での数値の変化をテストします。"
    },
    {
        id: 63,
        level: "中級",
        category: "認可",
        question: "before_actionでonly:オプションの役割は？",
        options: [
            "除外するアクションを指定",
            "特定のアクションのみに適用",
            "実行順序を指定",
            "条件を指定"
        ],
        correct: 1,
        explanation: "only:オプションで指定したアクションのみにbefore_actionを適用します。"
    },
    {
        id: 64,
        level: "中級",
        category: "データベース",
        question: "add_indexマイグレーションの利点は？",
        options: [
            "データの圧縮",
            "クエリの高速化",
            "データの暗号化",
            "バックアップの簡易化"
        ],
        correct: 1,
        explanation: "インデックスを追加することで、WHERE句やJOINを使用したクエリが高速化されます。"
    },
    {
        id: 65,
        level: "中級",
        category: "API",
        question: "render json:とrespond_toの違いは？",
        options: [
            "パフォーマンス",
            "複数フォーマット対応の可否",
            "セキュリティ",
            "使用できるRailsバージョン"
        ],
        correct: 1,
        explanation: "respond_toは複数のフォーマット（HTML, JSON, XML等）に対応できます。"
    },
    {
        id: 66,
        level: "中級",
        category: "コンフィグ",
        question: "config.eager_load = trueの効果は？",
        options: [
            "遅延読み込みの有効化",
            "起動時に全クラスを読み込む",
            "メモリ使用量の削減",
            "データベース接続の高速化"
        ],
        correct: 1,
        explanation: "eager_load = trueは起動時に全てのクラスを読み込み、本番環境での予期しないエラーを防ぎます。"
    },
    {
        id: 67,
        level: "中級",
        category: "セキュリティ",
        question: "sanitizeヘルパーの役割は？",
        options: [
            "SQLインジェクション防止",
            "HTMLタグの除去・エスケープ",
            "CSRFトークンの生成",
            "パスワードの暗号化"
        ],
        correct: 1,
        explanation: "sanitizeは危険なHTMLタグを除去し、XSS攻撃を防ぎます。"
    },
    {
        id: 68,
        level: "中級",
        category: "Rake",
        question: "カスタムRakeタスクを配置するディレクトリは？",
        options: [
            "app/tasks",
            "lib/tasks",
            "config/tasks",
            "rake/tasks"
        ],
        correct: 1,
        explanation: "カスタムRakeタスクはlib/tasksディレクトリに.rakeファイルとして配置します。"
    },
    {
        id: 69,
        level: "中級",
        category: "ActiveModel",
        question: "ActiveModel::Dirtyの用途は？",
        options: [
            "データのクリーニング",
            "属性の変更追跡",
            "データの暗号化",
            "バリデーションエラーの管理"
        ],
        correct: 1,
        explanation: "ActiveModel::Dirtyは属性の変更を追跡し、changed?やchangesなどのメソッドを提供します。"
    },
    {
        id: 70,
        level: "中級",
        category: "パーシャル",
        question: "collectionオプションを使用したパーシャルレンダリングの利点は？",
        code: "<%= render partial: 'user', collection: @users %>",
        options: [
            "メモリ使用量の削減",
            "自動的なループ処理とパフォーマンス向上",
            "セキュリティの向上",
            "デバッグの簡易化"
        ],
        correct: 1,
        explanation: "collectionオプションは自動的にループ処理を行い、パフォーマンスも最適化されます。"
    },

    // 上級問題 (71-100)
    {
        id: 71,
        level: "上級",
        category: "メタプログラミング",
        question: "method_missingを使用する際の注意点は？",
        code: "def method_missing(method, *args)\n  # dynamic method handling\nend",
        options: [
            "必ずrespond_to_missing?も実装する",
            "パフォーマンスが向上する",
            "メモリ使用量が減る",
            "セキュリティが向上する"
        ],
        correct: 0,
        explanation: "method_missingを実装する際は、respond_to_missing?も実装して一貫性を保つ必要があります。"
    },
    {
        id: 72,
        level: "上級",
        category: "パフォーマンス",
        question: "bullet gemの主な用途は？",
        options: [
            "セキュリティ脆弱性の検出",
            "N+1クエリの検出",
            "メモリリークの検出",
            "デッドコードの検出"
        ],
        correct: 1,
        explanation: "bullet gemはN+1クエリや不要なeager loadingを検出し、パフォーマンス問題を特定します。"
    },
    {
        id: 73,
        level: "上級",
        category: "Rails Engine",
        question: "Rails Engineの主な用途は？",
        options: [
            "JavaScriptエンジンの管理",
            "再利用可能なミニアプリケーション",
            "データベースエンジンの切り替え",
            "テンプレートエンジンの管理"
        ],
        correct: 1,
        explanation: "Rails Engineは再利用可能なミニRailsアプリケーションを作成するための仕組みです。"
    },
    {
        id: 74,
        level: "上級",
        category: "データベース",
        question: "Arelの役割は？",
        options: [
            "ORMの代替",
            "SQLクエリの抽象構文木",
            "データベース接続プール",
            "マイグレーション管理"
        ],
        correct: 1,
        explanation: "ArelはActiveRecordが使用するSQLクエリビルダーで、RubyでSQLを抽象的に構築します。"
    },
    {
        id: 75,
        level: "上級",
        category: "並行処理",
        question: "config.threadsafeの影響は？",
        options: [
            "シングルスレッドモード",
            "マルチスレッド対応",
            "プロセス数の制限",
            "メモリ共有の無効化"
        ],
        correct: 1,
        explanation: "threadsafeを有効にすると、Railsアプリケーションがマルチスレッド環境で安全に動作します。"
    },
    {
        id: 76,
        level: "上級",
        category: "キャッシング",
        question: "Russian Doll Cachingの概念は？",
        options: [
            "分散キャッシング",
            "ネストされたフラグメントキャッシング",
            "メモリキャッシング",
            "HTTPキャッシング"
        ],
        correct: 1,
        explanation: "Russian Doll Cachingは、ネストされたフラグメントキャッシングで、依存関係を自動管理します。"
    },
    {
        id: 77,
        level: "上級",
        category: "プリロード",
        question: "preload、eager_load、includesの違いで正しいのは？",
        options: [
            "全て同じ動作",
            "preloadは別クエリ、eager_loadはLEFT JOIN",
            "includesが最も遅い",
            "eager_loadは非推奨"
        ],
        correct: 1,
        explanation: "preloadは別クエリで取得、eager_loadはLEFT JOINを使用、includesは状況に応じて最適な方法を選択します。"
    },
    {
        id: 78,
        level: "上級",
        category: "Zeitwerk",
        question: "Rails 6から導入されたZeitwerkの役割は？",
        options: [
            "タイムゾーン管理",
            "コード自動読み込み",
            "ジョブスケジューリング",
            "ログローテーション"
        ],
        correct: 1,
        explanation: "Zeitwerkは新しいコード自動読み込み機構で、より予測可能な動作を提供します。"
    },
    {
        id: 79,
        level: "上級",
        category: "Credentials",
        question: "credentials.yml.encの利点は？",
        options: [
            "パフォーマンス向上",
            "暗号化された設定管理",
            "自動バックアップ",
            "設定の自動生成"
        ],
        correct: 1,
        explanation: "credentials.yml.encは機密情報を暗号化して管理し、安全にバージョン管理できます。"
    },
    {
        id: 80,
        level: "上級",
        category: "ActionText",
        question: "Action Textが依存するJavaScriptライブラリは？",
        options: ["CKEditor", "TinyMCE", "Trix", "Quill"],
        correct: 2,
        explanation: "Action TextはBasecampが開発したTrixエディタを使用してリッチテキスト編集を提供します。"
    },
    {
        id: 81,
        level: "上級",
        category: "データベース",
        question: "マルチデータベース接続で使用するメソッドは？",
        code: "class ApplicationRecord < ActiveRecord::Base\n  connects_to database: { writing: :primary, reading: :replica }\nend",
        options: [
            "database_connection",
            "connects_to",
            "establish_connection",
            "multi_db"
        ],
        correct: 1,
        explanation: "Rails 6以降、connects_toメソッドで複数のデータベース接続を管理できます。"
    },
    {
        id: 82,
        level: "上級",
        category: "ViewComponent",
        question: "ViewComponentの利点として正しくないものは？",
        options: [
            "テスタビリティの向上",
            "パフォーマンスの向上",
            "自動的なSEO最適化",
            "再利用性の向上"
        ],
        correct: 2,
        explanation: "ViewComponentはテスタビリティ、パフォーマンス、再利用性を向上させますが、SEO最適化は自動的には行いません。"
    },
    {
        id: 83,
        level: "上級",
        category: "GraphQL",
        question: "graphql-ruby gemでスキーマを定義するクラスは？",
        options: [
            "GraphQL::Definition",
            "GraphQL::Schema",
            "GraphQL::Type",
            "GraphQL::Query"
        ],
        correct: 1,
        explanation: "GraphQL::Schemaクラスを継承してGraphQLスキーマを定義します。"
    },
    {
        id: 84,
        level: "上級",
        category: "Sidekiq",
        question: "Sidekiqのジョブリトライのデフォルト回数は？",
        options: ["3回", "5回", "10回", "25回"],
        correct: 3,
        explanation: "Sidekiqはデフォルトで25回までジョブのリトライを行います。"
    },
    {
        id: 85,
        level: "上級",
        category: "メモリ",
        question: "jemalloc使用の主な利点は？",
        options: [
            "CPU使用率の削減",
            "メモリフラグメンテーションの削減",
            "ディスクI/Oの削減",
            "ネットワーク遅延の削減"
        ],
        correct: 1,
        explanation: "jemallocはメモリフラグメンテーションを削減し、Railsアプリのメモリ使用効率を改善します。"
    },
    {
        id: 86,
        level: "上級",
        category: "デプロイ",
        question: "Capistranoでデプロイ時に実行されるタスクの順序で正しいのは？",
        options: [
            "deploy:starting → deploy:updating → deploy:publishing",
            "deploy:updating → deploy:starting → deploy:publishing",
            "deploy:publishing → deploy:starting → deploy:updating",
            "順序は設定による"
        ],
        correct: 0,
        explanation: "Capistranoは starting → updating → publishing → finishing の順でタスクを実行します。"
    },
    {
        id: 87,
        level: "上級",
        category: "モニタリング",
        question: "Rails.application.executor.wrapの用途は？",
        options: [
            "エラーハンドリング",
            "スレッドセーフな実行コンテキスト",
            "パフォーマンス測定",
            "メモリ管理"
        ],
        correct: 1,
        explanation: "executor.wrapはスレッドセーフな実行コンテキストを提供し、接続管理やリロードを適切に処理します。"
    },
    {
        id: 88,
        level: "上級",
        category: "最適化",
        question: "pluck_in_batchesが通常のfind_in_batchesより優れている点は？",
        options: [
            "より高速",
            "メモリ効率が良い",
            "存在しない（カスタム実装が必要）",
            "自動インデックス作成"
        ],
        correct: 2,
        explanation: "pluck_in_batchesは標準では存在せず、必要に応じてカスタム実装する必要があります。"
    },
    {
        id: 89,
        level: "上級",
        category: "セキュリティ",
        question: "Rack::Attackの主な用途は？",
        options: [
            "SQLインジェクション防止",
            "レート制限とスロットリング",
            "XSS攻撃防止",
            "CSRF防止"
        ],
        correct: 1,
        explanation: "Rack::Attackはレート制限、スロットリング、ブラックリスト機能を提供します。"
    },
    {
        id: 90,
        level: "上級",
        category: "ActionMailbox",
        question: "Action Mailboxでメール処理を定義するメソッドは？",
        options: ["handle", "process", "receive", "deliver"],
        correct: 1,
        explanation: "Action MailboxではprocessメソッドでInbound Emailの処理を定義します。"
    },
    {
        id: 91,
        level: "上級",
        category: "Hotwire",
        question: "Turbo Streamsで使用できるアクションに含まれないのは？",
        options: ["append", "replace", "remove", "toggle"],
        correct: 3,
        explanation: "Turbo Streamsの標準アクションはappend, prepend, replace, update, remove, before, afterです。"
    },
    {
        id: 92,
        level: "上級",
        category: "データベース",
        question: "with_advisory_lockの用途は？",
        options: [
            "楽観的ロック",
            "悲観的ロック",
            "アプリケーションレベルの排他制御",
            "データベース接続のロック"
        ],
        correct: 2,
        explanation: "with_advisory_lockはPostgreSQLのアドバイザリロックを使用した排他制御を提供します。"
    },
    {
        id: 93,
        level: "上級",
        category: "パフォーマンス",
        question: "rack-mini-profilerが提供しない機能は？",
        options: [
            "SQL クエリの分析",
            "メモリプロファイリング",
            "自動的なコード修正",
            "フレームグラフ"
        ],
        correct: 2,
        explanation: "rack-mini-profilerはプロファイリング情報を提供しますが、コードの自動修正は行いません。"
    },
    {
        id: 94,
        level: "上級",
        category: "ActiveSupport",
        question: "ActiveSupport::Notificationsの主な用途は？",
        options: [
            "ユーザー通知",
            "イベント駆動の計測とロギング",
            "エラー通知",
            "プッシュ通知"
        ],
        correct: 1,
        explanation: "ActiveSupport::NotificationsはRails内部のイベント駆動計測システムで、パフォーマンス監視に使用されます。"
    },
    {
        id: 95,
        level: "上級",
        category: "テスト",
        question: "System Testでヘッドレスブラウザを使用する設定は？",
        code: "driven_by :selenium, using: :headless_chrome",
        options: [
            "driven_by :headless",
            "driven_by :selenium, using: :headless_chrome",
            "browser :headless",
            "use_headless_browser true"
        ],
        correct: 1,
        explanation: "driven_byメソッドでSeleniumドライバーとヘッドレスChromeを指定します。"
    },
    {
        id: 96,
        level: "上級",
        category: "最適化",
        question: "includes使用時にJOINクエリを強制するメソッドは？",
        options: ["joins", "references", "eager_load", "preload"],
        correct: 1,
        explanation: "referencesメソッドを使用すると、includesがJOINクエリを使用するよう強制できます。"
    },
    {
        id: 97,
        level: "上級",
        category: "Rails 7",
        question: "Rails 7で導入されたImportmapsの利点は？",
        options: [
            "Node.js不要でJavaScript管理",
            "より高速なコンパイル",
            "自動的なTypeScript対応",
            "バンドルサイズの削減"
        ],
        correct: 0,
        explanation: "ImportmapsはNode.jsやWebpackなしでモダンなJavaScriptを管理できます。"
    },
    {
        id: 98,
        level: "上級",
        category: "並行処理",
        question: "Fiber Schedulerを使用した非同期I/Oの利点は？",
        options: [
            "CPU使用率の向上",
            "スレッドより軽量な並行処理",
            "自動的なデッドロック回避",
            "メモリ使用量の増加"
        ],
        correct: 1,
        explanation: "Fiber Schedulerはスレッドより軽量で、効率的な非同期I/O処理を可能にします。"
    },
    {
        id: 99,
        level: "上級",
        category: "デバッグ",
        question: "binding.pryの代替として、Rails 7で推奨されるデバッガーは？",
        options: ["byebug", "debugger", "debug", "binding.irb"],
        correct: 2,
        explanation: "Rails 7ではRuby 3.1以降に組み込まれた'debug' gemが推奨されています。"
    },
    {
        id: 100,
        level: "上級",
        category: "アーキテクチャ",
        question: "Packwerkの主な用途は？",
        options: [
            "パッケージ管理",
            "モジュール境界の強制",
            "デプロイ自動化",
            "パフォーマンス最適化"
        ],
        correct: 1,
        explanation: "Packwerkはコードベースをモジュール化し、境界を強制してアーキテクチャを維持します。"
    }
];
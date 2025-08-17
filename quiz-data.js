const quizData = [
    {
        id: 1,
        level: 'beginner',
        type: 'multiple-choice',
        title: 'シンボルの理解',
        code: 'user = { name: "田中", age: 25 }',
        question: 'このコードで`:name`は何を表していますか？',
        options: [
            { label: 'A', text: '文字列 "name"', correct: false },
            { label: 'B', text: '変数 name', correct: false },
            { label: 'C', text: 'シンボル :name', correct: true },
            { label: 'D', text: 'メソッド name', correct: false }
        ],
        explanation: 'Rubyのシンボルは`:name`のようにコロンで始まる不変の識別子です。文字列と違い、同じシンボルは常に同じオブジェクトを参照するため、メモリ効率が良くハッシュのキーとしてよく使われます。'
    },
    {
        id: 2,
        level: 'beginner',
        type: 'drag-drop',
        title: 'MVCパターンの理解',
        question: '以下のRailsコンポーネントを正しいMVCカテゴリにドラッグしてください',
        items: ['users_controller.rb', 'user.rb', 'index.html.erb', 'application_controller.rb', 'post.rb', 'show.html.erb'],
        categories: {
            'Model': ['user.rb', 'post.rb'],
            'View': ['index.html.erb', 'show.html.erb'],
            'Controller': ['users_controller.rb', 'application_controller.rb']
        },
        explanation: 'RailsはMVCパターンに従います。Model（.rb）はデータとビジネスロジック、View（.html.erb）は表示、Controller（_controller.rb）はリクエスト処理を担当します。'
    },
    {
        id: 3,
        level: 'beginner',
        type: 'code-completion',
        title: 'ルーティングの基礎',
        question: '以下のルーティングを完成させてください',
        codeTemplate: 'Rails.application.routes.draw do\n  ____ :users\nend',
        answer: 'resources',
        hints: ['res...', 'reso...', 'resour...'],
        explanation: 'resourcesメソッドは、RESTfulなルーティング（index, show, new, create, edit, update, destroy）を一括で定義します。'
    },
    {
        id: 4,
        level: 'beginner',
        type: 'multiple-choice',
        title: 'Active Recordの基本',
        code: 'User.find(1)',
        question: 'このコードは何をしますか？',
        options: [
            { label: 'A', text: 'ID が 1 のユーザーを検索', correct: true },
            { label: 'B', text: '最初のユーザーを検索', correct: false },
            { label: 'C', text: '1人のユーザーをランダムに検索', correct: false },
            { label: 'D', text: 'ユーザーを1人作成', correct: false }
        ],
        explanation: 'find(id)メソッドは指定されたIDを持つレコードを検索します。レコードが見つからない場合はActiveRecord::RecordNotFoundエラーが発生します。'
    },
    {
        id: 5,
        level: 'beginner',
        type: 'multiple-choice',
        title: 'マイグレーションの理解',
        code: 'rails generate migration AddEmailToUsers email:string',
        question: 'このコマンドは何をしますか？',
        options: [
            { label: 'A', text: 'Usersテーブルにemail列を追加するマイグレーションを生成', correct: true },
            { label: 'B', text: '新しいUsersテーブルを作成', correct: false },
            { label: 'C', text: 'email列を削除', correct: false },
            { label: 'D', text: 'Userモデルを生成', correct: false }
        ],
        explanation: 'AddXXXToYYY形式のマイグレーション名は、YYYテーブルにXXX列を追加することを示します。この規約により、Railsは自動的に適切なマイグレーションコードを生成します。'
    },
    {
        id: 6,
        level: 'beginner',
        type: 'drag-drop',
        title: 'HTTPメソッドとアクション',
        question: 'HTTPメソッドと対応するRailsアクションを正しくマッチングしてください',
        items: ['GET /users', 'POST /users', 'GET /users/1', 'PATCH /users/1', 'DELETE /users/1'],
        categories: {
            'index': ['GET /users'],
            'create': ['POST /users'],
            'show': ['GET /users/1'],
            'update': ['PATCH /users/1'],
            'destroy': ['DELETE /users/1']
        },
        explanation: 'RESTfulルーティングでは、HTTPメソッドとURLの組み合わせで、実行されるコントローラーアクションが決まります。'
    },
    {
        id: 7,
        level: 'beginner',
        type: 'code-completion',
        title: 'Strong Parametersの基礎',
        question: 'Strong Parametersを使用してユーザーパラメータを許可してください',
        codeTemplate: 'def user_params\n  params.require(:user).____([:name, :email])\nend',
        answer: 'permit',
        hints: ['per...', 'perm...'],
        explanation: 'Strong Parametersは、Mass Assignment脆弱性を防ぐため、明示的に許可したパラメータのみを受け入れます。'
    },
    {
        id: 8,
        level: 'beginner',
        type: 'multiple-choice',
        title: 'before_actionの理解',
        code: 'before_action :authenticate_user!, only: [:edit, :update]',
        question: 'このコードの意味は？',
        options: [
            { label: 'A', text: 'editとupdateアクションの前にauthenticate_user!を実行', correct: true },
            { label: 'B', text: 'すべてのアクションの前にauthenticate_user!を実行', correct: false },
            { label: 'C', text: 'editとupdate以外のアクションの前に実行', correct: false },
            { label: 'D', text: 'アクションの後に実行', correct: false }
        ],
        explanation: 'before_actionは指定されたアクションの前に特定のメソッドを実行します。onlyオプションで対象アクションを限定できます。'
    },
    {
        id: 9,
        level: 'beginner',
        type: 'multiple-choice',
        title: 'Active Recordの関連付け',
        code: 'class User < ApplicationRecord\n  has_many :posts\nend',
        question: 'このコードで定義される関係は？',
        options: [
            { label: 'A', text: '1人のユーザーは複数の投稿を持つ', correct: true },
            { label: 'B', text: '1つの投稿は複数のユーザーを持つ', correct: false },
            { label: 'C', text: 'ユーザーと投稿は1対1の関係', correct: false },
            { label: 'D', text: '多対多の関係', correct: false }
        ],
        explanation: 'has_manyは1対多の関係を定義します。この場合、1人のユーザーが複数のpostsを持つことができます。'
    },
    {
        id: 10,
        level: 'beginner',
        type: 'code-completion',
        title: 'バリデーションの追加',
        question: 'emailフィールドに存在性のバリデーションを追加してください',
        codeTemplate: 'class User < ApplicationRecord\n  ____ :email, presence: true\nend',
        answer: 'validates',
        hints: ['val...', 'valid...'],
        explanation: 'validatesメソッドを使用して、モデルの属性にバリデーションルールを追加できます。presence: trueは必須項目を意味します。'
    },
    {
        id: 11,
        level: 'intermediate',
        type: 'multiple-choice',
        title: 'スコープの理解',
        code: 'scope :published, -> { where(published: true) }',
        question: 'このスコープの使い方として正しいのは？',
        options: [
            { label: 'A', text: 'Article.published', correct: true },
            { label: 'B', text: 'Article.scope.published', correct: false },
            { label: 'C', text: 'published.Article', correct: false },
            { label: 'D', text: 'Article.where.published', correct: false }
        ],
        explanation: 'スコープは再利用可能なクエリを定義します。定義後はクラスメソッドのように使用できます。'
    },
    {
        id: 12,
        level: 'intermediate',
        type: 'drag-drop',
        title: 'Active Recordコールバック',
        question: 'コールバックを実行順序に並べてください（作成時）',
        items: ['after_create', 'before_validation', 'after_save', 'before_save', 'after_validation', 'before_create'],
        categories: {
            '1番目': ['before_validation'],
            '2番目': ['after_validation'],
            '3番目': ['before_save'],
            '4番目': ['before_create'],
            '5番目': ['after_create'],
            '6番目': ['after_save']
        },
        explanation: 'Active Recordのコールバックは特定の順序で実行されます。作成時は validation → save → create の順で、それぞれbefore/afterが実行されます。'
    },
    {
        id: 13,
        level: 'intermediate',
        type: 'code-completion',
        title: 'N+1問題の解決',
        question: 'N+1問題を解決するために適切なメソッドを入力してください',
        codeTemplate: 'User.____(:posts).each do |user|\n  user.posts.each { |post| puts post.title }\nend',
        answer: 'includes',
        hints: ['inc...', 'incl...'],
        explanation: 'includesメソッドは関連データを事前に読み込み（eager loading）、N+1クエリ問題を防ぎます。'
    },
    {
        id: 14,
        level: 'intermediate',
        type: 'multiple-choice',
        title: 'トランザクションの理解',
        code: 'User.transaction do\n  user.save!\n  profile.save!\nend',
        question: 'どちらかのsave!が失敗した場合、何が起こりますか？',
        options: [
            { label: 'A', text: '両方の変更がロールバックされる', correct: true },
            { label: 'B', text: '成功した方だけ保存される', correct: false },
            { label: 'C', text: 'エラーが無視される', correct: false },
            { label: 'D', text: 'アプリケーションがクラッシュする', correct: false }
        ],
        explanation: 'トランザクションブロック内で例外が発生すると、すべての変更がロールバックされ、データベースの整合性が保たれます。'
    },
    {
        id: 15,
        level: 'intermediate',
        type: 'multiple-choice',
        title: 'パーシャルの使い方',
        code: '<%= render partial: "user", collection: @users %>',
        question: 'このコードは何をしますか？',
        options: [
            { label: 'A', text: '@usersの各要素に対して_user.html.erbを描画', correct: true },
            { label: 'B', text: '_users.html.erbを1回描画', correct: false },
            { label: 'C', text: 'user.html.erbを描画', correct: false },
            { label: 'D', text: 'エラーが発生する', correct: false }
        ],
        explanation: 'collectionオプションを使うと、配列の各要素に対してパーシャルを繰り返し描画します。各要素は自動的にパーシャル名と同じ変数名で利用可能になります。'
    },
    {
        id: 16,
        level: 'intermediate',
        type: 'code-completion',
        title: 'カスタムバリデーション',
        question: 'カスタムバリデーションメソッドを定義してください',
        codeTemplate: 'class User < ApplicationRecord\n  ____ :check_age\n  \n  private\n  def check_age\n    errors.add(:age, "must be over 18") if age < 18\n  end\nend',
        answer: 'validate',
        hints: ['val...', 'valid...'],
        explanation: 'validateメソッド（sなし）を使用してカスタムバリデーションメソッドを指定できます。'
    },
    {
        id: 17,
        level: 'intermediate',
        type: 'multiple-choice',
        title: 'Action Cableの理解',
        code: 'class MessageChannel < ApplicationCable::Channel\n  def subscribed\n    stream_from "messages"\n  end\nend',
        question: 'Action Cableは何のために使われますか？',
        options: [
            { label: 'A', text: 'WebSocketを使ったリアルタイム通信', correct: true },
            { label: 'B', text: 'データベースの接続管理', correct: false },
            { label: 'C', text: 'HTTPリクエストの処理', correct: false },
            { label: 'D', text: 'ファイルのアップロード', correct: false }
        ],
        explanation: 'Action CableはWebSocketを使ってサーバーとクライアント間でリアルタイム双方向通信を実現するRailsの機能です。'
    },
    {
        id: 18,
        level: 'intermediate',
        type: 'drag-drop',
        title: 'Railsのディレクトリ構造',
        question: 'ファイルを適切なディレクトリに配置してください',
        items: ['user.rb', 'users_controller.rb', 'user.js', 'user_spec.rb', 'user_helper.rb', 'create_users.rb'],
        categories: {
            'app/models': ['user.rb'],
            'app/controllers': ['users_controller.rb'],
            'app/javascript': ['user.js'],
            'spec/models': ['user_spec.rb'],
            'app/helpers': ['user_helper.rb'],
            'db/migrate': ['create_users.rb']
        },
        explanation: 'Railsは「設定より規約」の原則に従い、各ファイルタイプに決められたディレクトリ構造があります。'
    },
    {
        id: 19,
        level: 'intermediate',
        type: 'multiple-choice',
        title: 'Active Jobの理解',
        code: 'UserMailer.welcome_email(user).deliver_later',
        question: 'deliver_laterメソッドは何をしますか？',
        options: [
            { label: 'A', text: 'メールを非同期でキューに入れて送信', correct: true },
            { label: 'B', text: 'メールを即座に送信', correct: false },
            { label: 'C', text: 'メールの送信を1時間後に予約', correct: false },
            { label: 'D', text: 'メールをドラフトとして保存', correct: false }
        ],
        explanation: 'deliver_laterはActive Jobを使用してメール送信をバックグラウンドジョブとして実行し、アプリケーションのレスポンスを高速化します。'
    },
    {
        id: 20,
        level: 'intermediate',
        type: 'code-completion',
        title: 'Concernの使用',
        question: 'Concernをインクルードする正しい記法を入力してください',
        codeTemplate: 'class Article < ApplicationRecord\n  ____ Searchable\nend',
        answer: 'include',
        hints: ['inc...', 'inclu...'],
        explanation: 'Concernsは複数のモデルで共有される機能をモジュール化する仕組みで、includeを使って取り込みます。'
    },
    {
        id: 21,
        level: 'advanced',
        type: 'multiple-choice',
        title: 'メタプログラミング',
        code: 'define_method :full_name do\n  "#{first_name} #{last_name}"\nend',
        question: 'define_methodは何をしますか？',
        options: [
            { label: 'A', text: '動的にメソッドを定義する', correct: true },
            { label: 'B', text: '既存のメソッドを上書きする', correct: false },
            { label: 'C', text: 'メソッドを削除する', correct: false },
            { label: 'D', text: 'メソッドの存在を確認する', correct: false }
        ],
        explanation: 'define_methodはRubyのメタプログラミング機能で、実行時に動的にメソッドを定義できます。'
    },
    {
        id: 22,
        level: 'advanced',
        type: 'code-completion',
        title: 'Service Objectパターン',
        question: 'Service Objectの一般的な呼び出し方法を完成させてください',
        codeTemplate: 'class CreateOrder\n  def self.____(params)\n    new(params).call\n  end\nend',
        answer: 'call',
        hints: ['ca...', 'cal...'],
        explanation: 'Service Objectパターンでは、クラスメソッドcallを定義して、インスタンス化と実行を1行で行えるようにすることが一般的です。'
    },
    {
        id: 23,
        level: 'advanced',
        type: 'multiple-choice',
        title: 'データベースインデックス',
        code: 'add_index :users, [:email, :created_at]',
        question: 'この複合インデックスが最も効果的なクエリは？',
        options: [
            { label: 'A', text: 'WHERE email = ? ORDER BY created_at', correct: true },
            { label: 'B', text: 'WHERE created_at = ?', correct: false },
            { label: 'C', text: 'ORDER BY email', correct: false },
            { label: 'D', text: 'WHERE id = ?', correct: false }
        ],
        explanation: '複合インデックスは左端のカラムから順に使用される必要があります。emailで絞り込んでからcreated_atでソートするクエリに最適です。'
    },
    {
        id: 24,
        level: 'advanced',
        type: 'drag-drop',
        title: 'Rackミドルウェアスタック',
        question: 'Rackミドルウェアを実行順序に並べてください',
        items: ['ActionDispatch::Static', 'Rack::Sendfile', 'ActionDispatch::Executor', 'ActiveSupport::Cache::Strategy::LocalCache::Middleware', 'Rack::Runtime', 'Rails.application.routes'],
        categories: {
            '1番目': ['Rack::Sendfile'],
            '2番目': ['ActionDispatch::Static'],
            '3番目': ['ActionDispatch::Executor'],
            '4番目': ['ActiveSupport::Cache::Strategy::LocalCache::Middleware'],
            '5番目': ['Rack::Runtime'],
            '6番目': ['Rails.application.routes']
        },
        explanation: 'Rackミドルウェアは定義された順序で実行され、リクエストとレスポンスを処理します。'
    },
    {
        id: 25,
        level: 'advanced',
        type: 'multiple-choice',
        title: 'STI (Single Table Inheritance)',
        code: 'class Admin < User\nend',
        question: 'STIを使用する際、データベースに必要なカラムは？',
        options: [
            { label: 'A', text: 'type カラム', correct: true },
            { label: 'B', text: 'class カラム', correct: false },
            { label: 'C', text: 'inheritance カラム', correct: false },
            { label: 'D', text: '追加カラムは不要', correct: false }
        ],
        explanation: 'Single Table Inheritanceでは、typeカラムにサブクラス名を保存して、同一テーブルで継承関係を表現します。'
    },
    {
        id: 26,
        level: 'beginner',
        type: 'multiple-choice',
        title: 'renderとredirect_toの違い',
        code: 'render :new\nredirect_to users_path',
        question: 'renderとredirect_toの主な違いは？',
        options: [
            { label: 'A', text: 'renderはビューを表示、redirect_toは新しいリクエスト', correct: true },
            { label: 'B', text: '両方とも同じ動作', correct: false },
            { label: 'C', text: 'renderは遅い、redirect_toは速い', correct: false },
            { label: 'D', text: 'renderはGET、redirect_toはPOST', correct: false }
        ],
        explanation: 'renderは現在のリクエスト内でビューを表示し、redirect_toは新しいHTTPリクエストを発生させます。'
    },
    {
        id: 27,
        level: 'beginner',
        type: 'code-completion',
        title: 'フォームヘルパー',
        question: 'Railsのフォームヘルパーを完成させてください',
        codeTemplate: '<%= ____ @user do |f| %>\n  <%= f.text_field :name %>\n<% end %>',
        answer: 'form_with',
        hints: ['form...', 'form_w...'],
        explanation: 'form_withは Rails 5.1以降で推奨されるフォームヘルパーで、モデルベースとURLベースの両方のフォームを作成できます。'
    },
    {
        id: 28,
        level: 'beginner',
        type: 'multiple-choice',
        title: 'belongs_toの理解',
        code: 'class Post < ApplicationRecord\n  belongs_to :user\nend',
        question: 'このコードでPostテーブルに必要なカラムは？',
        options: [
            { label: 'A', text: 'user_id', correct: true },
            { label: 'B', text: 'post_id', correct: false },
            { label: 'C', text: 'users_id', correct: false },
            { label: 'D', text: 'id だけで十分', correct: false }
        ],
        explanation: 'belongs_to関連では、外部キー（この場合user_id）が必要です。Railsの規約により、関連名に_idを付けた名前になります。'
    },
    {
        id: 29,
        level: 'beginner',
        type: 'drag-drop',
        title: 'Railsコマンドの分類',
        question: 'コマンドを適切なカテゴリに分類してください',
        items: ['rails new', 'rails generate', 'rails db:migrate', 'rails server', 'rails console', 'rails db:seed'],
        categories: {
            '作成系': ['rails new', 'rails generate'],
            'データベース系': ['rails db:migrate', 'rails db:seed'],
            '実行系': ['rails server', 'rails console']
        },
        explanation: 'Railsコマンドは用途別に分類でき、作成、データベース操作、実行環境の起動などがあります。'
    },
    {
        id: 30,
        level: 'beginner',
        type: 'multiple-choice',
        title: 'パーシャルの命名規則',
        code: '<%= render "form" %>',
        question: 'このコードが読み込むファイル名は？',
        options: [
            { label: 'A', text: '_form.html.erb', correct: true },
            { label: 'B', text: 'form.html.erb', correct: false },
            { label: 'C', text: 'form.erb', correct: false },
            { label: 'D', text: 'partial_form.html.erb', correct: false }
        ],
        explanation: 'パーシャルファイルは必ずアンダースコアで始まりますが、renderで指定する際はアンダースコアを省略します。'
    },
    {
        id: 31,
        level: 'beginner',
        type: 'code-completion',
        title: 'flashメッセージ',
        question: 'flashメッセージを設定するコードを完成させてください',
        codeTemplate: '____[:notice] = "保存しました"',
        answer: 'flash',
        hints: ['fl...', 'fla...'],
        explanation: 'flashは一時的なメッセージを次のリクエストまで保持し、通知やエラーメッセージの表示に使用されます。'
    },
    {
        id: 32,
        level: 'beginner',
        type: 'multiple-choice',
        title: 'development環境の特徴',
        question: 'Rails development環境の特徴として正しいのは？',
        options: [
            { label: 'A', text: 'コード変更が即座に反映される', correct: true },
            { label: 'B', text: 'アセットが圧縮される', correct: false },
            { label: 'C', text: 'キャッシュが有効', correct: false },
            { label: 'D', text: 'エラーが隠される', correct: false }
        ],
        explanation: 'development環境では開発効率を重視し、コード変更の自動リロード、詳細なエラー表示などが有効になっています。'
    },
    {
        id: 33,
        level: 'beginner',
        type: 'multiple-choice',
        title: 'データベース.ymlの理解',
        code: 'adapter: postgresql\ndatabase: myapp_development',
        question: 'このdatabase.ymlの設定は何を指定していますか？',
        options: [
            { label: 'A', text: 'PostgreSQLを使用し、開発用DBを指定', correct: true },
            { label: 'B', text: 'MySQLを使用', correct: false },
            { label: 'C', text: '本番環境の設定', correct: false },
            { label: 'D', text: 'テスト環境の設定', correct: false }
        ],
        explanation: 'database.ymlはデータベース接続設定を管理し、adapterでDBMSを、databaseでDB名を指定します。'
    },
    {
        id: 34,
        level: 'beginner',
        type: 'drag-drop',
        title: 'アセットパイプラインの理解',
        question: 'ファイルを適切なディレクトリに配置してください',
        items: ['application.css', 'logo.png', 'application.js', 'favicon.ico', 'custom.scss', 'utils.js'],
        categories: {
            'app/assets/stylesheets': ['application.css', 'custom.scss'],
            'app/assets/images': ['logo.png', 'favicon.ico'],
            'app/assets/javascripts': ['application.js', 'utils.js']
        },
        explanation: 'アセットパイプラインは、CSS、JavaScript、画像を適切なディレクトリで管理し、本番環境で最適化します。'
    },
    {
        id: 35,
        level: 'beginner',
        type: 'code-completion',
        title: 'link_toヘルパー',
        question: 'link_toヘルパーを完成させてください',
        codeTemplate: '<%= ____ "ホーム", root_path %>',
        answer: 'link_to',
        hints: ['lin...', 'link...'],
        explanation: 'link_toはHTMLのaタグを生成するヘルパーメソッドで、URLヘルパーと組み合わせて使用します。'
    },
    {
        id: 36,
        level: 'beginner',
        type: 'multiple-choice',
        title: 'マイグレーションのロールバック',
        code: 'rails db:rollback',
        question: 'このコマンドは何をしますか？',
        options: [
            { label: 'A', text: '最後のマイグレーションを取り消す', correct: true },
            { label: 'B', text: 'すべてのマイグレーションを取り消す', correct: false },
            { label: 'C', text: 'データベースを削除', correct: false },
            { label: 'D', text: 'マイグレーションを再実行', correct: false }
        ],
        explanation: 'db:rollbackは最後に実行されたマイグレーションを取り消し、スキーマを前の状態に戻します。'
    },
    {
        id: 37,
        level: 'beginner',
        type: 'multiple-choice',
        title: 'sessionとcookiesの違い',
        code: 'session[:user_id] = 1\ncookies[:remember_token] = "abc123"',
        question: 'sessionとcookiesの主な違いは？',
        options: [
            { label: 'A', text: 'sessionはサーバー側、cookiesはクライアント側に保存', correct: true },
            { label: 'B', text: '両方ともクライアント側に保存', correct: false },
            { label: 'C', text: '両方ともサーバー側に保存', correct: false },
            { label: 'D', text: '違いはない', correct: false }
        ],
        explanation: 'sessionはサーバー側で管理され、cookiesはブラウザに保存されます。sessionは通常、cookie内のセッションIDで識別されます。'
    },
    {
        id: 38,
        level: 'beginner',
        type: 'code-completion',
        title: 'ヘルパーメソッドの定義',
        question: 'コントローラーのメソッドをビューで使えるようにしてください',
        codeTemplate: 'class ApplicationController\n  ____ :current_user\nend',
        answer: 'helper_method',
        hints: ['hel...', 'helper...'],
        explanation: 'helper_methodを使用すると、コントローラーのメソッドをビューから呼び出せるようになります。'
    },
    {
        id: 39,
        level: 'beginner',
        type: 'multiple-choice',
        title: 'Gemfileの理解',
        code: 'gem "devise", "~> 4.8"',
        question: '~> 4.8 の意味は？',
        options: [
            { label: 'A', text: '4.8以上4.9未満のバージョン', correct: true },
            { label: 'B', text: '4.8以上のすべてのバージョン', correct: false },
            { label: 'C', text: '正確に4.8のみ', correct: false },
            { label: 'D', text: '4.0以上5.0未満', correct: false }
        ],
        explanation: '~>（pessimistic operator）は、指定したバージョン以上で、次のメジャー/マイナーバージョン未満を指定します。'
    },
    {
        id: 40,
        level: 'beginner',
        type: 'drag-drop',
        title: 'テストの種類',
        question: 'テストファイルを適切なディレクトリに配置してください',
        items: ['user_spec.rb', 'users_controller_spec.rb', 'user_system_spec.rb', 'user_helper_spec.rb', 'create_user_spec.rb', 'user_request_spec.rb'],
        categories: {
            'spec/models': ['user_spec.rb'],
            'spec/controllers': ['users_controller_spec.rb'],
            'spec/system': ['user_system_spec.rb'],
            'spec/requests': ['user_request_spec.rb']
        },
        explanation: 'RSpecでは、テストの種類に応じて適切なディレクトリに配置し、モデル、コントローラー、統合テストなどを分離します。'
    },
    {
        id: 41,
        level: 'intermediate',
        type: 'multiple-choice',
        title: 'polymorphic関連',
        code: 'class Comment < ApplicationRecord\n  belongs_to :commentable, polymorphic: true\nend',
        question: 'polymorphic関連で必要なカラムは？',
        options: [
            { label: 'A', text: 'commentable_typeとcommentable_id', correct: true },
            { label: 'B', text: 'comment_typeとcomment_id', correct: false },
            { label: 'C', text: 'polymorphic_id のみ', correct: false },
            { label: 'D', text: 'type_idとtype_name', correct: false }
        ],
        explanation: 'Polymorphic関連では、関連先のモデル名を保存する_typeカラムと、IDを保存する_idカラムが必要です。'
    },
    {
        id: 42,
        level: 'intermediate',
        type: 'code-completion',
        title: 'カウンターキャッシュ',
        question: 'カウンターキャッシュを有効にしてください',
        codeTemplate: 'belongs_to :user, ____: true',
        answer: 'counter_cache',
        hints: ['cou...', 'counter...'],
        explanation: 'counter_cacheを使用すると、関連レコードの数を親モデルのカラムにキャッシュし、パフォーマンスを向上させます。'
    },
    {
        id: 43,
        level: 'intermediate',
        type: 'multiple-choice',
        title: 'delegate の使い方',
        code: 'delegate :name, to: :user, prefix: true',
        question: 'このコードで作成されるメソッド名は？',
        options: [
            { label: 'A', text: 'user_name', correct: true },
            { label: 'B', text: 'name_user', correct: false },
            { label: 'C', text: 'name', correct: false },
            { label: 'D', text: 'delegated_name', correct: false }
        ],
        explanation: 'delegateのprefix: trueオプションは、委譲先オブジェクト名をプレフィックスとして付けたメソッドを作成します。'
    },
    {
        id: 44,
        level: 'intermediate',
        type: 'drag-drop',
        title: 'Active Recordクエリメソッド',
        question: 'クエリメソッドを適切なカテゴリに分類してください',
        items: ['where', 'order', 'first', 'pluck', 'joins', 'count'],
        categories: {
            '絞り込み': ['where', 'joins'],
            '並び替え': ['order'],
            '取得': ['first', 'pluck'],
            '集計': ['count']
        },
        explanation: 'Active Recordのクエリメソッドは、絞り込み、並び替え、取得、集計など用途別に分類できます。'
    },
    {
        id: 45,
        level: 'intermediate',
        type: 'multiple-choice',
        title: 'seedデータの作成',
        code: 'rails db:seed',
        question: 'このコマンドが実行するファイルは？',
        options: [
            { label: 'A', text: 'db/seeds.rb', correct: true },
            { label: 'B', text: 'db/seed.rb', correct: false },
            { label: 'C', text: 'config/seeds.rb', correct: false },
            { label: 'D', text: 'app/seeds.rb', correct: false }
        ],
        explanation: 'db:seedコマンドはdb/seeds.rbファイルを実行し、開発用の初期データを投入します。'
    },
    {
        id: 46,
        level: 'intermediate',
        type: 'code-completion',
        title: 'enum の定義',
        question: 'enumを使って状態を定義してください',
        codeTemplate: 'class Order < ApplicationRecord\n  ____ status: { pending: 0, shipped: 1, delivered: 2 }\nend',
        answer: 'enum',
        hints: ['en...', 'enu...'],
        explanation: 'enumを使用すると、整数値を意味のある名前にマッピングし、便利なメソッドを自動生成します。'
    },
    {
        id: 47,
        level: 'intermediate',
        type: 'multiple-choice',
        title: 'Asset Precompile',
        code: 'rails assets:precompile',
        question: 'このコマンドはいつ実行しますか？',
        options: [
            { label: 'A', text: '本番環境へのデプロイ時', correct: true },
            { label: 'B', text: '開発中に毎回', correct: false },
            { label: 'C', text: 'テスト実行前', correct: false },
            { label: 'D', text: 'マイグレーション後', correct: false }
        ],
        explanation: 'assets:precompileは本番環境用にアセットをコンパイル・圧縮し、パフォーマンスを最適化します。'
    },
    {
        id: 48,
        level: 'intermediate',
        type: 'multiple-choice',
        title: 'has_secure_password',
        code: 'has_secure_password',
        question: 'このメソッドが必要とするgemは？',
        options: [
            { label: 'A', text: 'bcrypt', correct: true },
            { label: 'B', text: 'devise', correct: false },
            { label: 'C', text: 'jwt', correct: false },
            { label: 'D', text: 'oauth2', correct: false }
        ],
        explanation: 'has_secure_passwordはbcrypt gemを使用してパスワードを安全にハッシュ化します。'
    },
    {
        id: 49,
        level: 'intermediate',
        type: 'code-completion',
        title: 'CSRFトークン',
        question: 'CSRFトークンをフォームに含めるヘルパーを入力してください',
        codeTemplate: '<%= ____ %>',
        answer: 'csrf_meta_tags',
        hints: ['csrf...', 'csrf_m...'],
        explanation: 'csrf_meta_tagsはCSRFトークンをmetaタグとして出力し、Ajaxリクエストなどで使用されます。'
    },
    {
        id: 50,
        level: 'intermediate',
        type: 'drag-drop',
        title: 'Rails環境変数',
        question: '環境変数を適切な用途に分類してください',
        items: ['RAILS_ENV', 'DATABASE_URL', 'SECRET_KEY_BASE', 'RAILS_MASTER_KEY', 'RAILS_LOG_LEVEL', 'RAILS_SERVE_STATIC_FILES'],
        categories: {
            '環境設定': ['RAILS_ENV', 'RAILS_LOG_LEVEL'],
            'セキュリティ': ['SECRET_KEY_BASE', 'RAILS_MASTER_KEY'],
            '接続設定': ['DATABASE_URL', 'RAILS_SERVE_STATIC_FILES']
        },
        explanation: 'Rails環境変数は、環境設定、セキュリティ、接続設定など様々な用途で使用されます。'
    },
    {
        id: 51,
        level: 'intermediate',
        type: 'multiple-choice',
        title: 'Turboの理解',
        code: 'data-turbo="false"',
        question: 'この属性の効果は？',
        options: [
            { label: 'A', text: 'Turboを無効化して通常のページ遷移', correct: true },
            { label: 'B', text: 'Turboを高速化', correct: false },
            { label: 'C', text: 'キャッシュを有効化', correct: false },
            { label: 'D', text: 'Ajaxリクエストに変換', correct: false }
        ],
        explanation: 'data-turbo="false"は特定のリンクやフォームでTurboを無効化し、通常のHTTPリクエストを行います。'
    },
    {
        id: 52,
        level: 'intermediate',
        type: 'code-completion',
        title: 'I18n の使用',
        question: '国際化のためのメソッドを完成させてください',
        codeTemplate: '<%= __.t("welcome.message") %>',
        answer: 'I18n',
        hints: ['I1...', 'I18...'],
        explanation: 'I18n.tメソッドは、ロケールファイルから翻訳されたテキストを取得します。'
    },
    {
        id: 53,
        level: 'intermediate',
        type: 'multiple-choice',
        title: 'Webpacker vs Sprockets',
        question: 'Rails 6以降でJavaScriptを管理する推奨ツールは？',
        options: [
            { label: 'A', text: 'Webpacker（Rails 7ではImportmap）', correct: true },
            { label: 'B', text: 'Sprockets', correct: false },
            { label: 'C', text: 'Browserify', correct: false },
            { label: 'D', text: 'Grunt', correct: false }
        ],
        explanation: 'Rails 6ではWebpackerが推奨され、Rails 7ではImportmapがデフォルトになりました。'
    },
    {
        id: 54,
        level: 'intermediate',
        type: 'drag-drop',
        title: 'Active Storageの理解',
        question: 'Active Storage関連のメソッドを分類してください',
        items: ['has_one_attached', 'has_many_attached', 'attach', 'purge', 'variant', 'preview'],
        categories: {
            'モデル定義': ['has_one_attached', 'has_many_attached'],
            'ファイル操作': ['attach', 'purge'],
            '画像処理': ['variant', 'preview']
        },
        explanation: 'Active Storageは、ファイルのアップロード、削除、画像処理などの機能を提供します。'
    },
    {
        id: 55,
        level: 'intermediate',
        type: 'multiple-choice',
        title: 'Rails credentials',
        code: 'Rails.application.credentials.secret_key',
        question: 'credentialsファイルを編集するコマンドは？',
        options: [
            { label: 'A', text: 'rails credentials:edit', correct: true },
            { label: 'B', text: 'rails edit:credentials', correct: false },
            { label: 'C', text: 'rails credentials:open', correct: false },
            { label: 'D', text: 'rails config:edit', correct: false }
        ],
        explanation: 'rails credentials:editコマンドで暗号化された認証情報を安全に編集できます。'
    },
    {
        id: 56,
        level: 'intermediate',
        type: 'code-completion',
        title: 'after_commit コールバック',
        question: 'トランザクション完了後に実行するコールバックを指定してください',
        codeTemplate: '____ :send_notification, on: :create',
        answer: 'after_commit',
        hints: ['after...', 'after_c...'],
        explanation: 'after_commitはトランザクションが正常にコミットされた後に実行され、外部サービスとの連携に適しています。'
    },
    {
        id: 57,
        level: 'intermediate',
        type: 'multiple-choice',
        title: 'touch: true の効果',
        code: 'belongs_to :post, touch: true',
        question: 'touch: trueの効果は？',
        options: [
            { label: 'A', text: '関連先のupdated_atを更新', correct: true },
            { label: 'B', text: '関連先を作成', correct: false },
            { label: 'C', text: '関連先を削除', correct: false },
            { label: 'D', text: 'キャッシュをクリア', correct: false }
        ],
        explanation: 'touch: trueオプションは、レコードが更新されたときに関連先のupdated_atタイムスタンプも更新します。'
    },
    {
        id: 58,
        level: 'intermediate',
        type: 'multiple-choice',
        title: 'pluckとselectの違い',
        code: 'User.pluck(:name)\nUser.select(:name)',
        question: 'pluckとselectの主な違いは？',
        options: [
            { label: 'A', text: 'pluckは配列、selectはActiveRecord::Relationを返す', correct: true },
            { label: 'B', text: '同じ結果を返す', correct: false },
            { label: 'C', text: 'pluckは遅い、selectは速い', correct: false },
            { label: 'D', text: 'selectは配列を返す', correct: false }
        ],
        explanation: 'pluckは指定したカラムの値を配列で返し、selectはActiveRecord::Relationオブジェクトを返します。'
    },
    {
        id: 59,
        level: 'intermediate',
        type: 'code-completion',
        title: 'find_or_create_by',
        question: 'レコードが存在しない場合に作成するメソッドを完成させてください',
        codeTemplate: 'User.______(email: "test@example.com")',
        answer: 'find_or_create_by',
        hints: ['find...', 'find_or...'],
        explanation: 'find_or_create_byは条件に一致するレコードを検索し、存在しない場合は新規作成します。'
    },
    {
        id: 60,
        level: 'intermediate',
        type: 'drag-drop',
        title: 'Railsキャッシング',
        question: 'キャッシング手法を適切な用途に分類してください',
        items: ['cache do', 'fragment_cache', 'Rails.cache.fetch', 'expires_in', 'fresh_when', 'stale?'],
        categories: {
            'ビューキャッシュ': ['cache do', 'fragment_cache'],
            'データキャッシュ': ['Rails.cache.fetch', 'expires_in'],
            'HTTPキャッシュ': ['fresh_when', 'stale?']
        },
        explanation: 'Railsは、ビュー、データ、HTTPレスポンスなど様々なレベルでキャッシングをサポートします。'
    },
    {
        id: 61,
        level: 'advanced',
        type: 'multiple-choice',
        title: 'prepend の動作',
        code: 'module MyModule\n  prepend OtherModule\nend',
        question: 'prependの特徴は？',
        options: [
            { label: 'A', text: 'メソッド探索順序の先頭に挿入', correct: true },
            { label: 'B', text: 'メソッド探索順序の最後に追加', correct: false },
            { label: 'C', text: 'includeと同じ', correct: false },
            { label: 'D', text: 'メソッドを上書き', correct: false }
        ],
        explanation: 'prependはモジュールをメソッド探索チェーンの先頭に挿入し、既存メソッドをオーバーライドできます。'
    },
    {
        id: 62,
        level: 'advanced',
        type: 'code-completion',
        title: 'method_missing',
        question: 'メソッドが見つからない時の処理を定義してください',
        codeTemplate: 'def ____(method_name, *args)\n  puts "Called: #{method_name}"\nend',
        answer: 'method_missing',
        hints: ['meth...', 'method_m...'],
        explanation: 'method_missingは存在しないメソッドが呼ばれたときに実行され、動的なメソッド処理を実装できます。'
    },
    {
        id: 63,
        level: 'advanced',
        type: 'multiple-choice',
        title: 'ActiveSupport::Concern',
        code: 'included do\n  scope :recent, -> { where("created_at > ?", 1.week.ago) }\nend',
        question: 'includedブロックはいつ実行されますか？',
        options: [
            { label: 'A', text: 'モジュールがincludeされた時', correct: true },
            { label: 'B', text: 'モジュールが定義された時', correct: false },
            { label: 'C', text: 'メソッドが呼ばれた時', correct: false },
            { label: 'D', text: 'アプリケーション起動時', correct: false }
        ],
        explanation: 'Concernのincludedブロックは、そのモジュールが他のクラスにincludeされた時に実行されます。'
    },
    {
        id: 64,
        level: 'advanced',
        type: 'drag-drop',
        title: 'メタプログラミング手法',
        question: 'メタプログラミング手法を分類してください',
        items: ['define_method', 'class_eval', 'instance_eval', 'send', 'respond_to?', 'method'],
        categories: {
            '動的定義': ['define_method', 'class_eval', 'instance_eval'],
            '動的呼び出し': ['send', 'method'],
            'イントロスペクション': ['respond_to?']
        },
        explanation: 'Rubyのメタプログラミングは、動的な定義、呼び出し、内省など様々な手法があります。'
    },
    {
        id: 65,
        level: 'advanced',
        type: 'multiple-choice',
        title: 'GraphQL in Rails',
        code: 'field :user, Types::UserType, null: false',
        question: 'GraphQLの利点は？',
        options: [
            { label: 'A', text: '必要なデータだけを取得できる', correct: true },
            { label: 'B', text: 'RESTより常に高速', correct: false },
            { label: 'C', text: 'キャッシュが簡単', correct: false },
            { label: 'D', text: 'セキュリティが自動化される', correct: false }
        ],
        explanation: 'GraphQLはクライアントが必要なデータを指定でき、オーバーフェッチやアンダーフェッチを防げます。'
    },
    {
        id: 66,
        level: 'advanced',
        type: 'code-completion',
        title: 'ActiveModel::Serializers',
        question: 'シリアライザーでの属性定義を完成させてください',
        codeTemplate: 'class UserSerializer < ActiveModel::Serializer\n  ____ :id, :name, :email\nend',
        answer: 'attributes',
        hints: ['attr...', 'attrib...'],
        explanation: 'ActiveModel::Serializersのattributesメソッドで、JSONに含める属性を指定します。'
    },
    {
        id: 67,
        level: 'advanced',
        type: 'multiple-choice',
        title: 'Database Sharding',
        code: 'connects_to shards: {\n  default: { writing: :primary },\n  shard_one: { writing: :primary_shard_one }\n}',
        question: 'Shardingの目的は？',
        options: [
            { label: 'A', text: 'データを複数DBに分散して負荷分散', correct: true },
            { label: 'B', text: 'バックアップの作成', correct: false },
            { label: 'C', text: 'トランザクションの高速化', correct: false },
            { label: 'D', text: 'マイグレーションの簡略化', correct: false }
        ],
        explanation: 'Shardingは大規模データを複数のデータベースに分散し、スケーラビリティを向上させます。'
    },
    {
        id: 68,
        level: 'advanced',
        type: 'multiple-choice',
        title: 'Sidekiq vs DelayedJob',
        question: 'Sidekiqの特徴は？',
        options: [
            { label: 'A', text: 'Redisを使用し高速処理', correct: true },
            { label: 'B', text: 'データベースにジョブを保存', correct: false },
            { label: 'C', text: '設定不要で動作', correct: false },
            { label: 'D', text: 'Rails標準機能', correct: false }
        ],
        explanation: 'SidekiqはRedisをバックエンドとして使用し、高速で効率的なバックグラウンドジョブ処理を提供します。'
    },
    {
        id: 69,
        level: 'advanced',
        type: 'code-completion',
        title: 'Custom Validator',
        question: 'カスタムバリデータークラスを完成させてください',
        codeTemplate: 'class EmailValidator < ActiveModel::____\n  def validate_each(record, attribute, value)\n  end\nend',
        answer: 'EachValidator',
        hints: ['Each...', 'EachVal...'],
        explanation: 'EachValidatorを継承してカスタムバリデータを作成し、複数のモデルで再利用できます。'
    },
    {
        id: 70,
        level: 'advanced',
        type: 'drag-drop',
        title: 'パフォーマンス最適化',
        question: '最適化手法を適切なカテゴリに分類してください',
        items: ['bullet gem', 'rack-mini-profiler', 'includes', 'counter_cache', 'database index', 'fragment caching'],
        categories: {
            'N+1問題対策': ['bullet gem', 'includes'],
            'クエリ最適化': ['counter_cache', 'database index'],
            'プロファイリング': ['rack-mini-profiler', 'fragment caching']
        },
        explanation: 'パフォーマンス最適化には、N+1問題の解決、クエリ最適化、プロファイリングなど様々なアプローチがあります。'
    },
    {
        id: 71,
        level: 'advanced',
        type: 'multiple-choice',
        title: 'Rails Engine',
        code: 'module MyEngine\n  class Engine < ::Rails::Engine\n  end\nend',
        question: 'Rails Engineの用途は？',
        options: [
            { label: 'A', text: '再利用可能なRailsアプリケーションの作成', correct: true },
            { label: 'B', text: 'JavaScriptエンジンの切り替え', correct: false },
            { label: 'C', text: 'データベースエンジンの設定', correct: false },
            { label: 'D', text: 'テンプレートエンジンの定義', correct: false }
        ],
        explanation: 'Rails Engineは、完全な機能を持つミニRailsアプリケーションで、他のRailsアプリに組み込めます。'
    },
    {
        id: 72,
        level: 'advanced',
        type: 'code-completion',
        title: 'around_action',
        question: 'around_actionコールバックを完成させてください',
        codeTemplate: '____ :wrap_in_transaction\n\ndef wrap_in_transaction\n  ActiveRecord::Base.transaction do\n    yield\n  end\nend',
        answer: 'around_action',
        hints: ['around...', 'around_a...'],
        explanation: 'around_actionはアクションの前後で処理を実行し、yieldでアクション本体を実行します。'
    },
    {
        id: 73,
        level: 'advanced',
        type: 'multiple-choice',
        title: 'Lazy Loading vs Eager Loading',
        code: 'User.all.each { |u| u.posts }',
        question: 'このコードの問題点は？',
        options: [
            { label: 'A', text: 'N+1クエリ問題が発生', correct: true },
            { label: 'B', text: 'メモリ不足になる', correct: false },
            { label: 'C', text: 'トランザクションエラー', correct: false },
            { label: 'D', text: '問題はない', correct: false }
        ],
        explanation: 'Lazy Loadingにより各ユーザーのpostsアクセス時に追加クエリが発生し、N+1問題となります。'
    },
    {
        id: 74,
        level: 'advanced',
        type: 'drag-drop',
        title: 'デプロイメントツール',
        question: 'デプロイメント関連ツールを分類してください',
        items: ['Capistrano', 'Docker', 'Kubernetes', 'Heroku', 'AWS ECS', 'GitHub Actions'],
        categories: {
            'デプロイ自動化': ['Capistrano', 'GitHub Actions'],
            'コンテナ化': ['Docker', 'Kubernetes', 'AWS ECS'],
            'PaaS': ['Heroku']
        },
        explanation: 'デプロイメントには、自動化ツール、コンテナ技術、PaaSなど様々な選択肢があります。'
    },
    {
        id: 75,
        level: 'advanced',
        type: 'multiple-choice',
        title: 'Database View in Rails',
        code: 'class ReportView < ApplicationRecord\n  self.table_name = "report_views"\n  self.primary_key = "id"\nend',
        question: 'データベースビューの利点は？',
        options: [
            { label: 'A', text: '複雑なクエリをシンプルに扱える', correct: true },
            { label: 'B', text: 'データ更新が高速', correct: false },
            { label: 'C', text: 'マイグレーション不要', correct: false },
            { label: 'D', text: 'インデックス不要', correct: false }
        ],
        explanation: 'データベースビューを使用すると、複雑なJOINやサブクエリを事前定義し、Railsから簡単にアクセスできます。'
    },
    {
        id: 76,
        level: 'beginner',
        type: 'multiple-choice',
        title: 'scaffoldの理解',
        code: 'rails generate scaffold Post title:string body:text',
        question: 'scaffoldコマンドが生成するものは？',
        options: [
            { label: 'A', text: 'モデル、ビュー、コントローラー、マイグレーション全て', correct: true },
            { label: 'B', text: 'モデルのみ', correct: false },
            { label: 'C', text: 'コントローラーのみ', correct: false },
            { label: 'D', text: 'ビューのみ', correct: false }
        ],
        explanation: 'scaffoldは完全なCRUD機能を持つリソースを一括生成する強力なジェネレータです。'
    },
    {
        id: 77,
        level: 'beginner',
        type: 'code-completion',
        title: 'params の取得',
        question: 'URLパラメータを取得するコードを完成させてください',
        codeTemplate: 'def show\n  @user = User.find(____[:id])\nend',
        answer: 'params',
        hints: ['par...', 'para...'],
        explanation: 'paramsハッシュには、URLパラメータ、フォームデータ、JSONデータなどが含まれます。'
    },
    {
        id: 78,
        level: 'beginner',
        type: 'multiple-choice',
        title: 'db:migrate vs db:schema:load',
        question: 'db:schema:loadを使うべき場面は？',
        options: [
            { label: 'A', text: '新しい開発環境のセットアップ時', correct: true },
            { label: 'B', text: '本番環境の更新時', correct: false },
            { label: 'C', text: 'マイグレーション作成後', correct: false },
            { label: 'D', text: 'データ投入時', correct: false }
        ],
        explanation: 'db:schema:loadは全マイグレーションを実行せずに、現在のスキーマを直接ロードするため高速です。'
    },
    {
        id: 79,
        level: 'beginner',
        type: 'drag-drop',
        title: 'RESTfulアクション',
        question: 'アクションを適切なHTTPメソッドにマッチングしてください',
        items: ['index', 'new', 'create', 'show', 'edit', 'update', 'destroy'],
        categories: {
            'GET': ['index', 'new', 'show', 'edit'],
            'POST': ['create'],
            'PATCH/PUT': ['update'],
            'DELETE': ['destroy']
        },
        explanation: 'RESTfulルーティングでは、各アクションが特定のHTTPメソッドと対応しています。'
    },
    {
        id: 80,
        level: 'beginner',
        type: 'multiple-choice',
        title: 'production.logの場所',
        question: 'Railsのproduction.logファイルのデフォルト保存場所は？',
        options: [
            { label: 'A', text: 'log/production.log', correct: true },
            { label: 'B', text: 'tmp/production.log', correct: false },
            { label: 'C', text: 'config/production.log', correct: false },
            { label: 'D', text: 'public/production.log', correct: false }
        ],
        explanation: 'Railsのログファイルはlog/ディレクトリに環境名.logという形式で保存されます。'
    },
    {
        id: 81,
        level: 'intermediate',
        type: 'code-completion',
        title: 'joinsとincludes',
        question: 'INNER JOINを実行するメソッドを入力してください',
        codeTemplate: 'User.____(posts).where(posts: { published: true })',
        answer: 'joins',
        hints: ['joi...', 'join...'],
        explanation: 'joinsはINNER JOINを実行し、includesと違い関連データをメモリにロードしません。'
    },
    {
        id: 82,
        level: 'intermediate',
        type: 'multiple-choice',
        title: 'dependent オプション',
        code: 'has_many :comments, dependent: :destroy',
        question: 'dependent: :destroyの動作は？',
        options: [
            { label: 'A', text: '親レコード削除時に子レコードも削除', correct: true },
            { label: 'B', text: '子レコード削除時に親レコードも削除', correct: false },
            { label: 'C', text: '削除を禁止', correct: false },
            { label: 'D', text: '外部キーをnullに設定', correct: false }
        ],
        explanation: 'dependent: :destroyは親レコードが削除されたときに、関連する子レコードも自動的に削除します。'
    },
    {
        id: 83,
        level: 'intermediate',
        type: 'drag-drop',
        title: 'Active Record Callbacks順序',
        question: '削除時のコールバックを実行順に並べてください',
        items: ['before_destroy', 'after_destroy', 'around_destroy (before)', 'around_destroy (after)', 'after_commit'],
        categories: {
            '1番目': ['around_destroy (before)'],
            '2番目': ['before_destroy'],
            '3番目': ['after_destroy'],
            '4番目': ['around_destroy (after)'],
            '5番目': ['after_commit']
        },
        explanation: '削除時のコールバックは、around → before → (削除) → after → commitの順で実行されます。'
    },
    {
        id: 84,
        level: 'intermediate',
        type: 'multiple-choice',
        title: 'Accept headers',
        code: 'respond_to do |format|\n  format.html\n  format.json { render json: @user }\nend',
        question: 'このコードは何に基づいて応答形式を決定しますか？',
        options: [
            { label: 'A', text: 'リクエストのAcceptヘッダーまたはURL拡張子', correct: true },
            { label: 'B', text: 'User-Agentヘッダー', correct: false },
            { label: 'C', text: 'クッキーの値', correct: false },
            { label: 'D', text: 'セッションデータ', correct: false }
        ],
        explanation: 'respond_toは、HTTPのAcceptヘッダーやURLの拡張子（.json等）に基づいて応答形式を選択します。'
    },
    {
        id: 85,
        level: 'intermediate',
        type: 'code-completion',
        title: 'unscoped の使用',
        question: 'デフォルトスコープを無視するメソッドを入力してください',
        codeTemplate: 'User.____.where(active: false)',
        answer: 'unscoped',
        hints: ['uns...', 'unsc...'],
        explanation: 'unscopedはモデルに定義されたデフォルトスコープを無視して、全レコードにアクセスできます。'
    },
    {
        id: 86,
        level: 'advanced',
        type: 'multiple-choice',
        title: 'Rails API-only mode',
        code: 'rails new my_api --api',
        question: 'API-onlyモードで無効化される機能は？',
        options: [
            { label: 'A', text: 'ビューレイヤーとセッション管理', correct: true },
            { label: 'B', text: 'Active Record', correct: false },
            { label: 'C', text: 'ルーティング', correct: false },
            { label: 'D', text: 'マイグレーション', correct: false }
        ],
        explanation: 'API-onlyモードでは、ビュー関連の機能やセッション、クッキーなどが無効化され、軽量なAPIサーバーになります。'
    },
    {
        id: 87,
        level: 'advanced',
        type: 'code-completion',
        title: 'Zeitwerk オートローダー',
        question: 'Rails 6以降のオートローダーの名前を入力してください',
        codeTemplate: 'config.autoloader = :____',
        answer: 'zeitwerk',
        hints: ['zeit...', 'zeitw...'],
        explanation: 'ZeitwerkはRails 6から導入された新しいオートローダーで、より予測可能な定数の自動読み込みを提供します。'
    },
    {
        id: 88,
        level: 'advanced',
        type: 'multiple-choice',
        title: 'Database Connection Pool',
        code: 'pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>',
        question: 'コネクションプールの目的は？',
        options: [
            { label: 'A', text: 'DB接続の再利用で性能向上', correct: true },
            { label: 'B', text: 'データのキャッシング', correct: false },
            { label: 'C', text: 'SQLインジェクション防止', correct: false },
            { label: 'D', text: 'トランザクション管理', correct: false }
        ],
        explanation: 'コネクションプールは、データベース接続を再利用することで、接続確立のオーバーヘッドを削減します。'
    },
    {
        id: 89,
        level: 'advanced',
        type: 'drag-drop',
        title: 'Security Headers',
        question: 'セキュリティヘッダーを適切な目的に分類してください',
        items: ['X-Frame-Options', 'X-Content-Type-Options', 'X-XSS-Protection', 'Content-Security-Policy', 'Strict-Transport-Security', 'X-Download-Options'],
        categories: {
            'クリックジャッキング対策': ['X-Frame-Options'],
            'XSS対策': ['X-XSS-Protection', 'Content-Security-Policy'],
            'HTTPS強制': ['Strict-Transport-Security'],
            'その他': ['X-Content-Type-Options', 'X-Download-Options']
        },
        explanation: 'Railsは様々なセキュリティヘッダーを自動的に設定し、一般的な攻撃から保護します。'
    },
    {
        id: 90,
        level: 'advanced',
        type: 'multiple-choice',
        title: 'Rails.cache戦略',
        code: 'Rails.cache.fetch("key", expires_in: 1.hour) { expensive_operation }',
        question: 'fetchメソッドの動作は？',
        options: [
            { label: 'A', text: 'キャッシュがなければブロックを実行して保存', correct: true },
            { label: 'B', text: '常にブロックを実行', correct: false },
            { label: 'C', text: 'キャッシュを削除', correct: false },
            { label: 'D', text: 'キャッシュの読み取りのみ', correct: false }
        ],
        explanation: 'fetchは「read-through」キャッシング戦略を実装し、キャッシュミス時に自動的に値を生成・保存します。'
    },
    {
        id: 91,
        level: 'advanced',
        type: 'code-completion',
        title: 'Custom Middleware',
        question: 'カスタムミドルウェアのメソッドを完成させてください',
        codeTemplate: 'class MyMiddleware\n  def initialize(app)\n    @app = app\n  end\n  \n  def ____(env)\n    @app.call(env)\n  end\nend',
        answer: 'call',
        hints: ['ca...', 'cal...'],
        explanation: 'Rackミドルウェアはcallメソッドを実装し、envを受け取って[status, headers, body]を返す必要があります。'
    },
    {
        id: 92,
        level: 'advanced',
        type: 'multiple-choice',
        title: 'Database Replica',
        code: 'connects_to database: { writing: :primary, reading: :replica }',
        question: 'レプリカDBの用途は？',
        options: [
            { label: 'A', text: '読み取り負荷の分散', correct: true },
            { label: 'B', text: '書き込み速度の向上', correct: false },
            { label: 'C', text: 'トランザクションの高速化', correct: false },
            { label: 'D', text: 'マイグレーションの並列実行', correct: false }
        ],
        explanation: 'レプリカDBは読み取り専用のデータベースコピーで、読み取り負荷を分散してスケーラビリティを向上させます。'
    },
    {
        id: 93,
        level: 'advanced',
        type: 'drag-drop',
        title: 'Rails 7の新機能',
        question: 'Rails 7の主要な新機能を分類してください',
        items: ['Hotwire', 'Import Maps', 'Encrypted Attributes', 'Async Queries', 'Error Reporting', 'Zeitwerk'],
        categories: {
            'フロントエンド': ['Hotwire', 'Import Maps'],
            'データベース': ['Encrypted Attributes', 'Async Queries'],
            'その他': ['Error Reporting', 'Zeitwerk']
        },
        explanation: 'Rails 7はフロントエンド開発の簡素化、データベース機能の強化、開発体験の向上に焦点を当てています。'
    },
    {
        id: 94,
        level: 'advanced',
        type: 'multiple-choice',
        title: 'ActionText の理解',
        code: 'has_rich_text :content',
        question: 'ActionTextが使用するエディタは？',
        options: [
            { label: 'A', text: 'Trix', correct: true },
            { label: 'B', text: 'TinyMCE', correct: false },
            { label: 'C', text: 'CKEditor', correct: false },
            { label: 'D', text: 'Quill', correct: false }
        ],
        explanation: 'ActionTextはBasecampが開発したTrixエディタを使用し、リッチテキスト編集機能を提供します。'
    },
    {
        id: 95,
        level: 'advanced',
        type: 'code-completion',
        title: 'GlobalID',
        question: 'オブジェクトをグローバルIDに変換するメソッドを入力してください',
        codeTemplate: 'user.____',
        answer: 'to_global_id',
        hints: ['to_g...', 'to_glob...'],
        explanation: 'GlobalIDはオブジェクトを一意に識別する文字列を生成し、Active Jobなどで使用されます。'
    },
    {
        id: 96,
        level: 'advanced',
        type: 'multiple-choice',
        title: 'Multi-database の設定',
        code: 'ActiveRecord::Base.connected_to(role: :writing)',
        question: 'connected_toメソッドの用途は？',
        options: [
            { label: 'A', text: '特定のDB接続を一時的に使用', correct: true },
            { label: 'B', text: 'DB接続を永続的に変更', correct: false },
            { label: 'C', text: 'DB接続を切断', correct: false },
            { label: 'D', text: '新しいDB作成', correct: false }
        ],
        explanation: 'connected_toブロック内で特定のデータベース接続（読み取り/書き込み）を一時的に使用できます。'
    },
    {
        id: 97,
        level: 'advanced',
        type: 'drag-drop',
        title: 'テスト戦略',
        question: 'テスト手法を適切なレベルに分類してください',
        items: ['Unit Test', 'Integration Test', 'System Test', 'Request Spec', 'Model Spec', 'Feature Spec'],
        categories: {
            '単体テスト': ['Unit Test', 'Model Spec'],
            '統合テスト': ['Integration Test', 'Request Spec'],
            'E2Eテスト': ['System Test', 'Feature Spec']
        },
        explanation: 'テストピラミッドに従い、単体テストを多く、E2Eテストを少なくすることで、高速で信頼性の高いテストスイートを構築します。'
    },
    {
        id: 98,
        level: 'advanced',
        type: 'multiple-choice',
        title: 'Rails Engines vs Gems',
        question: 'Rails EngineとGemの主な違いは？',
        options: [
            { label: 'A', text: 'EngineはMVCを含む完全なRailsアプリ', correct: true },
            { label: 'B', text: '違いはない', correct: false },
            { label: 'C', text: 'Gemの方が高機能', correct: false },
            { label: 'D', text: 'Engineはデータベース不要', correct: false }
        ],
        explanation: 'Rails EngineはMVC構造を持つミニRailsアプリで、Gemは一般的なRubyライブラリです。'
    },
    {
        id: 99,
        level: 'advanced',
        type: 'code-completion',
        title: 'ActiveSupport::CurrentAttributes',
        question: 'リクエストごとの属性を管理するクラスを継承してください',
        codeTemplate: 'class Current < ActiveSupport::____\n  attribute :user\nend',
        answer: 'CurrentAttributes',
        hints: ['Current...', 'CurrentAttr...'],
        explanation: 'CurrentAttributesはリクエストごとにリセットされる属性を管理し、グローバル状態を安全に扱えます。'
    },
    {
        id: 100,
        level: 'advanced',
        type: 'multiple-choice',
        title: 'Rails Performance 最適化',
        question: '最も効果的なパフォーマンス改善は？',
        options: [
            { label: 'A', text: '適切なインデックスとクエリ最適化', correct: true },
            { label: 'B', text: 'Rubyバージョンアップ', correct: false },
            { label: 'C', text: 'サーバー増設', correct: false },
            { label: 'D', text: 'gem追加', correct: false }
        ],
        explanation: 'パフォーマンス問題の多くはデータベースクエリが原因です。適切なインデックスとクエリ最適化が最も効果的です。'
    }
];

function getQuizByLevel(level) {
    return quizData.filter(quiz => quiz.level === level);
}

function getQuizById(id) {
    return quizData.find(quiz => quiz.id === id);
}

function getRandomQuiz() {
    const randomIndex = Math.floor(Math.random() * quizData.length);
    return quizData[randomIndex];
}

function getTotalQuizCount() {
    return quizData.length;
}

function getQuizCountByLevel(level) {
    return quizData.filter(quiz => quiz.level === level).length;
}
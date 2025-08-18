const questions = [
    // ========== 超初級編: Railsとは？ (1-20) ==========
    {
        id: 1,
        level: "超初級",
        category: "Railsとは",
        question: "Ruby on Railsは何を作るためのツールですか？",
        options: [
            "Webアプリケーション（ウェブサイト）",
            "スマートフォンアプリ",
            "ゲーム",
            "画像編集ソフト"
        ],
        correct: 0,
        explanation: "Ruby on RailsはWebアプリケーション（ウェブサイト）を作るためのフレームワークです。TwitterやGitHubもRailsで作られています。"
    },
    {
        id: 2,
        level: "超初級",
        category: "Railsとは",
        question: "Railsを使うメリットは何ですか？",
        options: [
            "開発が速くできる",
            "コンピュータが速くなる",
            "インターネットが速くなる",
            "タイピングが速くなる"
        ],
        correct: 0,
        explanation: "Railsは「設定より規約」という考え方で、よく使う機能が最初から用意されているため、開発スピードが速くなります。"
    },
    {
        id: 3,
        level: "超初級",
        category: "プログラミング基礎",
        question: "プログラミングで「変数」とは何ですか？",
        options: [
            "データを入れる箱のようなもの",
            "計算式",
            "画面に表示される文字",
            "インターネットの速度"
        ],
        correct: 0,
        explanation: "変数は値（データ）を一時的に保存しておく「箱」のようなものです。例: name = '太郎' のように使います。"
    },
    {
        id: 4,
        level: "超初級",
        category: "Web基礎",
        question: "ウェブサイトを見る時、最初に何が起きますか？",
        options: [
            "ブラウザがサーバーにページをリクエスト（要求）する",
            "サーバーが勝手にページを送ってくる",
            "パソコンがページを作る",
            "インターネットがページを作る"
        ],
        correct: 0,
        explanation: "ブラウザ（Chrome等）がサーバーに「このページください」とリクエストを送り、サーバーがページを返します。"
    },
    {
        id: 5,
        level: "超初級",
        category: "データベース基礎",
        question: "データベースは何をする場所ですか？",
        options: [
            "データを保存して管理する場所",
            "計算をする場所",
            "画面を表示する場所",
            "インターネットに接続する場所"
        ],
        correct: 0,
        explanation: "データベースは、ユーザー情報や商品情報などのデータを整理して保存し、必要な時に取り出せる場所です。"
    },
    {
        id: 6,
        level: "超初級",
        category: "MVC基礎",
        question: "MVCの「M」は何の略ですか？",
        options: [
            "Model（モデル）",
            "Manager（マネージャー）",
            "Machine（マシン）",
            "Money（マネー）"
        ],
        correct: 0,
        explanation: "Model（モデル）はデータを扱う部分です。データベースとのやり取りやデータの処理を担当します。"
    },
    {
        id: 7,
        level: "超初級",
        category: "MVC基礎",
        question: "MVCの「V」は何の略ですか？",
        options: [
            "View（ビュー）",
            "Version（バージョン）",
            "Video（ビデオ）",
            "Value（バリュー）"
        ],
        correct: 0,
        explanation: "View（ビュー）は画面表示を担当します。HTMLやCSSで見た目を作る部分です。"
    },
    {
        id: 8,
        level: "超初級",
        category: "MVC基礎",
        question: "MVCの「C」は何の略ですか？",
        options: [
            "Controller（コントローラー）",
            "Computer（コンピューター）",
            "Code（コード）",
            "Create（クリエイト）"
        ],
        correct: 0,
        explanation: "Controller（コントローラー）は、ユーザーからのリクエストを受け取り、ModelとViewをつなぐ司令塔の役割をします。"
    },
    {
        id: 9,
        level: "超初級",
        category: "ファイル構造",
        question: "Railsアプリの「app」フォルダには何が入っていますか？",
        options: [
            "アプリケーションの主要なコード",
            "設定ファイル",
            "画像ファイル",
            "データベースファイル"
        ],
        correct: 0,
        explanation: "appフォルダには、models、views、controllersなど、アプリケーションの主要なコードが入っています。"
    },
    {
        id: 10,
        level: "超初級",
        category: "コマンド基礎",
        question: "ターミナル（コマンドプロンプト）とは何ですか？",
        options: [
            "文字でコンピュータに命令を送るツール",
            "文書を作成するソフト",
            "画像を編集するソフト",
            "インターネットブラウザ"
        ],
        correct: 0,
        explanation: "ターミナルは、文字（コマンド）を入力してコンピュータに命令を送るツールです。Railsの操作によく使います。"
    },
    {
        id: 11,
        level: "超初級",
        category: "HTTP基礎",
        question: "URLの「http://」は何を意味しますか？",
        options: [
            "通信のルール（プロトコル）",
            "ウェブサイトの名前",
            "サーバーの場所",
            "ファイルの種類"
        ],
        correct: 0,
        explanation: "httpは「HyperText Transfer Protocol」の略で、ブラウザとサーバーが通信するためのルールです。"
    },
    {
        id: 12,
        level: "超初級",
        category: "開発環境",
        question: "開発環境とは何ですか？",
        options: [
            "プログラムを作ったりテストしたりする環境",
            "実際にユーザーが使う環境",
            "インターネット環境",
            "会社の環境"
        ],
        correct: 0,
        explanation: "開発環境は、プログラマーが自分のパソコンでコードを書いたりテストしたりする環境です。"
    },
    {
        id: 13,
        level: "超初級",
        category: "Git基礎",
        question: "Gitは何をするツールですか？",
        options: [
            "コードの変更履歴を管理する",
            "画像を編集する",
            "ウェブサイトを見る",
            "メールを送る"
        ],
        correct: 0,
        explanation: "Gitはコードの変更履歴を管理し、過去のバージョンに戻したり、チームで共同作業したりできるツールです。"
    },
    {
        id: 14,
        level: "超初級",
        category: "エラー理解",
        question: "エラーメッセージが出たら最初に何をすべきですか？",
        options: [
            "エラーメッセージを読む",
            "コンピュータを再起動する",
            "新しいファイルを作る",
            "諦める"
        ],
        correct: 0,
        explanation: "エラーメッセージには問題の原因と解決のヒントが書かれています。まずは落ち着いて読むことが大切です。"
    },
    {
        id: 15,
        level: "超初級",
        category: "HTML基礎",
        question: "HTMLは何の略ですか？",
        options: [
            "HyperText Markup Language",
            "High Tech Modern Language",
            "Home Tool Management Language",
            "Happy Time Music Language"
        ],
        correct: 0,
        explanation: "HTMLは「HyperText Markup Language」の略で、ウェブページの構造を作るための言語です。"
    },
    {
        id: 16,
        level: "超初級",
        category: "CSS基礎",
        question: "CSSは何をするための言語ですか？",
        options: [
            "ウェブページの見た目を装飾する",
            "計算をする",
            "データを保存する",
            "メールを送る"
        ],
        correct: 0,
        explanation: "CSS（Cascading Style Sheets）は、HTMLで作った構造に色やレイアウトなどの装飾を加える言語です。"
    },
    {
        id: 17,
        level: "超初級",
        category: "JavaScript基礎",
        question: "JavaScriptは主に何をする言語ですか？",
        options: [
            "ウェブページに動きをつける",
            "データベースを管理する",
            "メールを送る",
            "画像を編集する"
        ],
        correct: 0,
        explanation: "JavaScriptは、ボタンをクリックしたときの動作など、ウェブページに動的な機能を追加する言語です。"
    },
    {
        id: 18,
        level: "超初級",
        category: "サーバー基礎",
        question: "サーバーとは何ですか？",
        options: [
            "ウェブサイトのデータを保管して提供するコンピュータ",
            "インターネット回線",
            "パソコンの画面",
            "キーボード"
        ],
        correct: 0,
        explanation: "サーバーは、ウェブサイトのファイルやデータを保管し、ユーザーのリクエストに応じて提供するコンピュータです。"
    },
    {
        id: 19,
        level: "超初級",
        category: "Ruby基礎",
        question: "Rubyはどんな特徴を持つプログラミング言語ですか？",
        options: [
            "人間にとって読みやすく書きやすい",
            "コンピュータだけが理解できる",
            "数字しか扱えない",
            "英語しか使えない"
        ],
        correct: 0,
        explanation: "Rubyは「楽しくプログラミングできる」ことを目指して作られた、人間にとって読みやすく書きやすい言語です。"
    },
    {
        id: 20,
        level: "超初級",
        category: "デバッグ基礎",
        question: "「デバッグ」とは何をすることですか？",
        options: [
            "プログラムのバグ（間違い）を見つけて直す",
            "新しい機能を追加する",
            "プログラムを速くする",
            "プログラムを削除する"
        ],
        correct: 0,
        explanation: "デバッグは、プログラムの不具合（バグ）を見つけて修正する作業です。開発の重要な部分です。"
    },

    // ========== 初級編: Rails基本操作 (21-60) ==========
    {
        id: 21,
        level: "初級",
        category: "Rails環境構築",
        question: "新しいRailsアプリを作るコマンドは？",
        options: [
            "rails new アプリ名",
            "rails create アプリ名",
            "rails make アプリ名",
            "rails start アプリ名"
        ],
        correct: 0,
        explanation: "rails new アプリ名 で新しいRailsアプリケーションを作成します。必要なファイルが自動で生成されます。"
    },
    {
        id: 22,
        level: "初級",
        category: "Rails環境構築",
        question: "Railsサーバーを起動するコマンドは？",
        options: [
            "rails server",
            "rails start",
            "rails run",
            "rails go"
        ],
        correct: 0,
        explanation: "rails server（短縮形: rails s）でサーバーを起動し、ブラウザでアプリを確認できます。"
    },
    {
        id: 23,
        level: "初級",
        category: "MVC実践",
        question: "ユーザーがURLにアクセスした時、最初に処理を受け取るのは？",
        options: [
            "ルーティング（routes.rb）",
            "モデル",
            "ビュー",
            "データベース"
        ],
        correct: 0,
        explanation: "ルーティング（config/routes.rb）が最初にURLを解析し、適切なコントローラーに処理を振り分けます。"
    },
    {
        id: 24,
        level: "初級",
        category: "MVC実践",
        question: "コントローラーの役割を一言で表すと？",
        options: [
            "交通整理役",
            "データ保存役",
            "画面表示役",
            "計算役"
        ],
        correct: 0,
        explanation: "コントローラーは、リクエストを受け取り、モデルとビューを適切につなぐ「交通整理役」です。"
    },
    {
        id: 25,
        level: "初級",
        category: "ルーティング基礎",
        question: "routes.rbファイルはどこにありますか？",
        options: [
            "config/routes.rb",
            "app/routes.rb",
            "db/routes.rb",
            "routes.rb"
        ],
        correct: 0,
        explanation: "ルーティング設定ファイルは config/routes.rb にあります。URLとコントローラーの対応を設定します。"
    },
    {
        id: 26,
        level: "初級",
        category: "コントローラー基礎",
        question: "コントローラーファイルはどこに作られますか？",
        options: [
            "app/controllers/",
            "app/models/",
            "app/views/",
            "controllers/"
        ],
        correct: 0,
        explanation: "コントローラーファイルは app/controllers/ ディレクトリに作成されます。"
    },
    {
        id: 27,
        level: "初級",
        category: "ビュー基礎",
        question: "ビューファイルの拡張子は通常何ですか？",
        options: [
            ".html.erb",
            ".html",
            ".rb",
            ".css"
        ],
        correct: 0,
        explanation: ".html.erbはHTMLにRubyコードを埋め込めるERB（Embedded Ruby）形式のファイルです。"
    },
    {
        id: 28,
        level: "初級",
        category: "モデル基礎",
        question: "モデルファイルはどこに作られますか？",
        options: [
            "app/models/",
            "app/controllers/",
            "app/views/",
            "models/"
        ],
        correct: 0,
        explanation: "モデルファイルは app/models/ ディレクトリに作成されます。"
    },
    {
        id: 29,
        level: "初級",
        category: "データベース基礎",
        question: "Railsでデータベースにテーブルを作る時に使うのは？",
        options: [
            "マイグレーション",
            "コントローラー",
            "ビュー",
            "ルーティング"
        ],
        correct: 0,
        explanation: "マイグレーションファイルを使ってデータベースのテーブルを作成・変更します。"
    },
    {
        id: 30,
        level: "初級",
        category: "マイグレーション基礎",
        question: "マイグレーションファイルはどこに作られますか？",
        options: [
            "db/migrate/",
            "app/migrate/",
            "config/migrate/",
            "migrate/"
        ],
        correct: 0,
        explanation: "マイグレーションファイルは db/migrate/ ディレクトリに、タイムスタンプ付きで作成されます。"
    },
    {
        id: 31,
        level: "初級",
        category: "マイグレーション基礎",
        question: "マイグレーションを実行するコマンドは？",
        options: [
            "rails db:migrate",
            "rails migrate",
            "rails database:migrate",
            "rails run:migrate"
        ],
        correct: 0,
        explanation: "rails db:migrate コマンドで、未実行のマイグレーションを実行してデータベースを更新します。"
    },
    {
        id: 32,
        level: "初級",
        category: "CRUD基礎",
        question: "CRUDの「C」は何の略？",
        options: [
            "Create（作成）",
            "Copy（コピー）",
            "Change（変更）",
            "Cancel（キャンセル）"
        ],
        correct: 0,
        explanation: "Create（作成）- 新しいデータを作成する操作です。"
    },
    {
        id: 33,
        level: "初級",
        category: "CRUD基礎",
        question: "CRUDの「R」は何の略？",
        options: [
            "Read（読み取り）",
            "Remove（削除）",
            "Replace（置換）",
            "Return（戻る）"
        ],
        correct: 0,
        explanation: "Read（読み取り）- データを表示・取得する操作です。"
    },
    {
        id: 34,
        level: "初級",
        category: "CRUD基礎",
        question: "CRUDの「U」は何の略？",
        options: [
            "Update（更新）",
            "Upload（アップロード）",
            "Use（使用）",
            "Undo（元に戻す）"
        ],
        correct: 0,
        explanation: "Update（更新）- 既存のデータを変更する操作です。"
    },
    {
        id: 35,
        level: "初級",
        category: "CRUD基礎",
        question: "CRUDの「D」は何の略？",
        options: [
            "Delete（削除）",
            "Download（ダウンロード）",
            "Display（表示）",
            "Data（データ）"
        ],
        correct: 0,
        explanation: "Delete（削除）- データを削除する操作です。"
    },
    {
        id: 36,
        level: "初級",
        category: "RESTful基礎",
        question: "RESTfulな設計で、一覧表示のアクション名は？",
        options: [
            "index",
            "list",
            "all",
            "show_all"
        ],
        correct: 0,
        explanation: "indexアクションは、リソースの一覧を表示する標準的なアクション名です。"
    },
    {
        id: 37,
        level: "初級",
        category: "RESTful基礎",
        question: "RESTfulな設計で、詳細表示のアクション名は？",
        options: [
            "show",
            "detail",
            "view",
            "display"
        ],
        correct: 0,
        explanation: "showアクションは、特定のリソースの詳細を表示する標準的なアクション名です。"
    },
    {
        id: 38,
        level: "初級",
        category: "RESTful基礎",
        question: "RESTfulな設計で、新規作成フォーム表示のアクション名は？",
        options: [
            "new",
            "create_form",
            "add",
            "make"
        ],
        correct: 0,
        explanation: "newアクションは、新規作成フォームを表示するための標準的なアクション名です。"
    },
    {
        id: 39,
        level: "初級",
        category: "RESTful基礎",
        question: "RESTfulな設計で、データ保存のアクション名は？",
        options: [
            "create",
            "save",
            "store",
            "add"
        ],
        correct: 0,
        explanation: "createアクションは、新しいリソースをデータベースに保存する標準的なアクション名です。"
    },
    {
        id: 40,
        level: "初級",
        category: "フォーム基礎",
        question: "Railsでフォームを作る時に使うヘルパーメソッドは？",
        options: [
            "form_with",
            "form_make",
            "create_form",
            "build_form"
        ],
        correct: 0,
        explanation: "form_withヘルパーメソッドを使って、HTMLフォームを簡単に作成できます。"
    },
    {
        id: 41,
        level: "初級",
        category: "リンク作成",
        question: "Railsでリンクを作るヘルパーメソッドは？",
        options: [
            "link_to",
            "create_link",
            "make_link",
            "url_to"
        ],
        correct: 0,
        explanation: "link_toヘルパーメソッドを使って、HTMLのリンク（aタグ）を作成します。"
    },
    {
        id: 42,
        level: "初級",
        category: "パラメータ基礎",
        question: "フォームから送られたデータは何に入っていますか？",
        options: [
            "params",
            "data",
            "form_data",
            "request_data"
        ],
        correct: 0,
        explanation: "paramsハッシュに、フォームやURLから送られたデータが入っています。"
    },
    {
        id: 43,
        level: "初級",
        category: "ビュー変数",
        question: "コントローラーからビューに値を渡す時に使う変数の記号は？",
        options: [
            "@（アットマーク）",
            "$（ドルマーク）",
            "#（シャープ）",
            "%（パーセント）"
        ],
        correct: 0,
        explanation: "@をつけたインスタンス変数（例: @user）を使って、コントローラーからビューに値を渡します。"
    },
    {
        id: 44,
        level: "初級",
        category: "ERBタグ",
        question: "ERBでRubyコードの結果を表示する時のタグは？",
        options: [
            "<%= %>",
            "<% %>",
            "{{ }}",
            "[[ ]]"
        ],
        correct: 0,
        explanation: "<%= %>タグを使うと、Rubyコードの実行結果がHTMLに表示されます。"
    },
    {
        id: 45,
        level: "初級",
        category: "ERBタグ",
        question: "ERBでRubyコードを実行だけする（表示しない）時のタグは？",
        options: [
            "<% %>",
            "<%= %>",
            "{{ }}",
            "[[ ]]"
        ],
        correct: 0,
        explanation: "<% %>タグを使うと、Rubyコードを実行しますが、結果は表示されません。"
    },
    {
        id: 46,
        level: "初級",
        category: "コンソール",
        question: "Railsコンソールを起動するコマンドは？",
        options: [
            "rails console",
            "rails terminal",
            "rails cmd",
            "rails shell"
        ],
        correct: 0,
        explanation: "rails console（短縮形: rails c）で、対話的にRailsアプリケーションを操作できます。"
    },
    {
        id: 47,
        level: "初級",
        category: "ActiveRecord基礎",
        question: "モデルで全てのデータを取得するメソッドは？",
        options: [
            "Model.all",
            "Model.get_all",
            "Model.fetch_all",
            "Model.select_all"
        ],
        correct: 0,
        explanation: "Model.all（例: User.all）で、そのモデルの全てのレコードを取得できます。"
    },
    {
        id: 48,
        level: "初級",
        category: "ActiveRecord基礎",
        question: "IDを指定してデータを1件取得するメソッドは？",
        options: [
            "Model.find(id)",
            "Model.get(id)",
            "Model.select(id)",
            "Model.fetch(id)"
        ],
        correct: 0,
        explanation: "Model.find(id)（例: User.find(1)）で、指定したIDのレコードを取得します。"
    },
    {
        id: 49,
        level: "初級",
        category: "ActiveRecord基礎",
        question: "新しいデータを作成して保存するメソッドは？",
        options: [
            "Model.create",
            "Model.make",
            "Model.build",
            "Model.add"
        ],
        correct: 0,
        explanation: "Model.create（例: User.create(name: '太郎')）で、新しいレコードを作成して保存します。"
    },
    {
        id: 50,
        level: "初級",
        category: "バリデーション基礎",
        question: "バリデーションとは何ですか？",
        options: [
            "データの正しさをチェックする仕組み",
            "データを暗号化する仕組み",
            "データを圧縮する仕組み",
            "データを複製する仕組み"
        ],
        correct: 0,
        explanation: "バリデーションは、データベースに保存する前にデータが正しいかチェックする仕組みです。"
    },
    {
        id: 51,
        level: "初級",
        category: "バリデーション基礎",
        question: "必須項目のバリデーションを設定するには？",
        options: [
            "validates :カラム名, presence: true",
            "validates :カラム名, required: true",
            "validates :カラム名, must: true",
            "validates :カラム名, need: true"
        ],
        correct: 0,
        explanation: "presence: trueを指定すると、そのカラムが空でないことをチェックします。"
    },
    {
        id: 52,
        level: "初級",
        category: "ヘルパーメソッド",
        question: "画像を表示するヘルパーメソッドは？",
        options: [
            "image_tag",
            "img_tag",
            "picture_tag",
            "photo_tag"
        ],
        correct: 0,
        explanation: "image_tagヘルパーメソッドで、HTMLのimgタグを生成できます。"
    },
    {
        id: 53,
        level: "初級",
        category: "レイアウト",
        question: "全ページ共通のレイアウトファイルはどこにある？",
        options: [
            "app/views/layouts/application.html.erb",
            "app/views/application.html.erb",
            "layouts/application.html.erb",
            "app/layouts/application.html.erb"
        ],
        correct: 0,
        explanation: "application.html.erbは全ページで共通して使われるレイアウトファイルです。"
    },
    {
        id: 54,
        level: "初級",
        category: "アセット",
        question: "CSSファイルを置く場所は？",
        options: [
            "app/assets/stylesheets/",
            "app/assets/css/",
            "app/stylesheets/",
            "public/css/"
        ],
        correct: 0,
        explanation: "CSSファイルは app/assets/stylesheets/ ディレクトリに配置します。"
    },
    {
        id: 55,
        level: "初級",
        category: "アセット",
        question: "JavaScriptファイルを置く場所は？",
        options: [
            "app/assets/javascripts/",
            "app/assets/js/",
            "app/javascripts/",
            "public/js/"
        ],
        correct: 0,
        explanation: "JavaScriptファイルは app/assets/javascripts/ ディレクトリに配置します（Rails 6以前）。"
    },
    {
        id: 56,
        level: "初級",
        category: "Gemfile",
        question: "Gemfileは何を管理するファイル？",
        options: [
            "使用するRubyライブラリ（gem）",
            "データベースの設定",
            "ルーティングの設定",
            "ユーザー情報"
        ],
        correct: 0,
        explanation: "Gemfileは、アプリケーションで使用するRubyライブラリ（gem）を管理します。"
    },
    {
        id: 57,
        level: "初級",
        category: "bundle",
        question: "Gemfileに記載したgemをインストールするコマンドは？",
        options: [
            "bundle install",
            "gem install",
            "rails install",
            "ruby install"
        ],
        correct: 0,
        explanation: "bundle installコマンドで、Gemfileに記載された全てのgemをインストールします。"
    },
    {
        id: 58,
        level: "初級",
        category: "環境設定",
        question: "Railsの3つの基本環境は？",
        options: [
            "development, test, production",
            "local, staging, production",
            "dev, test, prod",
            "開発, テスト, 本番"
        ],
        correct: 0,
        explanation: "development（開発）、test（テスト）、production（本番）の3つが基本環境です。"
    },
    {
        id: 59,
        level: "初級",
        category: "ログ",
        question: "開発環境のログファイルはどこにある？",
        options: [
            "log/development.log",
            "logs/dev.log",
            "development.log",
            "app/logs/development.log"
        ],
        correct: 0,
        explanation: "開発環境のログは log/development.log に記録されます。エラーの調査に使います。"
    },
    {
        id: 60,
        level: "初級",
        category: "セキュリティ基礎",
        question: "Strong Parametersは何を防ぐ仕組み？",
        options: [
            "不正なパラメータの受け取り",
            "パスワードの漏洩",
            "SQLインジェクション",
            "クロスサイトスクリプティング"
        ],
        correct: 0,
        explanation: "Strong Parametersは、許可したパラメータのみを受け取ることで、不正なデータの混入を防ぎます。"
    },

    // ========== 中級編: 実践的な開発 (61-120) ==========
    {
        id: 61,
        level: "中級",
        category: "関連付け（Association）",
        question: "1対多の関係で、「1」側に書くメソッドは？",
        options: [
            "has_many",
            "belongs_to",
            "has_one",
            "has_and_belongs_to_many"
        ],
        correct: 0,
        explanation: "has_manyは1対多の「1」側に書きます。例: User has_many :posts（ユーザーは複数の投稿を持つ）"
    },
    {
        id: 62,
        level: "中級",
        category: "関連付け（Association）",
        question: "1対多の関係で、「多」側に書くメソッドは？",
        options: [
            "belongs_to",
            "has_many",
            "has_one",
            "has_and_belongs_to_many"
        ],
        correct: 0,
        explanation: "belongs_toは1対多の「多」側に書きます。例: Post belongs_to :user（投稿は1人のユーザーに属する）"
    },
    {
        id: 63,
        level: "中級",
        category: "関連付け（Association）",
        question: "UserとPostが1対多の時、user.postsで何が取得できる？",
        options: [
            "そのユーザーの全ての投稿",
            "全ユーザーの投稿",
            "最新の投稿1件",
            "投稿の数"
        ],
        correct: 0,
        explanation: "user.postsで、そのユーザーに関連付けられた全ての投稿を取得できます。"
    },
    {
        id: 64,
        level: "中級",
        category: "関連付け（Association）",
        question: "PostがUserに属する時、post.userで何が取得できる？",
        options: [
            "その投稿を作成したユーザー",
            "全てのユーザー",
            "ユーザーのID",
            "ユーザーの名前"
        ],
        correct: 0,
        explanation: "post.userで、その投稿に関連付けられたユーザーオブジェクトを取得できます。"
    },
    {
        id: 65,
        level: "中級",
        category: "マイグレーション実践",
        question: "外部キー（user_id等）を追加する時の型は？",
        options: [
            "references または integer",
            "string",
            "text",
            "foreign_key"
        ],
        correct: 0,
        explanation: "referencesを使うと外部キーとインデックスが自動で作成されます。integerでも可能です。"
    },
    {
        id: 66,
        level: "中級",
        category: "コールバック",
        question: "データ保存前に実行される処理を書く場所は？",
        options: [
            "before_save",
            "after_save",
            "before_action",
            "after_action"
        ],
        correct: 0,
        explanation: "before_saveコールバックで、データが保存される直前に処理を実行できます。"
    },
    {
        id: 67,
        level: "中級",
        category: "コールバック",
        question: "コントローラーでアクション実行前の処理を書く場所は？",
        options: [
            "before_action",
            "before_save",
            "before_filter",
            "before_process"
        ],
        correct: 0,
        explanation: "before_actionで、特定のアクションの前に共通処理（認証チェック等）を実行できます。"
    },
    {
        id: 68,
        level: "中級",
        category: "スコープ",
        question: "よく使う検索条件を定義する機能は？",
        options: [
            "scope",
            "filter",
            "search",
            "query"
        ],
        correct: 0,
        explanation: "scopeを使って、よく使う検索条件に名前を付けて再利用できます。例: scope :published, -> { where(published: true) }"
    },
    {
        id: 69,
        level: "中級",
        category: "クエリメソッド",
        question: "条件に合うデータを検索するメソッドは？",
        options: [
            "where",
            "find",
            "search",
            "filter"
        ],
        correct: 0,
        explanation: "whereメソッドで条件を指定してデータを検索します。例: User.where(age: 20)"
    },
    {
        id: 70,
        level: "中級",
        category: "クエリメソッド",
        question: "データを並び替えるメソッドは？",
        options: [
            "order",
            "sort",
            "arrange",
            "orderby"
        ],
        correct: 0,
        explanation: "orderメソッドでデータを並び替えます。例: User.order(created_at: :desc)"
    },
    {
        id: 71,
        level: "中級",
        category: "クエリメソッド",
        question: "取得するデータ数を制限するメソッドは？",
        options: [
            "limit",
            "max",
            "take",
            "first"
        ],
        correct: 0,
        explanation: "limitメソッドで取得するレコード数を制限します。例: User.limit(10)"
    },
    {
        id: 72,
        level: "中級",
        category: "パーシャル",
        question: "部分テンプレート（パーシャル）のファイル名の特徴は？",
        options: [
            "先頭にアンダースコア（_）が付く",
            "末尾にアンダースコア（_）が付く",
            ".partial拡張子を使う",
            "partialフォルダに入れる"
        ],
        correct: 0,
        explanation: "パーシャルのファイル名は_で始まります。例: _form.html.erb"
    },
    {
        id: 73,
        level: "中級",
        category: "パーシャル",
        question: "パーシャルを呼び出すメソッドは？",
        options: [
            "render",
            "include",
            "partial",
            "load"
        ],
        correct: 0,
        explanation: "renderメソッドでパーシャルを呼び出します。例: <%= render 'form' %>"
    },
    {
        id: 74,
        level: "中級",
        category: "セッション",
        question: "ユーザーのログイン状態を保持するのに使うのは？",
        options: [
            "session",
            "cookie",
            "cache",
            "storage"
        ],
        correct: 0,
        explanation: "sessionを使ってユーザーのログイン状態などを一時的に保存します。"
    },
    {
        id: 75,
        level: "中級",
        category: "フラッシュメッセージ",
        question: "次のリクエストまで一時的にメッセージを表示する機能は？",
        options: [
            "flash",
            "alert",
            "notice",
            "message"
        ],
        correct: 0,
        explanation: "flashを使って「保存しました」などのメッセージを次のページで表示できます。"
    },
    {
        id: 76,
        level: "中級",
        category: "認証",
        question: "has_secure_passwordを使うために必要なカラム名は？",
        options: [
            "password_digest",
            "password",
            "encrypted_password",
            "password_hash"
        ],
        correct: 0,
        explanation: "password_digestカラムに、bcryptで暗号化されたパスワードが保存されます。"
    },
    {
        id: 77,
        level: "中級",
        category: "認証",
        question: "パスワードを暗号化するgemは？",
        options: [
            "bcrypt",
            "devise",
            "jwt",
            "oauth"
        ],
        correct: 0,
        explanation: "bcrypt gemを使ってパスワードを安全に暗号化します。"
    },
    {
        id: 78,
        level: "中級",
        category: "ルーティング応用",
        question: "RESTfulな7つのアクションを一度に定義するメソッドは？",
        options: [
            "resources",
            "resource",
            "routes",
            "restful"
        ],
        correct: 0,
        explanation: "resources :postsと書くと、7つのRESTfulアクションのルートが自動生成されます。"
    },
    {
        id: 79,
        level: "中級",
        category: "ルーティング応用",
        question: "特定のアクションだけルートを作る時のオプションは？",
        options: [
            "only",
            "just",
            "include",
            "actions"
        ],
        correct: 0,
        explanation: "only: [:index, :show]のように、必要なアクションだけを指定できます。"
    },
    {
        id: 80,
        level: "中級",
        category: "ルーティング応用",
        question: "ネストしたルートを作る方法は？",
        options: [
            "resourcesをネストして書く",
            "nested: trueオプション",
            "parent: を指定",
            "nest メソッドを使う"
        ],
        correct: 0,
        explanation: "resources :users do resources :posts end のようにネストして書きます。"
    },
    {
        id: 81,
        level: "中級",
        category: "N+1問題",
        question: "N+1問題とは何ですか？",
        options: [
            "データベースへのクエリが大量に発生する問題",
            "メモリが不足する問題",
            "CPUが100%になる問題",
            "ディスク容量が不足する問題"
        ],
        correct: 0,
        explanation: "関連データを取得する際に、1+N回のクエリが発生してパフォーマンスが悪化する問題です。"
    },
    {
        id: 82,
        level: "中級",
        category: "N+1問題",
        question: "N+1問題を解決するメソッドは？",
        options: [
            "includes",
            "joins",
            "merge",
            "select"
        ],
        correct: 0,
        explanation: "includesメソッドで関連データを事前に読み込み、クエリ数を減らせます。"
    },
    {
        id: 83,
        level: "中級",
        category: "フォーム応用",
        question: "モデルと紐付いたフォームを作る時の指定は？",
        options: [
            "model: @user",
            "for: @user",
            "with: @user",
            "data: @user"
        ],
        correct: 0,
        explanation: "form_with model: @userのように指定すると、モデルと紐付いたフォームが作成されます。"
    },
    {
        id: 84,
        level: "中級",
        category: "フォーム応用",
        question: "選択ボックスを作るヘルパーメソッドは？",
        options: [
            "select_tag または f.select",
            "option_tag",
            "dropdown_tag",
            "choice_tag"
        ],
        correct: 0,
        explanation: "select_tagやf.selectで、HTMLのselect要素（選択ボックス）を作成できます。"
    },
    {
        id: 85,
        level: "中級",
        category: "バリデーション応用",
        question: "文字数の最大値を制限するバリデーションは？",
        options: [
            "length: { maximum: 100 }",
            "max_length: 100",
            "size: { max: 100 }",
            "characters: { max: 100 }"
        ],
        correct: 0,
        explanation: "lengthバリデーションにmaximumオプションを指定して文字数を制限します。"
    },
    {
        id: 86,
        level: "中級",
        category: "バリデーション応用",
        question: "メールアドレスの形式をチェックするバリデーションは？",
        options: [
            "format: { with: 正規表現 }",
            "email: true",
            "type: :email",
            "validates_email_format_of"
        ],
        correct: 0,
        explanation: "formatバリデーションに正規表現を指定して、メールアドレスの形式をチェックします。"
    },
    {
        id: 87,
        level: "中級",
        category: "バリデーション応用",
        question: "ユニーク（重複禁止）のバリデーションは？",
        options: [
            "uniqueness: true",
            "unique: true",
            "no_duplicate: true",
            "distinct: true"
        ],
        correct: 0,
        explanation: "uniqueness: trueで、そのカラムの値が重複しないことを保証します。"
    },
    {
        id: 88,
        level: "中級",
        category: "エラー処理",
        question: "バリデーションエラーを表示する方法は？",
        options: [
            "@model.errors.full_messages",
            "@model.validation_errors",
            "@model.error_messages",
            "@model.get_errors"
        ],
        correct: 0,
        explanation: "errors.full_messagesで、バリデーションエラーのメッセージ配列を取得できます。"
    },
    {
        id: 89,
        level: "中級",
        category: "ActiveJob",
        question: "非同期処理（バックグラウンドジョブ）を扱うのは？",
        options: [
            "ActiveJob",
            "ActiveTask",
            "ActiveWorker",
            "ActiveProcess"
        ],
        correct: 0,
        explanation: "ActiveJobを使って、メール送信などの重い処理をバックグラウンドで実行できます。"
    },
    {
        id: 90,
        level: "中級",
        category: "ActionMailer",
        question: "メールを送信する機能を提供するのは？",
        options: [
            "ActionMailer",
            "ActiveMailer",
            "MailSender",
            "EmailService"
        ],
        correct: 0,
        explanation: "ActionMailerを使って、ユーザー登録確認メールなどを送信できます。"
    },
    {
        id: 91,
        level: "中級",
        category: "I18n",
        question: "多言語対応（国際化）の機能は？",
        options: [
            "I18n",
            "Translation",
            "Locale",
            "Language"
        ],
        correct: 0,
        explanation: "I18n（InternationalizatioN）を使って、日本語・英語など多言語対応ができます。"
    },
    {
        id: 92,
        level: "中級",
        category: "テスト基礎",
        question: "Railsのデフォルトのテストフレームワークは？",
        options: [
            "Minitest",
            "RSpec",
            "TestUnit",
            "Cucumber"
        ],
        correct: 0,
        explanation: "MinitestがRailsにデフォルトで含まれているテストフレームワークです。"
    },
    {
        id: 93,
        level: "中級",
        category: "テスト基礎",
        question: "テストデータを準備するファイルは？",
        options: [
            "fixtures",
            "seeds",
            "samples",
            "mocks"
        ],
        correct: 0,
        explanation: "fixturesファイル（YAMLファイル）でテスト用のサンプルデータを定義します。"
    },
    {
        id: 94,
        level: "中級",
        category: "デプロイ",
        question: "本番環境にアプリを公開することを何という？",
        options: [
            "デプロイ",
            "アップロード",
            "リリース",
            "パブリッシュ"
        ],
        correct: 0,
        explanation: "デプロイ（deploy）は、開発したアプリを本番環境に配置して公開することです。"
    },
    {
        id: 95,
        level: "中級",
        category: "アセットパイプライン",
        question: "CSS/JSファイルを圧縮・結合する仕組みは？",
        options: [
            "アセットパイプライン",
            "ファイルコンプレッサー",
            "リソースマネージャー",
            "アセットコンパイラー"
        ],
        correct: 0,
        explanation: "アセットパイプラインが、CSS/JSファイルを自動的に圧縮・結合して配信を最適化します。"
    },
    {
        id: 96,
        level: "中級",
        category: "キャッシュ",
        question: "頻繁にアクセスされるデータを高速化する仕組みは？",
        options: [
            "キャッシュ",
            "バッファ",
            "ストレージ",
            "メモリ"
        ],
        correct: 0,
        explanation: "キャッシュを使って、データベースクエリの結果などを一時保存し、応答速度を向上させます。"
    },
    {
        id: 97,
        level: "中級",
        category: "セキュリティ",
        question: "CSRFトークンは何を防ぐ？",
        options: [
            "他サイトからの不正なリクエスト",
            "SQLインジェクション",
            "パスワードの漏洩",
            "ウイルス感染"
        ],
        correct: 0,
        explanation: "CSRF（クロスサイトリクエストフォージェリ）トークンで、他サイトからの不正なリクエストを防ぎます。"
    },
    {
        id: 98,
        level: "中級",
        category: "API開発",
        question: "JSONデータを返すAPIモードで不要なものは？",
        options: [
            "ビュー（View）",
            "モデル（Model）",
            "コントローラー（Controller）",
            "ルーティング"
        ],
        correct: 0,
        explanation: "APIモードではHTMLビューは不要で、JSONデータのみを返します。"
    },
    {
        id: 99,
        level: "中級",
        category: "WebSocket",
        question: "リアルタイム通信を実現するRailsの機能は？",
        options: [
            "ActionCable",
            "ActionSocket",
            "ActiveChannel",
            "RealtimeRails"
        ],
        correct: 0,
        explanation: "ActionCableを使って、チャットなどのリアルタイム機能を実装できます。"
    },
    {
        id: 100,
        level: "中級",
        category: "ActiveStorage",
        question: "ファイルアップロードを扱うRailsの機能は？",
        options: [
            "ActiveStorage",
            "FileUploader",
            "ActiveFile",
            "StorageManager"
        ],
        correct: 0,
        explanation: "ActiveStorageを使って、画像やPDFなどのファイルアップロードを簡単に実装できます。"
    },
    {
        id: 101,
        level: "中級",
        category: "Rake",
        question: "定期的なタスクやデータ処理を書くのは？",
        options: [
            "Rakeタスク",
            "Cronジョブ",
            "バッチファイル",
            "スクリプト"
        ],
        correct: 0,
        explanation: "Rakeタスクで、データベースのクリーンアップなどの定期処理を定義できます。"
    },
    {
        id: 102,
        level: "中級",
        category: "設定ファイル",
        question: "データベースの接続情報を設定するファイルは？",
        options: [
            "config/database.yml",
            "config/db.yml",
            "database.config",
            "db/config.yml"
        ],
        correct: 0,
        explanation: "database.ymlファイルで、各環境のデータベース接続情報を設定します。"
    },
    {
        id: 103,
        level: "中級",
        category: "設定ファイル",
        question: "アプリケーション全体の設定を行うファイルは？",
        options: [
            "config/application.rb",
            "config/app.rb",
            "application.config",
            "settings.rb"
        ],
        correct: 0,
        explanation: "application.rbで、タイムゾーンやロケールなどアプリ全体の設定を行います。"
    },
    {
        id: 104,
        level: "中級",
        category: "環境変数",
        question: "秘密情報（APIキー等）を管理する方法は？",
        options: [
            "環境変数または credentials",
            "database.yml",
            "Gemfile",
            "routes.rb"
        ],
        correct: 0,
        explanation: "環境変数やRailsのcredentials機能で、APIキーなどの秘密情報を安全に管理します。"
    },
    {
        id: 105,
        level: "中級",
        category: "ログ",
        question: "本番環境でエラーを調査する時に見るのは？",
        options: [
            "production.log",
            "error.log",
            "system.log",
            "debug.log"
        ],
        correct: 0,
        explanation: "production.logファイルに本番環境のエラーやリクエストの詳細が記録されています。"
    },
    {
        id: 106,
        level: "中級",
        category: "パフォーマンス",
        question: "データベースのクエリを高速化する方法は？",
        options: [
            "インデックスを追加",
            "サーバーを増やす",
            "メモリを増やす",
            "CPUを速くする"
        ],
        correct: 0,
        explanation: "よく検索されるカラムにインデックスを追加することで、クエリが高速化されます。"
    },
    {
        id: 107,
        level: "中級",
        category: "デバッグ",
        question: "コードの実行を一時停止してデバッグする方法は？",
        options: [
            "binding.pry または byebug",
            "console.log",
            "print文",
            "alert"
        ],
        correct: 0,
        explanation: "binding.pryやbyebugを使って、コードの実行を一時停止し、変数の中身を確認できます。"
    },
    {
        id: 108,
        level: "中級",
        category: "リファクタリング",
        question: "重複したコードを共通化することを何という？",
        options: [
            "DRY（Don't Repeat Yourself）",
            "KISS（Keep It Simple, Stupid）",
            "YAGNI（You Aren't Gonna Need It）",
            "SOLID原則"
        ],
        correct: 0,
        explanation: "DRY原則に従って、重複したコードを削除し、保守性を向上させます。"
    },
    {
        id: 109,
        level: "中級",
        category: "コードレビュー",
        question: "チームメンバーがコードをチェックすることを何という？",
        options: [
            "コードレビュー",
            "ペアプログラミング",
            "テスト駆動開発",
            "アジャイル開発"
        ],
        correct: 0,
        explanation: "コードレビューで、バグの早期発見やコード品質の向上、知識共有ができます。"
    },
    {
        id: 110,
        level: "中級",
        category: "Git操作",
        question: "変更をローカルリポジトリに記録するコマンドは？",
        options: [
            "git commit",
            "git push",
            "git save",
            "git upload"
        ],
        correct: 0,
        explanation: "git commitで変更をローカルリポジトリに記録します。-mオプションでメッセージを追加できます。"
    },
    {
        id: 111,
        level: "中級",
        category: "Git操作",
        question: "リモートリポジトリに変更を送信するコマンドは？",
        options: [
            "git push",
            "git send",
            "git upload",
            "git deploy"
        ],
        correct: 0,
        explanation: "git pushでローカルの変更をGitHubなどのリモートリポジトリに送信します。"
    },
    {
        id: 112,
        level: "中級",
        category: "チーム開発",
        question: "機能ごとに作業を分けるGitの仕組みは？",
        options: [
            "ブランチ",
            "タグ",
            "コミット",
            "リポジトリ"
        ],
        correct: 0,
        explanation: "ブランチを使って、機能開発やバグ修正を独立して行い、後でマージします。"
    },
    {
        id: 113,
        level: "中級",
        category: "プルリクエスト",
        question: "コードの変更を本体に取り込む前の確認作業は？",
        options: [
            "プルリクエスト（PR）",
            "マージリクエスト",
            "コミットリクエスト",
            "プッシュリクエスト"
        ],
        correct: 0,
        explanation: "プルリクエストを作成して、コードレビューを受けてから本体にマージします。"
    },
    {
        id: 114,
        level: "中級",
        category: "CI/CD",
        question: "コードの変更時に自動でテストを実行する仕組みは？",
        options: [
            "CI（継続的インテグレーション）",
            "CD（継続的デリバリー）",
            "自動デプロイ",
            "自動バックアップ"
        ],
        correct: 0,
        explanation: "CI（Continuous Integration）で、コード変更時に自動でテストを実行し、品質を保ちます。"
    },
    {
        id: 115,
        level: "中級",
        category: "Docker",
        question: "開発環境を統一するコンテナ技術は？",
        options: [
            "Docker",
            "Virtual Machine",
            "Vagrant",
            "WSL"
        ],
        correct: 0,
        explanation: "Dockerを使うと、チーム全員が同じ開発環境で作業でき、環境依存の問題を防げます。"
    },
    {
        id: 116,
        level: "中級",
        category: "REST API",
        question: "REST APIでリソースを取得するHTTPメソッドは？",
        options: [
            "GET",
            "POST",
            "PUT",
            "DELETE"
        ],
        correct: 0,
        explanation: "GETメソッドでデータの取得、POSTで作成、PUT/PATCHで更新、DELETEで削除を行います。"
    },
    {
        id: 117,
        level: "中級",
        category: "JSON",
        question: "APIでよく使われるデータ形式は？",
        options: [
            "JSON",
            "XML",
            "CSV",
            "HTML"
        ],
        correct: 0,
        explanation: "JSON（JavaScript Object Notation）は、軽量で人間にも読みやすいデータ交換形式です。"
    },
    {
        id: 118,
        level: "中級",
        category: "認可",
        question: "ユーザーの権限をチェックすることを何という？",
        options: [
            "認可（Authorization）",
            "認証（Authentication）",
            "バリデーション",
            "サニタイゼーション"
        ],
        correct: 0,
        explanation: "認可は「誰が何をできるか」を制御します。認証は「誰であるか」を確認します。"
    },
    {
        id: 119,
        level: "中級",
        category: "ページネーション",
        question: "大量のデータを分割表示する機能は？",
        options: [
            "ページネーション",
            "フィルタリング",
            "ソーティング",
            "グルーピング"
        ],
        correct: 0,
        explanation: "ページネーションで、100件のデータを10件ずつに分けて表示するなどができます。"
    },
    {
        id: 120,
        level: "中級",
        category: "検索機能",
        question: "全文検索を実装する時によく使うgemは？",
        options: [
            "ransack または pg_search",
            "devise",
            "carrierwave",
            "sidekiq"
        ],
        correct: 0,
        explanation: "ransackやpg_searchなどのgemを使って、高度な検索機能を簡単に実装できます。"
    },

    // ========== 上級編: 実務レベル (121-180) ==========
    {
        id: 121,
        level: "上級",
        category: "アーキテクチャ",
        question: "大規模アプリでビジネスロジックを分離する層は？",
        options: [
            "サービス層（Service Layer）",
            "ビュー層",
            "データ層",
            "プレゼンテーション層"
        ],
        correct: 0,
        explanation: "サービスオブジェクトを使って、複雑なビジネスロジックをコントローラーから分離します。"
    },
    {
        id: 122,
        level: "上級",
        category: "デザインパターン",
        question: "フォームオブジェクトパターンの利点は？",
        options: [
            "複雑なフォームロジックの分離",
            "データベースの高速化",
            "メモリの節約",
            "セキュリティの向上"
        ],
        correct: 0,
        explanation: "フォームオブジェクトで、複数モデルにまたがるフォームや複雑なバリデーションを管理します。"
    },
    {
        id: 123,
        level: "上級",
        category: "パフォーマンス最適化",
        question: "データベースクエリを分析するツールは？",
        options: [
            "EXPLAIN ANALYZE",
            "DEBUG MODE",
            "TRACE QUERY",
            "PROFILE SQL"
        ],
        correct: 0,
        explanation: "EXPLAIN ANALYZEで、SQLクエリの実行計画を確認し、ボトルネックを特定できます。"
    },
    {
        id: 124,
        level: "上級",
        category: "並行処理",
        question: "複数のリクエストを同時処理するサーバーは？",
        options: [
            "Puma",
            "WEBrick",
            "Thin",
            "Mongrel"
        ],
        correct: 0,
        explanation: "Pumaはマルチスレッド対応で、複数のリクエストを並行処理できる高性能サーバーです。"
    },
    {
        id: 125,
        level: "上級",
        category: "メタプログラミング",
        question: "実行時に動的にメソッドを定義する機能は？",
        options: [
            "define_method",
            "create_method",
            "new_method",
            "add_method"
        ],
        correct: 0,
        explanation: "define_methodを使って、実行時に動的にメソッドを生成できます。"
    },
    {
        id: 126,
        level: "上級",
        category: "トランザクション",
        question: "複数の処理を一つの単位として扱う仕組みは？",
        options: [
            "トランザクション",
            "バッチ処理",
            "キュー処理",
            "パイプライン"
        ],
        correct: 0,
        explanation: "トランザクションで、全ての処理が成功するか、全て失敗するかを保証します（ACID特性）。"
    },
    {
        id: 127,
        level: "上級",
        category: "楽観的ロック",
        question: "同時更新を防ぐ楽観的ロックで使うカラムは？",
        options: [
            "lock_version",
            "version",
            "locked_at",
            "lock_count"
        ],
        correct: 0,
        explanation: "lock_versionカラムを使って、更新時のバージョンチェックで同時更新を防ぎます。"
    },
    {
        id: 128,
        level: "上級",
        category: "悲観的ロック",
        question: "レコードを排他的にロックするメソッドは？",
        options: [
            "lock または with_lock",
            "exclusive",
            "block",
            "freeze"
        ],
        correct: 0,
        explanation: "lockメソッドで、他のトランザクションがレコードを更新できないようにロックします。"
    },
    {
        id: 129,
        level: "上級",
        category: "キューシステム",
        question: "Redisベースの高性能ジョブキューは？",
        options: [
            "Sidekiq",
            "DelayedJob",
            "Resque",
            "ActiveJob"
        ],
        correct: 0,
        explanation: "SidekiqはRedisを使った高性能なバックグラウンドジョブ処理システムです。"
    },
    {
        id: 130,
        level: "上級",
        category: "マイクロサービス",
        question: "サービス間の通信でよく使われるプロトコルは？",
        options: [
            "gRPC または REST",
            "FTP",
            "SMTP",
            "SSH"
        ],
        correct: 0,
        explanation: "gRPCは高速なRPC通信、RESTは汎用的なHTTP通信で使われます。"
    },
    {
        id: 131,
        level: "上級",
        category: "GraphQL",
        question: "REST APIの代替となるクエリ言語は？",
        options: [
            "GraphQL",
            "SQL",
            "NoSQL",
            "SPARQL"
        ],
        correct: 0,
        explanation: "GraphQLでは、クライアントが必要なデータの形を指定してリクエストできます。"
    },
    {
        id: 132,
        level: "上級",
        category: "イベント駆動",
        question: "イベント駆動アーキテクチャで使うパターンは？",
        options: [
            "Pub/Sub（パブリッシュ/サブスクライブ）",
            "MVC",
            "MVP",
            "MVVM"
        ],
        correct: 0,
        explanation: "Pub/Subパターンで、イベントの発生元と処理を疎結合にできます。"
    },
    {
        id: 133,
        level: "上級",
        category: "CQRS",
        question: "読み取りと書き込みを分離するパターンは？",
        options: [
            "CQRS（Command Query Responsibility Segregation）",
            "DDD",
            "TDD",
            "BDD"
        ],
        correct: 0,
        explanation: "CQRSで、コマンド（書き込み）とクエリ（読み取り）を分離して最適化します。"
    },
    {
        id: 134,
        level: "上級",
        category: "DDD",
        question: "ドメイン駆動設計の中心となる概念は？",
        options: [
            "ユビキタス言語",
            "デザインパターン",
            "アジャイル",
            "ウォーターフォール"
        ],
        correct: 0,
        explanation: "ユビキタス言語で、開発者とドメインエキスパートが共通の言語を使います。"
    },
    {
        id: 135,
        level: "上級",
        category: "監視",
        question: "アプリケーションのパフォーマンス監視ツールは？",
        options: [
            "New Relic または DataDog",
            "Git",
            "Docker",
            "Jenkins"
        ],
        correct: 0,
        explanation: "New RelicやDataDogで、本番環境のパフォーマンスやエラーを監視します。"
    },
    {
        id: 136,
        level: "上級",
        category: "ログ管理",
        question: "分散システムのログを集約するツールは？",
        options: [
            "ELK Stack（Elasticsearch, Logstash, Kibana）",
            "MySQL",
            "Redis",
            "MongoDB"
        ],
        correct: 0,
        explanation: "ELK Stackで、複数サーバーのログを集約・検索・可視化できます。"
    },
    {
        id: 137,
        level: "上級",
        category: "セキュリティ",
        question: "SQLインジェクションを防ぐ方法は？",
        options: [
            "プレースホルダーを使う",
            "文字列連結を使う",
            "evalを使う",
            "system関数を使う"
        ],
        correct: 0,
        explanation: "whereメソッドにプレースホルダー（?）を使って、SQLインジェクションを防ぎます。"
    },
    {
        id: 138,
        level: "上級",
        category: "XSS対策",
        question: "ユーザー入力をそのまま表示する時の対策は？",
        options: [
            "html_safeを使わない、sanitizeを使う",
            "html_safeを使う",
            "rawを使う",
            "何もしない"
        ],
        correct: 0,
        explanation: "html_safeやrawは危険。sanitizeヘルパーで安全にHTMLを表示します。"
    },
    {
        id: 139,
        level: "上級",
        category: "OAuth",
        question: "外部サービスでログインする仕組みは？",
        options: [
            "OAuth 2.0",
            "Basic認証",
            "Digest認証",
            "Cookie認証"
        ],
        correct: 0,
        explanation: "OAuth 2.0で、GoogleやTwitterなどのアカウントでログインできます。"
    },
    {
        id: 140,
        level: "上級",
        category: "JWT",
        question: "APIの認証でよく使われるトークン形式は？",
        options: [
            "JWT（JSON Web Token）",
            "Session Token",
            "API Key",
            "Bearer Token"
        ],
        correct: 0,
        explanation: "JWTは自己完結型のトークンで、サーバー側でセッションを持たずに認証できます。"
    },
    {
        id: 141,
        level: "上級",
        category: "レート制限",
        question: "APIの過剰アクセスを防ぐ仕組みは？",
        options: [
            "レート制限（Rate Limiting）",
            "キャッシング",
            "ロードバランシング",
            "CDN"
        ],
        correct: 0,
        explanation: "Rack::Attackなどで、IPアドレスごとのリクエスト数を制限します。"
    },
    {
        id: 142,
        level: "上級",
        category: "データベース設計",
        question: "正規化の目的は？",
        options: [
            "データの重複を排除",
            "クエリの高速化",
            "ストレージの圧縮",
            "バックアップの簡易化"
        ],
        correct: 0,
        explanation: "正規化でデータの重複を排除し、更新異常を防ぎます。"
    },
    {
        id: 143,
        level: "上級",
        category: "非正規化",
        question: "あえて正規化しない理由は？",
        options: [
            "パフォーマンスの向上",
            "セキュリティの向上",
            "開発の簡易化",
            "メンテナンスの向上"
        ],
        correct: 0,
        explanation: "参照性能を重視する場合、あえて非正規化してJOINを減らすことがあります。"
    },
    {
        id: 144,
        level: "上級",
        category: "シャーディング",
        question: "データベースを水平分割することを何という？",
        options: [
            "シャーディング",
            "レプリケーション",
            "パーティショニング",
            "クラスタリング"
        ],
        correct: 0,
        explanation: "シャーディングで、大量のデータを複数のデータベースに分散して管理します。"
    },
    {
        id: 145,
        level: "上級",
        category: "読み書き分離",
        question: "マスター・スレーブ構成の利点は？",
        options: [
            "読み取り負荷の分散",
            "書き込み速度の向上",
            "ストレージの節約",
            "セキュリティの向上"
        ],
        correct: 0,
        explanation: "マスターDBに書き込み、スレーブDBから読み取ることで負荷を分散します。"
    },
    {
        id: 146,
        level: "上級",
        category: "NoSQL",
        question: "RDBMSではないデータベースの総称は？",
        options: [
            "NoSQL",
            "NewSQL",
            "GraphDB",
            "ObjectDB"
        ],
        correct: 0,
        explanation: "NoSQL（Not Only SQL）は、MongoDBやRedisなど、非リレーショナルDBの総称です。"
    },
    {
        id: 147,
        level: "上級",
        category: "Redis",
        question: "Redisの主な用途は？",
        options: [
            "キャッシュとセッションストア",
            "ファイルストレージ",
            "画像処理",
            "メール送信"
        ],
        correct: 0,
        explanation: "Redisはインメモリデータストアで、高速なキャッシュやセッション管理に使います。"
    },
    {
        id: 148,
        level: "上級",
        category: "Elasticsearch",
        question: "Elasticsearchの主な用途は？",
        options: [
            "全文検索",
            "画像処理",
            "動画配信",
            "メール送信"
        ],
        correct: 0,
        explanation: "Elasticsearchは、大量のテキストデータから高速に全文検索できます。"
    },
    {
        id: 149,
        level: "上級",
        category: "メッセージキュー",
        question: "非同期処理でメッセージを仲介するシステムは？",
        options: [
            "RabbitMQ または Kafka",
            "MySQL",
            "PostgreSQL",
            "SQLite"
        ],
        correct: 0,
        explanation: "メッセージキューで、サービス間の非同期通信を実現します。"
    },
    {
        id: 150,
        level: "上級",
        category: "WebSocket",
        question: "双方向リアルタイム通信のプロトコルは？",
        options: [
            "WebSocket",
            "HTTP",
            "FTP",
            "SMTP"
        ],
        correct: 0,
        explanation: "WebSocketで、サーバーからクライアントへのプッシュ通信ができます。"
    },
    {
        id: 151,
        level: "上級",
        category: "SSE",
        question: "サーバーから一方向のリアルタイム通信は？",
        options: [
            "Server-Sent Events（SSE）",
            "WebSocket",
            "Long Polling",
            "WebRTC"
        ],
        correct: 0,
        explanation: "SSEは、サーバーからクライアントへの一方向のリアルタイム通信に適しています。"
    },
    {
        id: 152,
        level: "上級",
        category: "CDN",
        question: "静的ファイルの配信を高速化する仕組みは？",
        options: [
            "CDN（Content Delivery Network）",
            "VPN",
            "DNS",
            "NAT"
        ],
        correct: 0,
        explanation: "CDNで、世界中のエッジサーバーから静的ファイルを高速配信します。"
    },
    {
        id: 153,
        level: "上級",
        category: "負荷分散",
        question: "複数サーバーに処理を分配する装置は？",
        options: [
            "ロードバランサー",
            "ファイアウォール",
            "ルーター",
            "スイッチ"
        ],
        correct: 0,
        explanation: "ロードバランサーで、複数のアプリケーションサーバーに負荷を分散します。"
    },
    {
        id: 154,
        level: "上級",
        category: "Blue-Green Deploy",
        question: "無停止デプロイを実現する手法は？",
        options: [
            "Blue-Green Deployment",
            "Rolling Deployment",
            "Canary Deployment",
            "Feature Toggle"
        ],
        correct: 0,
        explanation: "Blue-Green Deploymentで、新旧環境を切り替えて無停止デプロイを実現します。"
    },
    {
        id: 155,
        level: "上級",
        category: "カナリアリリース",
        question: "一部のユーザーにだけ新機能を公開する手法は？",
        options: [
            "カナリアリリース",
            "A/Bテスト",
            "ベータテスト",
            "アルファテスト"
        ],
        correct: 0,
        explanation: "カナリアリリースで、段階的に新機能をリリースしてリスクを最小化します。"
    },
    {
        id: 156,
        level: "上級",
        category: "Feature Flag",
        question: "機能の有効/無効を動的に切り替える仕組みは？",
        options: [
            "Feature Flag（Feature Toggle）",
            "Environment Variable",
            "Configuration File",
            "Database Setting"
        ],
        correct: 0,
        explanation: "Feature Flagで、コードを変更せずに機能のON/OFFを切り替えられます。"
    },
    {
        id: 157,
        level: "上級",
        category: "A/Bテスト",
        question: "複数バージョンを比較する手法は？",
        options: [
            "A/Bテスト",
            "ユニットテスト",
            "統合テスト",
            "負荷テスト"
        ],
        correct: 0,
        explanation: "A/Bテストで、異なるバージョンの効果を実際のユーザーで比較測定します。"
    },
    {
        id: 158,
        level: "上級",
        category: "メトリクス",
        question: "システムの健全性を測る指標は？",
        options: [
            "メトリクス（Metrics）",
            "ログ（Logs）",
            "トレース（Traces）",
            "アラート（Alerts）"
        ],
        correct: 0,
        explanation: "CPU使用率、メモリ使用量、レスポンスタイムなどのメトリクスを監視します。"
    },
    {
        id: 159,
        level: "上級",
        category: "SRE",
        question: "サイトの信頼性を専門とするエンジニアは？",
        options: [
            "SRE（Site Reliability Engineer）",
            "DevOps Engineer",
            "Full Stack Engineer",
            "Backend Engineer"
        ],
        correct: 0,
        explanation: "SREは、システムの信頼性、可用性、パフォーマンスを担保する専門職です。"
    },
    {
        id: 160,
        level: "上級",
        category: "SLA/SLO",
        question: "サービスレベルの目標値は？",
        options: [
            "SLO（Service Level Objective）",
            "SLA（Service Level Agreement）",
            "KPI（Key Performance Indicator）",
            "OKR（Objectives and Key Results）"
        ],
        correct: 0,
        explanation: "SLOは「99.9%の可用性」など、サービスレベルの内部目標値です。"
    },
    {
        id: 161,
        level: "上級",
        category: "障害対応",
        question: "障害の事後分析を何という？",
        options: [
            "ポストモーテム（Postmortem）",
            "レトロスペクティブ",
            "インシデントレポート",
            "バグレポート"
        ],
        correct: 0,
        explanation: "ポストモーテムで、障害の原因分析と再発防止策を検討します。"
    },
    {
        id: 162,
        level: "上級",
        category: "カオスエンジニアリング",
        question: "意図的に障害を起こしてシステムの耐性を確認する手法は？",
        options: [
            "カオスエンジニアリング",
            "ストレステスト",
            "ペネトレーションテスト",
            "回帰テスト"
        ],
        correct: 0,
        explanation: "カオスエンジニアリングで、本番環境の障害耐性を事前に検証します。"
    },
    {
        id: 163,
        level: "上級",
        category: "サーキットブレーカー",
        question: "連鎖的な障害を防ぐパターンは？",
        options: [
            "サーキットブレーカーパターン",
            "リトライパターン",
            "タイムアウトパターン",
            "バルクヘッドパターン"
        ],
        correct: 0,
        explanation: "サーキットブレーカーで、障害サービスへのリクエストを自動的に遮断します。"
    },
    {
        id: 164,
        level: "上級",
        category: "冪等性",
        question: "同じ操作を何度実行しても結果が同じになる性質は？",
        options: [
            "冪等性（Idempotency）",
            "原子性（Atomicity）",
            "一貫性（Consistency）",
            "独立性（Isolation）"
        ],
        correct: 0,
        explanation: "冪等性を保証することで、リトライ時の重複処理を防げます。"
    },
    {
        id: 165,
        level: "上級",
        category: "分散トレーシング",
        question: "マイクロサービス間のリクエストを追跡する仕組みは？",
        options: [
            "分散トレーシング",
            "ログ集約",
            "メトリクス収集",
            "エラー監視"
        ],
        correct: 0,
        explanation: "JaegerやZipkinで、複数サービスにまたがるリクエストの流れを可視化します。"
    },
    {
        id: 166,
        level: "上級",
        category: "コンテナオーケストレーション",
        question: "Dockerコンテナを管理するツールは？",
        options: [
            "Kubernetes",
            "Jenkins",
            "GitLab",
            "CircleCI"
        ],
        correct: 0,
        explanation: "Kubernetesで、コンテナのデプロイ、スケーリング、管理を自動化します。"
    },
    {
        id: 167,
        level: "上級",
        category: "Infrastructure as Code",
        question: "インフラをコードで管理する手法は？",
        options: [
            "Infrastructure as Code（IaC）",
            "Configuration Management",
            "Version Control",
            "Change Management"
        ],
        correct: 0,
        explanation: "TerraformやAnsibleで、インフラの構成をコードとして管理します。"
    },
    {
        id: 168,
        level: "上級",
        category: "サーバーレス",
        question: "サーバー管理が不要な実行環境は？",
        options: [
            "サーバーレス（FaaS）",
            "PaaS",
            "IaaS",
            "SaaS"
        ],
        correct: 0,
        explanation: "AWS LambdaなどのFaaS（Function as a Service）で、サーバー管理なしで関数を実行します。"
    },
    {
        id: 169,
        level: "上級",
        category: "エッジコンピューティング",
        question: "ユーザーに近い場所で処理を行う仕組みは？",
        options: [
            "エッジコンピューティング",
            "クラウドコンピューティング",
            "グリッドコンピューティング",
            "フォグコンピューティング"
        ],
        correct: 0,
        explanation: "エッジコンピューティングで、レイテンシを削減し、リアルタイム性を向上させます。"
    },
    {
        id: 170,
        level: "上級",
        category: "機械学習統合",
        question: "Railsアプリに機械学習を組み込む方法は？",
        options: [
            "Python APIと連携",
            "Ruby内で完結",
            "JavaScriptで実装",
            "SQLで実装"
        ],
        correct: 0,
        explanation: "TensorFlowやPyTorchで作成したモデルをAPIとして公開し、Railsから呼び出します。"
    },
    {
        id: 171,
        level: "上級",
        category: "リアルタイム分析",
        question: "ストリームデータをリアルタイムで処理するツールは？",
        options: [
            "Apache Kafka",
            "Apache Hadoop",
            "Apache Spark",
            "Apache Cassandra"
        ],
        correct: 0,
        explanation: "Kafkaで大量のストリームデータをリアルタイムで処理・配信します。"
    },
    {
        id: 172,
        level: "上級",
        category: "ブロックチェーン",
        question: "分散型台帳技術を何という？",
        options: [
            "ブロックチェーン",
            "分散データベース",
            "P2Pネットワーク",
            "暗号化技術"
        ],
        correct: 0,
        explanation: "ブロックチェーンで、改ざん困難な分散型のデータ管理を実現します。"
    },
    {
        id: 173,
        level: "上級",
        category: "PWA",
        question: "オフラインでも動作するWebアプリは？",
        options: [
            "PWA（Progressive Web App）",
            "SPA（Single Page Application）",
            "Native App",
            "Hybrid App"
        ],
        correct: 0,
        explanation: "PWAで、Service Workerを使ってオフライン機能やプッシュ通知を実装します。"
    },
    {
        id: 174,
        level: "上級",
        category: "WebAssembly",
        question: "ブラウザで高速実行できるバイナリ形式は？",
        options: [
            "WebAssembly（WASM）",
            "JavaScript",
            "TypeScript",
            "CoffeeScript"
        ],
        correct: 0,
        explanation: "WebAssemblyで、C++やRustで書いたコードをブラウザで高速実行できます。"
    },
    {
        id: 175,
        level: "上級",
        category: "量子コンピューティング",
        question: "従来と異なる計算原理のコンピュータは？",
        options: [
            "量子コンピュータ",
            "スーパーコンピュータ",
            "メインフレーム",
            "クラスタコンピュータ"
        ],
        correct: 0,
        explanation: "量子コンピュータは、特定の問題を従来のコンピュータより圧倒的に高速に解けます。"
    },
    {
        id: 176,
        level: "上級",
        category: "エシカルハッキング",
        question: "セキュリティテストのための合法的な侵入試験は？",
        options: [
            "ペネトレーションテスト",
            "負荷テスト",
            "回帰テスト",
            "スモークテスト"
        ],
        correct: 0,
        explanation: "ペネトレーションテストで、システムの脆弱性を事前に発見します。"
    },
    {
        id: 177,
        level: "上級",
        category: "GDPR",
        question: "EU圏の個人データ保護規則は？",
        options: [
            "GDPR（General Data Protection Regulation）",
            "CCPA",
            "HIPAA",
            "PCI DSS"
        ],
        correct: 0,
        explanation: "GDPRに準拠して、個人データの適切な管理と削除権の保証が必要です。"
    },
    {
        id: 178,
        level: "上級",
        category: "ゼロトラスト",
        question: "「信頼しない」前提のセキュリティモデルは？",
        options: [
            "ゼロトラストセキュリティ",
            "境界型セキュリティ",
            "多層防御",
            "ファイアウォール"
        ],
        correct: 0,
        explanation: "ゼロトラストでは、全てのアクセスを検証し、最小権限の原則を徹底します。"
    },
    {
        id: 179,
        level: "上級",
        category: "コスト最適化",
        question: "クラウドコストを最適化する方法は？",
        options: [
            "オートスケーリングとスポットインスタンス",
            "常に最大スペック",
            "固定インスタンス",
            "オンプレミス移行"
        ],
        correct: 0,
        explanation: "需要に応じたオートスケーリングとスポットインスタンスでコストを削減します。"
    },
    {
        id: 180,
        level: "上級",
        category: "技術選定",
        question: "新技術を導入する際の最重要事項は？",
        options: [
            "チームの学習コストと保守性",
            "最新技術であること",
            "人気があること",
            "無料であること"
        ],
        correct: 0,
        explanation: "技術選定では、チームのスキルセット、長期的な保守性、ビジネス要件との適合性を重視します。"
    },

    // ========== 追加: Active Job編 (181-200) ==========
    {
        id: 181,
        level: "中級",
        category: "Active Job",
        question: "Active Jobの主な目的は何ですか？",
        options: [
            "バックグラウンドジョブの実行を抽象化する",
            "データベースの管理",
            "ビューのレンダリング",
            "ルーティングの設定"
        ],
        correct: 0,
        explanation: "Active Jobは様々なキューイングバックエンドに対して統一的なインターフェースを提供します。"
    },
    {
        id: 182,
        level: "中級",
        category: "Active Job",
        question: "Active Jobでよく使用されるバックエンドは？",
        options: [
            "Sidekiq",
            "MySQL",
            "PostgreSQL",
            "MongoDB"
        ],
        correct: 0,
        explanation: "SidekiqはRedisベースの高性能なバックグラウンドジョブ処理システムです。"
    },
    {
        id: 183,
        level: "中級",
        category: "Active Job",
        question: "ジョブをキューに追加するメソッドは？",
        options: [
            "perform_later",
            "perform_now",
            "execute",
            "run"
        ],
        correct: 0,
        explanation: "perform_laterメソッドでジョブを非同期実行のキューに追加します。"
    },
    {
        id: 184,
        level: "上級",
        category: "Active Job",
        question: "ジョブの優先度を設定するには？",
        options: [
            "queue_asメソッドで優先度を指定",
            "priorityメソッドを使用",
            "orderメソッドを使用",
            "設定できない"
        ],
        correct: 0,
        explanation: "queue_asメソッドでキュー名を指定し、優先度を制御できます。"
    },
    {
        id: 185,
        level: "上級",
        category: "Active Job",
        question: "ジョブのリトライ設定を行うには？",
        options: [
            "retry_onメソッドで例外と試行回数を指定",
            "retryメソッドを使用",
            "repeat_onメソッドを使用",
            "設定できない"
        ],
        correct: 0,
        explanation: "retry_onメソッドで特定の例外に対するリトライ動作を設定できます。"
    },
    {
        id: 186,
        level: "中級",
        category: "Action Cable",
        question: "Action Cableの主な用途は？",
        options: [
            "WebSocketを使ったリアルタイム通信",
            "メール送信",
            "画像処理",
            "データベース接続"
        ],
        correct: 0,
        explanation: "Action CableはWebSocketを使用してリアルタイム機能を実装するためのフレームワークです。"
    },
    {
        id: 187,
        level: "中級",
        category: "Action Cable",
        question: "Action Cableの接続単位は？",
        options: [
            "チャンネル",
            "コントローラー",
            "モデル",
            "ビュー"
        ],
        correct: 0,
        explanation: "チャンネルは特定のトピックに関するWebSocket接続を管理します。"
    },
    {
        id: 188,
        level: "上級",
        category: "Action Cable",
        question: "Action Cableでブロードキャストを行うメソッドは？",
        options: [
            "ActionCable.server.broadcast",
            "ActionCable.send",
            "ActionCable.emit",
            "ActionCable.publish"
        ],
        correct: 0,
        explanation: "ActionCable.server.broadcastメソッドで全購読者にメッセージを送信します。"
    },
    {
        id: 189,
        level: "中級",
        category: "Rails API",
        question: "Rails APIモードの特徴は？",
        options: [
            "ビュー層を除外してAPIに特化",
            "データベースを使わない",
            "JavaScriptが不要",
            "テストが不要"
        ],
        correct: 0,
        explanation: "Rails APIモードはビュー関連の機能を除外し、JSON APIの構築に最適化されています。"
    },
    {
        id: 190,
        level: "中級",
        category: "Rails API",
        question: "APIでよく使用される認証方式は？",
        options: [
            "JWT（JSON Web Token）",
            "HTML forms",
            "Cookies only",
            "Session only"
        ],
        correct: 0,
        explanation: "JWTはステートレスな認証を実現し、APIに適しています。"
    },
    {
        id: 191,
        level: "上級",
        category: "Rails API",
        question: "APIのバージョニング戦略として適切なのは？",
        options: [
            "URLパスやヘッダーでバージョン管理",
            "バージョン管理しない",
            "毎回新しいアプリを作る",
            "古いバージョンを削除する"
        ],
        correct: 0,
        explanation: "URLパス（/api/v1/）やAcceptヘッダーでAPIバージョンを管理します。"
    },
    {
        id: 192,
        level: "中級",
        category: "Webpacker",
        question: "Webpackerの役割は？",
        options: [
            "JavaScriptとCSSの管理とバンドル",
            "データベース管理",
            "メール送信",
            "キャッシュ管理"
        ],
        correct: 0,
        explanation: "WebpackerはWebpackを使用してフロントエンドアセットを管理します。"
    },
    {
        id: 193,
        level: "中級",
        category: "Webpacker",
        question: "Rails 7でWebpackerの代替として推奨されるのは？",
        options: [
            "Import maps または esbuild",
            "jQuery",
            "Sprockets のみ",
            "何も使わない"
        ],
        correct: 0,
        explanation: "Rails 7ではImport mapsやesbuildが推奨されています。"
    },
    {
        id: 194,
        level: "初級",
        category: "Rails環境",
        question: "Railsの環境設定ファイルの場所は？",
        options: [
            "config/environments/",
            "app/environments/",
            "lib/environments/",
            "db/environments/"
        ],
        correct: 0,
        explanation: "環境ごとの設定はconfig/environments/ディレクトリに配置されます。"
    },
    {
        id: 195,
        level: "中級",
        category: "Rails環境",
        question: "環境変数を管理する一般的なgemは？",
        options: [
            "dotenv-rails",
            "devise",
            "rspec",
            "capybara"
        ],
        correct: 0,
        explanation: "dotenv-railsは.envファイルから環境変数を読み込むgemです。"
    },
    {
        id: 196,
        level: "上級",
        category: "Rails環境",
        question: "Rails.credentials の利点は？",
        options: [
            "暗号化された秘密情報の管理",
            "データベースの高速化",
            "ビューの簡略化",
            "ルーティングの自動化"
        ],
        correct: 0,
        explanation: "Rails.credentialsは秘密情報を暗号化して安全に管理できます。"
    },
    {
        id: 197,
        level: "中級",
        category: "データベース",
        question: "N+1問題を検出するgemは？",
        options: [
            "bullet",
            "rubocop",
            "pry",
            "byebug"
        ],
        correct: 0,
        explanation: "bulletはN+1クエリを検出し、パフォーマンス問題を防ぎます。"
    },
    {
        id: 198,
        level: "上級",
        category: "データベース",
        question: "データベースのインデックスを追加する理由は？",
        options: [
            "検索クエリの高速化",
            "データの削除",
            "テーブルの作成",
            "カラムの追加"
        ],
        correct: 0,
        explanation: "インデックスは特定のカラムでの検索を高速化します。"
    },
    {
        id: 199,
        level: "上級",
        category: "パフォーマンス",
        question: "Railsアプリのプロファイリングツールは？",
        options: [
            "rack-mini-profiler",
            "devise",
            "cancancan",
            "paperclip"
        ],
        correct: 0,
        explanation: "rack-mini-profilerはページロード時間やSQLクエリを分析します。"
    },
    {
        id: 200,
        level: "上級",
        category: "パフォーマンス",
        question: "フラグメントキャッシュの目的は？",
        options: [
            "ビューの一部をキャッシュして高速化",
            "データベース全体をキャッシュ",
            "JavaScriptをキャッシュ",
            "画像をキャッシュ"
        ],
        correct: 0,
        explanation: "フラグメントキャッシュはビューの重い部分をキャッシュして表示を高速化します。"
    },

    // ========== 追加: Active Storage編 (201-220) ==========
    {
        id: 201,
        level: "中級",
        category: "Active Storage",
        question: "Active Storageの主な用途は？",
        options: [
            "ファイルアップロードの管理",
            "データベースの管理",
            "メールの送信",
            "キャッシュの管理"
        ],
        correct: 0,
        explanation: "Active Storageはクラウドストレージサービスへのファイルアップロードを簡単にします。"
    },
    {
        id: 202,
        level: "中級",
        category: "Active Storage",
        question: "Active Storageで画像のリサイズを行うには？",
        options: [
            "variantメソッドを使用",
            "resizeメソッドを使用",
            "scaleメソッドを使用",
            "transformメソッドを使用"
        ],
        correct: 0,
        explanation: "variantメソッドで画像の変換処理を定義できます。"
    },
    {
        id: 203,
        level: "上級",
        category: "Active Storage",
        question: "ダイレクトアップロードの利点は？",
        options: [
            "クライアントから直接クラウドにアップロード",
            "サーバーの負荷が増える",
            "アップロード速度が遅くなる",
            "セキュリティが低下する"
        ],
        correct: 0,
        explanation: "ダイレクトアップロードはサーバーを経由せずクラウドに直接アップロードします。"
    },
    {
        id: 204,
        level: "中級",
        category: "Action Text",
        question: "Action Textの用途は？",
        options: [
            "リッチテキストコンテンツの管理",
            "プレーンテキストのみ",
            "コードエディタ",
            "画像編集"
        ],
        correct: 0,
        explanation: "Action TextはWYSIWYGエディタでリッチテキストコンテンツを扱います。"
    },
    {
        id: 205,
        level: "中級",
        category: "Action Text",
        question: "Action Textが使用するエディタは？",
        options: [
            "Trix",
            "TinyMCE",
            "CKEditor",
            "Quill"
        ],
        correct: 0,
        explanation: "Action TextはBasecampが開発したTrixエディタを使用します。"
    },
    {
        id: 206,
        level: "初級",
        category: "Railsコマンド",
        question: "Railsコンソールを起動するコマンドは？",
        options: [
            "rails console",
            "rails server",
            "rails new",
            "rails generate"
        ],
        correct: 0,
        explanation: "rails console（またはrails c）でインタラクティブなRuby環境を起動します。"
    },
    {
        id: 207,
        level: "初級",
        category: "Railsコマンド",
        question: "データベースをリセットするコマンドは？",
        options: [
            "rails db:reset",
            "rails db:create",
            "rails db:migrate",
            "rails db:seed"
        ],
        correct: 0,
        explanation: "rails db:resetはデータベースを削除、作成、マイグレーション、シードを実行します。"
    },
    {
        id: 208,
        level: "中級",
        category: "Railsコマンド",
        question: "特定の環境でコマンドを実行するには？",
        options: [
            "RAILS_ENV=production を前置",
            "rails production",
            "--production オプション",
            "config/production"
        ],
        correct: 0,
        explanation: "RAILS_ENV環境変数で実行環境を指定します。"
    },
    {
        id: 209,
        level: "中級",
        category: "Rails設定",
        question: "config/application.rbの役割は？",
        options: [
            "アプリケーション全体の設定",
            "データベース設定のみ",
            "ルーティング設定のみ",
            "ビューの設定のみ"
        ],
        correct: 0,
        explanation: "config/application.rbはアプリケーション全体に影響する設定を記述します。"
    },
    {
        id: 210,
        level: "中級",
        category: "Rails設定",
        question: "タイムゾーンを設定するには？",
        options: [
            "config.time_zone = 'Tokyo'",
            "Rails.timezone = 'Tokyo'",
            "Time.zone = 'Tokyo'",
            "設定できない"
        ],
        correct: 0,
        explanation: "config.time_zoneでアプリケーションのデフォルトタイムゾーンを設定します。"
    },
    {
        id: 211,
        level: "上級",
        category: "Rails設定",
        question: "eager_loadingを有効にする環境は？",
        options: [
            "production環境",
            "development環境",
            "test環境",
            "すべての環境"
        ],
        correct: 0,
        explanation: "production環境ではeager_loadingで起動時に全クラスを読み込みます。"
    },
    {
        id: 212,
        level: "中級",
        category: "メール送信",
        question: "Action Mailerでメールレイアウトを設定するには？",
        options: [
            "layout 'mailer'",
            "template 'mailer'",
            "render 'mailer'",
            "view 'mailer'"
        ],
        correct: 0,
        explanation: "layoutメソッドでメーラーのレイアウトファイルを指定します。"
    },
    {
        id: 213,
        level: "上級",
        category: "メール送信",
        question: "メール送信をテストする際のベストプラクティスは？",
        options: [
            "配信モードをtestに設定",
            "実際にメールを送信",
            "メール機能を無効化",
            "テストしない"
        ],
        correct: 0,
        explanation: "test環境では配信モードをtestにしてメールを実際には送信しません。"
    },
    {
        id: 214,
        level: "中級",
        category: "国際化",
        question: "Rails国際化ファイルの場所は？",
        options: [
            "config/locales/",
            "app/locales/",
            "lib/locales/",
            "public/locales/"
        ],
        correct: 0,
        explanation: "翻訳ファイルはconfig/locales/ディレクトリに配置します。"
    },
    {
        id: 215,
        level: "中級",
        category: "国際化",
        question: "翻訳テキストを表示するヘルパーは？",
        options: [
            "t() または I18n.t()",
            "translate_text()",
            "get_translation()",
            "text()"
        ],
        correct: 0,
        explanation: "t()ヘルパーまたはI18n.t()で翻訳テキストを取得します。"
    },
    {
        id: 216,
        level: "上級",
        category: "国際化",
        question: "動的な値を翻訳に含めるには？",
        options: [
            "プレースホルダーを使用",
            "文字列連結",
            "別々に翻訳",
            "JavaScriptで処理"
        ],
        correct: 0,
        explanation: "%{variable}形式のプレースホルダーで動的な値を埋め込みます。"
    },
    {
        id: 217,
        level: "上級",
        category: "デプロイ",
        question: "Capistranoの役割は？",
        options: [
            "自動デプロイツール",
            "テストフレームワーク",
            "データベース管理",
            "ログ管理"
        ],
        correct: 0,
        explanation: "Capistranoは自動デプロイメントを実現するツールです。"
    },
    {
        id: 218,
        level: "上級",
        category: "デプロイ",
        question: "ゼロダウンタイムデプロイの方法は？",
        options: [
            "ローリングデプロイやブルーグリーン",
            "サーバー停止後にデプロイ",
            "手動でファイルコピー",
            "FTPアップロード"
        ],
        correct: 0,
        explanation: "ローリングデプロイやブルーグリーンデプロイでサービスを停止せずに更新します。"
    },
    {
        id: 219,
        level: "中級",
        category: "モニタリング",
        question: "Railsアプリのエラー監視サービスは？",
        options: [
            "Sentry, Rollbar, Bugsnag",
            "Google Analytics",
            "GitHub",
            "Slack"
        ],
        correct: 0,
        explanation: "Sentry等のサービスでエラーをリアルタイムで監視・通知します。"
    },
    {
        id: 220,
        level: "上級",
        category: "モニタリング",
        question: "APM（Application Performance Monitoring）ツールの例は？",
        options: [
            "New Relic, Datadog, Scout",
            "RSpec, Minitest",
            "Rubocop, Reek",
            "Git, SVN"
        ],
        correct: 0,
        explanation: "APMツールはアプリケーションのパフォーマンスを詳細に監視します。"
    },

    // ========== 追加: Rails 7新機能編 (221-240) ==========
    {
        id: 221,
        level: "上級",
        category: "Rails 7",
        question: "Rails 7の Hotwire に含まれる技術は？",
        options: [
            "Turbo と Stimulus",
            "jQuery と Bootstrap",
            "React と Redux",
            "Vue と Vuex"
        ],
        correct: 0,
        explanation: "HotwireはTurboとStimulusを組み合わせてSPA風の体験を提供します。"
    },
    {
        id: 222,
        level: "上級",
        category: "Rails 7",
        question: "Turbo Framesの利点は？",
        options: [
            "ページの一部だけを更新できる",
            "ページ全体を更新する",
            "JavaScriptが不要になる",
            "CSSが不要になる"
        ],
        correct: 0,
        explanation: "Turbo Framesは指定した領域だけを更新し、高速な画面遷移を実現します。"
    },
    {
        id: 223,
        level: "上級",
        category: "Rails 7",
        question: "Turbo Streamsの用途は？",
        options: [
            "WebSocketでページを部分更新",
            "動画のストリーミング",
            "音声のストリーミング",
            "ファイルダウンロード"
        ],
        correct: 0,
        explanation: "Turbo StreamsはWebSocketを使用してリアルタイムでDOMを更新します。"
    },
    {
        id: 224,
        level: "中級",
        category: "Rails 7",
        question: "Import mapsの利点は？",
        options: [
            "Node.jsなしでJavaScriptモジュールを管理",
            "Node.jsが必須になる",
            "Webpackが必須になる",
            "JavaScriptが使えなくなる"
        ],
        correct: 0,
        explanation: "Import mapsはビルドステップなしでESモジュールを使用できます。"
    },
    {
        id: 225,
        level: "上級",
        category: "Rails 7",
        question: "Rails 7で encrypted attributes を使うメリットは？",
        options: [
            "モデル属性を暗号化して保存",
            "パスワードが不要になる",
            "データベースが不要になる",
            "通信が暗号化される"
        ],
        correct: 0,
        explanation: "encrypted attributesで機密データを暗号化してデータベースに保存します。"
    },
    {
        id: 226,
        level: "中級",
        category: "GraphQL",
        question: "GraphQLをRailsで使う利点は？",
        options: [
            "クライアントが必要なデータだけ取得",
            "REST APIより遅い",
            "データ取得が固定される",
            "キャッシュができない"
        ],
        correct: 0,
        explanation: "GraphQLではクライアントが必要なフィールドだけを指定して取得できます。"
    },
    {
        id: 227,
        level: "上級",
        category: "GraphQL",
        question: "graphql-rubyの主な機能は？",
        options: [
            "スキーマ定義とリゾルバー実装",
            "データベース管理",
            "ビューのレンダリング",
            "メール送信"
        ],
        correct: 0,
        explanation: "graphql-rubyはGraphQLスキーマとリゾルバーをRubyで実装します。"
    },
    {
        id: 228,
        level: "中級",
        category: "Docker",
        question: "RailsアプリをDockerize する利点は？",
        options: [
            "環境の一貫性と移植性",
            "実行速度の向上",
            "コードの削減",
            "テストが不要になる"
        ],
        correct: 0,
        explanation: "Dockerは開発から本番まで一貫した環境を提供します。"
    },
    {
        id: 229,
        level: "上級",
        category: "Docker",
        question: "docker-compose.ymlでRailsアプリを構成する際の一般的なサービスは？",
        options: [
            "web, db, redis",
            "html, css, js",
            "controller, model, view",
            "get, post, put"
        ],
        correct: 0,
        explanation: "一般的にweb（Rails）、db（PostgreSQL/MySQL）、redis（キャッシュ/ジョブ）を構成します。"
    },
    {
        id: 230,
        level: "中級",
        category: "CI/CD",
        question: "GitHub ActionsでRailsテストを実行する利点は？",
        options: [
            "プッシュ時に自動でテスト実行",
            "テストが不要になる",
            "手動テストが速くなる",
            "ローカルでテストできなくなる"
        ],
        correct: 0,
        explanation: "GitHub Actionsでコード変更時に自動的にテストを実行し品質を保ちます。"
    },
    {
        id: 231,
        level: "上級",
        category: "CI/CD",
        question: "並列テスト実行の利点は？",
        options: [
            "テスト実行時間の短縮",
            "テストコードの削減",
            "テストの精度向上",
            "メモリ使用量の削減"
        ],
        correct: 0,
        explanation: "並列実行により大規模なテストスイートも高速に実行できます。"
    },
    {
        id: 232,
        level: "中級",
        category: "マイクロサービス",
        question: "Railsでマイクロサービスを構築する際の考慮点は？",
        options: [
            "サービス間通信とデータ一貫性",
            "モノリスより簡単",
            "テストが不要",
            "デプロイが簡単"
        ],
        correct: 0,
        explanation: "マイクロサービスではAPI設計、認証、トランザクション管理が重要です。"
    },
    {
        id: 233,
        level: "上級",
        category: "マイクロサービス",
        question: "サービス間通信で推奨される方式は？",
        options: [
            "REST API または gRPC",
            "直接データベース接続",
            "ファイル共有",
            "グローバル変数"
        ],
        correct: 0,
        explanation: "REST APIやgRPCで疎結合なサービス間通信を実現します。"
    },
    {
        id: 234,
        level: "中級",
        category: "WebSocket",
        question: "WebSocketが適している用途は？",
        options: [
            "チャット、通知、リアルタイム更新",
            "静的ページの表示",
            "ファイルダウンロード",
            "バッチ処理"
        ],
        correct: 0,
        explanation: "WebSocketは双方向通信でリアルタイム性が求められる機能に適しています。"
    },
    {
        id: 235,
        level: "上級",
        category: "WebSocket",
        question: "Action CableでのScaling戦略は？",
        options: [
            "Redisアダプターでサーバー間通信",
            "単一サーバーのみ使用",
            "データベースポーリング",
            "ファイル共有"
        ],
        correct: 0,
        explanation: "Redisアダプターで複数のアプリケーションサーバー間でWebSocket接続を共有します。"
    },
    {
        id: 236,
        level: "上級",
        category: "メタプログラミング",
        question: "method_missingの用途は？",
        options: [
            "動的なメソッド処理",
            "エラー処理",
            "ログ出力",
            "データベース接続"
        ],
        correct: 0,
        explanation: "method_missingで未定義メソッドの呼び出しを動的に処理します。"
    },
    {
        id: 237,
        level: "上級",
        category: "メタプログラミング",
        question: "define_methodの利点は？",
        options: [
            "実行時にメソッドを動的定義",
            "メソッドの削除",
            "クラスの削除",
            "定数の変更"
        ],
        correct: 0,
        explanation: "define_methodで実行時に動的にメソッドを生成できます。"
    },
    {
        id: 238,
        level: "中級",
        category: "Gem開発",
        question: "Railsエンジンの用途は？",
        options: [
            "再利用可能な機能モジュール",
            "データベースエンジン",
            "検索エンジン",
            "JavaScriptエンジン"
        ],
        correct: 0,
        explanation: "Railsエンジンは独立したRailsアプリケーション機能を提供するgemです。"
    },
    {
        id: 239,
        level: "上級",
        category: "Gem開発",
        question: "gemspecファイルの役割は？",
        options: [
            "gemのメタデータと依存関係の定義",
            "テストの実行",
            "コードの実行",
            "デプロイの設定"
        ],
        correct: 0,
        explanation: "gemspecはgemの名前、バージョン、依存関係などを定義します。"
    },
    {
        id: 240,
        level: "上級",
        category: "アーキテクチャ",
        question: "イベント駆動アーキテクチャの利点は？",
        options: [
            "疎結合で拡張性が高い",
            "実装が簡単",
            "デバッグが簡単",
            "パフォーマンスが必ず向上"
        ],
        correct: 0,
        explanation: "イベント駆動アーキテクチャはコンポーネント間の依存を減らし拡張性を高めます。"
    },

    // ========== 追加: 実践応用編 (241-260) ==========
    {
        id: 241,
        level: "上級",
        category: "DDD",
        question: "Domain-Driven DesignをRailsで実装する際の課題は？",
        options: [
            "Active Recordパターンとの調整",
            "実装が簡単になる",
            "コードが減る",
            "テストが不要になる"
        ],
        correct: 0,
        explanation: "DDDの概念とActive Recordパターンの調整が必要です。"
    },
    {
        id: 242,
        level: "上級",
        category: "DDD",
        question: "値オブジェクトの実装方法は？",
        options: [
            "Structやカスタムクラスで実装",
            "Active Recordモデルのみ使用",
            "文字列のみ使用",
            "ハッシュのみ使用"
        ],
        correct: 0,
        explanation: "値オブジェクトはStructやPOROで不変性を持たせて実装します。"
    },
    {
        id: 243,
        level: "中級",
        category: "サービスオブジェクト",
        question: "サービスオブジェクトを使う利点は？",
        options: [
            "ビジネスロジックの分離と再利用",
            "モデルが不要になる",
            "コントローラーが不要になる",
            "ビューが不要になる"
        ],
        correct: 0,
        explanation: "サービスオブジェクトで複雑なビジネスロジックをカプセル化します。"
    },
    {
        id: 244,
        level: "中級",
        category: "サービスオブジェクト",
        question: "サービスオブジェクトの一般的な命名規則は？",
        options: [
            "動詞 + 名詞（CreateOrder等）",
            "名詞のみ（Order等）",
            "形容詞 + 名詞（BigOrder等）",
            "数字 + 名詞（FirstOrder等）"
        ],
        correct: 0,
        explanation: "サービスオブジェクトは実行する動作を表す動詞で始めます。"
    },
    {
        id: 245,
        level: "上級",
        category: "フォームオブジェクト",
        question: "フォームオブジェクトパターンの利点は？",
        options: [
            "複雑なフォームロジックの分離",
            "フォームが不要になる",
            "バリデーションが不要になる",
            "データベースが不要になる"
        ],
        correct: 0,
        explanation: "フォームオブジェクトで複数モデルにまたがるフォーム処理を整理します。"
    },
    {
        id: 246,
        level: "中級",
        category: "デコレーター",
        question: "デコレーターパターンの用途は？",
        options: [
            "ビューロジックをモデルから分離",
            "データベース処理",
            "ルーティング処理",
            "キャッシュ処理"
        ],
        correct: 0,
        explanation: "デコレーターでプレゼンテーション層のロジックをカプセル化します。"
    },
    {
        id: 247,
        level: "中級",
        category: "デコレーター",
        question: "Draperジェムの役割は？",
        options: [
            "デコレーターパターンの実装支援",
            "データベース管理",
            "テスト実行",
            "デプロイ支援"
        ],
        correct: 0,
        explanation: "DraperはRailsでデコレーターパターンを簡単に実装するためのgemです。"
    },
    {
        id: 248,
        level: "上級",
        category: "クエリオブジェクト",
        question: "クエリオブジェクトの利点は？",
        options: [
            "複雑なクエリロジックの再利用",
            "クエリが不要になる",
            "データベースが速くなる",
            "モデルが不要になる"
        ],
        correct: 0,
        explanation: "クエリオブジェクトで複雑なデータベースクエリを整理・再利用します。"
    },
    {
        id: 249,
        level: "中級",
        category: "ポリシーオブジェクト",
        question: "Punditジェムの用途は？",
        options: [
            "認可ロジックの管理",
            "認証処理",
            "ログイン処理",
            "パスワード管理"
        ],
        correct: 0,
        explanation: "Punditはポリシーオブジェクトで認可ロジックを管理します。"
    },
    {
        id: 250,
        level: "上級",
        category: "ポリシーオブジェクト",
        question: "認可と認証の違いは？",
        options: [
            "認証は誰か、認可は何ができるか",
            "同じ意味",
            "認可は誰か、認証は何ができるか",
            "どちらもログイン処理"
        ],
        correct: 0,
        explanation: "認証（Authentication）はユーザー識別、認可（Authorization）は権限確認です。"
    },
    {
        id: 251,
        level: "上級",
        category: "イベントソーシング",
        question: "イベントソーシングの特徴は？",
        options: [
            "状態変更を一連のイベントとして保存",
            "現在の状態のみ保存",
            "ログを削除",
            "履歴を保存しない"
        ],
        correct: 0,
        explanation: "イベントソーシングではすべての状態変更をイベントとして記録します。"
    },
    {
        id: 252,
        level: "上級",
        category: "CQRS",
        question: "CQRSパターンの基本概念は？",
        options: [
            "読み取りと書き込みの分離",
            "モデルとビューの統合",
            "データベースの統合",
            "APIの統合"
        ],
        correct: 0,
        explanation: "CQRS（Command Query Responsibility Segregation）は読み書きを分離します。"
    },
    {
        id: 253,
        level: "中級",
        category: "レート制限",
        question: "rack-attackの用途は？",
        options: [
            "リクエストのレート制限",
            "データベース攻撃",
            "ファイル削除",
            "メモリ攻撃"
        ],
        correct: 0,
        explanation: "rack-attackはDDoS攻撃やブルートフォース攻撃を防ぐレート制限を実装します。"
    },
    {
        id: 254,
        level: "上級",
        category: "レート制限",
        question: "レート制限の実装方法は？",
        options: [
            "Token BucketやLeaky Bucket",
            "無制限アクセス",
            "IPアドレスブロックのみ",
            "手動監視"
        ],
        correct: 0,
        explanation: "Token BucketやLeaky Bucketアルゴリズムでレート制限を実装します。"
    },
    {
        id: 255,
        level: "中級",
        category: "ファイル処理",
        question: "CSVファイルをインポートする際の考慮点は？",
        options: [
            "バッチ処理とエラーハンドリング",
            "一度に全件処理",
            "エラーは無視",
            "バリデーション不要"
        ],
        correct: 0,
        explanation: "大量データはバッチ処理し、エラー行を適切に処理します。"
    },
    {
        id: 256,
        level: "上級",
        category: "ファイル処理",
        question: "大容量ファイルの処理方法は？",
        options: [
            "ストリーミング処理やバックグラウンドジョブ",
            "メモリに全て読み込み",
            "処理しない",
            "分割せずに処理"
        ],
        correct: 0,
        explanation: "ストリーミング処理とバックグラウンドジョブで効率的に処理します。"
    },
    {
        id: 257,
        level: "中級",
        category: "検索機能",
        question: "Elasticsearchを使う利点は？",
        options: [
            "全文検索と高速な検索",
            "SQLより遅い",
            "データベースが不要",
            "インデックスが不要"
        ],
        correct: 0,
        explanation: "Elasticsearchは高速な全文検索と複雑な検索クエリを実現します。"
    },
    {
        id: 258,
        level: "上級",
        category: "検索機能",
        question: "searchkickジェムの機能は？",
        options: [
            "ElasticsearchのRails統合",
            "データベース検索",
            "ファイル検索",
            "コード検索"
        ],
        correct: 0,
        explanation: "searchkickはElasticsearchをRailsで簡単に使うためのgemです。"
    },
    {
        id: 259,
        level: "上級",
        category: "マルチテナント",
        question: "マルチテナントアーキテクチャの実装方法は？",
        options: [
            "スキーマ分離、データベース分離、行レベル分離",
            "単一データベースのみ",
            "ファイル分離",
            "URL分離のみ"
        ],
        correct: 0,
        explanation: "要件に応じてスキーマ、データベース、行レベルでテナントを分離します。"
    },
    {
        id: 260,
        level: "上級",
        category: "マルチテナント",
        question: "Apartmentジェムの用途は？",
        options: [
            "PostgreSQLスキーマでテナント分離",
            "住居管理",
            "ユーザー管理",
            "セッション管理"
        ],
        correct: 0,
        explanation: "ApartmentはPostgreSQLのスキーマを使ってマルチテナントを実装します。"
    },

    // ========== 追加: 最新トレンド編 (261-280) ==========
    {
        id: 261,
        level: "上級",
        category: "ViewComponent",
        question: "ViewComponentの利点は？",
        options: [
            "再利用可能でテスタブルなビューコンポーネント",
            "パーシャルより遅い",
            "テストできない",
            "Ruby不要"
        ],
        correct: 0,
        explanation: "ViewComponentはRubyクラスとしてビューコンポーネントを定義し、単体テストが可能です。"
    },
    {
        id: 262,
        level: "中級",
        category: "ViewComponent",
        question: "ViewComponentとパーシャルの違いは？",
        options: [
            "ViewComponentはRubyクラスで定義",
            "同じもの",
            "パーシャルの方が高機能",
            "ViewComponentはERB不要"
        ],
        correct: 0,
        explanation: "ViewComponentはRubyクラスとして定義され、明示的なインターフェースを持ちます。"
    },
    {
        id: 263,
        level: "上級",
        category: "StimulusReflex",
        question: "StimulusReflexの特徴は？",
        options: [
            "サーバーサイドでリアクティブUI",
            "クライアントサイドのみ",
            "JavaScriptフレームワーク",
            "CSSフレームワーク"
        ],
        correct: 0,
        explanation: "StimulusReflexはサーバーサイドでリアクティブなUIを構築します。"
    },
    {
        id: 264,
        level: "中級",
        category: "AnyCable",
        question: "AnyCableの利点は？",
        options: [
            "Action Cableより高性能",
            "Action Cableより遅い",
            "WebSocket不要",
            "Ruby不要"
        ],
        correct: 0,
        explanation: "AnyCableはGoで実装されWebSocket接続を効率的に処理します。"
    },
    {
        id: 265,
        level: "上級",
        category: "Kredis",
        question: "Kredisの用途は？",
        options: [
            "Redisデータ構造の高レベルアクセス",
            "データベース管理",
            "ファイル管理",
            "メール送信"
        ],
        correct: 0,
        explanation: "KredisはRedisのデータ構造をActive Modelのように扱えます。"
    },
    {
        id: 266,
        level: "中級",
        category: "Propshaft",
        question: "PropshaftとSprocketsの違いは？",
        options: [
            "Propshaftはより軽量でシンプル",
            "Propshaftの方が複雑",
            "機能は同じ",
            "Sprocketsの方が新しい"
        ],
        correct: 0,
        explanation: "PropshaftはRails 7で導入された軽量なアセットパイプラインです。"
    },
    {
        id: 267,
        level: "上級",
        category: "Solid Queue",
        question: "Solid Queueの特徴は？",
        options: [
            "データベースベースのジョブキュー",
            "Redisが必須",
            "メモリベース",
            "ファイルベース"
        ],
        correct: 0,
        explanation: "Solid QueueはデータベースをバックエンドとするActive Jobアダプターです。"
    },
    {
        id: 268,
        level: "中級",
        category: "Mission Control",
        question: "Mission Control - Jobsの用途は？",
        options: [
            "ジョブキューの監視と管理",
            "デプロイ管理",
            "ログ管理",
            "データベース管理"
        ],
        correct: 0,
        explanation: "Mission Control - JobsはActive Jobのキューを視覚的に監視・管理します。"
    },
    {
        id: 269,
        level: "上級",
        category: "Kamal",
        question: "Kamalの役割は？",
        options: [
            "Dockerコンテナのデプロイツール",
            "テストフレームワーク",
            "データベース管理",
            "ログ管理"
        ],
        correct: 0,
        explanation: "Kamal（旧MRSK）はDockerコンテナを本番環境にデプロイするツールです。"
    },
    {
        id: 270,
        level: "中級",
        category: "Trilogy",
        question: "Trilogyアダプターの特徴は？",
        options: [
            "GitHubが開発した高速MySQLクライアント",
            "PostgreSQL用",
            "SQLite用",
            "MongoDB用"
        ],
        correct: 0,
        explanation: "TrilogyはGitHubが開発した高性能なMySQL接続アダプターです。"
    },
    {
        id: 271,
        level: "上級",
        category: "Sorbet",
        question: "SorbetをRailsで使う利点は？",
        options: [
            "静的型チェックでバグを防ぐ",
            "実行速度の向上",
            "コード量の削減",
            "テスト不要"
        ],
        correct: 0,
        explanation: "Sorbetは段階的な型チェックでRubyコードの安全性を高めます。"
    },
    {
        id: 272,
        level: "中級",
        category: "RBS",
        question: "RBSファイルの用途は？",
        options: [
            "Rubyの型定義",
            "データベース定義",
            "ビュー定義",
            "ルーティング定義"
        ],
        correct: 0,
        explanation: "RBS（Ruby Signature）はRubyの型情報を記述するファイル形式です。"
    },
    {
        id: 273,
        level: "上級",
        category: "Packwerk",
        question: "Packwerkの目的は？",
        options: [
            "モジュール境界の強制",
            "パッケージ管理",
            "デプロイ管理",
            "テスト管理"
        ],
        correct: 0,
        explanation: "Packwerkはアプリケーションをモジュールに分割し、依存関係を管理します。"
    },
    {
        id: 274,
        level: "中級",
        category: "Lookbook",
        question: "Lookbookの用途は？",
        options: [
            "ViewComponentのプレビューとドキュメント",
            "データベース管理",
            "ログ表示",
            "パフォーマンス監視"
        ],
        correct: 0,
        explanation: "LookbookはViewComponentのインタラクティブなプレビュー環境を提供します。"
    },
    {
        id: 275,
        level: "上級",
        category: "Falcon",
        question: "FalconサーバーとPumaの違いは？",
        options: [
            "Falconは非同期I/Oに特化",
            "Pumaの方が速い",
            "機能は同じ",
            "Falconは同期処理のみ"
        ],
        correct: 0,
        explanation: "Falconは非同期I/Oとファイバーを活用した高性能サーバーです。"
    },
    {
        id: 276,
        level: "中級",
        category: "Avo",
        question: "Avoフレームワークの用途は？",
        options: [
            "管理画面の自動生成",
            "API生成",
            "テスト生成",
            "マイグレーション生成"
        ],
        correct: 0,
        explanation: "AvoはRailsアプリケーションの管理画面を自動生成します。"
    },
    {
        id: 277,
        level: "上級",
        category: "Hotwire Native",
        question: "Hotwire Nativeの特徴は？",
        options: [
            "Webビューでネイティブアプリを構築",
            "完全ネイティブコード",
            "React Native使用",
            "Flutter使用"
        ],
        correct: 0,
        explanation: "Hotwire Native（旧Turbo Native）はWebビューでiOS/Androidアプリを構築します。"
    },
    {
        id: 278,
        level: "中級",
        category: "Phlex",
        question: "Phlexフレームワークの特徴は？",
        options: [
            "RubyでHTMLを構築するビューフレームワーク",
            "JavaScriptフレームワーク",
            "CSSフレームワーク",
            "テストフレームワーク"
        ],
        correct: 0,
        explanation: "PhlexはRubyクラスとメソッドでHTMLを生成するフレームワークです。"
    },
    {
        id: 279,
        level: "上級",
        category: "Vitess",
        question: "VitessとRailsの統合メリットは？",
        options: [
            "MySQLの水平スケーリング",
            "垂直スケーリングのみ",
            "PostgreSQL対応",
            "NoSQL化"
        ],
        correct: 0,
        explanation: "VitessはMySQLの水平スケーリングを実現するミドルウェアです。"
    },
    {
        id: 280,
        level: "上級",
        category: "エッジコンピューティング",
        question: "Rails on the Edgeの利点は？",
        options: [
            "CDNエッジでの動的コンテンツ生成",
            "サーバー不要",
            "データベース不要",
            "静的サイトのみ"
        ],
        correct: 0,
        explanation: "エッジコンピューティングでユーザーに近い場所で動的コンテンツを生成します。"
    },

    // ========== 追加: 実装パターン編 (281-300) ==========
    {
        id: 281,
        level: "上級",
        category: "認証実装",
        question: "パスキー認証の利点は？",
        options: [
            "パスワードレスで高セキュリティ",
            "パスワードより弱い",
            "実装が簡単",
            "ブラウザ非対応"
        ],
        correct: 0,
        explanation: "パスキーは生体認証やデバイス認証でパスワードレス認証を実現します。"
    },
    {
        id: 282,
        level: "中級",
        category: "認証実装",
        question: "2要素認証（2FA）の実装方法は？",
        options: [
            "TOTP（Time-based One-Time Password）",
            "パスワードのみ",
            "メールのみ",
            "IPアドレス制限のみ"
        ],
        correct: 0,
        explanation: "TOTPはGoogle Authenticator等のアプリで時間ベースのワンタイムパスワードを生成します。"
    },
    {
        id: 283,
        level: "上級",
        category: "キャッシュ戦略",
        question: "ロシアンドールキャッシングとは？",
        options: [
            "ネストされたフラグメントキャッシュ",
            "データベースキャッシュ",
            "メモリキャッシュ",
            "ファイルキャッシュ"
        ],
        correct: 0,
        explanation: "ロシアンドールキャッシングは入れ子構造のフラグメントキャッシュで効率化します。"
    },
    {
        id: 284,
        level: "中級",
        category: "キャッシュ戦略",
        question: "キャッシュキーにバージョンを含める理由は？",
        options: [
            "キャッシュの無効化を制御",
            "キャッシュサイズ削減",
            "キャッシュ速度向上",
            "メモリ節約"
        ],
        correct: 0,
        explanation: "バージョン付きキャッシュキーで変更時に自動的にキャッシュを更新します。"
    },
    {
        id: 285,
        level: "上級",
        category: "データベース最適化",
        question: "カウンターキャッシュの実装方法は？",
        options: [
            "counter_cacheオプションで関連数を保存",
            "毎回COUNT実行",
            "メモリで管理",
            "ファイルで管理"
        ],
        correct: 0,
        explanation: "counter_cacheは関連レコード数をカラムに保存してCOUNTクエリを避けます。"
    },
    {
        id: 286,
        level: "中級",
        category: "データベース最適化",
        question: "楽観的ロックの実装方法は？",
        options: [
            "lock_versionカラムで同時更新を検出",
            "データベースロック",
            "ファイルロック",
            "メモリロック"
        ],
        correct: 0,
        explanation: "lock_versionカラムで更新時の競合を検出し、同時更新を防ぎます。"
    },
    {
        id: 287,
        level: "上級",
        category: "非同期処理",
        question: "イベントドリブンジョブの実装方法は？",
        options: [
            "after_commitコールバックでジョブ起動",
            "before_saveで起動",
            "同期処理のみ",
            "cron実行"
        ],
        correct: 0,
        explanation: "after_commitでトランザクション完了後にジョブを起動し、一貫性を保ちます。"
    },
    {
        id: 288,
        level: "中級",
        category: "非同期処理",
        question: "バックグラウンドジョブの冪等性を保証する方法は？",
        options: [
            "ユニークIDで重複実行を防ぐ",
            "何度でも実行",
            "一度だけ実行を保証できない",
            "手動で管理"
        ],
        correct: 0,
        explanation: "ジョブIDやユニークキーで重複実行を検出し、冪等性を保証します。"
    },
    {
        id: 289,
        level: "上級",
        category: "API設計",
        question: "GraphQL N+1問題の解決方法は？",
        options: [
            "DataLoaderでバッチロード",
            "個別にクエリ実行",
            "キャッシュのみ使用",
            "解決できない"
        ],
        correct: 0,
        explanation: "DataLoaderパターンでクエリをバッチ化してN+1問題を解決します。"
    },
    {
        id: 290,
        level: "中級",
        category: "API設計",
        question: "APIレスポンスのページネーション実装は？",
        options: [
            "カーソルベースまたはオフセットベース",
            "全件返却",
            "ランダム返却",
            "固定件数のみ"
        ],
        correct: 0,
        explanation: "大量データはカーソルベースまたはオフセットベースでページ分割します。"
    },
    {
        id: 291,
        level: "上級",
        category: "リアルタイム",
        question: "Server-Sent Events（SSE）とWebSocketの違いは？",
        options: [
            "SSEは単方向、WebSocketは双方向",
            "SSEは双方向、WebSocketは単方向",
            "機能は同じ",
            "SSEの方が高機能"
        ],
        correct: 0,
        explanation: "SSEはサーバーからクライアントへの単方向通信、WebSocketは双方向通信です。"
    },
    {
        id: 292,
        level: "中級",
        category: "リアルタイム",
        question: "Action Cableでの認証実装方法は？",
        options: [
            "Connectionクラスで認証",
            "認証不要",
            "クライアント側で認証",
            "データベースで認証"
        ],
        correct: 0,
        explanation: "Connectionクラスのidentified_byメソッドで接続時の認証を実装します。"
    },
    {
        id: 293,
        level: "上級",
        category: "ログ管理",
        question: "構造化ログの利点は？",
        options: [
            "機械的な解析が容易",
            "人間が読みやすい",
            "ファイルサイズが小さい",
            "実装が簡単"
        ],
        correct: 0,
        explanation: "JSON形式等の構造化ログは検索・分析・監視が容易です。"
    },
    {
        id: 294,
        level: "中級",
        category: "ログ管理",
        question: "センシティブ情報のログフィルタリング方法は？",
        options: [
            "filter_parametersで除外",
            "すべてログ出力",
            "ログを無効化",
            "手動で削除"
        ],
        correct: 0,
        explanation: "filter_parametersでパスワード等のセンシティブ情報をログから除外します。"
    },
    {
        id: 295,
        level: "上級",
        category: "メトリクス",
        question: "カスタムメトリクスの実装方法は？",
        options: [
            "StatsD や Prometheus クライアント",
            "puts文で出力",
            "ログファイルのみ",
            "データベースのみ"
        ],
        correct: 0,
        explanation: "StatsDやPrometheusクライアントでカスタムメトリクスを収集・送信します。"
    },
    {
        id: 296,
        level: "中級",
        category: "メトリクス",
        question: "RED メトリクスとは？",
        options: [
            "Rate, Errors, Duration",
            "Read, Edit, Delete",
            "Ruby, Erlang, Docker",
            "Request, Event, Data"
        ],
        correct: 0,
        explanation: "REDメトリクス（Rate/Errors/Duration）はサービスの健全性を測る指標です。"
    },
    {
        id: 297,
        level: "上級",
        category: "障害対策",
        question: "サーキットブレーカーパターンの用途は？",
        options: [
            "連鎖的な障害を防ぐ",
            "障害を増幅する",
            "サービスを停止する",
            "データを削除する"
        ],
        correct: 0,
        explanation: "サーキットブレーカーは外部サービスの障害が連鎖するのを防ぎます。"
    },
    {
        id: 298,
        level: "中級",
        category: "障害対策",
        question: "グレースフルシャットダウンの実装方法は？",
        options: [
            "SIGTERMをトラップして処理完了を待つ",
            "即座に終了",
            "プロセスをkill",
            "電源を切る"
        ],
        correct: 0,
        explanation: "SIGTERMシグナルをトラップし、実行中の処理を完了してから終了します。"
    },
    {
        id: 299,
        level: "上級",
        category: "スケーリング",
        question: "読み取り専用レプリカの活用方法は？",
        options: [
            "読み取りクエリを分散",
            "書き込みを分散",
            "バックアップのみ",
            "使用しない"
        ],
        correct: 0,
        explanation: "読み取り専用レプリカに読み取りクエリを分散して負荷を軽減します。"
    },
    {
        id: 300,
        level: "上級",
        category: "スケーリング",
        question: "データベースシャーディングの課題は？",
        options: [
            "クロスシャードのJOINが困難",
            "実装が簡単",
            "パフォーマンス低下",
            "データ整合性向上"
        ],
        correct: 0,
        explanation: "シャーディングではシャード間のJOINやトランザクションが複雑になります。"
    }
];
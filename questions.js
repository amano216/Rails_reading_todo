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
    }
];
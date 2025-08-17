# Rails読解力向上クイズ100問

## はじめに
このクイズは、Ruby on Railsアプリケーションのコードを読む力を養うために作成されました。
初心者でも理解しやすいよう、段階的に難易度を上げていきます。

---

## 初級編：基本的なRuby構文とRailsの基礎（問1-30）

### 問1. シンボルの理解
```ruby
user = { name: "田中", age: 25 }
```
このコードで`:name`は何を表していますか？

A) 文字列 "name"  
B) 変数 name  
C) シンボル :name  
D) メソッド name

**答え: C**

---

### 問2. ハッシュの読み方
```ruby
params = { controller: "users", action: "show", id: "1" }
puts params[:id]
```
このコードの出力結果は？

A) :id  
B) "1"  
C) 1  
D) nil

**答え: B**

---

### 問3. インスタンス変数
```ruby
class User
  def initialize(name)
    @name = name
  end
end
```
`@name`は何を表していますか？

A) クラス変数  
B) インスタンス変数  
C) ローカル変数  
D) グローバル変数

**答え: B**

---

### 問4. attr_accessor
```ruby
class Product
  attr_accessor :price
end
```
このコードは何を定義していますか？

A) price変数のみ  
B) priceメソッドのみ  
C) price読み取りメソッドとprice=書き込みメソッド  
D) price定数

**答え: C**

---

### 問5. ブロックの基本
```ruby
[1, 2, 3].each do |num|
  puts num * 2
end
```
このコードは何を出力しますか？

A) 1 2 3  
B) 2 4 6  
C) [2, 4, 6]  
D) 6

**答え: B** (各行に2, 4, 6が出力される)

---

### 問6. Railsのディレクトリ構造
`app/controllers/`ディレクトリには何が置かれますか？

A) データベースのモデルファイル  
B) コントローラーファイル  
C) ビューテンプレート  
D) JavaScriptファイル

**答え: B**

---

### 問7. 配列の操作
```ruby
fruits = ["apple", "banana"]
fruits << "orange"
```
`<<`演算子は何をしていますか？

A) 配列を比較  
B) 配列に要素を追加  
C) 配列から要素を削除  
D) 配列を結合

**答え: B**

---

### 問8. メソッド定義
```ruby
def greeting(name = "Guest")
  "Hello, #{name}!"
end
```
`greeting()`を呼び出すと何が返されますか？

A) エラーが発生  
B) "Hello, !"  
C) "Hello, Guest!"  
D) nil

**答え: C**

---

### 問9. 文字列の展開
```ruby
age = 20
message = "私は#{age}歳です"
```
`message`の値は？

A) "私は\#{age}歳です"  
B) "私は20歳です"  
C) "私はage歳です"  
D) エラーが発生

**答え: B**

---

### 問10. nil判定
```ruby
user = nil
if user.nil?
  puts "ユーザーが存在しません"
end
```
このコードは何を出力しますか？

A) 何も出力されない  
B) "ユーザーが存在しません"  
C) nil  
D) エラーが発生

**答え: B**

---

### 問11. クラスの継承
```ruby
class AdminUser < User
end
```
`<`記号は何を意味しますか？

A) 小なり比較  
B) クラスの継承  
C) インクルード  
D) エクステンド

**答え: B**

---

### 問12. ! (感嘆符)の意味
```ruby
name = "  田中  "
name.strip!
```
メソッド名の`!`は何を意味しますか？

A) 否定  
B) 強制実行  
C) 破壊的メソッド（元のオブジェクトを変更）  
D) 例外を発生させる

**答え: C**

---

### 問13. Railsのモデルファイル
`app/models/user.rb`ファイルの基本構造は？

A) `class User < ApplicationRecord`  
B) `module User`  
C) `def User`  
D) `User = Class.new`

**答え: A**

---

### 問14. ハッシュのキー存在確認
```ruby
params = { name: "山田" }
params.key?(:name)
```
この結果は？

A) "山田"  
B) :name  
C) true  
D) false

**答え: C**

---

### 問15. unless文
```ruby
unless user.admin?
  redirect_to root_path
end
```
このコードはいつ実行されますか？

A) userが管理者の時  
B) userが管理者でない時  
C) 常に実行される  
D) 実行されない

**答え: B**

---

### 問16. ||= 演算子
```ruby
@current_user ||= User.find(session[:user_id])
```
`||=`は何をしていますか？

A) 論理和  
B) 代入  
C) @current_userがnilまたはfalseの場合のみ代入  
D) 常に代入

**答え: C**

---

### 問17. 配列のmap
```ruby
numbers = [1, 2, 3]
result = numbers.map { |n| n * 2 }
```
`result`の値は？

A) [1, 2, 3]  
B) [2, 4, 6]  
C) 6  
D) nil

**答え: B**

---

### 問18. private メソッド
```ruby
class User
  private
  def secret_method
  end
end
```
`private`キーワードの効果は？

A) メソッドを削除  
B) メソッドを外部から呼び出せなくする  
C) メソッドを高速化  
D) メソッドをクラスメソッドにする

**答え: B**

---

### 問19. Railsのビューファイル
`app/views/users/index.html.erb`の`.erb`拡張子は何を意味しますか？

A) Error Ruby  
B) Embedded Ruby  
C) Extended Ruby  
D) External Ruby

**答え: B**

---

### 問20. 条件付き代入
```ruby
status = user.active? ? "有効" : "無効"
```
userがactiveでない場合、statusの値は？

A) true  
B) false  
C) "有効"  
D) "無効"

**答え: D**

---

### 問21. requireとrequire_relative
```ruby
require 'json'
require_relative 'config'
```
この2つの違いは？

A) 違いはない  
B) requireは標準ライブラリやgem、require_relativeは相対パスのファイル  
C) require_relativeの方が高速  
D) requireは非推奨

**答え: B**

---

### 問22. selfキーワード
```ruby
class User
  def self.admin_users
    where(role: 'admin')
  end
end
```
`self.admin_users`は何を定義していますか？

A) インスタンスメソッド  
B) クラスメソッド  
C) プライベートメソッド  
D) アクセサメソッド

**答え: B**

---

### 問23. 範囲オブジェクト
```ruby
(1..5).to_a
```
この結果は？

A) [1, 2, 3, 4]  
B) [1, 2, 3, 4, 5]  
C) [2, 3, 4]  
D) [0, 1, 2, 3, 4, 5]

**答え: B**

---

### 問24. freeze メソッド
```ruby
CONSTANT = "固定値".freeze
```
`freeze`の効果は？

A) 文字列を大文字にする  
B) 文字列を変更不可能にする  
C) 文字列を削除する  
D) 文字列をコピーする

**答え: B**

---

### 問25. Gemfile
```ruby
gem 'rails', '~> 7.0.0'
```
`~>`の意味は？

A) 7.0.0以上のすべてのバージョン  
B) 7.0.0のみ  
C) 7.0.x の範囲内で最新  
D) 7.x.x の範囲内で最新

**答え: C**

---

### 問26. selectメソッド
```ruby
users = User.all
adults = users.select { |u| u.age >= 20 }
```
selectメソッドは何をしますか？

A) データベースから選択  
B) 条件に合う要素を抽出して新しい配列を作成  
C) 最初の要素を選択  
D) ランダムに選択

**答え: B**

---

### 問27. presence メソッド
```ruby
name = params[:name].presence || "名無し"
```
`presence`メソッドの役割は？

A) 値が存在すればtrue、なければfalse  
B) 空文字やnilの場合nilを返し、それ以外は元の値を返す  
C) 常にtrueを返す  
D) 値を文字列に変換

**答え: B**

---

### 問28. compact メソッド
```ruby
array = [1, nil, 2, nil, 3]
array.compact
```
結果は？

A) [1, 2, 3]  
B) [1, nil, 2, nil, 3]  
C) [nil, nil]  
D) []

**答え: A**

---

### 問29. with_index
```ruby
["a", "b", "c"].each_with_index do |item, index|
  puts "#{index}: #{item}"
end
```
最初の出力は？

A) "1: a"  
B) "0: a"  
C) "a: 0"  
D) "a: 1"

**答え: B**

---

### 問30. respond_to?
```ruby
if user.respond_to?(:admin?)
  user.admin?
end
```
`respond_to?`は何を確認していますか？

A) userがnilでないか  
B) userがadmin?メソッドを持っているか  
C) userが管理者か  
D) userが応答するか

**答え: B**

---

## 初級編：ルーティングとMVCパターンの基礎（問31-50）

### 問31. ルーティングの基本
```ruby
get '/users', to: 'users#index'
```
このルーティングは何を定義していますか？

A) GETリクエストで/usersにアクセスした時、UsersControllerのindexアクションを実行  
B) usersテーブルからデータを取得  
C) indexページを表示  
D) ユーザー一覧を削除

**答え: A**

---

### 問32. RESTfulルーティング
```ruby
resources :posts
```
このコードで作成されるルートの数は？

A) 1つ  
B) 4つ  
C) 7つ  
D) 10つ

**答え: C** (index, show, new, create, edit, update, destroy)

---

### 問33. params
```ruby
def show
  @user = User.find(params[:id])
end
```
`params[:id]`の値はどこから来ますか？

A) データベース  
B) URLやフォームから送信されたパラメータ  
C) セッション  
D) クッキー

**答え: B**

---

### 問34. redirect_to
```ruby
redirect_to users_path
```
このコードは何をしますか？

A) users_pathビューを表示  
B) ブラウザに別のURLへのリダイレクトを指示  
C) users_pathファイルを読み込み  
D) エラーを表示

**答え: B**

---

### 問35. render
```ruby
render :edit
```
renderとredirect_toの違いは？

A) 違いはない  
B) renderはビューを表示、redirect_toは新しいHTTPリクエストを発生させる  
C) renderの方が高速  
D) redirect_toは非推奨

**答え: B**

---

### 問36. before_action
```ruby
class UsersController < ApplicationController
  before_action :authenticate_user!
end
```
`before_action`はいつ実行されますか？

A) アクション実行後  
B) アクション実行前  
C) エラー発生時  
D) サーバー起動時

**答え: B**

---

### 問37. Strong Parameters
```ruby
def user_params
  params.require(:user).permit(:name, :email)
end
```
このメソッドの目的は？

A) パラメータを暗号化  
B) 許可されたパラメータのみを受け取る（セキュリティ対策）  
C) パラメータを削除  
D) パラメータを保存

**答え: B**

---

### 問38. ルーティングのネスト
```ruby
resources :posts do
  resources :comments
end
```
commentsのパスはどうなりますか？

A) /comments  
B) /posts/comments  
C) /posts/:post_id/comments  
D) /comments/:post_id

**答え: C**

---

### 問39. rootルート
```ruby
root 'home#index'
```
このルーティングはいつ使われますか？

A) エラー時  
B) アプリケーションのトップページ（/）にアクセス時  
C) ログイン時  
D) 404エラー時

**答え: B**

---

### 問40. member と collection
```ruby
resources :users do
  member do
    get 'profile'
  end
end
```
このルートのパスは？

A) /users/profile  
B) /users/:id/profile  
C) /profile  
D) /users/profiles

**答え: B**

---

### 問41. namespace
```ruby
namespace :admin do
  resources :users
end
```
usersコントローラーの場所は？

A) app/controllers/users_controller.rb  
B) app/controllers/admin/users_controller.rb  
C) app/admin/controllers/users_controller.rb  
D) admin/users_controller.rb

**答え: B**

---

### 問42. flash メッセージ
```ruby
flash[:notice] = "保存しました"
redirect_to users_path
```
flashメッセージはいつまで保持されますか？

A) 永続的  
B) 次のリクエストまで  
C) ブラウザを閉じるまで  
D) 5分間

**答え: B**

---

### 問43. session
```ruby
session[:user_id] = user.id
```
sessionデータはどこに保存されますか？

A) データベース  
B) メモリ  
C) クッキー（暗号化）またはサーバー側ストレージ  
D) ファイル

**答え: C**

---

### 問44. HTTPメソッド
```ruby
delete '/logout', to: 'sessions#destroy'
```
DELETEメソッドは通常何に使いますか？

A) データの作成  
B) データの更新  
C) データの削除  
D) データの取得

**答え: C**

---

### 問45. path と url ヘルパー
```ruby
users_path    # => "/users"
users_url     # => "http://example.com/users"
```
pathとurlの違いは？

A) 違いはない  
B) pathは相対パス、urlは完全なURL  
C) urlの方が高速  
D) pathは非推奨

**答え: B**

---

### 問46. only オプション
```ruby
resources :posts, only: [:index, :show]
```
作成されるルートは？

A) すべてのRESTfulルート  
B) indexとshowのみ  
C) index, show, new, create  
D) indexのみ

**答え: B**

---

### 問47. format
```ruby
respond_to do |format|
  format.html
  format.json { render json: @user }
end
```
このコードは何をしていますか？

A) HTMLとJSONの両方を常に返す  
B) リクエストの形式に応じて異なるレスポンスを返す  
C) JSONのみを返す  
D) HTMLのみを返す

**答え: B**

---

### 問48. head
```ruby
head :no_content
```
このコードは何を返しますか？

A) HTMLページ  
B) JSONデータ  
C) HTTPステータスコード204（本文なし）  
D) エラーページ

**答え: C**

---

### 問49. CRUD操作
CRUDのRは何を意味しますか？

A) Remove（削除）  
B) Read（読み取り）  
C) Redirect（リダイレクト）  
D) Render（描画）

**答え: B**

---

### 問50. constraints
```ruby
get '/users/:id', to: 'users#show', constraints: { id: /\d+/ }
```
constraintsの役割は？

A) パラメータの型変換  
B) パラメータの検証条件を指定（この場合は数字のみ）  
C) パラメータの暗号化  
D) パラメータの削除

**答え: B**

---

## 中級編：ActiveRecordとデータベース操作（問51-70）

### 問51. マイグレーション
```ruby
class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.timestamps
    end
  end
end
```
`t.timestamps`は何を作成しますか？

A) idカラムのみ  
B) created_atとupdated_atカラム  
C) timestampカラム  
D) deleted_atカラム

**答え: B**

---

### 問52. バリデーション
```ruby
class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
end
```
このバリデーションは何を確認しますか？

A) emailが存在することのみ  
B) emailが一意であることのみ  
C) emailが存在し、かつ一意であること  
D) emailの形式

**答え: C**

---

### 問53. belongs_to
```ruby
class Post < ApplicationRecord
  belongs_to :user
end
```
このコードは何を定義していますか？

A) Postが複数のUserを持つ  
B) PostがUserに属する（1対多の「多」側）  
C) UserがPostに属する  
D) PostとUserが同じ

**答え: B**

---

### 問54. has_many
```ruby
class User < ApplicationRecord
  has_many :posts, dependent: :destroy
end
```
`dependent: :destroy`の効果は？

A) Postが削除されたらUserも削除  
B) Userが削除されたら関連するPostも削除  
C) 削除を禁止  
D) 何もしない

**答え: B**

---

### 問55. scope
```ruby
class Post < ApplicationRecord
  scope :published, -> { where(status: 'published') }
end
```
`Post.published`は何を返しますか？

A) 最初のpublishedなPost  
B) statusが'published'のPost全て  
C) publishedメソッドを実行  
D) true/false

**答え: B**

---

### 問56. find と find_by
```ruby
User.find(1)        # IDが1のユーザー
User.find_by(email: 'test@example.com')
```
findとfind_byの違いは？

A) 違いはない  
B) findはIDで検索し見つからなければ例外、find_byは条件で検索し見つからなければnil  
C) find_byの方が高速  
D) findは非推奨

**答え: B**

---

### 問57. includes
```ruby
posts = Post.includes(:user).limit(10)
```
`includes`の目的は？

A) userカラムを含める  
B) N+1問題を防ぐため関連データを事前読み込み  
C) userを除外  
D) カウントを含める

**答え: B**

---

### 問58. where
```ruby
User.where("age >= ?", 18)
```
`?`の役割は？

A) ランダムな値  
B) SQLインジェクション対策のプレースホルダー  
C) 任意の文字  
D) エラー

**答え: B**

---

### 問59. order
```ruby
User.order(created_at: :desc)
```
`:desc`の意味は？

A) 説明  
B) 降順（新しい順）  
C) 昇順（古い順）  
D) デフォルト

**答え: B**

---

### 問60. callback
```ruby
class User < ApplicationRecord
  before_save :normalize_email
  
  private
  def normalize_email
    self.email = email.downcase
  end
end
```
`before_save`はいつ実行されますか？

A) 保存後  
B) 保存前  
C) 削除前  
D) 読み込み後

**答え: B**

---

### 問61. has_many :through
```ruby
class Doctor < ApplicationRecord
  has_many :appointments
  has_many :patients, through: :appointments
end
```
この関連は何を表していますか？

A) 1対1関連  
B) 1対多関連  
C) 多対多関連  
D) 自己参照

**答え: C**

---

### 問62. pluck
```ruby
User.pluck(:email)
```
pluckメソッドは何を返しますか？

A) Userオブジェクトの配列  
B) emailの値の配列  
C) 最初のemail  
D) emailの数

**答え: B**

---

### 問63. update と update!
```ruby
user.update(name: "新名前")
user.update!(name: "新名前")
```
update!の特徴は？

A) より高速  
B) 保存に失敗したら例外を発生させる  
C) バリデーションをスキップ  
D) 違いはない

**答え: B**

---

### 問64. destroy と delete
```ruby
user.destroy  # callbackを実行
user.delete   # callbackをスキップ
```
主な違いは？

A) 違いはない  
B) destroyはcallbackを実行、deleteは実行しない  
C) deleteの方が安全  
D) destroyは非推奨

**答え: B**

---

### 問65. enum
```ruby
class Post < ApplicationRecord
  enum status: { draft: 0, published: 1, archived: 2 }
end
```
`post.published?`は何を返しますか？

A) 1  
B) "published"  
C) statusがpublishedならtrue、そうでなければfalse  
D) エラー

**答え: C**

---

### 問66. transaction
```ruby
ActiveRecord::Base.transaction do
  user.save!
  post.save!
end
```
transactionの目的は？

A) 高速化  
B) すべて成功するか、すべて失敗するかを保証  
C) 非同期処理  
D) ログ出力

**答え: B**

---

### 問67. joins
```ruby
User.joins(:posts).where(posts: { published: true })
```
このクエリは何を取得しますか？

A) すべてのユーザー  
B) 公開済み投稿を持つユーザー  
C) すべての投稿  
D) 公開済み投稿

**答え: B**

---

### 問68. first_or_create
```ruby
User.find_or_create_by(email: 'test@example.com')
```
このメソッドは何をしますか？

A) 必ず新規作成  
B) 見つかればそれを返し、なければ作成  
C) 必ず検索のみ  
D) エラーを発生

**答え: B**

---

### 問69. counter_cache
```ruby
class Post < ApplicationRecord
  belongs_to :user, counter_cache: true
end
```
counter_cacheの目的は？

A) キャッシュをクリア  
B) 関連レコード数を親レコードに保存して高速化  
C) カウントを無効化  
D) 一時的なカウント

**答え: B**

---

### 問70. touch
```ruby
post.touch
```
touchメソッドは何をしますか？

A) データを削除  
B) updated_atを現在時刻に更新  
C) すべてのカラムを更新  
D) 何もしない

**答え: B**

---

## 中級編：ヘルパーメソッドとビューの仕組み（問71-85）

### 問71. ERBタグ
```erb
<%= @user.name %>
<%- @user.name %>
```
`<%=`と`<%-`の違いは？

A) 違いはない  
B) `<%=`は出力あり、`<%-`は出力なし  
C) `<%-`の方が高速  
D) `<%=`は非推奨

**答え: B**

---

### 問72. link_to
```erb
<%= link_to "ホーム", root_path, class: "btn" %>
```
これはどんなHTMLを生成しますか？

A) `<link href="/" class="btn">ホーム</link>`  
B) `<a href="/" class="btn">ホーム</a>`  
C) `<a href="/root" class="btn">ホーム</a>`  
D) `<button href="/" class="btn">ホーム</button>`

**答え: B**

---

### 問73. form_with
```erb
<%= form_with model: @user do |form| %>
  <%= form.text_field :name %>
<% end %>
```
form_withはデフォルトでどのように送信されますか？

A) 通常のHTTP送信  
B) Ajax（非同期）  
C) WebSocket  
D) 送信されない

**答え: B** (Rails 6.1以降はlocal: trueがデフォルト)

---

### 問74. パーシャル
```erb
<%= render 'shared/header' %>
```
このコードが探すファイルは？

A) app/views/header.html.erb  
B) app/views/shared/_header.html.erb  
C) app/views/shared/header.html.erb  
D) shared/header.rb

**答え: B**

---

### 問75. collection
```erb
<%= render partial: 'post', collection: @posts %>
```
このコードは何をしますか？

A) @postsを1つのパーシャルで表示  
B) @postsの各要素に対してパーシャルを繰り返し表示  
C) 最初のpostのみ表示  
D) エラー

**答え: B**

---

### 問76. content_for
```erb
<% content_for :title do %>
  マイページ
<% end %>
```
content_forの用途は？

A) タイトルを削除  
B) レイアウトファイルに内容を渡す  
C) コンテンツを非表示  
D) キャッシュ

**答え: B**

---

### 問77. image_tag
```erb
<%= image_tag "logo.png", alt: "ロゴ" %>
```
画像ファイルはどこに配置しますか？

A) app/images/  
B) app/assets/images/  
C) public/  
D) images/

**答え: B**

---

### 問78. number_to_currency
```erb
<%= number_to_currency(1234.50) %>
```
デフォルトの出力は？

A) 1234.50  
B) $1,234.50  
C) ¥1,234  
D) 1,234円

**答え: B** (ロケール設定による)

---

### 問79. truncate
```erb
<%= truncate("長いテキスト...", length: 10) %>
```
このヘルパーは何をしますか？

A) テキストを大文字に変換  
B) 指定文字数で切り詰めて「...」を追加  
C) テキストを削除  
D) 改行を追加

**答え: B**

---

### 問80. pluralize
```erb
<%= pluralize(@users.count, "user") %>
```
@users.countが2の場合の出力は？

A) "2 user"  
B) "2 users"  
C) "users 2"  
D) "user user"

**答え: B**

---

### 問81. simple_format
```erb
<%= simple_format(@post.content) %>
```
このヘルパーの機能は？

A) HTMLタグを削除  
B) 改行を`<br>`タグに、段落を`<p>`タグに変換  
C) テキストを単純化  
D) フォーマットを削除

**答え: B**

---

### 問82. time_ago_in_words
```erb
<%= time_ago_in_words(3.hours.ago) %>
```
出力例は？

A) "3時間"  
B) "3 hours ago"  
C) "約3時間"  
D) "3:00"

**答え: C** (日本語ロケールの場合)

---

### 問83. cycle
```erb
<% @items.each do |item| %>
  <tr class="<%= cycle('odd', 'even') %>">
<% end %>
```
cycleヘルパーは何をしますか？

A) 無限ループ  
B) 引数を順番に繰り返し返す  
C) 最初の値のみ返す  
D) ランダムに返す

**答え: B**

---

### 問84. hidden_field_tag
```erb
<%= hidden_field_tag 'user_id', @user.id %>
```
これは何を生成しますか？

A) 表示されるテキストフィールド  
B) 非表示のinputフィールド  
C) セレクトボックス  
D) チェックボックス

**答え: B**

---

### 問85. check_box_tag
```erb
<%= check_box_tag 'accept', '1', false %>
```
第3引数のfalseは何を意味しますか？

A) 無効化  
B) デフォルトでチェックなし  
C) 非表示  
D) 必須項目

**答え: B**

---

## 上級編：メタプログラミングとRails内部機構（問86-95）

### 問86. define_method
```ruby
class User
  ['admin', 'moderator', 'member'].each do |role|
    define_method "#{role}?" do
      self.role == role
    end
  end
end
```
このコードは何を作成しますか？

A) 1つのメソッド  
B) 3つのメソッド（admin?, moderator?, member?）  
C) 配列  
D) エラー

**答え: B**

---

### 問87. method_missing
```ruby
class User
  def method_missing(method_name, *args)
    if method_name.to_s.start_with?('find_by_')
      # 動的検索の実装
    else
      super
    end
  end
end
```
method_missingはいつ呼ばれますか？

A) すべてのメソッド呼び出し時  
B) 存在しないメソッドが呼ばれた時  
C) エラー発生時  
D) 初期化時

**答え: B**

---

### 問88. concern
```ruby
module Trackable
  extend ActiveSupport::Concern
  
  included do
    has_many :activities
  end
end
```
concernの利点は？

A) 高速化  
B) 再利用可能なモジュールを作成してコードを整理  
C) セキュリティ向上  
D) データベース最適化

**答え: B**

---

### 問89. alias_method
```ruby
class User
  alias_method :username, :name
end
```
このコードの効果は？

A) nameメソッドを削除  
B) usernameメソッドをnameメソッドの別名として作成  
C) nameをusernameに変更  
D) エラー

**答え: B**

---

### 問90. class_eval
```ruby
User.class_eval do
  def new_method
    "動的に追加"
  end
end
```
class_evalは何をしますか？

A) クラスを削除  
B) クラスのコンテキストでコードを実行（メソッド追加など）  
C) クラスを評価  
D) クラスをコピー

**答え: B**

---

### 問91. ActiveSupport::Callbacks
```ruby
class Order
  include ActiveSupport::Callbacks
  define_callbacks :process
end
```
これは何を実装していますか？

A) エラーハンドリング  
B) コールバックシステム（before/after/aroundフック）  
C) ログ機能  
D) キャッシュ

**答え: B**

---

### 問92. delegate
```ruby
class Post
  belongs_to :user
  delegate :name, to: :user, prefix: true
end
```
作成されるメソッド名は？

A) name  
B) user_name  
C) post_name  
D) delegate_name

**答え: B**

---

### 問93. mattr_accessor
```ruby
class MyClass
  mattr_accessor :config
end
```
mattr_accessorは何を作成しますか？

A) インスタンス変数アクセサ  
B) クラス変数アクセサ  
C) 定数  
D) モジュール

**答え: B**

---

### 問94. lazy loading
```ruby
class User < ApplicationRecord
  has_many :posts
end

user.posts  # この時点で初めてSQLが実行される
```
この仕組みを何と呼びますか？

A) Eager Loading  
B) Lazy Loading（遅延読み込み）  
C) Preloading  
D) Caching

**答え: B**

---

### 問95. Rails.cache
```ruby
Rails.cache.fetch('key') do
  expensive_operation
end
```
fetchメソッドの動作は？

A) 常にexpensive_operationを実行  
B) キャッシュがあれば返し、なければブロックを実行してキャッシュ  
C) キャッシュをクリア  
D) エラーを発生

**答え: B**

---

## 上級編：パフォーマンスとセキュリティ（問96-100）

### 問96. N+1問題
```ruby
# 悪い例
posts = Post.all
posts.each { |post| puts post.user.name }

# 良い例
posts = Post.includes(:user)
posts.each { |post| puts post.user.name }
```
N+1問題とは？

A) 1回のクエリで済むところをN+1回実行してしまう性能問題  
B) N個のレコードを1個として扱う問題  
C) インデックスの問題  
D) メモリの問題

**答え: A**

---

### 問97. Strong Parameters
```ruby
params.require(:user).permit(:name, :email)
```
Strong Parametersの目的は？

A) パフォーマンス向上  
B) マスアサインメント脆弱性の防止  
C) データ圧縮  
D) バリデーション

**答え: B**

---

### 問98. CSRF対策
```erb
<%= form_with model: @user do |f| %>
  <!-- 自動的にCSRFトークンが含まれる -->
<% end %>
```
CSRFトークンの役割は？

A) ユーザー認証  
B) クロスサイトリクエストフォージェリ攻撃の防止  
C) データ暗号化  
D) セッション管理

**答え: B**

---

### 問99. SQLインジェクション対策
```ruby
# 危険
User.where("name = '#{params[:name]}'")

# 安全
User.where("name = ?", params[:name])
```
プレースホルダー（?）を使う理由は？

A) 高速化  
B) SQLインジェクション攻撃の防止  
C) 可読性向上  
D) デバッグ

**答え: B**

---

### 問100. インデックス
```ruby
class AddIndexToUsersEmail < ActiveRecord::Migration[7.0]
  def change
    add_index :users, :email, unique: true
  end
end
```
インデックスを追加する主な理由は？

A) データ圧縮  
B) 検索性能の向上と一意性の保証  
C) バックアップ  
D) セキュリティ

**答え: B**

---

## おわりに

お疲れさまでした！これで100問完了です。

各問題は実際のRailsアプリケーション開発で頻繁に遭遇するパターンを扱っています。
間違えた問題は、実際にコードを書いて動作を確認することをお勧めします。

### 学習のポイント
- 初級：基本構文をしっかり理解する
- 中級：Railsの仕組みと規約を覚える  
- 上級：内部動作を理解し、パフォーマンスとセキュリティを意識する

継続的な学習と実践を通じて、Railsコードを自然に読めるようになります。
頑張ってください！
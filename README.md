# アプリケーション情報
## アプリケーション概要
スケジュール管理のアプリケーションを作成しました。
- 接続先情報
URL http://13.112.169.155

- Githubリポジトリ
https://github.com/kokagawa/check.git

## 開発状況
- 開発環境
Ruby/Ruby on Rails/MySQL/Github/AWS/Visual Studio Code

- 開発期間と平均作業時間
開発期間：2ヶ月
1日あたりの平均作業時間：2時間

## 動作確認方法
- このアプリのURLにアクセスし、『使い方を見る』ボタンをクリックしてください。
  説明文が書いてあるのでそれに従って、動作確認をしてください。

## 各機能の詳細
 - ユーザーが入力した予定の情報をデータベースに保存し、その情報を編集、削除できる。
 - ユーザーが入力した予定の情報を元に予定の一覧が表示される。　 　
 - 予定の一覧から予定の詳細が確認できる。　
 - ユーザーが入力した予定の情報を元にタイマー機能が動く。
 - 予定までの時間が６〜７割ほど経過した時点で、注意を促す表示が出る。


## 開発を通じて得られた知見
- 工夫した点  
①予定のデータを保存する際にスムーズに使えるように非同期通信で保存し、一覧表示させました。  
②詳細ページにおいて、経過時間を分かりやすく見るためにバーによって、時間の経過の割合を表示しました。  
- 苦労した点  
①時間のデータを使うことが多かったので、時間を分、秒に換算する、経過時間を割り出すなど、様々な計算式を理解するところが苦労しました。

  ②バーで経過時間の割合を表示させる機能を実装したので、時間をどのようにしてバーの進行速度や、長さに  
変換していくかで悩まされました。

  ③詳細ページがjavascriptを使った動的なページなため、データをjavascriptファイルで使うことが多苦ありました。その時のデータのやり取りで、javascriptで使える形にしな    ければならず、viewやcontrollerで使うデータの形とは異なっていたため苦労しました。


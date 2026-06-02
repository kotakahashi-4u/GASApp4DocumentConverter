# GASApp4DocumentConverter

## プロジェクトについて
Google Apps Scriptを用いて、MicrosoftOfficeのWord、Excel、PowerPointをPDF形式に変換する。

## 前提条件
本アプリケーションは、Chrome拡張機能である「Enhancer 4 Google」の付帯アプリケーションとして動作する。

## デプロイ手順
1. Googleドライブ上からGoogle Apps Scriptをスタンドアロン型で作成する。
   <img width="1280" height="720" alt="Image" src="https://github.com/user-attachments/assets/3265c184-4696-4431-acb4-c4534894feae" />  

2. （任意）開いたスクリプトエディタ上の「無題のプロジェクト」欄にクリックし、プロジェクト名を管理しやすいような名称に変更する。    
   <img width="1280" height="720" alt="Image" src="https://github.com/user-attachments/assets/1b0f1cd9-3de8-491d-86a4-7ea67d58e0ef" />  

3. 開いたスクリプトエディタ上のコード.gsに本リポジトリの <a href="https://github.com/kotakahashi-4u/GASApp4DocumentConverter/blob/main/%E3%82%B3%E3%83%BC%E3%83%89.gs" target="_blank">コード.gs</a>(Windows: **Ctrl+Click** / Mac: **Cmd+Click**) の内容をコピーして、貼り付ける。貼り付け後は必ず、エディタ上部の保存ボタンを押下すること。  
   <img width="1280" height="720" alt="Image" src="https://github.com/user-attachments/assets/c8daf34c-baa6-49ab-a2f5-fae2be8408a2" />  

4. 左側のサイドパネルより「サービス」を押下し、表示された一覧の中から「Drive API」を選択し、バージョン `v2` を追加する。
   <img width="1280" height="720" alt="Image" src="https://github.com/user-attachments/assets/8e949714-302e-4318-a301-123bdd200ebf" />

5. コードの保存、サービスの追加が完了したら、右上のデプロイボタンから「新しいデプロイ」を押下する。  
  <img width="1280" height="720" alt="Image" src="https://github.com/user-attachments/assets/8f3a193c-8892-4a53-8e8a-dc3fa9ba30aa" />

6. デプロイ構成ダイアログにて「⚙」マークを押下し、ウェブアプリを選択する。  
  <img width="1280" height="720" alt="Image" src="https://github.com/user-attachments/assets/c1a38aef-8c17-4588-bf9b-b04ddd42fdd7" />

7. 以下のように設定を行ったうえで、「デプロイ」ボタンを押下する。「デプロイ」ボタンを押下後にアクセスの承認を求められるため、「アクセスを承認」を押下する。
   1. 説明（任意）: ご自身がわかりやすい説明文を記載  
   2. 次のユーザーとして実行: 自分  
   3. アクセスできるユーザー: 全員（単独の `全員` 以外では動きません）  
  <img width="1280" height="720" alt="Image" src="https://github.com/user-attachments/assets/feb27e12-cb9e-4b07-b8f5-083cdd159e5c" />

8. 承認ダイアログが表示されるため、ダイアログ一番下の「Continue（または続行）」ボタンを押下する。  
  <img width="1280" height="720" alt="Image" src="https://github.com/user-attachments/assets/17792364-0e4f-41c0-a679-8bd34d70278e" />  

9. デプロイが完了したら、デプロイURLが発行されるため、コピーして「Enhancer 4 Google」のドキュメント変換設定のGASURLに用いる。
  <img width="1280" height="720" alt="Image" src="https://github.com/user-attachments/assets/f9511f24-f59d-4a42-a857-d0aa1e5a8b2c" />  

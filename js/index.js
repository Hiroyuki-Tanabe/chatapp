class Auth {

    static init() {
      // Firebaseの初期化
  
      /**
      [注意]ここの値は、FireBaseのプロジェクトサイトを参照する。
      */
      var config = {
        apiKey: "AIzaSyAYQ96M8rfXybTJ6xRHJ5iERbBLzmKjWJ8",
        authDomain: "dev-chat-31.firebaseapp.com",
        databaseURL: "https://dev-chat-31.firebaseio.com",
        projectId: "dev-chat-31",
        storageBucket: "dev-chat-31.appspot.com",
        messagingSenderId: "245861826242",
        appId: "1:245861826242:web:68516323f9ec3ff6fb055b"
      };
      firebase.initializeApp(config);
  
      // FirebaseUIインスタンス初期化
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
  
      // FirebaseUIの各種設定
      var uiConfig = {
        callbacks: {
          signInSuccess: function (currentUser, credential, redirectUrl) {
            // サインイン成功時のコールバック関数
            // 戻り値で自動的にリダイレクトするかどうかを指定
            return true;
          },
          uiShown: function () {
            // FirebaseUIウィジェット描画完了時のコールバック関数
            // 読込中で表示しているローダー要素を消す
            document.getElementById('loader').style.display = 'none';
          }
        },
        signInSuccessUrl: 'complete15.html',
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        // Terms of service url.(サービス利用規約ページの)
        tosUrl: '',
        //アカウント選択を行う画面の防止
        credentialHelper: firebaseui.auth.CredentialHelper.NONE
      };
  
      // FirebaseUI描画開始
      ui.start('#firebaseui-auth-container', uiConfig);
  
    }
}
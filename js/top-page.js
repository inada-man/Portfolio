$('#wrapper').multiscroll({
    sectionsColor: ['#000', '#000', '#000'],//セクションごとの背景色設定
    anchors: ['area1', 'area2', 'area3'],//セクションとリンクするページ内アンカーになる名前
    menu: '#menu',//上部ナビゲーションのメニュー設定
    navigation: true,//右のナビゲーション出現、非表示は false
    loopTop: true,//最初のセクションを上にスクロールして最後のセクションまでスクロールするかどうかを定義します。
    loopBottom: true,//最後のセクションを下にスクロールして最初のセクションまでスクロールするかどうかを定義します。
  });
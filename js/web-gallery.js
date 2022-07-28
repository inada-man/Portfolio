$('#wrapper').multiscroll({
  sectionsColor: ['#000', '#2f2f2f', '#2F2F2F','#2F2F2F', '#2F2F2F','#2F2F2F'],//セクションごとの背景色設定
  anchors: ['area1', 'area2', 'area3','area4','area5','area6'],//セクションとリンクするページ内アンカーになる名前
  menu: '#menu',//上部ナビゲーションのメニュー設定
  navigation: true,//右のナビゲーション出現、非表示は false
  navigationTooltips:['intro', '01', '02','03','04','05'],//右のナビゲーション現在地時に入るテキスト
  loopTop: true,//最初のセクションを上にスクロールして最後のセクションまでスクロールするかどうかを定義します。
  loopBottom: true,//最後のセクションを下にスクロールして最初のセクションまでスクロールするかどうかを定義します。
});
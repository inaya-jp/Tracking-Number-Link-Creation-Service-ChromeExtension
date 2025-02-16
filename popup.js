// popup.js
document.getElementById('trackButton').addEventListener('click', () => {
  /* 追跡番号を取得 */
  const trackingNumber = document.getElementById('trackingNumber').value.trim();
  if (trackingNumber !== '') {
    // 追跡番号がある場合、URLを作成
    const url = `https://www.trackings.a-z.ne.jp/?trackingNumber=${encodeURIComponent(trackingNumber)}&utm_source=extension&utm_medium=popup`;
    chrome.tabs.create({ url: url });
    document.getElementById('status').textContent = 'リンクを作成しました。';
  } else {
    document.getElementById('status').textContent = '追跡番号を入力してください。';
  }
});

  // エンターキーのキーコード
  const ENTER_KEY_CODE = 13;

  // trackingNumber input要素にフォーカスがあたったときの処理
  document.getElementById('trackingNumber').addEventListener('focus', () => {
    // Enterキーが押されたときの処理
    function handleEnterKey(e) {
      if (e.keyCode === ENTER_KEY_CODE) {
        // エンターキーが押された場合、trackButtonのクリックイベントをトリガーする
        document.getElementById('trackButton').click();
      }
    }

    // Enterキーのキーコードを監視
    document.addEventListener('keypress', handleEnterKey);
  });

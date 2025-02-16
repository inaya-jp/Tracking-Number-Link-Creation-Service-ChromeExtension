// background.js

/* メニューに「追跡番号のリンクを作成」を追加 */
chrome.contextMenus.create({
    id: "createTrackingLink",
    title: "追跡番号のリンクを作成",
    contexts: ["selection"]
  });
  
  /* 「追跡番号のリンクを作成」をクリックした場合の処理 */
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "createTrackingLink") {
      const selectedText = info.selectionText;
      if (selectedText) {
        const url = `https://www.trackings.a-z.ne.jp/?trackingNumber=${encodeURIComponent(selectedText)}&utm_source=extension&utm_medium=menu`;
        chrome.tabs.create({ url: url });
      }
    }
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getSelectedText") {
      //コンテンツスクリプトから送られた選択されたテキストを取得
      const selectedText = message.data;
      sendResponse({ selectedText });
    }
  });
  

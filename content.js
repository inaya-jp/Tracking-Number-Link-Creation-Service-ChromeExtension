// content.js
document.addEventListener("mouseup", () => {
  const selectedText = window.getSelection().toString();
  chrome.runtime.sendMessage({ action: "getSelectedText", data: selectedText });
});

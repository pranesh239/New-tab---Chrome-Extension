const newTabTextarea = document.getElementById("newTabTextarea");

chrome.storage.sync.get("newTabData", data => {
  newTabTextarea.value = data.newTabData;
});

newTabTextarea.addEventListener("keyup", e => {
  chrome.storage.sync.set({ newTabData: e.target.value }, () => {});
});

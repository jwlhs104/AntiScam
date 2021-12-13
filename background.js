// background.js

let officialLinks = ['test'];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ officialLinks });
  console.log(`Default officialLinks set to ${officialLinks}`);
});

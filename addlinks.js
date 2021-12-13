// add current link to storage
let addLink = document.getElementById("addLink");
let linkContainer = document.getElementById("official-links");

chrome.storage.sync.get("url", ({ url }) => {
  linkContainer.innerText = url;
});

addLink.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: addOfficialLinkToStorage,
  });

  chrome.storage.sync.get("url", ({ url }) => {
    linkContainer.innerText = url;
  });
});

// The body of this function will be executed as a content script inside the
// current page
function addOfficialLinkToStorage() {
  let url = window.location.href;
  chrome.storage.sync.set({ url });
}

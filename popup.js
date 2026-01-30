document.getElementById('visionType').addEventListener('change', (e) => {
  const type = e.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {type: "CHANGE_VISION", value: type});
  });
});

document.getElementById('visitWebsite').addEventListener('click', () => {
  window.open('https://open-iris-theta.vercel.app/', '_blank');
});
document.addEventListener('DOMContentLoaded', function() {
  const translateButton = document.getElementById('translateButton');
  const languageSelect = document.getElementById('languageSelect');

  translateButton.addEventListener('click', function() {
    const targetLanguage = languageSelect.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "translate", language: targetLanguage});
    });
  });

  languageSelect.addEventListener('change', function() {
    const targetLanguage = languageSelect.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "updateLanguage", language: targetLanguage});
    });
  });
});
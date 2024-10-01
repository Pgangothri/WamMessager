// Function to translate text (replace with actual translation API)
async function translateText(text, targetLanguage) {
  // For now, we'll just return a dummy translation
  return `Translated to ${targetLanguage}: ${text}`;
}

// Function to translate chat messages
async function translateChat(targetLanguage) {
  const messages = document.querySelectorAll('div.message-in, div.message-out');
  for (let message of messages) {
    const messageText = message.querySelector('span.selectable-text');
    if (messageText) {
      const originalText = messageText.innerText;
      const translatedText = await translateText(originalText, targetLanguage);
      messageText.innerText = translatedText;
    }
  }
}

// Function to handle outgoing message translation
async function handleOutgoingMessage(inputBox, targetLanguage) {
  const originalText = inputBox.innerText;
  const translatedText = await translateText(originalText, targetLanguage);
  inputBox.innerText = translatedText;
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "translate") {
    translateChat(request.language);
  }
});

// Set up MutationObserver to watch for new messages
const chatObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      const addedNodes = mutation.addedNodes;
      addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE && (node.classList.contains('message-in') || node.classList.contains('message-out'))) {
          const messageText = node.querySelector('span.selectable-text');
          if (messageText) {
            translateText(messageText.innerText, currentTargetLanguage)
              .then(translatedText => {
                messageText.innerText = translatedText;
              });
          }
        }
      });
    }
  });
});

// Start observing the chat container
const chatContainer = document.querySelector('div.app-wrapper-web');
if (chatContainer) {
  chatObserver.observe(chatContainer, { childList: true, subtree: true });
}

// Variable to store the current target language
let currentTargetLanguage = 'en';

// Intercept outgoing messages
document.addEventListener('keydown', async function(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    const inputBox = document.querySelector('div[contenteditable="true"]');
    if (inputBox) {
      e.preventDefault(); // Prevent the default send action
      await handleOutgoingMessage(inputBox, currentTargetLanguage);
      // Simulate 'Enter' key press to send the translated message
      inputBox.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));
    }
  }
});

// Function to update the current target language
function updateTargetLanguage(language) {
  currentTargetLanguage = language;
}

// Listen for language change messages from popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "updateLanguage") {
    updateTargetLanguage(request.language);
  }
});
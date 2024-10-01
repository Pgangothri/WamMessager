# WhatsApp Web Translator Chrome Extension

## Overview

WhatsApp Web Translator is a Chrome extension that enhances the functionality of https://web.whatsapp.com by offering real-time translation features. This extension allows users to:

1. Translate existing WhatsApp chats into their preferred language.
2. Type messages in their preferred language and send them translated to their contacts.

## Features

- **Chat Translation**: Translate entire chat histories with a single click.
- **Real-time Message Translation**: Type in your language, and the extension translates before sending.
- **Multiple Language Support**: Includes English, Spanish, French, German, and more.
- **User-friendly Interface**: Simple popup for easy language selection and translation initiation.

## Installation

1. Download the ZIP file of this repository.
2. Unzip the file to a location on your computer.
3. Open Google Chrome and navigate to `chrome://extensions/`.
4. Enable "Developer mode" in the top right corner.
5. Click "Load unpacked" and select the unzipped folder.
6. The extension should now appear in your Chrome toolbar.

## Usage

1. Navigate to https://web.whatsapp.com and log in.
2. Click on the extension icon in the Chrome toolbar.
3. Select your desired language from the dropdown menu.
4. Click "Translate Messages" to translate the current chat.
5. To translate outgoing messages, simply type in your preferred language, and the extension will handle the translation.

## Development

This project is built using the following technologies:

- HTML
- CSS
- JavaScript
- Chrome Extension APIs

### Project Structure

- `manifest.json`: Extension configuration
- `popup.html`: Extension popup interface
- `popup.js`: Popup functionality
- `content.js`: Content script for interacting with WhatsApp Web
- `styles.css`: Styling for the popup
## API Keys
In this project I did'nt put any API keys because it is paid one.Instead of this i used default text
- Choose a translation API:
   Google Cloud Translation API
   Microsoft Translator Text API
   DeepL API
   IBM Watson Language Translator
- Sign up for the chosen API and obtain the necessary credentials.
- Update the translateText function in content.js to make actual API calls. Here's a basic example using fetch (you'll need to replace YOUR_API_KEY and adjust the URL and parameters according to the API you choose):

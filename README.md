# TextAnalyzer - React App

TextAnalyzer is a simple and interactive React application that allows users to analyze text in real time. It provides statistics such as unique word count, character count (excluding spaces and punctuation), and a string replacement feature. The app is designed with a modern UI, including a responsive layout and a gradient background.

## Features

- **Real-time Text Analysis**: As you type, the app dynamically updates the number of unique words and the number of characters (excluding spaces and punctuation).
- **String Replacement**: Replace all occurrences of a specific string with another string using a simple form.
- **Responsive Design**: The app is fully responsive, working well on desktop and mobile screens.
- **Modern UI**: Styled with Flexbox and CSS grid, featuring a clean gradient background.

## Usage
- Text Input: Type or paste text into the large textarea.
- View Statistics: As you type, the unique word count and character count (excluding spaces and punctuation) will automatically update.
- **String Replacement**: 
- Enter the word you want to search for in the "Search String" input.
- Enter the replacement word in the "Replace String" input.
- Click "Replace All" to replace all instances of the search string with the replacement string.

## Project Structure

text-analyzer/
│
├── public/
│   └── index.html          
├── src/
│   ├── components/
│   │   ├── style.css
│   │   └── TextAnalyzer.js  
│   ├── App.js              
│   ├── index.js            
│   └── App.css             
├── README.md               
└── package.json            

## Technologies Used
- React: For building the user interface.
- CSS: For styling and responsive design.
- JavaScript (ES6+): For handling the business logic.

## Getting Started

Follow these steps to get the project running locally on your machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 14.x)
- [npm](https://www.npmjs.com/) (>= 6.x) or [yarn](https://yarnpkg.com/)

## Running the App
To start the development server, run the following command:
``` bash 
npm start




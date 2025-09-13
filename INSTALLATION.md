# Prahari - Installation Guide

This guide will help you set up and run the Prahari project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm or yarn

## Step 1: Install Frontend Dependencies

1. Open a terminal and navigate to the project root directory.
2. Run the following command:

```bash
npm install
```

This will install all the required dependencies for the React frontend.

## Step 2: Install Backend Dependencies

1. Navigate to the server directory:

```bash
cd server
```

2. Install the backend dependencies:

```bash
npm install
```

## Step 3: Set Up Your Google API Key

1. Visit the [Google AI Studio](https://ai.google.dev/) and obtain an API key for the Gemini API.
2. Create a `.env` file in the server directory:

```bash
cd server
```

3. Open the `.env` file and add your API key:

```
GOOGLE_API_KEY=your_gemini_api_key_here
PORT=5000
```

## Step 4: Start the Backend Server

1. While in the server directory, start the backend:

```bash
npm run dev
```

This will start the Node.js server on port 5000.

## Step 5: Start the Frontend Development Server

1. Open a new terminal window and navigate to the project root directory.
2. Start the React development server:

```bash
npm start
```

This will start the frontend on port 3000 and automatically open it in your default browser.

## Step 6: Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

You should now see the Prahari application running!

## Using the Application

1. Choose whether you want to analyze a URL or text content.
2. Paste the URL or text in the input field.
3. Click "Analyze for Truthfulness" to get the trustworthiness report.

## Troubleshooting

- If you encounter CORS issues, ensure both frontend and backend servers are running.
- If the analysis fails, check your Google API key and ensure it has access to the Gemini Pro model.
- For any other issues, check the browser console and server logs for error messages.

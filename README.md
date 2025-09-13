# Prahari (प्रहरी) - Your Digital Information Sentinel

Prahari ("sentinel" or "guard" in Hindi) is an AI-powered web application designed to help users critically evaluate information and combat misinformation. The tool analyzes news articles and social media content to provide users with a comprehensive "Trustworthiness Report" in seconds.

## Project Overview

In an era where unverified news spreads rapidly through social media and messaging apps, Prahari serves as a critical first line of defense. It is not a censorship tool; it is an educational one. By leveraging the advanced analytical power of Google Cloud's Gemini API, Prahari analyzes content and teaches users how to identify manipulative language, verify sources, and think critically about the information they consume.

## Features

- **Simple Input Interface**: Paste a URL or text content to analyze
- **Comprehensive Trustworthiness Report**:
  - **Overall Credibility Score**: A simple, color-coded score
  - **Linguistic Red Flag Analysis**: Highlights emotional language, unsubstantiated claims, logical fallacies, etc.
  - **Source Reputation Check**: Evaluates the credibility of the source
  - **Cross-Verification Links**: Provides links to coverage from reputable sources

## Tech Stack

- **Frontend**: React.js with Tailwind CSS
- **Backend**: Node.js with Express
- **AI Engine**: Google Gemini Pro API
- **Deployment**: Google Cloud Run (serverless)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Google Gemini API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/prahari.git
   cd prahari
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # Install frontend dependencies
   npm install
   
   # Install backend dependencies
   cd server
   npm install
   cd ..
   ```

3. Configure environment variables:
   - Create a `.env` file in the `server` directory
   - Add your Google API key: `GOOGLE_API_KEY=your_api_key_here`

4. Start the development servers:
   ```bash
   # Start backend server
   cd server
   npm run dev
   
   # In a new terminal, start frontend
   cd ..
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Enter a URL of a news article or paste text content
2. Click "Analyze for Truthfulness"
3. Review the comprehensive Trustworthiness Report

## Project Structure

```
prahari/
├── public/              # Static files
├── src/                 # React frontend
│   ├── components/      # UI components
│   ├── services/        # API services
│   ├── App.js           # Main application component
│   └── index.js         # Entry point
├── server/              # Node.js backend
│   ├── services/        # Backend services
│   └── index.js         # Express server
└── README.md            # Project documentation
```

## Hackathon MVP

The Minimum Viable Product for the Google Gen AI Exchange Hackathon includes:

1. Basic web application with URL/text input
2. Linguistic Red Flag Analysis
3. Overall Credibility Score
4. Basic Cross-Verification with trusted sources

## Future Roadmap

- WhatsApp Bot Integration
- Browser Extension
- Multi-language Support
- Image & Video Analysis

## Team

- [Team Member 1]
- [Team Member 2]
- [Team Member 3]

## License

This project is licensed under the MIT License - see the LICENSE file for details.

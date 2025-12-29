# Florystyka w pytaniach
### Floristry in questions

## General Info
This is an educational application featuring test questions for both amateur and professional florists, along with thematic video tutorials.

### The project consists of the following sections:
* **Home page:** Enter your name and select the number of test questions (5, 10 or 15). Additionally, you can enable a random selection of questions.
The last option allows you to access the floristry education section with video tutorials (integrated using the YouTube Data API).
* **Quiz section:** The main section contains multiple-choice questions, each with four possible answers. Some questions include supporting illustrations.
To proceed to the next question, simply click the "Next" button.
* **Test summary:** After completing the test, you will receive your score along with a detailed report indicating the correct answers.

All text on the website is in Polish.

### Additional Features:
* Clicking the header logo allows you to return to the home page at any time.
* The application is **fully responsive** and works seamlessly on desktop computers, tablets, and smartphones.
* All background photos were taken by me.

## Installation and Running the Application
To run this project locally:
* Clone the repository to your computer: `https://github.com/piotr-woz/Florystyka-w-pytaniach.git`
* Navigate to the project directory and install dependencies: `npm install`
* Create a `.env.local` file in the root of the project and add your YouTube API key:
  YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY_HERE
* Start the development server by running `npx vercel dev`, then navigate to `http://localhost:3000/` in your browser to view the application.
* The serverless function will proxy requests to the YouTube API using your API key securely.

Alternatively, you can access the deployed application by clicking this [link](https://florystyka-w-pytaniach.vercel.app/).

## Technologies Used
This project was generated with **Angular - version 17.3.5.** ([Angular CLI link](https://github.com/angular/angular-cli)) and built using:

* Typescript 5.4.2
* HTML5
* CSS3
* Bootstrap 5.3.3

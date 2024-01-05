# Feedback App - Frontend

Feedback App is a web application, primarily designed for tablets and mobile phones, which may be used at various events in order to receive and save feedback from visitors. An event within the application includes a quiz (questionnaire). Each quiz must consist of components where each component contains questions and answers such as labels and input fields. Several answers to the questions will consist of graphic elements such as buttons in the shape of smiley faces so that the visitor may easily give ratings. All data collection will be stored in a database.

The application's goal is to attract visitors to leave feedback directly when attending an event so that the company behind the event can then collect and analyze the feedback for future events.

- **Technology stack:**
  - Frontend: NextJS
  - Backend: ASP.NET
  - Database: MongoDB
- **Status:**
  - Minimum Viable Product (MVP)

## Links

List all links that are relevant to the project:

 **Stage:** [https://link.com](https://link.com/)

 **Production:** [https://link.com](https://link.com/)

 **Documentation:** [Projekt-/uppdragsbeskrivning](https://docs.google.com/document/d/19zAO1PriTVxl6i7iD281WbNL0A0IVfryblzyXN0gTjU/edit?usp=sharing)

## Workflow

The project follow TailwindCSS as particular design.

## Known issues

Describe known issues within the project such as half-done functions like imagevault, the requirement of old versions, or other things that is not working as they should.

 Attachments that describe issues and if any attempts have been made to solve the problems?

## Dependencies

Describe potential cronjobs, and API integrations.

Plugins or versions that the project requires, such as:

**Versions:**

NodeJS
https://nodejs.org

    node v21.1.0

Node Package Manager
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

    npm 10.2.0

NextJS
https://nextjs.org/docs/getting-started/installation

    next 14.0.1

**Plugin:**

DaisyUI

## Installation

 **Local**

1. Clone or download the project to your computer.
2. Open the project in your favourite IDE, for example Visual Studio Code.
3. Make sure you have the required .NET SDK and other required packages installed on your machine.
4. Right click on the source file and click on "Manage User Secret", where you will find the connection string in order to connect to MongoDB Server (either with MongoDB Atlas or MongoDB Shell).

 **Stage**

Run the development server in frontend:

```bash
npm run dev
```

 **Production**

_Put production instructions here_

## Deploy guide

 **Staging**

To deploy to the staging environment add the following git remote to your project

```bash
git remote add develop root@XXX:/deploy/feedback-frontend/develop.git
```

When that is done run the following command to deploy your code:

git push develop main

 **Production**

_Put production instructions here_

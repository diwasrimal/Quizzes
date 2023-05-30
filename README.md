# Quizzes

A simple single page web app that simulates a quiz.

## Dependencies
* [NodeJS](https://nodejs.org/en/download)
* npm

## Setup
```sh
git clone https://github.com/diwasrimal/quizzes.git
cd quizzes
npm install
npm run build
npm run preview
```

## Running development server
* `npm run dev`: Run locally
* `npm run network`: Run on network (shareable across devices)

## Serve through nginx using Docker
```sh
cd flash-quiz
docker build -t flash-quiz-app .
docker run -p 3000:80 flash-quiz-app
```

## How it works
Questions are fetched from the [Open Trivia Database](https://opentdb.com/)

## Todos
- [ ] Fix the card flip issue on Firefox.
- [ ] Make a score system having limited time.

## Contributing
Contributions of any form are welcome!

# Firebase Functions 

## Software Requirements 

- NodeJS Latest 
- firebase-tools ( `npm install -g firebase-tools` )

### Setup

```sh
$ npm install -g firebase-tools
$ firebase login
```

Create Project
```sh
$ mkdir firebase-faas-example && cd firebase-faas-example
$ npm init -y 
$ firebase init functions
```

```sh
$ firebase deploy
```

### Steps Firebase Init 

```sh
? Please select an option: (Use arrow keys)
❯ Use an existing project 
  Create a new project 
  Add Firebase to an existing Google Cloud Platform project 
  Don't set up a default project
```

```sh
? Select a default Firebase project for this directory: 
  react-native-gary (react-native-app) 
  startup-gary (startup) 
❯ test-deploy-54d07 (test-deploy) 
```

```sh
? What language would you like to use to write Cloud Functions? 
  JavaScript 
❯ TypeScript 
```

### References 

- https://firebase.google.com/docs/functions/get-started
- https://github.com/firebase/functions-samples
- https://github.com/Gary-Ascuy/firebase-faas-example

### Random Generator

- https://us-central1-test-deploy-54d07.cloudfunctions.net/RandomGenerator

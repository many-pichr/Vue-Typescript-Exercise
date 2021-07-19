
# Vuejs with Typescript exercise

Develop the web frontend to get Users from Github.


## Features

- Get users from Github with rest api
- Render user list
- View detail when click on any item
- Store in local storage

  
## Setup invironment

Install Nodejs on your pc 

[Download NodeJS](https://nodejs.org/en/)

Install Vue CLI
```bash
yarn global add @vue/cli
# OR
npm install -g @vue/cli
```
## Create Veu3 with Typescript project


Create Vue project with  Vue CLI
```bash
vue create vue-exercise
```

`Choose the option to `Manually select features.

Select the project features as screenshot below **Just my option, you can choose your own option**

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/task-force-45e4e.appspot.com/o/Screen%20Shot%202021-07-19%20at%2010.34.34%20PM.png?alt=media&token=f0b48955-8421-49f4-aece-94286d74c5dd)

   Choose version of Vuejs => **3.x**

- Use class-style component syntax? **No**
- Use Babel alongside TypeScript? **Yes**
- Pick a linter / formatter config: **Prettier**
- Pick additional lint features: **Lint on save**
- Where do you prefer placing config files? **In dedicated config files**
- Save this for future project? **No**

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/task-force-45e4e.appspot.com/o/Screen%20Shot%202021-07-19%20at%2010.43.55%20PM.png?alt=media&token=a0878080-67a9-48d8-be9d-2ff70ae60de6)

Run project
```bash
cd vue-exercise
npm run serve
```
## Install thirth party library

Install Bootstrap
```bash
npm install bootstrap jquery popper.js @popperjs/core
```
Open src/main.ts and import Bootstrap
```javascript
import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
createApp(App)
.mount("#app");
```



Install Axios
```bash
npm install axios
```

## Generate api key or token

- Go to Github website and Sign in with your account
- Click on profile icon, then **Settings/Developer Settings/Personal access tokens/Generate new token**
- Put the name, and select to **Scopes**, then click Generate
- Copy the token for you project

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/task-force-45e4e.appspot.com/o/Screen%20Shot%202021-07-20%20at%2012.04.03%20AM.png?alt=media&token=9aa7eff4-1846-4bb2-a20a-c4cd5b20efa9)


## Project Guideline

Project structure

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/task-force-45e4e.appspot.com/o/Screen%20Shot%202021-07-19%20at%2011.21.49%20PM.png?alt=media&token=8ff35def-efe9-4a2a-b684-95fe02dde2cc)

**App.vue** is the main UI. It include **UserList** from the pages

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/task-force-45e4e.appspot.com/o/Screen%20Shot%202021-07-19%20at%2011.25.31%20PM.png?alt=media&token=49fafbf7-5781-420a-a3df-c217983bc86c)

**pages/UserList.vue** this file use to render view and function to do action with data.

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/task-force-45e4e.appspot.com/o/Screen%20Shot%202021-07-19%20at%2011.26.47%20PM.png?alt=media&token=5019b755-9c72-4fac-a91d-39958b85f08f)

**compoments/Modal.vue** it is the compoment to render Modal to view detail of User

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/task-force-45e4e.appspot.com/o/Screen%20Shot%202021-07-19%20at%2011.39.21%20PM.png?alt=media&token=80d78d32-2dab-4e15-b5bb-9a3ce0a1746d)

**services/apiClient.ts** it is the configuration of http client (axios)

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/task-force-45e4e.appspot.com/o/Screen%20Shot%202021-07-19%20at%2011.39.40%20PM.png?alt=media&token=70ed45e7-2625-4e17-b1fd-2ac6c0c53740)

**services/Apis.ts** it is the functions to get data from api

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/task-force-45e4e.appspot.com/o/Screen%20Shot%202021-07-19%20at%2011.39.46%20PM.png?alt=media&token=c878a6e6-ccb2-4141-a1b5-ae36c673fc66)

**types/Response.ts** it is the model or template of response data

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/task-force-45e4e.appspot.com/o/Screen%20Shot%202021-07-19%20at%2011.40.04%20PM.png?alt=media&token=9df8c8b6-324d-4600-9967-3c7792c2c759)

**types/User.ts** it is the model or template of User

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/task-force-45e4e.appspot.com/o/Screen%20Shot%202021-07-19%20at%2011.40.09%20PM.png?alt=media&token=68e3827c-a371-4211-974a-7ffb5a9adb85)

**utils/config.ts** it is the configuration file to store local config variable 

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/task-force-45e4e.appspot.com/o/Screen%20Shot%202021-07-19%20at%2011.40.19%20PM.png?alt=media&token=74936514-12a1-4970-872c-ba1e8e165078)


## Screenshots

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/task-force-45e4e.appspot.com/o/Screen%20Shot%202021-07-19%20at%2011.48.58%20PM.png?alt=media&token=bf7eb0b8-a530-46f6-ab6f-72ef0b0331dc)




![App Screenshot](https://firebasestorage.googleapis.com/v0/b/task-force-45e4e.appspot.com/o/Screen%20Shot%202021-07-19%20at%2011.49.09%20PM.png?alt=media&token=14135081-705b-47ab-a0d2-9b92c0599bda)

  ## Run the existing project

Clone the project from Github
```bash
git clone https://github.com/many-pichr/Vue-Typescript-Exercise.git
```

Run Vue project
```bash
npm install

npm run serve
```
## Authors

- [@many-pichr](https://github.com/many-pichr)

  

# Vuejs with Typescript exercise

Develop the web frontend to get Users from Github.


## Features

- Get users from Github with rest api
- Render user list
- View detail when click on any item
- Store in indexedDB

  
## Setup invironment

Install Nodejs on your pc (Mac, Window, Linux)

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

Install IndexedDB
```bash
npm install idb
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

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/task-force-45e4e.appspot.com/o/screens%2FScreen%20Shot%202021-07-22%20at%201.07.13%20PM.png?alt=media&token=846ec903-9cf6-4ae3-a231-96abf2f01341)

## Configure **HTTP Request**
Create **Axios** configuration `/service/apiClient.ts`
```javascript
import axios, { AxiosInstance } from "axios";
import config from "../utils/config";
const apiClient: AxiosInstance = axios.create({
  baseURL: config.url,
  headers: {
    "Content-type": "application/json",
    "Authorization":"token "+config.token
  },
});

export default apiClient;
```

Create **Api** configuration `/service/Apis.ts`
```javascript
import http from "./apiClient";
class Apis {
  getAll(): Promise<any> {
    return http.get("/users?per_page=20");
  }
  get(uri: string): Promise<any> {
    return http.get(uri);
  }
}
export default new Apis();
```

## Configure **Views**
Create **UserList** for parent Component `/pages/UserList.vue`
```javascript
<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import TableView from "@/components/TableView.vue";
import { useStore } from "@/store";
import { ActionTypes } from "@/store/actions";
export default defineComponent({
  components: { TableView },
  setup() {
    const store = useStore();
    const loading = computed(() => store.state.loading);
    onMounted(() => store.dispatch(ActionTypes.GetUsers));
    return { loading };
  },
});
</script>
<template>
  <h3>Users List</h3>
  <div class="container mx-auto mt-4">
    <div v-if="loading" class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-if="!loading">
    <TableView />
    </div>
  </div>
</template>
```
This stage it will do action get data from github, and store in globle state

**TableView.vue** and **Modal.vue** is the child compoments imported from **UserList**

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/task-force-45e4e.appspot.com/o/screens%2FScreen%20Shot%202021-07-22%20at%201.37.40%20PM.png?alt=media&token=87c47b51-8011-4115-b392-dda3574892a7)


## Configure IndexedDB

Create **Mothods** to do operation with DB `/service/indexedDB.ts`
```javascript
import { openDB } from 'idb';
const dbPromise = openDB('user-store', 1, {
  upgrade(db) {
    db.createObjectStore('users');
  },
});
class indexedDB {
    async get(key: string): Promise<any> {
        return (await dbPromise).get('users', key);
    }
    async set(key: string,val: any): Promise<any> {
        return (await dbPromise).put('users', val, key);
    }
    async delete(key: string): Promise<any> {
        return (await dbPromise).get('users', key);
    }
    async clear(key: string): Promise<any> {
        return (await dbPromise).get('users', key);
    }
  }
  export default new indexedDB();
```

## Configure State management with Vuex

- **/store/index.ts** initialize Vuex and we tell Vue to use
- **/store/state.ts** this file contained object, properties or model of data
- **/store/actions.ts** create the methods that is invoked when the input content changes
- **/store/mulations.ts** it is event handler to change state with type


![App Screenshot](https://firebasestorage.googleapis.com/v0/b/task-force-45e4e.appspot.com/o/screens%2FScreen%20Shot%202021-07-22%20at%201.45.52%20PM.png?alt=media&token=e11fdae4-4959-4213-9a17-57bd12ee82e8)
## Screenshots

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/task-force-45e4e.appspot.com/o/Screen%20Shot%202021-07-19%20at%2011.48.58%20PM.png?alt=media&token=bf7eb0b8-a530-46f6-ab6f-72ef0b0331dc)




![App Screenshot](https://firebasestorage.googleapis.com/v0/b/task-force-45e4e.appspot.com/o/screens%2FScreen%20Shot%202021-07-23%20at%2011.26.50%20AM.png?alt=media&token=b34d0bbc-34ae-4cb5-bc7c-a5e9d0cd0e1c)

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

## Conclusion
### Why used Typescript, Bootstrap, Vuex, indexedDB ?
- **TypeScript** One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code.
- **Bootstrap** is the most popular UI framework supportted with many programming language. It simply to use and configure. For new **Vuejs** developer that have background with **HTML CSS** can start Bootstrap with **Vuejs**.
- **Vuex** it is the state management of Vuejs, used to store and share centralize data or value.
- **indexedDB** is the way to store data inside a user's browser.

## Authors

- [@many-pichr](https://github.com/many-pichr)

  

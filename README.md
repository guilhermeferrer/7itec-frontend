# Desafio 7iTec Frontend

The web app was developed using redux to manage state, redux requests to isolate api calls in a redux layer, axios for handling HTTP requests, styled-components for writing styles with css and make code  more readably, router dom for managing navigation, toastify for displaying all errors and feedback messages and more.

Checkout using the following command to start playing with the website:

```bash
https://github.com/guilhermeferrer/7itec-frontend
```

Don't forget to install dependencies:
```bash
cd 7itec-mobile && yarn
```
or
```bash
cd 7itec-frontend && npm install
```

To start the app use:
```bash
yarn start
```
or
```bash
npm run start
```

# Important
In order to successfully execute the server, you will need to rename `.env.example` to `.env` at root directory and edit it as showed bellow:

| KEY | VALUE |
| ------ | ------ |
| REACT_APP_API_URL | Port location where the server is running |

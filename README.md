# Boilerplate for react project
Basic setup for react based project. After spending sometime looking on web for various setups i decided that some of them are either too heavy or are lacking some functionality. So i decided to make my own with all the features i knew were possible to have with it.
* It bundled with webpack
* Has hotloading feature enabled for development environment, so you dont need to refresh the page after you do change in code, and page is not reloaded.
* It is isomorphic, will work with no javascript enabled.
* Uses Redux for state management
* Uses Jest for testing
* Uses React Route v4
* Dokerized
* Has basic auth setup

## How to run

To run it in dev mode
* for server and client in watch dev mode
```
  docker-compose up
```
Then open in the browser:
```
  http://localhost:8080/
```


## Tasks descripton
* Watch dev mode for server
```
  npm run server-watch
```
* Hotload dev mode for frontend
```
  npm run client-watch
```
it will run it in hot load mode

To build and run server and client for production just run
```
npm run all-run
```

To build server and client for production run
```
npm run all-build
```

To build server for production run
```
npm run server-build
```

To build client for production run
```
npm run client-build
```

To build image:
```
docker build -t appname .
```
To run image:
```
docker run -p 8081:8081 appname
```

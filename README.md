# TttClientTest

## BackEnd server (Node JS)

code available at `/server` folder
Run `npm start` for running node server. Navigate to `http://localhost:3000/`.

It is currently hosted on Heroku. [`https://pure-sierra-13501.herokuapp.com`](https://pure-sierra-13501.herokuapp.com)

## FrontEnd server (Angular 7)

code available at `/client/tttClientTest` folder
Run `ng serve` for running the angular server locally. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

It is currently hosted on firebase. [`https://tttclient-97cf4.firebaseapp.com/`](https://tttclient-97cf4.firebaseapp.com/)

## Components

* Server
    * An API, `/api` is created with help of express library. This api is responsible to get the frequency details(N) and do all the necessary operations to find the top N most words present in the string generated by accessing [`given URL`](http://terriblytinytales.com/test.txt)
    * splitByWords() splits the string(obtained after making remote call to [`given URL`](http://terriblytinytales.com/test.txt)) and returns an array of words .
    * createWordMap(N, wordsArray) takes in the frequency number and the array of words, gets the count of each word.
    * After grouping the words with same frequency we use getUnique(arr, comp) to remove duplicate entries if any.
    * Later splice the array to send only the top N most words in the text file/string.

* Client
    * The main app Component loads the selector <app-root> 
    * `app.component.ts` is responsible for all the logical code.
    * This file has a function apiCall() which inturn has the logic to subscribe HttpClient to access the API `/api` and send the frequency details (N) to server.
    * the HTTPClient is injected upon importing from angular/common/http
    * `app-routing.module.ts` contains the route details of each component, it provides a uri to access the component/page.


## Libraries and Plugins

* Angular 7
    * HttpClient
* Node JS
    * Express
    * body-parser
    * cors
    * request

## Tests
* With Input of 2
 ![With Input of 2](https://raw.githubusercontent.com/GeetaKrishna/tttTest/master/Screenshot%20(83).png)

* With Input of 100 or any number above the total existing words
![With Input of 100](https://raw.githubusercontent.com/GeetaKrishna/tttTest/master/Screenshot%20(84).png)
![With Input of 100](https://raw.githubusercontent.com/GeetaKrishna/tttTest/master/Screenshot%20(85).png)

* For inputs of negative integers or Zero (0)
![Unrelatable Inputs](https://raw.githubusercontent.com/GeetaKrishna/tttTest/master/Screenshot%20(87).png)
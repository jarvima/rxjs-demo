# rxjs-demo

## setup

In a working directory run the following:
```code
  npm install @reactivex/rxjs
  npm install requirejs
```

This will create `node_modules/@reactivex/rxjs` and a `node_modules/requirejs` directory.  RxJS is written in a modular format so we'll use RequireJS to load and use RxJS.

Create a simple html page `rxjs-demo.html` that will run RxJS:
```html
<html>
<head>
  <title>RxJS Demo</title>
  <script data-main="main" src="node_modules/requirejs/require.js"></script>
  
  <style>
    .main {
      margin: 20px;
      color: #667788;
      font-family:  Verdana, sans-serif;
    }
  </style>
</head>
<body>
  <div class="main">
    RxJS Demo
  </div>
</body>
</html>
```

The point of interest here is that we load `require.js` and we tell it to use `main.js` via `data-main="main"` as a starting point.

Now create `main.js` and throw in a little RxJS:
```javascript
  requirejs(['node_modules/@reactivex/rxjs/dist/amd/Rx'], function(Rx) {
    var Observable = Rx.Observable;
    var body = document.querySelector('body');

    Observable.fromEvent(body, 'click')
    .subscribe(function () { console.log('The page was clicked!') });
  });
```

This uses the `Rx.Observable` object to create an Observable that will emit click events whenever the page is clicked.  Then we subscribe to those events.  When you open `rxhs-demo.html` in a browser you should see 'The page was clicked!' in the console whenever you click the page.

Congratulations, you've just run RxJS!

## anatomy of an observer

- next
- error
- complete

Let's create an observable that emits random numbers at random times.

We'll need a random function. Thank you [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random).
```javascript
  function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
```

A `numberMaker` observable could look like this:
```javascript
```

Now let's create some filters for the random number stream:
```javascript

```

Now we subscribe to the page click observable to start and stop the new subscribers:
```javascript

```

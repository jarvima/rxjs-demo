requirejs(['node_modules/@reactivex/rxjs/dist/amd/Rx'], function(Rx) {
  var Observable = Rx.Observable;
  var body = document.querySelector('body');

  var click = Observable.fromEvent(body, 'click');
  click.subscribe(function () { console.log('The page was clicked!') });
  
  function makeRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  var numberMaker = Rx.Observable.create(function subscribe(observer) {
    var count = 0;
    
    function nextRandom() {
      timeoutId = setTimeout(() => {
        observer.next(makeRandom(1, 100));
        if (count < 10) {
          count++;
          nextRandom();
        }
        else {
          console.log('observer complete!');
          observer.complete();
        }
      }, makeRandom(1, 1000));
    }
    
    nextRandom();
    
    return function unsubscribe() {
    };
  });
  
  var nmSubscription;
  click.subscribe(function() {
    console.log('subscribe args:', arguments);
    
    if (nmSubscription) {
      nmSubscription.unsubscribe();
      nmSubscription = null;
    }
    else {
      nmSubscription = numberMaker.subscribe(function(value) {
        console.log('number maker value:', value);
      });
    }
  });
  
  var moreMaker = numberMaker.map(number => number * 1000);
  
  moreMaker.subscribe(function(value) {
    console.log('1 ## more maker value:', value);
  });

  moreMaker.subscribe(function(value) {
    console.log('2 ## more maker value:', value);
  });

});

/*
    var timeoutId;
    
    function nextRandom() {
      timeoutId = setTimeout(() => {
        observer.next(makeRandom(1, 10));
        nextRandom();
      }, makeRandom(1, 1000));
    }
    
    nextRandom();

    return function unsubscribe() {
      clearTimeout(timeoutId);
    };

        console.log('%cnumber maker subscribe:', 'color: blue', value);
        console.log('%cnumber maker subscribe:', 'color: green', value);
        console.log('%cnumber maker subscribe:', 'color: purple', value);
        console.log('%cnumber maker subscribe:', 'color: teal', value);
        console.log('%cnumber maker subscribe:', 'color: maroon', value);
        console.log('%cnumber maker subscribe:', 'color: navy', value);
        console.log('%cnumber maker subscribe:', 'color: olive', value);
*/

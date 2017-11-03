
requirejs(['rx-slim'], function (rx) {

  var randomObservable = rx.Observable.create(function(observer) {
    var timeoutId;
    var count = 0;
    
    function makeRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function nextRandom() {
      if (count > 9) {
        observer.complete();
        return;
      }
      count++;
      
      timeoutId = setTimeout(() => {
        observer.next(makeRandom(1, 1000));
        nextRandom();
      }, makeRandom(1, 1000));
    }
    
    nextRandom();

    return function unsubscribe() {
      clearTimeout(timeoutId);
    };
  });
  
  /* */
  randomObservable = randomObservable.merge(randomObservable, randomObservable, randomObservable, randomObservable, randomObservable, randomObservable, randomObservable, randomObservable);

  randomObservable = randomObservable.take(10).groupBy(function(value) { return value % 2;});
  /* */

  var num = 0;
  
  randomObservable.subscribe(function (obs) {
    console.log('obs: ', obs);
    obs.subscribe(function(value) {
      console.log('Got a random number:', value); 
    });
  });
});

/*
  randomObservable = randomObservable.merge(randomObservable);
  
  randomObservable = randomObservable.take(10);


  //randomObservable = randomObservable.take(10).groupBy(function(value) { return value % 2;});


*/

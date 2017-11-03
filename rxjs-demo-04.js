
requirejs(['rx-slim'], function (rx) {
  var Observable = rx.Observable;
  var body = document.querySelector('body');

  console.log('RxJS loaded.');
  
  var observable = rx.Observable.create(function(observer) {
    for (var j = 0; j < 5; j++) {
      console.log('observable calling next', j);
      observer.next(j);
    }
    observer.complete();
  });
  
  //observable = rx.Observable.range(1, 5);
  
  var observer = {
    next: function(value) {
      console.log('observer: next fired:', value);
    },
    error: function(err) {
      console.log(err);
  },
    complete: function() { console.log ('observer: complete')
    }
  }
    
  observable
  .map(function(value) {
    console.log('map 1 called');
    if (value == 2) {
      //nada;
    }
    return value + 100;
  })
  .map(function(value) {
    console.log('map  2 called');
    return value;
  })
    .subscribe(observer)
});

/*
*/


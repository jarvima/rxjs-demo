
requirejs(['rx-slim'], function (rx) {

  var observable = rx.Observable.range(1, 5);
  
  var observer = {
    next: function(value) { console.log('Next called on observer - value:', value) },
    error: function(err) { console.error('Error called on observer:', err) },
    complete: function() { console.log('Complete called on observer') } 
  };
  
  observable = observable.filter(function(value) { return value % 2 == 0; });

  observable.subscribe(observer);
});

/*

  observable = observable.filter(function(value) { return value % 2 == 0; });

  observable = observable.map(function(value) { return value * 1000; });
  
*/

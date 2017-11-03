var data = [
  { name: 'Abe', color: 'blue' },
  { name: 'Bev', color: 'green' },
  { name: 'Cole', color: 'purple' },
  { name: 'Dot', color: 'teal' },
  { name: 'Ed', color: 'maroon' },
  { name: 'Flo', color: 'navy' },
];


requirejs(['rx-slim'], function (rx) {
  console.log('RxJS loaded.');

  var dataObservable = rx.Observable.from(data);
  
  dataObservable = dataObservable.map(function(datum) {
    return {
      text: '%c User: ' + datum.name, 
      style: 'color:' + datum.color
    }
  });

  var dataObserver = function(datum) {
    console.log(datum.text, datum.style);
    //console.log('got a datum:', datum);
  }
  
  rx.Observable.fromEvent(document.querySelector('body'), 'click')
  .subscribe(function () {
    dataObservable.subscribe(dataObserver);
  });
  
});

/*
  dataObservable = dataObservable.map(function(datum) {
    return {
      text: '%c User: ' + datum.name, 
      style: 'color:' + datum.color
    }
  });

    console.log(datum.text, datum.style);
*/


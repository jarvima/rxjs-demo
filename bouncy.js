  requirejs(['node_modules/@reactivex/rxjs/dist/amd/Rx'], function(Rx) {
    var Observable = Rx.Observable;
    var body = document.querySelector('body');

    console.log('Bouncy loaded.');
    
    Observable.fromEvent(body, 'click')
    .do(function(value) { console.log('The page was clicked!', value) })
    .subscribe(function () { console.log('The page was clicked!') });
  });
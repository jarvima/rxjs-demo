requirejs.config({
    baseUrl: './',
    paths: {
        amd: './node_modules/@reactivex/rxjs/dist/amd'
    }
});

define(['exports', 'amd/Subject', 'amd/Observable',
        'amd/add/observable/from', 'amd/add/observable/fromEvent', 'amd/add/observable/range', 'amd/add/observable/merge', 
        'amd/add/operator/do', 'amd/add/operator/map', 'amd/add/operator/merge', 'amd/add/operator/filter', 'amd/add/operator/takeUntil', 'amd/add/operator/take', 'amd/add/operator/groupBy', ],
  function (exports, Subject_1, Observable_1) {
    exports.Subject = Subject_1.Subject;
    exports.Observable = Observable_1.Observable; 
});
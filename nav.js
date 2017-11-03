    document.addEventListener('keydown', function(event) {
      var num = window.location.pathname.match(/(\d+)/)[0];
      if (event.key == 'ArrowRight') {
        num++;
        if (num > 4) num = 1;
        window.location = 'rxjs-demo-0' + num + '.html';
      }
      if (event.key == 'ArrowLeft') {
        num--;
        if (num < 1) num = 4;
        window.location = 'rxjs-demo-0' + num + '.html';
      }
    });

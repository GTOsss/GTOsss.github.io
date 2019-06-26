function ready() {
  var url1 = '/play1';
  var url2 = '/play2';

  var foregroundNode = document.getElementById('foreground');
  var link1 = document.getElementById('link1');
  var link2 = document.getElementById('link2');

  var neeoCame = false;
  var neeoStartDisappear = false;

  var neeoComeNode = document.getElementById('neeoCome');
  var neeoStillNode = document.getElementById('neeoStill');
  var neeoDisappear1Node = document.getElementById('neeoDisappear1');
  var neeoDisappear2Node = document.getElementById('neeoDisappear2');
  var neeoDisappearStartNode = document.getElementById('neeoDisappearStart');
  // var backgroundNode = document.getElementById('background');

  link1.addEventListener('click', onClick1);
  link2.addEventListener('click', onClick2);

  // var background = bodymovin.loadAnimation({
  //   wrapper: backgroundNode,
  //   renderer: 'canvas',
  //   loop: true,
  //   autoplay: true,
  //   path: 'assets/background/data.json',
  // });

  var foreground = bodymovin.loadAnimation({
    wrapper: foregroundNode,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/foreground/data.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  });

  var neeoCome = bodymovin.loadAnimation({
    wrapper: neeoComeNode,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/neeo-come/data.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  });

  var neeoStill = bodymovin.loadAnimation({
    wrapper: neeoStillNode,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'assets/neeo-still/data.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  });

  var neeoDisappearStart = bodymovin.loadAnimation({
    wrapper: neeoDisappearStartNode,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/neeo-disappear-start/data.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  });

  var neeoDisappear1 = bodymovin.loadAnimation({
    wrapper: neeoDisappear1Node,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/neeo-disappear1/data.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  });

  var neeoDisappear2 = bodymovin.loadAnimation({
    wrapper: neeoDisappear2Node,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/neeo-disappear2/data.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  });

  neeoCome.addEventListener('complete', completeCome);

  function onClick1(e) {
    e.preventDefault();

    if (neeoCame && !neeoStartDisappear) {
      neeoStartDisappear = true;
      neeoStillNode.classList.toggle('hidden');
      neeoDisappearStartNode.classList.toggle('hidden');

      neeoDisappearStart.addEventListener('complete', function() {
        neeoDisappearStartNode.classList.toggle('hidden');
        neeoDisappear1Node.classList.toggle('hidden');
        neeoDisappearStart.destroy();
        neeoDisappear1.addEventListener('complete', function () {
          redirect(url1);
        });
        neeoDisappear1.play();
      });

      neeoDisappearStart.play();
    }
  }

  function onClick2(e) {
    e.preventDefault();
    if (neeoCame && !neeoStartDisappear) {
      neeoStartDisappear = true;
      neeoStillNode.classList.toggle('hidden');
      neeoDisappearStartNode.classList.toggle('hidden');

      neeoDisappearStart.addEventListener('complete', function() {
        neeoDisappearStartNode.classList.toggle('hidden');
        neeoDisappear2Node.classList.toggle('hidden');
        neeoDisappearStart.destroy();
        // neeoDisappear2.addEventListener('complete', function () {
        //   redirect(url2);
        // });
        setTimeout(function() {
          redirect(url2);
        }, 4200);
        neeoDisappear2.play();
      });

      neeoDisappearStart.play();
    }
  }

  function completeCome() {
    neeoComeNode.classList.toggle('hidden');
    neeoStillNode.classList.toggle('hidden');
    neeoCome.destroy();
    neeoStill.play();
    neeoCame = true;
  }

  function redirect(url) {
    console.log(url);
    window.location = url;
  }

  setTimeout(() => {
    neeoCome.play();
  }, 0)
}

document.addEventListener('DOMContentLoaded', ready, false);
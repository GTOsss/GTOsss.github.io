function ready() {
  var foregroundNode = document.getElementById('foreground');
  var link1 = document.getElementById('link1');
  var link2 = document.getElementById('link2');

  var neeoComeNode = document.getElementById('neeoCome');
  var neeoStillNode = document.getElementById('neeoStill');
  var neeoDisappearNode = document.getElementById('neeoDisappear');

  link1.addEventListener('click', onClick1);
  link2.addEventListener('click', onClick2);

  var foreground = bodymovin.loadAnimation({
    wrapper: foregroundNode,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'src/assets/foreground/data.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  });

  var neeoCome = bodymovin.loadAnimation({
    wrapper: neeoComeNode,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'src/assets/neeo-come/data.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  });

  var neeoStill = bodymovin.loadAnimation({
    wrapper: neeoStillNode,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'src/assets/neeo-still/data.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  });

  var neeoDisappear = bodymovin.loadAnimation({
    wrapper: neeoDisappearNode,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'src/assets/neeo-disappear/data.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  });

  neeoCome.addEventListener('complete', completeCome);

  function onClick1(e) {
    e.preventDefault();
    console.log('1');
    neeoDisappearNode.classList.toggle('main-block__neeo_anim_Disappear1');
    neeoStillNode.classList.toggle('hidden');
    neeoDisappearNode.classList.toggle('hidden');
    neeoStill.destroy();
    neeoCome.destroy();
    neeoDisappear.play();
  }

  function onClick2(e) {
    e.preventDefault();

    neeoStillNode.classList.toggle('hidden');
    neeoDisappearNode.classList.toggle('hidden');
    neeoStill.destroy();
    neeoCome.destroy();
    neeoDisappear.play();
  }

  function completeCome() {
    neeoComeNode.classList.toggle('hidden');
    neeoStillNode.classList.toggle('hidden');
    neeoCome.destroy();
    neeoStill.play();
  }

  setTimeout(() => {
    neeoCome.play();
  }, 5000)
}

document.addEventListener('DOMContentLoaded', ready, false);
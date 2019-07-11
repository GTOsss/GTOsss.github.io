(function () {
  function readyDOM() {
    function debugMode() {
      var cursor = 0;

      function updateAnimation(value) {
        cursor += value;
        console.log(value, cursor);
        debugNode.innerText = 'Animation segment: ' + cursor;
        neeo.playSegments([cursor - 1, cursor], true);
      }

      document.addEventListener('keydown', function (e) {
        if (e.code === 'ArrowLeft') {
          updateAnimation(-1);
        } else if (e.code === 'ArrowRight') {
          updateAnimation(1);
        }
      });
    }

    debugMode();

    var segmetsMap = {
      come: [0, 150],
      still: [150, 222],
      portal1: [422, 580],
      portal2: [222, 330],
    };

    var maxLoadProgress = 13;

    var url1 = '/play1';
    var url2 = '/play2';

    var neeoCame = false;
    var neeoStartDisappear = false;

    var neeo;

    var foregroundNode = document.getElementById('foreground');
    var neeoNode = document.getElementById('neeo');
    var mainBlockNode = document.getElementById('mainBlock');
    var loadingBlockNode = document.getElementById('loadingBlock');
    var loadingProgressTextNode = document.getElementById('loadingProgressText');
    var debugNode = document.getElementById('debug');
    var backgroundNode = document.getElementById('background');

    function setLoading(value) {
      if (value) {
        // mainBlockNode.classList.add('hidden');
      } else {
        loadingBlockNode.classList.add('loading-block_hidden');
        setTimeout(function () {
          loadingBlockNode.remove();
        }, 1000);

        setTimeout(function () {
          neeo.addEventListener('complete', completeCome);
          neeo.playSegments(segmetsMap.come, true);
        }, 2500);
      }
    }

    function completeCome() {
      neeo.loop = true;
      neeo.removeEventListener('complete', completeCome);
      neeo.playSegments(segmetsMap.still, true);
      neeoCame = true;
    }

    setLoading(true);

    var loadProgress = {
      max: maxLoadProgress,
      loaded: false,
      _value: 0,

      get percent() {
        var currentPercent = this._value / this.max * 100;
        currentPercent = Math.ceil(currentPercent);
        return currentPercent > 100 ? 100 : currentPercent;
      },

      set value(value) {
        this._value = value;

        loadingProgressTextNode.innerHTML = this.percent + '%';
        debugNode.innerHTML = this.percent + '%' + '  ' + this._value;

        if ((this.percent === 100) && (this.loaded === false)) {
          this.loaded = true;
          setLoading(false);
        }
      },

      get value() {
        return this._value;
      },
    };

    function incrementProgress() {
      loadProgress.value += 1;
    }

    function readyLottieJS() {
      document.getElementById('link1').addEventListener('click', onClick1);
      document.getElementById('link2').addEventListener('click', onClick2);

      var background = bodymovin.loadAnimation({
        wrapper: backgroundNode,
        renderer: 'canvas',
        loop: true,
        autoplay: true,
        path: '../src/assets/background/data.json',
      });
      background.addEventListener('config_ready', incrementProgress);
      background.addEventListener('data_ready', incrementProgress);
      background.addEventListener('DOMLoaded', incrementProgress);
      background.addEventListener('segmentStart', incrementProgress);
      background.addEventListener('loaded_images', incrementProgress);

      var foreground = bodymovin.loadAnimation({
        wrapper: foregroundNode,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../src/assets/foreground/data.json',
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      });
      foreground.addEventListener('config_ready', incrementProgress);
      foreground.addEventListener('data_ready', incrementProgress);
      foreground.addEventListener('DOMLoaded', incrementProgress);
      background.addEventListener('segmentStart', incrementProgress);
      foreground.addEventListener('loaded_images', incrementProgress);

      neeo = bodymovin.loadAnimation({
        wrapper: neeoNode,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '../src/assets/neeo/data.json',
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      });
      neeo.addEventListener('config_ready', incrementProgress);
      neeo.addEventListener('data_ready', incrementProgress);
      neeo.addEventListener('DOMLoaded', incrementProgress);
      neeo.addEventListener('loaded_images', incrementProgress);

      function onClick1(e) {
        e.preventDefault();

        if (neeoCame && !neeoStartDisappear) {
          neeoStartDisappear = true;
          neeo.loop = false;
          neeo.addEventListener('complete', function () {
            mainBlockNode.classList.add('main-block_animation_portal1');
            mainBlockNode.parentElement.classList.add('main-wrap_animation-zoom-portal');
            setTimeout(function () {
              redirect(url1);
            }, 300)
          });

          neeo.playSegments(segmetsMap.portal1, true);
        }
      }

      function onClick2(e) {
        e.preventDefault();

        if (neeoCame && !neeoStartDisappear) {
          neeoStartDisappear = true;
          neeo.loop = false;
          neeo.addEventListener('complete', function () {
            mainBlockNode.classList.add('main-block_animation_portal2');
            mainBlockNode.parentElement.classList.add('main-wrap_animation-zoom-portal');
            setTimeout(function () {
              redirect(url2);
            }, 300)
          });

          neeo.playSegments(segmetsMap.portal2, true);
        }
      }

      function redirect(url) {
        window.location = url;
      }
    }

    document.getElementById('scriptLottie').addEventListener('load', function () {
      incrementProgress();
      readyLottieJS();
    });
  }

  document.addEventListener('DOMContentLoaded', readyDOM, false);
})();
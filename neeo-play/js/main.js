(function () {
    function readyDOM() {
      try {
        var neeoCome;
        var videoBackground;

        var url1 = '/play1';
        var url2 = '/play2';

        var loadingProgressTextNode = document.getElementById('loadingProgressText');

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

        var mainBlockNode = document.getElementById('mainBlock');
        var loadingBlockNode = document.getElementById('loadingBlock');

        function setLoading(value) {
          if (value) {
            // mainBlockNode.classList.add('hidden');
          } else {
            loadingBlockNode.classList.add('loading-block_hidden');
            setTimeout(function () {
              loadingBlockNode.remove();
            }, 1000);

            // videoBackground.play();
            setTimeout(function () {
              neeoCome.play();
            }, 2500);
          }
        }

        setLoading(true);

        var maxLoadProgress = 26;

        var loadVideoPercent = 0;

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

            if ((this.percent === 100) && (this.loaded === false)) {
              this.loaded = true;
              setLoading(false);
            }
          },

          get value() {
            return this._value;
          },
        };

        function readyLottieJS() {
          link1.addEventListener('click', onClick1);
          link2.addEventListener('click', onClick2);

          // var background = bodymovin.loadAnimation({
          //   wrapper: backgroundNode,
          //   renderer: 'canvas',
          //   loop: true,
          //   autoplay: true,
          //   path: 'assets/background/data.json',
          // });

          function readyAnimation() {
            loadProgress.value += 1;
          }

          var foreground = bodymovin.loadAnimation({
            wrapper: foregroundNode,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/foreground/data.json',
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          });

          foreground.addEventListener('config_ready', readyAnimation);
          foreground.addEventListener('data_ready', readyAnimation);
          foreground.addEventListener('DOMLoaded', readyAnimation);
          foreground.addEventListener('segmentStart', readyAnimation);
          foreground.addEventListener('loaded_images', readyAnimation);

          neeoCome = bodymovin.loadAnimation({
            wrapper: neeoComeNode,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: 'assets/neeo-come/data.json',
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            }
          });

          neeoCome.addEventListener('config_ready', readyAnimation);
          neeoCome.addEventListener('data_ready', readyAnimation);
          neeoCome.addEventListener('DOMLoaded', readyAnimation);
          neeoCome.addEventListener('loaded_images', readyAnimation);

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

          neeoStill.addEventListener('config_ready', readyAnimation);
          neeoStill.addEventListener('data_ready', readyAnimation);
          neeoStill.addEventListener('DOMLoaded', readyAnimation);
          neeoStill.addEventListener('loaded_images', readyAnimation);

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

          neeoDisappearStart.addEventListener('config_ready', readyAnimation);
          neeoDisappearStart.addEventListener('data_ready', readyAnimation);
          neeoDisappearStart.addEventListener('DOMLoaded', readyAnimation);
          neeoDisappearStart.addEventListener('loaded_images', readyAnimation);

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

          neeoDisappear1.addEventListener('config_ready', readyAnimation);
          neeoDisappear1.addEventListener('data_ready', readyAnimation);
          neeoDisappear1.addEventListener('DOMLoaded', readyAnimation);
          neeoDisappear1.addEventListener('loaded_images', readyAnimation);

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

          neeoDisappear2.addEventListener('config_ready', readyAnimation);
          neeoDisappear2.addEventListener('data_ready', readyAnimation);
          neeoDisappear2.addEventListener('DOMLoaded', readyAnimation);
          neeoDisappear2.addEventListener('loaded_images', readyAnimation);

          neeoCome.addEventListener('complete', completeCome);

          function onClick1(e) {
            e.preventDefault();

            if (neeoCame && !neeoStartDisappear) {
              neeoStartDisappear = true;
              neeoStillNode.classList.toggle('hidden');
              neeoDisappearStartNode.classList.toggle('hidden');

              neeoDisappearStart.addEventListener('complete', function () {
                neeoDisappearStartNode.classList.toggle('hidden');
                neeoDisappear1Node.classList.toggle('hidden');
                neeoDisappearStart.destroy();
                neeoDisappear1.addEventListener('complete', function () {
                  mainBlockNode.classList.add('main-block_animation_portal1');
                  mainBlockNode.parentElement.classList.add('main-wrap_animation-zoom-portal');
                  setTimeout(function () {
                    redirect(url1);
                  }, 300)
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

              neeoDisappearStart.addEventListener('complete', function () {
                neeoDisappearStartNode.classList.toggle('hidden');
                neeoDisappear2Node.classList.toggle('hidden');
                neeoDisappearStart.destroy();
                setTimeout(function () {
                  mainBlockNode.classList.add('main-block_animation_portal2');
                  mainBlockNode.parentElement.classList.add('main-wrap_animation-zoom-portal');
                  setTimeout(function () {
                    redirect(url2);
                  }, 300)
                }, 4100);
                neeoDisappear2.play();
              });

              neeoDisappearStart.play();
            }
          }

          function completeCome() {
            neeoStillNode.classList.toggle('hidden');
            neeoComeNode.classList.toggle('hidden');
            neeoStill.play();
            neeoCome.destroy();
            neeoCame = true;
          }

          function redirect(url) {
            window.location = url;
          }
        }

        var scriptLottie = document.getElementById('scriptLottie');
        videoBackground = document.getElementById('videoBackground');

        scriptLottie.addEventListener('load', function () {
          loadProgress.value += 1;
          readyLottieJS();
        });

        function startObserveProgressVideo() {
          var intervalId = setInterval(updateLoadVideoPercent, 200);
          var timer = 0;

          function updateLoadVideoPercent() {
            document.getElementById('debug').innerHTML = 'timer=' + timer + ' readyState= ' + videoBackground.readyState;

            if (videoBackground.buffered.length) {
              var maxLengthVideo = Math.round(videoBackground.duration);
              var currentLengthVideo = videoBackground.buffered.end(0);
              loadVideoPercent = Math.floor(currentLengthVideo / maxLengthVideo * 100);
              loadVideoPercent = loadVideoPercent > 100 ? 100 : loadVideoPercent;
            } else {
              loadVideoPercent = 0;
            }

            timer += 200;
            if ((timer >= 3000) && (loadVideoPercent === 0) && (videoBackground.readyState >= 3)) {
              loadVideoPercent = 100;
            }

            if ((timer >= 15*1000) && (loadVideoPercent === 0)) {
              document.getElementById('debug').innerHTML = 'timer=' + timer + ' readyState= ' + videoBackground.readyState + ' видео не загружалось и readyState не изменился в течении 15 сек';
            }

            if (loadVideoPercent === 100) {
              loadProgress.value += 1;
              clearInterval(intervalId);
            }
          }
        }

        videoBackground.play();
        startObserveProgressVideo();
      } catch (e) {
        document.getElementById('debug').innerHTML = e.message;
      }
    }

    document.addEventListener('DOMContentLoaded', readyDOM, false);
})();
$(document).ready(function() {
  $('#preload').show();
  $('#frame').hide();
  $('#loading').hide();
  $('#cursor-blank').hide();
  $('#error').hide();
  $('#serverReady').hide();

  $(document).on({
    keypress: function(e) {
      if (e.which === 13) {
        initMachine();
        $(this).off(e);
      }
    }
  });

  $(document).on({
    touchstart: function(e) {
      initMachine();
      $(this).off(e);
    }
  });

  $('#switch').on('click', function() {
    $(this).toggleClass('switch-on', 'remove');
    $(this).toggleClass('switch-off', 'add');
    $('#screen').toggleClass('on', 'remove');
    $('#screen').toggleClass('off', 'add');
  });
});

function initMachine() {
  $('#preload').hide();
  $('#frame')
    .css('visibility', 'visible')
    .show();

  console.log(
    ""
  );

  var loading = function() {
    setTimeout(function() {
      initNote();
      console.log('Loaded');
    }, 730);

    $('#loading')
      .show()
      .append()
      .typed({
        strings: [
          '.......',
          '.......',
          '<span class="danger">WARNING: Do you need a update!</span>'
        ],
        showCursor: false,
        contentType: 'html'
      });
  };
  var loadingOff = function() {
    $('#loading').hide();
  };

  var errorShow = function() {
    $('#error').show();
  };
  var errorHide = function() {
    $('#error').hide();
  };

  var thinking = function() {
    $('.thinking').hide();
  };

  var serverReady = function() {
    $('#serverReady').show();
  };
  var serverReadyHide = function() {
    $('#serverReady').hide();
  };

  var welcomeText = function() {
    $('#frame #screen .text span').typed({
      strings: [
        'Hello there! :)',
        '...Installing Gentoo',
        '<img src="images/defcon.png" width="100%" height="100%" align="center"></a><br><br><br> >>>'
      ],
      contentType: 'html',
      loop: false,
      startDelay: 1100
    });
  };

  setTimeout(loading, 1500);
  setTimeout(loadingOff, 6300);
  setTimeout(errorShow, 1800);
  setTimeout(errorHide, 4000);
  setTimeout(thinking, 7000);
  setTimeout(serverReady, 7000);
  setTimeout(serverReadyHide, 7800);
  setTimeout(welcomeText, 8000);
}
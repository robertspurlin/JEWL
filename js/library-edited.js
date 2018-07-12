/*
 **
 ** library.js
 ** Authors: Amy York and Robert Spurlin
 ** All the JS needed for the library website redesign.
 **
 */


// For use of let and const on older browsers that do not support ES6
'use strict';

$(document).ready(function () {

  // Alert system for MTSU.
  const feed = "https://www.getrave.com/rss/mtsu/channel1";
  $.ajax(feed, {
    accepts: {
      xml: "application/rss+xml"
    },
    dataType: "xml",
    success: function (data) {
      let xmlCount = 0;
      $(data).find('item').each(function () {
        if (!xmlCount) {
          xmlCount++;
          const alertText = $(this).find('description').text();
          if (alertText.indexOf('MTSU ALERT') > -1) {
            $('.Alert').append(alertText);
          }
        }
      });
    }
  });

  // ITD Header.
  let searchvisible = 0;
  $("#search-menu").click(function (e) {
    //This stops the page scrolling to the top on a # link.
    e.preventDefault();
    if (searchvisible === 0) {
      //Search is currently hidden. Slide down and show it.
      $("#search-form").slideDown(200);
      $("#s").focus(); //Set focus on the search input field.
      searchvisible = 1; //Set search visible flag to visible.
    } else {
      //Search is currently showing. Slide it back up and hide it.
      $("#search-form").slideUp(200);
      searchvisible = 0;
    }
  });

  // Button animation trigger
  $('body').on('click', '.navbar-toggle.collapsed', function () {
    $('.navbar-toggle').toggleClass('offnav onnav');
  });

  // Home page slider on featured buttons function

  $('.roomtrigger').click(function (e) {
    e.preventDefault();

    if (document.getElementById('hours') && document.getElementById('hours').style.display === 'block') {
      $('#hours').slideUp('fast');

      setTimeout(function () {
        $('#reserverooms').slideToggle('fast')
      }, 300);

    } else if (document.getElementById('coursereserves') && document.getElementById('coursereserves').style.display === 'block') {
      $('#coursereserves').slideUp('fast');

      setTimeout(function () {
        $('#reserverooms').slideToggle('fast')
      }, 300);

    } else if (document.getElementById('howdoi') && document.getElementById('howdoi').style.display === 'block') {
      $('#howdoi').slideUp('fast');

      setTimeout(function () {
        $('#reserverooms').slideToggle('fast')
      }, 300);

    } else {
      $('#reserverooms').slideToggle('fast');
    }
  });

  $('.hourtrigger').click(function (e) {
    e.preventDefault();

    if (document.getElementById('reserverooms') && document.getElementById('reserverooms').style.display === 'block') {
      $('#reserverooms').slideUp('fast');

      setTimeout(function () {
        $('#hours').slideToggle('fast')
      }, 300);

    } else if (document.getElementById('coursereserves') && document.getElementById('coursereserves').style.display === 'block') {
      $('#coursereserves').slideUp('fast');

      setTimeout(function () {
        $('#hours').slideToggle('fast')
      }, 300);

    } else if (document.getElementById('howdoi') && document.getElementById('howdoi').style.display === 'block') {
      $('#howdoi').slideUp('fast');

      setTimeout(function () {
        $('#hours').slideToggle('fast')
      }, 300);

    } else {
      $('#hours').slideToggle('fast');
    }
  });

  $('.coursetrigger').click(function (e) {
    e.preventDefault();

    if (document.getElementById('reserverooms') && document.getElementById('reserverooms').style.display === 'block') {
      $('#reserverooms').slideUp('fast');

      setTimeout(function () {
        $('#coursereserves').slideToggle('fast')
      }, 300);

    } else if (document.getElementById('hours') && document.getElementById('hours').style.display === 'block') {
      $('#hours').slideUp('fast');

      setTimeout(function () {
        $('#coursereserves').slideToggle('fast')
      }, 300);

    } else if (document.getElementById('howdoi') && document.getElementById('howdoi').style.display === 'block') {
      $('#howdoi').slideUp('fast');

      setTimeout(function () {
        $('#coursereserves').slideToggle('fast')
      }, 300);

    } else {
      $('#coursereserves').slideToggle('fast');
    }
  });

  $('.howdoitrigger').click(function (e) {
    e.preventDefault();

    if (document.getElementById('reserverooms') && document.getElementById('reserverooms').style.display === 'block') {
      $('#reserverooms').slideUp('fast');

      setTimeout(function () {
        $('#howdoi').slideToggle('fast')
      }, 300);

    } else if (document.getElementById('hours') && document.getElementById('hours').style.display === 'block') {
      $('#hours').slideUp('fast');

      setTimeout(function () {
        $('#howdoi').slideToggle('fast')
      }, 300);

    } else if (document.getElementById('coursereserves') && document.getElementById('coursereserves').style.display === 'block') {
      $('#coursereserves').slideUp('fast');

      setTimeout(function () {
        $('#howdoi').slideToggle('fast')
      }, 300);

    } else {
      $('#howdoi').slideToggle('fast');
    }
  });

  $(".child").css({
    "height": $('.parent').height()
  });

  $(window).resize(function () {
    $(".child").css({
      "height": $('.parent').height()
    });
  });

  $('.chat').click(function () {
    $(this).toggleClass('open');
  });

  // Scroll change. To make the logo smaller on scroll and back.

  // First, need to add padding to body so nothing is broken... 
  const fullnav = document.getElementById('header');

  $('body').css({
    'padding-top': 250 + 'px'
  });

  $('header.mtlibraryheader .dropdown-menu').css({
    'top': 250 + 'px'
  });

  // Now let's do the shrinking. 
  let logoHasShrinked = false;
  const logo = document.getElementById('mtsulogo');

  window.addEventListener('scroll', function () {
    if (window.scrollY !== 0 && !logoHasShrinked) {
      $(logo).toggleClass('smaller');
      logoHasShrinked = true;

      $('body').css({
        'padding-top': 225 + 'px'
      });

      $('header.mtlibraryheader .dropdown-menu').css({
        'top': 225 + 'px'
      });

    } else if ((window.innerHeight + window.scrollY) >= this.document.body.offsetHeight || window.scrollY == 0) {
      $(logo).toggleClass('smaller');
      logoHasShrinked = false;

      $('body').css({
        'padding-top': 250 + 'px'
      });
    
      $('header.mtlibraryheader .dropdown-menu').css({
        'top': 250 + 'px'
      });
    }
  });
});
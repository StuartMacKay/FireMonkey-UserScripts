// ==UserScript==
// @name        WOS Hammer
// @match       https://wingsoverscotland.com/*
// @grant       none
// @version     1.0
// @author      Stuart MacKay
// @description Add a button to hide all posts from the commenter
// @require  https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js
// ==/UserScript==

// Not everyone who leaves a comment on Wings Over Scotland posts has
// something useful to say. This script add an icon next to the name
// of each commenter so you can temporarily hide all their comments,
// until the page is reloaded.

(function() {
  'use strict';

  function hideCommenter(name) {
    $('cite[class="fn"]').each(function () {
      if (name ===  $(this).attr('data-commenter')) {
        $(this).closest('li').css("display", "none");
      }
    });
  }

  $('cite[class="fn"]').each(function () {
    let name = $(this).contents().text().trim();
    $(this).prepend('<span style="font-size: 1.2em; font-weight: normal; cursor: pointer;" title="Hide all comments from ' + name + '">&#x2297;</span> ');
    $(this).attr('data-commenter', name);
    $(this).children(":first").click(function () {
      hideCommenter(name);
    });
  });

})();

// End of script

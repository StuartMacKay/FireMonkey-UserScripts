// ==UserScript==
// @name     eBird Recent Visits
// @version  2.0.1
// @description Various fixes to make the Recent Visits page usable.
// @include  https://ebird.org/region/*/activity*
// @include  https://ebird.org/hotspot/*/activity*
// @require  https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js
// @namespace https://github.com/StuartMacKay/userscripts/
// @author smackay
// @copyright 2018-2023 Stuart MacKay (https://github.com/StuartMacKay/userscripts)
// @license MIT
// @homepage https://github.com/StuartMacKay/userscripts
// @grant GM_addStyle
// ==/UserScript==

// Show visited link so you can see what checklists you have read.
GM_addStyle('div.Meta--date > a:visited { color: darkorange; }');

(function() {
  'use strict';

  // Hide all checklists from selected observers.

  function hideObserver(name) {
    $('div.Observation-species h3').each(function () {
      if (name ===  $(this).attr('data-observer')) {
        $(this).closest('section.Observation--placeRecentVisits').css('display', 'none');
      }
    });
  }

  $('div.Observation-species h3').each(function () {
    let name = $(this).contents().text().trim().replace(/\s{2,}/, ' ');
    $(this).prepend('<span style="font-size: 1.2em; font-weight: normal; cursor: pointer;" title="Hide all checklists from ' + name + '">&#x2297;</span> ');
    $(this).attr('data-observer', name);
    $(this).children(":first").click(function () {
      hideObserver(name);
    });
  });

  // Hide all checklists that contain latitude and longitude in the name.

  const coords = /\-?\d{1,2}[.,]\d{1,5}[,x] ?\-?\d{1,2}[.,]\d{1,5}/;

  $('div.Meta--location span.Meta-label').each(function () {
    let name = $(this).contents().text().trim();
    if (coords.test(name)) {
      $(this).closest('section.Observation--placeRecentVisits').css('display', 'none');
    }
  });

  // Open checklists in a new tab view.

  $('div.Meta--date a.Meta-label').each(function () {
    $(this).attr('target', '_blank');
  });

})();

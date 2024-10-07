// ==UserScript==
// @name     eBird Recent Visits
// @version  2.1.1
// @description Various fixes to make the Recent Visits page usable.
// @include  https://ebird.org/region/*/recent-checklists*
// @include  https://ebird.org/hotspot/*/recent-checklists*
// @require  https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js
// @namespace https://github.com/StuartMacKay/userscripts/
// @author smackay
// @copyright 2018-2023 Stuart MacKay (https://github.com/StuartMacKay/userscripts)
// @license MIT
// @homepage https://github.com/StuartMacKay/userscripts
// @grant GM_addStyle
// ==/UserScript==

// This script makes reading through all the checklists listed on the eBird
// Recent Visits page for a location or region easier by:
//
// 1. Changing the colour of visited links to dark orange so you can see what
//    checklists you've read.
//
// 2. Adding an 'x' next to the name of the observer so you can temporarily
//    hide all checklists from that person, until the page is reloaded.
//
// 3. Adding an 'x' next to the name of the location so you can temporarily
//    hide all checklists from that location, until the page is reloaded. The
//    greyed-out location icon is hidden to reduce the clutter on the page.
//
// 4. Opening all checklists in a new tab. That way you can click on all the
//    lists you want to read without either using ctrl+click or having to
//    navigate back to the Recent Visits page to select the next checklist.
//
// 5. Show only checklists for hotspots. This is intended to clean out all
//    the incidental checklists, which are often of little value.

// Show visited link so you can see what checklists you have read.
GM_addStyle('div.Chk-date a:visited { color: darkorange; }');

// Hide all location icons. They don't so anything useful.
GM_addStyle('svg.Icon--locationGeneric{ display: none; }');


(function() {
  'use strict';

  // Hide all checklists from selected observers.

  function hideObserver(name) {
    $('li.Chk').each(function () {
      if (name ===  $(this).attr('data-observer')) {
        $(this).css('display', 'none');
      }
    });
  }

  $('div.Chk-observer').each(function () {
    let name = $(this).find('span:last-child').contents().text().trim().replace(/\s{2,}/, ' ');
    $(this).prepend('<span style="font-weight: normal; cursor: pointer; margin-right: 6px;" title="Hide all checklists from ' + name + '">x</span> ');
    $(this).parent().attr('data-observer', name);
    $(this).children(":first").click(function () {
      hideObserver(name);
    });
  });

  // Hide all checklists from selected locations.

  function hideLocation(name) {
    $('li.Chk').each(function () {
      if (name ===  $(this).attr('data-location')) {
        $(this).css('display', 'none');
      }
    });
  }

  $('div.Chk-location').each(function () {
    let name = $(this).find('span.u-loc-name').contents().text().trim().replace(/\s{2,}/, ' ');
    if (name !== "Location") {
      $(this).prepend('<span style="font-weight: normal; cursor: pointer; margin-right: 6px;" title="Hide all checklists for ' + name + '">x</span> ');
      $(this).parent().attr('data-location', name);
      $(this).children(":first").click(function () {
        hideLocation(name);
      });
    }
  });

  // Hide all checklists that are not from a hotspot

  $('span.u-loc-name').each(function () {
    $(this).closest('li.Chk').css({display:"none"});
  });

  // Open checklists in a new tab view.

  $('div.Chk-species a').each(function () {
    $(this).attr('target', '_blank');
  });

})();

// ==UserScript==
// @name     eBird Checklists
// @version  1.0.2
// @description Various changes to make checklist pages more readable
// @include  https://ebird.org/checklist/*
// @include  https://ebird.org/view/checklist/*
// @include  https://ebird.org/*/view/checklist/*
// @require  https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js
// @namespace https://github.com/StuartMacKay/userscripts/
// @author smackay
// @copyright 2018-2023 Stuart MacKay (https://github.com/StuartMacKay/userscripts)
// @license MIT
// @homepage https://github.com/StuartMacKay/userscripts
// @grant    none
// ==/UserScript==

// This script contains all the fixes and changes needed to make the pages showing
// the checklist for a location more readable so it is easy to see what's been seen:
//
// - move species where only their presence was record to the bottom of the list
// - hide the Age & Sex table.

(function() {
  'use strict';

  // Move species where only presence was noted to the end of the checklist.

  let checklist = $('#list > section > ol');
  let count;

  $('.Observation-numberObserved').each(function () {
    count = $(this).find('span span:last-child').contents().text().trim();
    if (count === 'X') {
      $(this).closest('li').appendTo(checklist);
    }
  });

  // Hide the age & sex table for each species.

  $('.Observation-meta-item-label').each(function () {
    count = $(this).contents().text().trim();
    if (count === 'Age & Sex:') {
      $(this).parent().addClass('is-visuallyHidden');
    }
  });

})();

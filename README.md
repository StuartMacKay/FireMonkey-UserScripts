# Userscripts

This is a collection of userscripts that can be used with
[greasemonkey](https://www.greasespot.net/) type browser addons for 
Firefox, Chrome, etc., to make the Interwebs "better". 

## The scripts

The scripts performs various tweaks to pages on sites that are used or visited
on a regular basis.

| Script                      | Site                  | Description                               |
|-----------------------------|-----------------------|-------------------------------------------|
| ebird-recent-visits.user.js | ebird.org             | Fix styling; open checklists in tabs, etc. |
| ebird-checklist.user.js     | ebird.org             | Move presence counts to end of list, etc. |
| wos-hammer.user.js          | wingsoverscotland.com | Hide comments from selected visitors      |

### eBird Recent Visits (ebird-recent-visits.user.js)

For the eBird Recent Visits page for a location or region, e.g. [Lisboa, Portugal](https://ebird.org/region/PT-11/activity?yr=all&m=) 
this script  reduces clutter and make it easy to go through all the checklists to 
find out what people have seen:

- the site stylesheet uses the same colour for visited links, this script changes
  them to orange so you can easily see which checklists you have looked at.

- add link to temporarily hide all the checklists for a given observer.

- temporarily hide all checklists where the name contains coordinates. Often these
  are for one-time or personal locations and don't often contain many observations 
  of interest.
  
- clicking on the date to display the checklist opens it in a new tab. That way 
  you can open several checklists at one and avoid having to click back to reload 
  the page, which takes several seconds.
  
### eBird Checklists (ebird-checklists.user.js)

For the eBird Checklists e.g. [Passeio do Parque, Sacavém, Lisboa, PT](https://ebird.org/checklist/S153338236) 
this script tidies up the list so it is easier to read:

- species where only the presence was indicated, i.e. there is no count, are moved
  out of the way, to the end of the list.

- the Age & Sex table which is mostly not of interest, is hidden.
 
### WOS Hammer (wos-hammer.user.js)

Not every person who comments on [Wings Over Scotland](https://wingsoverscotland.com/)
has something interesting or useful to say. This script adds a hide button next to 
each commenter so you can hide all their comments - alas, until you visit the site again. 

## Repository

The scripts for eBird can be found on [OpenUserJS](https://openuserjs.org/) when you
do a search with the [eBird](https://openuserjs.org/?q=eBird) keyword. You can also 
find them on [GreasyFork](https://greasyfork.org) when you list all the scripts for 
the [eBird](https://greasyfork.org/en/scripts/by-site/ebird.org) site.

The WOS Hammer script is not hosted anywhere, other than here.

## License

eBird Superscripts is available under the terms of the 
[MIT](https://opensource.org/licenses/MIT) license.

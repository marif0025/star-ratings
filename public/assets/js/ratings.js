!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ratingPlugin=e():t.ratingPlugin=e()}(self,(function(){return function(){"use strict";var t={338:function(t,e,a){a.r(e)},833:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){for(var a=0;a<e;a++){var r=document.createElement("div");r.className="rating-star";var n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("viewBox","0 0 320 320");var o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","M165.3 11.05c-3.1 79.48-3.98 123.32-4.15 149.07-.04 5.55-.18 29.05-.35 53.68l-.35 49.47c-30.99 16.27-61.97 32.53-92.96 48.8-3.76 1.98-8.16-1.22-7.44-5.41L77.4 205.54c.29-1.66-.27-3.36-1.48-4.54L2.45 129.38c-3.04-2.97-1.36-8.14 2.84-8.75l101.54-14.76a5.116 5.116 0 003.86-2.81l45.41-92.01c1.89-3.81 7.32-3.81 9.2 0z");var s=document.createElementNS("http://www.w3.org/2000/svg","path");s.setAttribute("d","M165.25 11.05l45.41 92.01a5.163 5.163 0 003.86 2.81l101.54 14.76c4.21.61 5.89 5.78 2.84 8.75L245.43 201a5.149 5.149 0 00-1.48 4.54l17.35 101.13c.72 4.19-3.68 7.38-7.44 5.41-31.85-15.92-63.7-31.83-95.54-47.75-.56-35.79-1.01-71.58-1.37-107.37-.48-48.63-.78-97.27-.9-145.91 1.88-3.81 7.32-3.81 9.2 0z"),o.classList.add("half-star"),s.classList.add("half-star"),n.append(o),n.append(s),r.append(n),t.append(r)}return t}},104:function(t,e,a){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),a(338);var n=r(a(833)),o={init:function(t){var e=t.selector,a=t.onChange,r=t.favClass?t.favClass:"faved",s=t.halfStarClass?t.halfStarClass:"half-star",i="rated";document.querySelectorAll("."+e).forEach((function(t){n.default(t,5);var e=t.dataset.rating,c=e?Math.ceil(2*parseFloat(e)):0;if(o.setRating(t,c/2),!t.classList.contains(i)){var l=t.querySelectorAll("."+s);t.addEventListener("mouseleave",(function(e){if(!t.classList.contains(i)){var a=Array.from(l).slice(0,c);o.reset(l,r),a.forEach((function(t){return t.classList.add(r)}))}})),l.forEach((function(e,n){e.addEventListener("click",(function(e){a&&a(t,(n+1)/2),t.classList.add(i)})),e.addEventListener("mouseenter",(function(){if(!t.classList.contains(i)){var e=Array.from(l).slice(0,n+1);o.reset(l,r),e.forEach((function(t){return t.classList.add(r)}))}}))}))}}))},setRating:function(t,e){var a=t.querySelectorAll(".half-star"),r=Array.from(a),n="faved",s=r.slice(0,Math.ceil(2*e));o.reset(a,n),s.forEach((function(t,e){setTimeout((function(){setTimeout((function(){t.classList.add(n)}),100*e)}),500)}))},reset:function(t,e){t.forEach((function(t){return t.classList.remove(e)}))}};e.default=o}},e={};function a(r){var n=e[r];if(void 0!==n)return n.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,a),o.exports}a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r=a(104);return r.default}()}));
!function t(e,o,r){function n(a,f){if(!o[a]){if(!e[a]){var s="function"==typeof require&&require;if(!f&&s)return s(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=o[a]={exports:{}};e[a][0].call(c.exports,function(t){var o=e[a][1][t];return n(o?o:t)},c,c.exports,t,e,o,r)}return o[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)n(r[a]);return n}({1:[function(t,e,o){"use strict";$(document).ready(function(){var t=$(".stick-to-bottom.fake"),e=$(".stick-to-bottom.real"),o=$("#lang-from"),r=$(".fullscreen"),n=function(){var n=o.offset().top+o.height(),i=t.offset().top;r.toggleClass("full",n<i),e.toggleClass("stick",n<i)};n(),$(window).resize(n),$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html, body").animate({scrollTop:t.offset().top},500),!1}});var i=$(".focused"),a=($("#lang-to"),function(){i.toggleClass("unfocused",$(document).scrollTop()<=168)});a(),$(window).scroll(a)})},{}]},{},[1]);
//# sourceMappingURL=duocoder.js.map

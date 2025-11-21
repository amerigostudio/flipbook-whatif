import worker from './js/worker';

$.fn.FlipBook = function(options) {
  const parentContainer = this.length ? this[0] : $('<div>').appendTo('body');
  return worker(parentContainer, options);
};

$(function () {
  window.jQuery = window.$ = $;
});

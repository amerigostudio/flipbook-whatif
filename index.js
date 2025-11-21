import worker from './js/worker';

$.fn.FlipBook = function(options) {
    const parentContainer = this.length ? this[0] : $('<div>').appendTo('body');
    return worker(parentContainer, options);
}

$(() => {

  // FORCE DEFAULT PDF (What If = Japanese first)
  const defaultPdf = 'amf_Simply-what-if_JPN.pdf';

  let containers = $('.flip-book-container');

  if (containers.length === 0) {
    // no container with src → create one automatically
    const auto = $('<div class="flip-book-container">')
      .attr('src', defaultPdf)
      .appendTo('body');

    auto.FlipBook({ pdf: defaultPdf });

  } else {
    // normal behavior (used by Sycamore)
    for (let i = 0; i < containers.length; ++i) {
      const jContainer = $(containers[i]), src = jContainer.attr('src');
      const pdfToLoad = src || defaultPdf;
      jContainer.FlipBook({ pdf: pdfToLoad });
    }
  }

});

window.jQuery = window.$ = $;


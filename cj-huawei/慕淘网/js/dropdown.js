(function ($) {
  'use strict' // 使用严格模式

  function dropdown (elem) {
    var $elem = $(elem),
      activeClass = $elem.data('active') + ' -active';
    $elem.hover(function () {
      // over
      // var $this = $(this); // 使用了两次$(this)，所一缓存下来
      $elem.addClass(activeClass);
    }, function () {
      // out
      $elem.removeClass(activeClass);
    });
  }

  $.fn.extend({
    dropdown: function () {
      return this.each(function () {
        dropdown(this)
      })
    }
  });
  $('.dropdown').dropdown();
})(jQuery);


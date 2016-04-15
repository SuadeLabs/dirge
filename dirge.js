;(function($) {
  var now = new Date();

  function hideIfExpired(el, expiryDate) {
    var expired = expiryDate < now;
    if (expired) {
      el.hide();
    }
    return expired;
  }

  function replace(a, b) {
    b.clone().insertAfter(a).show();
  }

  $.fn.extend({
    dirge: function(options) {
      var defaults = {
        expires: null,
        replaceWith: null
      };

      var settings = $.extend({}, defaults, options);

      if(!settings.expires) {
        console.error('dirges.js: Must provide an expired date');
        return;
      }

      var expiryDate = new Date(settings.expires); // TODO validate/support relative dates
      var replaceWith = $(settings.replaceWith).hide()

      return this.each(function() {
        var el = $(this);
        var expired = hideIfExpired(el, expiryDate);
        if (expired && replaceWith) {
          replace(el, replaceWith);
        }
      });
    }
  });
})(jQuery);

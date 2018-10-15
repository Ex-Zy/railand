import ionRangeSlider from 'ion-rangeslider';
import $ from 'jquery';

$(document).ready(function() {
  let $range = $('.js-range-slider'),
    $from = $('.js-from'),
    $to = $('.js-to'),
    minVal = parseInt($from.val()),
    maxVal = parseInt($to.val()),
    range, min = 0,
    max = 32000,
    from, to;
  var updateValues = function() {
    $from.prop('value', from);
    $to.prop('value', to);
    var value = $from.prop('value', from);
  };
  $range.ionRangeSlider({
    type: 'double',
    min: 100,
    max: max,
    prettify_enabled: !1,
    grid: !1,
    prefix: '$',
    grid_num: 10,
    onChange: function(data) {
      from = data.from;
      to = data.to;
      updateValues();
    }
  });
  range = $range.data('ionRangeSlider');

  function addSeperator(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
  }
  var updateRange = function() {
    range.update({
      from: from,
      to: to
    });
  };
  $from.on('input', function() {
    from = +$(this).prop('value');
    if (from < min) {
      from = min;
    }
    if (from > to) {
      from = to;
    }
    updateValues();
    updateRange();
  });
  $to.on('input', function() {
    to = +$(this).prop('value');
    if (to > max) {
      to = max;
    }
    if (to < from) {
      to = from;
    }
    updateRange();
  });
});

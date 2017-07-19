function reset(elem) {
  var $radioGroup = $(elem).closest('.inner-wrap').find('input');
  $radioGroup.map(function () {
    $(this).closest('.oval').removeClass('mark');
    return $(this).removeAttr('checked');
  });
}


$('.oval').toggle(function () {
  reset(this);

  $(this).addClass('mark').find('input').attr('checked', 'checked');

}, function () {
  reset(this);
});

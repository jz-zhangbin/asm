export default function (dom) {
  var h = document.documentElement.scrollHeight || document.body.scrollHeight;
  $(dom).css('min-height', (h - 68) + 'px') 
  $(window).resize(function () {
    var h = document.documentElement.scrollHeight || document.body.scrollHeight;
    $(dom).css('min-height', (h - 68) + 'px') 
  });
}

function doucmentClick(dom, _this, show) {
  $(document).bind("click", function (e) {
    var target = $(e.target);
    if (target.closest("." + dom).length == 0) {
      _this[show] = false
    }
  });
}
export default doucmentClick

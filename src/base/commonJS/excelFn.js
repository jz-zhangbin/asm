import method1 from './excel'

function excel(title, arr, id) {
  if ($('#' + id)) {
    $('#' + id).remove()
  }
  var tab = document.createElement('table')
  let ls = ''
  for (var i = 0; i < title.length; i++) {
    ls += ('<th>' + title[i] + '</th>')
  }
  let Header = '<tr>' + ls + '</tr>'
  let Body = ''
  for (var j = 0; j < arr.length; j++) {
    var Tr = ''
    for (var i = 0; i < arr[j].length; i++) {
      Tr += ('<td>' + arr[j][i] + '</td>')
    }
    Body += '<tr>' + Tr + '</tr>'
  }
  Body = Header + Body
  $(tab).append(Body)
  $(tab).attr('id', id)
  $('html').append($(tab))
  $(tab).css('display', 'none')
  method1(id)

}
export default excel

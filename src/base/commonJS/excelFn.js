import method1 from './excel'
function excel(fid,num,inner,arr,id) {
    if($('#'+id)) {
        $('#'+id).remove()
        console.log(1)
    } 
    var tab = document.createElement('table') 
    let th = inner
    tab.innerHTML = th
    let ls = $('#'+fid).find('tr').eq(0).siblings('tr')
    let lt = ls.length
    let lss = $(ls).clone() 
    for(var i = 0; i< lt ; i++) {
        if(i >= num) {
            break;
        }
        for(var j =0 ;j<arr.length; j++) {
            lss[i].children[arr[j]].remove() 
        } 
        $(tab).append(lss[i])  
    }
    $(tab).attr('id', id)
    $('html').append($(tab))
    $(tab).css('display','none')
    method1(id) 
}
export default excel
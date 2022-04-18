$('.delete').click(function(){
    alert("xoá thành công!!!");
    var temp = $(this).attr('getId');
    $('#' + temp).hide();
});

$('.edit').click(function(){
    alert("sửa thành công!!!");
});
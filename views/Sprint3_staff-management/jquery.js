$(".delete").click(function () {
  alert("xoá thành công!!!");
  var temp = $(this).attr("getId");
  $("#" + temp).hide();
});

$(".edit").click(function () {
  window.location.href = "index.html";
  // alert("sửa thành công!!!");
});

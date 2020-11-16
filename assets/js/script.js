$(function () {
  $("[data-bs-tooltip]").tooltip();
  $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...")
  });
  $("h3").on("dblclick",function(){
    $(this).css("color","red");
  });
  $(".card-title").click(function(){
    $(".card-text").toggle();
  });
});

$(function () {
  $(".topicsmenu>button").click(function (e) {
    $(".topicsmenu>button.selected").removeClass();
    $(".topicsmenu>button").addClass('btn card-body btn-outline-dark');
    $(".topicsview").load($(this).addClass("selected").attr("href"));
    e.preventDefault();
  }).first().click();
});

function opentopic(){
  window.open('http://iotsvm.ddns.net/public/login','_blank');
}

function openvideo(){
  window.open('https://www.youtube.com/watch?v=Pd-w5lCqjWA','_blank');
}
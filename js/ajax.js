$(function () {
  $(".topicsmenu>button").click(function (e) {
    $(".topicsmenu>button.selected").removeClass();
    $(".topicsmenu>button").addClass('btn card-body btn-outline-dark');
    $(".topicsview").load($(this).addClass("selected").attr("href"));
    e.preventDefault();
  }).first().click();
});

$(function () {
  $(".twsigmenu>button").click(function (e) {
    $(".twsigmenu>button.twselected").removeClass();
    $(".twsigmenu>button").addClass('btn card-body btn-outline-dark');
    $(".twsigview").load($(this).addClass("twselected").attr("href"));
    e.preventDefault();
  }).first().click();
});


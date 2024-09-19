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

const name=$('#name').val();

var data = {
  'entry.1107420346': name,
  'entry.1675490282': 'test',
  'entry.243514853': 'test',
  'entry.766702982': 'test',
  'entry.988081046':'test'
};
$.ajax({
  type: 'POST',
  url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdexI7qBomUCZgGRQWcyP813sAaZso6JV0iuzRvhZSBbwNEFA/formResponse',
  data: data,
  contentType: 'application/json',
  dataType: 'jsonp',
  complete: function() {
    alert('資料已送出！');
  }
});
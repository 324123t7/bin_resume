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


$("#submail").click(function(){
  const name=$('#name').val();
  const call=$('#call').val();
  const email=$('#email').val();
  const subject=$('#subject').val();
  const message=$('#message').val();
  var data = {
    'entry.1107420346': name,
    'entry.1675490282': call,
    'entry.243514853': email,
    'entry.766702982': subject,
    'entry.988081046':message
  };
  $.ajax({
    type: 'POST',
    url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdexI7qBomUCZgGRQWcyP813sAaZso6JV0iuzRvhZSBbwNEFA/formResponse',
    data: data,
    contentType: 'application/json',
    dataType: 'jsonp',
    complete: function() {
      $('.ok').removeClass('d-none');
      $('.ok').addClass('d-block');
      $('.viewback').removeClass('d-none');
      $('.viewback').addClass('show');
      $('#close').click(function(){
        $('.ok').removeClass('d-block');
        $('.ok').addClass('d-none');
        $('.viewback').removeClass('d-block');
        $('.viewback').addClass('d-none');
      })
    }
  });
})
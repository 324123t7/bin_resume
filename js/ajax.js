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

$(function () {
  $(".itemsmenu>button").click(function (e) {
    $(".itemsmenu>button.itemsselected").removeClass();
    $(".itemsmenu>button").addClass('btn card-body btn-outline-dark');
    $(".itemsview").load($(this).addClass("itemsselected").attr("href"));
    e.preventDefault();
  }).first().click();
});

$(function () {
  $(".ESP32>button").click(function (e) {
    $(".ESP32>button.ESP32selected").removeClass();
    $(".ESP32>button").addClass('btn card-body btn-outline-dark');
    $(".iotespsview").load($(this).addClass("ESP32selected").attr("href"));
    e.preventDefault();
  }).first().click();
});


$("#submail").click(function(){
  const name=$('#name').val();
  const call=$('#call').val();
  const email=$('#email').val();
  const subject=$('#subject').val();
  const message=$('#message').val();
  if(name==""||call==""||email==""||subject==""||message==""){
    $('.thank').text('您還有欄位尚未填寫');
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
  }else{
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
        $('.thank').text('謝謝您的留言我已收到!我將盡快回覆於您所留存的電子郵件');
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
  }

})
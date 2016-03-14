$('.btn-box a').click(
  function(){
    $('.text-box').fadeOut(500)
    $( $(this).attr('href') ).fadeIn(750);
  }
)

$('.btn-box a').click(
  function(){
    $('.text-box').addClass('pop')
    $( $(this).attr('href') ).removeClass('pop')
  }
)

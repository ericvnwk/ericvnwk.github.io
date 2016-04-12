$('.superhero a').click(
  function(){
    $( $(this).attr('href')).removeClass('slide')
    $('#superheroes').fadeOut(250)
  }
)

$('.close-btn a').click(
  function(){
    $( $(this).attr('href')).addClass('slide')
    $('#superheroes').fadeIn(250)
  }
)

$('.btn-box a, .character-info a').click(
  function(){
    $('.text-box').fadeOut(500)
    $( $(this).attr('href') ).fadeIn(750);
  }
)

$('.circle a').click(
  function(){
    $('.text-box').fadeOut(500)
    $( $(this).attr('href') ).fadeIn(750);
  }
)

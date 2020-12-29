function number( _v )
  {
    document.querySelector( 'input' ).value +=_v;
  }

function cl( _v )
  {
    document.querySelector( 'input' ).value= _v;
  }

  function calc() 
  {
    document.querySelector( 'input' ).value = eval(document.querySelector( 'input' ).value);
  }
 
  $(function(){
    $('.push').on('click', function(event){
    event.preventDefault();
        $('.push').removeClass('active');
        $(this).toggleClass('active');
    });
});
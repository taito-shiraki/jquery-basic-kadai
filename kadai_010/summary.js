$(function() {
      $('#change-color').on('click', function(){
        $('#target').css('color','red');
      });

      $('#change-text').on('click', function(){
        $('#target').text('Hello!');
      });

      $('#fade-out').on('click', function(){
        $('#target').fadeOut(2000,function(){

        });
      });

      $('#fade-in').on('click', function(){
        $('#target').fadeIn(2000,function(){
          
        });
      });
    });



    $('#about-link').click(function(){
      $('#about').css({"display":"block"});
      $('#left').animate({width:"50%"}, 600);
      $('#right').animate({width:"50%"}, 600);  
    })

    $('.close').click(function(){
      
      $('#left').animate({width:"0%"}, 600);
      $('#right').animate({width:"0%"}, 600, function(){

        $('#about').css({"display":"none"});
      }); 

    })
    // for ruby

    $('.ruby').click(function(){

      $('#ruby').animate({height:"100vh"}, 300);    
        $('#ruby').css({"display":"block"});
    })

    $('.close-black').click(function(){

      $('#ruby').animate({height:"0vh"}, 300, function(){
        $('#ruby').css({"display":"none"});
      });   
        
    })

    // for php
    $('.php').click(function(){

      $('#php').animate({height:"100vh"}, 300);   
        $('#php').css({"display":"block"});
    })

    $('.close-black').click(function(){

      $('#php').animate({height:"0vh"}, 300, function(){
        $('#php').css({"display":"none"});
      });   
        
    })
    
    // for html
    $('.html-css').click(function(){

      $('#html').animate({height:"100vh"}, 300);    
        $('#html').css({"display":"block"});
    })

    $('.close-black').click(function(){

      $('#html').animate({height:"0vh"}, 300, function(){
        $('#html').css({"display":"none"});
      });   
        
    })

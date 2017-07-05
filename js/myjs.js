
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

    $('.portfolio').click(function(){


           
      $('#portfolio').animate({height:"100vh"}, 300);   
          $('#portfolio').css({"display":"block"}); 
            $('body').css({"overflow":"auto"});
                        // $('#portfolio').css({"top":"0"});
                            $('#about').hide();
                            $('nav').hide();


    })

    $('.close-m').click(function(){
         // $('#header').css({"display":"block"});
         //          $('#left').css({"display":"block"});
               // $('#about').css({"display":"block"});
                   $('#about').show();
                     $('nav').show();
          $('#portfolio').animate({height:"0vh"}, 300, function(){
        $('#portfolio').css({"display":"none"});

      });   
        
    })

        $('.close-x').click(function(){
                         $('nav').show();
                         $('body').css({"overflow":"hidden"});
          $('#portfolio').animate({height:"0vh"}, 300, function(){
        $('#portfolio').css({"display":"none"});

      });   
        
    })

    // for skills
    $('.skills').click(function(){

      $('#skills').animate({height:"100vh"}, 300);   
        $('#skills').css({"display":"block"});
        $('#about').hide();
          $('nav').hide();
           // $('#header').css({"display":"none"});
           //                  $('#about').css({"display":"none"});
    })

    $('.close-m').click(function(){
            // $('#header').css({"display":"block"});
            //      $('#about').css({"display":"block"});
           $('#about').show();
             $('nav').show();
      $('#skills').animate({height:"0vh"}, 300, function(){
        $('#skills').css({"display":"none"});
      });   
        
    })

        $('.close-x').click(function(){

             $('nav').show();
      $('#skills').animate({height:"0vh"}, 300, function(){
        $('#skills').css({"display":"none"});
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

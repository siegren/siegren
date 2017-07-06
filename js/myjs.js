
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


           
      $('#portfolio').animate({height:"100vh"}, 600);   
          $('#portfolio').css({"display":"block"}); 
            // $('#portfolio').css({"overflow":"auto"});
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
          $('#portfolio').animate({height:"0vh"}, 600, function(){
        $('#portfolio').css({"display":"none"});

      });   
        
    })

        $('.close-x').click(function(){
                         $('nav').show();
                         
                         $('body').css({"overflow":"hidden"});
          $('#portfolio').animate({height:"0vh"}, 600, function(){
        $('#portfolio').css({"display":"none"});

      });   
        
    })

    // for skills
    $('.skills').click(function(){

      $('#skills').animate({height:"100vh"}, 600);   
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
      $('#skills').animate({height:"0vh"}, 600, function(){
        $('#skills').css({"display":"none"});
      });   
        
    })

        $('.close-x').click(function(){

             $('nav').show();
      $('#skills').animate({height:"0vh"}, 600, function(){
        $('#skills').css({"display":"none"});
      });   
        
    })
    
    $(document).scroll(function(){
      $('.scroll-up').css({"display":"block"});
      var a = $(document).scrollTop();
      if (a == "0"){
             $('.scroll-up').css({"display":"none"});
      }
    })

    $('#portfolio').scroll(function(){
      $('.p-scroll-up').css({"display":"block"});
      var a = $('#portfolio').scrollTop();
      if (a == "0"){
             $('.p-scroll-up').css({"display":"none"});
      }
    })

    $('.p-scroll-up').click(function(){
      $('#portfolio').stop().animate({scrollTop:0}, 500, 'swing', function(){
        // alert('it worked!');
      });
    });

    


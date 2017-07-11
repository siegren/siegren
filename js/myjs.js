
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
                            $('#footer').hide()

    })

    $('.close-m').click(function(){
         // $('#header').css({"display":"block"});
         //          $('#left').css({"display":"block"});
               // $('#about').css({"display":"block"});
                   $('#about').show();
                     $('nav').show();
                     $('#footer').show()
          $('#portfolio').animate({height:"0vh"}, 600, function(){
        $('#portfolio').css({"display":"none"});
                     $('.ruby-tab').css({"background-color":"rgba(255,255,255,0)", "color":"#000"});
      $('.web-tab, .other-tab').css({"background-color":"#000", "color":"#fff"});
      $("#ruby").show();
      $('#web, #other').hide(); 

      });   
       

    })

        $('.close-x').click(function(){
                         $('nav').show();
                         $('#footer').show()
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
        $('#footer').hide()
          $('nav').hide();
           // $('#header').css({"display":"none"});
           //                  $('#about').css({"display":"none"});
    })

    $('.close-m').click(function(){
            // $('#header').css({"display":"block"});
            //      $('#about').css({"display":"block"});
           $('#about').show();
             $('nav').show();
             $('#footer').show()
      $('#skills').animate({height:"0vh"}, 600, function(){
        $('#skills').css({"display":"none"});
      });   
        
    })

        $('.close-x').click(function(){
$('#footer').show()
             $('nav').show();
      $('#skills').animate({height:"0vh"}, 600, function(){
        $('#skills').css({"display":"none"});
      });   
        
    })
    
    $(document).scroll(function(){
      $('.scroll-up').css({"display":"block"});
              $('.scroll-down').css({"display":"block"});     
      var a = $(document).scrollTop();
      if (a == "0"){
             $('.scroll-up').css({"display":"none"});
             $('.scroll-down').css({"display":"none"});
      }

      var scroll_down = $(document).height() - $(window).height();
            if ($(document).scrollTop() == scroll_down){
                $('.scroll-down').css({"display":"none"});
      }
    })

    $('.scroll-up').click(function(){
      $('body').stop().animate({scrollTop:0}, 500, 'swing', function(){
        // alert('it worked!');
      });
    });

        $('.scroll-down').click(function(){
      $('body').stop().animate({scrollTop: $(document).height() - $(window).height() }, 500, 'swing', function(){
        // alert('it worked!');
      });
    });

       $('.arrow-down').click(function(){
      $('html, body').animate({scrollTop: $('#header').height() }, 500);
    });

    $('#portfolio').scroll(function(){
      $('.p-scroll-up').css({"display":"block"});
            $('.p-scroll-down').css({"display":"block"});
      var a = $('#portfolio').scrollTop();
      if (a == "0"){
             $('.p-scroll-up').css({"display":"none"});
                   $('.p-scroll-down').css({"display":"none"});
      }
      var scroll_down = $(document).height() - $(window).height();
            if ($('#portfolio').scrollTop() == scroll_down){
                $('.p-scroll-down').css({"display":"none"});
      }

    })

    $('.p-scroll-up').click(function(){
      $('#portfolio').stop().animate({scrollTop:0}, 500, 'swing', function(){
        // alert('it worked!');
      });
    });

        $('.p-scroll-down').click(function(){
      $('#portfolio').stop().animate({scrollTop: $(document).height()}, 500, 'swing', function(){
        // alert('it worked!');
      });
    });

    // ######
    // tab here
    // ######
    $('.web-tab').click(function(){
      $('.web-tab').css({"background-color":"rgba(255,255,255,0)", "color":"#000"});
      $('.ruby-tab, .other-tab').css({"background-color":"#000", "color":"#fff"});
      $("#web").show();
      $('#ruby, #other').hide();
    });

    $('.ruby-tab').click(function(){
      $('.ruby-tab').css({"background-color":"rgba(255,255,255,0)", "color":"#000"});
      $('.web-tab, .other-tab').css({"background-color":"#000", "color":"#fff"});
      $("#ruby").show();
      $('#web, #other').hide();
    });

    $('.other-tab').click(function(){
     $('.other-tab').css({"background-color":"rgba(255,255,255,0)", "color":"#000"});
           $('.ruby-tab, .web-tab').css({"background-color":"#000", "color":"#fff"});
      $("#other").show();
      $('#ruby, #web').hide();
    });


    // particles
    (function() {

    var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

    // Main
    initHeader();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: 0, y: height};

        largeHeader = document.getElementById('my-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        for(var x = 0; x < width*0.5; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
            console.log(_this);
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = 0.1+Math.random()*0.3;
            _this.scale = 0.1+Math.random()*0.3;
            _this.velocity = Math.random();
        }

        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
            ctx.fill();
        };
    }

})();



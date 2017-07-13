var id="";

$('.nav').click(function(){
  $('nav').slideDown();
});

$('.particles').click(function(){
    $('nav').slideUp();
});

$('.about').click(function(){
  $(this).css({"border-top":"3px solid #fff"});
  $('.contacts').css({"border-top":"3px solid #000"});
  $('#contacts').fadeOut('slow', function(){
      $('#about').fadeIn('slow');
  });

});

$('.contacts').click(function(){
  $(this).css({"border-top":"3px solid #fff"});
  $('.about').css({"border-top":"3px solid #000"});
  $('#about').fadeOut('slow', function(){
      $('#contacts').fadeIn('slow');
  });

});

$('.info').click(function(){
  id='#'+this.className;
  $('.about').click();
    $('nav').fadeOut();
  $('#main').fadeOut('slow', function(){
    $('#info').fadeIn('slow');
    
  });
});

$('.works').click(function(){
    id='#'+this.className;
  $('.ruby').click();
    $('nav').fadeOut();
  $('#main').fadeOut('slow', function(){
    $('#works').fadeIn('slow');

  });
});

$('.close').click(function(){
  $(id).fadeOut('slow', function(){
    $('#main').fadeIn('slow');
  });  
});

$('.ruby').click(function(){
    $(this).css({"border-top":"3px solid #fff"});
    $('#works').css({"overflow-y":"hidden"});
    $('.others, .web').css({"border-top":"3px solid #000"});

    $('#web').add($('#others')).fadeOut('slow', function(){
      $('#ruby').fadeIn(function(){
         // $('#web, #others').hide();
        $('#works').css({"overflow-y":"auto"});
                 
      });
    });
});

$('.web').click(function(){
    $(this).css({"border-top":"3px solid #fff"});
      $('#works').css({"overflow-y":"hidden"});
      $('.others, .ruby').css({"border-top":"3px solid #000"});
     
    $('#ruby, #others').fadeOut('slow', function(){
      // $('#ruby, #others').hide();
      $('#web').fadeIn(function(){
        $('#works').css({"overflow-y":"auto"});
           
      });
    });
});



$('.others').click(function(){
    $(this).css({"border-top":"3px solid #fff"});
      $('#works').css({"overflow-y":"hidden"});
        $('.ruby, .web').css({"border-top":"3px solid #000"});

    $('#web, #ruby').fadeOut('slow', function(){
          // $('#web, #ruby').hide();
      $('#others').fadeIn(function(){
        $('#works').css({"overflow-y":"auto"});

      });
    });
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

        largeHeader = document.getElementById('particles');
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




let tableau_img = $("#slider img")


    //settings for slider
    let animationSpeed = 2000;
    let pause = 5000;
    let currentSlide = 1;

    //cache DOM elements
    let $index = $("#index");
    let $slider = $('#slider');
    let $slideContainer = $('.slides', $slider);
    let $slides = $('.slide', $slider);
    let slider_pos = 1;
    let interval;

    function startSlider() {
        let height = tableau_img[0].width;
        interval = setInterval(function() {
            if(slider_pos === 0)
            {
                $slideContainer.animate({'margin-left': '0'}, animationSpeed);
                $index.animate({'left': '0'}, animationSpeed);
                slider_pos++;
                return
            }
            $slideContainer.animate({'margin-left': '-='+height}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    slider_pos = 0;
                }
            });


            $index.animate({'left': '+='+(parseInt($index.css('font-size')) / 2)}, animationSpeed)
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }
    

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();








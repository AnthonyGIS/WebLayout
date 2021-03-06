
$('#pbSlider0').pbTouchSlider({
    slider_Wrap: '#pbSliderWrap0',
    slider_Threshold: 10,
    slider_Speed: 600,
    slider_Ease: 'ease-out',
    slider_Drag: true,
    slider_Arrows: {
        enabled: true
    },
    slider_Dots: {
        class: '.o-slider-pagination',
        enabled: true,
        preview: false
    },
    slider_Breakpoints: {
        default: {
            height: 500
        },
        tablet: {
            height: 350,
            media: 1024
        },
        smartphone: {
            height: 250,
            media: 768
        }
    }
});
$('#pbSlider').pbTouchSlider({
    slider_Wrap: '#pbSliderWrap',
    slider_Threshold: 50,
    slider_Speed: 400,
    slider_Ease: 'linear',
    slider_Drag: false,
    slider_Arrows: {
        enabled: false
    },
    slider_Breakpoints: {
        default: {
            height: 300
        },
        tablet: {
            height: 250,
            media: 1024
        },
        smartphone: {
            height: 200,
            media: 768
        }
    }
});
$('#pbSlider2').pbTouchSlider({
    slider_Wrap: '#pbSliderWrap2',
    slider_Threshold: 25,
    slider_Speed: 1000,
    slider_Ease: 'cubic-bezier(.16,.92,0,.8)',
    slider_Dots: {
        class: '.slider-pagination',
        enabled: false
    },
    slider_Breakpoints: {
        default: {
            height: 300
        },
        tablet: {
            height: 250,
            media: 1024
        },
        smartphone: {
            height: 200,
            media: 768
        }
    }
});
$('#pbSlider3').pbTouchSlider({
    slider_Wrap: '#pbSliderWrap3',
    slider_Threshold: 50,
    slider_Speed: 400,
    slider_Ease: 'linear',
    slider_Breakpoints: {
        default: {
            height: 400
        },
        tablet: {
            height: 300,
            media: 1024
        },
        smartphone: {
            height: 200,
            media: 768
        }
    }
});
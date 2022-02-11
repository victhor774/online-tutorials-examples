$('.thumb').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

function imgSlider (anything){
    document.querySelector('.pepsi').src = anything;
}

function chageBgColor(color){
    const sec = document.querySelector('.sec');
    sec.style.backgroundColor = color;
}

function menuToggle(){
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}
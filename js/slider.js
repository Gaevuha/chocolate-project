$(document).ready(function () {
    function initSlider() {
        if ($(window).width() < 1200) { // Якщо ширина менше 1200px
            if (!$('.your-class').hasClass('slick-initialized')) {
                $('.your-class').slick({
                    dots: true,
                    infinite: true,
                    speed: 500,
                    autoplay: true,          // Автоматичне прокручування слайдів
                    autoplaySpeed: 3000,     // Час (в мілісекундах) між авто-прокруткою
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            }
        } else { 
            if ($('.your-class').hasClass('slick-initialized')) {
                $('.your-class').slick('unslick'); // Видаляємо слайдер
            }
        }
    }

    initSlider(); // Викликаємо функцію при завантаженні
    $(window).resize(initSlider); // Викликаємо при зміні розміру вікна
});


// $(document).ready(function () {
//     $('.your-class').slick({
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1, // За замовчуванням 1 слайд
//         slidesToScroll: 1, // Перегортається по 1 слайду
//         autoplay: true,          // Автоматичне прокручування слайдів
//         autoplaySpeed: 3000,     // Час (в мілісекундах) між авто-прокруткою
//         appendDots: $('.your-class'), // Додає dots безпосередньо до слайдера
//         responsive: [
//             {
//                 breakpoint: 1200, // Для планшетів (1200px і менше)
//                 settings: {
//                     slidesToShow: 2, // Показує 2 слайди
//                     slidesToScroll: 1, // Перегортає одразу 2
//                     dots: true // Включаємо dots для планшета
//                 }
//             },
//             {
//                 breakpoint: 768, // Для мобільних (768px і менше)
//                 settings: {
//                     slidesToShow: 1, // Повертаємо 1 слайд
//                     slidesToScroll: 1, // Перегортаємо по 1
//                     dots: true // Включаємо dots для планшета
//                 }
//             }
//         ]
//     });
// });


// $(document).ready(function(){
//     $('.your-class').slick({
//         slidesToShow: 1,         // Кількість видимих слайдів
//         slidesToScroll: 1,       // Кількість слайдів, що прокручуються за раз
//         arrows: false,           // Вимкнення стрілок навігації
//         dots: true,              // Увімкнення пагінації (крапки внизу)
//         autoplay: true,          // Автоматичне прокручування слайдів
//         autoplaySpeed: 1500,     // Час (в мілісекундах) між авто-прокруткою
//         adaptiveHeight: false,     // Автоматичне підлаштування висоти слайдера
//         pauseOnHover: true      // Зупинка при наведенні
//     });
// });
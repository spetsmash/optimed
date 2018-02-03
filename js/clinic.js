/**
 * Created by natali on 04.03.17.
 */
window.addEventListener('load', function (){


    var treatment = 'Подать заявку на лечение';
    var makecallback = 'Подать заявку на консультацию';
    var question = 'Задать свой вопрос';

    window.addEventListener('scroll', function scroll(){
        // //console.log(window.pageYOffset || document.documentElement.scrollTop);
        // if (screen.width>=900) {
        //     if (window.pageYOffset || document.documentElement.scrollTop>250) {
        //         document.querySelector("nav").classList.add("sticky");
        //         document.querySelector(".header-nav").classList.add("rolled-header");
        //         document.querySelector(".slicknav_nav").classList.add("height_102");
        //         document.querySelector(".slicknav_nav").classList.remove("height_131");
        //     } else if (window.pageYOffset <500) {
        //         document.querySelector("nav").classList.remove("sticky");
        //         document.querySelector(".header-nav").classList.remove("rolled-header");
        //         document.querySelector(".slicknav_nav").classList.add("height_131");
        //         document.querySelector(".slicknav_nav").classList.remove("height_102");
        //     }
        // }});



    var menu = document.querySelector(".tablet-menu");
    var ddl = document.querySelectorAll(".faq_i");

    //console.log(ddl);

    menu.addEventListener('click', function ()  {
        document.querySelector(".slicknav_nav").classList.toggle("display_block");
    });

    Array.prototype.forEach.call(ddl, function (el) {
        el.addEventListener('click', function ($event) {
            //console.log($event.currentTarget);
            var curTarget = $event.currentTarget;
            var ontext = curTarget.querySelector(".newscontent");
            ontext.classList.toggle("display_none");
            $event.preventDefault();
            $event.stopPropagation();
        });
    });

    var applyModal = document.querySelector(".treatment");
    var consultModal = document.querySelector(".consultation");
    var questionModal = document.querySelector(".question");
    var closeBtn = document.querySelector(".mfp-close-reg");
    var closeBtnMes = document.querySelector(".mfp-close-mes");
    var closeBtnCommetn = document.querySelector(".mfp-close-mes-comment");
    var modalTreatment = document.querySelector('.modal_treatment');
    var modalBlack = document.querySelector('.modal_back');
    var modalTreatmentMessage = document.getElementById('modalMessage');
    var confirmation = document.querySelector('.confirmation');
    var modalCommentMessage = document.getElementById('modalCommentMessage');
    var commentBtn = document.querySelector('.comment-btn');
    var country_form1 = document.querySelector('#country_form1');
    var country_form3 = document.querySelector('#country_form3');



    questionModal.addEventListener('click', function ($event) {
        // console.log($event.target, $event.target.getAttribute('name'));
        var textForModal = $event.target.getAttribute('name');

        modalTreatmentMessage.querySelector('.zakaz_sit').innerHTML = textForModal;
        modalTreatmentMessage.classList.remove("display_none");
        modalBlack.classList.remove("display_none");
    });


if (commentBtn) {
    commentBtn.addEventListener('click', function ($event) {
        console.log($event.target, $event.target.getAttribute('name'));
        var textForModal = $event.target.getAttribute('name');

        modalCommentMessage.querySelector('.zakaz_sit_comment').innerHTML = textForModal;
        modalCommentMessage.classList.remove("display_none");
        modalBlack.classList.remove("display_none");
        $('#form4')[0].reset();
    });




    closeBtnCommetn.addEventListener('click', function () {
        modalCommentMessage.classList.add("display_none");
        modalBlack.classList.add("display_none");
        $('#form4')[0].reset();
    });

}

    closeBtnMes.addEventListener('click', function () {
        modalTreatmentMessage.classList.add("display_none");
        modalBlack.classList.add("display_none");
        $('#form3')[0].reset();
    });

    $("#form3").submit(function($event) { //устанавливаем событие отправки для формы с id=form
        $event.preventDefault();
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "sendmes.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                //код в этом блоке выполняется при успешной отправке сообщения
                modalTreatmentMessage.classList.add("display_none");
                modalBlack.classList.add("display_none");
                confirmation.classList.remove("display_none");
                confirmation.classList.add("display_block");
                setTimeout(function(){  confirmation.classList.add("display_none");
                    confirmation.classList.remove("display_block");},800);
                console.log("Ваше сообщение отпрвлено!");
            }}).then (function () {
            $('#form3')[0].reset();
            // confirmation.classList.add("display_none");
            // confirmation.classList.remove("display_block");
        });
    });


    $("#form4").submit(function($event) { //устанавливаем событие отправки для формы с id=form
        $event.preventDefault();
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "sendcomment.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                //код в этом блоке выполняется при успешной отправке сообщения
                modalCommentMessage.classList.add("display_none");
                modalBlack.classList.add("display_none");
                confirmation.classList.remove("display_none");
                confirmation.classList.add("display_block");
                setTimeout(function(){  confirmation.classList.add("display_none");
                    confirmation.classList.remove("display_block");},800);
                console.log("Ваше сообщение отправлено!");
            }}).then (function () {
            $('#form4')[0].reset();
            // confirmation.classList.add("display_none");
            // confirmation.classList.remove("display_block");
        });
    });


if (country_form1) {
    country_form1.addEventListener('change', function ($event) {
        console.log($event.target.value);
        if ($event.target.value === 'Россия') {
            $("#phone_form1").mask("+7(999) 999-9999");
        }
        else {
            $("#phone_form1").mask("+38(999) 999-9999")
        }
    });
}
    country_form3.addEventListener('change', function($event) {
        console.log($event.target.value);
        if ($event.target.value ==='Россия') {
            $("#phone_form3").mask("+7(999) 999-9999");
        }
        else {
            $("#phone_form3").mask("+38(999) 999-9999")
        }
    });

});
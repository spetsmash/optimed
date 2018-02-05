/**
 * Created by natali on 04.03.17.
 */
window.addEventListener('load', function (){


    var treatment = 'Подать заявку на лечение';
    var makecallback = 'Подать заявку на консультацию';
    var question = 'Задать свой вопрос';

    // window.addEventListener('scroll', function scroll(){
    //     //console.log(window.pageYOffset || document.documentElement.scrollTop);
    //     if (screen.width>=900) {
    //     if (window.pageYOffset || document.documentElement.scrollTop>250) {
    //        document.querySelector("nav").classList.add("sticky");
    //        document.querySelector(".header-nav").classList.add("rolled-header");
    //        document.querySelector(".slicknav_nav").classList.add("height_102");
    //        document.querySelector(".slicknav_nav").classList.remove("height_131");
    //     } else if (window.pageYOffset <500) {
    //         document.querySelector("nav").classList.remove("sticky");
    //         document.querySelector(".header-nav").classList.remove("rolled-header");
    //         document.querySelector(".slicknav_nav").classList.add("height_131");
    //         document.querySelector(".slicknav_nav").classList.remove("height_102");
    //     }
    // }});
    var confirmationTop = document.querySelector(".confirmation-top");
    var form_to_fill = document.querySelector(".form_kak_top");
    var form_place = document.querySelector(".form-block");

    $("#phone_form").mask("+38(999) 999-9999");

    $("#formtop").submit(function($event) { //устанавливаем событие отправки для формы с id=form
        $event.preventDefault();
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                //код в этом блоке выполняется при успешной отправке сообщения
                $('#formtop')[0].reset();
                form_to_fill.classList.add("display_none");
                confirmationTop.classList.remove("display_none");
                confirmationTop.classList.add("display_block");
                $(".form_kak_mob").html(confirmationTop);
                setTimeout(function(){
                    confirmationTop.classList.add("display_none");
                    confirmationTop.classList.remove("display_block");
                    form_to_fill.classList.remove("display_none");
                    form_to_fill.classList.add("display_block");
                    $(".form_kak_mob").html(form_to_fill);

                },6000);
                console.log("Ваше сообщение отпрвлено!");

            }}).then (function () {

        })
    })



    var menu = document.querySelector(".tablet-menu");
    var ddl = document.querySelectorAll(".faq_i");

    //console.log(ddl);

    menu.addEventListener('click', function ()  {
        document.querySelector(".slicknav_nav").classList.toggle("display_block");
    });

    Array.prototype.forEach.call(ddl, function (el) {
        el.addEventListener('click', function ($event) {
            if($event.target.className == "newstitle_in") {
              console.log($event.target);
              var curTarget = $event.currentTarget;
              var ontext = curTarget.querySelector(".newscontent");
              ontext.classList.toggle("display_none");
              $event.preventDefault();
              $event.stopPropagation();
            }
        });
    });

    // var applyModal = document.querySelector(".treatment");
    // var consultModal = document.querySelector(".consultation");
    var questionModal = document.querySelector(".question");
    var closeBtn = document.querySelector(".mfp-close-reg");
    var closeBtnMes = document.querySelector(".mfp-close-mes");
    var modalTreatment = document.getElementById('modalTreatment');
    var modalBlack = document.querySelector('.modal_back');
    var modalTreatmentMessage = document.getElementById('modalMessage');
    var confirmation = document.querySelector('.confirmation');
    var country_form = document.querySelector('#country_form');
    var country_form1 = document.querySelector('#country_form1');
    var country_form3 = document.querySelector('#country_form3');


    // applyModal.addEventListener('click', function ($event) {
    //     console.log($event.target, $event.target.getAttribute('name'));
    //     var textModal = $event.target.getAttribute('name');
    //
    //     modalTreatment.querySelector('.zakaz_sit').innerHTML = textModal;
    //     modalTreatment.classList.remove("display_none");
    //     modalBlack.classList.remove("display_none");
    //     $('#form1')[0].reset();
    // });
    //
    // consultModal.addEventListener('click', function ($event) {
    //     console.log($event.target, $event.target.getAttribute('name'));
    //     var textForModal = $event.target.getAttribute('name');
    //
    //     modalTreatment.querySelector('.zakaz_sit').innerHTML = textForModal;
    //     modalTreatment.classList.remove("display_none");
    //     modalBlack.classList.remove("display_none");
    //     $('#form1')[0].reset();
    // });

    questionModal.addEventListener('click', function ($event) {
        console.log($event.target, $event.target.getAttribute('name'));
        var textForModal = $event.target.getAttribute('name');

        modalTreatmentMessage.querySelector('.zakaz_sit').innerHTML = textForModal;
        modalTreatmentMessage.classList.remove("display_none");
        modalBlack.classList.remove("display_none");
        $('#form')[0].reset();
    });

    country_form.addEventListener('change', function($event) {
        console.log($event.target.value);
        if ($event.target.value ==='Россия') {
            $("#phone_form").mask("+7(999) 999-9999");
        }
        else {
            $("#phone_form").mask("+38(999) 999-9999")
        }
    });

    country_form1.addEventListener('change', function($event) {
        console.log($event.target.value);
        if ($event.target.value ==='Россия') {
            $("#phone_form1").mask("+7(999) 999-9999");
        }
        else {
            $("#phone_form1").mask("+38(999) 999-9999")
        }
    });

    country_form3.addEventListener('change', function($event) {
        console.log($event.target.value);
        if ($event.target.value ==='Россия') {
            $("#phone_form3").mask("+7(999) 999-9999");
        }
        else {
            $("#phone_form3").mask("+38(999) 999-9999")
        }
    });

    closeBtn.addEventListener('click', function() {
        modalTreatment.classList.add("display_none");
        modalBlack.classList.add("display_none");
        $('#form')[0].reset();
        $('#form1')[0].reset();
    });

    closeBtnMes.addEventListener('click', function() {
        modalTreatmentMessage.classList.add("display_none");
        modalBlack.classList.add("display_none");
        $('#form3')[0].reset();
    });



        $("#form").submit(function($event) { //устанавливаем событие отправки для формы с id=form
            $event.preventDefault();
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
                type: "POST", //Метод отправки
                url: "send.php", //путь до php фаила отправителя
                data: form_data,
                success: function() {
                    //код в этом блоке выполняется при успешной отправке сообщения
                    modalTreatment.classList.add("display_none");
                    modalBlack.classList.add("display_none");
                    confirmation.classList.remove("display_none");
                    confirmation.classList.add("display_block");
                    setTimeout(function(){  confirmation.classList.add("display_none");
                        confirmation.classList.remove("display_block")},4000);
                    console.log("Ваше сообщение отпрвлено!");
                }}).then (function () {
                $('#form')[0].reset();
                // confirmation.classList.add("display_none");
                // confirmation.classList.remove("display_block");
            });
        });

    $("#form1").submit(function($event) { //устанавливаем событие отправки для формы с id=form

        $event.preventDefault();
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                //код в этом блоке выполняется при успешной отправке сообщения
                modalTreatment.classList.add("display_none");
                modalBlack.classList.add("display_none");
                confirmation.classList.remove("display_none");
                confirmation.classList.add("display_block");
                setTimeout(function(){  confirmation.classList.add("display_none");
                    confirmation.classList.remove("display_block")},4000);
                console.log("Ваше сообщение отпрвлено!");
            }}).then (function () {
            $('#form1')[0].reset();
            // confirmation.classList.add("display_none");
            // confirmation.classList.remove("display_block");
        });
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
                    confirmation.classList.remove("display_block");}, 4000);
                console.log("Ваше сообщение отпрвлено!");
            }}).then (function () {
            $('#form3')[0].reset();
            // confirmation.classList.add("display_none");
            // confirmation.classList.remove("display_block");
        });
    });


});
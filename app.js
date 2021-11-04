// window.location.href = "https://www.nantech.az/comingsoon.html";

$(document).ready(function () {
    

    if (window.matchMedia('(max-width: 600px)').matches) {
        $('.slider').slick({
            autoplay: true,
            autoplaySpeed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1
        });

        $('.vertical_nav').addClass("togglemenu");
        $(".main_content").addClass("contenttoggle");
        $(".footer").addClass("togglefooter");

        $('#toggle_menu').click(function () {
            $(".vertical_nav").toggleClass("togglemenu");
            $(".main_content").toggleClass("contenttoggle");
            $("footer").toggleClass("togglefooter");
        });
    }
    else {
        $('.slider').slick({
            autoplay: true,
            autoplaySpeed: 1500,
            slidesToShow: 6,
            slidesToScroll: 1

        });

        $('#toggle_menu').click(function () {
            $(".vertical_nav").toggleClass("togglemenu");
            $(".main_content").toggleClass("contenttoggle");
            $("footer").toggleClass("togglefooter");

        });
    }

    $('.packet-tbody>tr').dblclick(function () {
        $('.packet-details-edit').css({
            "z-index": "100000",
            "opacity": "1"
        });

        $(".packet-details-modal").css({
            "margin-top": "90px"
        });
    });

    $('.add-details').click(function () {
        if ($('#details').val() != '') {
            $('.packet-details').append('<li>' + $('#details').val() + '<span" class="remove">x</span>' + '</li>');
            $('#details').val('');
        }
        
    })

    $('.sil').on("click", function () {
        $(this).parent().remove();
            
    });

    $('.cancel').click(function (e) {
        $('.packet-details-edit').css({
            "z-index": "-1",
            "opacity": "0"
        });

        $(".packet-details-modal").css({
            "margin-top": "-600px"
        });
    });

    $('#messages').click(function (e) {
        $('.messages').slideToggle(100);
        $(".notification").css({
            "display": "none"
        });
        $(".user").css({
            "display": "none"
        });
    });

    $('#notification').click(function (e) {
        $('.notification').slideToggle(100);
        $(".messages").css({
            "display": "none"
        });
        $(".user").css({
            "display": "none"
        });
    });

    $('#user').click(function (e) {
        $('.user').slideToggle(100);
        $(".notification").css({
            "display": "none"
        });
        $(".messages").css({
            "display": "none"
        });
    });
    $('#dersler>li>span').click(function () {
        $(this).next().slideToggle();
        $(this).parent().toggleClass('active-video')
    })

    $('.fa-times').click(function () {
        $(this).parents('.noti-div').css("display", "none");
    })
    $('.silmək').click(function () {
        $('.noti-div').css("display", "none");
    })

    $('.ellipsis').click(function () {
        $('.setting-modal').toggle();
    })

    $("#tap").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".advaxt h5").filter(function () {
            $(this).parents('li').toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    })

    $("#search-for-table").keyup(function () {
        var value = this.value.toLowerCase().trim();

        $("table tr").each(function (index) {
            if (!index) return;
            $(this).find("td").each(function () {
                var id = $(this).text().toLowerCase().trim();
                var not_found = (id.indexOf(value) == -1);
                $(this).closest('tr').toggle(!not_found);
                return not_found;
            });
        });
    });

    //  TEACHER TABLE MODAL

    $('.edit-row').click(function (e) {
        $('ThumbFile__input--source').removeAttr('required')


        $('.table-edit').css({
            "z-index": "100000",
            "opacity": "1"
        });

        $(".table-edit-modal").css({
            "margin-top": "90px"
        });

        $('.add').html('Yadda saxla');
    });

    $('.add-teacher').click(function (e) {
        $('#PersonPhoto').attr('required', 'required')
        $('#tcher-img').attr('src', '/Assets/img/thumbnail-photo.jpg')
        $('#stdnt-img').attr('src', '/Assets/img/thumbnail-photo.jpg')
        $('#pckt-img').attr('src', '/Assets/img/thumbnail-photo.jpg')


        $('.table-edit').css({
            "z-index": "100000",
            "opacity": "1"
        });

        $(".table-edit-modal").css({
            "margin-top": "90px"
        });

        $('.add').html('Əlavə et');


        $('#tchr-name').val(null)
        $('#tchr-surname').val(null)
        $('#select').val(0)
        $('#birthdate').val(null)
        $('#pckt-period').val(null)
        $('#qrup-ad').val(null)
        $('#phone').val(null)
        $('#email').val(null)
        $('#qrup').val(null)

        $('#packet-name').val(null)
        $('#packet-period').val(null)
        $('#packet-price').val(null)
        $('#packet-discount').val(null)
        $('#packet-info').val(null)
        $('#PacketPhoto').val(null)
        $('#paketid').val(0)


        $('#photoName').val(null)
        $('#teacher-info').val(null)
        $('#regdate').val(null)
        $('#gender').val(-1)
        $('#packetname').val(-1)
        $('#groupname').val(-1)
        $('#stdnt-group').val(-1)
        $('#tchr-title').val(null)
        $('#muellimid').val(0)


    });

    $('.cancel').click(function (e) {
        $('.table-edit').css({
            "z-index": "-1",
            "opacity": "0"
        });

        $(".table-edit-modal").css({
            "margin-top": "-600px"
        });
    });


    $(function () {
        $('.edit-row').click(function () {
            $(this).parents('tr').find('td').each(function (index) {
                $(`[name="${$('thead tr th').eq(index).attr('forinput')}"]`).val($(this).text())
            })
            $('#tcher-img').attr('src', '/Assets/img/teacher/' + $(this).parents('tr').find('td').eq(2).text())
            $('#stdnt-img').attr('src', '/Assets/img/student/' + $(this).parents('tr').find('td').eq(2).text())
            $('#pckt-img').attr('src', '/Assets/img/packet/' + $(this).parents('tr').find('td').eq(1).text())

        })
    })

    $("#PersonPhoto").on('change', function () {
        var file = $("input[type=file]").get(0).files[0];

        if (file) {
            var reader = new FileReader();

            reader.onload = function () {
                $("#tcher-img").attr("src", reader.result);
                $("#stdnt-img").attr("src", reader.result);
            }

            reader.readAsDataURL(file);
        }
    });

    $("#PacketPhoto").on('change', function () {
        var file = $("input[type=file]").get(0).files[0];

        if (file) {
            var reader = new FileReader();

            reader.onload = function () {
                $("#pckt-img").attr("src", reader.result);
            }

            reader.readAsDataURL(file);
        }
    });

    $(function () {
        var numberMask = IMask(
            document.getElementById('pckt-period'),
            {
                mask: Number,
                min: 1,
                max: 12
            });

        var numberMask = IMask(
            document.getElementById('packet-price'),
            {
                mask: Number,
                min: 0,
                max: 10000
            });

        var numberMask = IMask(
            document.getElementById('packet-discount'),
            {
                mask: Number,
                min: 0,
                max: 100
                
            });

        let phoneMask = IMask(
            document.getElementById('phone'), {
            mask: '+(994)00-000-00-00'
        });

        var birthdate = new Cleave('.birthdate', {
            date: true,
            delimiter: '.',
            datePattern: ['d', 'm', 'Y']
        });

        var regdate = new Cleave('.regdate', {
            date: true,
            delimiter: '.',
            datePattern: ['d', 'm', 'Y']
        });
    })

    var qrupstrt = new Cleave('.qrup-strt', {
        date: true,
        delimiter: '.',
        datePattern: ['d', 'm', 'Y']
    });

    
});



function getValueById(inputId) {
    return document.getElementById(inputId).value;
}

function setValueById(inputId, value) {
    document.getElementById(inputId).value = value;
}

function getFormattedDate(dateString) {
    let splittedStrArray = dateString.split('.');
    let date = splittedStrArray[2] + '-' + splittedStrArray[1].slice(-2) + '-' + splittedStrArray[0].slice(-2);
    return date;
}


function submitFormTeacher() {
    setValueById('birthday', getFormattedDate(getValueById('birthdate')));
    $('#teacherForm').submit();
} 

function submitForm() {
    setValueById('birthday', getFormattedDate(getValueById('birthdate')));
    setValueById('regday', getFormattedDate(getValueById('regdate')));
    $('#studentForm').submit();
} 

function sendGroup() {
    setValueById('qrup-start-hidden', getFormattedDate(getValueById('qrup-strt')));
    $('#GroupForm').submit();
}


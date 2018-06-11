$(function() {


    $('.alert-email').hide();
    $('.alert-password').hide();
    $('.alert-address').hide();
    $('.alert-address2').hide();
    $('.alert-city').hide();
    $('.alert-state').hide();
    $('.alert-zip').hide();
    $('.alert-check').hide();


    var regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    var regexZip = /[0-9]{6}/gm;

    // check input-email

    function checkEmail(obj) {
        if (!$(obj).val().match(regexEmail)) {
            $('.alert-email').show();
            return false;
        } else {
            $('.alert-email').hide();
            return true;
        }
    }

    $('#input-email').on('keydown keyup keypress', function() {
        checkEmail(this);
    });

    //check input-password

    function checkPassword(obj) {
        if (!$(obj).val().match(regexPassword)) {
            $('.alert-password').show();
            return false;
        } else {
            $('.alert-password').hide();
            return true;
        }
    }

    $('#input-password').on('keydown keyup keypress', function() {
        checkPassword(this);
    });

    //check address

    function checkAddress(obj) {
        if ($(obj).val() == '') {
            $('.alert-address').show();
            return false;
        } else {
            $('.alert-address').hide();
            return true;
        }
    }

    $('#input-address').on('keydown keyup keypress', function() {
        checkAddress(this);
    });

    //check address2

    function checkAddress2(obj) {
        if ($(obj).val() == '') {
            $('.alert-address2').show();
            return false;
        } else {
            $('.alert-address2').hide();
            return true;
        }
    }

    $('#input-address2').on('keydown keyup keypress', function() {
        checkAddress2(this);
    });

    //check city

    function checkCity(obj){
    	if ($(obj).val() == '') {
            $('.alert-city').show();
            return false;
        } else {
            $('.alert-city').hide();
            return true;
        }
    }

    $('#input-city').on('keydown keyup keypress', function() {
        checkCity(this);
    });

    // check zip

    function checkZip(obj){
    	 if (!$(obj).val().match(regexZip)) {
            $('.alert-zip').show();
            return false;
        } else {
            $('.alert-zip').hide();
            return true;
        }
    }

    $('#input-zip').on('keydown keyup keypress', function() {
       checkZip(this);
    });

    //check state

    $('#input-state').on('change', function() {
        $('.alert-state').hide();
    });

    $('.form-check-input').click(function(event) {
    	/* Act on the event */
    	if (!$('.form-check-input').prop('checked')) {
            $('.alert-check').show();
        }else{
        	$('.alert-check').hide();
        }
    });



    //check button

    $('.check').click(function(event) {
        /* Act on the event */
        var stateBool = true;
        var checkbool = true;
        if ($('#input-state').val() == 'nothing') {
            $('.alert-state').show();
            stateBool = false;
        }
        if (!$('.form-check-input').prop('checked')) {
            $('.alert-check').show();
            checkbool = false;
        }
        var emailBool = checkEmail($('#input-email'));
        var passBool = checkPassword($('#input-password'));
        var addrBool = checkAddress($('#input-address'));
        var addr2Bool = checkAddress2($('#input-address2'));
        var cityBool = checkCity($('#input-city'));
        var zipBool = checkZip($('#input-zip'));
        event.preventDefault();

        if(emailBool && passBool  && addrBool  && addr2Bool  && cityBool  && zipBool && stateBool  && checkbool ){
        	clearAll();
        }

    });

    // clearing all fields

    function clearAll(){
    	$('#input-email').val('');
    	$('#input-password').val('');
    	$('#input-address').val('');
    	$('#input-address2').val('');
    	$('#input-city').val('');
    	$('#input-state').val('nothing');
    	$('#input-zip').val('');
    	$('.form-check-input').prop('checked',false);
    }



})
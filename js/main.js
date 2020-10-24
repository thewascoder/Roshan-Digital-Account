  $(document).ready(function() {

    $('.datepicker').datepicker({
        clearBtn: true,
        format: "mm/dd/yyyy"
    });



    $('#reservationDate').on('change', function () {
        var pickedDate = $('input').val();
        $('#pickedDate').html(pickedDate);
    });
     });
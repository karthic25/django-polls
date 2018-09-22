$(document).ready(function() {
    $('h1').html("change3");
    $('#Vote').click(function() {
        var radioName = "choice";
        if ($('input[name=' + radioName + ']:checked').length) {
            $('form').submit();
        } else {
            $('#error_message').show();
        }
    });
});
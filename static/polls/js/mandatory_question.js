$(document).ready(function() {
    $('#Vote').click(function() {
        var radioName = "choice";
        if ($('input[name=' + radioName + ']:checked').length) {
            $('form').submit();
        } else {
            $('#error_message').show();
        }
    });
});
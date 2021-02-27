$(document).ready(function () {
    
    // Initialize Quill Library
    var quill = new Quill('#editor', {
        theme: 'snow'
    });

    /**
     * Keyup Event 
     * Count the text string and update the bubble percentage
     */

    $("#editor").keyup(function () {
        
        var textarea = quill.getText();
        var bubble = new ldBar("#bubblediv");

        $.ajax({
            url: "run.php",
            method: "GET",
            data: "wordcount="+textarea,
            success: function(response) {
                $("h5#words").html('Total Words: ' + response);
                var percentage = (response / 1100) * 100;
                bubble.set(percentage);
            }
        });

    });
});
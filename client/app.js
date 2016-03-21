$(document).ready(function() {
    var call,
        payload;
    show_stats();
    on_load();
});


function on_load() {
    $('#flip').click(function() {
        flip_coin();
    });

    $('#stats').click(function() {
        show_stats();
    });
}

function flip_coin() {
    call = $('#call').val();
    $.ajax({
        url: "http://localhost:3000/flip",
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        processData: false,
        data: JSON.stringify({
            "call": call.toString(),
        }),
        success: function(data) {
            $("#res").empty();
            $("#res").append("Result = " + data.result);
            show_stats();
        },
        error: function(thrownError) {
            console.log("Error in insert");
        }
    });
}

function show_stats() {
    var statistics = '';
    $.ajax({
        url: "http://localhost:3000/stats",
        type: "GET",
        contentType: 'application/json; charset=UTF-8',
        success: function(data) {
            statistics = statistics + "<p>Wins = " +
                data.wins + "</p>" +
                "<p>Losses = " + data.losses +
                "</p>";
            $("#statistics").empty();
            $("#statistics").append(statistics);
        },
        error: function(thrownError) {
            console.log("Error in insert");
        }
    });
}
$(function () {
    // Keuze voor doel
    $(".doel a").click(function (event) {
        var selText = $(this).text();
        $("#doel").val(selText);
    });

    $(".bedrag a").click(function (event) {
        var selText = $(this).find("img").prop("alt")
        $("#bedrag").val(selText);
    });
});        

$(function () {
    // Keuze voor datum
    $("#datumpicker").change(function (event) {
        var selText = $(this).val();
        $("#datum").val(selText);
    });

    // Keuze voor doel
    $(".doel a").click(function (event) {
        var selText = $(this).text();
        $("#doel").val(selText);
    });

    // Keuze voor bedrag
    $(".bedrag a").click(function (event) {
        var selText = $(this).find("img").prop("alt")
        $("#bedrag").val(selText);
    });
});        

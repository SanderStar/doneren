$(function () {
    // Keuze voor doel
    $(".dropdown-menu a").click(function (event) {
        console.log($(this).parent);
        var selText = $(this).text();
        $("#doel").val(selText);
    });
});        

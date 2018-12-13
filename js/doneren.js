console.log("nu");

$(function() {
    console.log("ready");

    // Keuze in dropdown lijst gemaakt
    $('#doeldropdown').on("hide.bs.dropdown", function (e) {
        console.log("keuze " + e);
    });

    $(".dropdown-menu a").click(function() {
        // TODO bezig
        var keuze = $(this).parents(".btn-group").find('.selection').text($(this).text());
        var waarde = $(this).parents(".btn-group").find('.selection').val($(this).text());
        console.log(keuze + " " + waarde);
     });
  
  
});        

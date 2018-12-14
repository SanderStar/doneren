$(function () {

    function init() {
        // TODO zet huidige datum $("#datumpicker").val(new Date());
        $("#inpdoelomschrijving").prop("disabled", true);
        setValid();
    }

    function valid() {
        var datum = $("#datumpicker").val();
        var doel = $("#inpdoel").val();
        if (doel === "Overig") {

        }
        var bedrag = $("#imgbedrag").prop("alt");

        var valid = false;
        if (datum && doel && bedrag) {
            if (doel === "Overig") {
                var doelOms = $("#inpdoelomschrijving").val();
                if (doelOms) {
                    valid = true;
                }
            } else {
                valid = true;
            }
        }
        return valid;
    }

    function setValid() {
        if (valid()) {
            $("#donatievalid").css("display", "");
            $("#donatienotvalid").css("display", "none");
        } else {
            $("#donatievalid").css("display", "none");
            $("#donatienotvalid").css("display", "");
        }
    }

    // TODO niet meer nodig?
    // Keuze voor datum
    $("#datumpicker").change(function (event) {
        var selText = $(this).val();
        setValid();
    });

    $("#inpdoelomschrijving").change(function (event) {
        setValid();
    });

    // Keuze voor doel
    $(".doel a").click(function (event) {
        var selText = $(this).text();
        $("#inpdoel").val(selText);

        if (selText === "Overig") {
            $("#inpdoelomschrijving").prop("disabled", false);
        } else {
            $("#inpdoelomschrijving").prop("disabled", true);
        }
        setValid();
    });

    // Keuze voor bedrag
    $(".bedrag a").click(function (event) {
        var selText = $(this).find("img").prop("alt");

        var height = $(this).find("img").prop("height");
        var width = $(this).find("img").prop("width");

        var selSrc = $(this).find("img").prop("src");
        $("#imgbedrag").prop("src", selSrc);
        $("#imgbedrag").prop("alt", selText);
        $("#imgbedrag").prop("height", height / 2);
        $("#imgbedrag").prop("width", width / 2);

        setValid();
    });


    $("#btntoevoegen").click(function (event) {

        // Lengte tabel rijen zonder header rij
        var rows = $("#tbldonaties").find("tbody").find("tr").length;
        var lastRow = $("#tbldonaties").find("tbody").find("tr:last");
        var newRow = lastRow.clone();

        // 1e cell
        var cell = $(newRow).find("td")[0];
        // Verhoog rij nummer
        var rowNr = Number($(cell).text()) + 1;
        // Zet nieuwe rij nummer
        $(cell).text(rowNr);

        // 2e cell
        cell = $(newRow).find("td")[1];
        // TODO juiste format van datum
        $(cell).text($("#datumpicker").val());

        // 3e cell
        cell = $(newRow).find("td")[2];
        $(cell).text($("#inpdoel").val());

        // 4e cell
        cell = $(newRow).find("td")[3];
        $(cell).text($("#inpdoelomschrijving").val());

        // 5e cell
        cell = $(newRow).find("td")[4];
        $(cell).text($("#imgbedrag").prop("alt"));

        
        // Vervang met truc de id door een nieuwe id
        var cellDel = $(newRow).find("td:last");
        var idDell = $(cellDel).find("button:first")[0].id;
        idDell = idDell.replace(/[0-9]/g, "") + rowNr;
        $(cellDel).find("button:first")[0].id = idDell;
    
        // Vervang met truc de id door een nieuwe id
        // TODO nog nodig?
        /*
        var cellOk = $(newRow).find("td:first");
        var idOk = $(cellOk).find("span:first")[0].id;
        idOk = idOk.replace(/[0-9]/g, "") + rowNr;
        $(cellOk).find("span:first")[0].id = idOk;
        */
    
        // Voeg rij toe aan tabel
        lastRow.after(newRow);
        
        // TODO commentaar
        /*
        // Als er een icon staat deze hiden
        $("#" + idOk).hide();
    
        enableButtons(positie);
        */
    });


    init();
});        

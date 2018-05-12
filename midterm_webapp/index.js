$(function () {


    $("#button1").button();

    $("#button2").button();

    $("#button3").button();

    $("#toggleButton1").button();


    $("#toggleButton2").button();


    $("#toggleButton3").button();


    $("#button1").click(function () {


        $("#tu1").show();

        $("#tu2").hide();

        $("#tu3").hide();


        $(".bo").show();
        $(".bose").hide();
        $(".sony").hide();

        $(this).closest("li");

        $(".addTwo").hide();

        $(".addThree").hide();


        $(".addOne").show();


    });

    $("#button2").click(function () {


        $("#tu1").hide();

        $("#tu2").show();

        $("#tu2").css("display", "block");

        $("#tu3").hide();

        $(".bo").hide();
        $(".bose").show();
        $(".sony").hide();

        $(".addOne").hide();

        $(".addTwo").show();

        $(".addThree").hide();



    });


    $("#button3").click(function () {


        $("#tu1").hide();

        $("#tu2").hide();

        $("#tu3").show();
        $("#tu3").css("display", "block");

        $(".bo").hide();
        $(".bose").hide();
        $(".sony").show();

        $(".addOne").hide();

        $(".addTwo").hide();

        $(".addThree").show();


    });

    $("#toggleButton1").click(function () {

        $("#boInfo").toggle("fold", 300);

    })


    $("#toggleButton2").click(function () {

        $("#boseInfo").toggle("fold", 300);

    })


    $("#toggleButton3").click(function () {

        $("#sonyInfo").toggle("fold", 300);

    })


    var searchDBString = [

        "Apple",
        "Banana",
        "Canada",
        "Dongji",
        "San Jose",
        "Redwood City",
        "Milptiaoss",
    ]

    $("#autocomplete-1").autocomplete({

        source: searchDBString,

    })





    $(".buy").on("click", function () {

        $(this).closest("li")
            .find("img")
            .clone()
            .addClass("zoom")
            .appendTo("body");

        setTimeout(function () {

            $(".zoom").remove();
        }, 1000);

    });


    $(".addOne").on("click", function () {
        $(this).closest("li")
            .find("img")
            .clone()
            .addClass("zoom")
            .appendTo("body");
        setTimeout(function () {

            $(".zoom").remove();
        }, 1000);

    });


    $(".addTwo").on("click", function () {


        $(this).closest("li")
            .find("img")
            .clone()
            .addClass("zoom")
            .appendTo("body");
        setTimeout(function () {

            $(".zoom").remove();
        }, 1000);
    });



    $(".addThree").on("click", function () {


        $(this).closest("li")
            .find("img")
            .clone()
            .addClass("zoom")
            .appendTo("body");
        setTimeout(function () {

            $(".zoom").remove();
        }, 1000);
    });



    $(".basket-icon").on("click", function(){

        $(".Cart").toggle();


    });

    $(".user-icon").on("click", function(){

        $(".user_card").toggle();


    });


    $("#check").on("click",function () {

        $(".address").show();

    })




});


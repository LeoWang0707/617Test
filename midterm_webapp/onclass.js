$(function () {



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




    $("#Slider1").slider();


    $("#datepicker1").datepicker(

        "option",
        "showAnim",
        "bounce"

    );


    $("#buttton1").button();

    $("#buttton2").button();

    $("#button3").button();

    $("#button4").button();



    $("launcher-1").dialog({

        autoOpen:false,
        buttons:{

            ok:function(){

                $(this).dialog("close");
            }


        }
    });


    $("#launcher").click(function(){


        $("#dialog-1").dialog("open");

    });



    $("#menu-1").menu();


});
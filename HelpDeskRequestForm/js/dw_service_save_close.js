// saves services

function saveServices(){

//get User Access Form stuff

    var x = document.getElementById('USERACC_Options-0').checked;
    var y = document.getElementById('USERACC_Options-1').checked;
    var z = document.getElementById('USERACC_Options-2').checked;
    var aa = document.getElementById('USERACC_Options-3').checked;
    var bb = document.getElementById('USERACC_Options-4').checked;
    var cc = document.getElementById('USERACC_Options-5').checked;

    var checkCount = new Array(x,y,z,aa,bb,cc);

    //test if something is checked

    if($.inArray(true,checkCount) != -1)
    { // if something is checked - find out what

        // if Razor is checked change add_Razor to true
        if ( x == true){
            window.USERACC_add_Razor = 'true';
        } else {
            window.USERACC_add_Razor = 'false';
        }

        // if iRazor is checked change add_iRazor to true
        if ( y == true){
            window.USERACC_add_iRazor = 'true';
        } else {
            window.USERACC_add_iRazor = 'false';
        }

        // if oRazor is checked change add_oRazor to true
        if ( z == true){
            window.USERACC_add_oRazor = 'true';
        } else {
            window.USERACC_add_oRazor = 'false';
        }

        // if Purchase Order is checked change add_PO to true
        if ( aa == true){
            window.USERACC_add_PO = 'true';
        } else {
            window.USERACC_add_PO = 'false';
        }

       // if Sales is checked change add_Sales to true
        if ( bb == true){
            window.USERACC_add_SALES = 'true';
        } else {
            window.USERACC_add_SALES = 'false';
        }

       // if Other is checked change add_OTHER to true
        if ( cc == true){
            window.USERACC_add_OTHER = 'true';
        } else {
            window.USERACC_add_OTHER = 'false';
        }



    } else {
        // nothing is checked everything is false
        //populate JSON file to hold window vars
        window.USERACC_add_Razor = 'false';
        window.USERACC_add_iRazor = 'false';
        window.USERACC_add_oRazor = 'false';
        window.USERACC_add_PO = 'false';
        window.USERACC_add_SALES = 'false';
        window.USERACC_add_OTHER = 'false';
    }

    // get text of the additional filters field
    $("#USERACC_Filters_txt").val(function(){

        window.USERACC_add_filters_txt = $(this).val();

    });

    // get text of the Special Instructions field
    $("#USERACC_spclinstruct").val(function(){

        window.USERACC_add_spclinstruct_txt = $(this).val();

    });



    //populate JSON file to hold window vars
    window.dwVars.push({RecordType:'USERACC',Field:'ADD_RAZOR',Value: window.USERACC_add_Razor});
    window.dwVars.push({RecordType:'USERACC',Field:'ADD_iRAZOR',Value: window.USERACC_add_iRazor});
    window.dwVars.push({RecordType:'USERACC',Field:'ADD_oRAZOR',Value: window.USERACC_add_oRazor});
    window.dwVars.push({RecordType:'USERACC',Field:'ADD_PO',Value: window.USERACC_add_PO});
    window.dwVars.push({RecordType:'USERACC',Field:'ADD_SALES',Value: window.USERACC_add_SALES});
    window.dwVars.push({RecordType:'USERACC',Field:'ADD_OTHER',Value: window.USERACC_add_OTHER});
    window.dwVars.push({RecordType:'USERACC',Field:'ADD_FILTERS_TXT',Value: window.USERACC_add_filters_txt});
    window.dwVars.push({RecordType:'USERACC',Field:'ADD_SPCLINS_TXT',Value: window.USERACC_add_spclinstruct_txt});

    //console.log(document.getElementById('USERACC_Options-0').checked);

}

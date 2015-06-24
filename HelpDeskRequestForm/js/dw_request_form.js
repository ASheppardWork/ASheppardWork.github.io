
//set window vars that wb globally used to blank at window open ------------------------------------------------------------------
$( document ).ready(

    window.jobTitle = '',
    window.dwVars = [],
    window.addReptCount = 0,

  // keep add report button from reloading the page
  $("#btnAddRept").click(function(e) {
          e.preventDefault()
      }) ,

  // keep next button from reloading the page
  $("#btnNext").click(function(f) {
          f.preventDefault()
      }) ,

  // keep cancel-main button from reloading the page
  $("#btnCancel-main").click(function(f) {
          f.preventDefault()
      }) ,

  // keep cancel-submit button from reloading the page
  $("#btnCancel-submit").click(function(f) {
          f.preventDefault()
      })

);

/*
Job Title Abbreviations:
ISR
OSR
CSR
SLSSPRT
BRADMN
ABMGR
BMGR
RM
VP
SVP
OTHER

*/



//brings the app back to the main page without loosing any entry data (link on services section) ------------------------------------------------------------------

function backToMain() {
    document.getElementById('main-content').style.display = "block";
    document.getElementById('Service-Forms-Main').style.display = "none";
    document.getElementById('Submit_Svc').style.display = "none";
}



//brings up the services section ------------------------------------------------------------------

function showServices() {
    // get state of checkbox
    var x = document.getElementById('ServicesRequested-0').checked;
    var y = document.getElementById('ServicesRequested-1').checked;
    var z = document.getElementById('ServicesRequested-2').checked;
    var aa = document.getElementById('ServicesRequested-3').checked;

    var checkCount = new Array(x,y,z,aa);

    // test if something is checked
    if ($.inArray(true,checkCount) != -1)
    {

        // if sched report is checked than show it
        if ( x == true){
       // resetReportDefaults();
        document.getElementById('SCHDRPT_Form').style.display = "block";
        document.getElementById('Service-Forms-Main').style.display = "block";
        document.getElementById('backToMain').style.display = "block";
        document.getElementById('Submit_Svc').style.display = "block";

        getReportDefaults();

        } else {
        document.getElementById('SCHDRPT_Form').style.display = "none";
        }

        // if user access is checked than show it
        if (y == true){
        document.getElementById('USERACC_Form').style.display = "block";
        document.getElementById('Service-Forms-Main').style.display = "block";
        document.getElementById('backToMain').style.display = "block";
        document.getElementById('Submit_Svc').style.display = "block";

        } else {
        document.getElementById('USERACC_Form').style.display = "none";
        }

        // if dashboard access is checked than show it
        if (z == true){
        document.getElementById('DASHACC_Form').style.display = "block";
        document.getElementById('Service-Forms-Main').style.display = "block";
        document.getElementById('backToMain').style.display = "block";
        document.getElementById('Submit_Svc').style.display = "block";

        } else {
        document.getElementById('DASHACC_Form').style.display = "none";
        }

        // if usage report request is checked than show it
        if (aa == true){
        document.getElementById('USAGREPT_Form').style.display = "block";
        document.getElementById('Service-Forms-Main').style.display = "block";
        document.getElementById('backToMain').style.display = "block";
        document.getElementById('Submit_Svc').style.display = "block";

        } else {
        document.getElementById('USAGREPT_Form').style.display = "none";
        }

        showhide('main-content');
        formHideError(6);

    } else {


        formShowError(6);

    }


    if ($('#FirstName').val().length <= 0){

        formShowError(1);


    } else { formHideError(1);  }

    if ($('#LastName').val().length <= 0){

        formShowError(2);

    } else { formHideError(2);  }

    if ($('#Email').val().length <= 0){

        formShowError(3);

    }  else { formHideError(3);  }

    if ($('#UserPhone').val().length <= 11){

        formShowError(4);

    } else { formHideError(4);  }

    if ($('#UserJobTitle').val() == "-"){

        formShowError(5);

    } else { formHideError(5);  }





    /*console.log("sched report status:");
    console.log(document.getElementById('ServicesRequested-0').checked);
    console.log("user access status:");
    console.log(document.getElementById('ServicesRequested-1').checked);*/
    //console.log(window.jobTitle);
}

// cancels any checked service and clears out their variables ------------------------------------------------------------------

function cancelServices() {
    // get state of checkbox
    var x = document.getElementById('ServicesRequested-0').checked;
    var y = document.getElementById('ServicesRequested-1').checked;
    var z = document.getElementById('ServicesRequested-2').checked;
    var aa = document.getElementById('ServicesRequested-3').checked;

    var checkCount = new Array(x,y,z,aa);

    // test if something is checked
    if ($.inArray(true,checkCount) != -1)
    {

        // if sched report is checked than uncheck it
        if ( x == true){
            document.getElementById('ServicesRequested-0').checked = false;
           // $('select[name=SCHDRPT_name]').val(1);
           // $('#SCHDRPT_name').select('refresh');

        }

        // if user access is checked than uncheck it
        if (y == true){
            document.getElementById('ServicesRequested-1').checked = false;
        }

        // if dashboard access is checked than uncheck it
        if (z == true){
            document.getElementById('ServicesRequested-2').checked = false;
        }

        // if usage report request is checked than uncheck it
        if (aa == true){
            document.getElementById('ServicesRequested-3').checked = false;
        }


    }
  /*  console.log("sched report status:");
    console.log(document.getElementById('ServicesRequested-0').checked);
    console.log("user access status:");
    console.log(document.getElementById('ServicesRequested-1').checked);*/
}

// changes the display state of a element from what it is currently set to its opposite (block/none) ------------------------------------------------------------------

var divState= {};

function showhide(id) {
    if(document.getElementById) {
        var divid = document.getElementById(id);
        divState[id] = (divState[id]) ? false : true;
        //close others
        for (var div in divState){
            if (divState[div] && div != id){
                document.getElementById(div).style.display = 'none';
                divState[div] = false;

            }
        }
        divid.style.display = (divid.style.display == 'none' ? 'block' : 'none');
    }

    //console.log(divState[id]);
    //console.log(divid);
}





function formShowError(validationCode){

    switch(validationCode){

    case 1:
       // alert("Please give a First name ");
        document.getElementById('firstNameWarning').style.display = "block";
        backToMain();
        break;
    case 2:
        // alert("Please give a Last name ");
        document.getElementById('lastNameWarning').style.display = "block";
        backToMain();
        break;
    case 3:
        //alert("Please give a Email ");
        document.getElementById('emailWarning').style.display = "block";
        backToMain();
        break;
    case 4:
        //alert("Please give a Phone Number with area code i.e. 505-111-5555 ");
         document.getElementById('phoneWarning').style.display = "block";
        backToMain();
        break;

    case 5:
        //alert("You MUST select a job title, if you don't see yours, use 'Other' ");
        document.getElementById('jobTitleWarning').style.display = "block";
        backToMain();
        break;

    case 6:
        //alert("Please select at least 1 service ");
        document.getElementById('servicesWarning').style.display = "block";
        break;

    case 7:
        document.getElementById('ISR_Number_Warning').style.display = "block";
        break;

    case 8:
        document.getElementById('ISR_ManagerName_Warning').style.display = "block";
        break;

    case 9:
        document.getElementById('ISR_Branch_Warning').style.display = "block";
        break;

    case 10:
        document.getElementById('ISR_Approver_Warning').style.display = "block";
        break;

    default:
        //console.log("form, ok");

    }



}

function formHideError(validationCode){

    switch(validationCode){

    case 1:
       // alert("Please give a First name ");
        document.getElementById('firstNameWarning').style.display = "none";
      //  backToMain();
        break;
    case 2:
        // alert("Please give a Last name ");
        document.getElementById('lastNameWarning').style.display = "none";
      //  backToMain();
        break;
    case 3:
        //alert("Please give a Email ");
        document.getElementById('emailWarning').style.display = "none";
       // backToMain();
        break;
    case 4:
        //alert("Please give a Phone Number with area code i.e. 505-111-5555 ");
         document.getElementById('phoneWarning').style.display = "none";
       // backToMain();
        break;

    case 5:
        //alert("You MUST select a job title, if you don't see yours, use 'Other' ");
        document.getElementById('jobTitleWarning').style.display = "none";
       // backToMain();
        break;

    case 6:
        //alert("Please select at least 1 service ");
        document.getElementById('servicesWarning').style.display = "none";
        break;

    case 7:
        document.getElementById('ISR_Number_Warning').style.display = "none";

    case 8:
        document.getElementById('ISR_ManagerName_Warning').style.display = "none";
        break;

    case 9:
        document.getElementById('ISR_Branch_Warning').style.display = "none";

    case 10:
        document.getElementById('ISR_Approver_Warning').style.display = "none";
        break;

    default:
       // console.log("form, ok");

    }



}


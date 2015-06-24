function getReportDefaults(){

    if(window.jobTitle == "ISR"){
    $( "#SCHDRPT_profiles" ).load( "resources/ISR_SchedRept_Profile.html");
    } else if (window.jobTitle == "OSR"){
    $( "#SCHDRPT_profiles" ).load( "resources/OSR_SchedRept_Profile.html");
    } else if (window.jobTitle == "CSR"){
    $( "#SCHDRPT_profiles" ).load( "resources/CSR_SchedRept_Profile.html");
    } else if (window.jobTitle == "SLSSPRT"){
    $( "#SCHDRPT_profiles" ).load( "resources/SLSSPRT_SchedRept_Profile.html");
    } else if (window.jobTitle == "BRADMIN"){
    $( "#SCHDRPT_profiles" ).load( "resources/BRADMIN_SchedRept_Profile.html");
    }  else if (window.jobTitle == "ABMGR"){
    $( "#SCHDRPT_profiles" ).load( "resources/ABMGR_SchedRept_Profile.html");
    } else if (window.jobTitle == "BMGR"){
    $( "#SCHDRPT_profiles" ).load( "resources/BMGR_SchedRept_Profile.html");
    } else if (window.jobTitle == "RM"){
    $( "#SCHDRPT_profiles" ).load( "resources/RM_SchedRept_Profile.html");
    } else if (window.jobTitle == "VP"){
    $( "#SCHDRPT_profiles" ).load( "resources/VP_SchedRept_Profile.html");
    } else if (window.jobTitle == "SVP"){
    $( "#SCHDRPT_profiles" ).load( "resources/SVP_SchedRept_Profile.html");
    } else {
    $( "#SCHDRPT_profiles" ).load( "resources/Default_SchedRept_Profile.html");
    }

}







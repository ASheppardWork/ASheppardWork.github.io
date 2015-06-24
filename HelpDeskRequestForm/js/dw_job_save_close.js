// Save and Close the various modal for job titles ------------------------------------------------------------------

//Close ISR modal and set NewValue value
$("#ISR_close").click(function(){
    $("#ISR_Number").val('');
    $("#ISR_ManagerName").val('');
    $("#ISR_Branch").val('');
     $("#ISR_Approver").val('');
});

//Save and Close ISR modal and set NewValue value

$("#ISR_save").click(function(){

    var needsInfo = 'false';
    //console.log(needsInfo);


    $("#ISR_Number").val(function () {
    window.ISR_Numb = $(this).val();

    if(window.ISR_Numb.length == 0){
        needsInfo = 'true';
        formShowError(7);
    } else {formHideError(7)}

    //console.log(needsInfo);
    // console.log('ISRNumb:'+window.ISRNumb);
    });

    $("#ISR_ManagerName").val(function(){
    window.ISR_Mgr = $(this).val();

    if(window.ISR_Mgr.length == 0){
        needsInfo = 'true';
        formShowError(8);
    } else {formHideError(8)}

    // console.log('ISRMgr:'+window.ISRMgr);
    });

    $("#ISR_Branch").val(function(){
        window.ISR_Brnch = $(this).val();

    if(window.ISR_Brnch.length == 0){
        needsInfo = 'true';
        formShowError(9);
    } else {formHideError(9)}


    // console.log('ISRBrnch:'+window.ISRBrnch);
    });

     $("#ISR_Approver").val(function(){
         window.ISR_Appr = $(this).val();

    if(window.ISR_Appr.length == 0){
        needsInfo = 'true';
        formShowError(10);
    } else {formHideError(10)}


     // console.log('ISRAppr:'+window.ISRAppr);
     });

    if(needsInfo == 'false'){


    $('#ISR_Modal').modal('hide');

    //populate JSON file to hold window vars

    window.dwVars.push({RecordType:'ISR',Field:'ISR_Numb',Value: window.ISR_Numb});
    window.dwVars.push({RecordType:'ISR',Field:'ISR_Mgr',Value: window.ISR_Mgr});
    window.dwVars.push({RecordType:'ISR',Field:'ISR_Brnch',Value: window.ISR_Brnch});
    window.dwVars.push({RecordType:'ISR',Field:'ISR_Appr',Value: window.ISR_Appr});
    //window.dwVars.push({RecordType:'ISR',Field:'jobTitle',Value: window.jobTitle});
    } else {

   // alert("Please complete the form");

    }

});


//Close OSR modal and set NewValue value
$("#OSR_close").click(function(){
    $("#OSR_Number").val('');
    $("#OSR_ManagerName").val('');
    $("#OSR_Branch").val('');
    $("#OSR_Approver").val('');
});

//Save and Close OSR modal and set NewValue value

$("#OSR_save").click(function(){

    $("#OSR_Number").val(function () {
    window.OSR_Numb = $(this).val();
    // console.log('OSRNumb:'+window.OSRNumb);
    });

    $("#OSR_ManagerName").val(function(){
    window.OSR_Mgr = $(this).val();
    // console.log('OSRMgr:'+window.OSRMgr);
    });

    $("#OSR_Branch").val(function(){
        window.OSR_Brnch = $(this).val();
    // console.log('OSRBrnch:'+window.OSRBrnch);
    });

     $("#OSR_Approver").val(function(){
         window.OSR_Appr = $(this).val();
     // console.log('OSRAppr:'+window.OSRAppr);
     });

    $('#OSR_Modal').modal('hide');

});

//Close CSR modal and set NewValue value
$("#CSR_close").click(function(){
    $("#CSR_Number").val('');
    $("#CSR_ManagerName").val('');
    $("#CSR_Branch").val('');
     $("#CSR_Approver").val('');
});

//Save and Close CSR modal and set NewValue value

$("#CSR_save").click(function(){

    $("#CSR_Number").val(function () {
    window.CSR_Numb = $(this).val();
    // console.log('CSRNumb:'+window.CSRNumb);
    });

    $("#CSRManagerName").val(function(){
    window.CSRMgr = $(this).val();
    // console.log('CSRMgr:'+window.CSRMgr);
    });

    $("#CSR_Branch").val(function(){
        window.CSR_Brnch = $(this).val();
    // console.log('CSRBrnch:'+window.CSRBrnch);
    });

     $("#CSR_Approver").val(function(){
         window.CSR_Appr = $(this).val();
     // console.log('CSRAppr:'+window.CSRAppr);
     });

    $('#CSR_Modal').modal('hide');

});

//Close Sales Support Specialist modal and set NewValue value
$("#SLSSPRT_close").click(function(){
    $("#SLSSPRT_Number").val('');
    $("#SLSSPRT_ManagerName").val('');
    $("#SLSSPRT_Branch").val('');
     $("#SLSSPRT_Approver").val('');
});

//Save and Close Sales Support Specialist modal and set NewValue value

$("#SLSSPRT_save").click(function(){

    $("#SLSSPRT_Number").val(function () {
    window.SLSSPRT_Numb = $(this).val();
    // console.log('SLSSPRTNumb:'+window.SLSSPRTNumb);
    });

    $("#SLSSPRT_ManagerName").val(function(){
    window.SLSSPRT_Mgr = $(this).val();
    // console.log('SLSSPRTMgr:'+window.SLSSPRTMgr);
    });

    $("#SLSSPRT_Branch").val(function(){
        window.SLSSPRT_Brnch = $(this).val();
    // console.log('SLSSPRTBrnch:'+window.SLSSPRTBrnch);
    });

     $("#SLSSPRT_Approver").val(function(){
         window.SLSSPRT_Appr = $(this).val();
     // console.log('SLSSPRTAppr:'+window.SLSSPRTAppr);
     });

    $('#SLSSPRT_Modal').modal('hide');

});

//Close Branch Admin. modal and set NewValue value
$("#BRADMN_close").click(function(){
    $("#BRADMN_Number").val('');
    $("#BRADMN_ManagerName").val('');
    $("#BRADMN_Branch").val('');
    $("#BRADMN_Approver").val('');
});

//Save and Close Branch Admin. modal and set NewValue value

$("#BRADMN_save").click(function(){

    $("#BRADMN_Number").val(function () {
    window.BRADMN_Numb = $(this).val();
    // console.log('BRADMNNumb:'+window.BRADMNNumb);
    });

    $("#BRADMN_ManagerName").val(function(){
    window.BRADMN_Mgr = $(this).val();
    // console.log('BRADMNMgr:'+window.BRADMNMgr);
    });

    $("#BRADMN_Branch").val(function(){
        window.BRADMN_Brnch = $(this).val();
    // console.log('BRADMNBrnch:'+window.BRADMNBrnch);
    });

     $("#BRADMN_Approver").val(function(){
         window.BRADMN_Appr = $(this).val();
     // console.log('BRADMNAppr:'+window.BRADMNAppr);
     });

    $('#BRADMN_Modal').modal('hide');

});

//Close Asst. Branch Mgr. modal and set NewValue value
$("#ABMGR_close").click(function(){
    $("#ABMGR_Number").val('');
    $("#ABMGR_ManagerName").val('');
    $("#ABMGR_Branch").val('');
     $("#ABMGR_Approver").val('');
});

//Save and Close Asst. Branch Mgr. modal and set NewValue value

$("#ABMGR_save").click(function(){

    $("#ABMGR_Number").val(function () {
    window.ABMGR_Numb = $(this).val();
    // console.log('ABMGR_Numb:'+window.ABMGR_Numb);
    });

    $("#ABMGR_ManagerName").val(function(){
    window.ABMGR_Mgr = $(this).val();
    // console.log('ABMGR_Mgr:'+window.ABMGR_Mgr);
    });

    $("#ABMGR_Branch").val(function(){
        window.ABMGR_Brnch = $(this).val();
    // console.log('ABMGR_Brnch:'+window.ABMGR_Brnch);
    });

     $("#ABMGR_Approver").val(function(){
         window.ABMGR_Appr = $(this).val();
     // console.log('ABMGR_Appr:'+window.ABMGR_Appr);
     });

    $('#ABMGR_Modal').modal('hide');

});


//Close Branch Mgr. modal and set NewValue value
$("#BMGR_close").click(function(){
    $("#BMGR_Number").val('');
    $("#BMGR_ManagerName").val('');
    $("#BMGR_Branch").val('');
     $("#BMGR_Approver").val('');
});

//Save and CloseBranch Mgr. modal and set NewValue value

$("#BMGR_save").click(function(){

    $("#BMGR_Number").val(function () {
    window.BMGR_Numb = $(this).val();
    // console.log('BMGR_Numb:'+window.BMGR_Numb);
    });

    $("#BMGR_ManagerName").val(function(){
    window.BMGR_Mgr = $(this).val();
    // console.log('BMGR_Mgr:'+window.BMGR_Mgr);
    });

    $("#BMGR_Branch").val(function(){
        window.BMGR_Brnch = $(this).val();
    // console.log('BMGR_Brnch:'+window.BMGR_Brnch);
    });

     $("#BMGR_Approver").val(function(){
         window.BMGR_Appr = $(this).val();
     // console.log('BMGR_Appr:'+window.BMGR_Appr);
     });

    $('#BMGR_Modal').modal('hide');

});

//Close Regional Mgr. modal and set NewValue value
$("#RM_close").click(function(){
    $("#RM_Number").val('');
    $("#RM_ManagerName").val('');
    $("#RM_Branch").val('');
     $("#RM_Approver").val('');
});

//Save and Close Regional Mgr. modal and set NewValue value

$("#RM_save").click(function(){

    $("#RM_Number").val(function () {
    window.RM_Numb = $(this).val();
    // console.log('RM_Numb:'+window.RM_Numb);
    });

    $("#RM_ManagerName").val(function(){
    window.RM_Mgr = $(this).val();
    // console.log('RM_Mgr:'+window.RM_Mgr);
    });

    $("#RM_Branch").val(function(){
        window.RM_Brnch = $(this).val();
    // console.log('RM_Brnch:'+window.RM_Brnch);
    });

     $("#RM_Approver").val(function(){
         window.RM_Appr = $(this).val();
     // console.log('RM_Appr:'+window.RM_Appr);
     });

    $('#RM_Modal').modal('hide');

});

//Close VP modal and set NewValue value
$("#VP_close").click(function(){
    $("#VP_Number").val('');
    $("#VP_ManagerName").val('');
    $("#VP_Branch").val('');
     $("#VP_Approver").val('');
});

//Save and Close VP modal and set NewValue value

$("#VP_save").click(function(){

    $("#VP_Number").val(function () {
    window.VP_Numb = $(this).val();
    // console.log('VP_Numb:'+window.VP_Numb);
    });

    $("#VP_ManagerName").val(function(){
    window.VP_Mgr = $(this).val();
    // console.log('VP_Mgr:'+window.VP_Mgr);
    });

    $("#VP_Branch").val(function(){
        window.VP_Brnch = $(this).val();
    // console.log('VP_Brnch:'+window.VP_Brnch);
    });

     $("#VP_Approver").val(function(){
         window.VP_Appr = $(this).val();
     // console.log('VP_Appr:'+window.VP_Appr);
     });

    $('#VP_Modal').modal('hide');

});

//Close SVP modal and set NewValue value
$("#SVP_close").click(function(){
    $("#SVP_Number").val('');
    $("#SVP_ManagerName").val('');
    $("#SVP_Branch").val('');
     $("#SVP_Approver").val('');
});

//Save and Close SVP modal and set NewValue value

$("#SVP_save").click(function(){

    $("#SVP_Number").val(function () {
    window.SVP_Numb = $(this).val();
    // console.log('SVP_Numb:'+window.SVP_Numb);
    });

    $("#SVP_ManagerName").val(function(){
    window.SVP_Mgr = $(this).val();
    // console.log('SVP_Mgr:'+window.SVP_Mgr);
    });

    $("#SVP_Branch").val(function(){
        window.SVP_Brnch = $(this).val();
    // console.log('SVP_Brnch:'+window.SVP_Brnch);
    });

     $("#SVP_Approver").val(function(){
         window.SVP_Appr = $(this).val();
     // console.log('SVP_Appr:'+window.SVP_Appr);
     });

    $('#SVP_Modal').modal('hide');

});

//Close OTHER modal and set NewValue value
$("#OTHER_close").click(function(){
    $("#OTHER_Number").val('');
    $("#OTHER_ManagerName").val('');
    $("#OTHER_Branch").val('');
     $("#OTHER_Approver").val('');
});

//Save and Close OTHER modal and set NewValue value

$("#OTHER_save").click(function(){

    $("#OTHER_Number").val(function () {
    window.OTHER_Numb = $(this).val();
    // console.log('OTHER_Numb:'+window.OTHER_Numb);
    });

    $("#OTHER_ManagerName").val(function(){
    window.OTHER_Mgr = $(this).val();
    // console.log('OTHER_Mgr:'+window.OTHER_Mgr);
    });

    $("#OTHER_Branch").val(function(){
        window.OTHER_Brnch = $(this).val();
    // console.log('OTHER_Brnch:'+window.OTHER_Brnch);
    });

     $("#OTHER_Approver").val(function(){
         window.OTHER_Appr = $(this).val();
     // console.log('OTHER_Appr:'+window.OTHER_Appr);
     });

    $('#OTHER_Modal').modal('hide');

});


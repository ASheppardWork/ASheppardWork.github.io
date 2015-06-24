//show modal based on job title ------------------------------------------------------------------
$("#UserJobTitle").change(function () {


    selection = $(this).val();

    //inside sales rep
    if (selection == "ISR") {
        $("#ISR_Modal").modal('show');
        $("#ISR_Number").val(window.ISR_Numb);
        $("#ISR_ManagerName").val(window.ISR_Mgr);
        $("#ISR_Branch").val(window.ISR_Brnch);
        $("#ISR_Approver").val(window.ISR_Appr);
            window.jobTitle = 'ISR';

    //oustide sales rep
    } else if (selection == "OSR") {
        $("#OSR_Modal").modal('show');
        $("#OSR_Number").val(window.OSR_Numb);
        $("#OSR_ManagerName").val(window.OSR_Mgr);
        $("#OSR_Branch").val(window.OSR_Brnch);
        $("#OSR_Approver").val(window.OSR_Appr);
             window.jobTitle = 'OSR';

    //counter sales rep
    } else if (selection == "CSR") {
        $("#CSR_Modal").modal('show');
        $("#CSR_Number").val(window.CSR_Numb);
        $("#CSR_ManagerName").val(window.CSR_Mgr);
        $("#CSR_Branch").val(window.CSR_Brnch);
        $("#CSR_Approver").val(window.CSR_Appr);
            window.jobTitle = 'CSR';

    //sales support specialst
    } else if (selection == "SLSSPRT") {
        $("#SLSSPRT_Modal").modal('show');
        $("#SLSSPRT_Number").val(window.SLSSPRT_Numb);
        $("#SLSSPRT_ManagerName").val(window.SLSSPRT_Mgr);
        $("#SLSSPRT_Branch").val(window.SLSSPRT_Brnch);
        $("#SLSSPRT_Approver").val(window.SLSSPRT_Appr);
            window.jobTitle = 'SLSSPRT';

    //Branch Admin.
    } else if (selection == "BRADMN") {
        $("#BRADMN_Modal").modal('show');
        $("#BRADMN_Number").val(window.BRADMN_Numb);
        $("#BRADMN_ManagerName").val(window.BRADMN_Mgr);
        $("#BRADMN_Branch").val(window.BRADMN_Brnch);
        $("#BRADMN_Approver").val(window.BRADMN_Appr);
            window.jobTitle = 'BRADMN';

    //Asst. Branch Mgr.
    } else if (selection == "ABMGR") {
        $("#ABMGR_Modal").modal('show');
        $("#ABMGR_Number").val(window.ABMGR_Numb);
        $("#ABMGR_ManagerName").val(window.ABMGR_Mgr);
        $("#ABMGR_Branch").val(window.ABMGR_Brnch);
        $("#ABMGR_Approver").val(window.ABMGR_Appr);
            window.jobTitle = 'ABMGR';


    //Branch Mgr.
    } else if (selection == "BMGR") {
        $("#BMGR_Modal").modal('show');
        $("#BMGR_Number").val(window.BMGR_Numb);
        $("#BMGR_ManagerName").val(window.BMGR_Mgr);
        $("#BMGR_Branch").val(window.BMGR_Brnch);
        $("#BMGR_Approver").val(window.BMGR_Appr);
            window.jobTitle = 'BMGR';


    //Regional Mgr.
    } else if (selection == "RM") {
        $("#RM_Modal").modal('show');
        $("#RM_Number").val(window.RM_Numb);
        $("#RM_ManagerName").val(window.RM_Mgr);
        $("#RM_Branch").val(window.RM_Brnch);
        $("#RM_Approver").val(window.RM_Appr);
            window.jobTitle = 'RM';


    //VP
    } else if (selection == "VP") {
        $("#VP_Modal").modal('show');
        $("#VP_Number").val(window.VP_Numb);
        $("#VP_ManagerName").val(window.VP_Mgr);
        $("#VP_Branch").val(window.VP_Brnch);
        $("#VP_Approver").val(window.VP_Appr);
            window.jobTitle = 'VP';


    //Senior VP
    } else if (selection == "SVP") {
        $("#SVP_Modal").modal('show');
        $("#SVP_Number").val(window.SVP_Numb);
        $("#SVP_ManagerName").val(window.SVP_Mgr);
        $("#SVP_Branch").val(window.SVP_Brnch);
        $("#SVP_Approver").val(window.SVP_Appr);
            window.jobTitle = 'SVP';


    //Other
    } else if (selection == "OTHER") {
        $("#OTHER_Modal").modal('show');
        $("#OTHER_Number").val(window.OTHER_Numb);
        $("#OTHER_ManagerName").val(window.OTHER_Mgr);
        $("#OTHER_Branch").val(window.OTHER_Brnch);
        $("#OTHER_Approver").val(window.OTHER_Appr);
            window.jobTitle = 'OTHER';
    };


   // console.log(window.jobTitle);
   // console.log(window.ISR_Numb);
});

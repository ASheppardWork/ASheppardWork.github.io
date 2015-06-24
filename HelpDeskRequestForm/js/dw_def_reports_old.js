function getReportDefaults(){

    //console.log(window.jobTitle);

if( window.jobTitle == "ISR"){

        //setup ISR default reports profile
        /*
        ISR Default Reports:
        Shipped Not Billed
        Shipped Not Billed > 30
        Open Orders
        Allocated Not Shipped
        */
        /*
        frequency values:
        1-Daily, 2-Monthly, 3-Quarterly, 4-Yearly
        format values:
        1-Excel, 2-PDF
        delivery method values:
        1-mf_download, 2-email

        */

        var isrReportDefaults = [
            {key:"report", reportName:"Shipped Not Billed", reportFreq:"1", reportFmt:"1",reportDel:"2"},
            {key:"report", reportName:"Shipped Not Billed > 30", reportFreq:"1", reportFmt:"1",reportDel:"2"},
            {key:"report", reportName:"Open Orders", reportFreq:"1", reportFmt:"1",reportDel:"2"},
            {key:"report", reportName:"Allocated Not Shipped", reportFreq:"1", reportFmt:"1",reportDel:"2"},
        ]

        //console.log(isrReportDefaults[0].reportName);
        //console.log(isrReportDefaults.length);

        window.ReportDefaultsLength = isrReportDefaults.length;

        //adding rows to scheduled report form based on job title

        for (i=0; i < isrReportDefaults.length; i++) {

        var temp = '<table><tbody><tr>';
        var close_temp = '</tr></tbody></table>';
        var temp_div = document.createElement('div');


        var html_to_insert = '<td><input id="SCHDRPT_DEF_name_'+i+'" name="SCHDRPT_DEF_name_'+i+'" class="form-control" disabled></td>'+
        '<td><select id="SCHDRPT_DEF_Frequency_'+i+'" name="SCHDRPT_DEF_Frequency_'+i+'" class="form-control" disabled><option value="1">Daily</option><option value="2">Monthly</option><option value="3">Quarterly</option><option value="4">Yearly</option></select></td>'+
        '<td><select id="SCHDRPT_DEF_format_'+i+'" name="SCHDRPT_DEF_format_'+i+'" class="form-control" disabled><option value="1">Excel</option><option value="2">PDF</option></select></td>'+
        '<td><select id="SCHDRPT_DEF_Delivery_'+i+'" name="SCHDRPT_DEF_Delivery_'+i+'" class="form-control" disabled><option value="1">mf_download</option><option value="2">email</option></select></td>';

        temp_div.innerHTML = temp + html_to_insert + close_temp;
        insertAfter(document.getElementById("SCHDRPT_HeaderRow"), temp_div.firstChild.firstChild.firstChild);

        temp_div.removeChild(temp_div.firstChild);


        function insertAfter(target, el) {
            if( !target.nextSibling )
                target.parentNode.appendChild( el );
            else
                target.parentNode.insertBefore( el, target.nextSibling );
        };

         //window.testReportName = 'testReport';

        $('#SCHDRPT_DEF_name_'+i+'').val(isrReportDefaults[i].reportName);
        $('#SCHDRPT_DEF_Frequency_'+i+'').val(isrReportDefaults[i].reportFreq);
        $('#SCHDRPT_DEF_format_'+i+'').val(isrReportDefaults[i].reportFmt);
        $('#SCHDRPT_DEF_Delivery_'+i+'').val(isrReportDefaults[i].reportDel);

        }

} else {


}


}


function resetReportDefaults(){
    try{
        if( window.ReportDefaultsLength != -1){
            for (z=0 ; z < window.ReportDefaultsLength; z++){

                var defReportName = document.getElementById('SCHDRPT_DEFdtl_name_'+z);
                defReportName.parentNode.removeChild(defReportName);

                var defReportFreq = document.getElementById('SCHDRPT_DEF_Frequency_'+z);
                defReportFreq.parentNode.removeChild(defReportFreq);

                var defReportFmt = document.getElementById('SCHDRPT_DEF_format_'+z);
                defReportFmt.parentNode.removeChild(defReportFmt);

                var defReportDel = document.getElementById('SCHDRPT_DEF_Delivery_'+z);
                defReportDel.parentNode.removeChild(defReportDel);

            }
        }

    } catch(err) {
        console.log(err.message);
    }

}







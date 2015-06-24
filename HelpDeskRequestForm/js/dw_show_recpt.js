// Start -- Receipt show/build ------------------------------------------------------------------

//show modal of Receipt
function showRECPT() {

     buildRECPT();

    $("#RECPT_Modal").modal('show');

    var jsonStr = JSON.stringify(window.dwVars);
    console.log(jsonStr);

}

// empty the json table to be ready for the next submission
function emptyRECPTjson(){

    window.dwVars.length = 0;
}

// empty the html table to be ready for the next submission
function resetRECPThtml(){
    $("#RECPT_DataTable").empty();
}

/*function sendEmailCopy(){

var recieptTable = JSON.stringify(window.dwVars);

console.log($("#RECPT_DataTable").val());

$.get('cfc/emailReciept.cfc?method=sendEmail&recieptBody='+$("#RECPT_DataTable").val()+'');

}*/




// Builds the HTML Table out of dwVars.
function buildRECPT() {
    var columns = addAllColumnHeaders(dwVars);

    for (var i = 0 ; i < window.dwVars.length ; i++) {
        var row$ = $('  <tr/>');
        for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
            var cellValue = window.dwVars[i][columns[colIndex]];

            if (cellValue == null) { cellValue = ""; }

            row$.append($('  <td/>').html(cellValue));

           // console.log(colIndex+' '+cellValue);
        }
        $("#RECPT_DataTable").append(row$);
    }

     /*sendEmailCopy();*/

}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records
function addAllColumnHeaders(dwVars)
{
    var columnSet = [];
    var headerTr$ = $('  <tr/>');

    for (var i = 0 ; i < window.dwVars.length ; i++) {
        var rowHash = window.dwVars[i];
        for (var key in rowHash) {
            if ($.inArray(key, columnSet) == -1){
                columnSet.push(key);
                headerTr$.append($('  <th/>').html(key));
            }
        }
    }
    $("#RECPT_DataTable").append(headerTr$);

    return columnSet;
}



// End -- Receipt show/build

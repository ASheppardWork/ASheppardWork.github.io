function addScheduledReports (){


/*
Bootstrap HAS to use the class "hidden" to show/hide elements within a form
if you use display:none; the labels will not align after the display is changed to block
addScheduledReports() does the work here. -- see notes below

$("#SCHDRPT_addtnl_"+c).removeClass('hidden');
*/


    if(window.addReptCount < 4){

        window.addReptCount = window.addReptCount + 1;

        var c =  window.addReptCount;
        if ( c <= 3) {
        //document.getElementById('SCHDRPT_addtnl_'+c).style.display = "block";
        $("#SCHDRPT_addtnl_"+c).removeClass('hidden');
        }

    } else {

        alert("You can only add 3 reports per request");

    }

}

function resetScheduledReports (){

    if(window.addReptCount > 0){

    for(i=window.addReptCount ; i > 0; i--){

        $("#SCHDRPT_addtnl_"+i).addClass('hidden');

        }

    }
	//reset addReptCount
	window.addReptCount = 0;
}




/*test save*/




/*
from: http://stackoverflow.com/questions/18568736/how-to-hide-element-using-twitter-bootstrap-3-and-show-it-using-jquery

First, don't use .hide! Use .hidden. As others have said, .hide deprecated,

.hide is available, but it does not always affect screen readers and is deprecated as of v3.0.1
Second, use jQuery's .toggleClass(), .addClass() and .removeClass()

<div id="myId" class="hidden">Foobar</div>
To show it: $("#myId").removeClass('hidden');
To hide it: $("#myId").addClass('hidden');
To toggle it: $("#myId").toggleClass('hidden');
Don't use the css class .show, it has a very small use case. The definitions of show, hidden and invisible are in the docs.

// Classes
.show {
  display: block !important;
}
.hidden {
  display: none !important;
  visibility: hidden !important;
}
.invisible {
  visibility: hidden;
}

*/

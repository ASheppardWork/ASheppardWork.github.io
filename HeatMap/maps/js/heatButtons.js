function addDataSet() {

var dataSourceCmb = document.getElementById("dataSourceCmb").value;

        /* permit Add --- Start */
        if(dataSourceCmb === "Permits") {

            if(typeof(PermitHeat)==="undefined" || PermitHeat.undefined===true)
            {
            PermitHeat = L.heatLayer(PermitsPoints,{maxZoom:13,radius:10,blur:5,gradient: {0.2: "#FF00FF",.4: "#00FFFF" , 0.6: "#00FF00", 0.8: "#FFFF00", 1.0: "#FF0000"} })
            .addTo(map), draw= true;
            }

			        }
        /* permit Add --- End */

        /* rig Add --- START */
        else if(dataSourceCmb === "Rigs") {
            if(typeof(RigHeat)==="undefined" || RigHeat.undefined===true) {
            RigHeat = L.heatLayer(RigsPoints,{maxZoom:13,radius:10,blur:5,gradient: {0.2: "#FF00FF",.4: "#00FFFF" , 0.6: "#00FF00", 0.8: "#FFFF00", 1.0: "#FF0000"} })
            .addTo(map), draw= true;
            }
			        }
        /* rig Add --- End */

        /* branch Add --- START */
        else if(dataSourceCmb === "Branches") {
            if(typeof(BranchHeat)==="undefined" || BranchHeat.undefined===true ){
            BranchHeat = L.heatLayer(BranchesPoints,{maxZoom:13,radius:10,blur:5,gradient: {0.2: "#FF00FF",.4: "#00FFFF" , 0.6: "#00FF00", 0.8: "#FFFF00", 1.0: "#FF0000"} })
            .addTo(map), draw= true;
            }
                      }
        /* branch Add --- End */


    var theCanvases = document.getElementsByTagName("canvas");

	/* setting canvas Ids */
	/*$(document.getElementsByTagName("canvas")).each(function(i,obj){*/

     for (var i=0; i < theCanvases.length; i++) {
       /* console.log("Type of attr id: " + typeof($(document.getElementsByTagName("canvas")).attr("id")) ); */

       /* var myCanvas = $(document.getElementsByTagName("canvas")); */

        var myCanvas = theCanvases[i];
        var attr = $(myCanvas).attr("id");


        setTimeout(function(){

       /* console.log( myCanvas );*/
        /* console.log( attr ); */

		if( typeof(attr) === "undefined") {

		/*console.log("this attr id: " + $(myCanvas).attr("id"));*/

			if(dataSourceCmb === "Permits") {
				$(myCanvas).attr("id","pCanvas");
			}
			else if(dataSourceCmb ==="Rigs") {
				$(myCanvas).attr("id","rCanvas");
			}
			else if(dataSourceCmb ==="Branches") {
				$(myCanvas).attr("id","bCanvas");
			}

		}


     },500)


     }






}

/*--- add data sets end ---*/

/*--- remove data sets start ---*/

function removeDataSet(){
var dataSourceCmb = document.getElementById("dataSourceCmb").value;

if(dataSourceCmb === "Permits") {
map.removeLayer(PermitHeat);
if(typeof(PermitHeat)!=="undefined"){
PermitHeat.undefined=true;
}
}
else if (dataSourceCmb === "Rigs"){
map.removeLayer(RigHeat);
if(typeof(RigHeat)!=="undefined"){
RigHeat.undefined=true;
}
}
else if (dataSourceCmb === "Branches"){
map.removeLayer(BranchHeat);
if(typeof(BranchHeat)!=="undefined"){
BranchHeat.undefined=true;
}
}


}

/*--- remove data sets end ---*/






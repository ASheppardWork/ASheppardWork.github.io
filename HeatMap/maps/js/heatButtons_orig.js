





/*--- add data sets start ---*/

function addDataSet() {

var dataSourceCmb = document.getElementById("dataSourceCmb").value;

        /* permit Add --- Start */
        if(dataSourceCmb === "Permits") {

            if(typeof(PermitHeat)==="undefined" || PermitHeat.undefined===true)
            {
            PermitHeat = L.heatLayer(PermitsPoints,{maxZoom:13,radius:10,blur:5,gradient: {0.2: "#FF00FF",.4: "#00FFFF" , 0.6: "#00FF00", 0.8: "#FFFF00", 1.0: "#FF0000"} })
            .addTo(map), draw= true;
            }

                $(document.getElementsByTagName("canvas")).each(function(i, obj){

                    console.log("Permit Canvas Before Add:  " + $(document.getElementsByTagName("canvas")).attr("id"));
                    console.log(typeof($(document.getElementsByTagName("canvas")).attr("id")) );
                    console.log($(document.getElementsByTagName("canvas")).attr("id") );

                    /*if ($(document.getElementsByTagName("canvas")).attr("id") !== "rCanvas" || $(document.getElementsByTagName("canvas")).attr("id") !== "bCanvas" || typeof($(document.getElementsByTagName("canvas")).attr("id"))==="undefined" ) {*/
                      if( typeof($(document.getElementsByTagName("canvas")).attr("id"))==="undefined" ) {
                        console.log($(this).attr("id"));

                        $(this).attr("id","pCanvas");

                     console.log("Permit Canvas After Add:  " + $(document.getElementsByTagName("canvas")).attr("id"));

                    }
                    else if($(document.getElementsByTagName("canvas")).attr("id").undefined==="undefined"){
                        $(this).attr("id","pCanvas");

                        console.log("Permit Canvas After Add:  " + $(document.getElementsByTagName("canvas")).attr("id"));

                    }

                })




        }
        /* permit Add --- End */

        /* rig Add --- START */
        else if(dataSourceCmb === "Rigs") {
            if(typeof(RigHeat)==="undefined" || RigHeat.undefined===true) {
            RigHeat = L.heatLayer(RigsPoints,{maxZoom:13,radius:10,blur:5,gradient: {0.2: "#FF00FF",.4: "#00FFFF" , 0.6: "#00FF00", 0.8: "#FFFF00", 1.0: "#FF0000"} })
            .addTo(map), draw= true;
            }

                 $(document.getElementsByTagName("canvas")).each(function(i, obj){

                console.log("Rig Canvas Before Add:  " + $(document.getElementsByTagName("canvas")).attr("id"));
               /* console.log(typeof($(document.getElementsByTagName("canvas")).attr("id")) );*/
                console.log($(document.getElementsByTagName("canvas")).attr("id") );

                /* if ($(document.getElementsByTagName("canvas")).attr("id") !== "pCanvas" || $(document.getElementsByTagName("canvas")).attr("id") !== "bCanvas" || typeof($(document.getElementsByTagName("canvas")).attr("id"))==="undefined") { */
                    if ( typeof($(document.getElementsByTagName("canvas")).attr("id"))==="undefined" ) {
                     console.log($(this).attr("id"));

                     $(this).attr("id","rCanvas");

                console.log("Rig Canvas After Add:  " + $(document.getElementsByTagName("canvas")).attr("id"));
                   /* console.log($(document.getElementsByTagName("canvas")).attr("id"));*/
                        }
                      else if($(document.getElementsByTagName("canvas")).attr("id").undefined==="undefined"){
                        $(this).attr("id","rCanvas");

                        console.log("Rig Canvas After Add:  " + $(document.getElementsByTagName("canvas")).attr("id"));
                    }

                    })



        }
        /* rig Add --- End */

        /* branch Add --- START */
        else if(dataSourceCmb === "Branches") {
            if(typeof(BranchHeat)==="undefined" || BranchHeat.undefined===true ){
            BranchHeat = L.heatLayer(BranchesPoints,{maxZoom:13,radius:10,blur:5,gradient: {0.2: "#FF00FF",.4: "#00FFFF" , 0.6: "#00FF00", 0.8: "#FFFF00", 1.0: "#FF0000"} })
            .addTo(map), draw= true;
            }

                 $(document.getElementsByTagName("canvas")).each(function(i, obj){

                console.log("Branch Canvas Before Add:  " + $(document.getElementsByTagName("canvas")).attr("id"));
              /*  console.log(typeof($(document.getElementsByTagName("canvas")).attr("id")) );*/
                console.log($(document.getElementsByTagName("canvas")).attr("id") );

                 /*if ($(document.getElementsByTagName("canvas")).attr("id") !== "rCanvas" || $(document.getElementsByTagName("canvas")).attr("id") !== "pCanvas" || typeof($(document.getElementsByTagName("canvas")).attr("id"))==="undefined") {*/
                    if ( typeof($(document.getElementsByTagName("canvas")).attr("id"))==="undefined" ) {
                     console.log($(this).attr("id"));

                     $(this).attr("id","bCanvas");

                console.log("Branch Canvas After Add:  " + $(document.getElementsByTagName("canvas")).attr("id"));
                   /* console.log($(document.getElementsByTagName("canvas")).attr("id"));*/
                        }
                     else if($(document.getElementsByTagName("canvas")).attr("id").undefined==="undefined"){
                        $(this).attr("id","bCanvas");

                         console.log("Branch Canvas After Add:  " + $(document.getElementsByTagName("canvas")).attr("id"));

                    }

                    })



         }
        /* branch Add --- End */


                        $(document.getElementsByTagName("canvas")).each(function(i, obj){

                        if ($(document.getElementsByTagName("canvas")).attr("id") != true) {
                            console.log("no canvas id set for canvas: "+i);
                                }
                        else {
                            console.log($(document.getElementsByTagName("canvas")).attr("id")+" canvas no: "+i);
                        }

                            })

                        console.log("pCanvas width: " + document.getElementById("pCanvas").width)
                        console.log("rCanvas width: " + document.getElementById("rCanvas").width)
                        console.log("bCanvas width: " + document.getElementById("bCanvas").width)


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

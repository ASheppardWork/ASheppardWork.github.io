
// Dimensions of sunburst.
var width = 750.5;
var height = 600;
var radius = Math.min(width, height) / 2;

var x = d3.scale.linear()
    .range([0, 2 * Math.PI]);

//scale.sqrt will make a larger center hole
var y = d3.scale.linear()
    .range([0, radius]);

// Breadcrumb dimensions: width, height, spacing, width of tip/tail.
var b = {
  w: 225, h: 30, s: 3, t: 10
};

// Mapping of step names to colors.
var colors = {
  
  "2014": "#00A300",
  "2015": "#cb4b16",
  "2013": "#10A8C6",
  "Oil": "#394446",
  "Gas": "#E0A81E",
  "Misc": "#9467bd",
  "root" : "#8A9293"
   
};


// Total size of all segments; we set this later, after loading the data.
var totalSize = 0; 

var vis = d3.select("#chart").append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .append("svg:g")
    .attr("id", "container")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
   



var partition = d3.layout.partition()
    //.sort(null)
    .value(function(d) { return d.size; });    

var arc = d3.svg.arc()

    .startAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x))); })
    .endAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx))); })
    .innerRadius(function(d) { return Math.max(0, y(d.y)); })
    //.outerRadius(function(d) { return Math.max(0, y(d.y + d.dy )); });
    
     .outerRadius( function(d) { return (d.depth == 3) ? (
         Math.max(0, y(d.y + d.dy + d.dy/450)) // controls width of row 3
        ) : (
          Math.max(0, y(d.y + d.dy)/ 1) 
        ) ;
      })
  


// Use d3.text and d3.csv.parseRows so that we do not need to have a header
// row, and can receive the csv as an array of arrays.
/*d3.text("USRigCountByBasin-data.txt", function(text) {
  var csv = d3.csv.parseRows(text);
  var json = buildHierarchy(csv);
  createVisualization(json);
});
*/

// Main function to draw and set up the visualization, once we have the data.
//function createVisualization(json) {

d3.json("data/USRigCountByBasin-data-new.txt", function(error, root) {
  // Basic setup of page elements.
  initializeBreadcrumbTrail();
  drawLegend();
  d3.select("#legend").style("visibility","");
  /*d3.select("#togglelegend").on("click", toggleLegend);*/

  // Bounding circle underneath the sunburst, to make it easier to detect
  // when the mouse leaves the parent g.
/*  vis.append("svg:circle")
      .attr("r", radius)
      .style("opacity", 0); */

    var g = vis.selectAll("g")
      .data(partition.nodes(root))
      .enter().append("g");



  var path = g.append("path")//vis.data([root]).selectAll("path")
      // For efficiency, filter nodes to keep only those large enough to see.
      .filter(function(d) {
      //return d.dx // 0.005 radians = 0.29 degrees  ;  .019 radians = 1.09 degrees
      return (d.dx > 0.009);
      })
      // d.depth of "null" is the center circle if you use null :"none" you won't be able to get it back to root level
      .attr("display", function(d) { return d.depth ? null : "fill"; })
      .attr("d", arc)
      //.attr("fill-rule", "evenodd")
      //.style("fill", function(d) { return (d.parent && d.depth > 1) ? ((d.depth == 2) ? d3.rgb(colors[d.parent.name]).brighter(0.4) : d3.rgb(colors[d.parent.parent.name]).brighter(0.8)) : colors[d.name]; })
      //.style("fill", function(d) { return (d.parent && d.depth > 2) ? ((d.depth == 3 && d.name != "Permian") ? d3.rgb(colors[d.parent.name]).brighter(0.4) : d3.rgb(colors[d.parent.parent.name]).brighter(0.8)) : colors[d.name]; })
      .style("fill", function(d) { return (d.parent && d.depth > 2) ? ((d.depth == 3) ? d3.rgb(colors[d.parent.name]).brighter(0.4) : d3.rgb(colors[d.parent.parent.name]).brighter(0.8)) : colors[d.name]; })
      .attr("fill", function (d) { return colors[d.name]; })
      .attr("fill-rule", "evenodd")
      .on("mouseover", mouseover)
      .on("click", click);

      

  // Add the mouseleave handler to the bounding circle.
  d3.select("#container").on("mouseleave", mouseleave);

  // Get total size of the tree = value of root node from partition.
  totalSize = path.node().__data__.value;

    
    var text = g.append("text")
    //var text = vis.append("text")
    .filter(function(d) {
      return (d.dx > 0.009); // 0.005 radians = 0.29 degrees  ;  .019 radians = 1.09 degrees
      }) 
    .attr("transform", function(d) { return "rotate(" + computeTextRotation(d) + ")"; })
    .attr("x", function(d) { return y(d.y); })
    .attr("dx", "4") // left - margin for text
    .attr("dy", ".25em") // vertical-align of text in cell
    .text(function(d) { return (d.name == 'root') ? ('') : d.name; })
    .attr("font-size", function(d) { return d.ci_type === 'type' ? 12 : 10}) //font-size of text
    //.attr("visibility",function(d) { return d.dx < 0.02? "hidden" : "visible"}) // hide text of labels of partitions less than 2%



  function click(d) {
    // fade out all text elements
    text.transition().attr("opacity", 0);
    path.transition()
      .duration(750)
      .attrTween("d", arcTween(d))
      .each("end", function(e, i) {
          // check if the animated element's data e lies within the visible angle span given in d
          if (e.x >= d.x && e.x < (d.x + d.dx)) {
            // get a selection of the associated text element
            var arcText = d3.select(this.parentNode).select("text");
            // fade in the text element and recalculate positions
            arcText.transition().duration(750)
              .attr("opacity", 1)
              .attr("transform", function() { return "rotate(" + computeTextRotation(e) + ")" })
              .attr("x", function(d) { return y(d.y); });
          }
      });
  }





 });

d3.select(self.frameElement).style("height", height + "px");
// Interpolate the scales!
function arcTween(d) {
  var xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
      yd = d3.interpolate(y.domain(), [d.y, 1]),
      yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius]);
  return function(d, i) {
    return i
        ? function(t) { return arc(d); }
        : function(t) { x.domain(xd(t)); y.domain(yd(t)).range(yr(t)); return arc(d); };
  };
}
function computeTextRotation(d) {
  return (x(d.x + d.dx / 2) - Math.PI / 2) / Math.PI * 180;
}




// Fade all but the current sequence, and show it in the breadcrumb trail.
function mouseover(d) {

  var percentage = (100 * d.value / totalSize).toPrecision(3);
  var percentageString = percentage + "%";
  if (percentage < 0.1) {
    percentageString = "< 0.1%";
  }

  
    
Number.prototype.formatMoney = function(c, d, t){ /*
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  */
return this
 };
    
  

  var rigsString = "" + d.value.formatMoney(2, '.', ',') + " rigs";
  if (d.value == 1) {
    rigsString = "1 total rigs";
  }

  d3.select("#percentage")
      .text(rigsString + " (" + percentageString + ") of Last Three Years US Rig Count - " + d.name); 

  d3.select("#explanation")
      .style("visibility", ""); 
    
  d3.select("#legendSubTitle")
      .style("visibility", "");

  d3.select("#logo")
      .transition()
      .duration(1000)
      .style("visibility", "");
    


  var sequenceArray = getAncestors(d);
  updateBreadcrumbs(sequenceArray, percentageString, rigsString);

  // Fade all the segments.
  d3.selectAll("path")
      .style("opacity", 0.3);

  // Then highlight only those that are an ancestor of the current segment.
  vis.selectAll("path")
      .filter(function(node) {
                return (sequenceArray.indexOf(node) >= 0);
              })
      .style("opacity", 1);
}


// Restore everything to full opacity when moving off the visualization.
function mouseleave(d) {

  // Hide the breadcrumb trail
  d3.select("#trail")
      .style("visibility", "hidden");
      //  .style("visibility", ""); //test to turn off visibility
        

  // Deactivate all segments during transition.
  d3.selectAll("path").on("mouseover", null);

  // Transition each segment to full opacity and then reactivate it.
  d3.selectAll("path")
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .each("end", function() {
              d3.select(this).on("mouseover", mouseover);
            });

  d3.select("#explanation")
      .transition()
      .duration(1000)
      .style("visibility", "hidden"); 
    
  d3.select("#legendSubTitle")
      .transition()
      .duration(1000)
      .style("visibility", "");

  d3.select("#logo")
      .style("visibility", ""); 
    
  
}



// Given a node in a partition layout, return an array of all of its ancestor
// nodes, highest first, but excluding the root.
function getAncestors(node) {
  var path = [];
  var current = node;
  while (current.parent) {
    path.unshift(current);
    current = current.parent;
  }
  return path;
}

function initializeBreadcrumbTrail() {
  // Add the svg area.
  var trail = d3.select("#sequence").append("svg:svg")
      .attr("width", width + "#endlabel".length + 45 )
      .attr("height", 50)
      .attr("id", "trail");
  // Add the label at the end, for the percentage.
  trail.append("svg:text")
    .attr("id", "endlabel")
    .style("fill", "#000");
}

// Generate a string that describes the points of a breadcrumb polygon.
function breadcrumbPoints(d, i) {
  var points = [];
  points.push("0,0");
  points.push(b.w + ",0");
  points.push(b.w + b.t + "," + (b.h / 2));
  points.push(b.w + "," + b.h);
  points.push("0," + b.h);
  if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
    points.push(b.t + "," + (b.h / 2));
  }
  return points.join(" ");
}

// Update the breadcrumb trail to show the current sequence and percentage.
function updateBreadcrumbs(nodeArray, percentageString, rigsString) {

  // Data join; key function combines name and depth (= position in sequence).
  var g = d3.select("#trail")
      .selectAll("g")
      .data(nodeArray, function(d) { return d.name + d.depth; });

  // Add breadcrumb and label for entering nodes.
  var entering = g.enter().append("svg:g");

  entering.append("svg:polygon")
      .attr("points", breadcrumbPoints)
     // .style("fill", function(d) { return (d.parent && d.depth > 1) ? ((d.depth == 2) ? d3.rgb(colors[d.parent.name]).brighter(0.4) : d3.rgb(colors[d.parent.parent.name]).brighter(0.8)) : colors[d.name]; });
     .attr("fill", function (d) {
        return colors[d.name];
      })
      //.style("fill", function(d) { return (d.parent && d.depth > 2) ? ((d.depth == 3 && d.name != "Permian") ? d3.rgb(colors[d.parent.name]).brighter(0.4) : d3.rgb(colors[d.parent.parent.name]).brighter(0.8)) : colors[d.name]; })
        .style("fill", function(d) { return (d.parent && d.depth > 2) ? ((d.depth == 3) ? d3.rgb(colors[d.parent.name]).brighter(0.4) : d3.rgb(colors[d.parent.parent.name]).brighter(0.8)) : colors[d.name]; })
  
  entering.append("svg:text")
      .attr("x", (b.w + b.t) / 2)
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.name;});

  // Set position for entering and updating nodes.
  g.attr("transform", function(d, i) {
    return "translate(" + i * (b.w + b.s) + ", 0)";
  });

  // Remove exiting nodes.
  g.exit().remove();

  // Now move and update the percentage at the end.
  d3.select("#trail").select("#endlabel")
      .attr("x", (nodeArray.length + .30 ) * (b.w + b.s))
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(rigsString);
  

  // Make the breadcrumb trail visible, if it's hidden.
  d3.select("#trail")
      .style("visibility", "");

}



function drawLegend() {

  // Dimensions of legend item: width, height, spacing, radius of rounded rect.
  var li = {
    w: 190, h: 30, s: 3, r: 3
  };

  var legend = d3.select("#legend").append("svg:svg")
      .attr("width", li.w)
      .attr("height", d3.keys(colors).length * (li.h + li.s));

  var g = legend.selectAll("g")
      .data(d3.entries(colors))
      .enter().append("svg:g")
      .attr("transform", function(d, i) {
              return "translate(0," + i * (li.h + li.s) + ")";
           });

  g.append("svg:rect")
      .attr("rx", li.r)
      .attr("ry", li.r)
      .attr("width", li.w)
      .attr("height", li.h)
      .style("fill", function(d) { return d.value; });
      

  g.append("svg:text")
      .attr("x", li.w / 2)
      .attr("y", li.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.key; })
      .style("fill", function(d) { return (d.key == 'root') ? "#8A9293" : "" ; }); //color 'root' in legend
}





/*

// Take a 2-column CSV and transform it into a hierarchical structure suitable
// for a partition layout. The first column is a sequence of step names, from
// root to leaf, separated by hyphens. The second column is a count of how 
// often that sequence occurred.
function buildHierarchy(csv) {
  var root = {"name": "root", "children": []};
  for (var i = 0; i < csv.length; i++) {
    var sequence = csv[i][0];
    var size = +csv[i][1];
    if (isNaN(size)) { // e.g. if this is a header row
      continue;
    }
    var parts = sequence.split("|");
    var currentNode = root;
    for (var j = 0; j < parts.length; j++) {
      var children = currentNode["children"];
      var nodeName = parts[j];
      var childNode;
      if (j + 1 < parts.length) {
   // Not yet at the end of the sequence; move down the tree.
    var foundChild = false;
    for (var k = 0; k < children.length; k++) {
      if (children[k]["name"] == nodeName) {
        childNode = children[k];
        foundChild = true;
        break;
      }
    }
  // If we don't already have a child node for this branch, create it.
    if (!foundChild) {
      childNode = {"name": nodeName, "children": []};
      children.push(childNode);
    }
    currentNode = childNode;
      } else {
    // Reached the end of the sequence; create a leaf node.
    childNode = {"name": nodeName, "size": size};
    children.push(childNode);
      }
    }
  }
    
  return root;
};

*/








































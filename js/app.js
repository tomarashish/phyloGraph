//parent and current node array for all data
var currentDataNode = [];
//Array for chart div element
var current_breadcrumbs;

function init() {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $('#return-to-top').fadeIn(200);
    } else {
      $('#return-to-top').fadeOut(200);
    }
  });
  $('#return-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
  });


  //Adding charts on created div elements
  // createChartOnDiv();

  nexusMatrix();
  // dendrogram();
  //radialDendrogram();
} //end of init()


function linkWeight() {

  d3.text("data/test1.txt", function (error, tree) {
    var options = {
      weightLinks: true,
      linkValue: false,
      linkName: false,
      nodeSize: false,
      legend: false,
      noLinkExtend: false,
      treeType: 'linear',
      nodeShape: '',
      subTree: false,
      collapseTree: false
    };

    var dendroChart = dendroGram()
      .option(options);


    var chartContainer = d3.select("#dendogram")
      .datum(tree)
      .call(dendroChart);
  })

}

function linkValue() {

  d3.text("data/test1.txt", function (error, tree) {
    var options = {
      weightLinks: false,
      linkValue: true,
      linkName: true,
      nodeSize: false,
      legend: false,
      noLinkExtend: false,
      treeType: 'linear',
      nodeShape: '',
      subTree: false,
      collapseTree: false
    };

    var dendroChart = dendroGram()
      .option(options);


    var chartContainer = d3.select("#dendogram")
      .datum(tree)
      .call(dendroChart);
  })

}

function nodeSize() {

  d3.text("data/test1.txt", function (error, tree) {
    var options = {
      weightLinks: false,
      linkValue: false,
      linkName: false,
      nodeSize: true,
      legend: false,
      noLinkExtend: false,
      treeType: 'linear',
      nodeShape: '',
      subTree: false,
      collapseTree: false
    };

    var dendroChart = dendroGram()
      .option(options);


    var chartContainer = d3.select("#dendogram")
      .datum(tree)
      .call(dendroChart);
  })

}

function subTree() {

  d3.text("data/test2.txt", function (error, tree) {
    var options = {
      weightLinks: false,
      linkValue: false,
      linkName: false,
      nodeSize: false,
      legend: false,
      noLinkExtend: false,
      treeType: 'linear',
      nodeShape: '',
      subTree: true,
      collapseTree: false
    };

    var dendroChart = dendroGram()
      .option(options);


    var chartContainer = d3.select("#dendogram")
      .datum(tree)
      .call(dendroChart);
  })

}


function barData() {

  d3.text("data/test1.txt", function (error, tree) {
    d3.csv("data/bar_data.csv", function (error, data) {

      var dendroChart = dendroGram()
        .barData(data)
        .barData(data)
        .barData(data)
        .barData(data) // calling barData multiple time with different data 
        //create seperate bar chart 
        .barData(data);

      var chartContainer = d3.select("#dendogram")
        .datum(tree)
        .call(dendroChart);
    })
  })

}

function stackedBarChart() {

  d3.text("data/test1.txt", function (error, tree) {
    d3.csv("data/stackbar_data.csv", function (error, data) {

      var dendroChart = dendroGram()
        .stackBarData(data);

      var chartContainer = d3.select("#dendogram")
        .datum(tree)
        .call(dendroChart);
    })
  })

}


function pieData() {

  d3.text("data/test1.txt", function (error, tree) {
    //d3.text("/data/life.txt", function(error, tree){ 

    d3.csv("data/pie_data1.csv", function (error, piedata) {
      var dendroChart = dendroGram()
        //.heatData(heatMapData)
        .pieData(piedata)
      //.barData(testdata);


      var chartContainer = d3.select("#dendogram")
        .datum(tree)
        .call(dendroChart);
    })
  })
}

function sunCircle() {

  d3.text("data/test1.txt", function (error, tree) {

    var dendroChart = dendroGram()
      .addSun("true");

    var chartContainer = d3.select("#dendogram")
      .datum(tree)
      .call(dendroChart);
  })

}

function domainChart() {

  d3.text("data/test1.txt", function (error, tree) {
    d3.csv("data/domain_data.csv", function (error, domaindata) {

      var opt = {
        treeType: 'linear',
        domainFill: 'gradient',
        domainType: 'protein'
      };

      var dendroChart = dendroGram()
        .option(opt)
        .domainData(domaindata);

      var chartContainer = d3.select("#dendogram")
        .datum(tree)
        .call(dendroChart);
    })
  })

}

function geneChart() {

  d3.text("data/test1.txt", function (error, tree) {
    d3.csv("data/gene_data.csv", function (error, genedata) {
      //var genedata = 
      /*
				[{domain:1, name:'sample1', start:5, end:13},{domain:2, name:'sample1',  start:15, end:24},{domain:1, name:'sample2', start:30, end:40},{domain:2, name:'sample2',  start:25, end:30},{domain:1, name:'sample3', start:35, end:40},{domain:2, name:'sample3', start:18, end:24}];
			*/

      var opt = {
        treeType: 'linear',
        domainFill: 'color',
        domainType: 'gene'
      };

      var dendroChart = dendroGram()
        //.option(opt)
        .geneData(genedata);

      var chartContainer = d3.select("#dendogram")
        .datum(tree)
        .call(dendroChart);

    })
  })

}

function alignmentChart() {

  d3.text("data/test3.txt", function (error, tree) {
    d3.text("data/alignment.txt", function (error, aligndata) {

      var dendroChart = dendroGram()
        .addSeq(aligndata);

      var chartContainer = d3.select("#dendogram")
        .datum(tree)
        .call(dendroChart);
    })
  })

}

function alignment1Chart() {

  d3.text("data/test3.txt", function (error, tree) {
    d3.text("data/alignment.txt", function (error, aligndata) {

      var opt = {
        treeType: 'linear',
        colorBox: false
      };

      var dendroChart = dendroGram()
        .option(opt)
        .addSeq(aligndata);

      var chartContainer = d3.select("#dendogram")
        .datum(tree)
        .call(dendroChart);
    })
  })

}

function heatmap() {
  d3.text("data/test1.txt", function (error, tree) {
    //d3.csv("/data/bar_data.csv", function(error, bardata){
    d3.csv("data/heat_data.csv", function (error, heatMapData) {

      var dendroChart = dendroGram()
        //.barData(bardata)
        .heatData(heatMapData);


      var chartContainer = d3.select("#dendogram")
        .datum(tree)
        .call(dendroChart);

    }) // end of heatmap data
    //})//end of bar data
  }) // end of tree data
}

function showImage() {
  d3.text("data/test3.txt", function (error, tree) {
    d3.csv("data/bar_data.csv", function (error, bardata) {
      d3.csv("data/image_data.csv", function (error, imageData) {

        var opt = {
          labelHide: true,
          treeType: 'linear'
        };

        var dendroChart = dendroGram()
          .option(opt)
          //.barData(bardata)
          .imageData(imageData);


        var chartContainer = d3.select("#dendogram")
          .datum(tree)
          .call(dendroChart);

      }) // end of heatmap data
    }) //end of bar data
  }) // end of tree data
}

function heatmapWC() {
  d3.text("data/test2.txt", function (error, tree) {

    var heatMapData = [{
      name: 'P_mariniana_Kokee2',
      sample: 'K',
      specificity: 0,
      value: 100
    }, {
      name: 'P_mariniana_Kokee2',
      sample: 'O',
      specificity: 0,
      value: 50
    }, {
      name: 'P_mariniana_Kokee2',
      sample: 'M',
      specificity: 0,
      value: 120
    }, {
      name: 'P_mariniana_Kokee2',
      sample: 'H',
      specificity: 0,
      value: 181
    }, {
      name: 'P_mariniana_Oahu',
      sample: 'K',
      specificity: 0,
      value: 117
    }, {
      name: 'P_mariniana_Oahu',
      sample: 'O',
      specificity: 0,
      value: 151
    }, {
      name: 'P_mariniana_Oahu',
      sample: 'M',
      specificity: 0,
      value: 110
    }, {
      name: 'P_mariniana_Oahu',
      sample: 'H',
      specificity: 0,
      value: 123
    }, {
      name: 'P_mariniana_MauiNui ',
      sample: 'K',
      specificity: 0,
      value: 132
    }, {
      name: 'P_mariniana_MauiNui ',
      sample: 'O',
      specificity: 0,
      value: 120
    }, {
      name: 'P_mariniana_MauiNui ',
      sample: 'M',
      specificity: 0,
      value: 160
    }, {
      name: 'P_mariniana_MauiNui ',
      sample: 'H',
      specificity: 0,
      value: 43
    }, {
      name: 'P_hawaiiensis_Makaopuhi',
      sample: 'K',
      specificity: 0,
      value: 220
    }, {
      name: 'P_hawaiiensis_Makaopuhi',
      sample: 'O',
      specificity: 0,
      value: 236
    }, {
      name: 'P_hawaiiensis_Makaopuhi',
      sample: 'M',
      specificity: 0,
      value: 54
    }, {
      name: 'P_hawaiiensis_Makaopuhi',
      sample: 'H',
      specificity: 0,
      value: 250
    }, {
      name: 'P_hawaiiensis_Makaopuhi',
      sample: 'K',
      specificity: 0,
      value: 231
    }, {
      name: 'P_hawaiiensis_Makaopuhi ',
      sample: 'O',
      specificity: 0,
      value: 20
    }, {
      name: 'P_hawaiiensis_Makaopuhi ',
      sample: 'M',
      specificity: 0,
      value: 33
    }, {
      name: 'P_hawaiiensis_Makaopuhi ',
      sample: 'H',
      specificity: 0,
      value: 31
    }, {
      name: 'P_wawraeDL7428 ',
      sample: 'K',
      specificity: 0,
      value: 30
    }, {
      name: 'P_wawraeDL7428 ',
      sample: 'O',
      specificity: 0,
      value: 240
    }, {
      name: 'P_wawraeDL7428 ',
      sample: 'M',
      specificity: 0,
      value: 16
    }, {
      name: 'P_wawraeDL7428 ',
      sample: 'H',
      specificity: 0,
      value: 200
    }, {
      name: 'P_kaduana_PuuKukuiAS ',
      sample: 'K',
      specificity: 0,
      value: 206
    }, {
      name: 'P_kaduana_PuuKukuiAS ',
      sample: 'O',
      specificity: 0,
      value: 100
    }, {
      name: 'P_kaduana_PuuKukuiAS ',
      sample: 'M',
      specificity: 0,
      value: 50
    }, {
      name: 'P_kaduana_PuuKukuiAS ',
      sample: 'M',
      specificity: 0,
      value: 120
    }, {
      name: 'P_kaduana_PuuKukuiAS ',
      sample: 'H',
      specificity: 0,
      value: 181
    }, {
      name: 'P_mauiensis_PepeAS',
      sample: 'K',
      specificity: 0,
      value: 117
    }, {
      name: 'P_mauiensis_PepeAS ',
      sample: 'O',
      specificity: 0,
      value: 151
    }, {
      name: 'P_mauiensis_PepeAS ',
      sample: 'M',
      specificity: 0,
      value: 110
    }, {
      name: 'P_mauiensis_PepeAS ',
      sample: 'H',
      specificity: 0,
      value: 123
    }, {
      name: 'P_hawaiiensis_WaikamoiL1',
      sample: 'K',
      specificity: 0,
      value: 132
    }, {
      name: 'P_hawaiiensis_WaikamoiL1',
      sample: 'O',
      specificity: 0,
      value: 120
    }, {
      name: 'P_hawaiiensis_WaikamoiL1',
      sample: 'M',
      specificity: 0,
      value: 160
    }, {
      name: 'P_hawaiiensis_WaikamoiL1',
      sample: 'H',
      specificity: 0,
      value: 43
    }, {
      name: 'P_mauiensis_Eke ',
      sample: 'K',
      specificity: 0,
      value: 220
    }, {
      name: 'P_mauiensis_Eke ',
      sample: 'O',
      specificity: 0,
      value: 236
    }, {
      name: 'P_mauiensis_Eke ',
      sample: 'M',
      specificity: 0,
      value: 54
    }, {
      name: 'P_mauiensis_Eke ',
      sample: 'H',
      specificity: 0,
      value: 250
    }, {
      name: 'P_fauriei2 ',
      sample: 'K',
      specificity: 0,
      value: 231
    }, {
      name: 'P_fauriei2 ',
      sample: 'O',
      specificity: 0,
      value: 20
    }, {
      name: 'P_fauriei2 ',
      sample: 'M',
      specificity: 0,
      value: 33
    }, {
      name: 'P_fauriei2 ',
      sample: 'H',
      specificity: 0,
      value: 31
    }, {
      name: 'P_hathewayi_1',
      sample: 'K',
      specificity: 0,
      value: 100
    }, {
      name: 'P_hathewayi_1',
      sample: 'O',
      specificity: 0,
      value: 50
    }, {
      name: 'P_hathewayi_1',
      sample: 'H',
      specificity: 0,
      value: 120
    }, {
      name: 'P_hathewayi_1',
      sample: 'M',
      specificity: 0,
      value: 181
    }, {
      name: 'P_kaduana_HawaiiLoa',
      sample: 'K',
      specificity: 0,
      value: 117
    }, {
      name: 'P_kaduana_HawaiiLoa',
      sample: 'O',
      specificity: 0,
      value: 100
    }, {
      name: 'P_kaduana_HawaiiLoa',
      sample: 'M',
      specificity: 0,
      value: 50
    }, {
      name: 'P_kaduana_HawaiiLoa',
      sample: 'H',
      specificity: 0,
      value: 120
    }, {
      name: 'P_greenwelliae07',
      sample: 'K',
      specificity: 0,
      value: 181
    }, {
      name: 'P_greenwelliae07',
      sample: 'O',
      specificity: 0,
      value: 117
    }, {
      name: 'P_greenwelliae07',
      sample: 'M',
      specificity: 0,
      value: 100
    }, {
      name: 'P_greenwelliae907',
      sample: 'H',
      specificity: 0,
      value: 50
    }, {
      name: 'P_greenwelliae907',
      sample: 'K',
      specificity: 0,
      value: 181
    }, {
      name: 'P_greenwelliae907',
      sample: 'O',
      specificity: 0,
      value: 117
    }, {
      name: 'P_greenwelliae907',
      sample: 'M',
      specificity: 0,
      value: 100
    }, {
      name: 'P_greenwelliae907',
      sample: 'H',
      specificity: 0,
      value: 50
    }, {
      name: 'P_grandiflora_Kal2',
      sample: 'K',
      specificity: 0,
      value: 120
    }, {
      name: 'P_grandiflora_Kal2',
      sample: 'O',
      specificity: 0,
      value: 181
    }, {
      name: 'P_grandiflora_Kal2',
      sample: 'H',
      specificity: 0,
      value: 117
    }, {
      name: 'P_grandiflora_Kal2',
      sample: 'M',
      specificity: 0,
      value: 117
    }, {
      name: 'P_hobdyi_Kuia ',
      sample: 'K',
      specificity: 0,
      value: 181
    }, {
      name: 'P_hobdyi_Kuia ',
      sample: 'O',
      specificity: 0,
      value: 117
    }, {
      name: 'P_hobdyi_Kuia ',
      sample: 'M',
      specificity: 0,
      value: 100
    }, {
      name: 'P_hobdyi_Kuia ',
      sample: 'H',
      specificity: 0,
      value: 50
    }];

    var options = {
      treeType: 'linear',
      heatType: 'circle'
    };


    var dendroChart = dendroGram()
      .option(options)
      .heatData(heatMapData);

    var chartContainer = d3.select("#dendogram")
      .datum(tree)
      .call(dendroChart);
  })
}

function nexusMatrix() {

  d3.text("data/nexus_matrix.txt", function (error, mat_data) {

    var nexus_array = mat_data.split("\n");
    var heatMapData = [];
    var charNames, matrixTrue = false;

    for (var i = 0; i < nexus_array.length; i++) {

      if (nexus_array[i].match("CHARSTATELABELS")) {

        var charString = nexus_array[i + 1].toString();
        charNames = charString.match(/\d\s'(.*?)'/g);
      }

      if (nexus_array[i].match("MATRIX")) {
        matrixTrue = true;
      }

      if (matrixTrue == true && !nexus_array[i].match("MATRIX") && !nexus_array[i].match("END;")) {
        var nodeName = nexus_array[i].split(/\s+/)[1];
        var charArray = nexus_array[i].split(/\s+/)[2].split("");


        for (var j = 0; j < charArray.length; j++) {
          var charObject = new Object();
          charObject.name = nodeName;
          charObject.sample = charNames[j];
          charObject.value = charArray[j];
          heatMapData.push(charObject)
        }

      }

    }

    d3.text("data/test4.txt", function (error, tree) {

      var options = {
        treeType: 'linear',
        heatType: 'circle'
      };


      var dendroChart = dendroGram()
        .option(options)
        .heatData(heatMapData);

      var chartContainer = d3.select("#dendogram")
        .datum(tree)
        .call(dendroChart);
    })
  })

}

function readMatrix() {

}

function punchCard() {
  d3.text("data/test2.txt", function (error, tree) {

    var heatMapData = [{
      name: 'P_mariniana_Kokee2',
      sample: 'K',
      specificity: 0,
      value: 100
    }, {
      name: 'P_mariniana_Kokee2',
      sample: 'O',
      specificity: 0,
      value: 50
    }, {
      name: 'P_mariniana_Kokee2',
      sample: 'M',
      specificity: 0,
      value: 120
    }, {
      name: 'P_mariniana_Kokee2',
      sample: 'H',
      specificity: 0,
      value: 181
    }, {
      name: 'P_mariniana_Oahu',
      sample: 'K',
      specificity: 0,
      value: 117
    }, {
      name: 'P_mariniana_Oahu',
      sample: 'O',
      specificity: 0,
      value: 151
    }, {
      name: 'P_mariniana_Oahu',
      sample: 'M',
      specificity: 0,
      value: 110
    }, {
      name: 'P_mariniana_Oahu',
      sample: 'H',
      specificity: 0,
      value: 123
    }, {
      name: 'P_mariniana_MauiNui ',
      sample: 'K',
      specificity: 0,
      value: 132
    }, {
      name: 'P_mariniana_MauiNui ',
      sample: 'O',
      specificity: 0,
      value: 120
    }, {
      name: 'P_mariniana_MauiNui ',
      sample: 'M',
      specificity: 0,
      value: 160
    }, {
      name: 'P_mariniana_MauiNui ',
      sample: 'H',
      specificity: 0,
      value: 43
    }, {
      name: 'P_hawaiiensis_Makaopuhi',
      sample: 'K',
      specificity: 0,
      value: 220
    }, {
      name: 'P_hawaiiensis_Makaopuhi',
      sample: 'O',
      specificity: 0,
      value: 236
    }, {
      name: 'P_hawaiiensis_Makaopuhi',
      sample: 'M',
      specificity: 0,
      value: 54
    }, {
      name: 'P_hawaiiensis_Makaopuhi',
      sample: 'H',
      specificity: 0,
      value: 250
    }, {
      name: 'P_hawaiiensis_Makaopuhi',
      sample: 'K',
      specificity: 0,
      value: 231
    }, {
      name: 'P_hawaiiensis_Makaopuhi ',
      sample: 'O',
      specificity: 0,
      value: 20
    }, {
      name: 'P_hawaiiensis_Makaopuhi ',
      sample: 'M',
      specificity: 0,
      value: 33
    }, {
      name: 'P_hawaiiensis_Makaopuhi ',
      sample: 'H',
      specificity: 0,
      value: 31
    }, {
      name: 'P_wawraeDL7428 ',
      sample: 'K',
      specificity: 0,
      value: 30
    }, {
      name: 'P_wawraeDL7428 ',
      sample: 'O',
      specificity: 0,
      value: 240
    }, {
      name: 'P_wawraeDL7428 ',
      sample: 'M',
      specificity: 0,
      value: 16
    }, {
      name: 'P_wawraeDL7428 ',
      sample: 'H',
      specificity: 0,
      value: 200
    }, {
      name: 'P_kaduana_PuuKukuiAS ',
      sample: 'K',
      specificity: 0,
      value: 206
    }, {
      name: 'P_kaduana_PuuKukuiAS ',
      sample: 'O',
      specificity: 0,
      value: 100
    }, {
      name: 'P_kaduana_PuuKukuiAS ',
      sample: 'M',
      specificity: 0,
      value: 50
    }, {
      name: 'P_kaduana_PuuKukuiAS ',
      sample: 'M',
      specificity: 0,
      value: 120
    }, {
      name: 'P_kaduana_PuuKukuiAS ',
      sample: 'H',
      specificity: 0,
      value: 181
    }, {
      name: 'P_mauiensis_PepeAS',
      sample: 'K',
      specificity: 0,
      value: 117
    }, {
      name: 'P_mauiensis_PepeAS ',
      sample: 'O',
      specificity: 0,
      value: 151
    }, {
      name: 'P_mauiensis_PepeAS ',
      sample: 'M',
      specificity: 0,
      value: 110
    }, {
      name: 'P_mauiensis_PepeAS ',
      sample: 'H',
      specificity: 0,
      value: 123
    }, {
      name: 'P_hawaiiensis_WaikamoiL1',
      sample: 'K',
      specificity: 0,
      value: 132
    }, {
      name: 'P_hawaiiensis_WaikamoiL1',
      sample: 'O',
      specificity: 0,
      value: 120
    }, {
      name: 'P_hawaiiensis_WaikamoiL1',
      sample: 'M',
      specificity: 0,
      value: 160
    }, {
      name: 'P_hawaiiensis_WaikamoiL1',
      sample: 'H',
      specificity: 0,
      value: 43
    }, {
      name: 'P_mauiensis_Eke ',
      sample: 'K',
      specificity: 0,
      value: 220
    }, {
      name: 'P_mauiensis_Eke ',
      sample: 'O',
      specificity: 0,
      value: 236
    }, {
      name: 'P_mauiensis_Eke ',
      sample: 'M',
      specificity: 0,
      value: 54
    }, {
      name: 'P_mauiensis_Eke ',
      sample: 'H',
      specificity: 0,
      value: 250
    }, {
      name: 'P_fauriei2 ',
      sample: 'K',
      specificity: 0,
      value: 231
    }, {
      name: 'P_fauriei2 ',
      sample: 'O',
      specificity: 0,
      value: 20
    }, {
      name: 'P_fauriei2 ',
      sample: 'M',
      specificity: 0,
      value: 33
    }, {
      name: 'P_fauriei2 ',
      sample: 'H',
      specificity: 0,
      value: 31
    }, {
      name: 'P_hathewayi_1',
      sample: 'K',
      specificity: 0,
      value: 100
    }, {
      name: 'P_hathewayi_1',
      sample: 'O',
      specificity: 0,
      value: 50
    }, {
      name: 'P_hathewayi_1',
      sample: 'H',
      specificity: 0,
      value: 120
    }, {
      name: 'P_hathewayi_1',
      sample: 'M',
      specificity: 0,
      value: 181
    }, {
      name: 'P_kaduana_HawaiiLoa',
      sample: 'K',
      specificity: 0,
      value: 117
    }, {
      name: 'P_kaduana_HawaiiLoa',
      sample: 'O',
      specificity: 0,
      value: 100
    }, {
      name: 'P_kaduana_HawaiiLoa',
      sample: 'M',
      specificity: 0,
      value: 50
    }, {
      name: 'P_kaduana_HawaiiLoa',
      sample: 'H',
      specificity: 0,
      value: 120
    }, {
      name: 'P_greenwelliae07',
      sample: 'K',
      specificity: 0,
      value: 181
    }, {
      name: 'P_greenwelliae07',
      sample: 'O',
      specificity: 0,
      value: 117
    }, {
      name: 'P_greenwelliae07',
      sample: 'M',
      specificity: 0,
      value: 100
    }, {
      name: 'P_greenwelliae907',
      sample: 'H',
      specificity: 0,
      value: 50
    }, {
      name: 'P_greenwelliae907',
      sample: 'K',
      specificity: 0,
      value: 181
    }, {
      name: 'P_greenwelliae907',
      sample: 'O',
      specificity: 0,
      value: 117
    }, {
      name: 'P_greenwelliae907',
      sample: 'M',
      specificity: 0,
      value: 100
    }, {
      name: 'P_greenwelliae907',
      sample: 'H',
      specificity: 0,
      value: 50
    }, {
      name: 'P_grandiflora_Kal2',
      sample: 'K',
      specificity: 0,
      value: 120
    }, {
      name: 'P_grandiflora_Kal2',
      sample: 'O',
      specificity: 0,
      value: 181
    }, {
      name: 'P_grandiflora_Kal2',
      sample: 'H',
      specificity: 0,
      value: 117
    }, {
      name: 'P_grandiflora_Kal2',
      sample: 'M',
      specificity: 0,
      value: 117
    }, {
      name: 'P_hobdyi_Kuia ',
      sample: 'K',
      specificity: 0,
      value: 181
    }, {
      name: 'P_hobdyi_Kuia ',
      sample: 'O',
      specificity: 0,
      value: 117
    }, {
      name: 'P_hobdyi_Kuia ',
      sample: 'M',
      specificity: 0,
      value: 100
    }, {
      name: 'P_hobdyi_Kuia ',
      sample: 'H',
      specificity: 0,
      value: 50
    }];

    var options = {
      treeType: 'linear',
      weightLinks: false,
      linkValue: true,
      linkName: true,
      nodeSize: false,
      heatType: 'punchCard'
    };


    var dendroChart = dendroGram()
      .option(options)
      .heatData(heatMapData);

    var chartContainer = d3.select("#dendogram")
      .datum(tree)
      .call(dendroChart);
  })
}

function dendrogram() {

  d3.text("data/test2.txt", function (error, tree) {
    // branch scaling    `0issue with redering life.txt
    //d3.text("/data/life.txt", function(error, tree){

    var options = {
      weightLinks: false,
      linkValue: true,
      linkName: false,
      nodeSize: false,
      legend: false,
      noLinkExtend: true,
      treeType: 'linear',
      nodeShape: '',
      subTree: false,
      collapseTree: false,
      textColor: false
    };


    var dendroChart = dendroGram();

    var chartContainer = d3.select("#dendogram")
      .datum(tree)
      .call(dendroChart);

  })
}

function radialTree() {

  d3.text("data/life.txt", function (error, tree) {
    d3.csv("/data/pie_data1.csv", function (error, piedata) {
      d3.csv("/data/bar_data.csv", function (error, bardata) {
        var opt = {
          treeType: 'radial'
        };

        var dendroChart = dendroGram()
          .option(opt)
          .pieData(piedata)
          .barData(bardata)
        //.heatData(bardata)

        var chartContainer = d3.select("#dendogram")
          .datum(tree)
          .call(dendroChart);
      })
    })
  })
}

function compareTree() {

  d3.text("data/test1.txt", function (error, reftree) {

    var dendroChart = dendroGram();

    var chartContainer = d3.select("#dendogram")
      .datum(reftree)
      .call(dendroChart);
  })

  d3.text("/data/test1.txt", function (error, basetree) {

    var dendroChart = dendroGram();

    var chartContainer = d3.select("#comparetree")
      .datum(basetree)
      .call(dendroChart);

  })
}

function parseTree(a) {
  for (var e = [], r = {}, s = a.split(/\s*(;|\(|\)|,|:)\s*/), t = 0; t < s.length; t++) {
    var n = s[t];
    switch (n) {
      case "(":
        var c = {};
        r.branchset = [c], e.push(r), r = c;
        break;
      case ",":
        var c = {};
        e[e.length - 1].branchset.push(c), r = c;
        break;
      case ")":
        r = e.pop();
        break;
      case ":":
        break;
      default:
        var h = s[t - 1];
        ")" == h || "(" == h || "," == h ? r.name = n : ":" == h && (r.length = parseFloat(n))
    }
  }
  return r;
}

function nexusTree() {
  1

  d3.text("/data/mrbayes_run.nex", function (error, reftree) {

    var nexus_array = reftree.split("\n");
    var tree_data = [];

    for (var i = 0; i < nexus_array.length; i++) {

      if (nexus_array[i].match("TREES") || nexus_array[i].match("tree")) {

        var treeString = nexus_array[i].toString();
        tree_data.push(treeString.substr(treeString.lastIndexOf("=") + 15))

      }
    }

    var dendroChart = dendroGram()
      .addTree(tree_data);

    var chartContainer = d3.select("#dendogram")
      .datum(tree_data[30])
      .call(dendroChart);

  })
} //end of nexustree()d

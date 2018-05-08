function compareTree(){
    
  	d3.text("data/test1.txt", function(error, reftree){
	// branch scaling    `0issue with redering life.txt
    d3.text("/data/test1.txt", function(error, basetree){
       
        var dendroChart = dendroGram()
                  .addTree(parseNewick(basetree));
            
       var chartContainer = d3.select("#dendogram")
            .datum(reftree)
            .call(dendroChart);
      
    })
})
}
    

// Function to parse tree data to object
  function parseNewick(a){
        for(var e=[],r={},s=a.split(/\s*(;|\(|\)|,|:)\s*/),t=0;t<s.length;t++){
                var n=s[t];switch(n){case"(":var c={};r.branchset=[c],e.push(r),r=c;break;case",":var c={};e[e.length-1].branchset.push(c),r=c;break;case")":r=e.pop();break;case":":break;default:var h=s[t-1];")"==h||"("==h||","==h?r.name=n:":"==h&&(r.length=parseFloat(n))}
            }
        return r;
  }

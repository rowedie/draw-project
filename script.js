$(document).ready(function(){

function appendTable(n) {
	var ar = [n];
	var ad = [n];
	for(j=0; j<n; j++) {
		ar[j] = $("<tr></tr>");
		$("table.grid").append(ar[j]); 
		for(i=0; i<n; i++) {
		console.log(i,n);
		ad[i] = $("<td></td>");
		}
		$(ar[j]).append(ad);
	}
}

appendTable(5);


$("button").click(function(){
	$("table.grid").empty();
	var gridsize = prompt("How many squares per side?", "5");
	if (gridsize != null) {
	appendTable(gridsize);	
	}
	var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	$("td").mouseenter( function(){
	$(this).css("background-color", randomColor);
});
});

$("td").mouseenter( function(){

	$(this).css("background-color", "blue");
}); 

});
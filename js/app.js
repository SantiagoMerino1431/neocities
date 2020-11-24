
function changecolor(id) {
	if(id!=""){
		var letra = document.getElementById(id);
		letra.classList.remove("green");
		letra.classList.add("blue");
	}	
}
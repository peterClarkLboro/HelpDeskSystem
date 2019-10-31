function details() {
	document.getElementById("solu").style.visibility='hidden';
	document.getElementById("info").style.visibility='visible';
}

function solutions() {
	document.getElementById("info").style.visibility='hidden';
	document.getElementById("solu").style.visibility='visible';
}

function hideBar() {
	
	if (document.getElementById("leftBar").style.display=='none'){
		document.getElementById("leftBar").style.display='block';
	}else{		
		document.getElementById("leftBar").style.display='none';
	}
	/*document.getElementById("leftBar").style.display='none';*/
}
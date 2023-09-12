function reloadpage() {
	window.location.reload();
}
function delme(idd) {
	let delelment = document.getElementById(idd);
	delelment.style.display = "none";
}
let checked = false;
function check(obj, idd) {
	let icon = obj.children[0];
	let pap = document.getElementById(idd).children[0];
	if (!checked) {
		icon.style = "transform:scale(1);";
		pap.style = "	text-decoration: line-through; color:#888; ";
		document.getElementById(idd).style = "	opacity: 0.5;";
		checked = true;
	} else {
		icon.style = "font-size:0px;";
		pap.style = "	text-decoration: none; color:black; ";
		document.getElementById(idd).style = "	opacity: 1;";
		checked = false;
	}
}
let asidee = false;
function hidaside(obj) {
	let spannn = document.querySelectorAll("aside ul li span");
	if (!asidee) {
		obj.style = "display:none;";
		document.querySelectorAll("h3")[1].style = "display:block;";
		for (let index = 0; index < spannn.length; index++) {
			spannn[index].style = "display:none;";
		}
		document.querySelector("aside").style = "width:fit-content;";
		asidee = true;
	} else {
		obj.style = "display:none;";
		document.querySelectorAll("h3")[0].style = "display:block;";
		for (let index = 0; index < spannn.length; index++) {
			spannn[index].style = "display:block;";
		}
		document.querySelector("aside").style = "width:250px;";
		asidee = false;
	}
}
var changebtnbool = true;
function changebtn(obj) {
	let element = document.getElementById("mail");
	if (changebtnbool) {
		element.disabled = false;
		element.style = "cursor: text;"
		obj.innerHTML = "Save"
		changebtnbool = false;
	} else {
		element.disabled = true;
		element.style = "cursor: no-drop;"
		obj.innerHTML = "Change"
		changebtnbool = true;
	}
}
function hideInfo(obj , idd){
	let element=document.getElementById(idd);
	if(obj.checked){
		element.style="opacity:1;"
	}else{
		element.style="opacity:0.5;"
	}
}
function delFriend(idd){
	let element = document.getElementById(idd);
	element.style="display:none;"
}
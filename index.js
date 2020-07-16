// function handleClick(){
// 	alert("button is pressed");
// }
// document.querySelector("button.d").addEventListener("click",handleClick);
//Using anonyms function
var color=["red","blue","black","white","yellow","orange","cyan"];
var j;
function MyColor(){
	return color[Math.floor((Math.random())*7)];
}
function btnAnimation(text){
	document.querySelector("."+text).classList.add("pressed");
	setTimeout(function(){document.querySelector("."+text).classList.remove("pressed");},200);
}
function playDrum(text){
	var aud;
	switch(text){
		case "w":
			aud="tom-1.mp3";
			break;
		case "a":
			aud="tom-2.mp3";
			break;
		case "s":
			aud="tom-3.mp3";
			break;
		case "d":
			aud="tom-4.mp3";
			break;
		case "j":
			aud="snare.mp3";
			break;
		case "k":
			aud="crash.mp3";
			break;
		default:
			aud="kick-bass.mp3";

	}
		aud="sounds/"+aud;
	var audio=new Audio(aud);
	audio.play();
}
//to add keyboard listner to whole document
document.addEventListener("keydown",function(event){
	playDrum(event.key);
	btnAnimation(event.key);
})
for(var i=0;i<document.querySelectorAll("button.drum").length;i++){
	document.querySelectorAll("button")[i].addEventListener("click",function(){
		var text=this.innerHTML;
		playDrum(text);
		btnAnimation(text);
});
}

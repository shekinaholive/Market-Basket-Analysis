function talk(){
var know = {
"முழு கோதுமை பாஸ்தா":"ஆலிவ் எண்ணெய்"
};
var user = document.getElementById('userBox').value;
document.getElementById('chatLog').innerHTML = user + "<br>";
if (user in know) {
document.getElementById('chatLog').innerHTML = know[user] + "<br>";
}else{
document.getElementById('chatLog').innerHTML = "மன்னிக்கவும், எனக்கு புரியவில்லை <br>";
}
}
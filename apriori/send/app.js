function talk(){
var know = {
"முழு கோதுமை பாஸ்தா":"ஆலிவ் எண்ணெய்",
"பாஸ்தா":"இறால்",
"மிளகாய்":"கொத்தமல்லி",
"Who are you" : "Hello, Codewith_random here ",
"How are you" : "Good :)",
"What can i do for you" : "Please Give us A Follow & Like.",
"Your followers" : "I have my family of 5000 members, i don't have follower ,have supportive Famiy ",
"ok" : "Thank You So Much ",
"Bye" : "Okay! Will meet soon.."
};
var user = document.getElementById('userBox').value;
document.getElementById('chatLog').innerHTML = user + "<br>";
if (user in know) {
document.getElementById('chatLog').innerHTML = know[user] + "<br>";

}else{
document.getElementById('chatLog').innerHTML = "மன்னிக்கவும், பரிந்துரைகள் இல்லை <br>";
}
}
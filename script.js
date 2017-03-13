function newName() {
    var randomname = Math.floor(Math.random() * (quotes.length));
    document.getElementById("nameDisplay").innerHTML = quotes[randomname];

}

//quote array
var quotes = ["Sylvain", "Julie", "Younes", "Benjamin", "Kevin", "Kenny", "Vincent", "Ilyes", "Florent", "Madjid", "Sahbia", "Melik", "Yuran Jose", "Mathieu", "Aaron", "Sana", "Slimane", "Grace", "Ivan", "Dhaifallah", ];

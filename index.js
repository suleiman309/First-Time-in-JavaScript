
var random = 11 * Math.random();
var player1 = Math.floor(random);

var random2 = 11 * Math.random();
var player2 = Math.floor(random2);



document.querySelectorAll("h1")[1].textContent = player1;
document.querySelectorAll("h1")[2].textContent = player2;


if(player1 > player2){
    document.querySelectorAll("h1")[0].textContent = "🚩 Player 1 win! 👏";
}else if (player1 < player2){
    document.querySelectorAll("h1")[0].textContent = "👏 Player 2 win! 🚩";
}else{
    document.querySelectorAll("h1")[0].textContent = "🏁Draw!";
}
setTimeout(function () {
    document.getElementById("information").style.display = "none";
}, 5000);
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var emojiArray = ["✌", "😂", "😝", "😁", "😱", "👉", "🙌", "🍻", "🔥", "🌈", "☀", "🎈", "🌹", "💄", "🎀", "⚽", "🎾",
    "🏁", "😡", "👿", "🐻", "🐶", "🐬", "🐟", "🍀", "👀", "🚗", "🍎", "💝", "💙", "👌", "❤", "😍", "😉", "😓", "😳",
    "💪", "💩", "🍸", "🔑", "💖", "🌟", "🎉", "🌺", "🎶", "👠", "🏈", "⚾", "🏆", "👽", "💀", "🐵", "🐮", "🐩", "🐎",
    "💣", "👃", "👂", "🍓", "💘", "💜", "👊", "💋", "😘", "😜", "😵", "🙏", "👋", "🚽", "💃", "💎", "🚀", "🌙", "🎁",
    "⛄", "🌊", "⛵", "🏀", "🎱", "💰", "👶", "👸", "🐰", "🐷", "🐍", "🐫", "🔫", "👄", "🚲", "🍉", "💛", "💚"];
var xPositions = [window.innerWidth / 2, window.innerWidth / 4,
    window.innerWidth / 4 * 3, window.innerWidth / 8,
    window.innerWidth / 8 * 7];
var yPositions = [0, 0, 0, 0, 0];
var arrayOfCurrentEmojis = [];
var emojiDrops = function () {
    ctx.font = '30px serif';
    for (var i = 0; i < xPositions.length; i++) {
        arrayOfCurrentEmojis.push(emojiArray[Math.floor((Math.random() * emojiArray.length - 1) + 1)]);
        ctx.fillText(arrayOfCurrentEmojis[i], xPositions[i], yPositions[i]);
        yPositions[i] += Math.floor((Math.random() * 5) + 2);
        for (var k = 0; k < yPositions.length; k++) {
            if (yPositions[k] >= window.innerHeight) {
                yPositions[k] = 0;
            }
        }
    }
};

function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    emojiDrops();
    window.requestAnimationFrame(draw);
}

draw();
document.getElementById("canvas").addEventListener("click", function (event) {
    xPositions.push(event.pageX);
    yPositions.push(event.pageY);
}, false);
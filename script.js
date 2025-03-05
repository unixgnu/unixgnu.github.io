// Матрица-анимация
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(0);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";
    
    drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, y);
        drops[i] = y > canvas.height || Math.random() > 0.975 ? 0 : y + fontSize;
    });
}

setInterval(drawMatrix, 50);

// Глич-анимация перед редиректом
setTimeout(() => {
    document.body.style.background = "white";
    document.querySelector(".glitch").style.color = "black";
    setTimeout(() => {
        window.location.href = "https://ezca.sh/r/YyJkNC";
    }, 500);
}, 4000); // 4 секунды перед редиректом

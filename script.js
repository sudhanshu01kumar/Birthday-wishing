// ======================================
// HAPPY BIRTHDAY WEBSITE
// PART 3A
// ======================================

// ---------- ELEMENTS ----------

const startBtn = document.getElementById("startBtn");
const welcome = document.getElementById("welcome");
const celebration = document.getElementById("celebration");

const typing = document.getElementById("typing");

const flame = document.getElementById("flame");
const candle = document.getElementById("candle");

const wishMessage = document.getElementById("wishMessage");

const gift = document.getElementById("gift");
const giftMessage = document.getElementById("giftMessage");

const music = document.getElementById("music");

const balloonsContainer = document.getElementById("balloons");
const heartsContainer = document.getElementById("hearts");

// ---------- MESSAGE ----------

const birthdayMessage = `

Happy Birthday ❤️

Today is all about you.

May your smile always shine brightly.

May every dream you have become reality.

May happiness,
love,
success,
good health,
and peace always stay with you.

Thank you for being such a wonderful person.

Have an unforgettable birthday!

🎂🎉❤️

`;

let index = 0;
let typingFinished = false;
let candleBlown = false;

// ======================================
// START CELEBRATION
// ======================================

startBtn.addEventListener("click", () => {

    welcome.classList.add("hidden");

    celebration.classList.remove("hidden");

    if (music) {

        music.play().catch(() => {});

    }

    typeWriter();

    createBalloons();

    createHearts();

});

// ======================================
// TYPEWRITER
// ======================================

function typeWriter(){

    if(index < birthdayMessage.length){

        typing.innerHTML += birthdayMessage.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }
    else{

        typingFinished = true;

    }

}

// ======================================
// FLOATING BALLOONS
// ======================================

function createBalloons(){

    setInterval(()=>{

        const balloon=document.createElement("div");

        balloon.className="balloon";

        const colors=["🎈","🎈","🎈","🎈"];

        balloon.innerHTML=
        colors[Math.floor(Math.random()*colors.length)];

        balloon.style.left=Math.random()*100+"vw";

        balloon.style.animationDuration=
        (8+Math.random()*5)+"s";

        balloon.onclick=()=>{

            balloon.innerHTML="💥";

            balloon.style.fontSize="45px";

            setTimeout(()=>{

                balloon.remove();

            },150);

        };

        balloonsContainer.appendChild(balloon);

        setTimeout(()=>{

            balloon.remove();

        },15000);

    },700);

}

// ======================================
// FLOATING HEARTS
// ======================================

function createHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.animationDuration=
        (7+Math.random()*4)+"s";

        heartsContainer.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },12000);

    },900);

}

// ======================================
// SPARKLES
// ======================================

setInterval(()=>{

    const spark=document.createElement("div");

    spark.innerHTML="✨";

    spark.style.position="absolute";

    spark.style.left=Math.random()*100+"vw";

    spark.style.top=Math.random()*100+"vh";

    spark.style.fontSize="18px";

    spark.style.pointerEvents="none";

    document.body.appendChild(spark);

    setTimeout(()=>{

        spark.remove();

    },1000);

},350);
// ======================================
// PART 3B
// Candle + Confetti + Fireworks + Gift
// ======================================

// ---------- CANDLE ----------

flame.addEventListener("click", blowCandle);

function blowCandle() {

    if (candleBlown) return;

    candleBlown = true;

    // Hide flame
    flame.style.display = "none";

    // Smoke
    const smoke = document.createElement("div");

    smoke.className = "smoke";

    smoke.innerHTML = "💨";

    candle.appendChild(smoke);

    // Wish Message
    setTimeout(() => {

        wishMessage.classList.remove("hidden");

    }, 800);

    // Confetti
    launchConfetti();

    // Fireworks
    fireworks();

}

// ======================================
// CONFETTI
// ======================================

function launchConfetti() {

    if (typeof confetti === "function") {

        confetti({

            particleCount: 250,

            spread: 180,

            origin: {
                y: 0.6
            }

        });

    }

}

// ======================================
// FIREWORKS
// ======================================

function fireworks() {

    const duration = 5000;

    const end = Date.now() + duration;

    (function frame() {

        if (typeof confetti === "function") {

            confetti({

                particleCount: 3,

                angle: 60,

                spread: 60,

                origin: {
                    x: 0
                }

            });

            confetti({

                particleCount: 3,

                angle: 120,

                spread: 60,

                origin: {
                    x: 1
                }

            });

        }

        if (Date.now() < end) {

            requestAnimationFrame(frame);

        }

    })();

}

// ======================================
// GIFT
// ======================================

gift.addEventListener("click", openGift);

function openGift() {

    gift.innerHTML = "📦";

    gift.style.transform = "scale(1.2)";

    giftMessage.classList.remove("hidden");

    launchConfetti();

    setTimeout(() => {

        showFinalScreen();

    }, 4000);

}

// ======================================
// FINAL SCREEN
// ======================================

function showFinalScreen() {

    document.body.innerHTML = `

    <div class="final">

        <h1>🎉 HAPPY BIRTHDAY 🎉</h1>

        <h2>Emily ❤️</h2>

        <p>

            May all your dreams come true.<br><br>

            Keep smiling 😊<br>

            Keep shining ✨<br>

            Keep believing in yourself ❤️<br><br>

            Wishing you happiness,

            success,

            peace,

            and endless love.

            <br><br>

            🎂 Happy Birthday! 🎂

        </p>

    </div>

    `;

    // Grand Confetti

    if (typeof confetti === "function") {

        confetti({

            particleCount: 500,

            spread: 360,

            origin: {
                y: 0.6
            }

        });

    }

}
// ======================================
// PART 3C
// Final Effects & Enhancements
// ======================================

// ---------- RANDOM STARS ----------

function createStar() {

    const star = document.createElement("div");

    star.innerHTML = "⭐";

    star.style.position = "fixed";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.fontSize = (10 + Math.random() * 15) + "px";

    star.style.opacity = Math.random();

    star.style.pointerEvents = "none";

    star.style.transition = "2s";

    document.body.appendChild(star);

    setTimeout(() => {

        star.style.transform = "scale(2)";
        star.style.opacity = "0";

    }, 100);

    setTimeout(() => {

        star.remove();

    }, 2000);

}

setInterval(createStar, 600);

// ======================================
// CAKE GLOW
// ======================================

const cake = document.getElementById("cake");

if (cake) {

    setInterval(() => {

        cake.style.filter = "drop-shadow(0 0 25px white)";

        setTimeout(() => {

            cake.style.filter = "none";

        }, 500);

    }, 2000);

}

// ======================================
// AUTO MUSIC RESTART
// ======================================

if (music) {

    music.volume = 0.5;

    music.addEventListener("ended", () => {

        music.currentTime = 0;
        music.play().catch(() => {});

    });

}

// ======================================
// FLOATING EMOJIS
// ======================================

const emojis = ["🎉", "✨", "💖", "🎂", "🥳", "🎈"];

function floatingEmoji() {

    const e = document.createElement("div");

    e.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    e.style.position = "fixed";

    e.style.left = Math.random() * 100 + "vw";

    e.style.bottom = "-50px";

    e.style.fontSize = "28px";

    e.style.pointerEvents = "none";

    e.style.transition = "6s linear";

    document.body.appendChild(e);

    setTimeout(() => {

        e.style.bottom = "110vh";

        e.style.transform =
            `rotate(${Math.random() * 720}deg)`;

    }, 50);

    setTimeout(() => {

        e.remove();

    }, 6500);

}

setInterval(floatingEmoji, 1200);

// ======================================
// DOUBLE CLICK FOR EXTRA CONFETTI
// ======================================

document.addEventListener("dblclick", () => {

    if (typeof confetti === "function") {

        confetti({

            particleCount: 300,

            spread: 220,

            origin: {

                x: Math.random(),

                y: Math.random()

            }

        });

    }

});

// ======================================
// KEYBOARD SHORTCUT
// Press "F" for fireworks
// ======================================

document.addEventListener("keydown", (e) => {

    if (e.key.toLowerCase() === "f") {

        fireworks();

    }

});

// ======================================
// WELCOME CONSOLE MESSAGE
// ======================================

console.log("🎉 Happy Birthday Website Loaded Successfully!");

console.log("Made with ❤️");
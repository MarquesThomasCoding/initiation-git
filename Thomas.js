const srcs = ["./imgs/football.png", "./imgs/jeuvideo.png",];
const descriptions = [
    "Sa passion la plus évidente est les jeux vidéo.",
    "Les animaux constitue une autre de ses grandes passions.",];
const img = document.querySelector('.caroussel');
let currentIndex = 0;

function nextSlide() {
    img.style.opacity = 0;

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % srcs.length;
        img.setAttribute('src', srcs[currentIndex]);
        document.querySelector('.img-description').innerHTML = descriptions[currentIndex];
        img.style.opacity = 1;
    }, 1000);
}

setInterval(nextSlide, 4000);
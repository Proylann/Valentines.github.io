document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    document.getElementById('bgMusic').play();
    createHearts();
});

function createHearts() {
    const container = document.querySelector('.hearts-container');
    const createHeart = () => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        container.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 5000);
    };
    setInterval(createHeart, 300);
}
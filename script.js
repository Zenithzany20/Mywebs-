document.getElementById('gift-button').addEventListener('click', function() {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('romantic-page').classList.remove('hidden')
    setTimeout(() => {
        addClaps();
        addHearts();
        setInterval(addClaps, 400);
        setInterval(addHearts, 600); 
    }, 100);
});

function addClaps() {
    const container = document.getElementById('clap-container');
    const clapCount = 6;

    for (let i = 0; i < clapCount; i++) {
        const clap = document.createElement('div');
        clap.classList.add('clap');
        clap.innerHTML = '👏';
        const x = Math.random() * (window.innerWidth - 50);
        const y = Math.random() * (window.innerHeight - 50);
        clap.style.left = `${x}px`;
        clap.style.top = `${y}px`;
        container.appendChild(clap);
        setTimeout(() => {
            clap.remove();
        }, 2000);
    }
}

function addHearts() {
    const container = document.getElementById('heart-container');
    const heartCount = 4; 

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '🙌🏻';
        const x = Math.random() * (window.innerWidth - 50);
        const y = Math.random() * (window.innerHeight - 50);
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        container.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}
window.onload = function() {
};

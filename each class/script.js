let listVideo = [
    "https://www.youtube.com/embed/lD9z6pFgA7A?si=sMQ_lt-KwIfHUAw_", //eps 1
    "https://www.youtube.com/embed/EwB9qHwNbsY?si=8i3UuBW2emNNk88B", //eps 2 
    "https://www.youtube.com/embed/EXFkTdL0lxo?si=btQjUxx1KkvhYYDN", //eps 3
    "https://www.youtube.com/embed/7Ehl9EyM8ic?si=Pwb9f9nPQElDx0bn", //eps 4
    "https://www.youtube.com/embed/bCCCtpBVmVE?si=S4XyPXUlC7Ku-b-q", //eps 5
    "https://www.youtube.com/embed/ATeJ-HXwRtI?si=kWlLy-Hr1xwjGhds", //eps 6
];

function appendCard(videoLink, n) {
    const containerAdd = document.createElement('div');
    containerAdd.classList.add('video-text');

    const iframeAdd = document.createElement('iframe');
    iframeAdd.setAttribute('width', '560');
    iframeAdd.setAttribute('height', '315');
    iframeAdd.setAttribute('src', videoLink);
    iframeAdd.setAttribute('allowfullscreen', '');

    const h3Add = document.createElement('h3');
    h3Add.textContent = `Kelompok ${n}`;

    containerAdd.appendChild(iframeAdd);
    containerAdd.appendChild(h3Add);

    const parentElement = document.querySelector('.video-container');
    parentElement.appendChild(containerAdd);
}

document.addEventListener('DOMContentLoaded', () => {
    for (let a = 0; a < listVideo.length; a++) {
        const linkVideo = listVideo[a];
        appendCard(linkVideo, a + 1);
    }
});

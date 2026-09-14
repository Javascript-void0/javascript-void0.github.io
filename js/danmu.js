var comments = [
    'comment 1',
    'comment 2',
    'comment 3',
    'comment 4',
   'comment 5',
    'comment 6',
    'comment 7',
    'comment 8',
    'comment 9',
    'comment 0',
]

var danmuContainer = document.getElementById('danmu-container')

function createComment() {
    var content = comments[Math.floor(Math.random() * comments.length)]
    
    var danmu = document.createElement('div')
    danmu.classList.add('danmu')
    danmu.style.top = '30px'
    randomX = Math.random() * window.innerWidth;
    randomY = Math.floor(Math.random() * 15) * 20;
    // randomSpeed = (Math.random() * 2 + 1).toFixed(3);
    randomSpeed = 2;
    // console.log(randomSpeed);
    danmu.style.left = '-' + (8.6 * (content.length + randomX)) + 'px'
    // danmu.style.left = window.innerWidth + 'px';
    danmu.style.top = randomY + 'px'
    danmu.style.zIndex = 100
    danmu.setAttribute('speed', randomSpeed)
    // set lang
    danmu.textContent = content;

    danmuContainer.append(danmu);
}


for (i = 0; i < 500; i++) {
    createComment()
}


setInterval(function() {
    var allDanmu = document.getElementsByClassName('danmu')
    for (danmu of allDanmu) {
        left = danmu.style.left.slice(0, -2);
        left = parseFloat(left);
        if (left > window.innerWidth) {
            danmu.remove()
            createComment();
            return;
        }

        speed = parseFloat(danmu.getAttribute('speed'))
        // left += 8.6
        // console.log("add: " + speed)
        left += speed;
        danmu.style.left = left + 'px'
    }
}, 20)

window.addEventListener('scroll', function() {
    var header = document.querySelector('.hms');
    if (window.scrollY >= 1) {
        header.classList.add('smaller-text');
    } else {
        header.classList.remove('smaller-text');
    }
});

window.addEventListener('click', function() {
    var text = document.getElementById('button1');
    text.hidden = false;
});
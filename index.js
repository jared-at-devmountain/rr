const im = document.getElementById('im')
const vid = document.getElementById('vid')

const imClick = () => {
    for(var i=1;i<11;i++) {
        setInterval((function(myI) {
            return function()
            {
                im.style.transitionDuration='2s';
                im.style.transform = 'rotate(-90deg)';
            };
        }(i)),100);
    }

    setInterval((function(myI) {
        return function() {
            im.style.display='none';
            vid.style.display='block';
        }
    }(i)), 3000)
}

im.addEventListener('click', imClick)
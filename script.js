window.onload = function() {
    setTimeout(function() {
        document.getElementById('header').classList.add('fade-in');
    }, 500); 
    
    setTimeout(function() {
        document.getElementById('image-slot').classList.add('fade-in');
    }, 1500); 
    
    setTimeout(function() {
        document.getElementById('yes-button').classList.add('fade-in');
    }, 2500);
    
    setTimeout(function() {
        document.getElementById('no-button').classList.add('fade-in');
    }, 3500); 
};

function flashOverlay(times, delay, callback){
    if (times > 0){
        setTimeout(function() {
            var overlay = document.getElementById('overlay');
            overlay.style.display = 'block';
            setTimeout(function(){
                overlay.style.display = 'none';
                if (times > 1){
                    flashOverlay(times - 1, 20, callback);
                } else {
                    document.getElementById('darkOverlay').style.display = 'none';
                    if(callback && typeof callback === 'function') {
                        callback(); 
                    }
                }
            }, 20);
        }, delay);
    }
}
   
document.getElementById('yes-button').onclick = function() {
    var yesAudio = document.getElementById('yesSound');
    yesAudio.play();
    var yesOverlay = document.getElementById('yesOverlay');
    yesOverlay.style.display = 'block';
};

document.getElementById('no-button').onclick = function() {
    var audio = document.getElementById('noSound');
    audio.play();
    var darkOverlay = document.getElementById('darkOverlay');
    darkOverlay.style.display = 'block';
    flashOverlay(6, 2, function() {
        document.getElementById('header').textContent = "Be My Valentine..";
        var noButton = document.getElementById('no-button');
        noButton.parentNode.removeChild(noButton); 
        var responseButtons = document.getElementsByClassName('response-buttons')[0];
        responseButtons.style.justifyContent = 'center';
    });
};


var nbDrop = 1000;

function randRange(minNum, maxNum) {
    return (Math.floor(Math.random()*(maxNum - minNum + 1)) + minNum);
}

function createRain() {
    for (i = 1; i< nbDrop; i++){
        var dropleft = randRange(0, 1555);
        var dropTop = randRange(-1000,1350);

        $('.rain').append('<div class="drop" id="drop'+ i +'"></div>');
        $('#drop' + i).css('left', dropleft);
        $('#drop' + i).css('top', dropTop);
    }
}
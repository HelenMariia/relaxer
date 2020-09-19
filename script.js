const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breatheAnimation() {
    console.log('Breathe In!');

    setTimeout(() => {
        console.log('Hold');

        setTimeout(() => {
            console.log('Breathe Out!')
        }, holdTime);
    }, breatheTime);
}

breatheAnimation();
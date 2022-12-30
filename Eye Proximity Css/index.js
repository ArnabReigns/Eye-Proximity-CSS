


document.addEventListener('mousemove', e => {

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const anchore = document.getElementById('anchore')
    const rect = anchore.getBoundingClientRect();
    const anchoreX = rect.left + rect.width/2; // mid of the character x
    const anchoreY = rect.top + rect.height/2; // mid of the character y
    

    const angleDeg = angle(mouseX,mouseY,anchoreX,anchoreY);
    // console.log(angleDeg)

    const eyes = document.querySelectorAll('.eye-box');
    eyes.forEach( eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`
    })

})

function angle(cx,cy,ex,ey) {

    const dy = ey-cy;
    const dx = ex- cx;

    const rad = Math.atan2(dy,dx); // range(-PI,PI)
    const deg = rad * 180/ Math.PI;
    return deg;
}

document.addEventListener('mousedown', ()=>{

    const eyes = document.querySelectorAll('.eye-dot')
    eyes.forEach(eye => {

        eye.style.height = '9px';
        eye.style.width = '9px';
    })
})

document.addEventListener('mouseup', ()=>{

    const eyes = document.querySelectorAll('.eye-dot')
    eyes.forEach(eye => {

        eye.style.height = '7px';
        eye.style.width = '7px';
    })
})



const infoText = document.getElementById('info-text')

document.getElementById('name').addEventListener('input', e => {
    
    let value = e.target.value;
    console.log(value)
    if(value.length < 6) infoText.innerText = 'Your name is really too short!'
    else infoText.innerText = 'Ahhh! I really like perfect names.'
})

document.addEventListener('mouseover', (e)=>{

    infoText.innerText = e.target.dataset.value
})


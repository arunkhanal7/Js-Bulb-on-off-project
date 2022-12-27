
function lightbulb() {
    const Bulb=document.getElementById('off')
    if (Bulb.match.src('off.jpg')) {
        Bulb.src= 'on.jpg'
    }
    else{
        Bulb.src= 'off.jpg'
    }
    
}
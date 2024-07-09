

function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor=getRandomRGBColor()
})

document.body.style.backgroundColor=getRandomRGBColor()
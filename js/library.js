// creating a function to set random color on mouseover on card 
// this function will genarate random rgb color codes 
function randomColor (){
    let color = [];
    let backGroundColor;
    for(let i= 0; i<3; i++){
        color.push(Math.floor(Math.random()*256));
    }
    return 'rgb(' + color.join(', ') + ')';
}
const cards = document.querySelectorAll('.math-card');
for (const card of cards){
    card.addEventListener('mouseover', function (event) {
        card.style.backgroundColor = randomColor();
        
    })
}
  
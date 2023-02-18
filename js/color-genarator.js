// creating a function to set random color on mouseover on card 
// this function will genarate random rgb color codes 
function randomColor (){
    let color = [];
    
    // decalered an empty array and running a loop 3 times to genarate 3 random number from 0 to 200 (to avoid darker colors) ! as Math.floor is used so the maximum number will be 199  ! each time the loop will return and push 3 numbers into the array and the function will  return a rgb color code as a result ! 

    for(let i= 0; i<3; i++){
        color.push(Math.floor(Math.random()*200));
    }
    return 'rgb(' + color.join(', ') + ')';
}
const cards = document.querySelectorAll('.math-card');
for (const card of cards){
    card.addEventListener('mouseover', function (event) {
        card.style.backgroundColor = randomColor();
        
    })
}
// the same logic is appleacable for others cards

// setting the toogle input feild
document.getElementById('edit-triangle-value').addEventListener('click', function () {
    toogleInputFeild('triangle-input-container');
})

// adding the checkbox feature to allow user set value
document.getElementById('triangle-check').addEventListener('click', function () {
    checkTheValue('first-triangle-case', 'second-triangle-case', 'first-triangle-value', 'second-triangle-value', 'triangle-check','triangle-input-container');

})

// calculating the area and displaying the value
document.getElementById('calculate-triangle-area').addEventListener('click', function () {
    const area = calculateArea(0.5, 'first-triangle-case', 'second-triangle-case');
    if(typeof(area)!== 'undefined' && isNaN(area) === false ){
        displayArea('triangle-title', area);
        document.getElementById("triangle-check").checked = false;
        document.getElementById('first-triangle-value').value = '';
        document.getElementById('second-triangle-value').value = '';
    }
    else{
        document.getElementById("triangle-check").checked = false;
        document.getElementById('first-triangle-value').value = '';
        document.getElementById('second-triangle-value').value = '';
    }

})
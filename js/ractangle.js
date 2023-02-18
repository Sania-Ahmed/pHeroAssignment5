// setting the toogle input feild
document.getElementById('rect-edit').addEventListener('click', function () {
    toogleInputFeild('ract-input-container');
})

// adding the checkbox feature to allow user set value
document.getElementById('rect-check').addEventListener('click', function () {
    checkTheValue('first-rectangle-case', 'second-rectangle-case', 'first-rectangle-value', 'second-rectangle-value', 'rect-check','ract-input-container');

})

// calculating the area and displaying the value
document.getElementById('rect-area-total-btn').addEventListener('click', function () {
    const area = calculateArea(1, 'first-rectangle-case', 'second-rectangle-case');
    if(typeof(area)!== 'undefined' && isNaN(area) === false ){
        displayArea('rectangle-title', area);
        document.getElementById("rect-check").checked = false;
        document.getElementById('first-rectangle-value').value = '';
        document.getElementById('second-rectangle-value').value = '';
    }
    else{
        document.getElementById("rect-check").checked = false;
        document.getElementById('first-rectangle-value').value = '';
        document.getElementById('second-rectangle-value').value = '';
    }

})
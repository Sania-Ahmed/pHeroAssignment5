document.getElementById('parallelogram-edit').addEventListener('click', function () {
    toogleInputFeild('parallelogram-input-container');
})
document.getElementById('parallelogram-check').addEventListener('click', function () {
    checkTheValue('parallelogram-first-case', 'parallelogram-second-case', 'parallelogram-first-value', 'parallelogram-second-value', 'parallelogram-check');

})

document.getElementById('calculate-parallelogram-area').addEventListener('click', function () {
    const area = calculateArea(1, 'parallelogram-first-case', 'parallelogram-second-case');
    if(typeof(area)!== 'undefined' && isNaN(area) === false ){
        displayArea('parallelogram-title', area);
        document.getElementById("parallelogram-check").checked = false;
        document.getElementById('parallelogram-first-value').value = '';
        document.getElementById('parallelogram-second-value').value = '';

    }
    else{
        document.getElementById("parallelogram-check").checked = false;
        document.getElementById('parallelogram-first-value').value = '';
        document.getElementById('parallelogram-second-value').value = '';
    }

})
document.getElementById('rhombus-edit-btn').addEventListener('click', function () {
    toogleInputFeild('rhombus-input-container');
})
document.getElementById('rhombus-checkbox').addEventListener('click', function () {
    checkTheValue('rhombus-first-current-value', 'rhombus-second-current-value', 'rhombus-first-new-value', 'rhombus-second-new-value', 'rhombus-checkbox');

})

document.getElementById('rhombus-calculate-area-btn').addEventListener('click', function () {
    const area = calculateArea(0.5, 'rhombus-first-current-value', 'rhombus-second-current-value');
    if(typeof(area)!== 'undefined' && isNaN(area) === false ){
        displayArea('rhombus-title', area);
        document.getElementById("rhombus-checkbox").checked = false;
        document.getElementById('rhombus-first-new-value').value = '';
        document.getElementById('rhombus-second-new-value').value = '';
    }
    else{
        document.getElementById("rhombus-checkbox").checked = false;
        document.getElementById('rhombus-first-new-value').value = '';
        document.getElementById('rhombus-second-new-value').value = '';
    }

})
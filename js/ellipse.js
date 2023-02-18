document.getElementById('ellipse-edit-btn').addEventListener('click', function () {
    toogleInputFeild('ellipse-input-container');
})
document.getElementById('ellipse-checkbox').addEventListener('click', function () {
    checkTheValue('ellipse-first-current-value', 'ellipse-second-current-value', 'ellipse-first-new-value', 'ellipse-second-new-value', 'ellipse-checkbox');

})

document.getElementById('ellipse-area-calculate-btn').addEventListener('click', function () {
    const area = calculateArea(3.14, 'ellipse-first-current-value', 'ellipse-second-current-value');
    if(typeof(area)!== 'undefined' && isNaN(area) === false ){
        displayArea('ellipse-title', area);
        document.getElementById("ellipse-checkbox").checked = false;
        document.getElementById('ellipse-first-new-value').value = '';
        document.getElementById('ellipse-second-new-value').value = '';
    }
    else{
        document.getElementById("ellipse-checkbox").checked = false;
        document.getElementById('ellipse-first-new-value').value = '';
        document.getElementById('ellipse-second-new-value').value = '';
    }

})
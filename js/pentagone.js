document.getElementById('pentagon-edit-btn').addEventListener('click', function () {
    toogleInputFeild('pentagone-input-container');
})
document.getElementById('pentagon-checkbox').addEventListener('click', function () {
    checkTheValue('pentagone-first-current-value', 'pentagone-second-current-value', 'pentagon-first-new-value', 'pentagon-second-new-value', 'pentagon-checkbox');

})

document.getElementById('pentagon-calculate-area-btn').addEventListener('click', function () {
    const area = calculateArea(0.5, 'pentagone-first-current-value', 'pentagone-second-current-value');
    if(typeof(area)!== 'undefined' && isNaN(area) === false ){
        displayArea('pentagon-title', area);
        document.getElementById("pentagon-checkbox").checked = false;
        document.getElementById('pentagon-first-new-value').value = '';
        document.getElementById('pentagon-second-new-value').value = '';
    }
    else{
        document.getElementById("pentagon-checkbox").checked = false;
        document.getElementById('pentagon-first-new-value').value = '';
        document.getElementById('pentagon-second-new-value').value = '';
    }

})
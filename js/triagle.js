document.getElementById('edit-triangle-value').addEventListener('click', function () {
    toogleInputFeild('triangle-input-container');
})
document.getElementById('triangle-check').addEventListener('click', function () {
    checkTheValue('first-triangle-case', 'second-triangle-case', 'first-triangle-value', 'second-triangle-value', 'triangle-check');

})

document.getElementById('calculate-triangle-area').addEventListener('click', function () {
    const area = calculateArea(0.5, 'first-triangle-case', 'second-triangle-case');
    displayArea('triangle-title', area);
    document.getElementById("triangle-check").checked = false;
    document.getElementById('first-triangle-value').value = '';
    document.getElementById('second-triangle-value').value = '';

})
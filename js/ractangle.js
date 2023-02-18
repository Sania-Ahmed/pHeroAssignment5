document.getElementById('rect-edit').addEventListener('click', function () {
    toogleInputFeild('ract-input-container');
})
document.getElementById('rect-check').addEventListener('click', function () {
    checkTheValue('first-rectangle-case', 'second-rectangle-case', 'first-rectangle-value', 'second-rectangle-value', 'rect-check');

})

document.getElementById('rect-area-total-btn').addEventListener('click', function () {
    const area = calculateArea(1, 'first-rectangle-value', 'second-rectangle-value');
    displayArea('rectangle-title', area);
    document.getElementById("rect-check").checked = false;
    document.getElementById('first-rectangle-value').value = '';
    document.getElementById('second-rectangle-value').value = '';

})
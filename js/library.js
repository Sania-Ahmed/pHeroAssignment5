//   this function wil toogle the input feilds
function toogleInputFeild(elementId) {
    document.getElementById(elementId).classList.toggle('hidden');
}


// this function will enable the checkbox system and will allow user to set different input

function checkTheValue (box1,box2,input1,input2,checkId ) {
    const firstTextCase = document.getElementById(box1);
    const secondTextCase = document.getElementById(box2);
    const firstInputValue = getInputValueById(input1);
    const secondInputValue = getInputValueById(input2);
    if (firstInputValue === '' || secondInputValue === '') {
        alert('input feild can not be empty');
        document.getElementById(checkId).checked = false;
    }
    else{
        firstTextCase.innerText = firstInputValue;
        secondTextCase.innerText = secondInputValue;
        document.getElementById(checkId).checked = true;
    }
    
}

//  this function will get input value from any input feild 

function getInputValueById(elementId) {
    const value = document.getElementById(elementId).value;
    return value;
}

// this function will get inner text from an element 
function getTextById(elementId) {
    const text = document.getElementById(elementId).innerText;
    return text;
}

// this function will calculate area 

function calculateArea(formulaNum, base, height) {
    base = parseFloat(getTextById(base));
    height = parseFloat(getTextById(height));
    const area = parseFloat((formulaNum * base * height).toFixed(2));
    if(isNaN(area) || base < 0 || base < 0){
        alert('please input valid numbers only')
        return;
    }
    return area;
}
// this function will display the area 
let serial = 0;
function displayArea(title, area) {
    const container = document.getElementById('area-calculator-container');
    title = getTextById(title);
    serial += 1;
    const row = document.createElement('tr');
    row.classList.add('flex', 'items-center', 'justify-between', 'gap-2', 'mt-3');
    row.innerHTML = `
    <td class="p-1 m-1 text-center ">${serial}</td>
    <td class="p-1 m-1 text-center ">${title}</td>
    <td class="p-1 m-1 text-center area" >${area}cm<sup>2</sup></td>
    <button class="px-2 py-1 text-center bg-sky-400 text-white rounded convertors"> convert to meter </button>
      `
    container.appendChild(row);
    const convertors = document.querySelectorAll('.convertors');
    for (const convertor of convertors) {
        convertor.addEventListener('click', function (event) {
            const meterArea = area / 10000;
            event.target.parentNode.childNodes[5].innerHTML = `
            ${meterArea}<P>m<sup>2</sup></p>
            ` ;
            convertor.style.display= 'none';
            event.target.parentNode.childNodes[9].style.display= 'block';
            
        })
    }
    const delBtn = document.createElement('button');
    delBtn.innerHTML= 'Delete'
   delBtn.classList.add('px-2','py-1','bg-red-500', 'rounded', 'text-center');
    row.appendChild(delBtn);
    delBtn.style.display= 'none';
    delBtn.addEventListener('click', function(event){
        event.target.parentNode.style.display= 'none';
    })
   
}





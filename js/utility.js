let number = 0;

// Blog button set to the url accordians.html
document.getElementById('blog').addEventListener('click',function(){
    window.location.href="accordians.html";
})


function printNumber(shape,area){
    if(area === 0){
    }
    else{
    number ++;
    const target = document.getElementById('parent-container');
    const child = document.createElement('div');
    child.classList.add("d-flex","justify-content-evenly","align-items-center")
    child.innerHTML = `
    <p>${number}</p>
    <p>${shape}</p>
    <p><span>${area}</span>cm<sup>2</sup></p>
    <p><button class="btn btn-primary convert-m2">Convert to m<sup>2</sup></button></p>
    `
    target.appendChild(child);
}
}


function getInputValuesFromId(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.value;
    const elementValue = parseFloat(elementString);
    const isValid = validationCheck(elementValue);
    if(isValid){
        element.value = '';
        return elementValue;
    }
    else{
        alert("Values cann't be empty, string, negative or mixed!");
        element.value = '';
        return 0;
    }
}
function validationCheck(value){
    if(isNaN(value) || value<1){
        return false;
    }
    else{
        return true;
    }
}

function multiplications(value1,value2){
    return value1*value2;
}


function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}


function inputValuesTri(){
    const triWidth = getInputValuesFromId('t-b');
    const triHeight = getInputValuesFromId('t-h');
    const area = multiplications(triWidth,triHeight);
    return area;
}
function inputValuesRect(){
    const recWidth = getInputValuesFromId('r-w');
    const recHeight = getInputValuesFromId('r-l');
    const area = multiplications(recHeight,recWidth);
    return area;
}
function inputValuesParallelogram(){
    const paraHeight = getInputValuesFromId('p-h');
    const paraWidth = getInputValuesFromId('p-b');
    const area = multiplications(paraHeight,paraWidth);
    return area;
}
function inputValuesRombos(){
    const romHeight = getInputValuesFromId('r-d1');
    const romWidth = getInputValuesFromId('r-d2');
    const area = multiplications(romHeight,romWidth);
    return area;
}
function inputValuesPentagon(){
    const penWidth = getInputValuesFromId('p-p')
    const penHeight = getInputValuesFromId('p-b');
    const area = (multiplications(penHeight,penWidth));
    console.log(area);
    // return area;
}
function inputValuesEllips(){
    const elepHeight = getInputValuesFromId('e-a');
    const elepWidth = getInputValuesFromId('e-b');
    const area = (multiplications(elepHeight,elepWidth));
    return area;
}

const editToogle = document.getElementsByClassName('input-toogle')
const editInput = document.getElementsByClassName('edit');

for(const items of editInput){
    items.addEventListener('click',function (event){
        const grandParent = event.target.parentNode.parentNode.parentNode;
        const textArea = grandParent.querySelector('.context')
        textArea.setAttribute('class','.none');
    })
}
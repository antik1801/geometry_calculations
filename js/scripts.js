
const miterConverter = document.getElementsByClassName('convert-m2');
for(const items of miterConverter){
    items.addEventListener('click',function(event){
        
    })
}

const cardClassList = document.getElementsByClassName('card');
for(const items of cardClassList){
    items.addEventListener('mouseenter',function(event){
        const bgRandGenarate = generateRandomColor();
        event.target.style.backgroundColor = bgRandGenarate;
    })
}

document.getElementById('btn-triangle-calculate').addEventListener('click',function(){
   const area = parseFloat(inputValuesTri().toFixed(2));
   printNumber("Triangle",area);

})
document.getElementById('btn-rectangle-calculate').addEventListener('click',function(){
    const area = parseFloat(inputValuesRect().toFixed(2));;
    printNumber("Rectangle", area);
})
document.getElementById('btn-parallelogram-calculate').addEventListener('click',function(){
    const area = parseFloat(inputValuesParallelogram().toFixed(2));
    printNumber("parallelogram",area);
})
document.getElementById('btn-rhombus-calculate').addEventListener('click',function(){
    const area = parseFloat((0.5 * inputValuesRombos()).toFixed(2));
    printNumber("Rhombus",area);
})
document.getElementById('btn-pentagon-calculate').addEventListener('click',function(){
    const area = parseFloat(inputValuesPentagon().toFixed(2));
    printNumber("Pentagon",area);
})
document.getElementById('btn-ellipse-calculate').addEventListener('click',function(){
    const area = parseFloat(inputValuesEllips().toFixed(2));
    printNumber("Ellips",area);
})



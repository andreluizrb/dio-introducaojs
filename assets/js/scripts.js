var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    currentNumber  = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    controls(currentNumber);    
    
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    controls(currentNumber);

}

function controls(currentNumber) {
    if (currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    }
    else{
        currentNumberWrapper.style.color = 'blue';
    }

    document.getElementsByName("subtrair")[0].disabled = !(currentNumber > -10);
    document.getElementsByName("adicionar")[0].disabled = !(currentNumber < 10);



}


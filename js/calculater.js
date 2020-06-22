let runningTotal=0;
let buffer="0";
let previousOperator=null;
const screen = document.querySelector(".screen");
document.querySelector(".calc-buttons").addEventListener("click",function(event){
  
    buttonClick(event.target.innerText);
console.log(event.target.innerText); ///  User click gareko data show gareko

});


 function buttonClick(value) { //// take some form of value.

    if (isNaN(parseInt(value))){
        handleSymbol(value)

    }else{
        
        handleNumber(value)
    }
    rerender()
 }

 function handleNumber(value){  //// value pass gareko paremeter bata
    if (buffer==="0"){
       buffer = value;
    }
    else{
        buffer += value; /// buffer= buffer+values;

    }
   


}
function rerender(){
    screen.innerText= buffer; /////  screen ma print garene function bhanko


}

 function handleSymbol(value){
     switch (value) {
         case 'C':
             buffer ="0";
             runningTotal= 0;
             previousOperator=null;
             break;
        case '=':
            if (previousOperator ===null){
                return;

            }
            flushOperation(parseInt(buffer));
            previousOperator=null;
            buffer="" + runningTotal;
            runningTotal=0;
            break;
        case '←':
            if (buffer.length ===1){
                buffer= "0";
                
                }
                else{
                    buffer=buffer.substring(0,buffer.lenth -1);
                }
                break;
              case '+':
               case'-':
               case '÷':
                case '*':
                handleMath(value);
                break;
            


     }
    

   
 }

    function handleMath(value){
        const intBuffer = parseInt(buffer); // parsInt (buffer) cannot be change
        if (runningTotal === 0) {
            runningTotal = intBuffer;

        }else {
            flushOperation(intBuffer) /// storage
        }
        previousOperator=value;
        buffer= '0';

    }
    function flushOperation(intBuffer) {
        if (previousOperator === '+')
        {
            runningTotal += intBuffer;
        }
        else if(previousOperator==='-')
        {
            runningTotal -=intBuffer;
        }
        else if(previousOperator==='*')
        {
            runningTotal *=intBuffer;
        }
        else
        {
            runningTotal /=intBuffer;
        }
        

    }



 


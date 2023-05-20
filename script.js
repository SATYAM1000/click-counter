


let increment=document.getElementById("add");
let decrement=document.getElementById("subtract")
let output=document.getElementById("answer")
let reset=document.getElementById("reon");

let display=0;


let increaseByOne=()=>
{
    ++display;
   // console.log(display);
    output.value=display;
}

let decreaseByOne=()=>{
    if(display>0)
    {
    --display;
    }
    //console.log(display);
    output.value=display;
}

let resetValue=()=>{

    display=0;
    output.value=display;
}
// increment.addEventListener("click", increaseByOne());
// decrement.addEventListener("click", decreaseByOne);
// reset.addEventListener("click", resetValue);

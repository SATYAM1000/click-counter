


let increment=document.getElementById("add");
let decrement=document.getElementById("subtract")
let output=document.getElementById("answer")
let reset=document.getElementById("reon");

let display=0;


let increaseByOne=()=>
{
    ++display;
    output.value=display;
}

let decreaseByOne=()=>{
    if(display>0)
    {
    --display;
    }
    output.value=display;
}

let resetValue=()=>{

    display=0;
    output.value=display;
}


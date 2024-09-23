let input = document.querySelector('#inpt');
let item = document.querySelectorAll('.item');
const calculator = (btnvalue)=>{
    // input.value+= btnvalue;
     console.log(input.value);
    if(btnvalue==="/" || btnvalue ==="*"  || btnvalue ==="-"  || btnvalue ==="+"  || btnvalue ==="."){
        input.value += btnvalue;
       // console.log(input.value);
    }
    else if(btnvalue=="AC"){
      input.value = "";
      
    }
    else if(btnvalue>=0 && btnvalue <10 ){
        input.value+=btnvalue;
        //console.log(input.value);
    }
    else if(btnvalue=="DL"){
       input.value = input.value.toString().slice(0,-1)
       //console.log(input.value);
    }
    if(btnvalue ==="=" ){
        input.value = eval(input.value);
        //console.log(input.value);
    }
;
}
    for(let itm of item){
        itm.addEventListener("click",function(event){
            calculator(event.target.value);
            console.log(event)
            // console.log(event.target.value);
            // input.value=event.target.value;
            // console.log("value added") 
        })
      
    }
   
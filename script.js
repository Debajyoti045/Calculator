let string = "";
let buttons = document.body.querySelectorAll('.element');
let input = document.body.getElementsByClassName('inputtext')[0]
Array.from(buttons).forEach((items)=>{
    items.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='C'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML=='x'){
            let nstring = string.substring(0,string.length-1);
            string = nstring;
            input.value = string;
        }
        else if(e.target.innerHTML == '='){
          try {
            string = eval(string);
            input.value = string;
          } 
          catch (error) {
             string = "";
             input.value = "ERROR!"
          }
        }
        else{
          string+=e.target.innerHTML;
          input.value = string;
        }
    })
})
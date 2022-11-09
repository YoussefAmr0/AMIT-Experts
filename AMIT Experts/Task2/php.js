let submit= document.getElementById("btn")
 function disable(x){
    x.disabled= true;
}

 function enable(y){
    y.addEventListener('click',()=>{
        submit.disabled=false;
    })
 }
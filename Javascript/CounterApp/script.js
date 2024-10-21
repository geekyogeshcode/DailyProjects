const counter=document.querySelector('#counter')


function counterUpdate(operation){
    let value=parseInt(counter.textContent)

    if(operation === 'increment' && value<10){
        counter.textContent=value+1
    }else if(operation === 'decrement' && value>0){
        counter.textContent=value-1
    }else if(operation === 'reset'){
        counter.textContent=0
    }
}


document.body.addEventListener('click',(e) =>{
    if(e.target.id === "Increment")  counterUpdate('increment')
    if(e.target.id === "Decrement") counterUpdate('decrement')
    if(e.target.id === "Reset") counterUpdate('reset')
})
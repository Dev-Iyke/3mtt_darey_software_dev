const output = document.getElementById('screen')
console.log(output)

 function inputValue(value){
    if(output.textContent.length > 10){
        output.textContent = 'Too many characters'
    }else{
        output.textContent += value
    }
    
}
function clearOutput(){
    output.textContent = ''
}
function showResult(){
    try{
        const result = eval(output.textContent)
        console.log(result)
        output.textContent =  result.toFixed(5)
    }
    catch(error){
        output.textContent = 'Syntax Error';
        
    }
    
    
}
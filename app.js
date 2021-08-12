var btnTranslator=document.querySelector("#btn-translate")
var txtInput=document.querySelector("#text-input")

console.log(txtInput);

function clickHandler(){
    console.log("clicked")
    console.log("input",txtInput.value)
}

btnTranslator.addEventListener("click",clickHandler)
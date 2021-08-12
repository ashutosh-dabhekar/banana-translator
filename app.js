var btnTranslator=document.querySelector("#btn-translate")
var txtInput=document.querySelector("#text-input")
var outputDiv=document.querySelector("#output")


function clickHandler(){
    outputDiv.innerText="ajsjsjsjsjs "+ txtInput.value;
}

btnTranslator.addEventListener("click",clickHandler)
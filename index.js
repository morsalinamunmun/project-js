function clickB(){
    const textArea = document.getElementById("text-area");
    textArea.classList.add('font-bold');
}

function clickI(){
    const textArea = document.getElementById('text-area');
    textArea.classList.add('italic')
}

function clickU(){
    const textArea = document.getElementById('text-area');
    textArea.classList.add('underline');
}

function clickLeftAlign(){
    const textArea = document.getElementById('text-area');
    textArea.classList.add('text-left');
}
function clickCenterAlign(){
    const textArea = document.getElementById('text-area');
    textArea.classList.add('text-center');
}

function clickJustifyAlign(){
    const textArea = document.getElementById('text-area');
    textArea.classList.add('text-justify');
}
function clickRightAlign(){
    const textArea = document.getElementById('text-area');
    textArea.classList.add('text-right');
}

function clickFontSize(){
    const textArea = document.getElementById('text-area');
    const fontSize = document.getElementById("font-size");

    textArea.classList.add('text-'+ id);
}

function element(id){
   let fontValue = id;
   return fontValue;
}
/* function field(id){
    const fieldText = document.getElementById("id");
    return fieldText;
} */
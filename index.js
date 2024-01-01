function KeyHasBeenPressed(){
    let textAreaContent = document.querySelector('textarea')

    let charCount = document.querySelector('.charCount')
    charCount.innerHTML = String(textAreaContent.value).length;

    let wordCount = document.querySelector('.wordCount')
    wordCount.innerHTML = String((textAreaContent.value).split(' ').length)

    let charLimit = 200
    let charLimitElement = document.querySelector('.charLimitSpan')
    charLimitElement.innerHTML = charLimit - textAreaContent.value.length

    if(textAreaContent.value.length > 199){
        textAreaContent.value = String(textAreaContent.value).substring(0, charLimit)
    }
}

document.querySelector('.clearButton').addEventListener('click', ()=>{
    document.querySelector('textArea').value = ''
    document.querySelector('.charCount').innerHTML = 0
    document.querySelector('.wordCount').innerHTML = 0
    document.querySelector('.charLimitSpan').innerHTML = 200
})
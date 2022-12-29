function clicado(){
    var imgHTML=window.document.querySelector('img#imgHTML')
    var horaHTML=window.document.querySelector('input#in1')
    var horaJS=Number(horaHTML.value)

    const div = document.querySelector('main');
    const style = window.getComputedStyle(div);
    const color = style.color;

    const text = document.querySelector('p.texto')

    if (horaJS<6) {
        imgHTML.src='../images/madrugada.png'
        div.style.backgroundColor = '#07090E'; /* Não alterei pq n quis, entretanto, é desse jeito que altera background em divs. */
        div.style.color = 'whitesmoke';
        text.innerHTML='Boa madrugada! 🌑'
    } else if (horaJS<12){
        imgHTML.src='../images/manhã.png'
        div.style.color = 'whitesmoke';
        text.innerHTML='Bom dia! 🌥️'
    } else if (horaJS<18){
        imgHTML.src='../images/tarde.png'
        div.style.color = 'whitesmoke';
        text.innerHTML='Boa tarde! ☀️'
    } else{
        imgHTML.src='../images/note.png'
        div.style.color = 'whitesmoke';
        text.innerHTML='Boa noite! 🌚'
    }
}
const botaoOnOff = document.getElementById('botaoOnOff');
const lampada = document.getElementById('lamp');

function seLampadaQuebrada () {
    return lampada.src.indexOf ('quebrada') > -1

}

function lampadaOn () {
    if(!seLampadaQuebrada ()){
    lampada.src = './img/ligada.jfif'  
}
}

function lampadaOff (){
    if(!seLampadaQuebrada()){
    lampada.src = '/img/apagada.jfif'
}
}

function LampadaQuebrada(){
    lampada.src = '/img/quebrada.jpg'
}

function LampadaOnOff() {
    if(botaoOnOff.textContent == 'Ligar'){
        lampadaOn();
        botaoOnOff.textContent = 'Desligar';
    }else{
        lampadaOff()
        botaoOnOff.textContent = 'Ligar'
    }
}

botaoOnOff.addEventListener('click',LampadaOnOff);
lampada.addEventListener('mouseover', lampadaOn);
lampada.addEventListener('mouseleave', LampadaOnOff);
lampada.addEventListener('dblclick', LampadaQuebrada);
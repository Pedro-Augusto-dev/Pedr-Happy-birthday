const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minutos')
const segundo = document.getElementById('segundos')

const lançamento = '12 dec 2023'

function countDowm(){
    const dataLanc = new Date(lançamento)
    const hoje = new Date()
    
    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) %24;
    const finalMinutos = Math.floor(segTotal / 60 ) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = finalDias
    hora.innerHTML = formatoTempo(finalHoras)     
    minuto.innerHTML = formatoTempo(finalMinutos)
    segundo.innerHTML = formatoTempo(finalSegundos) 
}

function formatoTempo( tempo ){
     return tempo < 10? `0${tempo}` : tempo;
}

countDowm();
setInterval(countDowm, 1000)

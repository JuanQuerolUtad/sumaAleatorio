
let b1 = document.getElementById("n1");
let b2 = document.getElementById("n2");
let b3 = document.getElementById("n3");
let b4 = document.getElementById("n4");
let b5 = document.getElementById("n5");
let botones = document.getElementsByClassName("numeros");
let final = document.getElementById("nf");
let stFinal = document.getElementById("numeroF");
let numS = document.getElementById("ns");
let aleatorio = 0;
let nf = 0;
let puntosU = 0;
let record = 0;
let jugadas = 0;
let ganadas = 0;
let suma = 0;
let nu1 = 0;
let nu2 = 0;
let nu3 = 0;
let nu4 = 0;
let nu5 = 0;
init();
function init() {
    // Recupera valores desde localStorage, si existen
    jugadas = parseInt(localStorage.getItem("jugadas")) || 0;
    ganadas = parseInt(localStorage.getItem("ganadas")) || 0;
    record = parseInt(localStorage.getItem("record")) || 0;

    aleatorio = 0;
    nf = 0;
    puntosU = 0;
    suma = 0;
    nu1 = 0;
    nu2 = 0;
    nu3 = 0;
    nu4 = 0;
    nu5 = 0;
    botones.style;
    m = 1;
    s = 0;
    document.getElementById("cronometro").innerHTML = "01:00";

    // Imprime los valores en pantalla
    document.getElementById("pJugadas").innerHTML = `Jugadas: ${jugadas}`;
    document.getElementById("pGanadas").innerHTML = `Ganadas: ${ganadas}`;
    document.getElementById("record1").innerHTML = `Record: ${record} puntos`;
}

function play(){
    
    b1.innerHTML="?"
    b2.innerHTML="?"
    b3.innerHTML="?"
    b4.innerHTML="?"
    b5.innerHTML="?"
    final.innerHTML="?"
    stFinal.style.backgroundColor="rgb(130, 141, 99)"
    numS.innerHTML="0"
    aleF()
    generar()
    tiempo();
    document.getElementById("play").style.opacity="0"
    document.getElementById("pActual").innerHTML= `${puntosU} puntos`;
}
function aleF(){
    aleatorio=Math.ceil(Math.random()*1000);
    
    final.innerHTML=aleatorio;
    nf=aleatorio
    


}
function tiempo(){
            
    escribir();
    document.getElementById("play").style.display='none';
    miTo=setTimeout(gameover, 60000);
    id = setInterval(escribir,1000);
    
   

}
function escribir(){
    var  minutos, segundos;
    s--;
    if (s<0){
        m--;
        s=59;
    }
    
    

    if (s<10){
        segundos="0"+s;
    }else{
        segundos=s;
    }

    if (m<10){
        minutos="0"+m;
    }else{
        minutos=m;
    }
    document.getElementById("cronometro").innerHTML =  minutos + ":" + segundos;
}
function gameover() {
    clearInterval(id);
    clearTimeout(miTo);
    document.getElementById("play").style.display = "block";
    b1.innerHTML = "?";
    b2.innerHTML = "?";
    b3.innerHTML = "?";
    b4.innerHTML = "?";
    b5.innerHTML = "?";

    stFinal.style.backgroundColor = "red";
    puntos();
    jugadas++;
    document.getElementById("pJugadas").innerHTML = `Jugadas: ${jugadas}`;
    document.getElementById("pGanadas").innerHTML = `Ganadas: ${ganadas}`;
    document.getElementById("play").style.opacity = "1";

    // Guarda los valores en localStorage
    localStorage.setItem("jugadas", jugadas);
    localStorage.setItem("ganadas", ganadas);
    localStorage.setItem("record", record);

    init();
}
function aleatorioNum() {
    aleatorio=Math.ceil(Math.random()*1000);
    
}
function opcion1(){
    
    suma+=nu1
    numS.innerHTML=suma
    if(suma==nf){
        ganaste()
    }
    else if(suma>nf){
        gameover()
    }
    generar()
}
function opcion2(){
    suma+=nu2
    numS.innerHTML=suma
    if(suma==nf){
        ganaste()
    }
    else if(suma>nf){
        gameover()
    }
    generar()
}
function opcion3(){
    suma+=nu3
    numS.innerHTML=suma
    if(suma==nf){
        ganaste()
    }
    else if(suma>nf){
        gameover()
    }
    generar()
}
function opcion4(){
    suma+=nu4
    numS.innerHTML=suma
    if(suma==nf){
        ganaste()
    }
    else if(suma>nf){
        gameover()
    }
    generar()
}
function opcion5(){
    suma+=nu5
    numS.innerHTML=suma
    if(suma==nf){
        ganaste()
    }
    else if(suma>nf){
        gameover()
    }
    generar()
}
function generar() {
    aleatorioNum()
    b1.innerHTML=aleatorio
    nu1=aleatorio
    aleatorioNum()
    b2.innerHTML=aleatorio
    nu2=aleatorio
    aleatorioNum()
    b3.innerHTML=aleatorio
    nu3=aleatorio
    aleatorioNum()
    b4.innerHTML=aleatorio
    nu4=aleatorio
    aleatorioNum()
    b5.innerHTML=aleatorio
    nu5=aleatorio
}
function ganaste() {
    clearInterval(id);
    clearTimeout(miTo);
    document.getElementById("play").style.display = "block";
    b1.innerHTML = "?";
    b2.innerHTML = "?";
    b3.innerHTML = "?";
    b4.innerHTML = "?";
    b5.innerHTML = "?";

    stFinal.style.backgroundColor = "green";
    puntos();
    jugadas++;
    ganadas++;
    document.getElementById("pJugadas").innerHTML = `Jugadas: ${jugadas}`;
    document.getElementById("pGanadas").innerHTML = `Ganadas: ${ganadas}`;
    document.getElementById("play").style.opacity = "1";

    // Guarda los valores en localStorage
    localStorage.setItem("jugadas", jugadas);
    localStorage.setItem("ganadas", ganadas);
    localStorage.setItem("record", record);

    init();
}
function puntos() {
    puntosU=suma-nf;
    puntosU=1000-puntosU;
    
    if (record==0 || record<puntosU) {
        record=puntosU
    }
    document.getElementById("pActual").innerHTML= `${puntosU} puntos`;
    document.getElementById("record1").innerHTML= `Record: ${record} puntos`;
}
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'white';
pincel.fillRect(0,0,600,400);
var cor = ['aqua', 'pink', 'purple', 'black', 'gray', 'Chartreuse', 'red'];
var corCirculo = 0;
var raio = 10;
var desenha = false;

function desenhaCirculo(evento){

    if(desenha){

        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;

       if (evento.shiftKey && evento.altKey) {


        }else if(evento.shiftKey && raio < 40){ 
            raio += 10;
        }else if(evento.altKey && raio > 10)  {
            raio -= 5;
        }

        pincel.fillStyle = cor[corCirculo];
        pincel.beginPath();
        pincel.arc(x,y,raio,0,2*Math.PI);
        pincel.fill();
    }
    console.log(x + ',' + y);

}

function mudaCor(){

    if (corCirculo< cor.length-1){
        corCirculo++;
    }else {
        corCirculo = 0;
    }
    return false;
}

function iniciaDesenho(){
    desenha = true;
}
function paraDesenho(){
    desenha = false;
}

tela.onmousedown = iniciaDesenho;
tela.onmouseup = paraDesenho;
tela.onmousemove = desenhaCirculo;    
tela.oncontextmenu = mudaCor;

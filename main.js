function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const ListasDeTeclas = document.querySelectorAll('.tecla');
let contador=0

//enquanto
while(contador<ListasDeTeclas.length){
    ListasDeTeclas[contador].onclick=tocaSom;

    contador=contador + 1;
    console.log(contador);
}




function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const ListasDeTeclas = document.querySelectorAll('.tecla');

let contador=0

//enquanto
while(contador<ListasDeTeclas.length){
    ListasDeTeclas[contador].onclick=tocaSom;

    const tecla= ListasDeTeclas[contador];
    const instrumento=teca.classlist[1];

//tamplade string

    tecla.onclick=function () {
        tocaSom(idAudio);
    }
    contador=contador + 1;

}

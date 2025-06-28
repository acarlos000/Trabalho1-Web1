function alterarVagas(blocoNumero, quantidade){
    var ocupadasSpan = document.getElementById("ocupadas" + blocoNumero);
    var capacidadeSpan = document.getElementById("capacidade" + blocoNumero);
    var statusElem = document.getElementById("status" + blocoNumero);
    var bloco = document.getElementById("bloco" + blocoNumero);

    var ocupadas = parseInt(ocupadasSpan.textContent);
    var capacidade = parseInt(capacidadeSpan.textContent);

    ocupadas = ocupadas + quantidade;

    if(ocupadas < 0){
        ocupadas = 0;
    }
    if(ocupadas > capacidade){
        ocupadas = capacidade;
    }

    ocupadasSpan.textContent = ocupadas;

    var status = "";
    if(ocupadas < capacidade / 2) {
        status = "Disponível";
    bloco.style.backgroundColor = " #10b981";
    }
    else if (ocupadas < capacidade){
        status = "Quase-Cheio";
        bloco.style.backgroundColor = " #a188dc";
    }
    else {
    status = "Lotado";
    bloco.style.backgroundColor =" #f8a5a5";
    }

    statusElem.textContent = status;
}
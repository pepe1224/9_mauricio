function calcularNotaFinal() {
    //recuperamos los valores introducidos por el usuario para las notas de primera evaluación y segunda evaluación
    var notaPrimeraEv = document.getElementById("nota_primera_ev").value;
    var notaSegundaEv = document.getElementById("nota_segunda_ev").value;
    var divResultado = document.getElementById("resultado");
    //en la variable notaFinal guardamos (notaPrimeraEv + notaSegundaEv) / 2
    var notaFinal = (parseInt(notaPrimeraEv) + parseInt(notaSegundaEv)) / 2;
    if (notaFinal >= 5) {
        //TODO: recuperar por id el elemento resultado, y asignar a su propiedad innerHTML el texto "APROBADO :)"
        //TODO: recuperar por id el elemento resultado y asignar a su propiedad style.backgroundColor el color "green"
    } else {
        //TODO: recuperar por id el elemento resultado, y asignar a su propiedad innerHTML el texto "VUELVE A INTENTARLO :("
        //TODO: recuperar por id el elemento resultado y asignar a su propiedad style.backgroundColor el color "red"
    }
}
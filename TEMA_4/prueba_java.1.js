//Soy un comentario en línea
/*j-----------*/
//alert('preuba de codigo');
//onsole.log('hola mundo');
var mensaje = 'hola mundo'
console.log(mensaje);
console.log(mensaje);
console.log(document);
console.log(localStorage);


var esViernes = true;
console.log("Es vierne sy queremos irnos" + esViernes);
//debugger
if (esViernes == true) {
        console.log('Pues si es viernes')
}

//var nameUser = prompt('Introduzaca su nombre');
//console.log('El nombre de usuario es:' + nameUser);
//document.write('<h1>' + nameUser + '</h1>')

function comprobarPass(){
        var pass1 = document.getElementById('pass1').value;
        var pass2 = document.getElementById('pass1').value;
        return pass1 == pass2;
}

function enviarFormulario(){
        console.log('Llamado a la función enviarFormulario');
        var div = document.getElementById('mensaje');

        //las pass coinciden
        if (comprobarPass()){
                var nombre = document.getElementById('nombre').value;
                div.innerHTML = nombre + 'Password OK';
                div.style.backgroundColor = 'green';
                //document.writeln('<h1>' + nombre + '</h1>');
                //document.writeln('<h1>Password</h1>');
        }else{
                //document.writeln('<h1>ERROR: Las contraseñas no conciden</h1>');
                div.innerHTML = 'Password OK';
                div.style.backgroundColor = 'red';
        }
}

function cambiarColor(color){
        var div = document.getElementById('mensaje');
        div.style.backgroundColor = color;
}
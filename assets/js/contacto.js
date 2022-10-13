
/*Init email js*/
(function(){
    emailjs.init("SY9HJBbS46YCiQfNz");
})();
      
function enviarMail(){
    const serviceID= "service_ikp6o26";
    const templateID= "template_ajbzjtp";
    let parametros={
        fullName : document.getElementById("fullName").value,
        emailAddress : document.getElementById("emailAddress").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }
    console.log(parametros)
    emailjs.send(serviceID,templateID,parametros)
    .then(
        response=>{
            document.getElementById("fullName").value="";
            document.getElementById("emailAddress").value="";
            document.getElementById("subject").value="";
            document.getElementById("message").value="";
            alert("¡Envio exitoso, pronto estaremos respondiendo!")
        }
    )
    .catch(error=>{
        console.log(error);
        alert("Lo lamantamos pero no pudimos enviar mail, por favor intenta nuevamente")
    })
}


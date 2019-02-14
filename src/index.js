/* Se usa para declarar variable para dar función al boton de Comenzar */
const button_init = document.getElementById("clickInit");
/*Se llama a la acción del boton de comenzar*/
button_init.addEventListener('click',()=>{
  document.getElementById('intro').style.display="none";
  document.getElementById('container').style.display="block";

});
/* se inicia declarando el valor final en vacio
porque llenara con el resultado en la caja-cipher
luego se llama crea la función para llamar del cipher.j al index.js*/
let final = "";

/* se declara la funcion del boton encode declarade en cipher.js*/
const encode = document.getElementById("clickEncode");

/* se llama a la funcion del boton encode declarade en cipher.js*/
encode.addEventListener('click', () => {
/* se declara las variables del offser y del mensaje*/
   const skipNumber = document.getElementById("skipNumber");
   const textMessage = document.getElementById("textMessage");

/* se crean variables que contenga el número de offset y de mensaje sin cifras textMessage con el valor obtenido */
   let number= skipNumber.value;
   let message = textMessage.value;
   final= cipher.encode(number,message)
/*Se declara el valor final para la caja cipher content para guardar el resultado de encode*/
   document.getElementById('cipherContent').value=final;
})




const decode = document.getElementById("clickDecode");
decode.addEventListener('click', () => {

   const skipNumber = document.getElementById("skipNumber");
   const textMessage = document.getElementById("textMessage");

   let number= skipNumber.value;
   let message = textMessage.value;

   final= cipher.decode(number,message)

   document.getElementById('cipherContent').value=final;
})

/*Para retornar al home*/
/*se crea variable pata declarar la función del boton de regreso a home*/
const home = document.getElementById("retHome");
/*Se llama a la acción de la función de regresar a home*/
home.addEventListener('click',()=>{
  /*se declara que al presionar home retorne intro en html y el id container invisible*/
  document.getElementById('intro').style.display="block";
  document.getElementById('container').style.display="none";
});

/*Para borrar cajas de texto*/
const clean = document.getElementById("clear");
/*Se llamada a la accion del de la variable clean para la función de clear*/
clean.addEventListener('click',()=>{
  /*se declara que al hacer la función solo muestre la caja de container
  eliminando el valor de los id textmessage, skipnumer, y ciphercontent*/
  document.getElementById('container').style.display="block";
  document.getElementById('textMessage').value="";
  document.getElementById('cipherContent').value="";
  document.getElementById('skipNumber').value="";
});

/*se declara boton para enviar e-mail*/
const sending = document.getElementById("send");
/*se indica que a la acción de la función se inicaría un promp solicitando un e-mail
luego del alert un alert*/
sending.addEventListener('click',()=>{
  prompt('Ingresa tu e-mail para envío tu nueva clave')
  alert('Clave enviada')
});


/*let final = "";

const encode = document.getElementById("clickEncode");
encode.addEventListener('click', () => {

   const skipNumber = document.getElementById("skipNumber");
   const textMessage = document.getElementById("textMessage");

   let number= skipNumber.value;
   let message = textMessage.value;
   final= cipher.encode(number,message)
   document.getElementById('cipherContent').value=final;
})

const decode = document.getElementById("clickDecode");
decode.addEventListener('click', () => {

   const skipNumber = document.getElementById("skipNumber");
   const textMessage = document.getElementById("cipherContent");

   let number= skipNumber.value;
   let message = textMessage.value;


   final= cipher.decode(number,message) 
   document.getElementById('cipherContent').value=final;
})*/

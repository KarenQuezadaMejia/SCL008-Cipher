
const button_init = document.getElementById("clickInit");
button_init.addEventListener('click',()=>{
  document.getElementById('intro').style.display="none";
  document.getElementById('container').style.display="block";

});

let final = "";

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
   const textMessage = document.getElementById("textMessage");

   let number= skipNumber.value;
   let message = textMessage.value;

   final= cipher.decode(number,message)

   document.getElementById('cipherContent').value=final;
})


const home = document.getElementById("retHome");
home.addEventListener('click',()=>{
  document.getElementById('intro').style.display="block";
  document.getElementById('container').style.display="none";
});

const clean = document.getElementById("clear");
clean.addEventListener('click',()=>{
  document.getElementById('container').style.display="block";
  document.getElementById('textMessage').value="";
  document.getElementById('cipherContent').value="";
  document.getElementById('skipNumber').value="";
});

const sending = document.getElementById("send");
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

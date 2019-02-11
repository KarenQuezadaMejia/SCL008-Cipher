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

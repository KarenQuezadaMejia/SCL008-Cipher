window.cipher = {
/*para la función encode se tomaran valores de un offset y un string*/
  encode(offset,string){
    /*se declaran variables de nweMessage, newmssag1, result en vacios porque guardaran
    contenido de las futuras acciones*/
     let newMssag="";
     let newMssag1 ="";
     let result ="";
     /*se crea una variable de mensaje que contendra el string*/
     let mssag = string;
     /*se inicia indicando que el inicio sera 0, calculando el largo del string, sumando a 1*/
     for(let i=0; i<string.length; i++)
     {
      /*en donde el nuevo mensaje me transformara a un valor ascii de acuerdo a la posición guardado en newmssage*/
         newMssag= mssag.charCodeAt(i);
         /*si el nuevo mensaje es igual a 32 me va a retornar el mismo valor que es un espacio*/
        if (newMssag===32){
          /*en donde el resultado me devolvera el valor sin formula para respetar el espacio*/
          result+=String.fromCharCode(newMssag);
         }
         /*si el rango del valor esta entre 32 y 64*/
        else if( newMssag>=32 && newMssag<=64)
          {
            /*Para números y caracteres*/
            /*se declara el newmssge1 que contendra el mensaje, en donde el rrango si es menor a 32 sumando el offset
            más el residuo y agregando 32 -formula michelle*/
             newMssag1=(newMssag -32 +parseInt(offset))%33 + 32;
             /*da como resultado el string tramsformado al valor del ascci del mensaje guardado de acuerdo a la formula
             en donde el mensaje se guardará en la variable result*/
             result += String.fromCharCode(newMssag1);

           }
           /*Para minúsculas*/
            /*se declara el newmssge1 que contendra el mensaje, en donde el rrango si es menor a 97 sumando el offset
            más el residuo y agregando 97 -formula michelle*/
          else if( newMssag>=97 && newMssag<=122)
          {
             newMssag1=(newMssag -97 +parseInt(offset))%26 + 97;
             result += String.fromCharCode(newMssag1);

           }
           /*Para mayuscúlas*/
          else if( newMssag>=65 && newMssag<=90)
          {
             newMssag1=(newMssag -65 +parseInt(offset))%26 + 65;
             result += String.fromCharCode(newMssag1);

           }

         }
         /*como final en el resultado retornará el valor guardado de acuerdo a la condición 
         de los parametros ingresados, teniendo en cuenta que result inicio como variable con strings vacios */
           return result;
    },

 
  decode(offset,string){
     let newMssag=0;
     let newMssag1 =0;
     let result ="";

     let mssag = string;

     for(let i=0; i<string.length; i++)
     {
         newMssag= mssag.charCodeAt(i);

        if (newMssag===32){
          result+=String.fromCharCode(newMssag);
         }

        else if( newMssag>=32 && newMssag<=64)
          {
             newMssag1=(newMssag -64 -parseInt(offset))%33 + 64;
             result += String.fromCharCode(newMssag1);

           }

          else if( newMssag>=97 && newMssag<=122)
          {
             newMssag1=(newMssag -122 -parseInt(offset))%26 + 122;
             result += String.fromCharCode(newMssag1);

           }

          else if( newMssag>=65 && newMssag<=90)
          {
             newMssag1=(newMssag -90 -parseInt(offset))%26 + 90;
             result += String.fromCharCode(newMssag1);

           }

         }
           return result;
    },
}
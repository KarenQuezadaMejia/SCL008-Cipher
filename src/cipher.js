window.cipher => {

	encode(offset,string){
     let newMssag="";
     let newMssag1 ="";
     let result ="";

     let mssag = string.toUpperCase();

     for(let i=0; i<string.length; i++)
     {
         newMssag= mssag.charCodeAt(i);

         if( newMssag>=65 && newMssag<=90)
          {
             newMssag1=(newMssag -65 +parseInt(offset))%26 + 65;
             result += String.fromCharCode(newMssag1);

           }
         }
           return result;
		},

 
  decode(offset,string){
     let newMssag="";
     let newMssag1 ="";
     let result ="";

     let mssag = string.toUpperCase();

     for(let i=0; i<string.length; i++)
     {
         newMssag= mssag.charCodeAt(i);

         if( newMssag>=65 && newMssag<=90)
          {
             newMssag1=(newMssag -90 -parseInt(offset))%26 + 90;
             result += String.fromCharCode(newMssag1);

           }
         }
           return result;
		},
}

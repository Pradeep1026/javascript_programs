function cool(){
     var names=["yaakov","john","pau","Jen"];
     
     for(var i=0;i<names.length;i++)
         { 
             var firstletter=names[i].charAt(0);
             if(firstletter=="j" || firstletter=='J'){
                 speak(names[i]);
             }
         else{
               speak2(names[i]);
               }
            }
    }


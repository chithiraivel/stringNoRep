var a = 'javascript'
var b = a.split("")

console.log(b)
for(let i=0;i<b.length;i++){
    
     let count=0;
     
   for(let j=0;j<a.length;j++){

       if(b[i] ==a[j]){
           count++;
       }
       
   }
   if(count == 1){
       console.log(b[i])
   }
    
}
let arr = [1, 2, 3, 4, 5];
arr.myprop = "hello";
arr.print = function(){
    console.log(" hello from array");

} 
 for (let key in arr){
     console.log(key, " : " ,arr[key]);
     
 }
function longestCommonPrefix(strs){
   if(strs.length === 0){
      return "";
   }
   let prefix = strs[0];

   for(let i = 1; i<strs.length; i++){
      while(strs[i].indexOf(prefix) !== 0){

         prefix = prefix.substring(0, prefix.length - 1);
         if(prefix === ""){
            return "";
         }
      }
   
   }
   return prefix;
}


let array = ["car", "carnival", "carousel"]
console.log(longestCommonPrefix(array));

let arr1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(arr1));
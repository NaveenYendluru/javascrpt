function first(str){
    let s=str.charAt(0);
    let s1=s.toUpperCase();
    let s2=str.slice(1,str.length);
    let result=s1+s2
    console.log(result);
    
    }
    first("naveen");
    first("surya");
    first("greeshmant");
    first("lower");



    function vow(input){
        input=input.toLowerCase();
        let arr=["a","e","i","o","u"];
        for(let i=0;i<input.length;i++){
        for(let j=0;j<arr.length;j++){
        
        if(input[i]==arr[j]){
        input=input.replace(input[i],"")
        }
        
        }
        
        }
        console.log(input);
        }
        vow("hellO");
        vow("WOrld");
        vow("NaVeen");
//decoding push pop shift and unshift

function push(...input){
    let arr=[86,57,68,76]
    let j=arr.length
    for(i of input){
        if(i*1==i){
            arr[j]=Number(i)
            j++;
        }
        else{
            arr[j]=i;
            j++;
        }
    }
    console.log(arr)
}
push(1,2,3,4,"hdh")


//pop operation


function pop(...input){
    input.length=input.length-1;
    console.log(input);
    }
    pop(1,2,3,90,45);



//shift operation

function shift(...input){
    let arr=input.slice(1);
    console.log(arr);
}
shift(1,2,3,4,5);


//unshift operation

function sur(inp,...newelements){
    let newarr=[...newelements,...inp];
    console.log(newarr);
    }
    let inp=['madhu','sunnetha'];
    sur(inp,'Naveen','pavan'); 

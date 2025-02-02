//High order function are those function that take other functionas an argument or return a  function


const radius=[3,1,2,4]
const area=function(r){
    return Math.PI*r*r;
}
const dia=function(r){
    return 2*r;
}

const circumfere=function(r){
return 2*Math.PI*r;
}

const calculate=function(radius,logic){
    const output=[];
    for(var i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }

    return output;
    
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumfere));
console.log(calculate(radius,dia));


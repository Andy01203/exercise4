//Made by Andy(WangYuchi)
function calc(func){
    var result = document.getElementById('result');
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    if(isNaN(num1) || isNaN(num2)){
        alert('please enter a number');
        return false;
    }
    result.value = func(num1,num2);
}
function add(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
function mul(num1,num2){
    return num1*num2;
}
function div(num1,num2){
    if(num2===0){
        alert('Divisor cannot be zero');
        return '';
    }
    return num1/num2;
}
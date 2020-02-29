function xo(str){
    var countO= 0;
    for (var i =0;i<str.length; i++){
        if (str[i] == 'o'){
            countO++
        }else{
            countO+=0
        }
    }
    var countX=0;
    for (var j=0;j<str.length; j++){
        if(str[j]== 'x'){
            countX++
        }else{
            countX+=0;
        }
    }
    
    if(countX == countO){
        return true;
    }else{
        return false;
    }

}
console.log(xo('oxoxo')); // true
console.log(xo('xxooxo')); // false
console.log(xo('oxox')); // false
console.log(xo('xxxoooo')); // true
console.log(xo('xoxooxxox')); // true
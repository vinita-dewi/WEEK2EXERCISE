// 1. Looping While
console.log('LOOPING PERTAMA');
var i=2
while(i<=20){
    console.log(i + '- I love coding');
    i+=2
}
console.log('LOOPING KEDUA');
while(i>=2){
    console.log(i+ '- I love coding');
    i-=2
}

//space
console.log(' ');
//2. Looping For

console.log('LOOPING PERTAMA');
for(a=1;a<=20;a++){
    console.log(a+ '- I love coding');
}

console.log('LOOPING KEDUA');
for(a=20;a>=1;a--){
    console.log(a+' - I will become fullstack developer')
}

//space
console.log(' ');
//3. Ganjil Genap

var b=1
while(b<=100){
    if(b%2 ===0){
        console.log('GENAP');
    }else{
        console.log('GANJIL');
    }
    b++
}
//space
console.log('');
// pertambahan 2 
var c=1
while(c<=100){
    if(c%3 === 0){
        console.log( c+' KELIPATAN 3');
    }
    c+=2
}
//Space
console.log(' ');

//pertambahan 5
var d=1
while(d<=100){
    if(d%6 === 0){
        console.log(d +' KELIPATAN 6');
    }
    d+=5
}
//space
console.log(' ');
//pertambahan 9

var e=1
while(e<=100){
    if (e%10 === 0){
        console.log(d+' KELIPATAN 10');
    }
    e+=9
}
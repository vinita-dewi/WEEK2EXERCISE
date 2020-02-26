
//1.Menyusun bintang
var rows1=10;

for(var a=1; a<=rows1; a++){
    console.log("*")
}
//space
console.log(" ");

//2. Menyusun bintang dgn nested loop
var rows2=5;


for(var i=1;i<=rows2;i++){
    var asterisk="";
    for (var j=0;j<=rows2;j++){
        asterisk+='*';
    }
    console.log(asterisk);
}
    
//space
console.log("");
//3. Tangga bintang 
var rows3= 9;
for(var i=0; i<=rows3;i++){
    var asterisk="";
    for(var j=0; j<=i;j++){
        asterisk+='*';
    }
    console.log(asterisk);
}
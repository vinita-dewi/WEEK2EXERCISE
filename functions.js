//1. Tugas 1
function shoutOut(){
   return 'Hallo Functions!';
   
};
console.log(shoutOut());

//space
console.log('');
//2. Tugas 2
function calculateMultiply(num1,num2){
    return num1 * num2
}

var num1= 8;
var num2= 9;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

//space
console.log(' ');

//3. Tugas 3
function processSentence(name,age,address,hobby){
    return 'Nama saya '+name+ ', umur saya '+age+' tahun, alamat saya di '+address+', dan saya punya hobby yaitu '+hobby+'!';
}
 var name= 'Agus';
 var age= 30;
 var adress= 'Jln. Malioboro, Yogjakarta';
 var hobby= 'gaming';

 var fullSentence = processSentence(name,age,adress,hobby)

 console.log(fullSentence)
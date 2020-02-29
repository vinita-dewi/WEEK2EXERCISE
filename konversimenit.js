function konversiMenit(menit){
    var jumlahMenit = Math.floor(menit / 60)
    var detik = Math.round(menit%60)
    
    if(String (detik).length === 1){
        var detik2 = '0'+detik
    }else{
        var detik2 = detik
    }

    return jumlahMenit+ ':'+ detik2
}
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
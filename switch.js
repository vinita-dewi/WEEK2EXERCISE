var hari = 9
var bulan = 10
var tahun = 2010

switch (bulan){
    case 1:
        var bulan = 'Januari';
        break;
    case 2:
        var bulan = 'Februari';
        break;
    case 3:
        var bulan = 'Maret';
        break;
    case 4:
        var bulan = 'April';
        break;
    case 5:
        var bulan = 'Mei';
        break;
    case 6:
        var bulan = 'Juni';
        break;
    case 7:
        var bulan = 'Juli';
        break
    case 8:
        var bulan = 'Agustus';
        break;
    case 9:
        var bulan = 'September';
        break;
    case 10:
        var bulan = 'Oktober';
        break;
    case 11:
        var bulan = 'November';
        break;
    case 12:
        var bulan = 'Desember';
        break;
}
if(hari >31 || hari <1){
    console.log('Hari di Luar Jangkauan, Masukkan hari di antara 1-31')
}else if(tahun > 2200 || tahun <1900){
    console.log('Tahun di Luar Jangkauan, Masukkan tahun di antara 1900-2200')
}else if(bulan>12 || bulan<1){
    console.log('Bulan di Luar Jangkauan, Masukkan bulan di antara 1-12')
}else {
    console.log(hari +' '+ bulan + ' '+ tahun)
}

    var nama=prompt("Boleh tahu nama anda ?");
    var hari=new Date();
    var jam=hari.getHours();
    if(jam>0 && jam<4){
    pesan="Apakah Sudah salat Tahajud";
    }
    else if(jam>=4 && jam<5){
    pesan="Apakah sudah salat Subuh?";
    }
    else if(jam>=12 && jam<15){
    pesan="Apakah sudah salat Dhuhur?";
    }
    else if(jam>=15 && jam<17){
    pesan="Apakah sudah salat Asar?";
    }
    else if(jam>=18 && jam<19){
    pesan="Apakah sudah salat Magrib?";
    }
    else if(jam>19 && jam<24){
    pesan="Apakah sudah salat Isya?";
    }
    else {
        pesan="Jangan Lupa salat";
        }
    
    var dialog = confirm("Hai "+nama+"! "+pesan+"");

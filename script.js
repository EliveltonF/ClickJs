function mudarEstado(idd) {
    var display = document.getElementById(idd);
    if(display.style.display == 'block') {
        display.style.display = 'none';
    }
    else {display.style.display = 'block';}
} 
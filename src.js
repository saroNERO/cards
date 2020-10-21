const spn = document.querySelector('.spn');
const btn = document.querySelector('.btn');
let wynik = 1000;
btn.addEventListener('click',function(){
    if(btn.innerHTML === "FOLLOW") {
        wynik++;
        spn.innerHTML = wynik;
        btn.innerHTML = "UNFOLLOW";
    }
    else {
        wynik--;
        spn.innerHTML = wynik;
        btn.innerHTML = "FOLLOW";
    }
});
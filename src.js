const cr = {
    spn: document.querySelector('.spn'),
    btn: document.querySelector('.btn'),
    wynik: 1000,
    spn1: document.querySelector('.spn1'),
    btn1: document.querySelector('.btn1'),
    wynik1: 1000,
    spn2: document.querySelector('.spn2'),
    btn2: document.querySelector('.btn2'),
    wynik2: 1000,

    f: function() {
        if(this.btn.innerHTML === "FOLLOW") {
                    this.wynik++;
                    this.spn.innerHTML = this.wynik;
                    this.btn.innerHTML = "UNFOLLOW";
                }
                else {
                    this.wynik--;
                    this.spn.innerHTML = this.wynik;
                    this.btn.innerHTML = "FOLLOW";
                }
    },
    f1: function() {
        if(this.btn1.innerHTML === "FOLLOW") {
                    this.wynik1++;
                    this.spn1.innerHTML = this.wynik1;
                    this.btn1.innerHTML = "UNFOLLOW";
                }
                else {
                    this.wynik1--;
                    this.spn1.innerHTML = this.wynik1;
                    this.btn1.innerHTML = "FOLLOW";
                }
    },
    f2: function() {
        if(this.btn2.innerHTML === "FOLLOW") {
                    this.wynik2++;
                    this.spn2.innerHTML = this.wynik2;
                    this.btn2.innerHTML = "UNFOLLOW";
                }
                else {
                    this.wynik2--;
                    this.spn2.innerHTML = this.wynik2;
                    this.btn2.innerHTML = "FOLLOW";
                }
    },

    init: function () {
        this.btn.addEventListener('click',this.f.bind(cr));
        this.btn1.addEventListener('click',this.f1.bind(cr));
        this.btn2.addEventListener('click',this.f2.bind(cr));
    }
}
cr.init();
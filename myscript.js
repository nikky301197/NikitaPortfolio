var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
            
    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
   
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").classList.add("fixed");
    document.getElementById("navlogo").classList.add("fixed");
    document.getElementById("navlink1").classList.add("fixed");
    document.getElementById("navlink2").classList.add("fixed");
    document.getElementById("navlink3").classList.add("fixed");
    document.getElementById("navlink4").classList.add("fixed");
    document.getElementById("navlink5").classList.add("fixed");
    document.getElementById("navlink6").classList.add("fixed");
   
  } else {
    document.getElementById("navbar").classList.remove("fixed");
    document.getElementById("navlogo").classList.remove("fixed");
    document.getElementById("navlink1").classList.remove("fixed");
    document.getElementById("navlink2").classList.remove("fixed");
    document.getElementById("navlink3").classList.remove("fixed");
    document.getElementById("navlink4").classList.remove("fixed");
    document.getElementById("navlink5").classList.remove("fixed");
    document.getElementById("navlink6").classList.remove("fixed");
   
  }
}



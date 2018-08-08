var wrap = document.querySelector('.wrapper');
var ul = document.querySelector('.con');
var ulp = ul.querySelectorAll('p'); // 0 , 1
var ulli = ul.querySelectorAll('li'); // 0 , 1 , 2 , 3
var ol = document.querySelector('.quan');
var olli = ol.querySelectorAll('li'); // 0 , 1 , 2 , 3
var ind = 0;
ul.onmouseover = function() {
    ulp[0].style.display = 'block';
    ulp[1].style.display = 'block';
}
ul.onmouseout = function() {
    ulp[0].style.display = 'none';
    ulp[1].style.display = 'none';
};
for (var i = 0; i < ulp.length; i++) {
    (function(i) {
        ulp[i].onclick = function() {
            for (var j = 0; j < ulp.length; j++) {
                ulp[j].classList.remove('.activeB');
            }
            this.classList.add('activeB');
            if (i == 0) {
                //向左 --
                // ulli.length--
                var oldind = --ind;
                var oldind = (oldind % ulli.length) + ulli.length - 1;
                console.log(oldind);
                for (var n = 0; n < ulli.length; n++) {
                    ulli[n].style.display = 'none';
                    olli[n].classList.remove('activeO')
                }
                ulli[oldind].style.display = 'block';
                olli[oldinds].classList.add('activeO');
            } else if (i == 1) {
                //向右 ++
                // ulli.length--
                var oldinds = ++ind;
                var oldinds = oldinds % ulli.length;
                console.log(oldind);
                for (var n = 0; n < ulli.length; n++) {
                    ulli[n].style.display = 'none';
                    olli[n].classList.remove('activeO')
                }
                ulli[oldinds].style.display = 'block';
                olli[oldinds].classList.add('activeO');
            }
        };
    })(i)
}
for (var m = 0; m < olli.length; m++) {
    (function(m) {
        olli[m].onclick = function() {
            for (var k = 0; k < ulli.length; k++) {
                ulli[k].style.display = 'none';
                olli[k].classList.remove('activeO')
            }
            ulli[m].style.display = 'block';
            olli[m].classList.add('activeO');
        }
    })(m)
}
 var mybutton = document.getElementById('goup');

 window.onscroll = function () {

     if (window.pageYOffset >= 1000) {
         mybutton.style.display = 'block';
     } else {
         mybutton.style.display = 'none';
     }
 }

 mybutton.onclick = function () {
     window.scrollTo(0, 0);
 }
 
// *****************************************
 
 var myButton = document.getElementById('button'),
    i = 0,
    getTxt = document.getElementById('type').textContent,
    set_Txt = getTxt,
    getTxt = document.getElementById('type').textContent = "";

 window.onload = function () {

//myButton.onclick = function () {

    var typeWriter = setInterval(function () {

        if (i <= set_Txt.length - 1) {

            document.getElementById('type').textContent += set_Txt[i];
            i++;

        }

    }, 80);

}
 
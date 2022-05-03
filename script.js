const embedElement = document.getElementById('target-dom-node') // NOTE: `.target-dom-node` is the target DOM element from your website or web app

var displayed = getCookie("displayed_typeform"); //
if (displayed){
  embedElement.innerHTML="<h2>Thanks for voting!</h2>"
} else if(!displayed && displayed === "") {
  setCookie("displayed_typeform", true, 365);
  showEmbed();
}

function showEmbed(){ // call this function to display the embed typeform
  window.tf.createWidget('z8X7CXUJ', {
        container: document.querySelector('.target-dom-node'),
        transitiveSearchParams: ['foo', 'bar'],
        medium: 'demo-test',
        hidden: { foo: 'foo value', bar: 'bar value' },
        iframeProps: { title: 'Vote Now!' },
      })
}

// Cookie manipulation
// From https://www.w3schools.com/js/js_cookies.asp

function setCookie(cname, cvalue, exdays) { 
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

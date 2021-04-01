function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + 2592000000);
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
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
  
  function checkCookie() {
    var lang = getCookie("lang");
    if (lang === "EN") {
        window.location.replace(window.location.protocol + '//' + window.location.host + '/EN/index.html');
    } else if (lang === "FR"){
        window.location.replace(window.location.protocol + '//' + window.location.host + "/FR/index.html");
    } else {
        window.location.replace(window.location.protocol + '//' + window.location.host + "/FR/index.html");
    }
  }
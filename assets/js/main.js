var tomb = []
var ossz = 0

function Mentes() {
  ossz = 0
  if (document.getElementById("szel").value != "" && document.getElementById("hossz") != "") {
    var obj = {
      szelesseg: parseInt(document.getElementById("szel").value),
      hosszusag: parseInt(document.getElementById("hossz").value)
    }
    tomb.push(obj)
    for (var i = 0; i < tomb.length; i++) {
      ossz += tomb[i].hosszusag * tomb[i].szelesseg
    }
    document.getElementById("beiras").innerHTML = "Az összterület: " + ossz
  } else {
    alert("Töltsd ki az adatokat!")
  }

}
var show = 1;
var show2 = 1;
var show3 = 1;
var show4 = 1;
var show5 = 1;
var show6 = 1;
function showProduct() {
  if (show == 1) {
    document.getElementById("listProduct").style.display = "contents";
    show = 2;
  } else {
    document.getElementById("listProduct").style.display = "none";
    show = 1;
  }
}

function showProduct2() {
  if (show2 == 1) {
    document.getElementById("listProduct2").style.display = "none";
    show2 = 2;
  } else {
    document.getElementById("listProduct2").style.display = "contents";
    show2 = 1;
  }
}

function showProduct3() {
  if (show3 == 1) {
    document.getElementById("listProduct3").style.display = "none";
    show3 = 2;
  } else {
    document.getElementById("listProduct3").style.display = "contents";
    show3 = 1;
  }
}

function showProduct4() {
  if (show4 == 1) {
    document.getElementById("listProduct4").style.display = "none";
    show4 = 2;
  } else {
    document.getElementById("listProduct4").style.display = "contents";
    show4 = 1;
  }
}

function showProduct5() {
  if (show5 == 1) {
    document.getElementById("listProduct5").style.display = "contents";
    show5 = 2;
  } else {
    document.getElementById("listProduct5").style.display = "none";
    show5 = 1;
  }
}

function showProduct6(listProduct6) {
  if (show6 == 1) {
    document.getElementById("listProduct6").style.display = "contents";
    show6 = 2;
  } else {
    document.getElementById("listProduct6").style.display = "none";
    show6 = 1;
  }
}

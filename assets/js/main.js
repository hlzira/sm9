
document.addEventListener("keydown", function (event) {
  if ("r" == event.key.toLowerCase()) {
    document.body.style.background = "#981d1d";
  } else if ("g" == event.key.toLowerCase()) {
    document.body.style.background = "#0c5d11";
  } else if ("b" == event.key.toLowerCase()) {
    document.body.style.background = "#0e1087";
  }
});

let img = document.querySelector(".block");

document.addEventListener("keydown", function (event) { 
  if (event.key.toLowerCase() == 'w') { 
    console.log('up'); 
    img.style.top = img.offsetTop - 150 + 'px'; 
  } else if (event.key.toLowerCase() == 's') { 
    console.log('down'); 
    img.style.top = img.offsetTop + 150 + 'px'; 
  } else if (event.key.toLowerCase() == 'a') {     
    console.log('left'); 
    img.style.left = img.offsetLeft - 150 + 'px';   
  } else if (event.key.toLowerCase() == 'd') { 
    console.log('right'); 
    img.style.left = img.offsetLeft + 150 + 'px'; 
  } 
});
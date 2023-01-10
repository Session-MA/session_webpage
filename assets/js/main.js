var main_element = document.getElementById("vid_intro")


var divs = ["lang", "busi", "tech"];
var buts = ["language", "business", "technology"];
var visibleId = null;
function show(id) {
  if (visibleId !== id) {
    visibleId = id;
  }
  hide();
}
function hide() {
  var div, i, id, but;
  for (i = 0; i < divs.length; i++) {
    id = divs[i];
    div = document.getElementById(id);
    if (visibleId === id) {
      div.style.display = "";
    } else {
      div.style.display = "none";
    }
  }

}


// // When the user scrolls the page, execute myFunction
// window.onscroll = function () { myFunction() };

// // Get the header
// var header = document.getElementById("stickynav");
// var sect = document.getElementById("session-indicators");
// // Get the offset position of the navbar
// var sticky = header.offsetTop;
// var sect_top = sect.offsetTop;
// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if ((window.pageYOffset > sticky)&&(window.pageYOffset < sect_top) ) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
// &&(window.pageYOffset < sect_top)


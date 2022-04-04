var divs = ["lang", "busi", "tech"];
var visibleId = null;
function show(id) {
  if (visibleId !== id) {
    visibleId = id;
  }
  hide();
}
function hide() {
  var div, i, id;
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

// function resizeIFrameToFitContent(iFrame) {

//   iFrame.width = iFrame.contentWindow.document.body.scrollWidth;
//   iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
// }

// window.addEventListener('DOMContentLoaded', function (e) {

//   var iFrame = document.getElementById('iFrame1');
//   resizeIFrameToFitContent(iFrame);

//   // or, to resize all iframes:
//   var iframes = document.querySelectorAll("iframe");
//   for (var i = 0; i < iframes.length; i++) {
//     resizeIFrameToFitContent(iframes[i]);
//   }
// });


// // When the user scrolls the page, execute myFunction
// window.onscroll = function () { myFunction() };

// // Get the header
// var header = document.getElementById("stickynav");
// var sect = document.getElementById("themes");
// // Get the offset position of the navbar
// var sticky = header.offsetTop;
// var sect_top = sect.offsetTop + sect.offsetHeight - header.clientHeight - 80;
// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if ((window.pageYOffset > sticky)&&(window.pageYOffset < sect_top)) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
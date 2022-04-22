console.clear();
var w = window.innerWidth;
var size = w > 992 ? "big" : "small";
var controller = new ScrollMagic.Controller();
var snaptext = document.getElementById("snaptext")
var apnd_text_parent = document.getElementById("texttech")
var node = document.getElementById("medtech")

if (size === "big") {
    splitScroll();
} else {
    apnd_text_parent.insertAdjacentElement('beforebegin',node);
}





function splitScroll() {
    var vid1 = document.getElementById("vid1");
    var vid2 = document.getElementById("vid2");
    controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        duration: "65%",
        triggerElement: '#thirdsec',
        triggerHook: 0.2
        
    })
        .setPin('#medlang')
        .setClassToggle('.medlang','show')
        // .addIndicators()
        .addTo(controller)
        .on("enter", function(){
            vid1.setAttribute("autoplay", "none")
            vid1.load()
            vid1.play()
        })
        .on("leave", function(){
            vid1.load()
            vid1.play()
        })
        scene.offset(120)
        
        
        
    
    var scene2 = new ScrollMagic.Scene({
        duration: "100%",
        triggerElement: '.textlang',
        triggerHook: 0.2
    })
        .setPin('#medtech')
        
        .setClassToggle('.medtech','show')
        // .addIndicators()
        .addTo(controller);
        scene2.on("enter", function(){
            vid2.setAttribute("autoplay", "none")
            vid2.load()
            vid2.play()
        })
        scene2.on("leave", function(){
            vid2.load()
            vid2.play()
        })

        scene2.offset(300)

}



function sizeIt() {
    w = window.innerWidth;
    var newSize = w > 992 ? "big" : "small";
    if (newSize != size) {
        size = newSize;
        if (newSize === "small") {
            console.log("The screen is now small - ScrollMagic has been destroyed by aliens.");
            controller.destroy(true);
        } else {
            console.log("The screen is now large - ScrollMagic is active.");
            splitScroll();
        }
    }
}

window.addEventListener("scroll", sizeIt);

// window.addEventListener("resize", sizeIt);
// var trig = document.getElementsByClassName("texttech");
// // window.onscroll = function () { rev() };
// // Get the header

// var sttarg = document.getElementById("medlang");
// var ndtarg = document.getElementById("medtech");
// // Get the offset position of the navbar
// var trig_top = trig.offsetTop;

// function isInViewport(e) {
//     e = trig
//     const rect = e.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }








// document.addEventListener('scroll', function () {
//     // const messageText = isInViewport(trig)
    
//     if (isInViewport(trig)) {
//         ndtarg.style.display = "";
//         sttarg.style.display = "none";
//     } else {
//         ndtarg.style.display = "none";
//     }
// },{
//     passive: true
// });

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function rev() {
//   if ( window.pageYOffset >= trig_top ) {
//     ndtarg.style.display="";
//     sttarg.style.display="none";
//   } else {
//     ndtarg.style.display="none";

//   }
// }
// &&(window.pageYOffset < sect_top)

console.clear();
var w = window.innerWidth;
var size = w > 992 ? "big" : "small";
var controller = new ScrollMagic.Controller();
var snaptext = document.getElementById("snaptext")
var main_element = document.getElementById("vid_intro")
var vid_intro_element_parent = document.getElementById("title")
var vid_intro_element = document.getElementById("heading")
var apnd_text_parent = document.getElementById("texttech")
var apnd_vid_parent = document.getElementsByClassName("med")[0]
var node = document.getElementById("medtech")
var apnd_text_parent2 = document.getElementById("textlang")
var node2 = document.getElementById("medlang")
var node3 = document.getElementById("img_tools")
var vid1 = document.getElementById("vid1");
var vid2 = document.getElementById("vid2");
var vid3 = document.getElementById("vid3");



if (size === "big") {
    vid3.removeAttribute("loop")
    splitScroll();
} else {
    apnd_text_parent.insertAdjacentElement('afterend',node);
    apnd_text_parent2.insertAdjacentElement('afterend',node2);
    main_element.insertAdjacentElement('afterbegin',vid_intro_element);
}


function splitScroll() {
    
    controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        duration: "105%",
        triggerElement: '#thirdsec',
        triggerHook: 0
        
    })
        .setPin('#medlang')
        .setClassToggle('.medlang','show')
        // .addIndicators()
        .addTo(controller)
        .on("enter", function(){
            vid1.removeAttribute("autoplay")
            vid1.removeAttribute("loop")
            vid1.load()
            vid1.play()
        })
        .on("leave", function(){
            vid1.load()
            node2.classList.add("hide")
            
        })
        scene.offset(80)
        
        
        
    
    var scene2 = new ScrollMagic.Scene({
        duration: "100%",
        triggerElement: '.textlang2',
        triggerHook: 0
    })
        .setPin('#medtech')
        
        .setClassToggle('.medtech','show')
        // .addIndicators()
        .addTo(controller);
        scene2.on("enter", function(){
            vid2.removeAttribute("autoplay")
            vid2.load()
            vid2.play()
            node3.style.opacity= 0 
        })
        scene2.on("leave", function(){
            vid2.load()
            node2.classList.add("hide")
            node3.style.opacity= 1
        })

        scene2.offset(0)

}



function sizeIt() {
    w = window.innerWidth;
    var newSize = w > 992 ? "big" : "small";
    if (newSize != size) {
        size = newSize;
        if (newSize === "small") {
            controller.destroy(true);
        } else {
            splitScroll();
        }
    }
}
function resizeit() {
    w = window.innerWidth;
    var newSize = w > 992 ? "big" : "small";
    if (newSize != size) {
        size = newSize;
        if (newSize === "small") {
            controller.destroy(true);
            apnd_text_parent.insertAdjacentElement('afterend',node);
            apnd_text_parent2.insertAdjacentElement('afterend',node2);
            main_element.insertAdjacentElement('afterbegin',vid_intro_element);
        } else {
            apnd_vid_parent.insertAdjacentElement('beforeend',node2);
            apnd_vid_parent.insertAdjacentElement('beforeend',node);
            vid_intro_element_parent.insertAdjacentElement('afterbegin',vid_intro_element);
            vid3.removeAttribute("loop")
            splitScroll();
        }
    }
}



window.addEventListener("scroll", sizeIt);
window.addEventListener("resize", resizeit);

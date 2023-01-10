console.clear();
var w = window.innerWidth;
var size = w > 992 ? "big" : "small";
var controller = new ScrollMagic.Controller();
var snaptext = document.getElementById("snaptext")
var main_element = document.getElementById("vid_intro")
var vid_intro_element_parent = document.getElementById("title")
var vid_intro_element = document.getElementById("heading")
var second_text = document.getElementById("texttech")
var apnd_vid_parent = document.getElementsByClassName("med")[0]
var impact_anim = document.getElementById("medtech")
var first_text = document.getElementById("textlang")
var smiling_student = document.getElementById("medlang")
var node3 = document.getElementById("bggreen")
var vid1 = document.getElementById("medlang");
var vid2 = document.getElementById("vid2");
var vid3 = document.getElementById("vid3");



if (size === "big") {
    apnd_vid_parent.insertAdjacentElement('beforeend',smiling_student);
    apnd_vid_parent.insertAdjacentElement('beforeend',impact_anim);
    vid_intro_element_parent.insertAdjacentElement('afterbegin',vid_intro_element);
    vid3.removeAttribute("loop")
    splitScroll();
} else {
    second_text.insertAdjacentElement('beforebegin',impact_anim);
    first_text.insertAdjacentElement('beforebegin',smiling_student);
    // main_element.insertAdjacentElement('afterbegin',vid_intro_element);
}


function splitScroll() {
    
    controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        duration: "85%",
        triggerElement: '#thirdsec',
        triggerHook: 0
        
    })
        .setPin('#medlang')
        .setClassToggle('.medlang','show')
        // .addIndicators()
        .addTo(controller)
        .on("enter", function(){
            
        })
        .on("leave", function(){

            smiling_student.classList.add("hide")
            
        })
        scene.offset(80)
        
        
        
    
    var scene2 = new ScrollMagic.Scene({
        duration: "60%",
        triggerElement: '.textlang2',
        triggerHook: 0
    })
        .setPin('#medtech')
        
        .setClassToggle('.medtech','show')
        // .addIndicators()
        .addTo(controller);
        scene2.on("enter", function(){
            node3.style.opacity= 0 
            vid2.load()
            vid2.play()
            
        })
        scene2.on("leave", function(){
            vid2.load()
            smiling_student.classList.add("hide")
            node3.style.opacity= 1
        })

        scene2.offset(-100)

}



function sizeIt() {
    w = window.innerWidth;
    var newSize = w > 992 ? "big" : "small";
    if (newSize != size) {
        size = newSize;
        if (newSize === "small") {
            controller.destroy(true);
            second_text.insertAdjacentElement('beforebegin',impact_anim);
            first_text.insertAdjacentElement('beforebegin',smiling_student);
        } else {
            apnd_vid_parent.insertAdjacentElement('beforeend',smiling_student);
            apnd_vid_parent.insertAdjacentElement('beforeend',impact_anim);
            vid_intro_element_parent.insertAdjacentElement('afterbegin',vid_intro_element);
            vid3.removeAttribute("loop")
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
            second_text.insertAdjacentElement('beforebegin',impact_anim);
            first_text.insertAdjacentElement('beforebegin',smiling_student);
        } else {
            apnd_vid_parent.insertAdjacentElement('beforeend',smiling_student);
            apnd_vid_parent.insertAdjacentElement('beforeend',impact_anim);
            vid_intro_element_parent.insertAdjacentElement('afterbegin',vid_intro_element);
            vid3.removeAttribute("loop")
            splitScroll();
        }
    }
}



window.addEventListener("scroll", sizeIt);
window.addEventListener("resize", resizeit);

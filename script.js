var crsr=document.querySelector("#cursor")
var crblur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x+30+"px"
    crsr.style.top=dets.y+"px"
    crblur.style.left= dets.x-250+"px"
    crblur.style.top=dets.y-250+"px"
   

})
var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2
        crsr.style.border="1px solid black"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0 px solid #95C11E"
        crsr.style.backgroundColor=" #95C11E"
    })
})




gsap.to("#nav",{
    // y:30,
    backgroundColor:"yellowgreen",
    duration:0.8,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -6%",
        end:"top -7",
        scrub:true,
        scrub:1,

    }
    
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        marker:true,
        start:"top -25%",
        end:"top -75%",
        scrub:2,
    }
})
gsap.from("#aboutus img,#aboutus-in h1",{
    y:50,
    opacity:0,
    duration:1,
    // rotate:360,
    // delay:2,
    stagger:0.6,
    scrollTrigger:{
        
        trigger:"#aboutus",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 35%",
        scrub:4,
    }

})
gsap.from("#greendiv  ",{
    y:500,
    duration:2,
    stagger:0.2,
    delay:5,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 80%",
        end:"top 75%",
        scrub:4,
    }


})
/* akshat */

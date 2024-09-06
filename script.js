
// page1 animation
gsap.from("#page1 h1 ",{
    y:20,
    duration:2,
    // position:"absolute",
    

   
    
})
// gsap.to(".page1 h1 img",{
//     position:relative
// })


gsap.from("#page1 h1 img",{
    ease: "bounce(0.5)", //<-- easy!
    ease: "bounce({strength:0.5, endAtStart:true})", //advanced
    duration:2,
    y:-100,
    squash:3,
    strength:0.6,
    transformOrigin: "center bottom",
    endAtStart:true,
    
    
    
})
// pag1 image animation
window.addEventListener("wheel",function(dits){
    if(dits.deltaY>0){
        gsap.to("#page1 h1 img",{
            rotate:240,
            duration:1

        })
       
    }
    else{
        gsap.to("#page1 h1 img",{
            rotate:0,
            duration:1.5
        })
    }

})



 var nav = document.querySelector("nav")

 nav.addEventListener("mouseenter",function(){
    var tl=gsap.timeline()

    tl.to(".nav-bottom",{
        height:"21vh",
        duration:0.3

    })
    tl.to(".nav-part2 h5",{
        display:"block",
      duration:0.19
    })
    tl.from(".nav-part2 h5 span ",{
        y:-10,
        // repeat:-1,
        opacity:0,
       
        stagger:{
            amount:0.6,
            
        },
    })
 })



 nav.addEventListener("mouseleave",function(){
    var tl=gsap.timeline()

    
    // tl.to(".nav-part2 h5 span ",{
    //     y:25,
   
    //     stagger:{
    //         amount:0.2
    //     },
    // })
   
    tl.to(".nav-part2 h5",{
        display:"none",
        duration:0.1
    })
    tl.to(".nav-bottom",{
        height:"0",
        duration:1
    })


    tl.to("nav-part2 h5 span",{
        y:-20,
        opacity:0,
        stagger:{
            amount:0.2
        }
    })
    
 })
    



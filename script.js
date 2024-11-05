//// initian to final movement
// gsap.to("#box",{
//     x:1000,
//     rotate:360,
//     backgroundColor: "blue",
//     duration: 2,
//     delay: 1
// })

//final to ineatial movement
// gsap.from("#box",{
//     x:1000,
//     rotate:360,
//     backgroundColor: "blue",
//     duration: 2,
//     delay: 1
// })

// var tl = gsap.timeline()
// tl.to("#box1",{
//     x:1200,
//     rotate:360,
//     scale:0.5,
//     duration: 2,
//     delay: 1
// })

// tl.to("#box2",{
//     x:1200,
//     rotate:360,
//     scale:0.5,
//     duration: 2,
//     delay: 1
// })

// tl.to("#box3",{
//     x:1200,
//     rotate:360,
//     scale:0.5,
//     duration: 2,
//     delay: 1
// })

var tl = gsap.timeline()
tl.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.6,
    stagger: 1
})

tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.3,

})

tl.from("img",{
    x:100,
    rotate:45,
    opacity: 0,
    delay:0.5,
    duration: 0.5,
    stagger: 0.5
})
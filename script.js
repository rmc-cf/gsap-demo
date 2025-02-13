const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.page2',
        start:'0% 90%',
        end:'180% 90%',
        scrub:true
    }
})
tl.to(".strip-left",{
    marginLeft: "0%",
},'a')
.to(".strip-right",{
    marginLeft:'-100%'
},'a')
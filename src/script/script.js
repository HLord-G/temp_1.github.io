try {
    const body_selection = document.querySelector("body")
    const frameItems = document.querySelectorAll(".zoomrec")
    const iframesviewer = document.querySelector(".iframesvideo");
    const closeiframesvideo = document.querySelector(".closeiframesvideo");



    frameItems.forEach((x, i) => {
        x.addEventListener("click", function(){
            iframesviewer.style=`display:flex;`
            body_selection.style=`overflow:hidden;`
        })
    });

    closeiframesvideo.addEventListener("click", function (e) {
        iframesviewer.style=`display:none;`
        body_selection.style=`overflow:auto;`
    });

} catch (error) {
    
}


    
    const timeline = gsap.timeline({ defaults: { duration: .1 }})
    const iconmenu = document.querySelector(".viewmenu");
    const closemenu = document.querySelector(".closemenu");
    
 

    iconmenu.addEventListener("click", function(){
        timeline
        .to('.menuview', {  x: 0, ease: 'elastic'})
    })

    closemenu.addEventListener("click", function(){
        timeline
        .to('.menuview', {  x: -999, ease: 'elastic'})
    })



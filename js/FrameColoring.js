// Init ScrollMagic
var ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onEnter'
    }
});

$("section").each(function() {
 
    var name = $(this).attr('id');
    
    if(name == "redden"){
        new ScrollMagic.Scene({
            triggerElement: this
        })
        .setClassToggle("div #border-box", "sec1")
        .addTo(ctrl);
    }
    
    if(name == "redden"){
        new ScrollMagic.Scene({
            triggerElement: this
        })
        .setClassToggle("div #header img", "colorize")
        .addTo(ctrl);
    }
    
    /*new ScrollMagic.Scene({
        triggerElement: this
    })
    .addIndicators({
        colorStart: "rgba(255,0,0,0.5)",
        colorEnd: "rgba(255,0,0,0.5)", 
        colorTrigger : "rgba(255,0,0,0.5)",
        name:name
    }) 
    .addTo(ctrl);
    */
});

/*
// get window height
var wh = window.innerHeight;
 
$("section#footer").each(function() {
    new ScrollMagic.Scene({
      triggerElement: this
    })
    .setClassToggle("section#footer", "is-active")
    .addTo(ctrl);
}
*/
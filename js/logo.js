var reactLogoTween = function(doc){
    var tl = new TimelineMax();
    tl.staggerFromTo($(doc).find("ellipse"), 0.5, {drawSVG: 0}, {drawSVG: "70%"}, 0.3).
        fromTo($(doc).find("circle"), 0.5,{scale: 0, opacity: 0, transformOrigin: "50% 50%"}, 
                               {scale: 1, opacity: 1}).
        add("rotate", "+=0.1").
        staggerTo($(doc).find("ellipse"), 0.5, {drawSVG: "20% 100%", immediateRender: true, repeat: 2}, 0.2, "rotate").
        to($(doc).find("#outer"), 2.5, {rotation: 360, transformOrigin: "50% 50%"}, "rotate").
        staggerFromTo($(doc).find("ellipse"), 0.5, {drawSVG: "20% 100%", immediateRender: true},
                        {drawSVG: "100% 100%", immediateRender: true}, 0.2).
        staggerFromTo($(doc).find("ellipse"),0.5 ,{drawSVG: 0, immediateRender: true},
                        {drawSVG: "100%"}, 0.2).
        to($(doc).find("#outer"), 2, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeInOut}).
        duration(10);

    return tl;
}

var angularLogoTween = function(doc){
    var tl = new TimelineMax();
    tl.set($(doc).find("polygon"), {strokeWidth: "2", stroke: "green", fill: "black"}).
        set($(doc).find("path"), {strokeWidth: "2", stroke: "green", fill: "black"}).
        fromTo($(doc).find("path"), 2, {drawSVG: 0}, {drawSVG: "100%"}).
        fromTo($(doc).find("polygon"), 2, {drawSVG: 0}, {drawSVG: "100%"}).
        add("fill").
        to($(doc).find(".st0"), 2, {fill: "#DD0031", strokeWidth: 0}, "fill").
        to($(doc).find(".st1"), 2, {fill: "#C3002F", strokeWidth: 0}, "fill").
        to($(doc).find("path"), 2, {strokeWidth: 0}, "fill").
        to($(doc).find("path"), 2, {fill: "white"}).
        duration(10);

    return tl;
}

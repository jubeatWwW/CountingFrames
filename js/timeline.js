var LogoTimeline = function(doc, logoTimelines){
    
    if(!(this instanceof LogoTimeline)){
        return new LogoAnime(doc, logoTimelines);
    }

    var that= {};
    var len;

    that.init = function(){
        alert("init");
        len = logoTimelines.length|0;
        that.timeline = new TimelineMax();

        for(var i in logoTimelines){
            that.timeline.add(logoTimelines[i](doc));
        }
    }

    that.play = function(){
        alert(len);
    }

    return (function(){
        that.init();
        return that;
    })();
}

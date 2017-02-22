var LogoAnimes = function(animes){
    if(!(this instanceof LogoAnimes)){
        return new LogoAnimes(animes);
    }

    var anime = [];
    var that = {};

    that.init = function(){
        /*try{
            if(!isArray(anime))
                throw "initial parameter should be array type";
        }catch(err){
            console.log(err);
        }*/
    }

    that.add = function(logoTween){
        anime.push(logoTween);
    }

    that.addToTimeline = function(){
        return anime;
    }

    return (function(){
        that.init();
        return that;
    })();
}

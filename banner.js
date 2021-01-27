var canvas =  document.querySelector("#teste");
var myBanner = new banner(canvas);
    myBanner.callUpDate = ()=>{
        if (myBanner._time%60 ==0) {
            //console.log(myBanner.getFrameInfo());
        }
    }
var image1 = new Image();
    image1.src = "./banner_img/001.jpg"
var image2 = new Image();
    image2.src = "./banner_img/002.jpg"
var image3 = new Image();
    image3.src = "./banner_img/003.jpg"

myBanner.addImage(
    {
        nome:"nome",
        image:image1,
        time_max:240,
        trasition:"trasitionMask7"
    }
);
myBanner.addImage(
    {
        nome:"nome",
        image:image2,
        time_max:240,
        trasition:"trasitionMask8"
    }
);
myBanner.addImage(
    {
        nome:"nome",
        image:image3,
        time_max:240,
        trasition:"trasition5"
    }
);
var anima = myBanner.start;
requestAnimationFrame(anima);
document.querySelector("#b_left").onclick = function(){
    var frame = myBanner.getCurrentFrame()
                myBanner.setFrame(frame-1)
}
document.querySelector("#b_right").onclick = function(){
    var frame = myBanner.getCurrentFrame()
                myBanner.setFrame(frame+1)
}
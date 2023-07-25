let bannerIndex=0;
let bannerArrow="next";
function bannerScroll(){
    const bannerContent= document.querySelectorAll(".home .banner .content");
    bannerContent[bannerIndex].classList.remove("active");
    if(bannerIndex==bannerContent.length-1 && bannerArrow=="next"){
        bannerContent[bannerIndex=0].classList.add("active");
    }
    else if(bannerIndex==0 && bannerArrow=="prev"){
        bannerContent[bannerIndex=bannerContent.length-1].classList.add("active");
    }
    else{
        bannerArrow=="next"? 
        bannerContent[++bannerIndex].classList.add("active") :
        bannerContent[--bannerIndex].classList.add("active") ;
    }
};

function prev(){
    bannerArrow="prev"
    bannerScroll();
}
function next(){
    bannerArrow="next"
    bannerScroll();
}

//RESPONSIVE NAV
function topNavFunction(){
    var x = document.getElementById("nav-bar");
    if(x.className === "topnav"){
        x.className += "-responsive";
    }
    else{
        x.className = "topnav";
    }
}
document.getElementById("responsive-nav-link").addEventListener("click", topNavFunction);

//SELECT ONE OBJECT
const bannerImgDiv = document.getElementById("banner-img-div");

function mouseOverBanner(){
    bannerImgDiv.style.backgroundImage = "url('https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/04/disco-elysium-thought-cabinet-full.jpg')";
}
function mouseOutBanner(){
    bannerImgDiv.style.backgroundImage = "url('https://i.redd.it/ouo0vm6gn9f91.png')";
}

bannerImgDiv.addEventListener("mouseover", mouseOverBanner);
bannerImgDiv.addEventListener("mouseout", mouseOutBanner);

//SELECT MULTIPLE OBJECTS + MODIFY STYLES + EVENT LISTENER
const navLinkArray = Array.from(document.querySelectorAll('.nav-link'));
function highlightActive(){
    for(var i = 0; i < navLinkArray.length; i++){
        if(navLinkArray[i] !== this){
            console.log(`${i}`);
            navLinkArray[i].classList.remove("active");
        }
        else{
            this.classList.add("active");
        }
    }
}
for(var i = 0; i < navLinkArray.length; i++){
    navLinkArray[i].addEventListener("click", highlightActive);
}

//BUTTON + MODIFY TEXT
const aboutHeader = document.getElementById("test-font-change");
function changeText(){
    aboutHeader.textContent = "detective. arriving. on the scene."//USE TEXT CONTENT
}
document.getElementById("submit").addEventListener("click", changeText);
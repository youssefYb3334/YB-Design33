let nextDon = document.getElementById("next");
let prevDon = document.getElementById("prev");
let carouseldon = document.querySelector('.carousel');
let listitendon = document.querySelector('.carousel .list');
let thumbnaildon = document.querySelector('.carousel .thumbnail');

nextDon.onclick = function() {
    showSlider("next")
}

prevDon.onclick = function(){
    showSlider("prev");
}
let timeRunning = 3000;
let runTimeOut;
function showSlider(type) {
    let itemSlider = document.querySelectorAll ('.carousel .list .item');
    let itemthumbnail = document.querySelectorAll ('.carousel .thumbnail .item');

    if (type === "next") {
        listitendon.appendChild(itemSlider[0]);
        thumbnaildon.appendChild(itemthumbnail[0])
        carouseldon.classList.add("next")     
    }else{
        let positionLastitem = itemSlider.length - 1;
        listitendon.prepend(itemSlider[positionLastitem]);
        thumbnaildon.prepend(itemthumbnail [positionLastitem]);
        carouseldon.classList.add("prev")
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carouseldon.classList.remove("next");
        carouseldon.classList.remove("prev");

    }, timeRunning)

    

}


// Find elements
const imageContainer = document.querySelector(".image-container");
const loadMoreButton = document.getElementById("button");

//Initial Images
for(let i = 1; i<=10; i++){
    const initialImgEl = document.createElement("img");
    initialImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 20)}`;
    imageContainer.appendChild(initialImgEl);
}

//Get more photos
loadMoreButton.addEventListener("click", ()=>{
    getMorePhotos();
});

//Function for getting more photos
const getMorePhotos = ()=>{
    for(let i = 1; i<=10; i++){
        const imageEl = document.createElement("img");
        imageEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 3000)}`;
        imageContainer.appendChild(imageEl);
    }
}
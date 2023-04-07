const header = document.querySelector(".header");
const backButtonPhoto = document.querySelector('.backButton');
const nextButtonPhoto = document.querySelector('.nextButton');

let selectedPhoto = 1;
let photoCount = 9;

window.addEventListener('scroll',()=>{
    if(this.scrollY > 1){
        header.classList = "header header_fixed";
    }
    else{
        header.classList = "header";
    }
});

nextButtonPhoto.addEventListener('click', ()=>{
    selectedPhoto++;
    setPhoto();
});
backButtonPhoto.addEventListener('click', ()=>{
    selectedPhoto--;
    setPhoto();
});

function setPhoto(){
    if(selectedPhoto == photoCount) selectedPhoto = 1;
    if(selectedPhoto == 0) selectedPhoto = photoCount;
    let photo = document.querySelector(".photo1");
    photo.src = "./src/images/toPhotoList/" + selectedPhoto +".jpg";
}
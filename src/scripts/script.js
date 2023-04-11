const header = document.querySelector(".header");

const backButtonPhoto = document.querySelector('.backButton');
const nextButtonPhoto = document.querySelector('.nextButton');
const roomNextButton = document.querySelector('.roomButtonNext');
const roomBackButton = document.querySelector('.roomButtonBack');


const contact = document.querySelector(".contactsLink");
const about = document.querySelector(".aboutLink");
const photo = document.querySelector(".photoLink");
const room = document.querySelector(".roomLink");


const photoAsimage = document.querySelector(".photo1");


let selectedPhoto = 1;
let photoCount = 7;

document.addEventListener('DOMContentLoaded', ()=>{
    let apartament = document.querySelector('.room:nth-child(1)');
    apartament.classList="room";
    let apartament2 = document.querySelector('.room:nth-child(2)');
    apartament2.classList="room";
});

window.addEventListener('scroll',()=>{
    if(this.scrollY > 0.1){
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
contact.addEventListener('click', () =>{
    let elem = document.querySelector(".contactsContainer");
    const y = elem.getBoundingClientRect().top - elem.getBoundingClientRect().height;
    window.scroll({
    top: y,
    behavior: 'smooth'
    });
});
about.addEventListener('click', () =>{
    let elem = document.querySelector(".aboutContainer");
    const y = elem.getBoundingClientRect().top - elem.getBoundingClientRect().height / 3;;
    window.scroll({
    top: y,
    behavior: 'smooth'
    });
});
photo.addEventListener('click', () =>{
    let elem = document.querySelector(".photoContainer");
    const y = elem.getBoundingClientRect().top - elem.getBoundingClientRect().height / 3;;
    window.scroll({
    top: y,
    behavior: 'smooth'
    });
});
room.addEventListener('click', ()=>{
    let elem = document.querySelector(".roomContainer");
    const y = elem.getBoundingClientRect().top - elem.getBoundingClientRect().height / 3;;
    window.scroll({
    top: y,
    behavior: 'smooth'
    });
});

photoAsimage.addEventListener('click', ()=>{
    let imageContainer = document.createElement('div');
    let body = document.body;
    body.appendChild(imageContainer);
    imageContainer.classList = "toPreview";
    let buttonExitContainer = document.createElement('div');
    buttonExitContainer.classList = "buttonExitContainer";
    body.style.overflowY = "hidden";
    imageContainer.appendChild(buttonExitContainer);

    let exitButton = document.createElement('input');
    exitButton.setAttribute('type','button');
    exitButton.classList = "exitButton";
    exitButton.value = "\u{274C}";
    buttonExitContainer.appendChild(exitButton);

    let img = photoAsimage.cloneNode(true);
    let imageCont =document.createElement('div');
    imageCont.classList = "imageContainer";
    imageCont.appendChild(img);
    
    imageContainer.appendChild(imageCont);

    
    exitButton.addEventListener('click', ()=>{
        body.removeChild(imageContainer);
        body.style.overflowY = "visible";
    }); 
});

let selectRoomNum = 1;
let maxRoomNum = 7;

roomNextButton.addEventListener('click', () =>{
    
    for(let i = 1; i < maxRoomNum + 1; i++){
        let room =  document.querySelector('.room:nth-child(' + i +')');
        room.classList = "room apart" + i;
    }

    selectRoomNum++;
    if(selectRoomNum > maxRoomNum) selectRoomNum = 1;
    let secondSelectRoomNum = selectRoomNum + 1;
    if(secondSelectRoomNum > maxRoomNum) secondSelectRoomNum = 1;

    let apartamentToDisplay2 =  document.querySelector('.room:nth-child(' + secondSelectRoomNum +')');
    apartamentToDisplay2.classList = "room"
    let apartamentToDisplay = document.querySelector('.room:nth-child(' + selectRoomNum +')');
    apartamentToDisplay.classList = "room";

    
});

roomBackButton.addEventListener('click', ()=>{
    for(let i = 1; i < maxRoomNum + 1; i++){
        let room =  document.querySelector('.room:nth-child(' + i +')');
        room.classList = "room apart" + i;
    }
    selectRoomNum--;
    if(selectRoomNum == 0) selectRoomNum = maxRoomNum;
    let secondSelectRoomNum = selectRoomNum - 1;
    if(secondSelectRoomNum == 0) secondSelectRoomNum = maxRoomNum;

    let apartamentToDisplay = document.querySelector('.room:nth-child(' + selectRoomNum +')');
    apartamentToDisplay.classList = "room";

    let apartamentToDisplay2 =  document.querySelector('.room:nth-child(' + secondSelectRoomNum +')');
    apartamentToDisplay2.classList = "room"
});
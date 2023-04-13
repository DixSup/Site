const header = document.querySelector(".header");

const backButtonPhoto = document.querySelector('.backButton');
const nextButtonPhoto = document.querySelector('.nextButton');
const roomNextButton = document.querySelector('.roomButtonNext');
const roomBackButton = document.querySelector('.roomButtonBack');


const contact = document.querySelector(".contactsLink");
const about = document.querySelector(".aboutLink");
const photo = document.querySelector(".photoLink");
const room = document.querySelector(".roomLink");
const price = document.querySelector(".priceLink");
const discount = document.querySelector(".discountLink");


const photoAsimage = document.querySelector(".photo1");


let selectedPhoto = 1;
let photoCount = 7;


document.addEventListener('DOMContentLoaded', ()=>{
    let apartament = document.querySelector('.room:nth-child(1)');
    apartament.classList="room";
    let apartament2 = document.querySelector('.room:nth-child(2)');
    apartament2.classList="room";

    for(let i = 1; i < maxRoomNum + 1; i ++){
        let apart = document.querySelector(".room:nth-child(" + i + ")");
        apart.addEventListener('click',()=>{
            Clicable(i);
        });
    }
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
price.addEventListener('click', () =>{
    let elem = document.querySelector(".priceHeader");
    const y = elem.getBoundingClientRect().top - elem.getBoundingClientRect().height - 40;
    window.scroll({
    top: y,
    behavior: 'smooth'
    });
});
discount.addEventListener('click', () =>{
    let elem = document.querySelector(".discountHeader");
    const y = elem.getBoundingClientRect().top - elem.getBoundingClientRect().height - 40;
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


function Clicable(num){
    document.body.style.overflowY = "hidden";
    let moreInfoContainer = document.createElement('div');
    document.body.appendChild(moreInfoContainer);
    moreInfoContainer.classList = "moreRoomInfoContainer";

    let buttonDivRoomMoreInfo = document.createElement('div');
    buttonDivRoomMoreInfo.classList = "buttonRoomMoreInfoDiv";
    moreInfoContainer.appendChild(buttonDivRoomMoreInfo);

    let moreInfoContainerButton = document.createElement('input');
    buttonDivRoomMoreInfo.appendChild(moreInfoContainerButton);
    moreInfoContainerButton.setAttribute('type','button');
    moreInfoContainerButton.value = "\u{274C}";

    moreInfoContainerButton.addEventListener('click', ()=>{
        document.body.style.overflowY = "visible";
        document.body.removeChild(moreInfoContainer);
    });

    let roomMoreInfoHeader = document.createElement('div');
    roomMoreInfoHeader.classList = "roomMoreInfoHeader";
    moreInfoContainer.appendChild(roomMoreInfoHeader);

    let roomHeader = document.querySelector('.room:nth-child(' + num +') .apartamentHeader');
    roomMoreInfoHeader.appendChild( roomHeader.cloneNode(true));
    

    let imageAndButtondivRoom = document.createElement('div');
    imageAndButtondivRoom.classList = "imageAndButtondivRoom";
    moreInfoContainer.appendChild(imageAndButtondivRoom);

    let roomMoreInfoPrev = document.createElement('input');
    roomMoreInfoPrev.setAttribute('type','button');
    imageAndButtondivRoom.appendChild(roomMoreInfoPrev);

    let roomMoreInfoImage = document.createElement('img');
    roomMoreInfoImage.src = "./src/images/Rooms/" + num + "/1.jpeg";
    imageAndButtondivRoom.appendChild(roomMoreInfoImage);
    roomMoreInfoPrev.value = "\u{2B9C}"


    let roomMoreInfoNext = document.createElement('input');
    roomMoreInfoNext.setAttribute('type','button');
    imageAndButtondivRoom.appendChild(roomMoreInfoNext);
    roomMoreInfoNext.value = "\u{2B9E}"

    let roomMoreInfoMax;
    let selectedRoomMoreInfo = 1;
    roomMoreInfoNext.addEventListener('click', ()=>{
        if(num == 1 || num == 4) roomMoreInfoMax = 3;
        else roomMoreInfoMax = 4;

        selectedRoomMoreInfo++;
        if(selectedRoomMoreInfo > roomMoreInfoMax) selectedRoomMoreInfo = 1;

        roomMoreInfoImage.src = "./src/images/Rooms/" + num + "/" + selectedRoomMoreInfo + ".jpeg";
    });

    roomMoreInfoPrev.addEventListener('click', ()=>{
        if(num == 1 || num == 4) roomMoreInfoMax = 3;
        else roomMoreInfoMax = 4;

        selectedRoomMoreInfo--;
        if(selectedRoomMoreInfo < 1) selectedRoomMoreInfo = roomMoreInfoMax;

        roomMoreInfoImage.src = "./src/images/Rooms/" + num + "/" + selectedRoomMoreInfo + ".jpeg";
    });
}

const discountImage = document.querySelector('.discount img');

/*discountImage.addEventListener('click',()=>{
    document.body.style.overflowY = "hidden";

    let generalPhotoContainer = document.createElement('div');
    document.body.appendChild(generalPhotoContainer);
    generalPhotoContainer.classList = "generalPhotoContainer";

    let buttonDivGeneral = document.createElement('div');
    buttonDivGeneral.classList = "buttonGeneralDiv";
    generalPhotoContainer.appendChild(buttonDivGeneral);

    let generalButtonGeneral = document.createElement('input');
    buttonDivGeneral.appendChild(generalButtonGeneral);
    generalButtonGeneral.setAttribute('type','button');
    generalButtonGeneral.value = "\u{274C}";

    generalButtonGeneral.addEventListener('click', ()=>{
        document.body.style.overflowY = "visible";
        document.body.removeChild(generalPhotoContainer);
    });
    let imageDiscount = document.querySelector('.discount img');
    let img = imageDiscount.cloneNode(true);
    generalPhotoContainer.appendChild(img);
});*/
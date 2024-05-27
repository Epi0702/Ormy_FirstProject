const listPic = document.querySelector('.photoAlbumGridContainer');
const gridAddbtn = document.querySelector('.gridAddBtn');
const grid = document.querySelector('.photoAlbumGridContainer');
const loadingImag = document.createElement('img');
loadingImag.src = 'resources/Album/loading.png';
// let pageToPatch = 1;

let pageToPatch = 1;

gridAddbtn.addEventListener('click', fetchImages);


async function fetchImages() {
    try {
        let loadImageNum;
        const vw = document.documentElement.clientWidth;

        if (vw > 1024) {
            loadImageNum = 3;
        } else if (vw > 768) {
            loadImageNum = 2;
        } else {
            loadImageNum = 1;
        }

        const response = await fetch(`https://cataas.com/api/cats?skip=${loadImageNum * pageToPatch++}&limit=${loadImageNum}`);

        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        const datas = await response.json();
        console.log(datas);
        makeImageList(datas);


    } catch (error) {
        console.log(error);
    }
}

function makeImageList(datas) {
    datas.forEach((data) => {

        const tempItem = document.createElement('li');
        const img = document.createElement('img');

        tempItem.classList.add('photoAlbumGridItem', 'imgShadow');
        img.classList.add('photoAlbum_img', 'loadingImg');

        img.src = loadingImag.src;//'resources/Album/loading.png';
        img.alt = '이미지 로딩중';

        tempItem.appendChild(img);
        listPic.appendChild(tempItem);

        const tempImg = new Image()
        tempImg.src = `https://cataas.com/cat?_id=${data._id}`;
        tempImg.onload = () => {
            img.classList.remove('loadingImg');
            img.classList.add('loaded');
            img.src = tempImg.src;
            img.alt = '추가된 고양이 이미지';
        };

        tempImg.onerror = () => {
            console.log('Image Load Error!!');
        };

        updateGridGap();
    });
}
    document.addEventListener("DOMContentLoaded", function () {

    updateGridGap();
    window.addEventListener('resize', updateGridGap);
});


function updateGridGap() {
    //grid 스타일 갖고오기
    const computedStyle = window.getComputedStyle(grid);
    //column-gap value (%로 되어있어서 px로 변환해야함)
    const gridColumnGap = computedStyle.getPropertyValue('column-gap');
    //부모 가로
    const parentWidth = grid.clientWidth;
    //계산
    let percentageValue = parseFloat(gridColumnGap) / 100;
    let gapAsPx = parentWidth * percentageValue + 'px';

    if (gapAsPx > '32' + 'px') {
        grid.style.rowGap = gapAsPx;
    } else {
        grid.style.rowGap = 32 + 'px';
    }
}
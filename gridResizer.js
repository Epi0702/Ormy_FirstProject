

document.addEventListener("DOMContentLoaded", function () {
    const grid = document.querySelector('.photoAlbumGridContainer');

    // import {fetchImages} from './albumImgLoader.js';

    function updateGridGap()
    {
        //grid 스타일 갖고오기
        const computedStyle = window.getComputedStyle(grid);
        //column-gap value (%로 되어있어서 px로 변환해야함)
        const gridColumnGap  = computedStyle.getPropertyValue('column-gap');
        //부모 가로
        const parentWidth = grid.clientWidth;
        //계산
        let percentageValue = parseFloat(gridColumnGap) / 100;
        let gapAsPx = parentWidth * percentageValue + 'px';

        if(gapAsPx > '32' + 'px') {
            grid.style.rowGap = gapAsPx;
        }
        else
        {
            grid.style.rowGap = 32 + 'px';
        }

        console.log(grid.style.rowGap)
        console.log("Grid Gap Updated!!")
    }

    updateGridGap();
    window.addEventListener('resize', updateGridGap);
});
const downloadBtn = document.querySelectorAll('.downloadBtn')

downloadBtn.forEach(button =>{
    button.addEventListener('click', DownloadFile);
})

function DownloadFile(event)
{
    const link = document.createElement('a');
    const newFileName = 'tempDown.png'

    // link.href = 'resources/main/introImg.png';
    link.href = 'https://epi0702.github.io/Ormy_FirstProject/resources/Main/introImg.png';

    link.download = newFileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);


}
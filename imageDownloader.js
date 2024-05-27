const downloadBtn = document.querySelectorAll('.downloadBtn')

downloadBtn.forEach(button =>{
    button.addEventListener('click', DownloadFile);
})

function DownloadFile()
{
    const link = document.createElement('a');
    const button = event.currentTarget;

    const file = button.getAttribute('data-file');

    link.href = 'resources/introImg.png';
    link.download = file;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}
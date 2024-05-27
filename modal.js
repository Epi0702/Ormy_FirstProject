const modal = document.querySelector('.modal');
const modalShowBtn = document.querySelector('.subscribeButton');
const modalHideBtn = document.querySelectorAll('.closeModal');

modalShowBtn.addEventListener('click', ShowModal);
// modalHideBtn.addEventListener('click', HideModal);

modalHideBtn.forEach(button => {
    button.addEventListener('click', HideModal);
})


function ShowModal() {
    modal.style.display = 'flex';
}

function HideModal() {

    modal.style.display = 'none';
    console.log('Modal HIDE!@!');
}

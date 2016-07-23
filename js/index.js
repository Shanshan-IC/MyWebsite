var buttonsHide = document.querySelectorAll('.toggle-hide'),
    buttonsArray = [].slice.call(buttonsHide),
    modal = document.getElementById('login'),
    modalBg = document.getElementById('modal-bg');

function toggleModal(){
    modal.classList.toggle('unhide');
    modalBg.classList.toggle('unhide');
}

buttonsArray.forEach(function (el){
    el.addEventListener('click', function(ev){
        ev.preventDefault();
        toggleModal();
    });
});
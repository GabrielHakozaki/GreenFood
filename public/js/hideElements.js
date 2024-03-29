let slct = document.querySelector('#paymentMethod');
let currencyChange = document.querySelector('#currencyChange');

if (slct !== null) {
  slct.addEventListener('click', () => {
    if (slct.value === 'currency') {
      currencyChange.style.display = 'flex';
    } else {
      currencyChange.style.display = 'none';
    }
  });
}

var openmodal = document.querySelectorAll('.modal-open');
for (var i = 0; i < openmodal.length; i++) {
  openmodal[i].addEventListener('click', function (event) {
    event.preventDefault();
    toggleModal();
  });
}

const overlay = document.querySelector('.modal-overlay');
if (overlay !== null) {
  overlay.addEventListener('click', toggleModal);
}

var closemodal = document.querySelectorAll('.modal-close');
for (var i = 0; i < closemodal.length; i++) {
  closemodal[i].addEventListener('click', function (event) {
    toggleModal();
    $('#searchUserBtn').trigger('click');
  });
}

document.onkeydown = function (evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ('key' in evt) {
    isEscape = evt.key === 'Escape' || evt.key === 'Esc';
  } else {
    isEscape = evt.keyCode === 27;
  }
  if (isEscape && document.body.classList.contains('modal-active')) {
    toggleModal();
  }
};

function toggleModal() {
  const body = document.querySelector('body');
  const modal = document.querySelector('.modal');
  $('#handleProductForm').trigger('reset');
  modal.classList.toggle('opacity-0');
  modal.classList.toggle('pointer-events-none');
  body.classList.toggle('modal-active');
}

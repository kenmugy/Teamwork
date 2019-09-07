const signup_btn = document.querySelector('.btn-signup');
const modal = document.querySelector('.modal-background');
const cancel = document.querySelector('.cancel');
const signup_page = document.querySelector('.sign-up-page');

signup_btn.addEventListener('click', () => {
//   signup_page.style.filter = 'blur(1.5px)';
  modal.style.display = 'block';
});

cancel.addEventListener('click', () => {
  modal.style.display = 'none';
});

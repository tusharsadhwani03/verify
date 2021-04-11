var obj = document.querySelector('.obj');
var verify = document.querySelector('.verify');

window.onload= ()=>{
  obj.classList.add('now');
  setTimeout(() => {
    verify.classList.remove('display');
  }, 1500);
};
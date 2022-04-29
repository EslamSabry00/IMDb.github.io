let bars = document.querySelector('#all-list');
let all = document.querySelector('.all')

all.onclick = ()=>{
    bars.classList.toggle('active');
    all.classList.toggle('fa-solid fa-caret-up')

}
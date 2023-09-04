const elements = document.querySelectorAll('.element');

elements.forEach(element =>{
    let btn = element.querySelector('.question button');
    let icon = element.querySelector('.question button i');
    var answer = element.lastElementChild;
    var answers = document.querySelectorAll('.element .answer');
    btn.addEventListener('click', ()=>{
        answers.forEach(ans =>{
            let ansIcon = ans.parentElement.querySelector('button i');
            if(answer !== ans){
                ans.classList.add('hideText');
                ansIcon.className = 'fa-solid fa-chevron-down';
            }
        });
        answer.classList.toggle('hideText');
        icon.className === 'fa-solid fa-chevron-down' ? icon.className = 'fa-solid fa-chevron-up' 
        : icon.className ='fa-solid fa-chevron-down';
    });
});
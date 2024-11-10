
const toggleButton1 = document.getElementById("toggle-skills") as HTMLButtonElement;

const skills= document.getElementById('skills') as HTMLElement;


toggleButton1.addEventListener('click',()=> {
    if(skills.style.display === 'none'){
        skills.style.display = 'block'
    }else{
        skills.style.display = 'none'
    }
});












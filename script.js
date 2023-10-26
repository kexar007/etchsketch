const main = document.querySelector('#main');
const canvas = document.querySelector('#canvas')



//const div = document.createElement('div');
//div.classList.add('tile');  
//canvas.appendChild(div);

for (let i = 0; i < 16; i++) {
    
    const div = document.createElement('div');
    div.classList.add('tile'); 
    div.innerHTML="<h2>"+i+"<h2>" ;
    canvas.appendChild(div);




    
}
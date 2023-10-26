const main = document.querySelector('#main');
const canvas = document.querySelector('#canvas')
/*canvas.style.cssText=" background-color: black;  grid-template-columns: repeat(auto-fill, minmax(200px,1fr));";*/



for (let i = 0; i < 8*8; i++) {
    
    const div = document.createElement('div');
    div.classList.add('tile'); 
    div.innerHTML="<h2>"+i+"<h2>" ;

    //div.addEventListener("mouseover", myScript);
   

    canvas.appendChild(div);




    
}
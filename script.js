
const grid = document.querySelector('#canvas');
let pixel = 3;
let cell = [];
let drwaing = false;
let currentColor = [];
let slider= document.querySelector('#new-size');
let label = document.querySelector('#label');
let colour= document.querySelector('#colorinput');

createGrid(5);

grid.addEventListener('click', function() { toggledrawing()});

function slidermove (){
    label.innerHTML= slider.value;
   
    console.log(slider.value)


};


slider.oninput = function() {
    label.innerHTML = this.value;
    erase();
    createGrid(this.value);
  }





function toggledrawing() {
    if(!drwaing) {
      cell.forEach(item => {
        item.addEventListener('mouseleave', draw);
      })
      drwaing = true;
    } else {
      cell.forEach(item => {
        item.removeEventListener('mouseleave', draw);
      })
      drwaing = false;
    }
  }
function draw(e){
    e.target.style='background-color :'+colour.value+';';


} 




  function createGrid(pixel) {
  
    grid.style.gridTemplateColumns = (`repeat(${pixel}, 1fr`);
    grid.style.gridTemplateRows = (`repeat(${pixel}, 1fr`);
    let numberOfCells = pixel * pixel;
    for(let i = 0; i<numberOfCells; i++) {
      cell[i] = document.createElement('div');
      cell[i].classList.add('tile');
     // cell[i].dataset.darken = 0; //keeps track of current step (0-9) for 'Incrementally Darken'
      //cell[i].style = 'background-color: rgba(255, 255, 255, 1)'; //redundant, but deals with override of css styling
      //cell[i].addEventListener('click', draw);
      grid.appendChild(cell[i]);
    }
  }

function erase() {
    while(grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }}


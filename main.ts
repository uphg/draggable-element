const div = document.createElement('div');

div.style.border = '2px solid #409eff'
div.style.width = '100px'
div.style.height = '100px'
div.style.position = 'absolute'

let press = false;
let position = [0, 0]

div.id = 'draggableBlock';

document.body.appendChild(div);

div.addEventListener('mousedown', (e) => {
  press = true;
  position = [e.clientX, e.clientY]
});

document.addEventListener('mousemove', (e) => {
  if (press) {
    const deleteX = e.clientX - position[0]
    const deleteY = e.clientY - position[1]
    const top = parseInt(div.style.top) || 0
    const left = parseInt(div.style.left) || 0
    div.style.top = top + deleteY + 'px';
    div.style.left = left + deleteX + 'px';
    position = [e.clientX, e.clientY]
  }
});

document.addEventListener('mouseup', () => {
  press = false
});
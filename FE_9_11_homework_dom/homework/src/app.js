const MAX_ITEMS = 10;
let message = document.getElementById('message');
let addButton = document.getElementById('add-button');
let inputText = document.getElementById('input-action');
let ul = document.getElementById('list');
let li = document.querySelector('.list-item')
let arrayItems = [];

let createElement = (action) => {
    let li = document.createElement('li');
    li.setAttribute('draggable','true');
    li.setAttribute('class','list-item');
    let checkBtn = document.createElement('button');
    checkBtn.setAttribute('class', 'material-icons checkbox');
    checkBtn.innerHTML = '<i class="material-icons">check_box_outline_blank</i>';
    let span = document.createElement('span');
    span.innerHTML = action;
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','material-icons delete')
    deleteBtn.innerHTML = '<i class="material-icons ico">delete</i>'
    
    li.appendChild(checkBtn);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    return li;
}

let addAction = () => {
    
    if(inputText.value && arrayItems.length < MAX_ITEMS){
        let listItem = createElement(inputText.value);
        ul.appendChild(listItem);
        bindEvent(listItem);
        inputText.value = '';
        arrayItems.push(listItem);
    }else{
        message.style.display = 'flex';
        addButton.style.cursor = 'not-allowed';
    }
}
addButton.onclick = addAction;

let bindEvent = (item) => {
    let check = item.querySelector('button.checkbox');
    let delet = item.querySelector('button.delete');
    
    check.onclick = checkEvent;
    delet.onclick = deleteEvent;
}

function deleteEvent(){
    let li = this.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
    arrayItems.pop();
    message.style.display = 'none';
    addButton.style.cursor = 'pointer';
}

function checkEvent(){
    let btn = this.firstChild;
    btn.innerHTML = '<i class="material-icons">check_box</i>'
}

let drag = null;

li.addEventListener('dragstart', function (event) {
  drag = event.target;
  event.target.style.cursor = 'pointer';
}
);

li.addEventListener('dragover', function (event) {
  if (event.target.className === 'list-item') {
    event.preventDefault();
  }
});

li.addEventListener('drop', function (event) {
  if (event.target.className === 'list-item') {
    event.preventDefault();
    li.insertBefore(drag, event.target);
  }
});
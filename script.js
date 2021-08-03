let drag;
function move(id){
    let element = document.getElementById('img');
    let element1 = document.getElementById('img1');

    let element2 = document.getElementById('img2');
 

    element.style.position = 'absolute';
    element1.style.position = 'absolute';
    element2.style.position = 'absolute';


    element.onmousedown = function(){
        drag = element;
    }
    element1.onmousedown = function(){
        drag = element1; 
    }
    element2.onmousedown = function(){
        drag = element2;
    }
}

document.onmouseup = function(e){
    drag = null;
}
document.onmousemove = function(e){
    let x = e.pageX;
    let y = e.pageY;
    drag.style.left = x + "px";
    drag.style.top = y + "px";
}
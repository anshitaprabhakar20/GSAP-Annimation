let elems=document.querySelectorAll("img");
let current=1;
let zIndex=9;

function reset(elem){
    setTimeout(function(){
      elem.style.transform='rotate(-80deg)';
      elem.style.transformOrigin = '100% 0%';
      elem.style.top='100%';
    },800);
}
document.querySelector("#btn")
  .addEventListener("click",function(){
    reset(elems[current-1]);
    if(current === elems.length) current=0;
    elems[current].style.transform='rotate(0deg)';
    elems[current].style.transformOrigin='50% 50%';
    elems[current].style.top='0';
    elems[current].style.zIndex= zIndex++;
    current++;
  });
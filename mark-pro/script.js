document.getElementById("start").addEventListener("click",stage1);
function stage1(){
    let operationEle=document.getElementById("operation"),
    rangeEle=document.getElementById("range"),
    operation=operationEle.value,
    range=rangeEle.value;
    // console.log(operation,range);
    for(i=1;i<=16;i++){
        random(range)
    }
}
function random(range){
   Math.random()*range;
   console.log(Math.random()*range);
}
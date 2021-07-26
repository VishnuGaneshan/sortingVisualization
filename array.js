export function createBar( n, arr ,ele){
    // Creating array and storing integer
    let array = [n];
    array = arr;

    // div array - ele[]

    // clearing div 'bars' for new elements to store
    let adder = document.getElementById("bars");
    adder.innerHTML='';

    // Creating div elements
    let leftDist = 0;
    let wid = parseInt(1000/n);
    for(let i=0;i<n;i++){
        ele[i]= document.createElement("div");
        ele[i].classList.add("barEle");
        ele[i].style.height = parseInt(440*(array[i]/100))+"px";
        ele[i].style.width = wid+"px";
        ele[i].style.left = leftDist+"px";
        adder.appendChild(ele[i]);
        leftDist+=wid;
    }
}
    
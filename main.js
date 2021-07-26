import { bubbleSort , stop as bstop } from "./modules/bubbleSort.js";
import { selectionSort, stop as sstop } from "./modules/selectionSort.js";
import { createBar } from "./modules/array.js";
import { insertionSort , stop as istop } from "./modules/insertionSort.js";
// import { quickSort } from "./modules/quickSort.js";
import { sleep } from "./modules/common.js";

let i,j;
let arr = [];
let n;
let ele = [];

function ranArr(){
    n = Math.floor(Math.random() * 11) + 10;
    for (let index = 0; index < n ; index++) {
        arr[index] = Math.floor(Math.random() * 101);
    }
}

async function stopSorting(){
    bstop();
    sstop();
    istop();
    await sleep(1000);
}

let ca = document.getElementById("customArrayCreate");
ca.addEventListener('click',()=>{
    document.getElementById("bars").innerHTML = "";
    arr = (document.getElementById("itArray").value).split(",");
    n = arr.length;
    stopSorting();
    document.getElementById("inputArray").style.display ="none";
    createBar(n,arr,ele);
});

let cac = document.getElementById("cusArrCancel");
cac.addEventListener('click',()=>{
    document.getElementById("inputArray").style.display ="none";
    document.getElementById("bars").style.display = "block";
});

let ra = document.getElementById("newArray");
ra.addEventListener('click',()=>{ranArr(); stopSorting(); createBar(n,arr,ele);});

let bb = document.getElementById("bubbleSort");
bb.addEventListener('click',()=>{stopSorting(); bubbleSort(i,j,n,ele);});

let sb = document.getElementById("selectionSort");
sb.addEventListener('click',()=>{stopSorting(); selectionSort(i , j,n,ele);});

let ib = document.getElementById("insertionSort");
ib.addEventListener('click',()=>{stopSorting(); insertionSort(i,j,n,ele);});

// let qb = document.getElementById("quickSort");
// qb.addEventListener('click',()=>{stopSorting(); quickSort(ele,0, n-1);});
import { heightOf, sleep } from "./common.js";

let stoper = 1;

export function stop(){
    stoper = 1;
}

export async function insertionSort(i,j,n,ele) 
{ 
    stoper = 0;
    let key; 
    for (i = 1; i < n; i++)
    { 
        if(stoper == 1){
            return;
        }
        key = parseInt(heightOf(ele[i])); 
        ele[i].style.backgroundColor = "red";
        j = i - 1;
        await sleep(500);
        while (j >= 0 && parseInt(heightOf(ele[j])) > key)
        { 
            ele[j+1].style.height = parseInt(heightOf(ele[j]))+"px";
            j = j - 1; 
        } 
        ele[j+1].style.height = key+"px";
        ele[j+1].style.backgroundColor = "green";
        ele[i].style.backgroundColor = "green";
    } 
}
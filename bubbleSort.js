import { heightOf , sleep } from "./common.js";


// variable to heights
let h1 =0, h2=0, stoper = 1;

export function stop(){
    stoper = 1;
}

function swap(element1, element2){
    element1.style.height = h2+"px";
    element2.style.height = h1+"px";
    element1.style.backgroundColor="red";
    element2.style.backgroundColor="blue";
}

export async function bubbleSort(i,j,n,ele){
    stoper = 0;
    for(i=0;i<n-1;i++){
        for(j=0;j<n-1-i;j++){
            if(stoper == 1){return;}
            h1 = parseInt(heightOf(ele[j]));
            h2 = parseInt(heightOf(ele[j+1]));
            ele[j].style.backgroundColor="blue";
            ele[j+1].style.backgroundColor="red";
            await sleep(500);
            if(h1 > h2){
                swap(ele[j],ele[j+1]);
                await sleep(500);
            }
            ele[j].style.backgroundColor="yellow";
            ele[j+1].style.backgroundColor="yellow";
        }
        ele[n-1-i].style.backgroundColor="green";
    }
    ele[0].style.backgroundColor="green";
}
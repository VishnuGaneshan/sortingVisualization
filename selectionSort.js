
// please check it is not working

import { heightOf , sleep } from "./common.js";


// variable to heights
let h1 =0, h2=0 , stopr =0; 

export function stop(){
    stopr = 1;
}

function swap(element1, element2){
    let h2 = parseInt(heightOf(element2));
    let h1 = parseInt(heightOf(element1));
    element1.style.height = h2+"px";
    element2.style.height = h1+"px";
    element1.style.backgroundColor="red";
    element2.style.backgroundColor="blue";
}

export async function selectionSort(i , j,n,ele){
    stopr = 0;
    for(i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for( j = i+1; j < n; j++){
            if(stopr == 1){
                return;
            }
            h1 = parseInt(heightOf(ele[j]));
            h2 = parseInt(heightOf(ele[min]));
            ele[j].style.backgroundColor="blue";
            ele[min].style.backgroundColor="red";
            if(h1 < h2) {
                min=j; 
            }
            await sleep(100);
            ele[j].style.backgroundColor="yellow";
        }
        if (min != i) {
            // Swapping the elements
            swap(ele[i],ele[min]);
            await sleep(100);   
        }
        ele[i].style.backgroundColor = "green";
    }
}
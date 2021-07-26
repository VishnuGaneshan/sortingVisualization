function heightOf(element){
    return (element.style.height).split("px");
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export { heightOf , sleep }
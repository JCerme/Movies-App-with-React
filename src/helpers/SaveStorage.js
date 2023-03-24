
export function SaveStorage(key, element) {
    let arrElement = JSON.parse(localStorage.getItem(key));

    if(Array.isArray(arrElement) && arrElement.length > 0){
        arrElement.push(element);
    } else {
        arrElement = element;
    }

    localStorage.setItem(key, JSON.stringify(arrElement)); 
    return element;
}
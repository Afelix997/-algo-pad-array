const pad = (array, minSize, value=null) => {
    while (array.length < minSize){
        array.push(value)
        }
    return array;
}

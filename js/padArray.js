const pad = (array, minSize, value=null) => {
let resArr=array;
while (array.length < minSize){
    resArr.push(value)
    }
    return resArr;
}

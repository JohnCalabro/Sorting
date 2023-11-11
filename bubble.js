
function bubbleSort (array) {
    for(let i = 0; i < array.length;i++){
        for(let j = 0; j < array.length-i; j++){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
        console.log(array)
    }
}

bubbleSort([5,1,2,3,4,-1])

//5
//5,1,2,3,4,-1

module.exports = bubbleSort;
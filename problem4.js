
const arr1=[1,2,5,2,6];
const arr2= [1,2,5,2,6];

function  isSame(arr1 , arr2 ) {

    if(Array.isArray(arr1)===false || Array.isArray(arr2)===false){
        return "Invalid" ; 
    }

    if(arr1.length!==arr2.length){
        return false;
    }

    else{
        for (let i=0;i<arr1.length;i++){
            if(arr1[i] !== arr2[i]){
                return false;
            }
        }
        return true;
    }
}
let result=isSame(arr1,arr2);
console.log(result)




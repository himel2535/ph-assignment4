const fare = 200;
function totalFine(fare) {
    if(typeof fare!=="number" || fare<=0){
        return "Invalid"  ;  
    }
    let fine=fare+fare*(20/100)+30;
    return fine;
}
result=totalFine(fare);
console.log(result)



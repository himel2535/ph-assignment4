const fare = 200;
function totalFine(fare) {
    if(fare<=0 || typeof fare!=="number"){
        return "Invalid"  ;  
    }
    fine=fare+fare*(20/100)+30;
    return fine;
}
result=totalFine(fare);
console.log(result)



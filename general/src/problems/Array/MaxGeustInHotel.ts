function maxGuestInHotel(CheckIn: number[] , CheckOut: number[]){
      // checkin array CheckIn[]
     // checkout array  CheckOut[]

    CheckIn =CheckIn.sort() // {1,2,5,5,10}
    CheckOut = CheckOut.sort() // {4,5,9,12,12}

    let count = 1  // first person checked in
    let i = 1; // to traverse CheckIn
    let j = 0; // to traverse CheckOut
    let max= 0;
    let day = CheckIn[i];

    while(i < CheckIn.length && j < CheckOut.length) {
        if(CheckIn[i] <= CheckOut[j]) {
            if(count > max) {
                max = count ;
                day = CheckIn[i];
            }
            count++;
            i++;
        } else {
            count--;
            j++;
        }

    }

    return day;
}

console.log(maxGuestInHotel([1,2,10,5,5],[4,5,12,9,12]))

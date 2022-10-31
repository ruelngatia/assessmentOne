function summation(arr){
    let sum =0;
    arr.forEach(element => {
        sum = sum + element
    });
    console.log('The sum is: '.concat(sum));
}

summation([1,2,4,7])
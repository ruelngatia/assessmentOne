
    function reverse(string) {

        var result = '';
         
        for (let index = 0; index < string.length; index++) {
            result += string.split('').slice(0,4).reverse().join('');
             string = string.slice(4);
         }   
        return result;
     }
     
     var result = reverse("Lorem at"); 
     console.log(result);


function rev(s, n){

    let holder = []
    let temp = []

    for (let index = 0; index < s.length; index++) {
        temp.push(s[index])
        if((index+1)%n == 0){
            holder.push(temp.reverse().join(''))
            temp = []
        }else if(index == s.length){
            holder.push(temp.reverse().join('')) 
        }
        
    }

    holder.join('')
    console.log(holder.join(''));

}
rev("Lorem at",4)

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



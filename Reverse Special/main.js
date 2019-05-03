function check(str){
    let characters = /[a-zA-Z0-9]/;
    if(str.match(characters)){
        return true
    }else{
        return false
    }
}

function reverse(str){
    let split_array = str.split('');
    let leftOfArray   = 0;
    let rightOfArray  = split_array.length-1;
    while(leftOfArray < rightOfArray){
        if (!check(split_array[leftOfArray])){
            leftOfArray++;
        }

        else if(!check(split_array[rightOfArray])){
            rightOfArray--;
        }

        else{
            let temp = split_array[leftOfArray];
            split_array[leftOfArray]  = split_array[rightOfArray];
            split_array[rightOfArray] = temp;
            leftOfArray++;
            rightOfArray--;
        }
    }
 return split_array.join('');
}

document.write(reverse("yo@kays"));

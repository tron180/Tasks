function main(InputString) {
    var str    = InputString.split(',');
    var final  = newRanges(str);
    var result = final.map((final)=> {
          return parseInt(final,10);
        });
  
    console.log(Unique(result));
    
  }

function newRanges(string) {
    var final = string;

    string.forEach(function (num, index) {

        if (num.indexOf("-") > -1) {
            console.log(num);
            var hiphenSplit = num.split("-");
            var start       = +hiphenSplit[0];
            var end         = +hiphenSplit[1];

            replace         = expansion(start, stop);
            final.splice(index, 1);
            final           = final.concat(replace);  
            console.log(start,stop); 
        }
    })

    return final;
}

function expansion(start, end){
    var normalArray = [];

    for (start = 0; start < end; start++) {
        normalArray.push(start);
        
    }

    return normalArray;
}

function Unique(arr) {
    var unique    = [];
    var duplicate = [];
    for (let i = 0; i < arr.length; i++){
      if(unique.includes(arr[i]) && !duplicate.includes(arr[i])){
        duplicate.push(arr[i]);
      }
      else{
        unique.push(arr[i]);
      }
    }
    return [unique, duplicate];
  }


main("1,2-4,3,2,6,5,5")
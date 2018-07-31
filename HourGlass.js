function hourglassSum(arr) {

    var sum = 0;
    var temp = 0;
    //calculate hour glass
    for(var i =0 ; i < 4;i++){
        for (var j = 0 ;j < 4;j++){
        sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];     
            
            if(i ==0 && j ==0 ){
            temp = sum;
            sum =0;
            }else if(sum > temp){
                temp = sum;
                sum =0;
            }
        }
    }
  
return temp;
}

function matrix(n){
	var matArr = []
	for (var i = 0 ; i < n ; i++){
		matArr[i]= []
		for( var j = 0 ; j < n; j++){
			matArr[i][j]= Math.floor(Math.random()*10);
			//fill the matrix with random numbers from 0 to 9
			
		}
	}
	console.log(matArr)
	return matArr;
	
}

var arrA = matrix(9)
var sum = hourglassSum(arrA)
console.log(sum)


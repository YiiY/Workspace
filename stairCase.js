function staircase(n){
	var string;
	for (var i =1 ; i <= n ; i ++){
		string =""
		for(var j = 1; j <= n-i;j++){
			string+=" "
		}
		for(var h = 1; h <= i; h++){
			string+="#"
		}
		console.log(string)
	}

}

staircase(6)
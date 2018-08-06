function stringComp(s){
	var news =""
	var temp = ""
	var count = "" 

for(var i = 0 ; i < s.length;i++){
	if (temp != s[i]){
		//mistake 1: used s[i] instead of temp, so the index were off
		news=news+temp+count;
		temp = s[i];
		count = 1 ;
		}
    else {
		count++
	}
	
	
}	

news=news+temp+count; //mistake 2: need to add the last index, it was missing 

return news.length < s.length ? news:s
}

console.log(stringComp("aabbcccccccccccdddeeeeeeeeeee"))
//a2b2c11d3e11
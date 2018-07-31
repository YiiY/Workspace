function replaceString(str,rpl)
{
	return str.split(' ').join(rpl)
}

var string = replaceString ('a bc d  e   f     ','10')

console.log(string)
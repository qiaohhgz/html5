var cs = ["FF3333", "3333FF", "33FF33", "FF7700", "FF33BB", "666666", "FFFF00", "BBFF33"];
function show(){
	for(var i=0;i<cs.length;i++){
		var d = document.createElement("div");
d.backgroundColor = cs[i];
document.body.append(d);
		}

}
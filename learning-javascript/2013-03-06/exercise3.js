var s="";
for(var i=1;i<=10;i++){
s="";
for(var j=1;j<=10;j++){
if(j===i){
s+="1";
}else{
s+="0";
}
if(j!=10){
s+=",\t";
}
}
console.log(s+"\n");
}

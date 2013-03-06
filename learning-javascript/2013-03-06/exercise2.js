var r;
var riga="";
for(var i=1;i<=10;i++){
riga="";
for(var c=1;c<=10;c++){
r=c*i;
if(c!=10){
riga+=r+",\t";
}else{
riga+=r+"\t";
}
}
console.log(riga+"\n");
}
console.log("\n");

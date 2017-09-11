/*添加*/

function reverse(arr){
	var b=[];
	for(i=arr.length-1;i>=0;i++){
		push(b,a[i])
	}
}
function push(arr,...value){
	for(i=0;i<value.length;i++){
       arr[arr.length]=value[i]
	}
}

function dayu(arr,fn){
    var newarr=[];
    for(i=0;i<arr.length;i++){
      if(fn(arr[i])){
        newarr[newarr.length]=arr[i];
      }
    }
    return newarr;
}
 var result=dayu(c,function(value){
    return value>0
})
  var c=[-1,0,2,3,-8];
 alert(result)
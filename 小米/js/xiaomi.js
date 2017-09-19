window.onload=function(){
	let lunbotu=document.getElementsByClassName('lunbotu')[0];
	let lis= lunbotu.getElementsByTagName('li');
	let yuanjiao=document.getElementsByClassName('yuanjiao')[0];
	let li=yuanjiao.getElementsByTagName('li');
	let right=document.getElementsByClassName('right')
    let num=0;
	for(let i=0;i<li.length;i++){            //鼠标点击//
		li[i].onclick=function(){
			for(let j=0;j<lis.length;j++){
				lis[j].style.display="none";
				li[j].style.background='grey';
			}
			lis[i].style.display="block";
			li[i].style.background='white';
		}
		num=i;	
	}

    lunbotu.onmouseover=function(){              //鼠标移入效果  停止效果//
    	clearInterval(t);
    }
    lunbotu.onmouseout=function(){               //鼠标移出效果//
    	 t =setInterval(move,1000); 
    }

    let t =setInterval(move,1000);          //自动播放//
    function move(){
      num++;
	if(num==lis.length){
		num=0;
	}
      for(let i=0;i<lis.length;i++){
      	lis[i].style.display='none';
      	li[i].style.background='grey';
      }
     li[num].style.background='white';
      lis[num].style.display='block';
    }
	 /*let nav=document.getElementsByClassName('nav')[0];  //侧导航//
	  let xuanxian= nav.getElementsByTagName('li');
	  let item=document.getElementsByClassName('item');
      for(let i=0;i<xuanxian.length;i++){
      	xuanxian[i].onmouseover=function(){
      		item[i].style.display='block';
      	}
      	xuanxian[i].onmouseout=function(){
      		item[i].style.display='none';
      	}
      }*/
}
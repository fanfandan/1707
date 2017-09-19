window.onload=function(){
	let lunbotu=document.getElementsByClassName('lunbotu')[0];
	let lis=lunbotu.getElementsByTagName('li');
	let yuankuang=document.getElementsByClassName('yuankuang')[0];
	let yuan=yuankuang.getElementsByClassName('yuan');
	let zhuti=document.getElementsByClassName('zhuti-right')[0];
	let left=zhuti.getElementsByClassName('left')[0];
	let right=zhuti.getElementsByClassName('right')[0];

      let num=0; //当前显示第几张//          //自动轮播//
   let t;

	  for(let i=0;i<yuan.length;i++){  //鼠标点击时//
	  	yuan[i].onclick=function(){
	  		for(let j=0;j<lis.length;j++){
	  			lis[j].style.display='none';
	  			yuan[j].style.background='grey';
	  		}
	  		//先消失所有，再对应的显示//
	  		lis[i].style.display='block';
	  		yuan[i].style.background='white';		
	  	}
	  	num=i;
	  }
    left.onclick=function(){
      movel();
    }
    right.onclick=function(){
      move();
    }
//侧导航//
	/*let aside=document.getElementsByClassName('zhuti-left')[0];
	let xuanxian= aside.getElementsByTagName('li');
	let item=document.getElementsByClassName('item');
    
    for(let i=0;i<xuanxian.length;i++){
    	xuanxian[i].onmouseover=function(){
    		item[i].style.display='block';
    	}
    	xuanxian[i].onmouseout=function(){
    		item[i].style.display='none';
    	}
    }*/


   
   t=setInterval(move,1000);

   zhuti.onmouseover=function(){         //鼠标移入停止//
       clearInterval(t);
   }
   zhuti.onmouseout=function(){
      t=setInterval(move,1000);
   }

   function move(){                   //自动播放//
   	num++;
	if(num==lis.length){
		num=0;
	}
      for(let i=0;i<lis.length;i++){
      	lis[i].style.display='none';
      	yuan[i].style.background='grey';
      }
     yuan[num].style.background='white';
      lis[num].style.display='block';
  }
  function movel(){                   //自动播放//
   	num--;
	if(num<0){
		num=lis.length-1;
	}
      for(let i=0;i<lis.length;i++){
      	lis[i].style.display='none';
      	yuan[i].style.background='grey';
      }
     yuan[num].style.background='white';
      lis[num].style.display='block';
  }

}

// 鼠标点击 轮播自动走 
/*for(var i=0;i<btn.length;i++){  用var
 	btn[i].index=i;
 	btn[i].onclick=function(){
 		images[now].style.display='none';
 		images[this.index].style.display='block';
 		now=this.index;
 	}
 }*/
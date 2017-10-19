 $(document).ready(function(){

     //服务项目点击
 	    var zoom=1.2;
 	    var move=-15;
         $('li').hover(function(){
         	width=$('li').width()*zoom;
         	height=$('li').height()*zoom;

           $(this).find('.zp').stop(false,true).fadeIn(200);
           $(this).click(function(){
           	  window.location='gallery.html';
           })
      },function(){
           $(this).find('.zp').stop(false,true).fadeOut(200)});


         //向上
       $('.up').click(function(){
       	   scrollTop=document.body.scrollTop;
       	   animate(document.body,{scrollTop:0});
});

       //轮播图
       $(".btn").show();
       $(".btn  a:first").addClass("active");
       $().gallery({

      	current:['.sho_img1' ,'.show_img1'],
      	left:['.sho_img2' ,'.show_img2'],
      	right:['.sho_img3' ,'.show_img3'],
      	none:['.sho_img4' ,'.show_img4'],
        duration:500,
        autoChange:true,
        changeTimeout:3000
      })
   })


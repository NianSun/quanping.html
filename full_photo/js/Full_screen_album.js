$(function()
{
	//获取  屏幕高度  和宽度
	var v_Width=$(document).width();
	var v_Height=$(document).height();
	/////////////////////////////////
	var oImg02=document.getElementById('img02');
	var oLayer=document.getElementById('layer');
	var oSmallimg=oLayer.getElementsByTagName('img');
	var oAlbum=document.getElementById('album');
	var oPrevSm=document.getElementById('prevSm');
	var oNextSm=document.getElementById('nextSm');
	var oSlidenumber=document.getElementById('length');
	var oThisimg=document.getElementById('thisImg');
	var oPrev=document.getElementById('prev');
	var oNext=document.getElementById('next');
	var oClose=document.getElementById('close');
	var re=/[^0-9]+/g;
	oSlidenumber.innerHTML=oSmallimg.length;
	oThisimg.innerHTML='1';


	oClose.onclick=function(){
		oLayer.style['display']='none';
		startMove(oAlbum,{opacity:100});
	}
	// 点击小图背景出现大图  小图菜单消失
	
	for(var i=0;i<oSmallimg.length;i++){
		oSmallimg[i].index=i;
		oSmallimg[i].onclick=function(){
			oThisimg.innerHTML=(this.index+1);
			oImg02.style['opacity']='0.2';
			oImg02.src='images/'+(this.index+1)+'.jpg';
			startMove(oImg02,{opacity:100});

			oLayer.style['display']='none';
			startMove(oAlbum,{opacity:100});
				if(this.index==0){
					oPrevSm.src='images/12.jpg';
				}
				else{
				oPrevSm.src='images/'+(this.index)+'.jpg';
				}
				if ((this.index+2)>12) {
					oNextSm.src='images/1.jpg';
				}
				else{
					oNextSm.src='images/'+(this.index+2)+'.jpg';
				}
		}

		$('#img02').css({'width':v_Width,'height':v_Height});
	
	}
	//小图菜单居中
	$('.layer').css({'left':((v_Width-$('.layer').width())*0.5),'top':((v_Height-$('.layer').height())*0.5)})
	//小图菜单缩略图
	//点击缩略图小图菜单显示
	oAlbum.onclick=function(){
		oLayer.style['display']='block';
		startMove(oAlbum,{opacity:0});
	}
	//点击前一张按钮
	oPrevSm.onclick=function(){
		var iNow=oPrevSm.src;
		var iNow1='';
		for(var i=iNow.indexOf('images');i<iNow.length;i++){
			iNow1+=iNow.charAt(i);
		}
	
		var iNow2=iNow1.replace(re,'');
			if((iNow2-1)==0){
				oPrevSm.src='images/12.jpg';
				oNextSm.src='images/2.jpg';
				oImg02.src='images/'+1+'.jpg';
				oImg02.style['opacity']='0';
				startMove(oImg02,{opacity:100});
				oThisimg.innerHTML=1;
			}
			else{
				oPrevSm.src='images/'+(iNow2-1)+'.jpg';
					if((parseInt(iNow2)+1)>12){
						
						oNextSm.src='images/1.jpg';
					}
					else{
						oNextSm.src='images/'+(parseInt(iNow2)+1)+'.jpg';
					}
				
				$('#img02').css({'width':v_Width,'height':v_Height});
				oImg02.src='images/'+iNow2+'.jpg';
				oImg02.style['opacity']='0';
				startMove(oImg02,{opacity:100});
				oThisimg.innerHTML=iNow2;
			}
			
		
				$('#img02').css({'width':v_Width,'height':v_Height});
		}
		//点击后一张按钮
	oNextSm.onclick=function(){
		var iNow=oNextSm.src;
		var iNow1='';
		for(var i=iNow.indexOf('images');i<iNow.length;i++){
			iNow1+=iNow.charAt(i);
		}
	
		var iNow2=iNow1.replace(re,'');
			if((parseInt(iNow2)+1)>12){
				oNextSm.src='images/1.jpg';
				oPrevSm.src='images/12.jpg';
				oImg02.src='images/'+1+'.jpg';
				$('#img02').css({'width':v_Width,'height':v_Height});
				oImg02.style['opacity']='0.2';
				startMove(oImg02,{opacity:100});
				oThisimg.innerHTML=1;
			}
			else{
				oNextSm.src='images/'+(parseInt(iNow2)+1)+'.jpg';
				if((iNow2-1)<1){
					oPrevSm.src='images/12.jpg';
				}
				else{
					oPrevSm.src='images/'+(iNow2-1)+'.jpg';
				}
				$('#img02').css({'width':v_Width,'height':v_Height});
				oImg02.src='images/'+iNow2+'.jpg';
				oImg02.style['opacity']='0.2';
				startMove(oImg02,{opacity:100});
				oThisimg.innerHTML=iNow2;
			}
			

		}
		//点击前一个箭头小图标
		oPrev.onclick=oPrevSm.onclick;
		oPrev.onmousedown=function(){
			this.src='img/back.png';
		}
		oPrev.onmouseup=function(){
			this.src='img/back_dull.png';
		}
		oNext.onclick=oNextSm.onclick;
		oNext.onmousedown=function(){
			this.src='img/forward.png';
		}
		oNext.onmouseup=function(){
			this.src='img/forward_dull.png';
		}
//		$('#img02').click(function(){
////			alert('dsd');
//		$(this).css('width',1920);
//		})
});
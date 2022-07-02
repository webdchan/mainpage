$(document).ready(function(){

  //주메뉴 오버시 서브메뉴 풀다운
    $(".top_nav").mouseenter(function(){ //주메뉴영역에 오버시
      $(this).find(".topmenu>li>.smenu").stop().slideDown();
      $(".bg_box").stop().slideDown();
    });
  
    $("nav").mouseleave(function(){ //헤더영역을 나갔을 때
      $(this).find(".topmenu>li>.smenu").stop().slideUp();
      $(".bg_box").stop().slideUp();
    });
  
    //주메뉴 오버시 서브박스배경색 나오게 함
    $(".topmenu>li").hover(function(){
      $(this).find("ul").css({"background":"rgb(244, 244, 244)"});
    },function(){
      $(this).find("ul").css({"background":"#fff"});
    });
  
    //주메뉴 오버시 서브bgbox의 왼쪽이미지변경
    $(".topmenu>li").hover(function(){
      old=0; //기존 보이는 이미지
      val=$(this).index(); //새로 바뀌는 이미지
  
      $(".topimg li").eq(old).stop(true,true).hide("slow"); //기존이미지는 숨기기
      $(".topimg li").eq(val).stop(true,true).show("slow"); //기존이미지는 숨기기
      old=val; //위에서 새로 바뀐 이미지는 다시 기존 이미지에 저장(순환)
    
    },function(){
      $(".topimg li").stop(true,true).hide(); 
    });


    $(".topmenu>li").hover(function(){
      $(".topimg .title1 h3").animate({"color":"#87ce63"});
    },function(){
      $(".topimg .title1 h3").animate({"color":"#fff"});
    });

    $(".topmenu>li").hover(function(){
      $(".topimg .title2 h3").animate({"color":"#f28b0c"});
    },function(){
      $(".topimg .title2 h3").animate({"color":"#fff"});
    });

    /* ----- 사이드 점 스크롤 */
    $(window).scroll(function(){
      
      if($(this).scrollTop()>1270){

        if($(this).scrollTop()>2720){

          if($(this).scrollTop()>4220){
            $(".sd_design").removeClass("sd_active");
            $(".sd_d4").toggleClass("sd_active");
          }else{
            $(".sd_design").removeClass("sd_active");
            $(".sd_d3").toggleClass("sd_active");
          }

        }else{
          $(".sd_design").removeClass("sd_active");
          $(".sd_d2").toggleClass("sd_active");
        }
        
      }else{
        $(".sd_design").removeClass("sd_active");
        $(".sd_d1").toggleClass("sd_active");
      }
    });
  
  /* 사이드 사각도형 스크롤 */ 
    $(".sd_d1").click(function(){
      $("html,body").stop(true,true).animate({scrollTop:"0"},"easeOutCirc");
    });
    $(".sd_d2").click(function(){
      $("html,body").stop(true,true).animate({scrollTop:"1350"},"easeOutCirc");
    });
    $(".sd_d3").click(function(){
      $("html,body").stop(true,true).animate({scrollTop:"2800"},"easeOutCirc");
    });
    $(".sd_d4").click(function(){
      $("html,body").stop(true,true).animate({scrollTop:"4300"},"easeOutCirc");
    });
    $("#top_btn").click(function(){
      $("html,body").stop(true,true).animate({scrollTop:"0"},"easeOutCirc");
    });

  /* 비주얼 슬라이드 */
  let img_w = $(".visual_on ul li").width(); //이미지의 가로너비
  let img_n = $(".visual_on ul li").length; //이미지의 총개수  
  let oldidx = 0; //기존이미지
  let index = 0; //선택된 새이미지

  $(".visual_on ul li:last").prependTo(".visual_on ul");
  //갤러리의 마지막 이미지를 갤러리 안의 가장 앞으로 배치	
  $(".visual_on ul").css({
    left: -img_w
  });
  //갤러리를 하나의 이미지 가로길이 만큼 왼쪽으로 배치


  //index번째 비주얼이미지 출력하는 함수생성
  function slideImg(index, m) { //m은 prev와 next를 판단 

    if (m == 0) { //prev눌렀을때
      //이전 이미지가 슬라이드된후 마지막 이미지를 갤러리안의 제일 앞으로 배치	
      $(".visual_on ul").stop(true, true).animate({
        left: "+=" + img_w + "px"
      }, 700, "easeOutCubic", function () {
        $(".visual_on ul li:last").prependTo(".visual_on ul");
        $(".visual_on ul").css({
          left: -img_w
        }); //최종목적지
      });

    } else { //next눌렀을때
      //다음 이미지가 슬라이드된후 제일앞의 이미지를 갤러리안의 제일 마지막으로 배치
      $(".visual_on ul").stop(true, true).animate({
        left: "-=" + img_w + "px"
      }, 700, "easeOutCubic", function () {
        $(".visual_on ul li:first").appendTo(".visual_on ul");
        $(".visual_on ul").css({
          left: -img_w
        }); //최종목적지
      });

    }
    oldidx = index;
  }

  //슬라이드 자동함수 생성
  function slideAuto() {
    index++;
    if (index == img_n) {
      index = 0;
    }
    slideImg(index, 1);
  }

  auto = setInterval(slideAuto, 4000);


  //이전버튼 클릭
  $(".pre").click(function () {

    clearInterval(auto);

    index--;
    if (index < 0) {
      index = img_n - 1;
    }
    slideImg(index, 0);

    auto = setInterval(slideAuto, 4000);

  });


  //다음버튼 클릭
  $(".nex").click(function () {

    clearInterval(auto);

    index++;
    if (index >= img_n) {
      index = 0;
    }
    slideImg(index, 1);

    auto = setInterval(slideAuto, 4000);

  });

  /* 컨텐츠1 */

   //자동으로 슬라이드 함수생성
   function bannerAuto(){

    $(".c1_content_visual ul").stop().animate({marginLeft:"-=450px"},800,function(){
      $(".c1_content_visual ul li:first-child").appendTo(".c1_content_visual ul"); //첫번째 이미지 맨뒤로 이동
      $(this).css({marginLeft:"30px"}); //최종목적지
    });

  }
  bauto=setInterval(bannerAuto,2000);


     //다음보기
    $(".c1_btn .ban_right").click(function(){

      clearInterval(bauto);

      $(".c1_content_visual ul").stop().animate({marginLeft:"-=450px"},800,function(){
        $(".c1_content_visual ul li:first-child").appendTo(".c1_content_visual ul"); //첫번째 이미지 맨뒤로 이동
        $(this).css({marginLeft:"30px"}); //최종목적지
      });
  
      bauto=setInterval(bannerAuto,2000);

    });
  
    //이전보기
    $(".c1_btn .ban_left").click(function(){

      clearInterval(bauto);
  
      $(".c1_content_visual ul").stop().animate({marginLeft:"+=450px"},800,function(){
        $(".c1_content_visual ul li:last-child").prependTo(".c1_content_visual ul"); //첫번째 이미지 맨뒤로 이동
        $(this).css({marginLeft:"30px"}); //최종목적지
      });

      bauto=setInterval(bannerAuto,2000);
  
    });

    //마우스를 올리면 슬라이드 자동함수 멈추고, 마우스를 내리면 다시 자동함수 실행...
    $(".c1_content_visual").hover(function(){
      clearInterval(bauto);
    },function(){
      bauto=setInterval(bannerAuto,2000);
    });
    

  /* 컨텐츠2 */

  let goldidx=0; //기존이미지
  let gidx=0; //선택되는 이미지

  function galleryImg(gidx){ //gidx는 선택되는 이미지

    if(goldidx!=gidx){ //기존의 이미지와 선택된 이미지가 다를때...

      $(".content2_thumbs li").eq(goldidx).css({"opacity":0.4}); //기존의 썸네일 흐리게
      $(".content2_thumbs li").eq(gidx).css({"opacity":0.8}); //선택된 썸네일 선명하게
      $(".c2_bg_img li").eq(goldidx).hide().fadeOut(200); //기존 이미지 사라짐
      $(".c2_bg_img li").eq(gidx).hide().fadeIn(300); //선택된 이미지 나타남
      $(".content2_img li").eq(goldidx).hide().fadeOut(200); //기존 이미지 사라짐
      $(".content2_img li").eq(gidx).hide().fadeIn(300); //선택된 이미지 나타남
      $(".content2_Text li").eq(goldidx).hide().fadeOut(200); //기존 텍스트 사라짐
      $(".content2_Text li").eq(gidx).hide().fadeIn(300); //선택된 텍스트 나타남.

    }

    goldidx=gidx; //선택된 이미지는 다시 기존이미지로 저장

  }

  //썸네일버튼 클릭시.....

  $(".content2_thumbs li").click(function(){
    gidx=$(this).index();
    galleryImg(gidx);
  });


  $(".c3_tab li").click(function(){

    thval=$(this).index();
    thnum=+120*thval;

    $(".c3_tab_header .tab_highlight").animate({top:thnum});
    $(".c3_tab li a").css("color", "#color:#797878");
    $(this).find(">a").css("color","rgb(236, 236, 236)");
    $(".c3_panel li").hide();
    $($(this).find(">a").attr("href")).fadeIn();

  });


});
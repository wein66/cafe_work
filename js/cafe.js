$(function(){
  //검색
  $('.search-select').click(function(e){
    e.preventDefault();  //a 태그의 기능을 중지 시킴
    //search-sbox의 display 값을 받아다가 변수 db에 저장한다.
     const dp =  $('.search-sbox').css("display"); 
     //db 값이 none 일때와 block일때를 구분한다.
     if(dp == "none"){
        //none이라면 아래 화살표를 지우고 위에 화살표를 넣는다.
        $('.selectbox').find('.fa-solid')
                .removeClass('fa-angle-down')
                .addClass('fa-angle-up');
        //search-sbox를 display block으로 바꾼다.        
        $('.search-sbox').show();
     }else{
        //none과 반대의 처리를 한다.
        $('.selectbox').find('.fa-solid').removeClass('fa-angle-up').addClass('fa-angle-down');
        $('.search-sbox').hide();
     }        
  });

   $('.search-sbox>a').click(function(e){
       e.preventDefault();  //a 태그의 기능을 중지 시킴
       const txt = $(this).text();
       $('.search-select').text(txt);
       $('.search-sbox').hide();
       $('.selectbox').find('.fa-solid').removeClass('fa-angle-up').addClass('fa-angle-down');
       $('#selectbox').val(txt);
       $('#searchtext').focus();
   });

  $('.hero li').mouseenter(function(){
      $('.hero li').removeClass('active');
      $(this).addClass('active');
  });

});  //jquery
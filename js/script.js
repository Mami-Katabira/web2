'use strict';

// バーガーメニュー
$(".openbtn").click(function () {
	$(this).toggleClass('active');
	$(".main_nav").toggleClass('panelactive');
	$(".main_nav li").toggleClass('smooth');
});

$(".main_nav a").click(function () {
	$(".openbtn").removeClass('active');
	$(".main_nav").removeClass('panelactive');
	$(".main_nav li").removeClass('smooth');
});

// inview.jsを使った半透明からクリアになる効果
$(function() {
	$('.visible').one('inview', function(event, isInView) {
	//一度のみのinview
	  if (isInView) {
		  // .visibleがビューポートに入った場合
		  $(this).addClass('effect');
	  } else {
		  // .visibleがビューポートにから抜けた場合
		  $(this).removeClass('effect');
	  }
	});
  });

// fadeUp

  $('.fadeUpTrigger').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    }
  });


	// TOPへ戻る

	//スクロールした際の動きを関数でまとめる
function setFadeElement(){
	let windowH = $(window).height();	//ウィンドウの高さを取得
	let scroll = $(window).scrollTop(); //スクロール値を取得
    
    //出現範囲の指定
	let contentsTop = Math.round($('.backToTop').offset().top);	//要素までの高さを四捨五入した値で取得
	let contentsH = $('.backToTop').outerHeight(true);	//要素の高さを取得

  //出現範囲内に入ったかどうかをチェック
	if(scroll+windowH >= contentsTop && scroll+windowH  <= contentsTop+contentsH){
$("#page-top").addClass("UpMove"); //入っていたらUpMoveをクラス追加
$("#page-top").removeClass("DownMove"); //DownMoveを削除
$(".hide-btn").removeClass("hide-btn"); //hide-btnを削除 
}else{
        if(!$(".hide-btn").length){				//サイト表示時にDownMoveクラスを一瞬付与させないためのクラス付け。hide-btnがなければ下記の動作を行う
		$("#page-top").addClass("DownMove");  //DownMoveをクラス追加
		$("#page-top").removeClass("UpMove"); //UpMoveを削除	
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	setFadeElement();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
// $(window).on('load', function () {
// 	setFadeElement();/* スクロールした際の動きの関数を呼ぶ*/
// });

// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

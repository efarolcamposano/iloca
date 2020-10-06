$(function(){

  // NAV COLLAPSE
  const navMain = $("#navbarNavAltMarkup");
  navMain.on("click", "a", null, function () {  
      navMain.collapse('hide');
  }); 

  $('.navbar-nav > a').on('click', function(e) {
    $('.navbar-nav > a').removeClass('active');
    $(this).addClass('active');
  });  

  // SMOOTH-SCROLL
  let offset = $("header").outerHeight();
  $('a[href^="#"]').on('click',function (e) {
      let target = this.hash,
      $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top-offset
      }, 600, 'swing', function () {
      window.location.hash = target;
      });
  });



 });
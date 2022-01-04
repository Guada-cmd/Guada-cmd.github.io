$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // toogle menu/navbar script

    $('.btn-menu').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.btn-menu i').toggleClass("active");
    });
});

var $cell = $('.card');

//open and close card when clicked on card
$cell.find('.js-expander').click(function() {

  var $thisCell = $(this).closest('.card');

  if ($thisCell.hasClass('is-collapsed')) {
    $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
    $thisCell.removeClass('is-collapsed').addClass('is-expanded');
    
    if ($cell.not($thisCell).hasClass('is-inactive')) {
      //do nothing
    } else {
      $cell.not($thisCell).addClass('is-inactive');
    }

  } else {
    $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    $cell.not($thisCell).removeClass('is-inactive');
  }
});

//close card when click on cross
$cell.find('.js-collapser').click(function() {

  var $thisCell = $(this).closest('.card');

  $thisCell.removeClass('is-expanded').addClass('is-collapsed');
  $cell.not($thisCell).removeClass('is-inactive');

});

function myFunction() {
  document.getElementById("btn-contactar").onclick = function () {
    location.href = "/contacto.html";
};
}

function myFunctionCV() {
  document.getElementById("btn-cv").onclick = function () {
    location.href = "https://drive.google.com/file/d/10payd6FAQegIZZ61q6Samm3OGOf1ZfFR/view?usp=sharing";
};
}

$(function() {
  $('progress').each(function() {
    var max = $(this).val();
    $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
			});
});
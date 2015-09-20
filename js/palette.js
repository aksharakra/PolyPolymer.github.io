$(".def").click(function(){
  $(".abc").css("background-color", $(this).css("background-color"));
});
// (function (window, $) {
  
//   $(function() {
    
    
//     $('.def').on('click', function (event) {
//       event.preventDefault();
      
//       var rippleObj = $(".box");
//       var $div = $('<div/>');
      
//       $div.addClass('ripple-effect');
//       var $ripple = $(".ripple-effect");
      
//       $ripple.css("height", rippleObj.height());
//       $ripple.css("width", rippleObj.width());
//       $div
//         .css({
//           background: rippleObj.data("ripple-color")
//         }) 
//         .appendTo(rippleObj);

//       window.setTimeout(function(){
//         $div.remove();
//       }, 20);
//     });
    
//   });
  
// })(window, jQuery);
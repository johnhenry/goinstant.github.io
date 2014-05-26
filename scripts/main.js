$(function() {

/*** Sticky header ***/

$('.site-nav').waypoint('sticky');

/*** Highlight Nav ***/

  var navSections = $('section');
  var navLinks = $('.site-nav li');

  if ($(navLinks).length) {
    navSections
    .waypoint(function(direction){
      if (direction === 'down') {
        var activeSection;
        activeSection = $(this);
        var navActive =
          $('.site-nav a[href="#' + activeSection.attr("id") + '"]').parent();
        navLinks.removeClass("active");
        navActive.addClass("active");
      }
    }, { offset: 1 })
    .waypoint(function(direction){
      if (direction === 'up') {
        var activeSection;
        activeSection = $(this);
        var navActive =
          $('.site-nav a[href="#' + activeSection.attr("id") + '"]').parent();
        navLinks.removeClass("active");
        navActive.addClass("active");
      }
    }, { offset: -1 });
  }

/*** Smooth Scroll ***/

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 250);
        return false;
      }
    }
  });

});
jQuery(document).ready(function(){function e(e,t){return Math.abs(e-t)}function t(){var t=$(".media-test").width(),n=e(t,i);100===n&&(200===t&&location.reload(),100===t&&location.reload(),i=t)}var i=$(".media-test").width();$(".show-menu").click(function(){return $(this).hasClass("open")?($(this).removeClass("open"),$(this).next("ul").slideUp()):($(this).addClass("open"),$(this).next("ul").slideDown()),!1});var n;$(window).resize(function(){clearTimeout(n),n=setTimeout(t,100)})});
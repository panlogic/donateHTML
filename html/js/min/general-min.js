jQuery(document).ready(function(){function e(e,s){return Math.abs(e-s)}function s(){var s=$(".media-test").width(),a=e(s,i);100===a&&(300===s&&(location.reload(),t()),200===s&&(location.reload(),n()),i=s)}var i=$(".media-test").width();$(".show-info").click(function(){return $(this).hasClass("open")?($(this).removeClass("open"),$(this).next("p").slideUp()):($(this).addClass("open"),$(this).next("p").slideDown()),!1}),$(".show-manual").click(function(){return $(this).hasClass("open")?($(this).removeClass("open"),$(this).next("div").slideUp()):($(this).addClass("open"),$(this).next("div").slideDown()),!1}),$(".help").click(function(e){e.stopPropagation()}),$(".show-help").click(function(){return $("#"+this.id+"-overlay").fadeIn(),!1}),$(".close-help, .help-container").click(function(){return $(".help-container").fadeOut(),!1}),$(".add-giftaid").click(function(){return $(".help-container").fadeOut(),$("#giftaid").prop("checked",!0),!1}),$(".add-recurring").click(function(){return $(".help-container").fadeOut(),$("#recurring").prop("checked",!0),!1}),$(".show-overlay").click(function(){return $(".overlay").fadeIn(),!1}),$(".close-overlay").click(function(){return $(".overlay").fadeOut(),!1}),$(".show-campaign-info").click(function(){return $(this).hasClass("open")?($(this).removeClass("open").html("Show more"),$(".campaign-info").css("height","8em"),$(".campaign-info").css("padding-bottom","0"),$(".fade").show()):($(this).addClass("open").html("Show less"),$(".campaign-info").css("height","auto"),$(".campaign-info").css("padding-bottom","1em"),$(".fade").hide()),!1});var t=function(){$("div.filters ul a").click(function(){return $(this).hasClass("selected")?($(this).removeClass("selected"),$(".show-"+this.id).slideUp()):$("div[class^='show-']").is(":visible")?$(this).hasClass("selected")?($(this).removeClass("selected"),$("div[class^='show-']").fadeOut()):($("div.filters ul a").removeClass("selected"),$("div[class^='show-']").hide(),$(this).addClass("selected"),$(".show-"+this.id).fadeIn()):($(this).addClass("selected"),$(".show-"+this.id).slideDown()),!1})},n=function(){$(".show-filters").click(function(){return $(".overlay").fadeIn(),$(".filters-container").animate({right:0}),!1}),$(".close, .overlay").click(function(){return $(".overlay").fadeOut(),$(".filters-container").animate({right:"-100%"}),!1}),$("div.filters h2").click(function(){return $(this).hasClass("selected")?($(this).removeClass("selected"),$(".show-"+this.id).slideUp()):($(this).addClass("selected"),$(".show-"+this.id).slideDown()),!1})};200===i&&n(),300===i&&t();var a;$(window).resize(function(){clearTimeout(a),a=setTimeout(s,100)})});
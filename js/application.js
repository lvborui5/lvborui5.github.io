// build time:Fri Jun 01 2018 18:36:43 GMT+0800 (中国标准时间)
$(function(){$('[data-toggle="tooltip"]').tooltip();if(typeof $.fn.slimScroll!="undefined"){$(".sidebar .slimContent").slimScroll({height:$(window).height(),color:"rgba(0,0,0,0.15)",size:"5px",position:"right"})}$("#collapseToc").on("shown.bs.collapse",function(){if(typeof $.fn.slimScroll!="undefined"){$(".sidebar .slimContent").slimScroll().on("slimscroll")}});$(".geopattern").each(function(){$(this).geopattern($(this).data("pattern-id"))});var t=$("#nav-main").okayNav({swipe_enabled:false});$("[data-stick-bottom]").keepInView({fixed:false,parentClass:"has-sticky",customClass:"sticky",trigger:"bottom",zindex:42,edgeOffset:0});$("[data-stick-top]").keepInView({fixed:true,parentClass:"has-sticky",customClass:"sticky",trigger:"top",zindex:42,edgeOffset:0})});
//rebuild by neat 
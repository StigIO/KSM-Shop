oneJQuery(function($){var json={slideSpeed:1024,singleItem:true,itemsScaleUp:true,autoPlay:5120,navigation:true,navigationText:["",""],transitionStyle:false};json.afterAction=function(){var that=this;clearTimeout(this.preemptFirstSlideTimo);if(!this.options.transitionStyle){if(this.currentItem===this.itemsAmount-1){if(this.prevItem!==0){setTimeout(function(){that.jumpTo(0)},1024)}else{that.jumpTo(that.currentItem);setTimeout(function(){that.goTo(that.currentItem-1)},10)}}else if(this.currentItem===0&&this.options.autoPlay){this.preemptFirstSlideTimo=setTimeout(function(){that.goTo(1)},this.options.autoPlay-1024)}}oneJQuery("#slidesjs-89496F39-B89A-4B7A-9CBB-4138CA938F23 .slider-caption").each(function(){var el=oneJQuery(this);el.width(el.parent().width()-10)});oneJQuery("#slidesjs-89496F39-B89A-4B7A-9CBB-4138CA938F23 .slide-cntnr.middle p.slider-caption").each(function(){var el=oneJQuery(this);el.height(el.find("span").height())})};var $slidejs=$("#slidesjs-89496F39-B89A-4B7A-9CBB-4138CA938F23");if($slidejs.children().length){var carousel=$slidejs.owlCarousel(json);carousel.data("owlCarousel").updateVars();var resetHeight=function(){if(window.innerWidth<650){var ratio=.2;if($("#slidesjs-89496F39-B89A-4B7A-9CBB-4138CA938F23").parents(".textblock").length){ratio=ratio/2}$("#slidesjs-89496F39-B89A-4B7A-9CBB-4138CA938F23").height((window.innerWidth-40)*ratio);$("#slidesjs-89496F39-B89A-4B7A-9CBB-4138CA938F23 .slider-item").height((window.innerWidth-40)*ratio);$("#slidesjs-89496F39-B89A-4B7A-9CBB-4138CA938F23 .slider-caption").parent().height((window.innerWidth-40)*ratio)}};$(window).resize(resetHeight);resetHeight()}});
oneJQuery(function ($) {
    var json = {
        'slideSpeed': 1024,
        'singleItem': true,
        'itemsScaleUp': true,
        'autoPlay': 5120,
        'navigation': true,
        'navigationText': [
            '',
            ''
        ],
        'transitionStyle': false
    };
    json.afterAction = function () {
        var that = this;
        clearTimeout(this.preemptFirstSlideTimo);
        if (!this.options.transitionStyle) {
            if (this.currentItem === this.itemsAmount - 1) {
                if (this.prevItem !== 0) {
                    setTimeout(function () {
                        that.jumpTo(0);
                    }, 1024);
                } else {
                    that.jumpTo(that.currentItem);
                    setTimeout(function () {
                        that.goTo(that.currentItem - 1);
                    }, 10);
                }
            } else if (this.currentItem === 0 && this.options.autoPlay) {
                this.preemptFirstSlideTimo = setTimeout(function () {
                    that.goTo(1);
                }, this.options.autoPlay - 1024);
            }
        }
        oneJQuery('#slidesjs-4823B020-269C-4985-B59A-4CF76C6BA6FF .slider-caption').each(function () {
            var el = oneJQuery(this);
            el.width(el.parent().width() - 10);
        });
        oneJQuery('#slidesjs-4823B020-269C-4985-B59A-4CF76C6BA6FF .slide-cntnr.middle p.slider-caption').each(function () {
            var el = oneJQuery(this);
            el.height(el.find('span').height());
        });
    };
    var $slidejs = $('#slidesjs-4823B020-269C-4985-B59A-4CF76C6BA6FF');
    if ($slidejs.children().length) {
        var carousel = $slidejs.owlCarousel(json);
        carousel.data('owlCarousel').updateVars();
        var resetHeight = function () {
            if (window.innerWidth < 650) {
                var ratio = 0.2;
                if ($('#slidesjs-4823B020-269C-4985-B59A-4CF76C6BA6FF').parents('.textblock').length) {
                    ratio = ratio / 2;
                }
                $('#slidesjs-4823B020-269C-4985-B59A-4CF76C6BA6FF').height((window.innerWidth - 40) * ratio);
                $('#slidesjs-4823B020-269C-4985-B59A-4CF76C6BA6FF .slider-item').height((window.innerWidth - 40) * ratio);
                $('#slidesjs-4823B020-269C-4985-B59A-4CF76C6BA6FF .slider-caption').parent().height((window.innerWidth - 40) * ratio);
            }
        };
        $(window).resize(resetHeight);
        resetHeight();
    }
});
oneJQuery(function ($) {
    var json = {
        'slideSpeed': 1024,
        'singleItem': true,
        'itemsScaleUp': true,
        'autoPlay': 5120,
        'navigation': true,
        'navigationText': [
            '',
            ''
        ],
        'transitionStyle': false
    };
    json.afterAction = function () {
        var that = this;
        clearTimeout(this.preemptFirstSlideTimo);
        if (!this.options.transitionStyle) {
            if (this.currentItem === this.itemsAmount - 1) {
                if (this.prevItem !== 0) {
                    setTimeout(function () {
                        that.jumpTo(0);
                    }, 1024);
                } else {
                    that.jumpTo(that.currentItem);
                    setTimeout(function () {
                        that.goTo(that.currentItem - 1);
                    }, 10);
                }
            } else if (this.currentItem === 0 && this.options.autoPlay) {
                this.preemptFirstSlideTimo = setTimeout(function () {
                    that.goTo(1);
                }, this.options.autoPlay - 1024);
            }
        }
        oneJQuery('#slidesjs-0B781303-D9F0-4736-ADA4-A4092E12FDA5 .slider-caption').each(function () {
            var el = oneJQuery(this);
            el.width(el.parent().width() - 10);
        });
        oneJQuery('#slidesjs-0B781303-D9F0-4736-ADA4-A4092E12FDA5 .slide-cntnr.middle p.slider-caption').each(function () {
            var el = oneJQuery(this);
            el.height(el.find('span').height());
        });
    };
    var $slidejs = $('#slidesjs-0B781303-D9F0-4736-ADA4-A4092E12FDA5');
    if ($slidejs.children().length) {
        var carousel = $slidejs.owlCarousel(json);
        carousel.data('owlCarousel').updateVars();
        var resetHeight = function () {
            if (window.innerWidth < 650) {
                var ratio = 1;
                if ($('#slidesjs-0B781303-D9F0-4736-ADA4-A4092E12FDA5').parents('.textblock').length) {
                    ratio = ratio / 2;
                }
                $('#slidesjs-0B781303-D9F0-4736-ADA4-A4092E12FDA5').height((window.innerWidth - 40) * ratio);
                $('#slidesjs-0B781303-D9F0-4736-ADA4-A4092E12FDA5 .slider-item').height((window.innerWidth - 40) * ratio);
                $('#slidesjs-0B781303-D9F0-4736-ADA4-A4092E12FDA5 .slider-caption').parent().height((window.innerWidth - 40) * ratio);
            }
        };
        $(window).resize(resetHeight);
        resetHeight();
    }
});
var homeTpl = require('../tpl/home.string');

SPA.defineView('home', {
	
html: homeTpl,
plugins: ['delegated'],

bindEvents: {
    'beforeShow': function () {
      var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: true,
	    autoplay:2000,
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
			autoplayDisableOnInteraction : false,
	})
    }
}
});

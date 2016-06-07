var searchTpl = require('../tpl/search.string');

SPA.defineView('search', {
  html: searchTpl,
  plugins: ['delegated'],
	bindActions: {
    'switch.view1': function (e) {
      // 视图切换方法
      var index=$(e.el).index();
      $(e.el).addClass('active').siblings().removeClass('active');
      $('#liList').find('li').eq(index).addClass('active1').siblings().removeClass('active1');
    }
	}
});




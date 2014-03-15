Ext.define('Tow.view.Navigation', {
	extend: 'Ext.List',
	xtype: 'navigation',
	requires : ['Ext.data.Store'],
	config: {
		cls : 'nav-list',
		itemTpl : document.getElementById('tpl_left_menu').innerHTML,
		data : [
	        {
	        	title : 'Hot nhất'
	        },{
				title : 'Thể thao'
	        },{
				title : 'Hài'
	        }
        ]
	}
});
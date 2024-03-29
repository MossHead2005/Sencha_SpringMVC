Ext.define('Tow.view.Main', {
	extend: 'Ext.TabPanel',
	xtype: 'main',
	config: {
		tabBarPosition : 'bottom',
		items : [{
				xtype : 'titlebar',
				title : 'OlaTube',
				docked : 'top',
				items :[{
						align : 'left',
						name : 'nav_btn',
						iconCls : 'list',
						ui : 'plain'
				}]
			},{
				title : 'Home',
				iconCls : 'home',
				xtype : 'formpanel',
				html : ['This is a very simple example of Facebook style slide navigation. ',
				'CSS3 animations and a small bit of javascript code. ',
				'Use it freely in your Sencha Touch application'].join(''),
				styleHtmlContent : true
			},{
				title : 'Top',
				iconCls : 'star',
				xtype : 'formpanel',
				html : 'Top videos',
				styleHtmlContent : true
		}]
	}
});

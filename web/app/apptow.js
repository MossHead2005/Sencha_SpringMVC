Ext.application({
	name : 'Tow',
	views : [
				'Viewport',
		        'Main',
				'Navigation'
		    ],
    controllers : ['NavigationController'],
	launch : function(){
		Ext.Viewport.add(Ext.create('Tow.view.Viewport'));
	}
});
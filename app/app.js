// For Google Analytics
var _gaq = [
    ['_setAccount', 'UA-40582409-1'],
    ['_trackPageview']
];

Ext.application({
    name: 'iKnowledge',
    appFolder: 'app',

    controllers: [
        'Navigator',
        'ArticleBox'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [{
                region: 'west',
                width: 300,
                xtype: 'navigator',
                id: 'nav'
            }, {
                region: 'center',
                xtype: 'articlebox',
                id: 'main'
            }]
        });
    }
});

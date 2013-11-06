Ext.define('iKnowledge.view.Navigator', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.navigator',

    title: '知识库',
    collapsible: true,
    resizable: true,
    rootVisible: false,

    store: 'Navigator',

    constructor: function (config) {
        var me = this;

        config.tbar = [{
            xtype: 'button',
            text: '展开所有',
            iconCls: 'icon-nav-expand',
            handler: function() {
                me.expandAll(Ext.emptyFn);
            }
        }, {
            xtype: 'button',
            text: '收起所有',
            iconCls: 'icon-nav-collapse',
            handler: function() {
                me.collapseAll(Ext.emptyFn);
            }
         }, '->', {
            xtype: 'textfield',
            emptyText: '站内搜索',
            listeners: {
                specialkey: me.doSearch
            }
        }];
        me.callParent(arguments);
    },

    initComponent: function() {
        this.callParent(arguments);
    },
    
    doSearch: function(me, event, options) {
        if (event.keyCode == 13) {
            var google = 'http://www.google.com/cse/publicurl?cx=017980255496695582255:sl7zsnfe4qg&q=';
            var url = google + encodeURIComponent(event.currentTarget.value);
            open(url, 'ichenxiaodao-search');
        }
    }
});
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
        }];
        me.callParent(arguments);
    },

    initComponent: function() {
        this.callParent(arguments);
    },
});

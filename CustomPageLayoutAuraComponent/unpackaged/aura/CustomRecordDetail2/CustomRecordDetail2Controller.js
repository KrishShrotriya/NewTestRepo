({
    init : function(component, event, helper) {
        component.set('v.isReadMode',true);
        console.log('init',component.get('v.isReadMode'));
        helper.retrievePageLayout(component, helper);
        
    },
    onsuccess : function(component, event, helper) {
        component.set('v.isReadMode',true);
        console.log('onsuccess',component.get('v.isReadMode'))
		helper.onsuccess(component, event, helper);
	},
    handleClick:function(component, event, helper){
        component.set('v.isReadMode',false);  
        console.log('handleClick',component.get('v.isReadMode'));
    },
    onCancel: function (component, event, helper){
        component.set('v.isReadMode',true);
        $A.get('e.force:refreshView').fire();
    }
})
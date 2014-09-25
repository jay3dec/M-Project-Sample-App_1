/*global MyMProjectApp*/

MyMProjectApp.Controllers = MyMProjectApp.Controllers || {};

(function () {
    'use strict';

    MyMProjectApp.Controllers.AbsintheController = M.Controller.extend({
	
	
        
        _absintheView: null,

        applicationStart: function() {
            this._initLayout();
		
        },

        show: function() {
            this._setViews();
		
            MyMProjectApp.getLayout().startTransition();
        },

        _initLayout: function() {
            var _layout = M.SwitchHeaderContentLayout.design(this, null, true);
            MyMProjectApp.setLayout(_layout);
            this._setViews();
        },

        _setViews: function() {
            if(!this._absintheView) {
                this._absintheView = MyMProjectApp.Views.AbsintheView.create(this);
            }
            MyMProjectApp.getLayout().applyViews({
                content: this._absintheView
            });
        },

	

    });

})();

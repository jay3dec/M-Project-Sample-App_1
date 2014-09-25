/*global MyMProjectApp*/

MyMProjectApp.Controllers = MyMProjectApp.Controllers || {};

(function () {
    'use strict';

    MyMProjectApp.Controllers.SignupController = M.Controller.extend({

        _signupView: null,

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
            if(!this._signupView) {
                this._signupView = MyMProjectApp.Views.SignupView.create(this);
            }
            MyMProjectApp.getLayout().applyViews({
                content: this._signupView
            });
        }
    });

})();

/*global MyMProjectApp*/

MyMProjectApp.Controllers = MyMProjectApp.Controllers || {};

(function () {
    'use strict';

    MyMProjectApp.Controllers.BeerController = M.Controller.extend({

        _beerView: null,

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
            if(!this._beerView) {
                this._beerView = MyMProjectApp.Views.BeerView.create(this);
            }
            MyMProjectApp.getLayout().applyViews({
                content: this._beerView
            });
        }
    });

})();

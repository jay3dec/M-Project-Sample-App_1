/*global MyMProjectApp*/

MyMProjectApp.Views = MyMProjectApp.Views || {};

(function() {
    'use strict';

    MyMProjectApp.Views.BeerView = M.View.extend({
        cssClass: 'beer-container'
    }, {

        headline: M.View.extend({
            tagName: 'h1',
            value: M.I18N.get('beer.headline')
        }),

        back: M.ButtonView.extend({
            value: M.I18N.get('global.button.back'),
            events: {
                tap: function() {
                    MyMProjectApp.navigate({
                        route: '/',
                        transition: M.PageTransitions.MOVE_TO_RIGHT_FROM_LEFT
                    });
                }
            }
        })

    });

})();

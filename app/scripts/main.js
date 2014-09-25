/*global $, M*/


(function(global) {
    'use strict';

    global.MyMProjectApp = M.Application.extend().create(global.MyMProjectApp.mconfig);

    $(document).ready(function() {

        global.MyMProjectApp.start({
            routing: {
                routes: {
                    '': 'absintheController',
                    'beer': 'beerController',
		    'signup': 'signupController',
                    //m:routes
                },
                absintheController: global.MyMProjectApp.Controllers.AbsintheController.create(),
                beerController: global.MyMProjectApp.Controllers.BeerController.create(),
		signupController: global.MyMProjectApp.Controllers.SignupController.create(),
                //m:controllers
            }
        });
    });

})(this);

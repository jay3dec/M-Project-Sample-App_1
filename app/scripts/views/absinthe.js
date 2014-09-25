/*global MyMProjectApp*/

MyMProjectApp.Views = MyMProjectApp.Views || {};

(function() {
    'use strict';

    MyMProjectApp.Views.AbsintheView = M.View.extend({
     grid: 'col-xs-12'
	
 },{
	username :M.TextfieldView.extend({
                
               
                value: '',
                icon: 'fa-rocket',
                placeholder: 'Username'
            }),
	password :M.TextfieldView.extend({
               
               
                value: '',
                icon: 'fa-rocket',
		type: 'password',
                placeholder: 'Password'
            }),
	signinButton : M.ButtonView.extend({
         value: 'Sign In',
         cssClass: 'm-success',
	grid: 'col-xs-6 col-sm-6 col-md-6 active'
     }),
	signupButton : M.ButtonView.extend({
         value: 'Sign Up',
         cssClass: 'm-success',
	 grid: 'col-xs-6 col-sm-6 col-md-6',
	 events: {
		tap: function(event, element){
			MyMProjectApp.navigate({
                            route: '/signup',
                            transition: M.PageTransitions.CONST.MOVE_TO_RIGHT_FROM_LEFT
                        });
		}
	 }
     })
	
});

})();

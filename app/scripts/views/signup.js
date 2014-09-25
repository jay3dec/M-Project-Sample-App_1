/*global MyMProjectApp*/

MyMProjectApp.Views = MyMProjectApp.Views || {};

(function() {
    'use strict';

    MyMProjectApp.Views.SignupView = M.View.extend({
     grid: 'col-xs-12'
 },{
	
	name :M.TextfieldView.extend({
                
               
                value: '',
                icon: 'fa-rocket',
                placeholder: 'Name'
            }),
	email :M.TextfieldView.extend({
               
               
                value: '',
                icon: 'fa-rocket',
                placeholder: 'Email Id'
            }),
	password :M.TextfieldView.extend({
               
               
                value: '',
                icon: 'fa-rocket',
		type: 'password',
                placeholder: 'Password'
            }),
	signupButton : M.ButtonView.extend({
         value: 'Sign Up',
         cssClass: 'm-success',
	grid: 'col-xs-6 col-sm-6 col-md-6 active'
     }),
     signinButton : M.ButtonView.extend({
         value: 'Sign In',
         cssClass: 'm-success',
	grid: 'col-xs-6 col-sm-6 col-md-6',
	events: {
		tap: function(event, element){
			MyMProjectApp.navigate({
                            route: '/',
                            transition: M.PageTransitions.CONST.MOVE_TO_LEFT_FROM_RIGHT
                        });
		}
	 }
     })
	
});

})();

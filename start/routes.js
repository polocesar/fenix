'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Route.on('/').render('welcome');
Route.group(() => {
    Route.post('login', 'AuthController.login');
}).prefix('api');

Route.group(() => {
    Route.resource('user', 'UserController').apiOnly();
    // Route.get('dashboard', 'DashboardController.index');
    Route.get('dashboard/:filtro', 'DashboardController.index');
    Route.get('alas', 'AlasController.index');
}).prefix('api').middleware(['auth']);

Route.any('*', ({view}) =>  view.render('app'))

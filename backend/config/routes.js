/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'get /destroy_users': 'UserController.destroyAll',
  'get /destroy_lists': 'ListController.destroyAll',
  'get /destroy_todos': 'TodoController.destroyAll',
  'get /delete_user/:id': 'UserController.deleteUser',
  'get /delete_list/:id': 'ListController.deleteList',
  'get /delete_todo/:id': 'TodoController.deleteTodo',
  'post /list': 'ListConstroller.addList',
  'post /user': 'UserController.addUser',
  'post /login': 'AuthController.login',
  'get /logout': 'AuthController.logout',



  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};

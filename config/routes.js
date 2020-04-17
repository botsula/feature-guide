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

  '/': { view: 'pages/index' },
  'GET /emoji' : { view: 'pages/tutorials/emoji'},
  'GET /cursor' : { view: 'pages/tutorials/cursor'},
  'GET /flexbox' : { view: 'pages/tutorials/flexbox'},
  'GET /fontawesome' : { view: 'pages/tutorials/fontawesome'},
  'GET /becontainer' : { view: 'pages/tutorials/becontainer'},
  'GET /codetag' : { view: 'pages/tutorials/codetag'},
  'GET /fancylist' : { view: 'pages/tutorials/fancylist'},
  'GET /csshistory' : { view: 'pages/history/csshistory'},
  'GET /htmlhistory' : { view: 'pages/history/htmlhistory'},


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

<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//laravel static routes on top
Route::view('/paytm-merchant-form', 'paytm-merchant-form');
Route::post('/paytm-callback', 'API\OrderController@paytmCallback');

//React-router routes
Route::get('/{page?}', function () {
    return view('welcome');
});
//To fix refresh problems in product details
Route::get('/shop/{id?}', function () {
    return view('welcome');
});

//FIXME: This callback may need to be in api.php
//Paytm callback url

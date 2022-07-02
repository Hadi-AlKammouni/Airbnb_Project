<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;

use App\Http\Controllers\TestController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\User\UserController;

Route::group(['prefix' => 'v1'], function(){
    
    // Function called when not an "Unauthorized" user tried to reach a specific page
    Route::get('/not_found', [TestController::class, 'notFound'])->name("not-found");

    Route::group(['prefix' => 'admin'], function(){
        Route::group(['middleware' => 'role.admin'], function(){
            Route::post('/add_place', [AdminController::class, 'addPlace']);
            Route::post('/add_category', [AdminController::class, 'addCategory']);
        });    
    });

    Route::group(['prefix' => 'user'], function(){
        Route::get('/get_place/{id?}', [UserController::class, 'getPlace']);
        Route::get('/get_category/{category?}', [UserController::class, 'getCategory']);
    });

});




/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});

<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogOutController;
use App\Http\Controllers\Auth\RegisterController;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('auth')->group(function () {
    Route::post('/login', LoginController::class)->middleware('guest');
    Route::post('/logout', LogOutController::class)->middleware('auth');
    Route::post('/register', RegisterController::class)->middleware('guest');
});
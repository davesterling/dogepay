<?php
use App\Http\Controllers\Api\LeaderboardController;
use Illuminate\Support\Facades\Route;

Route::post('/user-count', [LeaderboardController::class, 'userCount']);

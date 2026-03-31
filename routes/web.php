<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/', function () {
    return Inertia::render('Web/Home');
})->name('home');

Route::get('/contact', function () {
    return Inertia::render('Web/Contact');
})->name('contact');

Route::get('/about', function () {
    return Inertia::render('Web/About');
})->name('about');

Route::get('/vision', function () {
    return Inertia::render('Web/Vision');
})->name('vision');

Route::get('/genesis', function () {
    return Inertia::render('Web/Genesis');
})->name('genesis');


require __DIR__.'/auth.php';


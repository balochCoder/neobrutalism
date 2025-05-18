<?php

use App\Http\Controllers\Contracts\CreateController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');


    Route::get('contracts/create', CreateController::class)->name('contracts.create');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

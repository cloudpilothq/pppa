<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Models\News;
use App\Models\Leadership;

Route::get('/news', function () {
    return response()->json(
        News::where('published', true)->orderBy('created_at', 'desc')->get()
    );
});

Route::get('/leaderships', function () {
    return response()->json(
        Leadership::orderBy('order', 'asc')->get()
    );
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

<?php

Namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\User;

class LeaderboardController extends Controller {
    public function userCount() {
        $userCount = User::count();
        return $userCount;
    }
}

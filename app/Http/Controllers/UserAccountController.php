<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserAccountController extends Controller
{
    public function create()
    {
        return inertia('UserAccount/CreateAccount');
    }

    public function store(Request $request)
{
    $user = User::make($request->validate([
        'name' => 'required',
        'email' => 'required|email|unique:users',
        'password' => 'required|min:8|confirmed'
    ]));
    $user->save();
    Auth::login($user);
 
    return redirect()->route('listing.index')
        ->with('success', 'Account created!');
}
}

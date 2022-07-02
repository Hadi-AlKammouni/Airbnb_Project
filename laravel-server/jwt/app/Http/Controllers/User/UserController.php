<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\Place;
use App\Models\Category;

class UserController extends Controller
{
    // Function to get all the places with optional parameter(id)
    public function getPlace($id = null){
        if($id != null){
            $places = Place::where('place_id','=',$id)->get();
        }else{
            $places = Place::all();    
        }

        return response()->json([
            "status" => "Success",
            "places" => $places
        ], 200);
    }
}

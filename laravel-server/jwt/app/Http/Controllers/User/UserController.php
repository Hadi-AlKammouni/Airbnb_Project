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
            $plaecs = Place::where('id','=',$id)->get();
        }else{
            $plaecs = Place::all();    
        }

        return response()->json([
            "status" => "Success",
            "plaecs" => $plaecs
        ], 200);
    }
}

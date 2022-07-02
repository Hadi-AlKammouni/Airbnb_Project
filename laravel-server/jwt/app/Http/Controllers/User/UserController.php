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

    // Function to get categories with optional parameter(category name)
    public function getCategory($category = null){
        if($category != null){
            $items = Category::where('category_name','=',$category)->get();
        }else{
            $items = Category::all();    
        }

        return response()->json([
            "status" => "Success",
            "results" => $items
        ], 200);
    }

    // Function to get place by category
    public function getPlaceByCategory($category){
        $items = Place::where('place_category','=',$category)->get();
      
        return response()->json([
            "status" => "Success",
            "results" => $items
        ], 200);
    }
}

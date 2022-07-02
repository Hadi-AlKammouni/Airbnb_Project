<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Place;

class AdminController extends Controller
{
    // Function to add a new place to the db
    public function addPlace(Request $request){
        // echo "add";
        $place = new Place;
        $place->place_name = $request->place_name;
        $place->place_location = $request->place_location;
        $place->place_distance = $request->place_distance;
        $place->place_date = $request->place_date;
        $place->place_price = $request->place_price;
        $place->place_description = $request->place_description;
        $place->images = $request->images;
        $place->place_category = $request->place_category;
        $place->place_rating = $request->place_rating;

        $place->save();
        
        return response()->json([
            "status" => "Success"
        ], 200);

    }
}

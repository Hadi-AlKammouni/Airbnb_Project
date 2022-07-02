<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlacesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('places', function (Blueprint $table) {
            $table->id("place_id");
            $table->string('place_name');
            $table->string('place_location');
            $table->string('place_distance');
            $table->string('place_date');
            $table->string('place_price');
            $table->string('place_description');
            $table->mediumtext('images');
            $table->string('place_category');
            $table->string('place_rating');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('places');
    }
};

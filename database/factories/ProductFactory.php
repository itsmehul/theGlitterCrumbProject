<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name'=>$faker->company,
        'description'=>$faker->realText($maxNbChars = 500, $indexSize = 4),
        'price'=>$faker->randomFloat(2,0,5000),
        'available_colors'=>json_encode($faker->randomElements(array($faker->hexColor,$faker->hexColor,$faker->hexColor), 3)),
        'available_sizes'=>json_encode($faker->randomElements(array('xl','l','m','xs','s'), 3)),
        'discount'=>$faker->randomFloat(2,0,1),
        'image'=>json_encode($faker->randomElements(array($faker->imageUrl(640,480),$faker->imageUrl(640,480),$faker->imageUrl(640,480),$faker->imageUrl(640,480)), 4)),
        'stock'=>$faker->randomDigit,
    ];
});

<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name'=>$faker->company,
        'description'=>$faker->company,
        'price'=>$faker->randomFloat(2,0,5000),
        'available_colors'=>json_encode($faker->randomElements(array('a','b','c'), 3)),
        'available_sizes'=>json_encode($faker->randomElements(array('xl','l','m','xs','s'), 3)),
        'discount'=>$faker->randomFloat(2,0,1),
        'image'=>$faker->imageUrl(640,480),
        'stock'=>$faker->randomDigit,
    ];
});

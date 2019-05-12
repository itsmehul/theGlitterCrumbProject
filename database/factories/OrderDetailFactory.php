<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\OrderDetail;
use Faker\Generator as Faker;

$factory->define(OrderDetail::class, function (Faker $faker) {
    return [
            'quantity_ordered'=>$faker->randomDigit(2,0,2),
            'price'=>$faker->randomFloat(2,0,2000),
            'discount'=>$faker->randomFloat(2,0,1),
            'total'=>$faker->randomFloat(2,0,5000),
            'size'=>json_encode($faker->randomElement(array ('m','s','l'))),
            'color'=>json_encode($faker->safeColorName),
            'order_id'=>factory(App\Order::class)->create(),
            'product_id'=>factory(App\Product::class)->create(),
    ];
});

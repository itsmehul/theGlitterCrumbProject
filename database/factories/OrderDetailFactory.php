<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\OrderDetail;
use Faker\Generator as Faker;

$factory->define(OrderDetail::class, function (Faker $faker) {
    return [
            'quantity_ordered'=>$faker->randomDigit(2,0,2),
            'price'=>$faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 5),
            'discount'=>$faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 1.00),
            'total'=>$faker->randomFloat(2,0,5),
            'size'=>$faker->randomElement(array ('m','s','l')),
            'color'=>$faker->safeColorName,
            'order_id'=>factory(App\Order::class)->create(),
            'product_id'=>factory(App\Product::class)->create(),
    ];
});

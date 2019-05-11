<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Order;
use Faker\Generator as Faker;

$factory->define(Order::class, function (Faker $faker) {
    return [
            'price'=>$faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 5),
            'discount'=>$faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 1.00),
            'tx_status'=>$faker->boolean(80),
            'err_mssg'=>$faker->text(200) ,
            'payment_date'=>$faker->dateTime('now'),
            'customer_id'=>factory(App\Customer::class)->create(),
    ];
});

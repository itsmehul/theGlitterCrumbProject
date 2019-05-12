<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Order;
use Faker\Generator as Faker;

$factory->define(Order::class, function (Faker $faker) {
    return [
            'total'=>$faker->randomFloat(2,0,10000),
            'saved'=>$faker->randomFloat(2,0,3000),
            'tx_status'=>$faker->boolean(80),
            'tx_id'=>$faker->randomNumber(NULL,false),
            'err_mssg'=>$faker->text(200) ,
            'payment_date'=>$faker->dateTime('now'),
            'customer_id'=>factory(App\Customer::class)->create(),
    ];
});

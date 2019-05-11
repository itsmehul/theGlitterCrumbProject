<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Customer;
use Faker\Generator as Faker;

$factory->define(Customer::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'address1' => $faker->address,
        'address2' => $faker->address,
        'phone_no' => $faker->phoneNumber,

    ];
});

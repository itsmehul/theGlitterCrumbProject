<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CustomersTableSeeder::class);
        $this->call(OrdersTableSeeder::class);
        $this->call(OrderDetailsTableSeeder::class);
        $this->call(ProductsTableSeeder::class);
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->integer('quantity_ordered');
            $table->decimal('price',12,2);
            $table->float('discount',3,2)->nullable();
            $table->decimal('total',12,2);
            $table->json('size')->nullable();
            $table->json('color')->nullable();

            $table->unsignedBigInteger('order_id');
            $table->unsignedBigInteger('product_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_details');
    }
}

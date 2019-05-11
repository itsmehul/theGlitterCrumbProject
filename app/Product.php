<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public  function orderDetails(){
        return $this->hasMany('App\OrderDetail');
    }
}

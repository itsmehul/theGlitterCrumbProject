<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\OrderDetail;
use App\Http\Resources\OrderDetailResource;

class OrderDetailController extends Controller
{

     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $order_details = OrderDetail::get();

        return OrderDetailResource::collection($order_details);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $order_detail = new OrderDetail();
        $order_detail->quantity_ordered = $request->quantity_ordered;
        $order_detail->price = $request->price;
        $order_detail->discount = $request->discount;
        $order_detail->address2 = $request->address2;
        $order_detail->phone_no = $request->phone_no;

        $order_detail->save();

        return new OrderDetailResource($order_detail);
    }
    public function test($order)
    {

        return json_encode($order);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order_detail = OrderDetail::findOrFail($id);

        return new OrderDetailResource($order_detail);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $order_detail = OrderDetail::findOrFail($id);

        $order_detail->title = $request->title;
        $order_detail->quantity_ordered = $request->quantity_ordered;
        $order_detail->price = $request->price;
        $order_detail->discount = $request->discount;
        $order_detail->address2 = $request->address2;
        $order_detail->phone_no = $request->phone_no;
        $order_detail->save();

        return new OrderDetailResource($order_detail);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $order_detail = OrderDetail::findOrFail($id);

        $order_detail->delete();

        return new OrderDetailResource($order_detail);
    }
}

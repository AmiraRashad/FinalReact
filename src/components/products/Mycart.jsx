import React from 'react';

const MyCart = () => {
    return ( <div>
        <h1 className="text-center">
            My Cart
        </h1>
    <table>
      <thead>
        <th Name></th>
       < th Price></th>
        <th Actions></th>
      <tbody
       each item in MyCart></tbody>
         - total += Number(item.price)
         tr
            td=item.name
            td=item.price
            td
             a(href="/products/MyCart/remove/"+item._id, class = "btn btn-danger") Remove Item
      tfoot
        tr
          td Total
          td=total
          </thead>
          </table>
        </div>
    )}
export default MyCart;
<template>
<body background="">
      <main   class="container-fluid">
        <div class="row">
            <h2 class="display-2">Shopping cart</h2>
        </div>
        <div class="row">
            <table>
                <thead>
                    <tr>
                        <th>
                           Product Name
                        </th>
                        <th>
                             Quantity
                        </th>
                        <th>
                            Cost(R)
                        </th>
                        <th>
                            Amount
                        </th>
                    </tr>
                </thead>
                <tbody data-checkout>
                </tbody>
            </table>
        </div>
        <div>
            <button onclick="clearCart()" checkout-clear-all id="BClear">Clear Cart </button>
            <button onclick="BuyNow()" checkout-buy-now id="Bbuy">Buy Now</button>
            <tr>
                <td id="Tcost" class="text-end">Total Cost:</td>
            </tr>
            <p id="Message" style="display: none;">Thank For Shopping With Us</p>
        </div>
    </main>
    
</body>
</template>

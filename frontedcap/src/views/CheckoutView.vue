<template>
    <body background="">
      <main class="container-fluid">
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
          <button onclick="clearCart()" id="BClear">Clear Cart</button>
          <button onclick="buyNow()" id="Bbuy">Buy Now</button>
          <p id="Message" style="display: none;">Thank For Shopping With Us</p>
        </div>
      </main>
    </body>
  </template>
  
  <!-- <script>
    // Function to clear the cart
    function clearCart() {
      // You need to implement this function according to your logic
      console.log("Cart cleared!"); // For demonstration purposes
    }
  
    // Function to initiate the buying process
    function buyNow() {
      // You need to implement this function according to your logic
      console.log("Buying items..."); // For demonstration purposes
      document.getElementById("Message").style.display = "block"; // Show the "Thank you" message
    }
  </script>
   -->
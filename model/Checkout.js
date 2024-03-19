// checkout.js

const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('your_stripe_secret_key'); // Replace with your Stripe secret key

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint to initiate the checkout process
app.post('/checkout', async (req, res) => {
  const { items, currency, email, paymentMethod } = req.body;

  try {
    // Create a PaymentIntent on your server using the Stripe API
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items), // Calculate the order total amount
      currency,
      description: 'Your Order Description',
      payment_method: paymentMethod,
      confirmation_method: 'manual',
      confirm: true,
      receipt_email: email,
    });

    // Send the PaymentIntent client secret to the client
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Dummy function to calculate the total order amount
function calculateOrderAmount(items) {
  // Implement your own logic to calculate the total order amount
  // This could involve fetching prices from a database, applying discounts, etc.
  return 1000; // Placeholder value, replace with your logic
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
//checkout

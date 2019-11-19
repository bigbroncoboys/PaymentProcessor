# Backend_StripePayment_API

added http server request functionality between front-end react-native and back-end expressjs

the charge button in the front-end is now connected to our digital transaction processing function (using Stripe REST API)
front-end sends 'POST' http server requests which deliver encrypted tokens carrying customer and payment information to the back-end, 
where the payment is securely processed
back-end will respond back to the front-end, sending a Promise of the transaction's success or failure

@johnawin

refer to bigbroncoboys/BackendAPI repo for refactored implementation

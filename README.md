Simple Image Ecommerce Cloud Funtions
======

> Firebase Cloud Functions; Backend for Simple Image Ecommerce

## Overview
Working with [Ionic App](https://github.com/highjump0615/SimpleImageEcommerce) and [Admin panel](https://github.com/highjump0615/SimpleImageEcommerce_Cloud)  

### 1. Main Features
Auto-increment total order numbers and cost to track them in Dashboard admin page.  
 
### 2. Techniques   
Cloud Functions are single-purpose JavaScript functions that are executed in a secure, managed Node.js environment.  

This is done by updating ``order_count `` and ``order_amount`` property when a new order is added.

#### Reference
Much inspired by [Tracking the number of elements in a list](https://github.com/firebase/functions-samples/tree/Node-8/child-count) in Firebase Clound Functions Samples.


## Need to Improve
Recount the properties from data when they are deleted

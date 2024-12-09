# Incorrect Usage of $inc operator in MongoDB
This repository demonstrates a common error when using the `$inc` operator in MongoDB. The `$inc` operator is used to increment a numeric field by a specified value. However, if you use the operator incorrectly you can get unexpected results. 

## Bug
The bug is in the `bug.js` file. The code attempts to increment the `x` and `y` fields by 1. However, instead of correctly incrementing `y`, it sets it to 1 instead of adding 1 to its current value.  This is because the `$inc` operator takes a numeric value, and it should not be assigned a fixed value for increment. 

## Solution
The solution is in the `bugSolution.js` file. The corrected code correctly increments the `y` field by adding 1 to its current value.  The correct implementation makes sure that the $inc operator is working with numeric values to update and increment the fields correctly.

## How to reproduce
1. Clone this repository.
2. Run the `bug.js` script. Observe the unexpected result.
3. Run the `bugSolution.js` script. Observe the corrected result.
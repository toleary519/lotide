# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @toleary519/lotide`

**Require it:**

`const _ = require('@toleary519/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns the head of input
* `tail`: returns the tail of input
* `middle`: returns the middle of input
* `countLetters`: returns a number count of characters
* `countOnly`: counts only items specified
* `eqArrays`: determines equality in arrays
* `eqObjects`: determines equality in objects
* `findKey`: finds and returns an object key
* `findKeyByValue`: finds and returns an object key given the value
* `letterPositions`: returns the index of particular characters
* `map`: maps based on the callback function
* `takeUntil`: returns an array up until a specified value
* `without`: returns an array after removing specified values
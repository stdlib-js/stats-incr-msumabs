<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrmsumabs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute a moving sum of absolute values incrementally.

<section class="intro">

For a window of size `W`, the moving sum of absolute values is defined as

<!-- <equation class="equation" label="eq:moving_sum_absolute_values" align="center" raw="s = \sum_{i=0}^{W-1} |x_i|" alt="Equation for the moving sum of absolute values."> -->

<div class="equation" align="center" data-raw-text="s = \sum_{i=0}^{W-1} |x_i|" data-equation="eq:moving_sum_absolute_values">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/27e2a43c70db648bb5bbc3fd0cdee050c25adc0b/lib/node_modules/@stdlib/stats/incr/msumabs/docs/img/equation_moving_sum_absolute_values.svg" alt="Equation for the moving sum of absolute values.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-incr-msumabs
```

</section>

<section class="usage">

## Usage

```javascript
var incrmsumabs = require( '@stdlib/stats-incr-msumabs' );
```

#### incrmsumabs( window )

Returns an accumulator `function` which incrementally computes a moving sum of absolute values. The `window` parameter defines the number of values over which to compute the moving sum.

```javascript
var accumulator = incrmsumabs( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated sum. If not provided an input value `x`, the accumulator function returns the current sum.

```javascript
var accumulator = incrmsumabs( 3 );

var sum = accumulator();
// returns null

// Fill the window...
sum = accumulator( 2.0 ); // [2.0]
// returns 2.0

sum = accumulator( -1.0 ); // [2.0, -1.0]
// returns 3.0

sum = accumulator( 3.0 ); // [2.0, -1.0, 3.0]
// returns 6.0

// Window begins sliding...
sum = accumulator( -7.0 ); // [-1.0, 3.0, -7.0]
// returns 11.0

sum = accumulator( -5.0 ); // [3.0, -7.0, -5.0]
// returns 15.0

sum = accumulator();
// returns 15.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var incrmsumabs = require( '@stdlib/stats-incr-msumabs' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmsumabs( 5 );

// For each simulated datum, update the moving sum...
for ( i = 0; i < 100; i++ ) {
    v = ( randu()*100.0 ) - 50.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-msumabs.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-msumabs

[test-image]: https://github.com/stdlib-js/stats-incr-msumabs/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-incr-msumabs/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-msumabs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-msumabs?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-msumabs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-msumabs/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-msumabs/main/LICENSE

</section>

<!-- /.links -->

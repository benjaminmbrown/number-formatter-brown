[![Build Status](https://travis-ci.org/benjaminmbrown/number-formatter-brown.svg?branch=master)](https://travis-ci.org/benjaminmbrown/number-formatter-brown)


[![Coverage Status](https://coveralls.io/repos/benjaminmbrown/number-formatter-brown/badge.svg?branch=master&service=github)](https://coveralls.io/github/benjaminmbrown/number-formatter-brown?branch=master)

Brown's Number Formatter
=========

A small library that adds commas to numbers. I built this simple module just to start getting more accustomed to publishing node modules

## Installation

  `npm install number-formatter-brown`

## Usage

    var numFormatter = require('number-formatter-brown');

    var formattedNum = numFormatter(12345678);
  
  
  Output should be `12,345,678`


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
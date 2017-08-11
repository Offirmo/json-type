#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/../node_modules/.bin/ts-node "$0" "$@"

import { Json } from '../src'

interface Id extends Json {
	id: number;
}

// error types incompatibles
const z = (): Id => ({id: 'foo'});

console.log(z())

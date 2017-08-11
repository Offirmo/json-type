#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/../node_modules/.bin/ts-node "$0" "$@"

import { Json } from '../src'

interface Foo extends Json {
	bar: string;
}

var x: Foo;
x.bar.toString(); // Error
x.bar && x.bar.toString(); // okay


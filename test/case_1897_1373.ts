#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/../node_modules/.bin/ts-node "$0" "$@"

import { Json } from '../src'

interface Id extends Json {
	id: number;
}

class Bass {
	f(): Id | null { return null;}
}

// Error: missing index signature
class Foo extends Bass {
	f() { return { id: 10 }}
}

console.log(new Foo())

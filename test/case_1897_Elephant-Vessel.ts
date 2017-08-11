#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/../node_modules/.bin/ts-node "$0" "$@"

import { Json } from '../src'


interface Id extends Json {
	id: number;
}

const z = (): Id => ({ id: 34 });

class Bass {
	f(): Id { return undefined; }
}

class Foos extends Bass {
	f() { return { id: 10 }}
}

interface Foo extends Json {
	foo: { val: string };
}

const result: Id[] = 'a|b'.split('|').map(item => {
	return { id: 0 };
});

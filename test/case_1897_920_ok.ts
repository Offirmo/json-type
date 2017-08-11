#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/../node_modules/.bin/ts-node "$0" "$@"

import { Json } from '../src'

interface Id extends Json {
	id: number;
}

const x = (): Id => ({id: 25}); // 👍

console.log(x())// 👍

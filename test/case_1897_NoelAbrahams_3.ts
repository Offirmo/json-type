#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/../node_modules/.bin/ts-node "$0" "$@"

import { Json } from '../src'

interface Foo extends Json {
	html: HtmlElement; // We would like this to be an error
}

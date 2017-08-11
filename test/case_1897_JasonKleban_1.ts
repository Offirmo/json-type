#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/../node_modules/.bin/ts-node "$0" "$@"

import { Json } from '../src'


function clone<T extends Json>(data : T) { return <T>(JSON.parse(JSON.stringify(data))); }

var a : Json = "Hello"; clone(a).toLowerCase();     // 👍
var b : Json = 42; clone(b).toExponential();        // 👍
var c : Json = true; { let t = clone(c); }          // 👍
var d : Json = null; { let t = clone(d); }          // 👍
var e : Json = [1, 2, ""]; clone(e).length;         // 👍
var f : Json = {}; {let t = clone(f); }             // 👍 f : JsonMap

var g : Json = { a: "Hello" }; clone(g).a;          // 👍 g .. l : JsonMap, not especially useful as written
var h : Json = { b: 42 };
var i : Json = { c: true };
var j : Json = { d: null };
var k : Json = { e: [1, 2, ""] };
var l : Json = { e: { 5.4: "foo", mixed: "key types" } };

var m : Json = () => "baz";                         // ERROR 👍
var n : JsonMap = { a : "bar", fn: () => "baz" };   // ERROR 👍
var o : JsonMap = [{ a : "bar", fn: () => "baz" }]; // ERROR 👍

{
	let p : Document = { one : "foo", two : false, 3.141592: "pi" };
	let t = clone(p); // t : Document 👍
	t.one; // : string 👍
	t.two; // : boolean 👍
	let tt = t[3.141592]; // tt : "pi" | boolean 👍
	let tu = t[3.1415]; // tu : string | number | boolean | null | JsonArray | JsonMap
}

var q = () => "baz"; clone(q);                      // ERROR 👍
var r = { a : "bar", fn: () => "baz" }; clone(r);   // ERROR 👍
var s = [{ a : "bar", fn: () => "baz" }]; clone(s); // ERROR 👍

class MyClass implements JsonMap { [key : string] : string }
clone(new MyClass()) instanceof MyClass; // 😱 false

// Structural typing isn't enough for otherwise-compatible interfaces
interface OtherLibDocument {
	one: string;
	two: boolean;
	3.141592: "pi" | boolean;
}

{
	let p2 : OtherLibDocument = { one : "foo", two : false, 3.141592: "pi" };
	let t = clone(p2); // 😱 Property 'includes' is missing in type 'OtherLibDocument'
}

interface OtherLibDocument2 {
	one: string;
	two: boolean;
	3.141592: "pi" | boolean;
}

// Definition-Merge other libraries' compatible interfaces
interface OtherLibDocument2 extends JsonMap { }

{
	let p3 : OtherLibDocument2 = { one : "foo", two : false, 3.141592: "pi" };
	let t = clone(p3); // t : Document 👍
	t.one; // : string 👍
	t.two; // : boolean 👍
	let tt = t[3.141592]; // tt : "pi" | boolean 👍
	let tu = t[3.1415]; // tu : string | number | boolean | null | JsonArray | JsonMap
}

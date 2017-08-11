


type JsonObject = {
	[member: string]: JsonValue
}

type JsonArray = JsonValue[]

type JsonValue = null | boolean | string | number | JsonObject | JsonArray

// aliases
type JsonMap = JsonObject
type Json = JsonValue

export {
	JsonValue,
	JsonObject,
	JsonArray,
	JsonMap,
	Json,
}

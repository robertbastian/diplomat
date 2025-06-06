// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";



export class MyEnum {
    #value = undefined;

    static #values = new Map([
        ["A", -2],
        ["B", -1],
        ["C", 0],
        ["D", 1],
        ["E", 2],
        ["F", 3]
    ]);

    static getAllEntries() {
        return MyEnum.#values.entries();
    }

    #internalConstructor(value) {
        if (arguments.length > 1 && arguments[0] === diplomatRuntime.internalConstructor) {
            // We pass in two internalConstructor arguments to create *new*
            // instances of this type, otherwise the enums are treated as singletons.
            if (arguments[1] === diplomatRuntime.internalConstructor ) {
                this.#value = arguments[2];
                return this;
            }
            return MyEnum.#objectValues[arguments[1]];
        }

        if (value instanceof MyEnum) {
            return value;
        }

        let intVal = MyEnum.#values.get(value);

        // Nullish check, checks for null or undefined
        if (intVal != null) {
            return MyEnum.#objectValues[intVal];
        }

        throw TypeError(value + " is not a MyEnum and does not correspond to any of its enumerator values.");
    }

    /** @internal */
    static fromValue(value) {
        return new MyEnum(value);
    }

    get value(){
        for (let entry of MyEnum.#values) {
            if (entry[1] == this.#value) {
                return entry[0];
            }
        }
    }

    /** @internal */
    get ffiValue(){
        return this.#value;
    }
    static #objectValues = {
        [-2]: new MyEnum(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, -2),
        [-1]: new MyEnum(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, -1),
        [0]: new MyEnum(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 0),
        [1]: new MyEnum(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 1),
        [2]: new MyEnum(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 2),
        [3]: new MyEnum(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 3),
    };

    static A = MyEnum.#objectValues[-2];
    static B = MyEnum.#objectValues[-1];
    static C = MyEnum.#objectValues[0];
    static D = MyEnum.#objectValues[1];
    static E = MyEnum.#objectValues[2];
    static F = MyEnum.#objectValues[3];


    intoValue() {

        const result = wasm.MyEnum_into_value(this.ffiValue);

        try {
            return result;
        }

        finally {
        }
    }

    static getA() {

        const result = wasm.MyEnum_get_a();

        try {
            return new MyEnum(diplomatRuntime.internalConstructor, result);
        }

        finally {
        }
    }

    constructor(value) {
        return this.#internalConstructor(...arguments)
    }
}
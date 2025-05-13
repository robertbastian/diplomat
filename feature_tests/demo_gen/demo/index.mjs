export * as lib from "../../js/api/index.mjs";
import * as CyclicStructADemo from "./CyclicStructA.mjs";
export * as CyclicStructADemo from "./CyclicStructA.mjs";
import * as CyclicStructCDemo from "./CyclicStructC.mjs";
export * as CyclicStructCDemo from "./CyclicStructC.mjs";
import * as StructWithSlicesDemo from "./StructWithSlices.mjs";
export * as StructWithSlicesDemo from "./StructWithSlices.mjs";
import * as OptionStringDemo from "./OptionString.mjs";
export * as OptionStringDemo from "./OptionString.mjs";
import * as Float64VecDemo from "./Float64Vec.mjs";
export * as Float64VecDemo from "./Float64Vec.mjs";
import * as MyStringDemo from "./MyString.mjs";
export * as MyStringDemo from "./MyString.mjs";
import * as MyOpaqueEnumDemo from "./MyOpaqueEnum.mjs";
export * as MyOpaqueEnumDemo from "./MyOpaqueEnum.mjs";
import * as OpaqueDemo from "./Opaque.mjs";
export * as OpaqueDemo from "./Opaque.mjs";
import * as Utf16WrapDemo from "./Utf16Wrap.mjs";
export * as Utf16WrapDemo from "./Utf16Wrap.mjs";



let termini = new Array(
    {
        func: CyclicStructADemo.cyclicOut,
        // For avoiding webpacking minifying issues:
        funcName: "CyclicStructA.cyclicOut",
        parameters: [
            
            {
                name: "CyclicStructA:A:Field",
                type: "number",
                typeUse: "number"
            }
            
        ]
    },

    {
        func: CyclicStructCDemo.cyclicOut,
        // For avoiding webpacking minifying issues:
        funcName: "CyclicStructC.cyclicOut",
        parameters: [
            
            {
                name: "CyclicStructC:A:A:Field",
                type: "number",
                typeUse: "number"
            }
            
        ]
    },

    {
        func: CyclicStructADemo.doubleCyclicOut,
        // For avoiding webpacking minifying issues:
        funcName: "CyclicStructA.doubleCyclicOut",
        parameters: [
            
            {
                name: "CyclicStructA:A:Field",
                type: "number",
                typeUse: "number"
            },
            
            {
                name: "CyclicStructA:A:Field",
                type: "number",
                typeUse: "number"
            }
            
        ]
    },

    {
        func: OpaqueDemo.getDebugStr,
        // For avoiding webpacking minifying issues:
        funcName: "Opaque.getDebugStr",
        parameters: [
            
        ]
    },

    {
        func: Utf16WrapDemo.getDebugStr,
        // For avoiding webpacking minifying issues:
        funcName: "Utf16Wrap.getDebugStr",
        parameters: [
            
            {
                name: "Utf16Wrap:Input",
                type: "string",
                typeUse: "string"
            }
            
        ]
    },

    {
        func: MyStringDemo.getStr,
        // For avoiding webpacking minifying issues:
        funcName: "MyString.getStr",
        parameters: [
            
            {
                name: "MyString:V",
                type: "string",
                typeUse: "string"
            }
            
        ]
    },

    {
        func: CyclicStructADemo.getterOut,
        // For avoiding webpacking minifying issues:
        funcName: "CyclicStructA.getterOut",
        parameters: [
            
            {
                name: "CyclicStructA:A:Field",
                type: "number",
                typeUse: "number"
            }
            
        ]
    },

    {
        func: StructWithSlicesDemo.returnLast,
        // For avoiding webpacking minifying issues:
        funcName: "StructWithSlices.returnLast",
        parameters: [
            
            {
                name: "StructWithSlices:First",
                type: "string",
                typeUse: "string"
            },
            
            {
                name: "StructWithSlices:Second",
                type: "Array<number>",
                typeUse: "Array<number>"
            }
            
        ]
    },

    {
        func: MyStringDemo.stringTransform,
        // For avoiding webpacking minifying issues:
        funcName: "MyString.stringTransform",
        parameters: [
            
            {
                name: "Foo",
                type: "string",
                typeUse: "string"
            }
            
        ]
    },

    {
        func: Float64VecDemo.toString,
        // For avoiding webpacking minifying issues:
        funcName: "Float64Vec.toString",
        parameters: [
            
            {
                name: "Float64Vec:V",
                type: "Array<number>",
                typeUse: "Array<number>"
            }
            
        ]
    },

    {
        func: MyOpaqueEnumDemo.toString,
        // For avoiding webpacking minifying issues:
        funcName: "MyOpaqueEnum.toString",
        parameters: [
            
        ]
    },

    {
        func: OptionStringDemo.write,
        // For avoiding webpacking minifying issues:
        funcName: "OptionString.write",
        parameters: [
            
            {
                name: "OptionString:DiplomatStr",
                type: "string",
                typeUse: "string"
            }
            
        ]
    }
});

export const RenderInfo = {
    "termini": termini
};
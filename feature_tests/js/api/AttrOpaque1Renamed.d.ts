// generated by diplomat-tool
import type { RenamedAttrEnum } from "./RenamedAttrEnum"
import type { Unnamespaced } from "./Unnamespaced"
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";



export class AttrOpaque1Renamed {
    
    get ffiValue(): pointer;

    get methodRenamed(): number;

    get abirenamed(): number;

    useUnnamespaced(un: Unnamespaced): void;

    useNamespaced(n: RenamedAttrEnum): void;

    constructor();
}
import { DataProvider } from "../../js/lib/api/index.mjs"
import { FixedDecimal } from "../../js/lib/api/index.mjs"
import { FixedDecimalFormatter } from "../../js/lib/api/index.mjs"
import { FixedDecimalFormatterOptions } from "../../js/lib/api/index.mjs"
import { Locale } from "../../js/lib/api/index.mjs"
export function formatWrite(name, grouping_strategy, some_other_config, v) {
    return (function (...args) { return args[0].formatWrite(...args.slice(1)) }).apply(
        null,
        [
            FixedDecimalFormatter.tryNew.apply(
                null,
                [
                    (function (...args) { return new Locale(...args) } ).apply(
                        null,
                        [
                            name
                        ]
                    ),
                    DataProvider.newStatic.apply(
                        null,
                        [
                        ]
                    ),
                    (function (...args) {
                        return FixedDecimalFormatterOptions.fromFields({
                            groupingStrategy: args[0],
                            someOtherConfig: args[1]});
                    }).apply(
                        null,
                        [
                            grouping_strategy,
                            some_other_config
                        ]
                    )
                ]
            ),
            (function (...args) { return new FixedDecimal(...args) } ).apply(
                null,
                [
                    v
                ]
            )
        ]
    );
}

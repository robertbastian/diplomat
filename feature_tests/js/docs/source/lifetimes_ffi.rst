``lifetimes::ffi``
==================

.. js:class:: Bar

.. js:class:: BorrowedFields

    .. js:attribute:: a

    .. js:attribute:: b

    .. js:attribute:: c

    .. js:function:: from_bar_and_strings(bar, dstr16, utf8_str)

.. js:class:: BorrowedFieldsReturning

    .. js:attribute:: bytes

.. js:class:: BorrowedFieldsWithBounds

    .. js:attribute:: field_a

    .. js:attribute:: field_b

    .. js:attribute:: field_c

    .. js:function:: from_foo_and_strings(foo, dstr16_x, utf8_str_z)

.. js:class:: Foo

    .. js:function:: new(x)

    .. js:method:: get_bar()

    .. js:function:: new_static(x)
        - Warning: This method leaks memory. The parameter `x` will not be freed as it is required to live for the duration of the program.


    .. js:method:: as_returning()

    .. js:function:: extract_from_fields(fields)

    .. js:function:: extract_from_bounds(bounds, another_string)

        Test that the extraction logic correctly pins the right fields


.. js:class:: NestedBorrowedFields

    .. js:attribute:: fields

    .. js:attribute:: bounds

    .. js:attribute:: bounds2

    .. js:function:: from_bar_and_foo_and_strings(bar, foo, dstr16_x, dstr16_z, utf8_str_y, utf8_str_z)

.. js:class:: One

    .. js:function:: transitivity(hold, nohold)

    .. js:function:: cycle(hold, nohold)

    .. js:function:: many_dependents(a, b, c, d, nohold)

    .. js:function:: return_outlives_param(hold, nohold)

    .. js:function:: diamond_top(top, left, right, bottom)

    .. js:function:: diamond_left(top, left, right, bottom)

    .. js:function:: diamond_right(top, left, right, bottom)

    .. js:function:: diamond_bottom(top, left, right, bottom)

    .. js:function:: diamond_and_nested_types(a, b, c, d, nohold)

    .. js:function:: implicit_bounds(explicit_hold, implicit_hold, nohold)

    .. js:function:: implicit_bounds_deep(explicit_, implicit_1, implicit_2, nohold)

.. js:class:: Two

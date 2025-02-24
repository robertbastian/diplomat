// generated by diplomat-tool
// dart format off

part of 'lib.g.dart';

final class RenamedOpaqueIterable with core.Iterable<AttrOpaque1Renamed> implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _ffi;

  // These are "used" in the sense that they keep dependencies alive
  // ignore: unused_field
  final core.List<Object> _selfEdge;

  // This takes in a list of lifetime edges (including for &self borrows)
  // corresponding to data this may borrow from. These should be flat arrays containing
  // references to objects, and this object will hold on to them to keep them alive and
  // maintain borrow validity.
  RenamedOpaqueIterable._fromFfi(this._ffi, this._selfEdge) {
    if (_selfEdge.isEmpty) {
      _finalizer.attach(this, _ffi.cast());
    }
  }

  static final _finalizer = ffi.NativeFinalizer(ffi.Native.addressOf(_namespace_OpaqueIterable_destroy));

  RenamedOpaqueIterator get iterator {
    // This lifetime edge depends on lifetimes: 'a
    core.List<Object> aEdges = [this];
    final result = _namespace_OpaqueIterable_iter(_ffi);
    return RenamedOpaqueIterator._fromFfi(result, [], aEdges);
  }
}

@_DiplomatFfiUse('namespace_OpaqueIterable_destroy')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Void>)>(isLeaf: true, symbol: 'namespace_OpaqueIterable_destroy')
// ignore: non_constant_identifier_names
external void _namespace_OpaqueIterable_destroy(ffi.Pointer<ffi.Void> self);

@_DiplomatFfiUse('namespace_OpaqueIterable_iter')
@ffi.Native<ffi.Pointer<ffi.Opaque> Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'namespace_OpaqueIterable_iter')
// ignore: non_constant_identifier_names
external ffi.Pointer<ffi.Opaque> _namespace_OpaqueIterable_iter(ffi.Pointer<ffi.Opaque> self);

// dart format on

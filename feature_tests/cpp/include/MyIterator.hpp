#ifndef MyIterator_HPP
#define MyIterator_HPP
#include <stdint.h>
#include <stddef.h>
#include <stdbool.h>
#include <algorithm>
#include <memory>
#include <variant>
#include <optional>
#include "diplomat_runtime.hpp"

#include "MyIterator.h"


/**
 * A destruction policy for using MyIterator with std::unique_ptr.
 */
struct MyIteratorDeleter {
  void operator()(capi::MyIterator* l) const noexcept {
    capi::namespace_MyIterator_destroy(l);
  }
};
class MyIterator {
 public:
  std::optional<uint8_t> next();
  inline const capi::MyIterator* AsFFI() const { return this->inner.get(); }
  inline capi::MyIterator* AsFFIMut() { return this->inner.get(); }
  inline explicit MyIterator(capi::MyIterator* i) : inner(i) {}
  MyIterator() = default;
  MyIterator(MyIterator&&) noexcept = default;
  MyIterator& operator=(MyIterator&& other) noexcept = default;
 private:
  std::unique_ptr<capi::MyIterator, MyIteratorDeleter> inner;
};


inline std::optional<uint8_t> MyIterator::next() {
  auto diplomat_result_raw_out_value = capi::namespace_MyIterator_next(this->inner.get());
  std::optional<uint8_t> diplomat_result_out_value;
  if (diplomat_result_raw_out_value.is_ok) {
    diplomat_result_out_value = std::optional<uint8_t>(diplomat_result_raw_out_value.ok);
  } else {
    diplomat_result_out_value = std::nullopt;
  }
  return diplomat_result_out_value;
}
#endif

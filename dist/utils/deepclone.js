'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = deepclone;
/**
 * Object deepclone
 * @param {Object} obj the object need clone
 */
function deepclone(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(function (v) {
      if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && v !== null) return deepclone(v);else return v;
    });
  } else {
    var newObj = {};

    Object.keys(obj).forEach(function (v) {
      if (_typeof(obj[v]) === 'object' && obj[v] !== null) {
        newObj[v] = deepclone(obj[v]);
      } else {
        newObj[v] = obj[v];
      }
    });

    return newObj;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZXBjbG9uZS5qcyJdLCJuYW1lcyI6WyJkZWVwY2xvbmUiLCJvYmoiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJ2IiwibmV3T2JqIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2tCQUl3QkEsUztBQUp4Qjs7OztBQUllLFNBQVNBLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCO0FBQ3JDLE1BQUksUUFBT0EsR0FBUCx5Q0FBT0EsR0FBUCxPQUFlLFFBQWYsSUFBMkJBLFFBQVEsSUFBdkMsRUFBNkM7QUFDM0MsV0FBT0EsR0FBUDtBQUNEOztBQUVELE1BQUlDLE1BQU1DLE9BQU4sQ0FBY0YsR0FBZCxDQUFKLEVBQXdCO0FBQ3RCLFdBQU9BLElBQUlHLEdBQUosQ0FBUSxhQUFLO0FBQ2xCLFVBQUksUUFBT0MsQ0FBUCx5Q0FBT0EsQ0FBUCxPQUFhLFFBQWIsSUFBeUJBLE1BQU0sSUFBbkMsRUFBeUMsT0FBT0wsVUFBVUssQ0FBVixDQUFQLENBQXpDLEtBQ0ssT0FBT0EsQ0FBUDtBQUNOLEtBSE0sQ0FBUDtBQUlELEdBTEQsTUFLTztBQUNMLFFBQU1DLFNBQVMsRUFBZjs7QUFFQUMsV0FBT0MsSUFBUCxDQUFZUCxHQUFaLEVBQWlCUSxPQUFqQixDQUF5QixhQUFLO0FBQzVCLFVBQUksUUFBT1IsSUFBSUksQ0FBSixDQUFQLE1BQWtCLFFBQWxCLElBQThCSixJQUFJSSxDQUFKLE1BQVcsSUFBN0MsRUFBbUQ7QUFDakRDLGVBQU9ELENBQVAsSUFBWUwsVUFBVUMsSUFBSUksQ0FBSixDQUFWLENBQVo7QUFDRCxPQUZELE1BRU87QUFDTEMsZUFBT0QsQ0FBUCxJQUFZSixJQUFJSSxDQUFKLENBQVo7QUFDRDtBQUNGLEtBTkQ7O0FBUUEsV0FBT0MsTUFBUDtBQUNEO0FBQ0YiLCJmaWxlIjoiZGVlcGNsb25lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIE9iamVjdCBkZWVwY2xvbmVcclxuICogQHBhcmFtIHtPYmplY3R9IG9iaiB0aGUgb2JqZWN0IG5lZWQgY2xvbmVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZXBjbG9uZShvYmopIHtcclxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gb2JqXHJcbiAgfVxyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XHJcbiAgICByZXR1cm4gb2JqLm1hcCh2ID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiB2ID09PSAnb2JqZWN0JyAmJiB2ICE9PSBudWxsKSByZXR1cm4gZGVlcGNsb25lKHYpXHJcbiAgICAgIGVsc2UgcmV0dXJuIHZcclxuICAgIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IG5ld09iaiA9IHt9XHJcblxyXG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIG9ialt2XSA9PT0gJ29iamVjdCcgJiYgb2JqW3ZdICE9PSBudWxsKSB7XHJcbiAgICAgICAgbmV3T2JqW3ZdID0gZGVlcGNsb25lKG9ialt2XSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdPYmpbdl0gPSBvYmpbdl1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gbmV3T2JqXHJcbiAgfVxyXG59XHJcbiJdfQ==
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// node_modules/matter-js/build/matter.js
var require_matter = __commonJS((exports, module) => {
  /*!
   * matter-js 0.19.0 by @liabru
   * http://brm.io/matter-js/
   * License MIT
   * 
   * The MIT License (MIT)
   * 
   * Copyright (c) Liam Brummitt and contributors.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object")
      module.exports = factory();
    else if (typeof define === "function" && define.amd)
      define("Matter", [], factory);
    else if (typeof exports === "object")
      exports["Matter"] = factory();
    else
      root["Matter"] = factory();
  })(exports, function() {
    return function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, { enumerable: true, get: getter });
        }
      };
      __webpack_require__.r = function(exports2) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports2, "__esModule", { value: true });
      };
      __webpack_require__.t = function(value, mode) {
        if (mode & 1)
          value = __webpack_require__(value);
        if (mode & 8)
          return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
          return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", { enumerable: true, value });
        if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(ns, key, function(key2) {
              return value[key2];
            }.bind(null, key));
        return ns;
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? function getDefault() {
          return module2["default"];
        } : function getModuleExports() {
          return module2;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = 20);
    }([
      function(module2, exports2) {
        var Common = {};
        module2.exports = Common;
        (function() {
          Common._baseDelta = 1000 / 60;
          Common._nextId = 0;
          Common._seed = 0;
          Common._nowStartTime = +new Date;
          Common._warnedOnce = {};
          Common._decomp = null;
          Common.extend = function(obj, deep) {
            var argsStart, args, deepClone;
            if (typeof deep === "boolean") {
              argsStart = 2;
              deepClone = deep;
            } else {
              argsStart = 1;
              deepClone = true;
            }
            for (var i = argsStart;i < arguments.length; i++) {
              var source = arguments[i];
              if (source) {
                for (var prop in source) {
                  if (deepClone && source[prop] && source[prop].constructor === Object) {
                    if (!obj[prop] || obj[prop].constructor === Object) {
                      obj[prop] = obj[prop] || {};
                      Common.extend(obj[prop], deepClone, source[prop]);
                    } else {
                      obj[prop] = source[prop];
                    }
                  } else {
                    obj[prop] = source[prop];
                  }
                }
              }
            }
            return obj;
          };
          Common.clone = function(obj, deep) {
            return Common.extend({}, deep, obj);
          };
          Common.keys = function(obj) {
            if (Object.keys)
              return Object.keys(obj);
            var keys = [];
            for (var key in obj)
              keys.push(key);
            return keys;
          };
          Common.values = function(obj) {
            var values = [];
            if (Object.keys) {
              var keys = Object.keys(obj);
              for (var i = 0;i < keys.length; i++) {
                values.push(obj[keys[i]]);
              }
              return values;
            }
            for (var key in obj)
              values.push(obj[key]);
            return values;
          };
          Common.get = function(obj, path, begin, end) {
            path = path.split(".").slice(begin, end);
            for (var i = 0;i < path.length; i += 1) {
              obj = obj[path[i]];
            }
            return obj;
          };
          Common.set = function(obj, path, val, begin, end) {
            var parts = path.split(".").slice(begin, end);
            Common.get(obj, path, 0, -1)[parts[parts.length - 1]] = val;
            return val;
          };
          Common.shuffle = function(array) {
            for (var i = array.length - 1;i > 0; i--) {
              var j = Math.floor(Common.random() * (i + 1));
              var temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
            return array;
          };
          Common.choose = function(choices) {
            return choices[Math.floor(Common.random() * choices.length)];
          };
          Common.isElement = function(obj) {
            if (typeof HTMLElement !== "undefined") {
              return obj instanceof HTMLElement;
            }
            return !!(obj && obj.nodeType && obj.nodeName);
          };
          Common.isArray = function(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]";
          };
          Common.isFunction = function(obj) {
            return typeof obj === "function";
          };
          Common.isPlainObject = function(obj) {
            return typeof obj === "object" && obj.constructor === Object;
          };
          Common.isString = function(obj) {
            return toString.call(obj) === "[object String]";
          };
          Common.clamp = function(value, min, max) {
            if (value < min)
              return min;
            if (value > max)
              return max;
            return value;
          };
          Common.sign = function(value) {
            return value < 0 ? -1 : 1;
          };
          Common.now = function() {
            if (typeof window !== "undefined" && window.performance) {
              if (window.performance.now) {
                return window.performance.now();
              } else if (window.performance.webkitNow) {
                return window.performance.webkitNow();
              }
            }
            if (Date.now) {
              return Date.now();
            }
            return new Date - Common._nowStartTime;
          };
          Common.random = function(min, max) {
            min = typeof min !== "undefined" ? min : 0;
            max = typeof max !== "undefined" ? max : 1;
            return min + _seededRandom() * (max - min);
          };
          var _seededRandom = function() {
            Common._seed = (Common._seed * 9301 + 49297) % 233280;
            return Common._seed / 233280;
          };
          Common.colorToNumber = function(colorString) {
            colorString = colorString.replace("#", "");
            if (colorString.length == 3) {
              colorString = colorString.charAt(0) + colorString.charAt(0) + colorString.charAt(1) + colorString.charAt(1) + colorString.charAt(2) + colorString.charAt(2);
            }
            return parseInt(colorString, 16);
          };
          Common.logLevel = 1;
          Common.log = function() {
            if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
              console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
            }
          };
          Common.info = function() {
            if (console && Common.logLevel > 0 && Common.logLevel <= 2) {
              console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
            }
          };
          Common.warn = function() {
            if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
              console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
            }
          };
          Common.warnOnce = function() {
            var message = Array.prototype.slice.call(arguments).join(" ");
            if (!Common._warnedOnce[message]) {
              Common.warn(message);
              Common._warnedOnce[message] = true;
            }
          };
          Common.deprecated = function(obj, prop, warning) {
            obj[prop] = Common.chain(function() {
              Common.warnOnce("\uD83D\uDD05 deprecated \uD83D\uDD05", warning);
            }, obj[prop]);
          };
          Common.nextId = function() {
            return Common._nextId++;
          };
          Common.indexOf = function(haystack, needle) {
            if (haystack.indexOf)
              return haystack.indexOf(needle);
            for (var i = 0;i < haystack.length; i++) {
              if (haystack[i] === needle)
                return i;
            }
            return -1;
          };
          Common.map = function(list, func) {
            if (list.map) {
              return list.map(func);
            }
            var mapped = [];
            for (var i = 0;i < list.length; i += 1) {
              mapped.push(func(list[i]));
            }
            return mapped;
          };
          Common.topologicalSort = function(graph) {
            var result = [], visited = [], temp = [];
            for (var node in graph) {
              if (!visited[node] && !temp[node]) {
                Common._topologicalSort(node, visited, temp, graph, result);
              }
            }
            return result;
          };
          Common._topologicalSort = function(node, visited, temp, graph, result) {
            var neighbors = graph[node] || [];
            temp[node] = true;
            for (var i = 0;i < neighbors.length; i += 1) {
              var neighbor = neighbors[i];
              if (temp[neighbor]) {
                continue;
              }
              if (!visited[neighbor]) {
                Common._topologicalSort(neighbor, visited, temp, graph, result);
              }
            }
            temp[node] = false;
            visited[node] = true;
            result.push(node);
          };
          Common.chain = function() {
            var funcs = [];
            for (var i = 0;i < arguments.length; i += 1) {
              var func = arguments[i];
              if (func._chained) {
                funcs.push.apply(funcs, func._chained);
              } else {
                funcs.push(func);
              }
            }
            var chain = function() {
              var lastResult, args = new Array(arguments.length);
              for (var i2 = 0, l = arguments.length;i2 < l; i2++) {
                args[i2] = arguments[i2];
              }
              for (i2 = 0;i2 < funcs.length; i2 += 1) {
                var result = funcs[i2].apply(lastResult, args);
                if (typeof result !== "undefined") {
                  lastResult = result;
                }
              }
              return lastResult;
            };
            chain._chained = funcs;
            return chain;
          };
          Common.chainPathBefore = function(base, path, func) {
            return Common.set(base, path, Common.chain(func, Common.get(base, path)));
          };
          Common.chainPathAfter = function(base, path, func) {
            return Common.set(base, path, Common.chain(Common.get(base, path), func));
          };
          Common.setDecomp = function(decomp) {
            Common._decomp = decomp;
          };
          Common.getDecomp = function() {
            var decomp = Common._decomp;
            try {
              if (!decomp && typeof window !== "undefined") {
                decomp = window.decomp;
              }
              if (!decomp && typeof global !== "undefined") {
                decomp = global.decomp;
              }
            } catch (e) {
              decomp = null;
            }
            return decomp;
          };
        })();
      },
      function(module2, exports2) {
        var Bounds = {};
        module2.exports = Bounds;
        (function() {
          Bounds.create = function(vertices) {
            var bounds = {
              min: { x: 0, y: 0 },
              max: { x: 0, y: 0 }
            };
            if (vertices)
              Bounds.update(bounds, vertices);
            return bounds;
          };
          Bounds.update = function(bounds, vertices, velocity) {
            bounds.min.x = Infinity;
            bounds.max.x = (-Infinity);
            bounds.min.y = Infinity;
            bounds.max.y = (-Infinity);
            for (var i = 0;i < vertices.length; i++) {
              var vertex = vertices[i];
              if (vertex.x > bounds.max.x)
                bounds.max.x = vertex.x;
              if (vertex.x < bounds.min.x)
                bounds.min.x = vertex.x;
              if (vertex.y > bounds.max.y)
                bounds.max.y = vertex.y;
              if (vertex.y < bounds.min.y)
                bounds.min.y = vertex.y;
            }
            if (velocity) {
              if (velocity.x > 0) {
                bounds.max.x += velocity.x;
              } else {
                bounds.min.x += velocity.x;
              }
              if (velocity.y > 0) {
                bounds.max.y += velocity.y;
              } else {
                bounds.min.y += velocity.y;
              }
            }
          };
          Bounds.contains = function(bounds, point) {
            return point.x >= bounds.min.x && point.x <= bounds.max.x && point.y >= bounds.min.y && point.y <= bounds.max.y;
          };
          Bounds.overlaps = function(boundsA, boundsB) {
            return boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y;
          };
          Bounds.translate = function(bounds, vector) {
            bounds.min.x += vector.x;
            bounds.max.x += vector.x;
            bounds.min.y += vector.y;
            bounds.max.y += vector.y;
          };
          Bounds.shift = function(bounds, position) {
            var deltaX = bounds.max.x - bounds.min.x, deltaY = bounds.max.y - bounds.min.y;
            bounds.min.x = position.x;
            bounds.max.x = position.x + deltaX;
            bounds.min.y = position.y;
            bounds.max.y = position.y + deltaY;
          };
        })();
      },
      function(module2, exports2) {
        var Vector = {};
        module2.exports = Vector;
        (function() {
          Vector.create = function(x, y) {
            return { x: x || 0, y: y || 0 };
          };
          Vector.clone = function(vector) {
            return { x: vector.x, y: vector.y };
          };
          Vector.magnitude = function(vector) {
            return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
          };
          Vector.magnitudeSquared = function(vector) {
            return vector.x * vector.x + vector.y * vector.y;
          };
          Vector.rotate = function(vector, angle, output) {
            var cos = Math.cos(angle), sin = Math.sin(angle);
            if (!output)
              output = {};
            var x = vector.x * cos - vector.y * sin;
            output.y = vector.x * sin + vector.y * cos;
            output.x = x;
            return output;
          };
          Vector.rotateAbout = function(vector, angle, point, output) {
            var cos = Math.cos(angle), sin = Math.sin(angle);
            if (!output)
              output = {};
            var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
            output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
            output.x = x;
            return output;
          };
          Vector.normalise = function(vector) {
            var magnitude = Vector.magnitude(vector);
            if (magnitude === 0)
              return { x: 0, y: 0 };
            return { x: vector.x / magnitude, y: vector.y / magnitude };
          };
          Vector.dot = function(vectorA, vectorB) {
            return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
          };
          Vector.cross = function(vectorA, vectorB) {
            return vectorA.x * vectorB.y - vectorA.y * vectorB.x;
          };
          Vector.cross3 = function(vectorA, vectorB, vectorC) {
            return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
          };
          Vector.add = function(vectorA, vectorB, output) {
            if (!output)
              output = {};
            output.x = vectorA.x + vectorB.x;
            output.y = vectorA.y + vectorB.y;
            return output;
          };
          Vector.sub = function(vectorA, vectorB, output) {
            if (!output)
              output = {};
            output.x = vectorA.x - vectorB.x;
            output.y = vectorA.y - vectorB.y;
            return output;
          };
          Vector.mult = function(vector, scalar) {
            return { x: vector.x * scalar, y: vector.y * scalar };
          };
          Vector.div = function(vector, scalar) {
            return { x: vector.x / scalar, y: vector.y / scalar };
          };
          Vector.perp = function(vector, negate) {
            negate = negate === true ? -1 : 1;
            return { x: negate * -vector.y, y: negate * vector.x };
          };
          Vector.neg = function(vector) {
            return { x: -vector.x, y: -vector.y };
          };
          Vector.angle = function(vectorA, vectorB) {
            return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
          };
          Vector._temp = [
            Vector.create(),
            Vector.create(),
            Vector.create(),
            Vector.create(),
            Vector.create(),
            Vector.create()
          ];
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Vertices = {};
        module2.exports = Vertices;
        var Vector = __webpack_require__(2);
        var Common = __webpack_require__(0);
        (function() {
          Vertices.create = function(points, body) {
            var vertices = [];
            for (var i = 0;i < points.length; i++) {
              var point = points[i], vertex = {
                x: point.x,
                y: point.y,
                index: i,
                body,
                isInternal: false
              };
              vertices.push(vertex);
            }
            return vertices;
          };
          Vertices.fromPath = function(path, body) {
            var pathPattern = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig, points = [];
            path.replace(pathPattern, function(match, x, y) {
              points.push({ x: parseFloat(x), y: parseFloat(y) });
            });
            return Vertices.create(points, body);
          };
          Vertices.centre = function(vertices) {
            var area = Vertices.area(vertices, true), centre = { x: 0, y: 0 }, cross, temp, j;
            for (var i = 0;i < vertices.length; i++) {
              j = (i + 1) % vertices.length;
              cross = Vector.cross(vertices[i], vertices[j]);
              temp = Vector.mult(Vector.add(vertices[i], vertices[j]), cross);
              centre = Vector.add(centre, temp);
            }
            return Vector.div(centre, 6 * area);
          };
          Vertices.mean = function(vertices) {
            var average = { x: 0, y: 0 };
            for (var i = 0;i < vertices.length; i++) {
              average.x += vertices[i].x;
              average.y += vertices[i].y;
            }
            return Vector.div(average, vertices.length);
          };
          Vertices.area = function(vertices, signed) {
            var area = 0, j = vertices.length - 1;
            for (var i = 0;i < vertices.length; i++) {
              area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);
              j = i;
            }
            if (signed)
              return area / 2;
            return Math.abs(area) / 2;
          };
          Vertices.inertia = function(vertices, mass) {
            var numerator = 0, denominator = 0, v = vertices, cross, j;
            for (var n = 0;n < v.length; n++) {
              j = (n + 1) % v.length;
              cross = Math.abs(Vector.cross(v[j], v[n]));
              numerator += cross * (Vector.dot(v[j], v[j]) + Vector.dot(v[j], v[n]) + Vector.dot(v[n], v[n]));
              denominator += cross;
            }
            return mass / 6 * (numerator / denominator);
          };
          Vertices.translate = function(vertices, vector, scalar) {
            scalar = typeof scalar !== "undefined" ? scalar : 1;
            var verticesLength = vertices.length, translateX = vector.x * scalar, translateY = vector.y * scalar, i;
            for (i = 0;i < verticesLength; i++) {
              vertices[i].x += translateX;
              vertices[i].y += translateY;
            }
            return vertices;
          };
          Vertices.rotate = function(vertices, angle, point) {
            if (angle === 0)
              return;
            var cos = Math.cos(angle), sin = Math.sin(angle), pointX = point.x, pointY = point.y, verticesLength = vertices.length, vertex, dx, dy, i;
            for (i = 0;i < verticesLength; i++) {
              vertex = vertices[i];
              dx = vertex.x - pointX;
              dy = vertex.y - pointY;
              vertex.x = pointX + (dx * cos - dy * sin);
              vertex.y = pointY + (dx * sin + dy * cos);
            }
            return vertices;
          };
          Vertices.contains = function(vertices, point) {
            var { x: pointX, y: pointY } = point, verticesLength = vertices.length, vertex = vertices[verticesLength - 1], nextVertex;
            for (var i = 0;i < verticesLength; i++) {
              nextVertex = vertices[i];
              if ((pointX - vertex.x) * (nextVertex.y - vertex.y) + (pointY - vertex.y) * (vertex.x - nextVertex.x) > 0) {
                return false;
              }
              vertex = nextVertex;
            }
            return true;
          };
          Vertices.scale = function(vertices, scaleX, scaleY, point) {
            if (scaleX === 1 && scaleY === 1)
              return vertices;
            point = point || Vertices.centre(vertices);
            var vertex, delta;
            for (var i = 0;i < vertices.length; i++) {
              vertex = vertices[i];
              delta = Vector.sub(vertex, point);
              vertices[i].x = point.x + delta.x * scaleX;
              vertices[i].y = point.y + delta.y * scaleY;
            }
            return vertices;
          };
          Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {
            if (typeof radius === "number") {
              radius = [radius];
            } else {
              radius = radius || [8];
            }
            quality = typeof quality !== "undefined" ? quality : -1;
            qualityMin = qualityMin || 2;
            qualityMax = qualityMax || 14;
            var newVertices = [];
            for (var i = 0;i < vertices.length; i++) {
              var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1], vertex = vertices[i], nextVertex = vertices[(i + 1) % vertices.length], currentRadius = radius[i < radius.length ? i : radius.length - 1];
              if (currentRadius === 0) {
                newVertices.push(vertex);
                continue;
              }
              var prevNormal = Vector.normalise({
                x: vertex.y - prevVertex.y,
                y: prevVertex.x - vertex.x
              });
              var nextNormal = Vector.normalise({
                x: nextVertex.y - vertex.y,
                y: vertex.x - nextVertex.x
              });
              var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)), radiusVector = Vector.mult(Common.clone(prevNormal), currentRadius), midNormal = Vector.normalise(Vector.mult(Vector.add(prevNormal, nextNormal), 0.5)), scaledVertex = Vector.sub(vertex, Vector.mult(midNormal, diagonalRadius));
              var precision = quality;
              if (quality === -1) {
                precision = Math.pow(currentRadius, 0.32) * 1.75;
              }
              precision = Common.clamp(precision, qualityMin, qualityMax);
              if (precision % 2 === 1)
                precision += 1;
              var alpha = Math.acos(Vector.dot(prevNormal, nextNormal)), theta = alpha / precision;
              for (var j = 0;j < precision; j++) {
                newVertices.push(Vector.add(Vector.rotate(radiusVector, theta * j), scaledVertex));
              }
            }
            return newVertices;
          };
          Vertices.clockwiseSort = function(vertices) {
            var centre = Vertices.mean(vertices);
            vertices.sort(function(vertexA, vertexB) {
              return Vector.angle(centre, vertexA) - Vector.angle(centre, vertexB);
            });
            return vertices;
          };
          Vertices.isConvex = function(vertices) {
            var flag = 0, n = vertices.length, i, j, k, z;
            if (n < 3)
              return null;
            for (i = 0;i < n; i++) {
              j = (i + 1) % n;
              k = (i + 2) % n;
              z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);
              z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);
              if (z < 0) {
                flag |= 1;
              } else if (z > 0) {
                flag |= 2;
              }
              if (flag === 3) {
                return false;
              }
            }
            if (flag !== 0) {
              return true;
            } else {
              return null;
            }
          };
          Vertices.hull = function(vertices) {
            var upper = [], lower = [], vertex, i;
            vertices = vertices.slice(0);
            vertices.sort(function(vertexA, vertexB) {
              var dx = vertexA.x - vertexB.x;
              return dx !== 0 ? dx : vertexA.y - vertexB.y;
            });
            for (i = 0;i < vertices.length; i += 1) {
              vertex = vertices[i];
              while (lower.length >= 2 && Vector.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0) {
                lower.pop();
              }
              lower.push(vertex);
            }
            for (i = vertices.length - 1;i >= 0; i -= 1) {
              vertex = vertices[i];
              while (upper.length >= 2 && Vector.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0) {
                upper.pop();
              }
              upper.push(vertex);
            }
            upper.pop();
            lower.pop();
            return upper.concat(lower);
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Body = {};
        module2.exports = Body;
        var Vertices = __webpack_require__(3);
        var Vector = __webpack_require__(2);
        var Sleeping = __webpack_require__(7);
        var Common = __webpack_require__(0);
        var Bounds = __webpack_require__(1);
        var Axes = __webpack_require__(11);
        (function() {
          Body._timeCorrection = true;
          Body._inertiaScale = 4;
          Body._nextCollidingGroupId = 1;
          Body._nextNonCollidingGroupId = -1;
          Body._nextCategory = 1;
          Body._baseDelta = 1000 / 60;
          Body.create = function(options) {
            var defaults = {
              id: Common.nextId(),
              type: "body",
              label: "Body",
              parts: [],
              plugin: {},
              angle: 0,
              vertices: Vertices.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
              position: { x: 0, y: 0 },
              force: { x: 0, y: 0 },
              torque: 0,
              positionImpulse: { x: 0, y: 0 },
              constraintImpulse: { x: 0, y: 0, angle: 0 },
              totalContacts: 0,
              speed: 0,
              angularSpeed: 0,
              velocity: { x: 0, y: 0 },
              angularVelocity: 0,
              isSensor: false,
              isStatic: false,
              isSleeping: false,
              motion: 0,
              sleepThreshold: 60,
              density: 0.001,
              restitution: 0,
              friction: 0.1,
              frictionStatic: 0.5,
              frictionAir: 0.01,
              collisionFilter: {
                category: 1,
                mask: 4294967295,
                group: 0
              },
              slop: 0.05,
              timeScale: 1,
              render: {
                visible: true,
                opacity: 1,
                strokeStyle: null,
                fillStyle: null,
                lineWidth: null,
                sprite: {
                  xScale: 1,
                  yScale: 1,
                  xOffset: 0,
                  yOffset: 0
                }
              },
              events: null,
              bounds: null,
              chamfer: null,
              circleRadius: 0,
              positionPrev: null,
              anglePrev: 0,
              parent: null,
              axes: null,
              area: 0,
              mass: 0,
              inertia: 0,
              deltaTime: 1000 / 60,
              _original: null
            };
            var body = Common.extend(defaults, options);
            _initProperties(body, options);
            return body;
          };
          Body.nextGroup = function(isNonColliding) {
            if (isNonColliding)
              return Body._nextNonCollidingGroupId--;
            return Body._nextCollidingGroupId++;
          };
          Body.nextCategory = function() {
            Body._nextCategory = Body._nextCategory << 1;
            return Body._nextCategory;
          };
          var _initProperties = function(body, options) {
            options = options || {};
            Body.set(body, {
              bounds: body.bounds || Bounds.create(body.vertices),
              positionPrev: body.positionPrev || Vector.clone(body.position),
              anglePrev: body.anglePrev || body.angle,
              vertices: body.vertices,
              parts: body.parts || [body],
              isStatic: body.isStatic,
              isSleeping: body.isSleeping,
              parent: body.parent || body
            });
            Vertices.rotate(body.vertices, body.angle, body.position);
            Axes.rotate(body.axes, body.angle);
            Bounds.update(body.bounds, body.vertices, body.velocity);
            Body.set(body, {
              axes: options.axes || body.axes,
              area: options.area || body.area,
              mass: options.mass || body.mass,
              inertia: options.inertia || body.inertia
            });
            var defaultFillStyle = body.isStatic ? "#14151f" : Common.choose(["#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1"]), defaultStrokeStyle = body.isStatic ? "#555" : "#ccc", defaultLineWidth = body.isStatic && body.render.fillStyle === null ? 1 : 0;
            body.render.fillStyle = body.render.fillStyle || defaultFillStyle;
            body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;
            body.render.lineWidth = body.render.lineWidth || defaultLineWidth;
            body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);
            body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);
          };
          Body.set = function(body, settings, value) {
            var property;
            if (typeof settings === "string") {
              property = settings;
              settings = {};
              settings[property] = value;
            }
            for (property in settings) {
              if (!Object.prototype.hasOwnProperty.call(settings, property))
                continue;
              value = settings[property];
              switch (property) {
                case "isStatic":
                  Body.setStatic(body, value);
                  break;
                case "isSleeping":
                  Sleeping.set(body, value);
                  break;
                case "mass":
                  Body.setMass(body, value);
                  break;
                case "density":
                  Body.setDensity(body, value);
                  break;
                case "inertia":
                  Body.setInertia(body, value);
                  break;
                case "vertices":
                  Body.setVertices(body, value);
                  break;
                case "position":
                  Body.setPosition(body, value);
                  break;
                case "angle":
                  Body.setAngle(body, value);
                  break;
                case "velocity":
                  Body.setVelocity(body, value);
                  break;
                case "angularVelocity":
                  Body.setAngularVelocity(body, value);
                  break;
                case "speed":
                  Body.setSpeed(body, value);
                  break;
                case "angularSpeed":
                  Body.setAngularSpeed(body, value);
                  break;
                case "parts":
                  Body.setParts(body, value);
                  break;
                case "centre":
                  Body.setCentre(body, value);
                  break;
                default:
                  body[property] = value;
              }
            }
          };
          Body.setStatic = function(body, isStatic) {
            for (var i = 0;i < body.parts.length; i++) {
              var part = body.parts[i];
              part.isStatic = isStatic;
              if (isStatic) {
                part._original = {
                  restitution: part.restitution,
                  friction: part.friction,
                  mass: part.mass,
                  inertia: part.inertia,
                  density: part.density,
                  inverseMass: part.inverseMass,
                  inverseInertia: part.inverseInertia
                };
                part.restitution = 0;
                part.friction = 1;
                part.mass = part.inertia = part.density = Infinity;
                part.inverseMass = part.inverseInertia = 0;
                part.positionPrev.x = part.position.x;
                part.positionPrev.y = part.position.y;
                part.anglePrev = part.angle;
                part.angularVelocity = 0;
                part.speed = 0;
                part.angularSpeed = 0;
                part.motion = 0;
              } else if (part._original) {
                part.restitution = part._original.restitution;
                part.friction = part._original.friction;
                part.mass = part._original.mass;
                part.inertia = part._original.inertia;
                part.density = part._original.density;
                part.inverseMass = part._original.inverseMass;
                part.inverseInertia = part._original.inverseInertia;
                part._original = null;
              }
            }
          };
          Body.setMass = function(body, mass) {
            var moment = body.inertia / (body.mass / 6);
            body.inertia = moment * (mass / 6);
            body.inverseInertia = 1 / body.inertia;
            body.mass = mass;
            body.inverseMass = 1 / body.mass;
            body.density = body.mass / body.area;
          };
          Body.setDensity = function(body, density) {
            Body.setMass(body, density * body.area);
            body.density = density;
          };
          Body.setInertia = function(body, inertia) {
            body.inertia = inertia;
            body.inverseInertia = 1 / body.inertia;
          };
          Body.setVertices = function(body, vertices) {
            if (vertices[0].body === body) {
              body.vertices = vertices;
            } else {
              body.vertices = Vertices.create(vertices, body);
            }
            body.axes = Axes.fromVertices(body.vertices);
            body.area = Vertices.area(body.vertices);
            Body.setMass(body, body.density * body.area);
            var centre = Vertices.centre(body.vertices);
            Vertices.translate(body.vertices, centre, -1);
            Body.setInertia(body, Body._inertiaScale * Vertices.inertia(body.vertices, body.mass));
            Vertices.translate(body.vertices, body.position);
            Bounds.update(body.bounds, body.vertices, body.velocity);
          };
          Body.setParts = function(body, parts, autoHull) {
            var i;
            parts = parts.slice(0);
            body.parts.length = 0;
            body.parts.push(body);
            body.parent = body;
            for (i = 0;i < parts.length; i++) {
              var part = parts[i];
              if (part !== body) {
                part.parent = body;
                body.parts.push(part);
              }
            }
            if (body.parts.length === 1)
              return;
            autoHull = typeof autoHull !== "undefined" ? autoHull : true;
            if (autoHull) {
              var vertices = [];
              for (i = 0;i < parts.length; i++) {
                vertices = vertices.concat(parts[i].vertices);
              }
              Vertices.clockwiseSort(vertices);
              var hull = Vertices.hull(vertices), hullCentre = Vertices.centre(hull);
              Body.setVertices(body, hull);
              Vertices.translate(body.vertices, hullCentre);
            }
            var total = Body._totalProperties(body);
            body.area = total.area;
            body.parent = body;
            body.position.x = total.centre.x;
            body.position.y = total.centre.y;
            body.positionPrev.x = total.centre.x;
            body.positionPrev.y = total.centre.y;
            Body.setMass(body, total.mass);
            Body.setInertia(body, total.inertia);
            Body.setPosition(body, total.centre);
          };
          Body.setCentre = function(body, centre, relative) {
            if (!relative) {
              body.positionPrev.x = centre.x - (body.position.x - body.positionPrev.x);
              body.positionPrev.y = centre.y - (body.position.y - body.positionPrev.y);
              body.position.x = centre.x;
              body.position.y = centre.y;
            } else {
              body.positionPrev.x += centre.x;
              body.positionPrev.y += centre.y;
              body.position.x += centre.x;
              body.position.y += centre.y;
            }
          };
          Body.setPosition = function(body, position, updateVelocity) {
            var delta = Vector.sub(position, body.position);
            if (updateVelocity) {
              body.positionPrev.x = body.position.x;
              body.positionPrev.y = body.position.y;
              body.velocity.x = delta.x;
              body.velocity.y = delta.y;
              body.speed = Vector.magnitude(delta);
            } else {
              body.positionPrev.x += delta.x;
              body.positionPrev.y += delta.y;
            }
            for (var i = 0;i < body.parts.length; i++) {
              var part = body.parts[i];
              part.position.x += delta.x;
              part.position.y += delta.y;
              Vertices.translate(part.vertices, delta);
              Bounds.update(part.bounds, part.vertices, body.velocity);
            }
          };
          Body.setAngle = function(body, angle, updateVelocity) {
            var delta = angle - body.angle;
            if (updateVelocity) {
              body.anglePrev = body.angle;
              body.angularVelocity = delta;
              body.angularSpeed = Math.abs(delta);
            } else {
              body.anglePrev += delta;
            }
            for (var i = 0;i < body.parts.length; i++) {
              var part = body.parts[i];
              part.angle += delta;
              Vertices.rotate(part.vertices, delta, body.position);
              Axes.rotate(part.axes, delta);
              Bounds.update(part.bounds, part.vertices, body.velocity);
              if (i > 0) {
                Vector.rotateAbout(part.position, delta, body.position, part.position);
              }
            }
          };
          Body.setVelocity = function(body, velocity) {
            var timeScale = body.deltaTime / Body._baseDelta;
            body.positionPrev.x = body.position.x - velocity.x * timeScale;
            body.positionPrev.y = body.position.y - velocity.y * timeScale;
            body.velocity.x = (body.position.x - body.positionPrev.x) / timeScale;
            body.velocity.y = (body.position.y - body.positionPrev.y) / timeScale;
            body.speed = Vector.magnitude(body.velocity);
          };
          Body.getVelocity = function(body) {
            var timeScale = Body._baseDelta / body.deltaTime;
            return {
              x: (body.position.x - body.positionPrev.x) * timeScale,
              y: (body.position.y - body.positionPrev.y) * timeScale
            };
          };
          Body.getSpeed = function(body) {
            return Vector.magnitude(Body.getVelocity(body));
          };
          Body.setSpeed = function(body, speed) {
            Body.setVelocity(body, Vector.mult(Vector.normalise(Body.getVelocity(body)), speed));
          };
          Body.setAngularVelocity = function(body, velocity) {
            var timeScale = body.deltaTime / Body._baseDelta;
            body.anglePrev = body.angle - velocity * timeScale;
            body.angularVelocity = (body.angle - body.anglePrev) / timeScale;
            body.angularSpeed = Math.abs(body.angularVelocity);
          };
          Body.getAngularVelocity = function(body) {
            return (body.angle - body.anglePrev) * Body._baseDelta / body.deltaTime;
          };
          Body.getAngularSpeed = function(body) {
            return Math.abs(Body.getAngularVelocity(body));
          };
          Body.setAngularSpeed = function(body, speed) {
            Body.setAngularVelocity(body, Common.sign(Body.getAngularVelocity(body)) * speed);
          };
          Body.translate = function(body, translation, updateVelocity) {
            Body.setPosition(body, Vector.add(body.position, translation), updateVelocity);
          };
          Body.rotate = function(body, rotation, point, updateVelocity) {
            if (!point) {
              Body.setAngle(body, body.angle + rotation, updateVelocity);
            } else {
              var cos = Math.cos(rotation), sin = Math.sin(rotation), dx = body.position.x - point.x, dy = body.position.y - point.y;
              Body.setPosition(body, {
                x: point.x + (dx * cos - dy * sin),
                y: point.y + (dx * sin + dy * cos)
              }, updateVelocity);
              Body.setAngle(body, body.angle + rotation, updateVelocity);
            }
          };
          Body.scale = function(body, scaleX, scaleY, point) {
            var totalArea = 0, totalInertia = 0;
            point = point || body.position;
            for (var i = 0;i < body.parts.length; i++) {
              var part = body.parts[i];
              Vertices.scale(part.vertices, scaleX, scaleY, point);
              part.axes = Axes.fromVertices(part.vertices);
              part.area = Vertices.area(part.vertices);
              Body.setMass(part, body.density * part.area);
              Vertices.translate(part.vertices, { x: -part.position.x, y: -part.position.y });
              Body.setInertia(part, Body._inertiaScale * Vertices.inertia(part.vertices, part.mass));
              Vertices.translate(part.vertices, { x: part.position.x, y: part.position.y });
              if (i > 0) {
                totalArea += part.area;
                totalInertia += part.inertia;
              }
              part.position.x = point.x + (part.position.x - point.x) * scaleX;
              part.position.y = point.y + (part.position.y - point.y) * scaleY;
              Bounds.update(part.bounds, part.vertices, body.velocity);
            }
            if (body.parts.length > 1) {
              body.area = totalArea;
              if (!body.isStatic) {
                Body.setMass(body, body.density * totalArea);
                Body.setInertia(body, totalInertia);
              }
            }
            if (body.circleRadius) {
              if (scaleX === scaleY) {
                body.circleRadius *= scaleX;
              } else {
                body.circleRadius = null;
              }
            }
          };
          Body.update = function(body, deltaTime) {
            deltaTime = (typeof deltaTime !== "undefined" ? deltaTime : 1000 / 60) * body.timeScale;
            var deltaTimeSquared = deltaTime * deltaTime, correction = Body._timeCorrection ? deltaTime / (body.deltaTime || deltaTime) : 1;
            var frictionAir = 1 - body.frictionAir * (deltaTime / Common._baseDelta), velocityPrevX = (body.position.x - body.positionPrev.x) * correction, velocityPrevY = (body.position.y - body.positionPrev.y) * correction;
            body.velocity.x = velocityPrevX * frictionAir + body.force.x / body.mass * deltaTimeSquared;
            body.velocity.y = velocityPrevY * frictionAir + body.force.y / body.mass * deltaTimeSquared;
            body.positionPrev.x = body.position.x;
            body.positionPrev.y = body.position.y;
            body.position.x += body.velocity.x;
            body.position.y += body.velocity.y;
            body.deltaTime = deltaTime;
            body.angularVelocity = (body.angle - body.anglePrev) * frictionAir * correction + body.torque / body.inertia * deltaTimeSquared;
            body.anglePrev = body.angle;
            body.angle += body.angularVelocity;
            for (var i = 0;i < body.parts.length; i++) {
              var part = body.parts[i];
              Vertices.translate(part.vertices, body.velocity);
              if (i > 0) {
                part.position.x += body.velocity.x;
                part.position.y += body.velocity.y;
              }
              if (body.angularVelocity !== 0) {
                Vertices.rotate(part.vertices, body.angularVelocity, body.position);
                Axes.rotate(part.axes, body.angularVelocity);
                if (i > 0) {
                  Vector.rotateAbout(part.position, body.angularVelocity, body.position, part.position);
                }
              }
              Bounds.update(part.bounds, part.vertices, body.velocity);
            }
          };
          Body.updateVelocities = function(body) {
            var timeScale = Body._baseDelta / body.deltaTime, bodyVelocity = body.velocity;
            bodyVelocity.x = (body.position.x - body.positionPrev.x) * timeScale;
            bodyVelocity.y = (body.position.y - body.positionPrev.y) * timeScale;
            body.speed = Math.sqrt(bodyVelocity.x * bodyVelocity.x + bodyVelocity.y * bodyVelocity.y);
            body.angularVelocity = (body.angle - body.anglePrev) * timeScale;
            body.angularSpeed = Math.abs(body.angularVelocity);
          };
          Body.applyForce = function(body, position, force) {
            var offset = { x: position.x - body.position.x, y: position.y - body.position.y };
            body.force.x += force.x;
            body.force.y += force.y;
            body.torque += offset.x * force.y - offset.y * force.x;
          };
          Body._totalProperties = function(body) {
            var properties = {
              mass: 0,
              area: 0,
              inertia: 0,
              centre: { x: 0, y: 0 }
            };
            for (var i = body.parts.length === 1 ? 0 : 1;i < body.parts.length; i++) {
              var part = body.parts[i], mass = part.mass !== Infinity ? part.mass : 1;
              properties.mass += mass;
              properties.area += part.area;
              properties.inertia += part.inertia;
              properties.centre = Vector.add(properties.centre, Vector.mult(part.position, mass));
            }
            properties.centre = Vector.div(properties.centre, properties.mass);
            return properties;
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Events = {};
        module2.exports = Events;
        var Common = __webpack_require__(0);
        (function() {
          Events.on = function(object, eventNames, callback) {
            var names = eventNames.split(" "), name;
            for (var i = 0;i < names.length; i++) {
              name = names[i];
              object.events = object.events || {};
              object.events[name] = object.events[name] || [];
              object.events[name].push(callback);
            }
            return callback;
          };
          Events.off = function(object, eventNames, callback) {
            if (!eventNames) {
              object.events = {};
              return;
            }
            if (typeof eventNames === "function") {
              callback = eventNames;
              eventNames = Common.keys(object.events).join(" ");
            }
            var names = eventNames.split(" ");
            for (var i = 0;i < names.length; i++) {
              var callbacks = object.events[names[i]], newCallbacks = [];
              if (callback && callbacks) {
                for (var j = 0;j < callbacks.length; j++) {
                  if (callbacks[j] !== callback)
                    newCallbacks.push(callbacks[j]);
                }
              }
              object.events[names[i]] = newCallbacks;
            }
          };
          Events.trigger = function(object, eventNames, event) {
            var names, name, callbacks, eventClone;
            var events = object.events;
            if (events && Common.keys(events).length > 0) {
              if (!event)
                event = {};
              names = eventNames.split(" ");
              for (var i = 0;i < names.length; i++) {
                name = names[i];
                callbacks = events[name];
                if (callbacks) {
                  eventClone = Common.clone(event, false);
                  eventClone.name = name;
                  eventClone.source = object;
                  for (var j = 0;j < callbacks.length; j++) {
                    callbacks[j].apply(object, [eventClone]);
                  }
                }
              }
            }
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Composite = {};
        module2.exports = Composite;
        var Events = __webpack_require__(5);
        var Common = __webpack_require__(0);
        var Bounds = __webpack_require__(1);
        var Body = __webpack_require__(4);
        (function() {
          Composite.create = function(options) {
            return Common.extend({
              id: Common.nextId(),
              type: "composite",
              parent: null,
              isModified: false,
              bodies: [],
              constraints: [],
              composites: [],
              label: "Composite",
              plugin: {},
              cache: {
                allBodies: null,
                allConstraints: null,
                allComposites: null
              }
            }, options);
          };
          Composite.setModified = function(composite, isModified, updateParents, updateChildren) {
            composite.isModified = isModified;
            if (isModified && composite.cache) {
              composite.cache.allBodies = null;
              composite.cache.allConstraints = null;
              composite.cache.allComposites = null;
            }
            if (updateParents && composite.parent) {
              Composite.setModified(composite.parent, isModified, updateParents, updateChildren);
            }
            if (updateChildren) {
              for (var i = 0;i < composite.composites.length; i++) {
                var childComposite = composite.composites[i];
                Composite.setModified(childComposite, isModified, updateParents, updateChildren);
              }
            }
          };
          Composite.add = function(composite, object) {
            var objects = [].concat(object);
            Events.trigger(composite, "beforeAdd", { object });
            for (var i = 0;i < objects.length; i++) {
              var obj = objects[i];
              switch (obj.type) {
                case "body":
                  if (obj.parent !== obj) {
                    Common.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                    break;
                  }
                  Composite.addBody(composite, obj);
                  break;
                case "constraint":
                  Composite.addConstraint(composite, obj);
                  break;
                case "composite":
                  Composite.addComposite(composite, obj);
                  break;
                case "mouseConstraint":
                  Composite.addConstraint(composite, obj.constraint);
                  break;
              }
            }
            Events.trigger(composite, "afterAdd", { object });
            return composite;
          };
          Composite.remove = function(composite, object, deep) {
            var objects = [].concat(object);
            Events.trigger(composite, "beforeRemove", { object });
            for (var i = 0;i < objects.length; i++) {
              var obj = objects[i];
              switch (obj.type) {
                case "body":
                  Composite.removeBody(composite, obj, deep);
                  break;
                case "constraint":
                  Composite.removeConstraint(composite, obj, deep);
                  break;
                case "composite":
                  Composite.removeComposite(composite, obj, deep);
                  break;
                case "mouseConstraint":
                  Composite.removeConstraint(composite, obj.constraint);
                  break;
              }
            }
            Events.trigger(composite, "afterRemove", { object });
            return composite;
          };
          Composite.addComposite = function(compositeA, compositeB) {
            compositeA.composites.push(compositeB);
            compositeB.parent = compositeA;
            Composite.setModified(compositeA, true, true, false);
            return compositeA;
          };
          Composite.removeComposite = function(compositeA, compositeB, deep) {
            var position = Common.indexOf(compositeA.composites, compositeB);
            if (position !== -1) {
              Composite.removeCompositeAt(compositeA, position);
            }
            if (deep) {
              for (var i = 0;i < compositeA.composites.length; i++) {
                Composite.removeComposite(compositeA.composites[i], compositeB, true);
              }
            }
            return compositeA;
          };
          Composite.removeCompositeAt = function(composite, position) {
            composite.composites.splice(position, 1);
            Composite.setModified(composite, true, true, false);
            return composite;
          };
          Composite.addBody = function(composite, body) {
            composite.bodies.push(body);
            Composite.setModified(composite, true, true, false);
            return composite;
          };
          Composite.removeBody = function(composite, body, deep) {
            var position = Common.indexOf(composite.bodies, body);
            if (position !== -1) {
              Composite.removeBodyAt(composite, position);
            }
            if (deep) {
              for (var i = 0;i < composite.composites.length; i++) {
                Composite.removeBody(composite.composites[i], body, true);
              }
            }
            return composite;
          };
          Composite.removeBodyAt = function(composite, position) {
            composite.bodies.splice(position, 1);
            Composite.setModified(composite, true, true, false);
            return composite;
          };
          Composite.addConstraint = function(composite, constraint) {
            composite.constraints.push(constraint);
            Composite.setModified(composite, true, true, false);
            return composite;
          };
          Composite.removeConstraint = function(composite, constraint, deep) {
            var position = Common.indexOf(composite.constraints, constraint);
            if (position !== -1) {
              Composite.removeConstraintAt(composite, position);
            }
            if (deep) {
              for (var i = 0;i < composite.composites.length; i++) {
                Composite.removeConstraint(composite.composites[i], constraint, true);
              }
            }
            return composite;
          };
          Composite.removeConstraintAt = function(composite, position) {
            composite.constraints.splice(position, 1);
            Composite.setModified(composite, true, true, false);
            return composite;
          };
          Composite.clear = function(composite, keepStatic, deep) {
            if (deep) {
              for (var i = 0;i < composite.composites.length; i++) {
                Composite.clear(composite.composites[i], keepStatic, true);
              }
            }
            if (keepStatic) {
              composite.bodies = composite.bodies.filter(function(body) {
                return body.isStatic;
              });
            } else {
              composite.bodies.length = 0;
            }
            composite.constraints.length = 0;
            composite.composites.length = 0;
            Composite.setModified(composite, true, true, false);
            return composite;
          };
          Composite.allBodies = function(composite) {
            if (composite.cache && composite.cache.allBodies) {
              return composite.cache.allBodies;
            }
            var bodies = [].concat(composite.bodies);
            for (var i = 0;i < composite.composites.length; i++)
              bodies = bodies.concat(Composite.allBodies(composite.composites[i]));
            if (composite.cache) {
              composite.cache.allBodies = bodies;
            }
            return bodies;
          };
          Composite.allConstraints = function(composite) {
            if (composite.cache && composite.cache.allConstraints) {
              return composite.cache.allConstraints;
            }
            var constraints = [].concat(composite.constraints);
            for (var i = 0;i < composite.composites.length; i++)
              constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));
            if (composite.cache) {
              composite.cache.allConstraints = constraints;
            }
            return constraints;
          };
          Composite.allComposites = function(composite) {
            if (composite.cache && composite.cache.allComposites) {
              return composite.cache.allComposites;
            }
            var composites = [].concat(composite.composites);
            for (var i = 0;i < composite.composites.length; i++)
              composites = composites.concat(Composite.allComposites(composite.composites[i]));
            if (composite.cache) {
              composite.cache.allComposites = composites;
            }
            return composites;
          };
          Composite.get = function(composite, id, type) {
            var objects, object;
            switch (type) {
              case "body":
                objects = Composite.allBodies(composite);
                break;
              case "constraint":
                objects = Composite.allConstraints(composite);
                break;
              case "composite":
                objects = Composite.allComposites(composite).concat(composite);
                break;
            }
            if (!objects)
              return null;
            object = objects.filter(function(object2) {
              return object2.id.toString() === id.toString();
            });
            return object.length === 0 ? null : object[0];
          };
          Composite.move = function(compositeA, objects, compositeB) {
            Composite.remove(compositeA, objects);
            Composite.add(compositeB, objects);
            return compositeA;
          };
          Composite.rebase = function(composite) {
            var objects = Composite.allBodies(composite).concat(Composite.allConstraints(composite)).concat(Composite.allComposites(composite));
            for (var i = 0;i < objects.length; i++) {
              objects[i].id = Common.nextId();
            }
            return composite;
          };
          Composite.translate = function(composite, translation, recursive) {
            var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
            for (var i = 0;i < bodies.length; i++) {
              Body.translate(bodies[i], translation);
            }
            return composite;
          };
          Composite.rotate = function(composite, rotation, point, recursive) {
            var cos = Math.cos(rotation), sin = Math.sin(rotation), bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
            for (var i = 0;i < bodies.length; i++) {
              var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;
              Body.setPosition(body, {
                x: point.x + (dx * cos - dy * sin),
                y: point.y + (dx * sin + dy * cos)
              });
              Body.rotate(body, rotation);
            }
            return composite;
          };
          Composite.scale = function(composite, scaleX, scaleY, point, recursive) {
            var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
            for (var i = 0;i < bodies.length; i++) {
              var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;
              Body.setPosition(body, {
                x: point.x + dx * scaleX,
                y: point.y + dy * scaleY
              });
              Body.scale(body, scaleX, scaleY);
            }
            return composite;
          };
          Composite.bounds = function(composite) {
            var bodies = Composite.allBodies(composite), vertices = [];
            for (var i = 0;i < bodies.length; i += 1) {
              var body = bodies[i];
              vertices.push(body.bounds.min, body.bounds.max);
            }
            return Bounds.create(vertices);
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Sleeping = {};
        module2.exports = Sleeping;
        var Body = __webpack_require__(4);
        var Events = __webpack_require__(5);
        var Common = __webpack_require__(0);
        (function() {
          Sleeping._motionWakeThreshold = 0.18;
          Sleeping._motionSleepThreshold = 0.08;
          Sleeping._minBias = 0.9;
          Sleeping.update = function(bodies, delta) {
            var timeScale = delta / Common._baseDelta, motionSleepThreshold = Sleeping._motionSleepThreshold;
            for (var i = 0;i < bodies.length; i++) {
              var body = bodies[i], speed = Body.getSpeed(body), angularSpeed = Body.getAngularSpeed(body), motion = speed * speed + angularSpeed * angularSpeed;
              if (body.force.x !== 0 || body.force.y !== 0) {
                Sleeping.set(body, false);
                continue;
              }
              var minMotion = Math.min(body.motion, motion), maxMotion = Math.max(body.motion, motion);
              body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;
              if (body.sleepThreshold > 0 && body.motion < motionSleepThreshold) {
                body.sleepCounter += 1;
                if (body.sleepCounter >= body.sleepThreshold / timeScale) {
                  Sleeping.set(body, true);
                }
              } else if (body.sleepCounter > 0) {
                body.sleepCounter -= 1;
              }
            }
          };
          Sleeping.afterCollisions = function(pairs) {
            var motionSleepThreshold = Sleeping._motionSleepThreshold;
            for (var i = 0;i < pairs.length; i++) {
              var pair = pairs[i];
              if (!pair.isActive)
                continue;
              var collision = pair.collision, bodyA = collision.bodyA.parent, bodyB = collision.bodyB.parent;
              if (bodyA.isSleeping && bodyB.isSleeping || bodyA.isStatic || bodyB.isStatic)
                continue;
              if (bodyA.isSleeping || bodyB.isSleeping) {
                var sleepingBody = bodyA.isSleeping && !bodyA.isStatic ? bodyA : bodyB, movingBody = sleepingBody === bodyA ? bodyB : bodyA;
                if (!sleepingBody.isStatic && movingBody.motion > motionSleepThreshold) {
                  Sleeping.set(sleepingBody, false);
                }
              }
            }
          };
          Sleeping.set = function(body, isSleeping) {
            var wasSleeping = body.isSleeping;
            if (isSleeping) {
              body.isSleeping = true;
              body.sleepCounter = body.sleepThreshold;
              body.positionImpulse.x = 0;
              body.positionImpulse.y = 0;
              body.positionPrev.x = body.position.x;
              body.positionPrev.y = body.position.y;
              body.anglePrev = body.angle;
              body.speed = 0;
              body.angularSpeed = 0;
              body.motion = 0;
              if (!wasSleeping) {
                Events.trigger(body, "sleepStart");
              }
            } else {
              body.isSleeping = false;
              body.sleepCounter = 0;
              if (wasSleeping) {
                Events.trigger(body, "sleepEnd");
              }
            }
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Collision = {};
        module2.exports = Collision;
        var Vertices = __webpack_require__(3);
        var Pair = __webpack_require__(9);
        (function() {
          var _supports = [];
          var _overlapAB = {
            overlap: 0,
            axis: null
          };
          var _overlapBA = {
            overlap: 0,
            axis: null
          };
          Collision.create = function(bodyA, bodyB) {
            return {
              pair: null,
              collided: false,
              bodyA,
              bodyB,
              parentA: bodyA.parent,
              parentB: bodyB.parent,
              depth: 0,
              normal: { x: 0, y: 0 },
              tangent: { x: 0, y: 0 },
              penetration: { x: 0, y: 0 },
              supports: []
            };
          };
          Collision.collides = function(bodyA, bodyB, pairs) {
            Collision._overlapAxes(_overlapAB, bodyA.vertices, bodyB.vertices, bodyA.axes);
            if (_overlapAB.overlap <= 0) {
              return null;
            }
            Collision._overlapAxes(_overlapBA, bodyB.vertices, bodyA.vertices, bodyB.axes);
            if (_overlapBA.overlap <= 0) {
              return null;
            }
            var pair = pairs && pairs.table[Pair.id(bodyA, bodyB)], collision;
            if (!pair) {
              collision = Collision.create(bodyA, bodyB);
              collision.collided = true;
              collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;
              collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;
              collision.parentA = collision.bodyA.parent;
              collision.parentB = collision.bodyB.parent;
            } else {
              collision = pair.collision;
            }
            bodyA = collision.bodyA;
            bodyB = collision.bodyB;
            var minOverlap;
            if (_overlapAB.overlap < _overlapBA.overlap) {
              minOverlap = _overlapAB;
            } else {
              minOverlap = _overlapBA;
            }
            var { normal, supports } = collision, minAxis = minOverlap.axis, minAxisX = minAxis.x, minAxisY = minAxis.y;
            if (minAxisX * (bodyB.position.x - bodyA.position.x) + minAxisY * (bodyB.position.y - bodyA.position.y) < 0) {
              normal.x = minAxisX;
              normal.y = minAxisY;
            } else {
              normal.x = -minAxisX;
              normal.y = -minAxisY;
            }
            collision.tangent.x = -normal.y;
            collision.tangent.y = normal.x;
            collision.depth = minOverlap.overlap;
            collision.penetration.x = normal.x * collision.depth;
            collision.penetration.y = normal.y * collision.depth;
            var supportsB = Collision._findSupports(bodyA, bodyB, normal, 1), supportCount = 0;
            if (Vertices.contains(bodyA.vertices, supportsB[0])) {
              supports[supportCount++] = supportsB[0];
            }
            if (Vertices.contains(bodyA.vertices, supportsB[1])) {
              supports[supportCount++] = supportsB[1];
            }
            if (supportCount < 2) {
              var supportsA = Collision._findSupports(bodyB, bodyA, normal, -1);
              if (Vertices.contains(bodyB.vertices, supportsA[0])) {
                supports[supportCount++] = supportsA[0];
              }
              if (supportCount < 2 && Vertices.contains(bodyB.vertices, supportsA[1])) {
                supports[supportCount++] = supportsA[1];
              }
            }
            if (supportCount === 0) {
              supports[supportCount++] = supportsB[0];
            }
            supports.length = supportCount;
            return collision;
          };
          Collision._overlapAxes = function(result, verticesA, verticesB, axes) {
            var verticesALength = verticesA.length, verticesBLength = verticesB.length, verticesAX = verticesA[0].x, verticesAY = verticesA[0].y, verticesBX = verticesB[0].x, verticesBY = verticesB[0].y, axesLength = axes.length, overlapMin = Number.MAX_VALUE, overlapAxisNumber = 0, overlap, overlapAB, overlapBA, dot, i, j;
            for (i = 0;i < axesLength; i++) {
              var axis = axes[i], axisX = axis.x, axisY = axis.y, minA = verticesAX * axisX + verticesAY * axisY, minB = verticesBX * axisX + verticesBY * axisY, maxA = minA, maxB = minB;
              for (j = 1;j < verticesALength; j += 1) {
                dot = verticesA[j].x * axisX + verticesA[j].y * axisY;
                if (dot > maxA) {
                  maxA = dot;
                } else if (dot < minA) {
                  minA = dot;
                }
              }
              for (j = 1;j < verticesBLength; j += 1) {
                dot = verticesB[j].x * axisX + verticesB[j].y * axisY;
                if (dot > maxB) {
                  maxB = dot;
                } else if (dot < minB) {
                  minB = dot;
                }
              }
              overlapAB = maxA - minB;
              overlapBA = maxB - minA;
              overlap = overlapAB < overlapBA ? overlapAB : overlapBA;
              if (overlap < overlapMin) {
                overlapMin = overlap;
                overlapAxisNumber = i;
                if (overlap <= 0) {
                  break;
                }
              }
            }
            result.axis = axes[overlapAxisNumber];
            result.overlap = overlapMin;
          };
          Collision._projectToAxis = function(projection, vertices, axis) {
            var min = vertices[0].x * axis.x + vertices[0].y * axis.y, max = min;
            for (var i = 1;i < vertices.length; i += 1) {
              var dot = vertices[i].x * axis.x + vertices[i].y * axis.y;
              if (dot > max) {
                max = dot;
              } else if (dot < min) {
                min = dot;
              }
            }
            projection.min = min;
            projection.max = max;
          };
          Collision._findSupports = function(bodyA, bodyB, normal, direction) {
            var vertices = bodyB.vertices, verticesLength = vertices.length, bodyAPositionX = bodyA.position.x, bodyAPositionY = bodyA.position.y, normalX = normal.x * direction, normalY = normal.y * direction, nearestDistance = Number.MAX_VALUE, vertexA, vertexB, vertexC, distance, j;
            for (j = 0;j < verticesLength; j += 1) {
              vertexB = vertices[j];
              distance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y);
              if (distance < nearestDistance) {
                nearestDistance = distance;
                vertexA = vertexB;
              }
            }
            vertexC = vertices[(verticesLength + vertexA.index - 1) % verticesLength];
            nearestDistance = normalX * (bodyAPositionX - vertexC.x) + normalY * (bodyAPositionY - vertexC.y);
            vertexB = vertices[(vertexA.index + 1) % verticesLength];
            if (normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y) < nearestDistance) {
              _supports[0] = vertexA;
              _supports[1] = vertexB;
              return _supports;
            }
            _supports[0] = vertexA;
            _supports[1] = vertexC;
            return _supports;
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Pair = {};
        module2.exports = Pair;
        var Contact = __webpack_require__(16);
        (function() {
          Pair.create = function(collision, timestamp) {
            var { bodyA, bodyB } = collision;
            var pair = {
              id: Pair.id(bodyA, bodyB),
              bodyA,
              bodyB,
              collision,
              contacts: [],
              activeContacts: [],
              separation: 0,
              isActive: true,
              confirmedActive: true,
              isSensor: bodyA.isSensor || bodyB.isSensor,
              timeCreated: timestamp,
              timeUpdated: timestamp,
              inverseMass: 0,
              friction: 0,
              frictionStatic: 0,
              restitution: 0,
              slop: 0
            };
            Pair.update(pair, collision, timestamp);
            return pair;
          };
          Pair.update = function(pair, collision, timestamp) {
            var contacts = pair.contacts, supports = collision.supports, activeContacts = pair.activeContacts, parentA = collision.parentA, parentB = collision.parentB, parentAVerticesLength = parentA.vertices.length;
            pair.isActive = true;
            pair.timeUpdated = timestamp;
            pair.collision = collision;
            pair.separation = collision.depth;
            pair.inverseMass = parentA.inverseMass + parentB.inverseMass;
            pair.friction = parentA.friction < parentB.friction ? parentA.friction : parentB.friction;
            pair.frictionStatic = parentA.frictionStatic > parentB.frictionStatic ? parentA.frictionStatic : parentB.frictionStatic;
            pair.restitution = parentA.restitution > parentB.restitution ? parentA.restitution : parentB.restitution;
            pair.slop = parentA.slop > parentB.slop ? parentA.slop : parentB.slop;
            collision.pair = pair;
            activeContacts.length = 0;
            for (var i = 0;i < supports.length; i++) {
              var support = supports[i], contactId = support.body === parentA ? support.index : parentAVerticesLength + support.index, contact = contacts[contactId];
              if (contact) {
                activeContacts.push(contact);
              } else {
                activeContacts.push(contacts[contactId] = Contact.create(support));
              }
            }
          };
          Pair.setActive = function(pair, isActive, timestamp) {
            if (isActive) {
              pair.isActive = true;
              pair.timeUpdated = timestamp;
            } else {
              pair.isActive = false;
              pair.activeContacts.length = 0;
            }
          };
          Pair.id = function(bodyA, bodyB) {
            if (bodyA.id < bodyB.id) {
              return "A" + bodyA.id + "B" + bodyB.id;
            } else {
              return "A" + bodyB.id + "B" + bodyA.id;
            }
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Constraint = {};
        module2.exports = Constraint;
        var Vertices = __webpack_require__(3);
        var Vector = __webpack_require__(2);
        var Sleeping = __webpack_require__(7);
        var Bounds = __webpack_require__(1);
        var Axes = __webpack_require__(11);
        var Common = __webpack_require__(0);
        (function() {
          Constraint._warming = 0.4;
          Constraint._torqueDampen = 1;
          Constraint._minLength = 0.000001;
          Constraint.create = function(options) {
            var constraint = options;
            if (constraint.bodyA && !constraint.pointA)
              constraint.pointA = { x: 0, y: 0 };
            if (constraint.bodyB && !constraint.pointB)
              constraint.pointB = { x: 0, y: 0 };
            var initialPointA = constraint.bodyA ? Vector.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA, initialPointB = constraint.bodyB ? Vector.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB, length = Vector.magnitude(Vector.sub(initialPointA, initialPointB));
            constraint.length = typeof constraint.length !== "undefined" ? constraint.length : length;
            constraint.id = constraint.id || Common.nextId();
            constraint.label = constraint.label || "Constraint";
            constraint.type = "constraint";
            constraint.stiffness = constraint.stiffness || (constraint.length > 0 ? 1 : 0.7);
            constraint.damping = constraint.damping || 0;
            constraint.angularStiffness = constraint.angularStiffness || 0;
            constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;
            constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;
            constraint.plugin = {};
            var render = {
              visible: true,
              lineWidth: 2,
              strokeStyle: "#ffffff",
              type: "line",
              anchors: true
            };
            if (constraint.length === 0 && constraint.stiffness > 0.1) {
              render.type = "pin";
              render.anchors = false;
            } else if (constraint.stiffness < 0.9) {
              render.type = "spring";
            }
            constraint.render = Common.extend(render, constraint.render);
            return constraint;
          };
          Constraint.preSolveAll = function(bodies) {
            for (var i = 0;i < bodies.length; i += 1) {
              var body = bodies[i], impulse = body.constraintImpulse;
              if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) {
                continue;
              }
              body.position.x += impulse.x;
              body.position.y += impulse.y;
              body.angle += impulse.angle;
            }
          };
          Constraint.solveAll = function(constraints, delta) {
            var timeScale = Common.clamp(delta / Common._baseDelta, 0, 1);
            for (var i = 0;i < constraints.length; i += 1) {
              var constraint = constraints[i], fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic, fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;
              if (fixedA || fixedB) {
                Constraint.solve(constraints[i], timeScale);
              }
            }
            for (i = 0;i < constraints.length; i += 1) {
              constraint = constraints[i];
              fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic;
              fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;
              if (!fixedA && !fixedB) {
                Constraint.solve(constraints[i], timeScale);
              }
            }
          };
          Constraint.solve = function(constraint, timeScale) {
            var { bodyA, bodyB, pointA, pointB } = constraint;
            if (!bodyA && !bodyB)
              return;
            if (bodyA && !bodyA.isStatic) {
              Vector.rotate(pointA, bodyA.angle - constraint.angleA, pointA);
              constraint.angleA = bodyA.angle;
            }
            if (bodyB && !bodyB.isStatic) {
              Vector.rotate(pointB, bodyB.angle - constraint.angleB, pointB);
              constraint.angleB = bodyB.angle;
            }
            var pointAWorld = pointA, pointBWorld = pointB;
            if (bodyA)
              pointAWorld = Vector.add(bodyA.position, pointA);
            if (bodyB)
              pointBWorld = Vector.add(bodyB.position, pointB);
            if (!pointAWorld || !pointBWorld)
              return;
            var delta = Vector.sub(pointAWorld, pointBWorld), currentLength = Vector.magnitude(delta);
            if (currentLength < Constraint._minLength) {
              currentLength = Constraint._minLength;
            }
            var difference = (currentLength - constraint.length) / currentLength, isRigid = constraint.stiffness >= 1 || constraint.length === 0, stiffness = isRigid ? constraint.stiffness * timeScale : constraint.stiffness * timeScale * timeScale, damping = constraint.damping * timeScale, force = Vector.mult(delta, difference * stiffness), massTotal = (bodyA ? bodyA.inverseMass : 0) + (bodyB ? bodyB.inverseMass : 0), inertiaTotal = (bodyA ? bodyA.inverseInertia : 0) + (bodyB ? bodyB.inverseInertia : 0), resistanceTotal = massTotal + inertiaTotal, torque, share, normal, normalVelocity, relativeVelocity;
            if (damping > 0) {
              var zero = Vector.create();
              normal = Vector.div(delta, currentLength);
              relativeVelocity = Vector.sub(bodyB && Vector.sub(bodyB.position, bodyB.positionPrev) || zero, bodyA && Vector.sub(bodyA.position, bodyA.positionPrev) || zero);
              normalVelocity = Vector.dot(normal, relativeVelocity);
            }
            if (bodyA && !bodyA.isStatic) {
              share = bodyA.inverseMass / massTotal;
              bodyA.constraintImpulse.x -= force.x * share;
              bodyA.constraintImpulse.y -= force.y * share;
              bodyA.position.x -= force.x * share;
              bodyA.position.y -= force.y * share;
              if (damping > 0) {
                bodyA.positionPrev.x -= damping * normal.x * normalVelocity * share;
                bodyA.positionPrev.y -= damping * normal.y * normalVelocity * share;
              }
              torque = Vector.cross(pointA, force) / resistanceTotal * Constraint._torqueDampen * bodyA.inverseInertia * (1 - constraint.angularStiffness);
              bodyA.constraintImpulse.angle -= torque;
              bodyA.angle -= torque;
            }
            if (bodyB && !bodyB.isStatic) {
              share = bodyB.inverseMass / massTotal;
              bodyB.constraintImpulse.x += force.x * share;
              bodyB.constraintImpulse.y += force.y * share;
              bodyB.position.x += force.x * share;
              bodyB.position.y += force.y * share;
              if (damping > 0) {
                bodyB.positionPrev.x += damping * normal.x * normalVelocity * share;
                bodyB.positionPrev.y += damping * normal.y * normalVelocity * share;
              }
              torque = Vector.cross(pointB, force) / resistanceTotal * Constraint._torqueDampen * bodyB.inverseInertia * (1 - constraint.angularStiffness);
              bodyB.constraintImpulse.angle += torque;
              bodyB.angle += torque;
            }
          };
          Constraint.postSolveAll = function(bodies) {
            for (var i = 0;i < bodies.length; i++) {
              var body = bodies[i], impulse = body.constraintImpulse;
              if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) {
                continue;
              }
              Sleeping.set(body, false);
              for (var j = 0;j < body.parts.length; j++) {
                var part = body.parts[j];
                Vertices.translate(part.vertices, impulse);
                if (j > 0) {
                  part.position.x += impulse.x;
                  part.position.y += impulse.y;
                }
                if (impulse.angle !== 0) {
                  Vertices.rotate(part.vertices, impulse.angle, body.position);
                  Axes.rotate(part.axes, impulse.angle);
                  if (j > 0) {
                    Vector.rotateAbout(part.position, impulse.angle, body.position, part.position);
                  }
                }
                Bounds.update(part.bounds, part.vertices, body.velocity);
              }
              impulse.angle *= Constraint._warming;
              impulse.x *= Constraint._warming;
              impulse.y *= Constraint._warming;
            }
          };
          Constraint.pointAWorld = function(constraint) {
            return {
              x: (constraint.bodyA ? constraint.bodyA.position.x : 0) + (constraint.pointA ? constraint.pointA.x : 0),
              y: (constraint.bodyA ? constraint.bodyA.position.y : 0) + (constraint.pointA ? constraint.pointA.y : 0)
            };
          };
          Constraint.pointBWorld = function(constraint) {
            return {
              x: (constraint.bodyB ? constraint.bodyB.position.x : 0) + (constraint.pointB ? constraint.pointB.x : 0),
              y: (constraint.bodyB ? constraint.bodyB.position.y : 0) + (constraint.pointB ? constraint.pointB.y : 0)
            };
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Axes = {};
        module2.exports = Axes;
        var Vector = __webpack_require__(2);
        var Common = __webpack_require__(0);
        (function() {
          Axes.fromVertices = function(vertices) {
            var axes = {};
            for (var i = 0;i < vertices.length; i++) {
              var j = (i + 1) % vertices.length, normal = Vector.normalise({
                x: vertices[j].y - vertices[i].y,
                y: vertices[i].x - vertices[j].x
              }), gradient = normal.y === 0 ? Infinity : normal.x / normal.y;
              gradient = gradient.toFixed(3).toString();
              axes[gradient] = normal;
            }
            return Common.values(axes);
          };
          Axes.rotate = function(axes, angle) {
            if (angle === 0)
              return;
            var cos = Math.cos(angle), sin = Math.sin(angle);
            for (var i = 0;i < axes.length; i++) {
              var axis = axes[i], xx;
              xx = axis.x * cos - axis.y * sin;
              axis.y = axis.x * sin + axis.y * cos;
              axis.x = xx;
            }
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Bodies = {};
        module2.exports = Bodies;
        var Vertices = __webpack_require__(3);
        var Common = __webpack_require__(0);
        var Body = __webpack_require__(4);
        var Bounds = __webpack_require__(1);
        var Vector = __webpack_require__(2);
        (function() {
          Bodies.rectangle = function(x, y, width, height, options) {
            options = options || {};
            var rectangle = {
              label: "Rectangle Body",
              position: { x, y },
              vertices: Vertices.fromPath("L 0 0 L " + width + " 0 L " + width + " " + height + " L 0 " + height)
            };
            if (options.chamfer) {
              var chamfer = options.chamfer;
              rectangle.vertices = Vertices.chamfer(rectangle.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
              delete options.chamfer;
            }
            return Body.create(Common.extend({}, rectangle, options));
          };
          Bodies.trapezoid = function(x, y, width, height, slope, options) {
            options = options || {};
            slope *= 0.5;
            var roof = (1 - slope * 2) * width;
            var x1 = width * slope, x2 = x1 + roof, x3 = x2 + x1, verticesPath;
            if (slope < 0.5) {
              verticesPath = "L 0 0 L " + x1 + " " + -height + " L " + x2 + " " + -height + " L " + x3 + " 0";
            } else {
              verticesPath = "L 0 0 L " + x2 + " " + -height + " L " + x3 + " 0";
            }
            var trapezoid = {
              label: "Trapezoid Body",
              position: { x, y },
              vertices: Vertices.fromPath(verticesPath)
            };
            if (options.chamfer) {
              var chamfer = options.chamfer;
              trapezoid.vertices = Vertices.chamfer(trapezoid.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
              delete options.chamfer;
            }
            return Body.create(Common.extend({}, trapezoid, options));
          };
          Bodies.circle = function(x, y, radius, options, maxSides) {
            options = options || {};
            var circle = {
              label: "Circle Body",
              circleRadius: radius
            };
            maxSides = maxSides || 25;
            var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));
            if (sides % 2 === 1)
              sides += 1;
            return Bodies.polygon(x, y, sides, radius, Common.extend({}, circle, options));
          };
          Bodies.polygon = function(x, y, sides, radius, options) {
            options = options || {};
            if (sides < 3)
              return Bodies.circle(x, y, radius, options);
            var theta = 2 * Math.PI / sides, path = "", offset = theta * 0.5;
            for (var i = 0;i < sides; i += 1) {
              var angle = offset + i * theta, xx = Math.cos(angle) * radius, yy = Math.sin(angle) * radius;
              path += "L " + xx.toFixed(3) + " " + yy.toFixed(3) + " ";
            }
            var polygon = {
              label: "Polygon Body",
              position: { x, y },
              vertices: Vertices.fromPath(path)
            };
            if (options.chamfer) {
              var chamfer = options.chamfer;
              polygon.vertices = Vertices.chamfer(polygon.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
              delete options.chamfer;
            }
            return Body.create(Common.extend({}, polygon, options));
          };
          Bodies.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea, removeDuplicatePoints) {
            var decomp = Common.getDecomp(), canDecomp, body, parts, isConvex, isConcave, vertices, i, j, k, v, z;
            canDecomp = Boolean(decomp && decomp.quickDecomp);
            options = options || {};
            parts = [];
            flagInternal = typeof flagInternal !== "undefined" ? flagInternal : false;
            removeCollinear = typeof removeCollinear !== "undefined" ? removeCollinear : 0.01;
            minimumArea = typeof minimumArea !== "undefined" ? minimumArea : 10;
            removeDuplicatePoints = typeof removeDuplicatePoints !== "undefined" ? removeDuplicatePoints : 0.01;
            if (!Common.isArray(vertexSets[0])) {
              vertexSets = [vertexSets];
            }
            for (v = 0;v < vertexSets.length; v += 1) {
              vertices = vertexSets[v];
              isConvex = Vertices.isConvex(vertices);
              isConcave = !isConvex;
              if (isConcave && !canDecomp) {
                Common.warnOnce("Bodies.fromVertices: Install the \'poly-decomp\' library and use Common.setDecomp or provide \'decomp\' as a global to decompose concave vertices.");
              }
              if (isConvex || !canDecomp) {
                if (isConvex) {
                  vertices = Vertices.clockwiseSort(vertices);
                } else {
                  vertices = Vertices.hull(vertices);
                }
                parts.push({
                  position: { x, y },
                  vertices
                });
              } else {
                var concave = vertices.map(function(vertex) {
                  return [vertex.x, vertex.y];
                });
                decomp.makeCCW(concave);
                if (removeCollinear !== false)
                  decomp.removeCollinearPoints(concave, removeCollinear);
                if (removeDuplicatePoints !== false && decomp.removeDuplicatePoints)
                  decomp.removeDuplicatePoints(concave, removeDuplicatePoints);
                var decomposed = decomp.quickDecomp(concave);
                for (i = 0;i < decomposed.length; i++) {
                  var chunk = decomposed[i];
                  var chunkVertices = chunk.map(function(vertices2) {
                    return {
                      x: vertices2[0],
                      y: vertices2[1]
                    };
                  });
                  if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea)
                    continue;
                  parts.push({
                    position: Vertices.centre(chunkVertices),
                    vertices: chunkVertices
                  });
                }
              }
            }
            for (i = 0;i < parts.length; i++) {
              parts[i] = Body.create(Common.extend(parts[i], options));
            }
            if (flagInternal) {
              var coincident_max_dist = 5;
              for (i = 0;i < parts.length; i++) {
                var partA = parts[i];
                for (j = i + 1;j < parts.length; j++) {
                  var partB = parts[j];
                  if (Bounds.overlaps(partA.bounds, partB.bounds)) {
                    var pav = partA.vertices, pbv = partB.vertices;
                    for (k = 0;k < partA.vertices.length; k++) {
                      for (z = 0;z < partB.vertices.length; z++) {
                        var da = Vector.magnitudeSquared(Vector.sub(pav[(k + 1) % pav.length], pbv[z])), db = Vector.magnitudeSquared(Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));
                        if (da < coincident_max_dist && db < coincident_max_dist) {
                          pav[k].isInternal = true;
                          pbv[z].isInternal = true;
                        }
                      }
                    }
                  }
                }
              }
            }
            if (parts.length > 1) {
              body = Body.create(Common.extend({ parts: parts.slice(0) }, options));
              Body.setPosition(body, { x, y });
              return body;
            } else {
              return parts[0];
            }
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Detector = {};
        module2.exports = Detector;
        var Common = __webpack_require__(0);
        var Collision = __webpack_require__(8);
        (function() {
          Detector.create = function(options) {
            var defaults = {
              bodies: [],
              pairs: null
            };
            return Common.extend(defaults, options);
          };
          Detector.setBodies = function(detector, bodies) {
            detector.bodies = bodies.slice(0);
          };
          Detector.clear = function(detector) {
            detector.bodies = [];
          };
          Detector.collisions = function(detector) {
            var collisions = [], pairs = detector.pairs, bodies = detector.bodies, bodiesLength = bodies.length, canCollide = Detector.canCollide, collides = Collision.collides, i, j;
            bodies.sort(Detector._compareBoundsX);
            for (i = 0;i < bodiesLength; i++) {
              var bodyA = bodies[i], boundsA = bodyA.bounds, boundXMax = bodyA.bounds.max.x, boundYMax = bodyA.bounds.max.y, boundYMin = bodyA.bounds.min.y, bodyAStatic = bodyA.isStatic || bodyA.isSleeping, partsALength = bodyA.parts.length, partsASingle = partsALength === 1;
              for (j = i + 1;j < bodiesLength; j++) {
                var bodyB = bodies[j], boundsB = bodyB.bounds;
                if (boundsB.min.x > boundXMax) {
                  break;
                }
                if (boundYMax < boundsB.min.y || boundYMin > boundsB.max.y) {
                  continue;
                }
                if (bodyAStatic && (bodyB.isStatic || bodyB.isSleeping)) {
                  continue;
                }
                if (!canCollide(bodyA.collisionFilter, bodyB.collisionFilter)) {
                  continue;
                }
                var partsBLength = bodyB.parts.length;
                if (partsASingle && partsBLength === 1) {
                  var collision = collides(bodyA, bodyB, pairs);
                  if (collision) {
                    collisions.push(collision);
                  }
                } else {
                  var partsAStart = partsALength > 1 ? 1 : 0, partsBStart = partsBLength > 1 ? 1 : 0;
                  for (var k = partsAStart;k < partsALength; k++) {
                    var partA = bodyA.parts[k], boundsA = partA.bounds;
                    for (var z = partsBStart;z < partsBLength; z++) {
                      var partB = bodyB.parts[z], boundsB = partB.bounds;
                      if (boundsA.min.x > boundsB.max.x || boundsA.max.x < boundsB.min.x || boundsA.max.y < boundsB.min.y || boundsA.min.y > boundsB.max.y) {
                        continue;
                      }
                      var collision = collides(partA, partB, pairs);
                      if (collision) {
                        collisions.push(collision);
                      }
                    }
                  }
                }
              }
            }
            return collisions;
          };
          Detector.canCollide = function(filterA, filterB) {
            if (filterA.group === filterB.group && filterA.group !== 0)
              return filterA.group > 0;
            return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
          };
          Detector._compareBoundsX = function(bodyA, bodyB) {
            return bodyA.bounds.min.x - bodyB.bounds.min.x;
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Mouse = {};
        module2.exports = Mouse;
        var Common = __webpack_require__(0);
        (function() {
          Mouse.create = function(element) {
            var mouse = {};
            if (!element) {
              Common.log("Mouse.create: element was undefined, defaulting to document.body", "warn");
            }
            mouse.element = element || document.body;
            mouse.absolute = { x: 0, y: 0 };
            mouse.position = { x: 0, y: 0 };
            mouse.mousedownPosition = { x: 0, y: 0 };
            mouse.mouseupPosition = { x: 0, y: 0 };
            mouse.offset = { x: 0, y: 0 };
            mouse.scale = { x: 1, y: 1 };
            mouse.wheelDelta = 0;
            mouse.button = -1;
            mouse.pixelRatio = parseInt(mouse.element.getAttribute("data-pixel-ratio"), 10) || 1;
            mouse.sourceEvents = {
              mousemove: null,
              mousedown: null,
              mouseup: null,
              mousewheel: null
            };
            mouse.mousemove = function(event) {
              var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
              if (touches) {
                mouse.button = 0;
                event.preventDefault();
              }
              mouse.absolute.x = position.x;
              mouse.absolute.y = position.y;
              mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
              mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
              mouse.sourceEvents.mousemove = event;
            };
            mouse.mousedown = function(event) {
              var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
              if (touches) {
                mouse.button = 0;
                event.preventDefault();
              } else {
                mouse.button = event.button;
              }
              mouse.absolute.x = position.x;
              mouse.absolute.y = position.y;
              mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
              mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
              mouse.mousedownPosition.x = mouse.position.x;
              mouse.mousedownPosition.y = mouse.position.y;
              mouse.sourceEvents.mousedown = event;
            };
            mouse.mouseup = function(event) {
              var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
              if (touches) {
                event.preventDefault();
              }
              mouse.button = -1;
              mouse.absolute.x = position.x;
              mouse.absolute.y = position.y;
              mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
              mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
              mouse.mouseupPosition.x = mouse.position.x;
              mouse.mouseupPosition.y = mouse.position.y;
              mouse.sourceEvents.mouseup = event;
            };
            mouse.mousewheel = function(event) {
              mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
              event.preventDefault();
            };
            Mouse.setElement(mouse, mouse.element);
            return mouse;
          };
          Mouse.setElement = function(mouse, element) {
            mouse.element = element;
            element.addEventListener("mousemove", mouse.mousemove);
            element.addEventListener("mousedown", mouse.mousedown);
            element.addEventListener("mouseup", mouse.mouseup);
            element.addEventListener("mousewheel", mouse.mousewheel);
            element.addEventListener("DOMMouseScroll", mouse.mousewheel);
            element.addEventListener("touchmove", mouse.mousemove);
            element.addEventListener("touchstart", mouse.mousedown);
            element.addEventListener("touchend", mouse.mouseup);
          };
          Mouse.clearSourceEvents = function(mouse) {
            mouse.sourceEvents.mousemove = null;
            mouse.sourceEvents.mousedown = null;
            mouse.sourceEvents.mouseup = null;
            mouse.sourceEvents.mousewheel = null;
            mouse.wheelDelta = 0;
          };
          Mouse.setOffset = function(mouse, offset) {
            mouse.offset.x = offset.x;
            mouse.offset.y = offset.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
          };
          Mouse.setScale = function(mouse, scale) {
            mouse.scale.x = scale.x;
            mouse.scale.y = scale.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
          };
          Mouse._getRelativeMousePosition = function(event, element, pixelRatio) {
            var elementBounds = element.getBoundingClientRect(), rootNode = document.documentElement || document.body.parentNode || document.body, scrollX = window.pageXOffset !== undefined ? window.pageXOffset : rootNode.scrollLeft, scrollY = window.pageYOffset !== undefined ? window.pageYOffset : rootNode.scrollTop, touches = event.changedTouches, x, y;
            if (touches) {
              x = touches[0].pageX - elementBounds.left - scrollX;
              y = touches[0].pageY - elementBounds.top - scrollY;
            } else {
              x = event.pageX - elementBounds.left - scrollX;
              y = event.pageY - elementBounds.top - scrollY;
            }
            return {
              x: x / (element.clientWidth / (element.width || element.clientWidth) * pixelRatio),
              y: y / (element.clientHeight / (element.height || element.clientHeight) * pixelRatio)
            };
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Plugin = {};
        module2.exports = Plugin;
        var Common = __webpack_require__(0);
        (function() {
          Plugin._registry = {};
          Plugin.register = function(plugin) {
            if (!Plugin.isPlugin(plugin)) {
              Common.warn("Plugin.register:", Plugin.toString(plugin), "does not implement all required fields.");
            }
            if (plugin.name in Plugin._registry) {
              var registered = Plugin._registry[plugin.name], pluginVersion = Plugin.versionParse(plugin.version).number, registeredVersion = Plugin.versionParse(registered.version).number;
              if (pluginVersion > registeredVersion) {
                Common.warn("Plugin.register:", Plugin.toString(registered), "was upgraded to", Plugin.toString(plugin));
                Plugin._registry[plugin.name] = plugin;
              } else if (pluginVersion < registeredVersion) {
                Common.warn("Plugin.register:", Plugin.toString(registered), "can not be downgraded to", Plugin.toString(plugin));
              } else if (plugin !== registered) {
                Common.warn("Plugin.register:", Plugin.toString(plugin), "is already registered to different plugin object");
              }
            } else {
              Plugin._registry[plugin.name] = plugin;
            }
            return plugin;
          };
          Plugin.resolve = function(dependency) {
            return Plugin._registry[Plugin.dependencyParse(dependency).name];
          };
          Plugin.toString = function(plugin) {
            return typeof plugin === "string" ? plugin : (plugin.name || "anonymous") + "@" + (plugin.version || plugin.range || "0.0.0");
          };
          Plugin.isPlugin = function(obj) {
            return obj && obj.name && obj.version && obj.install;
          };
          Plugin.isUsed = function(module3, name) {
            return module3.used.indexOf(name) > -1;
          };
          Plugin.isFor = function(plugin, module3) {
            var parsed = plugin.for && Plugin.dependencyParse(plugin.for);
            return !plugin.for || module3.name === parsed.name && Plugin.versionSatisfies(module3.version, parsed.range);
          };
          Plugin.use = function(module3, plugins) {
            module3.uses = (module3.uses || []).concat(plugins || []);
            if (module3.uses.length === 0) {
              Common.warn("Plugin.use:", Plugin.toString(module3), "does not specify any dependencies to install.");
              return;
            }
            var dependencies = Plugin.dependencies(module3), sortedDependencies = Common.topologicalSort(dependencies), status = [];
            for (var i = 0;i < sortedDependencies.length; i += 1) {
              if (sortedDependencies[i] === module3.name) {
                continue;
              }
              var plugin = Plugin.resolve(sortedDependencies[i]);
              if (!plugin) {
                status.push("\u274C " + sortedDependencies[i]);
                continue;
              }
              if (Plugin.isUsed(module3, plugin.name)) {
                continue;
              }
              if (!Plugin.isFor(plugin, module3)) {
                Common.warn("Plugin.use:", Plugin.toString(plugin), "is for", plugin.for, "but installed on", Plugin.toString(module3) + ".");
                plugin._warned = true;
              }
              if (plugin.install) {
                plugin.install(module3);
              } else {
                Common.warn("Plugin.use:", Plugin.toString(plugin), "does not specify an install function.");
                plugin._warned = true;
              }
              if (plugin._warned) {
                status.push("\uD83D\uDD36 " + Plugin.toString(plugin));
                delete plugin._warned;
              } else {
                status.push("\u2705 " + Plugin.toString(plugin));
              }
              module3.used.push(plugin.name);
            }
            if (status.length > 0) {
              Common.info(status.join("  "));
            }
          };
          Plugin.dependencies = function(module3, tracked) {
            var parsedBase = Plugin.dependencyParse(module3), name = parsedBase.name;
            tracked = tracked || {};
            if (name in tracked) {
              return;
            }
            module3 = Plugin.resolve(module3) || module3;
            tracked[name] = Common.map(module3.uses || [], function(dependency) {
              if (Plugin.isPlugin(dependency)) {
                Plugin.register(dependency);
              }
              var parsed = Plugin.dependencyParse(dependency), resolved = Plugin.resolve(dependency);
              if (resolved && !Plugin.versionSatisfies(resolved.version, parsed.range)) {
                Common.warn("Plugin.dependencies:", Plugin.toString(resolved), "does not satisfy", Plugin.toString(parsed), "used by", Plugin.toString(parsedBase) + ".");
                resolved._warned = true;
                module3._warned = true;
              } else if (!resolved) {
                Common.warn("Plugin.dependencies:", Plugin.toString(dependency), "used by", Plugin.toString(parsedBase), "could not be resolved.");
                module3._warned = true;
              }
              return parsed.name;
            });
            for (var i = 0;i < tracked[name].length; i += 1) {
              Plugin.dependencies(tracked[name][i], tracked);
            }
            return tracked;
          };
          Plugin.dependencyParse = function(dependency) {
            if (Common.isString(dependency)) {
              var pattern = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
              if (!pattern.test(dependency)) {
                Common.warn("Plugin.dependencyParse:", dependency, "is not a valid dependency string.");
              }
              return {
                name: dependency.split("@")[0],
                range: dependency.split("@")[1] || "*"
              };
            }
            return {
              name: dependency.name,
              range: dependency.range || dependency.version
            };
          };
          Plugin.versionParse = function(range) {
            var pattern = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
            if (!pattern.test(range)) {
              Common.warn("Plugin.versionParse:", range, "is not a valid version or range.");
            }
            var parts = pattern.exec(range);
            var major = Number(parts[4]);
            var minor = Number(parts[5]);
            var patch = Number(parts[6]);
            return {
              isRange: Boolean(parts[1] || parts[2]),
              version: parts[3],
              range,
              operator: parts[1] || parts[2] || "",
              major,
              minor,
              patch,
              parts: [major, minor, patch],
              prerelease: parts[7],
              number: major * 1e8 + minor * 1e4 + patch
            };
          };
          Plugin.versionSatisfies = function(version, range) {
            range = range || "*";
            var r = Plugin.versionParse(range), v = Plugin.versionParse(version);
            if (r.isRange) {
              if (r.operator === "*" || version === "*") {
                return true;
              }
              if (r.operator === ">") {
                return v.number > r.number;
              }
              if (r.operator === ">=") {
                return v.number >= r.number;
              }
              if (r.operator === "~") {
                return v.major === r.major && v.minor === r.minor && v.patch >= r.patch;
              }
              if (r.operator === "^") {
                if (r.major > 0) {
                  return v.major === r.major && v.number >= r.number;
                }
                if (r.minor > 0) {
                  return v.minor === r.minor && v.patch >= r.patch;
                }
                return v.patch === r.patch;
              }
            }
            return version === range || version === "*";
          };
        })();
      },
      function(module2, exports2) {
        var Contact = {};
        module2.exports = Contact;
        (function() {
          Contact.create = function(vertex) {
            return {
              vertex,
              normalImpulse: 0,
              tangentImpulse: 0
            };
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Engine = {};
        module2.exports = Engine;
        var Sleeping = __webpack_require__(7);
        var Resolver = __webpack_require__(18);
        var Detector = __webpack_require__(13);
        var Pairs = __webpack_require__(19);
        var Events = __webpack_require__(5);
        var Composite = __webpack_require__(6);
        var Constraint = __webpack_require__(10);
        var Common = __webpack_require__(0);
        var Body = __webpack_require__(4);
        (function() {
          Engine.create = function(options) {
            options = options || {};
            var defaults = {
              positionIterations: 6,
              velocityIterations: 4,
              constraintIterations: 2,
              enableSleeping: false,
              events: [],
              plugin: {},
              gravity: {
                x: 0,
                y: 1,
                scale: 0.001
              },
              timing: {
                timestamp: 0,
                timeScale: 1,
                lastDelta: 0,
                lastElapsed: 0
              }
            };
            var engine = Common.extend(defaults, options);
            engine.world = options.world || Composite.create({ label: "World" });
            engine.pairs = options.pairs || Pairs.create();
            engine.detector = options.detector || Detector.create();
            engine.grid = { buckets: [] };
            engine.world.gravity = engine.gravity;
            engine.broadphase = engine.grid;
            engine.metrics = {};
            return engine;
          };
          Engine.update = function(engine, delta) {
            var startTime = Common.now();
            var { world, detector, pairs, timing } = engine, timestamp = timing.timestamp, i;
            delta = typeof delta !== "undefined" ? delta : Common._baseDelta;
            delta *= timing.timeScale;
            timing.timestamp += delta;
            timing.lastDelta = delta;
            var event = {
              timestamp: timing.timestamp,
              delta
            };
            Events.trigger(engine, "beforeUpdate", event);
            var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world);
            if (world.isModified) {
              Detector.setBodies(detector, allBodies);
              Composite.setModified(world, false, false, true);
            }
            if (engine.enableSleeping)
              Sleeping.update(allBodies, delta);
            Engine._bodiesApplyGravity(allBodies, engine.gravity);
            if (delta > 0) {
              Engine._bodiesUpdate(allBodies, delta);
            }
            Constraint.preSolveAll(allBodies);
            for (i = 0;i < engine.constraintIterations; i++) {
              Constraint.solveAll(allConstraints, delta);
            }
            Constraint.postSolveAll(allBodies);
            detector.pairs = engine.pairs;
            var collisions = Detector.collisions(detector);
            Pairs.update(pairs, collisions, timestamp);
            if (engine.enableSleeping)
              Sleeping.afterCollisions(pairs.list);
            if (pairs.collisionStart.length > 0)
              Events.trigger(engine, "collisionStart", { pairs: pairs.collisionStart });
            var positionDamping = Common.clamp(20 / engine.positionIterations, 0, 1);
            Resolver.preSolvePosition(pairs.list);
            for (i = 0;i < engine.positionIterations; i++) {
              Resolver.solvePosition(pairs.list, delta, positionDamping);
            }
            Resolver.postSolvePosition(allBodies);
            Constraint.preSolveAll(allBodies);
            for (i = 0;i < engine.constraintIterations; i++) {
              Constraint.solveAll(allConstraints, delta);
            }
            Constraint.postSolveAll(allBodies);
            Resolver.preSolveVelocity(pairs.list);
            for (i = 0;i < engine.velocityIterations; i++) {
              Resolver.solveVelocity(pairs.list, delta);
            }
            Engine._bodiesUpdateVelocities(allBodies);
            if (pairs.collisionActive.length > 0)
              Events.trigger(engine, "collisionActive", { pairs: pairs.collisionActive });
            if (pairs.collisionEnd.length > 0)
              Events.trigger(engine, "collisionEnd", { pairs: pairs.collisionEnd });
            Engine._bodiesClearForces(allBodies);
            Events.trigger(engine, "afterUpdate", event);
            engine.timing.lastElapsed = Common.now() - startTime;
            return engine;
          };
          Engine.merge = function(engineA, engineB) {
            Common.extend(engineA, engineB);
            if (engineB.world) {
              engineA.world = engineB.world;
              Engine.clear(engineA);
              var bodies = Composite.allBodies(engineA.world);
              for (var i = 0;i < bodies.length; i++) {
                var body = bodies[i];
                Sleeping.set(body, false);
                body.id = Common.nextId();
              }
            }
          };
          Engine.clear = function(engine) {
            Pairs.clear(engine.pairs);
            Detector.clear(engine.detector);
          };
          Engine._bodiesClearForces = function(bodies) {
            var bodiesLength = bodies.length;
            for (var i = 0;i < bodiesLength; i++) {
              var body = bodies[i];
              body.force.x = 0;
              body.force.y = 0;
              body.torque = 0;
            }
          };
          Engine._bodiesApplyGravity = function(bodies, gravity) {
            var gravityScale = typeof gravity.scale !== "undefined" ? gravity.scale : 0.001, bodiesLength = bodies.length;
            if (gravity.x === 0 && gravity.y === 0 || gravityScale === 0) {
              return;
            }
            for (var i = 0;i < bodiesLength; i++) {
              var body = bodies[i];
              if (body.isStatic || body.isSleeping)
                continue;
              body.force.y += body.mass * gravity.y * gravityScale;
              body.force.x += body.mass * gravity.x * gravityScale;
            }
          };
          Engine._bodiesUpdate = function(bodies, delta) {
            var bodiesLength = bodies.length;
            for (var i = 0;i < bodiesLength; i++) {
              var body = bodies[i];
              if (body.isStatic || body.isSleeping)
                continue;
              Body.update(body, delta);
            }
          };
          Engine._bodiesUpdateVelocities = function(bodies) {
            var bodiesLength = bodies.length;
            for (var i = 0;i < bodiesLength; i++) {
              Body.updateVelocities(bodies[i]);
            }
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Resolver = {};
        module2.exports = Resolver;
        var Vertices = __webpack_require__(3);
        var Common = __webpack_require__(0);
        var Bounds = __webpack_require__(1);
        (function() {
          Resolver._restingThresh = 2;
          Resolver._restingThreshTangent = Math.sqrt(6);
          Resolver._positionDampen = 0.9;
          Resolver._positionWarming = 0.8;
          Resolver._frictionNormalMultiplier = 5;
          Resolver._frictionMaxStatic = Number.MAX_VALUE;
          Resolver.preSolvePosition = function(pairs) {
            var i, pair, activeCount, pairsLength = pairs.length;
            for (i = 0;i < pairsLength; i++) {
              pair = pairs[i];
              if (!pair.isActive)
                continue;
              activeCount = pair.activeContacts.length;
              pair.collision.parentA.totalContacts += activeCount;
              pair.collision.parentB.totalContacts += activeCount;
            }
          };
          Resolver.solvePosition = function(pairs, delta, damping) {
            var i, pair, collision, bodyA, bodyB, normal, contactShare, positionImpulse, positionDampen = Resolver._positionDampen * (damping || 1), slopDampen = Common.clamp(delta / Common._baseDelta, 0, 1), pairsLength = pairs.length;
            for (i = 0;i < pairsLength; i++) {
              pair = pairs[i];
              if (!pair.isActive || pair.isSensor)
                continue;
              collision = pair.collision;
              bodyA = collision.parentA;
              bodyB = collision.parentB;
              normal = collision.normal;
              pair.separation = normal.x * (bodyB.positionImpulse.x + collision.penetration.x - bodyA.positionImpulse.x) + normal.y * (bodyB.positionImpulse.y + collision.penetration.y - bodyA.positionImpulse.y);
            }
            for (i = 0;i < pairsLength; i++) {
              pair = pairs[i];
              if (!pair.isActive || pair.isSensor)
                continue;
              collision = pair.collision;
              bodyA = collision.parentA;
              bodyB = collision.parentB;
              normal = collision.normal;
              positionImpulse = pair.separation - pair.slop * slopDampen;
              if (bodyA.isStatic || bodyB.isStatic)
                positionImpulse *= 2;
              if (!(bodyA.isStatic || bodyA.isSleeping)) {
                contactShare = positionDampen / bodyA.totalContacts;
                bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;
                bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;
              }
              if (!(bodyB.isStatic || bodyB.isSleeping)) {
                contactShare = positionDampen / bodyB.totalContacts;
                bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;
                bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;
              }
            }
          };
          Resolver.postSolvePosition = function(bodies) {
            var positionWarming = Resolver._positionWarming, bodiesLength = bodies.length, verticesTranslate = Vertices.translate, boundsUpdate = Bounds.update;
            for (var i = 0;i < bodiesLength; i++) {
              var body = bodies[i], positionImpulse = body.positionImpulse, positionImpulseX = positionImpulse.x, positionImpulseY = positionImpulse.y, velocity = body.velocity;
              body.totalContacts = 0;
              if (positionImpulseX !== 0 || positionImpulseY !== 0) {
                for (var j = 0;j < body.parts.length; j++) {
                  var part = body.parts[j];
                  verticesTranslate(part.vertices, positionImpulse);
                  boundsUpdate(part.bounds, part.vertices, velocity);
                  part.position.x += positionImpulseX;
                  part.position.y += positionImpulseY;
                }
                body.positionPrev.x += positionImpulseX;
                body.positionPrev.y += positionImpulseY;
                if (positionImpulseX * velocity.x + positionImpulseY * velocity.y < 0) {
                  positionImpulse.x = 0;
                  positionImpulse.y = 0;
                } else {
                  positionImpulse.x *= positionWarming;
                  positionImpulse.y *= positionWarming;
                }
              }
            }
          };
          Resolver.preSolveVelocity = function(pairs) {
            var pairsLength = pairs.length, i, j;
            for (i = 0;i < pairsLength; i++) {
              var pair = pairs[i];
              if (!pair.isActive || pair.isSensor)
                continue;
              var contacts = pair.activeContacts, contactsLength = contacts.length, collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, normal = collision.normal, tangent = collision.tangent;
              for (j = 0;j < contactsLength; j++) {
                var contact = contacts[j], contactVertex = contact.vertex, normalImpulse = contact.normalImpulse, tangentImpulse = contact.tangentImpulse;
                if (normalImpulse !== 0 || tangentImpulse !== 0) {
                  var impulseX = normal.x * normalImpulse + tangent.x * tangentImpulse, impulseY = normal.y * normalImpulse + tangent.y * tangentImpulse;
                  if (!(bodyA.isStatic || bodyA.isSleeping)) {
                    bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                    bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                    bodyA.anglePrev += bodyA.inverseInertia * ((contactVertex.x - bodyA.position.x) * impulseY - (contactVertex.y - bodyA.position.y) * impulseX);
                  }
                  if (!(bodyB.isStatic || bodyB.isSleeping)) {
                    bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                    bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                    bodyB.anglePrev -= bodyB.inverseInertia * ((contactVertex.x - bodyB.position.x) * impulseY - (contactVertex.y - bodyB.position.y) * impulseX);
                  }
                }
              }
            }
          };
          Resolver.solveVelocity = function(pairs, delta) {
            var timeScale = delta / Common._baseDelta, timeScaleSquared = timeScale * timeScale, timeScaleCubed = timeScaleSquared * timeScale, restingThresh = -Resolver._restingThresh * timeScale, restingThreshTangent = Resolver._restingThreshTangent, frictionNormalMultiplier = Resolver._frictionNormalMultiplier * timeScale, frictionMaxStatic = Resolver._frictionMaxStatic, pairsLength = pairs.length, tangentImpulse, maxFriction, i, j;
            for (i = 0;i < pairsLength; i++) {
              var pair = pairs[i];
              if (!pair.isActive || pair.isSensor)
                continue;
              var collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, bodyAVelocity = bodyA.velocity, bodyBVelocity = bodyB.velocity, normalX = collision.normal.x, normalY = collision.normal.y, tangentX = collision.tangent.x, tangentY = collision.tangent.y, contacts = pair.activeContacts, contactsLength = contacts.length, contactShare = 1 / contactsLength, inverseMassTotal = bodyA.inverseMass + bodyB.inverseMass, friction = pair.friction * pair.frictionStatic * frictionNormalMultiplier;
              bodyAVelocity.x = bodyA.position.x - bodyA.positionPrev.x;
              bodyAVelocity.y = bodyA.position.y - bodyA.positionPrev.y;
              bodyBVelocity.x = bodyB.position.x - bodyB.positionPrev.x;
              bodyBVelocity.y = bodyB.position.y - bodyB.positionPrev.y;
              bodyA.angularVelocity = bodyA.angle - bodyA.anglePrev;
              bodyB.angularVelocity = bodyB.angle - bodyB.anglePrev;
              for (j = 0;j < contactsLength; j++) {
                var contact = contacts[j], contactVertex = contact.vertex;
                var offsetAX = contactVertex.x - bodyA.position.x, offsetAY = contactVertex.y - bodyA.position.y, offsetBX = contactVertex.x - bodyB.position.x, offsetBY = contactVertex.y - bodyB.position.y;
                var velocityPointAX = bodyAVelocity.x - offsetAY * bodyA.angularVelocity, velocityPointAY = bodyAVelocity.y + offsetAX * bodyA.angularVelocity, velocityPointBX = bodyBVelocity.x - offsetBY * bodyB.angularVelocity, velocityPointBY = bodyBVelocity.y + offsetBX * bodyB.angularVelocity;
                var relativeVelocityX = velocityPointAX - velocityPointBX, relativeVelocityY = velocityPointAY - velocityPointBY;
                var normalVelocity = normalX * relativeVelocityX + normalY * relativeVelocityY, tangentVelocity = tangentX * relativeVelocityX + tangentY * relativeVelocityY;
                var normalOverlap = pair.separation + normalVelocity;
                var normalForce = Math.min(normalOverlap, 1);
                normalForce = normalOverlap < 0 ? 0 : normalForce;
                var frictionLimit = normalForce * friction;
                if (tangentVelocity < -frictionLimit || tangentVelocity > frictionLimit) {
                  maxFriction = tangentVelocity > 0 ? tangentVelocity : -tangentVelocity;
                  tangentImpulse = pair.friction * (tangentVelocity > 0 ? 1 : -1) * timeScaleCubed;
                  if (tangentImpulse < -maxFriction) {
                    tangentImpulse = -maxFriction;
                  } else if (tangentImpulse > maxFriction) {
                    tangentImpulse = maxFriction;
                  }
                } else {
                  tangentImpulse = tangentVelocity;
                  maxFriction = frictionMaxStatic;
                }
                var oAcN = offsetAX * normalY - offsetAY * normalX, oBcN = offsetBX * normalY - offsetBY * normalX, share = contactShare / (inverseMassTotal + bodyA.inverseInertia * oAcN * oAcN + bodyB.inverseInertia * oBcN * oBcN);
                var normalImpulse = (1 + pair.restitution) * normalVelocity * share;
                tangentImpulse *= share;
                if (normalVelocity < restingThresh) {
                  contact.normalImpulse = 0;
                } else {
                  var contactNormalImpulse = contact.normalImpulse;
                  contact.normalImpulse += normalImpulse;
                  if (contact.normalImpulse > 0)
                    contact.normalImpulse = 0;
                  normalImpulse = contact.normalImpulse - contactNormalImpulse;
                }
                if (tangentVelocity < -restingThreshTangent || tangentVelocity > restingThreshTangent) {
                  contact.tangentImpulse = 0;
                } else {
                  var contactTangentImpulse = contact.tangentImpulse;
                  contact.tangentImpulse += tangentImpulse;
                  if (contact.tangentImpulse < -maxFriction)
                    contact.tangentImpulse = -maxFriction;
                  if (contact.tangentImpulse > maxFriction)
                    contact.tangentImpulse = maxFriction;
                  tangentImpulse = contact.tangentImpulse - contactTangentImpulse;
                }
                var impulseX = normalX * normalImpulse + tangentX * tangentImpulse, impulseY = normalY * normalImpulse + tangentY * tangentImpulse;
                if (!(bodyA.isStatic || bodyA.isSleeping)) {
                  bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                  bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                  bodyA.anglePrev += (offsetAX * impulseY - offsetAY * impulseX) * bodyA.inverseInertia;
                }
                if (!(bodyB.isStatic || bodyB.isSleeping)) {
                  bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                  bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                  bodyB.anglePrev -= (offsetBX * impulseY - offsetBY * impulseX) * bodyB.inverseInertia;
                }
              }
            }
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Pairs = {};
        module2.exports = Pairs;
        var Pair = __webpack_require__(9);
        var Common = __webpack_require__(0);
        (function() {
          Pairs.create = function(options) {
            return Common.extend({
              table: {},
              list: [],
              collisionStart: [],
              collisionActive: [],
              collisionEnd: []
            }, options);
          };
          Pairs.update = function(pairs, collisions, timestamp) {
            var pairsList = pairs.list, pairsListLength = pairsList.length, pairsTable = pairs.table, collisionsLength = collisions.length, collisionStart = pairs.collisionStart, collisionEnd = pairs.collisionEnd, collisionActive = pairs.collisionActive, collision, pairIndex, pair, i;
            collisionStart.length = 0;
            collisionEnd.length = 0;
            collisionActive.length = 0;
            for (i = 0;i < pairsListLength; i++) {
              pairsList[i].confirmedActive = false;
            }
            for (i = 0;i < collisionsLength; i++) {
              collision = collisions[i];
              pair = collision.pair;
              if (pair) {
                if (pair.isActive) {
                  collisionActive.push(pair);
                } else {
                  collisionStart.push(pair);
                }
                Pair.update(pair, collision, timestamp);
                pair.confirmedActive = true;
              } else {
                pair = Pair.create(collision, timestamp);
                pairsTable[pair.id] = pair;
                collisionStart.push(pair);
                pairsList.push(pair);
              }
            }
            var removePairIndex = [];
            pairsListLength = pairsList.length;
            for (i = 0;i < pairsListLength; i++) {
              pair = pairsList[i];
              if (!pair.confirmedActive) {
                Pair.setActive(pair, false, timestamp);
                collisionEnd.push(pair);
                if (!pair.collision.bodyA.isSleeping && !pair.collision.bodyB.isSleeping) {
                  removePairIndex.push(i);
                }
              }
            }
            for (i = 0;i < removePairIndex.length; i++) {
              pairIndex = removePairIndex[i] - i;
              pair = pairsList[pairIndex];
              pairsList.splice(pairIndex, 1);
              delete pairsTable[pair.id];
            }
          };
          Pairs.clear = function(pairs) {
            pairs.table = {};
            pairs.list.length = 0;
            pairs.collisionStart.length = 0;
            pairs.collisionActive.length = 0;
            pairs.collisionEnd.length = 0;
            return pairs;
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Matter = module2.exports = __webpack_require__(21);
        Matter.Axes = __webpack_require__(11);
        Matter.Bodies = __webpack_require__(12);
        Matter.Body = __webpack_require__(4);
        Matter.Bounds = __webpack_require__(1);
        Matter.Collision = __webpack_require__(8);
        Matter.Common = __webpack_require__(0);
        Matter.Composite = __webpack_require__(6);
        Matter.Composites = __webpack_require__(22);
        Matter.Constraint = __webpack_require__(10);
        Matter.Contact = __webpack_require__(16);
        Matter.Detector = __webpack_require__(13);
        Matter.Engine = __webpack_require__(17);
        Matter.Events = __webpack_require__(5);
        Matter.Grid = __webpack_require__(23);
        Matter.Mouse = __webpack_require__(14);
        Matter.MouseConstraint = __webpack_require__(24);
        Matter.Pair = __webpack_require__(9);
        Matter.Pairs = __webpack_require__(19);
        Matter.Plugin = __webpack_require__(15);
        Matter.Query = __webpack_require__(25);
        Matter.Render = __webpack_require__(26);
        Matter.Resolver = __webpack_require__(18);
        Matter.Runner = __webpack_require__(27);
        Matter.SAT = __webpack_require__(28);
        Matter.Sleeping = __webpack_require__(7);
        Matter.Svg = __webpack_require__(29);
        Matter.Vector = __webpack_require__(2);
        Matter.Vertices = __webpack_require__(3);
        Matter.World = __webpack_require__(30);
        Matter.Engine.run = Matter.Runner.run;
        Matter.Common.deprecated(Matter.Engine, "run", "Engine.run \u27A4 use Matter.Runner.run(engine) instead");
      },
      function(module2, exports2, __webpack_require__) {
        var Matter = {};
        module2.exports = Matter;
        var Plugin = __webpack_require__(15);
        var Common = __webpack_require__(0);
        (function() {
          Matter.name = "matter-js";
          Matter.version = "0.19.0";
          Matter.uses = [];
          Matter.used = [];
          Matter.use = function() {
            Plugin.use(Matter, Array.prototype.slice.call(arguments));
          };
          Matter.before = function(path, func) {
            path = path.replace(/^Matter./, "");
            return Common.chainPathBefore(Matter, path, func);
          };
          Matter.after = function(path, func) {
            path = path.replace(/^Matter./, "");
            return Common.chainPathAfter(Matter, path, func);
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Composites = {};
        module2.exports = Composites;
        var Composite = __webpack_require__(6);
        var Constraint = __webpack_require__(10);
        var Common = __webpack_require__(0);
        var Body = __webpack_require__(4);
        var Bodies = __webpack_require__(12);
        var deprecated = Common.deprecated;
        (function() {
          Composites.stack = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
            var stack = Composite.create({ label: "Stack" }), x = xx, y = yy, lastBody, i = 0;
            for (var row = 0;row < rows; row++) {
              var maxHeight = 0;
              for (var column = 0;column < columns; column++) {
                var body = callback(x, y, column, row, lastBody, i);
                if (body) {
                  var bodyHeight = body.bounds.max.y - body.bounds.min.y, bodyWidth = body.bounds.max.x - body.bounds.min.x;
                  if (bodyHeight > maxHeight)
                    maxHeight = bodyHeight;
                  Body.translate(body, { x: bodyWidth * 0.5, y: bodyHeight * 0.5 });
                  x = body.bounds.max.x + columnGap;
                  Composite.addBody(stack, body);
                  lastBody = body;
                  i += 1;
                } else {
                  x += columnGap;
                }
              }
              y += maxHeight + rowGap;
              x = xx;
            }
            return stack;
          };
          Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
            var bodies = composite.bodies;
            for (var i = 1;i < bodies.length; i++) {
              var bodyA = bodies[i - 1], bodyB = bodies[i], bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y, bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y, bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;
              var defaults = {
                bodyA,
                pointA: { x: bodyAWidth * xOffsetA, y: bodyAHeight * yOffsetA },
                bodyB,
                pointB: { x: bodyBWidth * xOffsetB, y: bodyBHeight * yOffsetB }
              };
              var constraint = Common.extend(defaults, options);
              Composite.addConstraint(composite, Constraint.create(constraint));
            }
            composite.label += " Chain";
            return composite;
          };
          Composites.mesh = function(composite, columns, rows, crossBrace, options) {
            var bodies = composite.bodies, row, col, bodyA, bodyB, bodyC;
            for (row = 0;row < rows; row++) {
              for (col = 1;col < columns; col++) {
                bodyA = bodies[col - 1 + row * columns];
                bodyB = bodies[col + row * columns];
                Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA, bodyB }, options)));
              }
              if (row > 0) {
                for (col = 0;col < columns; col++) {
                  bodyA = bodies[col + (row - 1) * columns];
                  bodyB = bodies[col + row * columns];
                  Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA, bodyB }, options)));
                  if (crossBrace && col > 0) {
                    bodyC = bodies[col - 1 + (row - 1) * columns];
                    Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB }, options)));
                  }
                  if (crossBrace && col < columns - 1) {
                    bodyC = bodies[col + 1 + (row - 1) * columns];
                    Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB }, options)));
                  }
                }
              }
            }
            composite.label += " Mesh";
            return composite;
          };
          Composites.pyramid = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
            return Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y, column, row, lastBody, i) {
              var actualRows = Math.min(rows, Math.ceil(columns / 2)), lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;
              if (row > actualRows)
                return;
              row = actualRows - row;
              var start = row, end = columns - 1 - row;
              if (column < start || column > end)
                return;
              if (i === 1) {
                Body.translate(lastBody, { x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth, y: 0 });
              }
              var xOffset = lastBody ? column * lastBodyWidth : 0;
              return callback(xx + xOffset + column * columnGap, y, column, row, lastBody, i);
            });
          };
          Composites.newtonsCradle = function(xx, yy, number, size, length) {
            var newtonsCradle = Composite.create({ label: "Newtons Cradle" });
            for (var i = 0;i < number; i++) {
              var separation = 1.9, circle = Bodies.circle(xx + i * (size * separation), yy + length, size, { inertia: Infinity, restitution: 1, friction: 0, frictionAir: 0.0001, slop: 1 }), constraint = Constraint.create({ pointA: { x: xx + i * (size * separation), y: yy }, bodyB: circle });
              Composite.addBody(newtonsCradle, circle);
              Composite.addConstraint(newtonsCradle, constraint);
            }
            return newtonsCradle;
          };
          deprecated(Composites, "newtonsCradle", "Composites.newtonsCradle \u27A4 moved to newtonsCradle example");
          Composites.car = function(xx, yy, width, height, wheelSize) {
            var group = Body.nextGroup(true), wheelBase = 20, wheelAOffset = -width * 0.5 + wheelBase, wheelBOffset = width * 0.5 - wheelBase, wheelYOffset = 0;
            var car = Composite.create({ label: "Car" }), body = Bodies.rectangle(xx, yy, width, height, {
              collisionFilter: {
                group
              },
              chamfer: {
                radius: height * 0.5
              },
              density: 0.0002
            });
            var wheelA = Bodies.circle(xx + wheelAOffset, yy + wheelYOffset, wheelSize, {
              collisionFilter: {
                group
              },
              friction: 0.8
            });
            var wheelB = Bodies.circle(xx + wheelBOffset, yy + wheelYOffset, wheelSize, {
              collisionFilter: {
                group
              },
              friction: 0.8
            });
            var axelA = Constraint.create({
              bodyB: body,
              pointB: { x: wheelAOffset, y: wheelYOffset },
              bodyA: wheelA,
              stiffness: 1,
              length: 0
            });
            var axelB = Constraint.create({
              bodyB: body,
              pointB: { x: wheelBOffset, y: wheelYOffset },
              bodyA: wheelB,
              stiffness: 1,
              length: 0
            });
            Composite.addBody(car, body);
            Composite.addBody(car, wheelA);
            Composite.addBody(car, wheelB);
            Composite.addConstraint(car, axelA);
            Composite.addConstraint(car, axelB);
            return car;
          };
          deprecated(Composites, "car", "Composites.car \u27A4 moved to car example");
          Composites.softBody = function(xx, yy, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
            particleOptions = Common.extend({ inertia: Infinity }, particleOptions);
            constraintOptions = Common.extend({ stiffness: 0.2, render: { type: "line", anchors: false } }, constraintOptions);
            var softBody = Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y) {
              return Bodies.circle(x, y, particleRadius, particleOptions);
            });
            Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);
            softBody.label = "Soft Body";
            return softBody;
          };
          deprecated(Composites, "softBody", "Composites.softBody \u27A4 moved to softBody and cloth examples");
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Grid = {};
        module2.exports = Grid;
        var Pair = __webpack_require__(9);
        var Common = __webpack_require__(0);
        var deprecated = Common.deprecated;
        (function() {
          Grid.create = function(options) {
            var defaults = {
              buckets: {},
              pairs: {},
              pairsList: [],
              bucketWidth: 48,
              bucketHeight: 48
            };
            return Common.extend(defaults, options);
          };
          Grid.update = function(grid, bodies, engine, forceUpdate) {
            var i, col, row, world = engine.world, buckets = grid.buckets, bucket, bucketId, gridChanged = false;
            for (i = 0;i < bodies.length; i++) {
              var body = bodies[i];
              if (body.isSleeping && !forceUpdate)
                continue;
              if (world.bounds && (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y))
                continue;
              var newRegion = Grid._getRegion(grid, body);
              if (!body.region || newRegion.id !== body.region.id || forceUpdate) {
                if (!body.region || forceUpdate)
                  body.region = newRegion;
                var union = Grid._regionUnion(newRegion, body.region);
                for (col = union.startCol;col <= union.endCol; col++) {
                  for (row = union.startRow;row <= union.endRow; row++) {
                    bucketId = Grid._getBucketId(col, row);
                    bucket = buckets[bucketId];
                    var isInsideNewRegion = col >= newRegion.startCol && col <= newRegion.endCol && row >= newRegion.startRow && row <= newRegion.endRow;
                    var isInsideOldRegion = col >= body.region.startCol && col <= body.region.endCol && row >= body.region.startRow && row <= body.region.endRow;
                    if (!isInsideNewRegion && isInsideOldRegion) {
                      if (isInsideOldRegion) {
                        if (bucket)
                          Grid._bucketRemoveBody(grid, bucket, body);
                      }
                    }
                    if (body.region === newRegion || isInsideNewRegion && !isInsideOldRegion || forceUpdate) {
                      if (!bucket)
                        bucket = Grid._createBucket(buckets, bucketId);
                      Grid._bucketAddBody(grid, bucket, body);
                    }
                  }
                }
                body.region = newRegion;
                gridChanged = true;
              }
            }
            if (gridChanged)
              grid.pairsList = Grid._createActivePairsList(grid);
          };
          deprecated(Grid, "update", "Grid.update \u27A4 replaced by Matter.Detector");
          Grid.clear = function(grid) {
            grid.buckets = {};
            grid.pairs = {};
            grid.pairsList = [];
          };
          deprecated(Grid, "clear", "Grid.clear \u27A4 replaced by Matter.Detector");
          Grid._regionUnion = function(regionA, regionB) {
            var startCol = Math.min(regionA.startCol, regionB.startCol), endCol = Math.max(regionA.endCol, regionB.endCol), startRow = Math.min(regionA.startRow, regionB.startRow), endRow = Math.max(regionA.endRow, regionB.endRow);
            return Grid._createRegion(startCol, endCol, startRow, endRow);
          };
          Grid._getRegion = function(grid, body) {
            var bounds = body.bounds, startCol = Math.floor(bounds.min.x / grid.bucketWidth), endCol = Math.floor(bounds.max.x / grid.bucketWidth), startRow = Math.floor(bounds.min.y / grid.bucketHeight), endRow = Math.floor(bounds.max.y / grid.bucketHeight);
            return Grid._createRegion(startCol, endCol, startRow, endRow);
          };
          Grid._createRegion = function(startCol, endCol, startRow, endRow) {
            return {
              id: startCol + "," + endCol + "," + startRow + "," + endRow,
              startCol,
              endCol,
              startRow,
              endRow
            };
          };
          Grid._getBucketId = function(column, row) {
            return "C" + column + "R" + row;
          };
          Grid._createBucket = function(buckets, bucketId) {
            var bucket = buckets[bucketId] = [];
            return bucket;
          };
          Grid._bucketAddBody = function(grid, bucket, body) {
            var gridPairs = grid.pairs, pairId = Pair.id, bucketLength = bucket.length, i;
            for (i = 0;i < bucketLength; i++) {
              var bodyB = bucket[i];
              if (body.id === bodyB.id || body.isStatic && bodyB.isStatic)
                continue;
              var id = pairId(body, bodyB), pair = gridPairs[id];
              if (pair) {
                pair[2] += 1;
              } else {
                gridPairs[id] = [body, bodyB, 1];
              }
            }
            bucket.push(body);
          };
          Grid._bucketRemoveBody = function(grid, bucket, body) {
            var gridPairs = grid.pairs, pairId = Pair.id, i;
            bucket.splice(Common.indexOf(bucket, body), 1);
            var bucketLength = bucket.length;
            for (i = 0;i < bucketLength; i++) {
              var pair = gridPairs[pairId(body, bucket[i])];
              if (pair)
                pair[2] -= 1;
            }
          };
          Grid._createActivePairsList = function(grid) {
            var pair, gridPairs = grid.pairs, pairKeys = Common.keys(gridPairs), pairKeysLength = pairKeys.length, pairs = [], k;
            for (k = 0;k < pairKeysLength; k++) {
              pair = gridPairs[pairKeys[k]];
              if (pair[2] > 0) {
                pairs.push(pair);
              } else {
                delete gridPairs[pairKeys[k]];
              }
            }
            return pairs;
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var MouseConstraint = {};
        module2.exports = MouseConstraint;
        var Vertices = __webpack_require__(3);
        var Sleeping = __webpack_require__(7);
        var Mouse = __webpack_require__(14);
        var Events = __webpack_require__(5);
        var Detector = __webpack_require__(13);
        var Constraint = __webpack_require__(10);
        var Composite = __webpack_require__(6);
        var Common = __webpack_require__(0);
        var Bounds = __webpack_require__(1);
        (function() {
          MouseConstraint.create = function(engine, options) {
            var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);
            if (!mouse) {
              if (engine && engine.render && engine.render.canvas) {
                mouse = Mouse.create(engine.render.canvas);
              } else if (options && options.element) {
                mouse = Mouse.create(options.element);
              } else {
                mouse = Mouse.create();
                Common.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected");
              }
            }
            var constraint = Constraint.create({
              label: "Mouse Constraint",
              pointA: mouse.position,
              pointB: { x: 0, y: 0 },
              length: 0.01,
              stiffness: 0.1,
              angularStiffness: 1,
              render: {
                strokeStyle: "#90EE90",
                lineWidth: 3
              }
            });
            var defaults = {
              type: "mouseConstraint",
              mouse,
              element: null,
              body: null,
              constraint,
              collisionFilter: {
                category: 1,
                mask: 4294967295,
                group: 0
              }
            };
            var mouseConstraint = Common.extend(defaults, options);
            Events.on(engine, "beforeUpdate", function() {
              var allBodies = Composite.allBodies(engine.world);
              MouseConstraint.update(mouseConstraint, allBodies);
              MouseConstraint._triggerEvents(mouseConstraint);
            });
            return mouseConstraint;
          };
          MouseConstraint.update = function(mouseConstraint, bodies) {
            var { mouse, constraint, body } = mouseConstraint;
            if (mouse.button === 0) {
              if (!constraint.bodyB) {
                for (var i = 0;i < bodies.length; i++) {
                  body = bodies[i];
                  if (Bounds.contains(body.bounds, mouse.position) && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) {
                    for (var j = body.parts.length > 1 ? 1 : 0;j < body.parts.length; j++) {
                      var part = body.parts[j];
                      if (Vertices.contains(part.vertices, mouse.position)) {
                        constraint.pointA = mouse.position;
                        constraint.bodyB = mouseConstraint.body = body;
                        constraint.pointB = { x: mouse.position.x - body.position.x, y: mouse.position.y - body.position.y };
                        constraint.angleB = body.angle;
                        Sleeping.set(body, false);
                        Events.trigger(mouseConstraint, "startdrag", { mouse, body });
                        break;
                      }
                    }
                  }
                }
              } else {
                Sleeping.set(constraint.bodyB, false);
                constraint.pointA = mouse.position;
              }
            } else {
              constraint.bodyB = mouseConstraint.body = null;
              constraint.pointB = null;
              if (body)
                Events.trigger(mouseConstraint, "enddrag", { mouse, body });
            }
          };
          MouseConstraint._triggerEvents = function(mouseConstraint) {
            var mouse = mouseConstraint.mouse, mouseEvents = mouse.sourceEvents;
            if (mouseEvents.mousemove)
              Events.trigger(mouseConstraint, "mousemove", { mouse });
            if (mouseEvents.mousedown)
              Events.trigger(mouseConstraint, "mousedown", { mouse });
            if (mouseEvents.mouseup)
              Events.trigger(mouseConstraint, "mouseup", { mouse });
            Mouse.clearSourceEvents(mouse);
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Query = {};
        module2.exports = Query;
        var Vector = __webpack_require__(2);
        var Collision = __webpack_require__(8);
        var Bounds = __webpack_require__(1);
        var Bodies = __webpack_require__(12);
        var Vertices = __webpack_require__(3);
        (function() {
          Query.collides = function(body, bodies) {
            var collisions = [], bodiesLength = bodies.length, bounds = body.bounds, collides = Collision.collides, overlaps = Bounds.overlaps;
            for (var i = 0;i < bodiesLength; i++) {
              var bodyA = bodies[i], partsALength = bodyA.parts.length, partsAStart = partsALength === 1 ? 0 : 1;
              if (overlaps(bodyA.bounds, bounds)) {
                for (var j = partsAStart;j < partsALength; j++) {
                  var part = bodyA.parts[j];
                  if (overlaps(part.bounds, bounds)) {
                    var collision = collides(part, body);
                    if (collision) {
                      collisions.push(collision);
                      break;
                    }
                  }
                }
              }
            }
            return collisions;
          };
          Query.ray = function(bodies, startPoint, endPoint, rayWidth) {
            rayWidth = rayWidth || 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001;
            var rayAngle = Vector.angle(startPoint, endPoint), rayLength = Vector.magnitude(Vector.sub(startPoint, endPoint)), rayX = (endPoint.x + startPoint.x) * 0.5, rayY = (endPoint.y + startPoint.y) * 0.5, ray = Bodies.rectangle(rayX, rayY, rayLength, rayWidth, { angle: rayAngle }), collisions = Query.collides(ray, bodies);
            for (var i = 0;i < collisions.length; i += 1) {
              var collision = collisions[i];
              collision.body = collision.bodyB = collision.bodyA;
            }
            return collisions;
          };
          Query.region = function(bodies, bounds, outside) {
            var result = [];
            for (var i = 0;i < bodies.length; i++) {
              var body = bodies[i], overlaps = Bounds.overlaps(body.bounds, bounds);
              if (overlaps && !outside || !overlaps && outside)
                result.push(body);
            }
            return result;
          };
          Query.point = function(bodies, point) {
            var result = [];
            for (var i = 0;i < bodies.length; i++) {
              var body = bodies[i];
              if (Bounds.contains(body.bounds, point)) {
                for (var j = body.parts.length === 1 ? 0 : 1;j < body.parts.length; j++) {
                  var part = body.parts[j];
                  if (Bounds.contains(part.bounds, point) && Vertices.contains(part.vertices, point)) {
                    result.push(body);
                    break;
                  }
                }
              }
            }
            return result;
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Render = {};
        module2.exports = Render;
        var Body = __webpack_require__(4);
        var Common = __webpack_require__(0);
        var Composite = __webpack_require__(6);
        var Bounds = __webpack_require__(1);
        var Events = __webpack_require__(5);
        var Vector = __webpack_require__(2);
        var Mouse = __webpack_require__(14);
        (function() {
          var _requestAnimationFrame, _cancelAnimationFrame;
          if (typeof window !== "undefined") {
            _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
              window.setTimeout(function() {
                callback(Common.now());
              }, 1000 / 60);
            };
            _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
          }
          Render._goodFps = 30;
          Render._goodDelta = 1000 / 60;
          Render.create = function(options) {
            var defaults = {
              engine: null,
              element: null,
              canvas: null,
              mouse: null,
              frameRequestId: null,
              timing: {
                historySize: 60,
                delta: 0,
                deltaHistory: [],
                lastTime: 0,
                lastTimestamp: 0,
                lastElapsed: 0,
                timestampElapsed: 0,
                timestampElapsedHistory: [],
                engineDeltaHistory: [],
                engineElapsedHistory: [],
                elapsedHistory: []
              },
              options: {
                width: 800,
                height: 600,
                pixelRatio: 1,
                background: "#14151f",
                wireframeBackground: "#14151f",
                hasBounds: !!options.bounds,
                enabled: true,
                wireframes: true,
                showSleeping: true,
                showDebug: false,
                showStats: false,
                showPerformance: false,
                showBounds: false,
                showVelocity: false,
                showCollisions: false,
                showSeparations: false,
                showAxes: false,
                showPositions: false,
                showAngleIndicator: false,
                showIds: false,
                showVertexNumbers: false,
                showConvexHulls: false,
                showInternalEdges: false,
                showMousePosition: false
              }
            };
            var render = Common.extend(defaults, options);
            if (render.canvas) {
              render.canvas.width = render.options.width || render.canvas.width;
              render.canvas.height = render.options.height || render.canvas.height;
            }
            render.mouse = options.mouse;
            render.engine = options.engine;
            render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);
            render.context = render.canvas.getContext("2d");
            render.textures = {};
            render.bounds = render.bounds || {
              min: {
                x: 0,
                y: 0
              },
              max: {
                x: render.canvas.width,
                y: render.canvas.height
              }
            };
            render.controller = Render;
            render.options.showBroadphase = false;
            if (render.options.pixelRatio !== 1) {
              Render.setPixelRatio(render, render.options.pixelRatio);
            }
            if (Common.isElement(render.element)) {
              render.element.appendChild(render.canvas);
            }
            return render;
          };
          Render.run = function(render) {
            (function loop(time) {
              render.frameRequestId = _requestAnimationFrame(loop);
              _updateTiming(render, time);
              Render.world(render, time);
              if (render.options.showStats || render.options.showDebug) {
                Render.stats(render, render.context, time);
              }
              if (render.options.showPerformance || render.options.showDebug) {
                Render.performance(render, render.context, time);
              }
            })();
          };
          Render.stop = function(render) {
            _cancelAnimationFrame(render.frameRequestId);
          };
          Render.setPixelRatio = function(render, pixelRatio) {
            var { options, canvas } = render;
            if (pixelRatio === "auto") {
              pixelRatio = _getPixelRatio(canvas);
            }
            options.pixelRatio = pixelRatio;
            canvas.setAttribute("data-pixel-ratio", pixelRatio);
            canvas.width = options.width * pixelRatio;
            canvas.height = options.height * pixelRatio;
            canvas.style.width = options.width + "px";
            canvas.style.height = options.height + "px";
          };
          Render.lookAt = function(render, objects, padding, center) {
            center = typeof center !== "undefined" ? center : true;
            objects = Common.isArray(objects) ? objects : [objects];
            padding = padding || {
              x: 0,
              y: 0
            };
            var bounds = {
              min: { x: Infinity, y: Infinity },
              max: { x: (-Infinity), y: (-Infinity) }
            };
            for (var i = 0;i < objects.length; i += 1) {
              var object = objects[i], min = object.bounds ? object.bounds.min : object.min || object.position || object, max = object.bounds ? object.bounds.max : object.max || object.position || object;
              if (min && max) {
                if (min.x < bounds.min.x)
                  bounds.min.x = min.x;
                if (max.x > bounds.max.x)
                  bounds.max.x = max.x;
                if (min.y < bounds.min.y)
                  bounds.min.y = min.y;
                if (max.y > bounds.max.y)
                  bounds.max.y = max.y;
              }
            }
            var width = bounds.max.x - bounds.min.x + 2 * padding.x, height = bounds.max.y - bounds.min.y + 2 * padding.y, viewHeight = render.canvas.height, viewWidth = render.canvas.width, outerRatio = viewWidth / viewHeight, innerRatio = width / height, scaleX = 1, scaleY = 1;
            if (innerRatio > outerRatio) {
              scaleY = innerRatio / outerRatio;
            } else {
              scaleX = outerRatio / innerRatio;
            }
            render.options.hasBounds = true;
            render.bounds.min.x = bounds.min.x;
            render.bounds.max.x = bounds.min.x + width * scaleX;
            render.bounds.min.y = bounds.min.y;
            render.bounds.max.y = bounds.min.y + height * scaleY;
            if (center) {
              render.bounds.min.x += width * 0.5 - width * scaleX * 0.5;
              render.bounds.max.x += width * 0.5 - width * scaleX * 0.5;
              render.bounds.min.y += height * 0.5 - height * scaleY * 0.5;
              render.bounds.max.y += height * 0.5 - height * scaleY * 0.5;
            }
            render.bounds.min.x -= padding.x;
            render.bounds.max.x -= padding.x;
            render.bounds.min.y -= padding.y;
            render.bounds.max.y -= padding.y;
            if (render.mouse) {
              Mouse.setScale(render.mouse, {
                x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,
                y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height
              });
              Mouse.setOffset(render.mouse, render.bounds.min);
            }
          };
          Render.startViewTransform = function(render) {
            var boundsWidth = render.bounds.max.x - render.bounds.min.x, boundsHeight = render.bounds.max.y - render.bounds.min.y, boundsScaleX = boundsWidth / render.options.width, boundsScaleY = boundsHeight / render.options.height;
            render.context.setTransform(render.options.pixelRatio / boundsScaleX, 0, 0, render.options.pixelRatio / boundsScaleY, 0, 0);
            render.context.translate(-render.bounds.min.x, -render.bounds.min.y);
          };
          Render.endViewTransform = function(render) {
            render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
          };
          Render.world = function(render, time) {
            var startTime = Common.now(), engine = render.engine, world = engine.world, canvas = render.canvas, context = render.context, options = render.options, timing = render.timing;
            var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world), background = options.wireframes ? options.wireframeBackground : options.background, bodies = [], constraints = [], i;
            var event = {
              timestamp: engine.timing.timestamp
            };
            Events.trigger(render, "beforeRender", event);
            if (render.currentBackground !== background)
              _applyBackground(render, background);
            context.globalCompositeOperation = "source-in";
            context.fillStyle = "transparent";
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.globalCompositeOperation = "source-over";
            if (options.hasBounds) {
              for (i = 0;i < allBodies.length; i++) {
                var body = allBodies[i];
                if (Bounds.overlaps(body.bounds, render.bounds))
                  bodies.push(body);
              }
              for (i = 0;i < allConstraints.length; i++) {
                var constraint = allConstraints[i], bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointAWorld = constraint.pointA, pointBWorld = constraint.pointB;
                if (bodyA)
                  pointAWorld = Vector.add(bodyA.position, constraint.pointA);
                if (bodyB)
                  pointBWorld = Vector.add(bodyB.position, constraint.pointB);
                if (!pointAWorld || !pointBWorld)
                  continue;
                if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld))
                  constraints.push(constraint);
              }
              Render.startViewTransform(render);
              if (render.mouse) {
                Mouse.setScale(render.mouse, {
                  x: (render.bounds.max.x - render.bounds.min.x) / render.options.width,
                  y: (render.bounds.max.y - render.bounds.min.y) / render.options.height
                });
                Mouse.setOffset(render.mouse, render.bounds.min);
              }
            } else {
              constraints = allConstraints;
              bodies = allBodies;
              if (render.options.pixelRatio !== 1) {
                render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
              }
            }
            if (!options.wireframes || engine.enableSleeping && options.showSleeping) {
              Render.bodies(render, bodies, context);
            } else {
              if (options.showConvexHulls)
                Render.bodyConvexHulls(render, bodies, context);
              Render.bodyWireframes(render, bodies, context);
            }
            if (options.showBounds)
              Render.bodyBounds(render, bodies, context);
            if (options.showAxes || options.showAngleIndicator)
              Render.bodyAxes(render, bodies, context);
            if (options.showPositions)
              Render.bodyPositions(render, bodies, context);
            if (options.showVelocity)
              Render.bodyVelocity(render, bodies, context);
            if (options.showIds)
              Render.bodyIds(render, bodies, context);
            if (options.showSeparations)
              Render.separations(render, engine.pairs.list, context);
            if (options.showCollisions)
              Render.collisions(render, engine.pairs.list, context);
            if (options.showVertexNumbers)
              Render.vertexNumbers(render, bodies, context);
            if (options.showMousePosition)
              Render.mousePosition(render, render.mouse, context);
            Render.constraints(constraints, context);
            if (options.hasBounds) {
              Render.endViewTransform(render);
            }
            Events.trigger(render, "afterRender", event);
            timing.lastElapsed = Common.now() - startTime;
          };
          Render.stats = function(render, context, time) {
            var engine = render.engine, world = engine.world, bodies = Composite.allBodies(world), parts = 0, width = 55, height = 44, x = 0, y = 0;
            for (var i = 0;i < bodies.length; i += 1) {
              parts += bodies[i].parts.length;
            }
            var sections = {
              Part: parts,
              Body: bodies.length,
              Cons: Composite.allConstraints(world).length,
              Comp: Composite.allComposites(world).length,
              Pair: engine.pairs.list.length
            };
            context.fillStyle = "#0e0f19";
            context.fillRect(x, y, width * 5.5, height);
            context.font = "12px Arial";
            context.textBaseline = "top";
            context.textAlign = "right";
            for (var key in sections) {
              var section = sections[key];
              context.fillStyle = "#aaa";
              context.fillText(key, x + width, y + 8);
              context.fillStyle = "#eee";
              context.fillText(section, x + width, y + 26);
              x += width;
            }
          };
          Render.performance = function(render, context) {
            var { engine, timing } = render, deltaHistory = timing.deltaHistory, elapsedHistory = timing.elapsedHistory, timestampElapsedHistory = timing.timestampElapsedHistory, engineDeltaHistory = timing.engineDeltaHistory, engineElapsedHistory = timing.engineElapsedHistory, lastEngineDelta = engine.timing.lastDelta;
            var deltaMean = _mean(deltaHistory), elapsedMean = _mean(elapsedHistory), engineDeltaMean = _mean(engineDeltaHistory), engineElapsedMean = _mean(engineElapsedHistory), timestampElapsedMean = _mean(timestampElapsedHistory), rateMean = timestampElapsedMean / deltaMean || 0, fps = 1000 / deltaMean || 0;
            var graphHeight = 4, gap = 12, width = 60, height = 34, x = 10, y = 69;
            context.fillStyle = "#0e0f19";
            context.fillRect(0, 50, gap * 4 + width * 5 + 22, height);
            Render.status(context, x, y, width, graphHeight, deltaHistory.length, Math.round(fps) + " fps", fps / Render._goodFps, function(i) {
              return deltaHistory[i] / deltaMean - 1;
            });
            Render.status(context, x + gap + width, y, width, graphHeight, engineDeltaHistory.length, lastEngineDelta.toFixed(2) + " dt", Render._goodDelta / lastEngineDelta, function(i) {
              return engineDeltaHistory[i] / engineDeltaMean - 1;
            });
            Render.status(context, x + (gap + width) * 2, y, width, graphHeight, engineElapsedHistory.length, engineElapsedMean.toFixed(2) + " ut", 1 - engineElapsedMean / Render._goodFps, function(i) {
              return engineElapsedHistory[i] / engineElapsedMean - 1;
            });
            Render.status(context, x + (gap + width) * 3, y, width, graphHeight, elapsedHistory.length, elapsedMean.toFixed(2) + " rt", 1 - elapsedMean / Render._goodFps, function(i) {
              return elapsedHistory[i] / elapsedMean - 1;
            });
            Render.status(context, x + (gap + width) * 4, y, width, graphHeight, timestampElapsedHistory.length, rateMean.toFixed(2) + " x", rateMean * rateMean * rateMean, function(i) {
              return (timestampElapsedHistory[i] / deltaHistory[i] / rateMean || 0) - 1;
            });
          };
          Render.status = function(context, x, y, width, height, count, label, indicator, plotY) {
            context.strokeStyle = "#888";
            context.fillStyle = "#444";
            context.lineWidth = 1;
            context.fillRect(x, y + 7, width, 1);
            context.beginPath();
            context.moveTo(x, y + 7 - height * Common.clamp(0.4 * plotY(0), -2, 2));
            for (var i = 0;i < width; i += 1) {
              context.lineTo(x + i, y + 7 - (i < count ? height * Common.clamp(0.4 * plotY(i), -2, 2) : 0));
            }
            context.stroke();
            context.fillStyle = "hsl(" + Common.clamp(25 + 95 * indicator, 0, 120) + ",100%,60%)";
            context.fillRect(x, y - 7, 4, 4);
            context.font = "12px Arial";
            context.textBaseline = "middle";
            context.textAlign = "right";
            context.fillStyle = "#eee";
            context.fillText(label, x + width, y - 5);
          };
          Render.constraints = function(constraints, context) {
            var c = context;
            for (var i = 0;i < constraints.length; i++) {
              var constraint = constraints[i];
              if (!constraint.render.visible || !constraint.pointA || !constraint.pointB)
                continue;
              var { bodyA, bodyB } = constraint, start, end;
              if (bodyA) {
                start = Vector.add(bodyA.position, constraint.pointA);
              } else {
                start = constraint.pointA;
              }
              if (constraint.render.type === "pin") {
                c.beginPath();
                c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                c.closePath();
              } else {
                if (bodyB) {
                  end = Vector.add(bodyB.position, constraint.pointB);
                } else {
                  end = constraint.pointB;
                }
                c.beginPath();
                c.moveTo(start.x, start.y);
                if (constraint.render.type === "spring") {
                  var delta = Vector.sub(end, start), normal = Vector.perp(Vector.normalise(delta)), coils = Math.ceil(Common.clamp(constraint.length / 5, 12, 20)), offset;
                  for (var j = 1;j < coils; j += 1) {
                    offset = j % 2 === 0 ? 1 : -1;
                    c.lineTo(start.x + delta.x * (j / coils) + normal.x * offset * 4, start.y + delta.y * (j / coils) + normal.y * offset * 4);
                  }
                }
                c.lineTo(end.x, end.y);
              }
              if (constraint.render.lineWidth) {
                c.lineWidth = constraint.render.lineWidth;
                c.strokeStyle = constraint.render.strokeStyle;
                c.stroke();
              }
              if (constraint.render.anchors) {
                c.fillStyle = constraint.render.strokeStyle;
                c.beginPath();
                c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                c.arc(end.x, end.y, 3, 0, 2 * Math.PI);
                c.closePath();
                c.fill();
              }
            }
          };
          Render.bodies = function(render, bodies, context) {
            var c = context, engine = render.engine, options = render.options, showInternalEdges = options.showInternalEdges || !options.wireframes, body, part, i, k;
            for (i = 0;i < bodies.length; i++) {
              body = bodies[i];
              if (!body.render.visible)
                continue;
              for (k = body.parts.length > 1 ? 1 : 0;k < body.parts.length; k++) {
                part = body.parts[k];
                if (!part.render.visible)
                  continue;
                if (options.showSleeping && body.isSleeping) {
                  c.globalAlpha = 0.5 * part.render.opacity;
                } else if (part.render.opacity !== 1) {
                  c.globalAlpha = part.render.opacity;
                }
                if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {
                  var sprite = part.render.sprite, texture = _getTexture(render, sprite.texture);
                  c.translate(part.position.x, part.position.y);
                  c.rotate(part.angle);
                  c.drawImage(texture, texture.width * -sprite.xOffset * sprite.xScale, texture.height * -sprite.yOffset * sprite.yScale, texture.width * sprite.xScale, texture.height * sprite.yScale);
                  c.rotate(-part.angle);
                  c.translate(-part.position.x, -part.position.y);
                } else {
                  if (part.circleRadius) {
                    c.beginPath();
                    c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
                  } else {
                    c.beginPath();
                    c.moveTo(part.vertices[0].x, part.vertices[0].y);
                    for (var j = 1;j < part.vertices.length; j++) {
                      if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                        c.lineTo(part.vertices[j].x, part.vertices[j].y);
                      } else {
                        c.moveTo(part.vertices[j].x, part.vertices[j].y);
                      }
                      if (part.vertices[j].isInternal && !showInternalEdges) {
                        c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                      }
                    }
                    c.lineTo(part.vertices[0].x, part.vertices[0].y);
                    c.closePath();
                  }
                  if (!options.wireframes) {
                    c.fillStyle = part.render.fillStyle;
                    if (part.render.lineWidth) {
                      c.lineWidth = part.render.lineWidth;
                      c.strokeStyle = part.render.strokeStyle;
                      c.stroke();
                    }
                    c.fill();
                  } else {
                    c.lineWidth = 1;
                    c.strokeStyle = "#bbb";
                    c.stroke();
                  }
                }
                c.globalAlpha = 1;
              }
            }
          };
          Render.bodyWireframes = function(render, bodies, context) {
            var c = context, showInternalEdges = render.options.showInternalEdges, body, part, i, j, k;
            c.beginPath();
            for (i = 0;i < bodies.length; i++) {
              body = bodies[i];
              if (!body.render.visible)
                continue;
              for (k = body.parts.length > 1 ? 1 : 0;k < body.parts.length; k++) {
                part = body.parts[k];
                c.moveTo(part.vertices[0].x, part.vertices[0].y);
                for (j = 1;j < part.vertices.length; j++) {
                  if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                    c.lineTo(part.vertices[j].x, part.vertices[j].y);
                  } else {
                    c.moveTo(part.vertices[j].x, part.vertices[j].y);
                  }
                  if (part.vertices[j].isInternal && !showInternalEdges) {
                    c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                  }
                }
                c.lineTo(part.vertices[0].x, part.vertices[0].y);
              }
            }
            c.lineWidth = 1;
            c.strokeStyle = "#bbb";
            c.stroke();
          };
          Render.bodyConvexHulls = function(render, bodies, context) {
            var c = context, body, part, i, j, k;
            c.beginPath();
            for (i = 0;i < bodies.length; i++) {
              body = bodies[i];
              if (!body.render.visible || body.parts.length === 1)
                continue;
              c.moveTo(body.vertices[0].x, body.vertices[0].y);
              for (j = 1;j < body.vertices.length; j++) {
                c.lineTo(body.vertices[j].x, body.vertices[j].y);
              }
              c.lineTo(body.vertices[0].x, body.vertices[0].y);
            }
            c.lineWidth = 1;
            c.strokeStyle = "rgba(255,255,255,0.2)";
            c.stroke();
          };
          Render.vertexNumbers = function(render, bodies, context) {
            var c = context, i, j, k;
            for (i = 0;i < bodies.length; i++) {
              var parts = bodies[i].parts;
              for (k = parts.length > 1 ? 1 : 0;k < parts.length; k++) {
                var part = parts[k];
                for (j = 0;j < part.vertices.length; j++) {
                  c.fillStyle = "rgba(255,255,255,0.2)";
                  c.fillText(i + "_" + j, part.position.x + (part.vertices[j].x - part.position.x) * 0.8, part.position.y + (part.vertices[j].y - part.position.y) * 0.8);
                }
              }
            }
          };
          Render.mousePosition = function(render, mouse, context) {
            var c = context;
            c.fillStyle = "rgba(255,255,255,0.8)";
            c.fillText(mouse.position.x + "  " + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);
          };
          Render.bodyBounds = function(render, bodies, context) {
            var c = context, engine = render.engine, options = render.options;
            c.beginPath();
            for (var i = 0;i < bodies.length; i++) {
              var body = bodies[i];
              if (body.render.visible) {
                var parts = bodies[i].parts;
                for (var j = parts.length > 1 ? 1 : 0;j < parts.length; j++) {
                  var part = parts[j];
                  c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);
                }
              }
            }
            if (options.wireframes) {
              c.strokeStyle = "rgba(255,255,255,0.08)";
            } else {
              c.strokeStyle = "rgba(0,0,0,0.1)";
            }
            c.lineWidth = 1;
            c.stroke();
          };
          Render.bodyAxes = function(render, bodies, context) {
            var c = context, engine = render.engine, options = render.options, part, i, j, k;
            c.beginPath();
            for (i = 0;i < bodies.length; i++) {
              var body = bodies[i], parts = body.parts;
              if (!body.render.visible)
                continue;
              if (options.showAxes) {
                for (j = parts.length > 1 ? 1 : 0;j < parts.length; j++) {
                  part = parts[j];
                  for (k = 0;k < part.axes.length; k++) {
                    var axis = part.axes[k];
                    c.moveTo(part.position.x, part.position.y);
                    c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);
                  }
                }
              } else {
                for (j = parts.length > 1 ? 1 : 0;j < parts.length; j++) {
                  part = parts[j];
                  for (k = 0;k < part.axes.length; k++) {
                    c.moveTo(part.position.x, part.position.y);
                    c.lineTo((part.vertices[0].x + part.vertices[part.vertices.length - 1].x) / 2, (part.vertices[0].y + part.vertices[part.vertices.length - 1].y) / 2);
                  }
                }
              }
            }
            if (options.wireframes) {
              c.strokeStyle = "indianred";
              c.lineWidth = 1;
            } else {
              c.strokeStyle = "rgba(255, 255, 255, 0.4)";
              c.globalCompositeOperation = "overlay";
              c.lineWidth = 2;
            }
            c.stroke();
            c.globalCompositeOperation = "source-over";
          };
          Render.bodyPositions = function(render, bodies, context) {
            var c = context, engine = render.engine, options = render.options, body, part, i, k;
            c.beginPath();
            for (i = 0;i < bodies.length; i++) {
              body = bodies[i];
              if (!body.render.visible)
                continue;
              for (k = 0;k < body.parts.length; k++) {
                part = body.parts[k];
                c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);
                c.closePath();
              }
            }
            if (options.wireframes) {
              c.fillStyle = "indianred";
            } else {
              c.fillStyle = "rgba(0,0,0,0.5)";
            }
            c.fill();
            c.beginPath();
            for (i = 0;i < bodies.length; i++) {
              body = bodies[i];
              if (body.render.visible) {
                c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);
                c.closePath();
              }
            }
            c.fillStyle = "rgba(255,165,0,0.8)";
            c.fill();
          };
          Render.bodyVelocity = function(render, bodies, context) {
            var c = context;
            c.beginPath();
            for (var i = 0;i < bodies.length; i++) {
              var body = bodies[i];
              if (!body.render.visible)
                continue;
              var velocity = Body.getVelocity(body);
              c.moveTo(body.position.x, body.position.y);
              c.lineTo(body.position.x + velocity.x, body.position.y + velocity.y);
            }
            c.lineWidth = 3;
            c.strokeStyle = "cornflowerblue";
            c.stroke();
          };
          Render.bodyIds = function(render, bodies, context) {
            var c = context, i, j;
            for (i = 0;i < bodies.length; i++) {
              if (!bodies[i].render.visible)
                continue;
              var parts = bodies[i].parts;
              for (j = parts.length > 1 ? 1 : 0;j < parts.length; j++) {
                var part = parts[j];
                c.font = "12px Arial";
                c.fillStyle = "rgba(255,255,255,0.5)";
                c.fillText(part.id, part.position.x + 10, part.position.y - 10);
              }
            }
          };
          Render.collisions = function(render, pairs, context) {
            var c = context, options = render.options, pair, collision, corrected, bodyA, bodyB, i, j;
            c.beginPath();
            for (i = 0;i < pairs.length; i++) {
              pair = pairs[i];
              if (!pair.isActive)
                continue;
              collision = pair.collision;
              for (j = 0;j < pair.activeContacts.length; j++) {
                var contact = pair.activeContacts[j], vertex = contact.vertex;
                c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);
              }
            }
            if (options.wireframes) {
              c.fillStyle = "rgba(255,255,255,0.7)";
            } else {
              c.fillStyle = "orange";
            }
            c.fill();
            c.beginPath();
            for (i = 0;i < pairs.length; i++) {
              pair = pairs[i];
              if (!pair.isActive)
                continue;
              collision = pair.collision;
              if (pair.activeContacts.length > 0) {
                var normalPosX = pair.activeContacts[0].vertex.x, normalPosY = pair.activeContacts[0].vertex.y;
                if (pair.activeContacts.length === 2) {
                  normalPosX = (pair.activeContacts[0].vertex.x + pair.activeContacts[1].vertex.x) / 2;
                  normalPosY = (pair.activeContacts[0].vertex.y + pair.activeContacts[1].vertex.y) / 2;
                }
                if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) {
                  c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8);
                } else {
                  c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);
                }
                c.lineTo(normalPosX, normalPosY);
              }
            }
            if (options.wireframes) {
              c.strokeStyle = "rgba(255,165,0,0.7)";
            } else {
              c.strokeStyle = "orange";
            }
            c.lineWidth = 1;
            c.stroke();
          };
          Render.separations = function(render, pairs, context) {
            var c = context, options = render.options, pair, collision, corrected, bodyA, bodyB, i, j;
            c.beginPath();
            for (i = 0;i < pairs.length; i++) {
              pair = pairs[i];
              if (!pair.isActive)
                continue;
              collision = pair.collision;
              bodyA = collision.bodyA;
              bodyB = collision.bodyB;
              var k = 1;
              if (!bodyB.isStatic && !bodyA.isStatic)
                k = 0.5;
              if (bodyB.isStatic)
                k = 0;
              c.moveTo(bodyB.position.x, bodyB.position.y);
              c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);
              k = 1;
              if (!bodyB.isStatic && !bodyA.isStatic)
                k = 0.5;
              if (bodyA.isStatic)
                k = 0;
              c.moveTo(bodyA.position.x, bodyA.position.y);
              c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);
            }
            if (options.wireframes) {
              c.strokeStyle = "rgba(255,165,0,0.5)";
            } else {
              c.strokeStyle = "orange";
            }
            c.stroke();
          };
          Render.inspector = function(inspector, context) {
            var { engine, selected, render } = inspector, options = render.options, bounds;
            if (options.hasBounds) {
              var boundsWidth = render.bounds.max.x - render.bounds.min.x, boundsHeight = render.bounds.max.y - render.bounds.min.y, boundsScaleX = boundsWidth / render.options.width, boundsScaleY = boundsHeight / render.options.height;
              context.scale(1 / boundsScaleX, 1 / boundsScaleY);
              context.translate(-render.bounds.min.x, -render.bounds.min.y);
            }
            for (var i = 0;i < selected.length; i++) {
              var item = selected[i].data;
              context.translate(0.5, 0.5);
              context.lineWidth = 1;
              context.strokeStyle = "rgba(255,165,0,0.9)";
              context.setLineDash([1, 2]);
              switch (item.type) {
                case "body":
                  bounds = item.bounds;
                  context.beginPath();
                  context.rect(Math.floor(bounds.min.x - 3), Math.floor(bounds.min.y - 3), Math.floor(bounds.max.x - bounds.min.x + 6), Math.floor(bounds.max.y - bounds.min.y + 6));
                  context.closePath();
                  context.stroke();
                  break;
                case "constraint":
                  var point = item.pointA;
                  if (item.bodyA)
                    point = item.pointB;
                  context.beginPath();
                  context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
                  context.closePath();
                  context.stroke();
                  break;
              }
              context.setLineDash([]);
              context.translate(-0.5, -0.5);
            }
            if (inspector.selectStart !== null) {
              context.translate(0.5, 0.5);
              context.lineWidth = 1;
              context.strokeStyle = "rgba(255,165,0,0.6)";
              context.fillStyle = "rgba(255,165,0,0.1)";
              bounds = inspector.selectBounds;
              context.beginPath();
              context.rect(Math.floor(bounds.min.x), Math.floor(bounds.min.y), Math.floor(bounds.max.x - bounds.min.x), Math.floor(bounds.max.y - bounds.min.y));
              context.closePath();
              context.stroke();
              context.fill();
              context.translate(-0.5, -0.5);
            }
            if (options.hasBounds)
              context.setTransform(1, 0, 0, 1, 0, 0);
          };
          var _updateTiming = function(render, time) {
            var { engine, timing } = render, historySize = timing.historySize, timestamp = engine.timing.timestamp;
            timing.delta = time - timing.lastTime || Render._goodDelta;
            timing.lastTime = time;
            timing.timestampElapsed = timestamp - timing.lastTimestamp || 0;
            timing.lastTimestamp = timestamp;
            timing.deltaHistory.unshift(timing.delta);
            timing.deltaHistory.length = Math.min(timing.deltaHistory.length, historySize);
            timing.engineDeltaHistory.unshift(engine.timing.lastDelta);
            timing.engineDeltaHistory.length = Math.min(timing.engineDeltaHistory.length, historySize);
            timing.timestampElapsedHistory.unshift(timing.timestampElapsed);
            timing.timestampElapsedHistory.length = Math.min(timing.timestampElapsedHistory.length, historySize);
            timing.engineElapsedHistory.unshift(engine.timing.lastElapsed);
            timing.engineElapsedHistory.length = Math.min(timing.engineElapsedHistory.length, historySize);
            timing.elapsedHistory.unshift(timing.lastElapsed);
            timing.elapsedHistory.length = Math.min(timing.elapsedHistory.length, historySize);
          };
          var _mean = function(values) {
            var result = 0;
            for (var i = 0;i < values.length; i += 1) {
              result += values[i];
            }
            return result / values.length || 0;
          };
          var _createCanvas = function(width, height) {
            var canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            canvas.oncontextmenu = function() {
              return false;
            };
            canvas.onselectstart = function() {
              return false;
            };
            return canvas;
          };
          var _getPixelRatio = function(canvas) {
            var context = canvas.getContext("2d"), devicePixelRatio = window.devicePixelRatio || 1, backingStorePixelRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
            return devicePixelRatio / backingStorePixelRatio;
          };
          var _getTexture = function(render, imagePath) {
            var image = render.textures[imagePath];
            if (image)
              return image;
            image = render.textures[imagePath] = new Image;
            image.src = imagePath;
            return image;
          };
          var _applyBackground = function(render, background) {
            var cssBackground = background;
            if (/(jpg|gif|png)$/.test(background))
              cssBackground = "url(" + background + ")";
            render.canvas.style.background = cssBackground;
            render.canvas.style.backgroundSize = "contain";
            render.currentBackground = background;
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Runner = {};
        module2.exports = Runner;
        var Events = __webpack_require__(5);
        var Engine = __webpack_require__(17);
        var Common = __webpack_require__(0);
        (function() {
          var _requestAnimationFrame, _cancelAnimationFrame;
          if (typeof window !== "undefined") {
            _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
            _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
          }
          if (!_requestAnimationFrame) {
            var _frameTimeout;
            _requestAnimationFrame = function(callback) {
              _frameTimeout = setTimeout(function() {
                callback(Common.now());
              }, 1000 / 60);
            };
            _cancelAnimationFrame = function() {
              clearTimeout(_frameTimeout);
            };
          }
          Runner.create = function(options) {
            var defaults = {
              fps: 60,
              deltaSampleSize: 60,
              counterTimestamp: 0,
              frameCounter: 0,
              deltaHistory: [],
              timePrev: null,
              frameRequestId: null,
              isFixed: false,
              enabled: true
            };
            var runner = Common.extend(defaults, options);
            runner.delta = runner.delta || 1000 / runner.fps;
            runner.deltaMin = runner.deltaMin || 1000 / runner.fps;
            runner.deltaMax = runner.deltaMax || 1000 / (runner.fps * 0.5);
            runner.fps = 1000 / runner.delta;
            return runner;
          };
          Runner.run = function(runner, engine) {
            if (typeof runner.positionIterations !== "undefined") {
              engine = runner;
              runner = Runner.create();
            }
            (function run(time) {
              runner.frameRequestId = _requestAnimationFrame(run);
              if (time && runner.enabled) {
                Runner.tick(runner, engine, time);
              }
            })();
            return runner;
          };
          Runner.tick = function(runner, engine, time) {
            var timing = engine.timing, delta;
            if (runner.isFixed) {
              delta = runner.delta;
            } else {
              delta = time - runner.timePrev || runner.delta;
              runner.timePrev = time;
              runner.deltaHistory.push(delta);
              runner.deltaHistory = runner.deltaHistory.slice(-runner.deltaSampleSize);
              delta = Math.min.apply(null, runner.deltaHistory);
              delta = delta < runner.deltaMin ? runner.deltaMin : delta;
              delta = delta > runner.deltaMax ? runner.deltaMax : delta;
              runner.delta = delta;
            }
            var event = {
              timestamp: timing.timestamp
            };
            Events.trigger(runner, "beforeTick", event);
            runner.frameCounter += 1;
            if (time - runner.counterTimestamp >= 1000) {
              runner.fps = runner.frameCounter * ((time - runner.counterTimestamp) / 1000);
              runner.counterTimestamp = time;
              runner.frameCounter = 0;
            }
            Events.trigger(runner, "tick", event);
            Events.trigger(runner, "beforeUpdate", event);
            Engine.update(engine, delta);
            Events.trigger(runner, "afterUpdate", event);
            Events.trigger(runner, "afterTick", event);
          };
          Runner.stop = function(runner) {
            _cancelAnimationFrame(runner.frameRequestId);
          };
          Runner.start = function(runner, engine) {
            Runner.run(runner, engine);
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var SAT = {};
        module2.exports = SAT;
        var Collision = __webpack_require__(8);
        var Common = __webpack_require__(0);
        var deprecated = Common.deprecated;
        (function() {
          SAT.collides = function(bodyA, bodyB) {
            return Collision.collides(bodyA, bodyB);
          };
          deprecated(SAT, "collides", "SAT.collides \u27A4 replaced by Collision.collides");
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var Svg = {};
        module2.exports = Svg;
        var Bounds = __webpack_require__(1);
        var Common = __webpack_require__(0);
        (function() {
          Svg.pathToVertices = function(path, sampleLength) {
            if (typeof window !== "undefined" && !("SVGPathSeg" in window)) {
              Common.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
            }
            var i, il, total, point, segment, segments, segmentsQueue, lastSegment, lastPoint, segmentIndex, points = [], lx, ly, length = 0, x = 0, y = 0;
            sampleLength = sampleLength || 15;
            var addPoint = function(px, py, pathSegType) {
              var isRelative = pathSegType % 2 === 1 && pathSegType > 1;
              if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {
                if (lastPoint && isRelative) {
                  lx = lastPoint.x;
                  ly = lastPoint.y;
                } else {
                  lx = 0;
                  ly = 0;
                }
                var point2 = {
                  x: lx + px,
                  y: ly + py
                };
                if (isRelative || !lastPoint) {
                  lastPoint = point2;
                }
                points.push(point2);
                x = lx + px;
                y = ly + py;
              }
            };
            var addSegmentPoint = function(segment2) {
              var segType = segment2.pathSegTypeAsLetter.toUpperCase();
              if (segType === "Z")
                return;
              switch (segType) {
                case "M":
                case "L":
                case "T":
                case "C":
                case "S":
                case "Q":
                  x = segment2.x;
                  y = segment2.y;
                  break;
                case "H":
                  x = segment2.x;
                  break;
                case "V":
                  y = segment2.y;
                  break;
              }
              addPoint(x, y, segment2.pathSegType);
            };
            Svg._svgPathToAbsolute(path);
            total = path.getTotalLength();
            segments = [];
            for (i = 0;i < path.pathSegList.numberOfItems; i += 1)
              segments.push(path.pathSegList.getItem(i));
            segmentsQueue = segments.concat();
            while (length < total) {
              segmentIndex = path.getPathSegAtLength(length);
              segment = segments[segmentIndex];
              if (segment != lastSegment) {
                while (segmentsQueue.length && segmentsQueue[0] != segment)
                  addSegmentPoint(segmentsQueue.shift());
                lastSegment = segment;
              }
              switch (segment.pathSegTypeAsLetter.toUpperCase()) {
                case "C":
                case "T":
                case "S":
                case "Q":
                case "A":
                  point = path.getPointAtLength(length);
                  addPoint(point.x, point.y, 0);
                  break;
              }
              length += sampleLength;
            }
            for (i = 0, il = segmentsQueue.length;i < il; ++i)
              addSegmentPoint(segmentsQueue[i]);
            return points;
          };
          Svg._svgPathToAbsolute = function(path) {
            var x0, y0, x1, y1, x2, y2, segs = path.pathSegList, x = 0, y = 0, len = segs.numberOfItems;
            for (var i = 0;i < len; ++i) {
              var seg = segs.getItem(i), segType = seg.pathSegTypeAsLetter;
              if (/[MLHVCSQTA]/.test(segType)) {
                if ("x" in seg)
                  x = seg.x;
                if ("y" in seg)
                  y = seg.y;
              } else {
                if ("x1" in seg)
                  x1 = x + seg.x1;
                if ("x2" in seg)
                  x2 = x + seg.x2;
                if ("y1" in seg)
                  y1 = y + seg.y1;
                if ("y2" in seg)
                  y2 = y + seg.y2;
                if ("x" in seg)
                  x += seg.x;
                if ("y" in seg)
                  y += seg.y;
                switch (segType) {
                  case "m":
                    segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
                    break;
                  case "l":
                    segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
                    break;
                  case "h":
                    segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
                    break;
                  case "v":
                    segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
                    break;
                  case "c":
                    segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
                    break;
                  case "s":
                    segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
                    break;
                  case "q":
                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
                    break;
                  case "t":
                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
                    break;
                  case "a":
                    segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
                    break;
                  case "z":
                  case "Z":
                    x = x0;
                    y = y0;
                    break;
                }
              }
              if (segType == "M" || segType == "m") {
                x0 = x;
                y0 = y;
              }
            }
          };
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var World = {};
        module2.exports = World;
        var Composite = __webpack_require__(6);
        var Common = __webpack_require__(0);
        (function() {
          World.create = Composite.create;
          World.add = Composite.add;
          World.remove = Composite.remove;
          World.clear = Composite.clear;
          World.addComposite = Composite.addComposite;
          World.addBody = Composite.addBody;
          World.addConstraint = Composite.addConstraint;
        })();
      }
    ]);
  });
});

// node_modules/two.js/build/two.module.js
var decomposeMatrix, setMatrix, getComputedMatrix, lerp, getPoT, mod, toFixed, getComponentOnCubicBezier, subdivide, getCurveLength, getCurveBoundingBox, integrate, getCurveFromPoints, getControlPoints, getReflection, getAnchorsFromArcData, getBackingStoreRatio, getRatio, isArrayLike, FlagMatrix, replaceParent, renderArcEstimate, svgAngle, isDefaultMatrix, contains, getIdByLength, getCurveLength2, getSubdivisions, FlagStops, BindStops, UnbindStops, FlagEndPoints, FlagCenter, FlagFocal, FlagOffset, FlagScale, FlagVertices, BindVertices, UnbindVertices, FlagFill, FlagStroke, FlagRadius, FlagFill2, FlagStroke2, getAlignment, getBaseline, getTagName, applyTransformsToVector, extractCSSText, getSvgStyles, getSvgAttributes, applySvgViewBox, applySvgAttributes, updateDefsCache, getScene, xhr, FlagTextures, BindTextures, UnbindTextures, GenerateTexture, fitToWindow, fitToParent, updateDimensions, loop, __defProp2, __defNormalProp, __export2, __publicField, Commands, math_exports, root, Matrix, TWO_PI, HALF_PI, pots, NumArray, floor, curves_exports, Events, proto, _Vector, Vector, Anchor, proto2, count, Constants, Curve, devicePixelRatio, slice, _, Element, proto3, cos, sin, tan, array, _Matrix, Matrix2, Shape, proto4, Collection, Children, min, max, _Group, Group, proto5, emptyArray, max2, min2, abs, sin2, cos2, acos, sqrt, canvas, Renderer, CanvasShim, dom, temp, TwoError, Registry, _Stop, Stop, proto6, _Gradient, Gradient, proto7, _LinearGradient, LinearGradient, proto8, _RadialGradient, RadialGradient, proto9, anchor, regex, _Texture, Texture, proto10, min3, max3, ceil, floor2, vector, _Path, Path, proto11, _Rectangle, Rectangle, proto12, _Sprite, Sprite, proto13, cos3, sin3, _Circle, Circle, proto14, cos4, sin4, _Ellipse, Ellipse, proto15, Line, proto16, _RoundedRectangle, RoundedRectangle, proto17, canvas2, min4, max4, _Text, Text, proto18, regex2, alignments, reservedAttributesToRemove, overwriteAttrs, read, _ImageSequence, ImageSequence, proto19, _ArcSegment, ArcSegment, proto20, ceil2, floor3, _Points, Points, proto21, cos5, sin5, _Polygon, Polygon, proto22, cos6, sin6, _Star, Star, proto23, svg, Renderer2, shaders, multiplyMatrix, identity, transformation, CanvasUtils, vector2, quad, webgl, Renderer3, Utils, _Two, Two, raf;
var init_two_module = __esm(() => {
  decomposeMatrix = function(matrix, b, c, d, e, f) {
    let a;
    if (arguments.length <= 1) {
      a = matrix.a;
      b = matrix.b;
      c = matrix.c;
      d = matrix.d;
      e = matrix.e;
      f = matrix.f;
    } else {
      a = matrix;
    }
    return {
      translateX: e,
      translateY: f,
      scaleX: Math.sqrt(a * a + b * b),
      scaleY: Math.sqrt(c * c + d * d),
      rotation: 180 * Math.atan2(b, a) / Math.PI
    };
  };
  setMatrix = function(matrix) {
    Matrix = matrix;
  };
  getComputedMatrix = function(object, matrix) {
    matrix = matrix && matrix.identity() || new Matrix;
    let parent = object;
    const matrices = [];
    while (parent && parent._matrix) {
      matrices.push(parent._matrix);
      parent = parent.parent;
    }
    matrices.reverse();
    for (let i = 0;i < matrices.length; i++) {
      const m = matrices[i];
      const e = m.elements;
      matrix.multiply(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9]);
    }
    return matrix;
  };
  lerp = function(a, b, t) {
    return t * (b - a) + a;
  };
  getPoT = function(value) {
    let i = 0;
    while (pots[i] && pots[i] < value) {
      i++;
    }
    return pots[i];
  };
  mod = function(v, l) {
    while (v < 0) {
      v += l;
    }
    return v % l;
  };
  toFixed = function(v) {
    return floor(v * 1e6) / 1e6;
  };
  getComponentOnCubicBezier = function(t, a, b, c, d) {
    const k = 1 - t;
    return k * k * k * a + 3 * k * k * t * b + 3 * k * t * t * c + t * t * t * d;
  };
  subdivide = function(x1, y1, x2, y2, x3, y3, x4, y4, limit) {
    limit = limit || Curve.RecursionLimit;
    const amount = limit + 1;
    if (Math.abs(x1 - x4) < 0.001 && Math.abs(y1 - y4) < 0.001) {
      return [new Anchor(x4, y4)];
    }
    const result = [];
    for (let i = 0;i < amount; i++) {
      const t = i / amount;
      const x = getComponentOnCubicBezier(t, x1, x2, x3, x4);
      const y = getComponentOnCubicBezier(t, y1, y2, y3, y4);
      result.push(new Anchor(x, y));
    }
    return result;
  };
  getCurveLength = function(x1, y1, x2, y2, x3, y3, x4, y4, limit) {
    if (x1 === x2 && y1 === y2 && x3 === x4 && y3 === y4) {
      const dx = x4 - x1;
      const dy = y4 - y1;
      return Math.sqrt(dx * dx + dy * dy);
    }
    const ax = 9 * (x2 - x3) + 3 * (x4 - x1), bx = 6 * (x1 + x3) - 12 * x2, cx = 3 * (x2 - x1), ay = 9 * (y2 - y3) + 3 * (y4 - y1), by = 6 * (y1 + y3) - 12 * y2, cy = 3 * (y2 - y1);
    function integrand(t) {
      const dx = (ax * t + bx) * t + cx, dy = (ay * t + by) * t + cy;
      return Math.sqrt(dx * dx + dy * dy);
    }
    return integrate(integrand, 0, 1, limit || Curve.RecursionLimit);
  };
  getCurveBoundingBox = function(x1, y1, x2, y2, x3, y3, x4, y4) {
    const tvalues = [];
    const bounds = [[], []];
    let a, b, c, t, t1, t2, b2ac, sqrtb2ac;
    for (let i = 0;i < 2; ++i) {
      if (i == 0) {
        b = 6 * x1 - 12 * x2 + 6 * x3;
        a = -3 * x1 + 9 * x2 - 9 * x3 + 3 * x4;
        c = 3 * x2 - 3 * x1;
      } else {
        b = 6 * y1 - 12 * y2 + 6 * y3;
        a = -3 * y1 + 9 * y2 - 9 * y3 + 3 * y4;
        c = 3 * y2 - 3 * y1;
      }
      if (Math.abs(a) < 0.000000000001) {
        if (Math.abs(b) < 0.000000000001) {
          continue;
        }
        t = -c / b;
        if (0 < t && t < 1) {
          tvalues.push(t);
        }
        continue;
      }
      b2ac = b * b - 4 * c * a;
      sqrtb2ac = Math.sqrt(b2ac);
      if (b2ac < 0) {
        continue;
      }
      t1 = (-b + sqrtb2ac) / (2 * a);
      if (0 < t1 && t1 < 1) {
        tvalues.push(t1);
      }
      t2 = (-b - sqrtb2ac) / (2 * a);
      if (0 < t2 && t2 < 1) {
        tvalues.push(t2);
      }
    }
    let j = tvalues.length;
    let jlen = j;
    let mt;
    while (j--) {
      t = tvalues[j];
      mt = 1 - t;
      bounds[0][j] = mt * mt * mt * x1 + 3 * mt * mt * t * x2 + 3 * mt * t * t * x3 + t * t * t * x4;
      bounds[1][j] = mt * mt * mt * y1 + 3 * mt * mt * t * y2 + 3 * mt * t * t * y3 + t * t * t * y4;
    }
    bounds[0][jlen] = x1;
    bounds[1][jlen] = y1;
    bounds[0][jlen + 1] = x4;
    bounds[1][jlen + 1] = y4;
    bounds[0].length = bounds[1].length = jlen + 2;
    return {
      min: { x: Math.min.apply(0, bounds[0]), y: Math.min.apply(0, bounds[1]) },
      max: { x: Math.max.apply(0, bounds[0]), y: Math.max.apply(0, bounds[1]) }
    };
  };
  integrate = function(f, a, b, n) {
    let x = Curve.abscissas[n - 2], w = Curve.weights[n - 2], A = 0.5 * (b - a), B = A + a, i = 0, m = n + 1 >> 1, sum = n & 1 ? w[i++] * f(B) : 0;
    while (i < m) {
      const Ax = A * x[i];
      sum += w[i++] * (f(B + Ax) + f(B - Ax));
    }
    return A * sum;
  };
  getCurveFromPoints = function(points, closed2) {
    const l = points.length, last = l - 1;
    for (let i = 0;i < l; i++) {
      const point = points[i];
      const prev = closed2 ? mod(i - 1, l) : Math.max(i - 1, 0);
      const next = closed2 ? mod(i + 1, l) : Math.min(i + 1, last);
      const a = points[prev];
      const b = point;
      const c = points[next];
      getControlPoints(a, b, c);
      b.command = i === 0 ? Commands.move : Commands.curve;
    }
  };
  getControlPoints = function(a, b, c) {
    const a1 = Vector.angleBetween(a, b);
    const a2 = Vector.angleBetween(c, b);
    let d1 = Vector.distanceBetween(a, b);
    let d2 = Vector.distanceBetween(c, b);
    let mid = (a1 + a2) / 2;
    if (d1 < 0.0001 || d2 < 0.0001) {
      if (typeof b.relative === "boolean" && !b.relative) {
        b.controls.left.copy(b);
        b.controls.right.copy(b);
      }
      return b;
    }
    d1 *= 0.33;
    d2 *= 0.33;
    if (a2 < a1) {
      mid += HALF_PI;
    } else {
      mid -= HALF_PI;
    }
    b.controls.left.x = Math.cos(mid) * d1;
    b.controls.left.y = Math.sin(mid) * d1;
    mid -= Math.PI;
    b.controls.right.x = Math.cos(mid) * d2;
    b.controls.right.y = Math.sin(mid) * d2;
    if (typeof b.relative === "boolean" && !b.relative) {
      b.controls.left.x += b.x;
      b.controls.left.y += b.y;
      b.controls.right.x += b.x;
      b.controls.right.y += b.y;
    }
    return b;
  };
  getReflection = function(a, b, relative) {
    return new Vector(2 * a.x - (b.x + a.x) - (relative ? a.x : 0), 2 * a.y - (b.y + a.y) - (relative ? a.y : 0));
  };
  getAnchorsFromArcData = function(center, xAxisRotation, rx, ry, ts, td, ccw) {
    const resolution = Constants.Resolution;
    const anchors = [];
    for (let i = 0;i < resolution; i++) {
      let pct = (i + 1) / resolution;
      if (ccw) {
        pct = 1 - pct;
      }
      const theta = pct * td + ts;
      const x = rx * Math.cos(theta);
      const y = ry * Math.sin(theta);
      const anchor2 = new Anchor(x, y);
      anchor2.command = Commands.line;
      anchors.push(anchor2);
    }
  };
  getBackingStoreRatio = function(ctx) {
    return ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
  };
  getRatio = function(ctx) {
    return devicePixelRatio / getBackingStoreRatio(ctx);
  };
  isArrayLike = function(collection) {
    if (collection === null || collection === undefined)
      return false;
    const length = collection.length;
    return typeof length == "number" && length >= 0 && length < 4294967296;
  };
  FlagMatrix = function() {
    this._flagMatrix = true;
  };
  replaceParent = function(child, newParent) {
    const parent = child.parent;
    let index;
    if (parent === newParent) {
      add();
      return;
    }
    if (parent && parent.children.ids[child.id]) {
      index = Array.prototype.indexOf.call(parent.children, child);
      parent.children.splice(index, 1);
      splice();
    }
    if (newParent) {
      add();
      return;
    }
    splice();
    if (parent._flagAdditions && parent.additions.length === 0) {
      parent._flagAdditions = false;
    }
    if (parent._flagSubtractions && parent.subtractions.length === 0) {
      parent._flagSubtractions = false;
    }
    delete child.parent;
    function add() {
      if (newParent.subtractions.length > 0) {
        index = Array.prototype.indexOf.call(newParent.subtractions, child);
        if (index >= 0) {
          newParent.subtractions.splice(index, 1);
        }
      }
      if (newParent.additions.length > 0) {
        index = Array.prototype.indexOf.call(newParent.additions, child);
        if (index >= 0) {
          newParent.additions.splice(index, 1);
        }
      }
      child.parent = newParent;
      newParent.additions.push(child);
      newParent._flagAdditions = true;
    }
    function splice() {
      index = Array.prototype.indexOf.call(parent.additions, child);
      if (index >= 0) {
        parent.additions.splice(index, 1);
      }
      index = Array.prototype.indexOf.call(parent.subtractions, child);
      if (index < 0) {
        parent.subtractions.push(child);
        parent._flagSubtractions = true;
      }
    }
  };
  renderArcEstimate = function(ctx, ox, oy, rx, ry, startAngle, endAngle, clockwise, xAxisRotation) {
    const delta = endAngle - startAngle;
    const epsilon = Curve.Tolerance.epsilon;
    const samePoints = Math.abs(delta) < epsilon;
    let deltaAngle = mod(delta, TWO_PI);
    if (deltaAngle < epsilon) {
      if (samePoints) {
        deltaAngle = 0;
      } else {
        deltaAngle = TWO_PI;
      }
    }
    if (clockwise === true && !samePoints) {
      if (deltaAngle === TWO_PI) {
        deltaAngle = -TWO_PI;
      } else {
        deltaAngle = deltaAngle - TWO_PI;
      }
    }
    for (let i = 0;i < Constants.Resolution; i++) {
      const t = i / (Constants.Resolution - 1);
      const angle = startAngle + t * deltaAngle;
      let x = ox + rx * Math.cos(angle);
      let y = oy + ry * Math.sin(angle);
      if (xAxisRotation !== 0) {
        const cos7 = Math.cos(xAxisRotation);
        const sin7 = Math.sin(xAxisRotation);
        const tx = x - ox;
        const ty = y - oy;
        x = tx * cos7 - ty * sin7 + ox;
        y = tx * sin7 + ty * cos7 + oy;
      }
      ctx.lineTo(x, y);
    }
  };
  svgAngle = function(ux, uy, vx, vy) {
    const dot = ux * vx + uy * vy;
    const len = sqrt(ux * ux + uy * uy) * sqrt(vx * vx + vy * vy);
    let ang = acos(max2(-1, min2(1, dot / len)));
    if (ux * vy - uy * vx < 0) {
      ang = -ang;
    }
    return ang;
  };
  isDefaultMatrix = function(m) {
    return m[0] == 1 && m[3] == 0 && m[1] == 0 && m[4] == 1 && m[2] == 0 && m[5] == 0;
  };
  contains = function(path, t) {
    if (t === 0 || t === 1) {
      return true;
    }
    const length = path._length;
    const target = length * t;
    let elapsed = 0;
    for (let i = 0;i < path._lengths.length; i++) {
      const dist = path._lengths[i];
      if (elapsed >= target) {
        return target - elapsed >= 0;
      }
      elapsed += dist;
    }
    return false;
  };
  getIdByLength = function(path, target) {
    const total = path._length;
    if (target <= 0) {
      return 0;
    } else if (target >= total) {
      return path._lengths.length - 1;
    }
    for (let i = 0, sum = 0;i < path._lengths.length; i++) {
      if (sum + path._lengths[i] >= target) {
        target -= sum;
        return Math.max(i - 1, 0) + target / path._lengths[i];
      }
      sum += path._lengths[i];
    }
    return -1;
  };
  getCurveLength2 = function(a, b, limit) {
    let x1, x2, x3, x4, y1, y2, y3, y4;
    const right = b.controls && b.controls.right;
    const left = a.controls && a.controls.left;
    x1 = b.x;
    y1 = b.y;
    x2 = (right || b).x;
    y2 = (right || b).y;
    x3 = (left || a).x;
    y3 = (left || a).y;
    x4 = a.x;
    y4 = a.y;
    if (right && b._relative) {
      x2 += b.x;
      y2 += b.y;
    }
    if (left && a._relative) {
      x3 += a.x;
      y3 += a.y;
    }
    return getCurveLength(x1, y1, x2, y2, x3, y3, x4, y4, limit);
  };
  getSubdivisions = function(a, b, limit) {
    let x1, x2, x3, x4, y1, y2, y3, y4;
    const right = b.controls && b.controls.right;
    const left = a.controls && a.controls.left;
    x1 = b.x;
    y1 = b.y;
    x2 = (right || b).x;
    y2 = (right || b).y;
    x3 = (left || a).x;
    y3 = (left || a).y;
    x4 = a.x;
    y4 = a.y;
    if (right && b._relative) {
      x2 += b.x;
      y2 += b.y;
    }
    if (left && a._relative) {
      x3 += a.x;
      y3 += a.y;
    }
    return subdivide(x1, y1, x2, y2, x3, y3, x4, y4, limit);
  };
  FlagStops = function() {
    this._flagStops = true;
  };
  BindStops = function(items) {
    let i = items.length;
    while (i--) {
      items[i].bind(Events.Types.change, this._renderer.flagStops);
      items[i].parent = this;
    }
    this._renderer.flagStops();
  };
  UnbindStops = function(items) {
    let i = items.length;
    while (i--) {
      items[i].unbind(Events.Types.change, this._renderer.flagStops);
      delete items[i].parent;
    }
    this._renderer.flagStops();
  };
  FlagEndPoints = function() {
    this._flagEndPoints = true;
  };
  FlagCenter = function() {
    this._flagCenter = true;
  };
  FlagFocal = function() {
    this._flagFocal = true;
  };
  FlagOffset = function() {
    this._flagOffset = true;
  };
  FlagScale = function() {
    this._flagScale = true;
  };
  FlagVertices = function() {
    this._flagVertices = true;
    this._flagLength = true;
    if (this.parent) {
      this.parent._flagLength = true;
    }
  };
  BindVertices = function(items) {
    let i = items.length;
    while (i--) {
      items[i].bind(Events.Types.change, this._renderer.flagVertices);
    }
    this._renderer.flagVertices();
  };
  UnbindVertices = function(items) {
    let i = items.length;
    while (i--) {
      items[i].unbind(Events.Types.change, this._renderer.flagVertices);
    }
    this._renderer.flagVertices();
  };
  FlagFill = function() {
    this._flagFill = true;
  };
  FlagStroke = function() {
    this._flagStroke = true;
  };
  FlagRadius = function() {
    this._flagRadius = true;
  };
  FlagFill2 = function() {
    this._flagFill = true;
  };
  FlagStroke2 = function() {
    this._flagStroke = true;
  };
  getAlignment = function(anchor2) {
    return alignments[anchor2];
  };
  getBaseline = function(node) {
    const a = node.getAttribute("dominant-baseline");
    const b = node.getAttribute("alignment-baseline");
    return a || b;
  };
  getTagName = function(tag) {
    return tag.replace(/svg:/ig, "").toLowerCase();
  };
  applyTransformsToVector = function(transforms, vector3) {
    vector3.x += transforms.translateX;
    vector3.y += transforms.translateY;
    vector3.x *= transforms.scaleX;
    vector3.y *= transforms.scaleY;
    if (transforms.rotation !== 0) {
      const l = vector3.length();
      vector3.x = l * Math.cos(transforms.rotation);
      vector3.y = l * Math.sin(transforms.rotation);
    }
  };
  extractCSSText = function(text, styles) {
    if (!styles) {
      styles = {};
    }
    const commands = text.split(";");
    for (let i = 0;i < commands.length; i++) {
      const command = commands[i].split(":");
      const name = command[0];
      const value = command[1];
      if (typeof name === "undefined" || typeof value === "undefined") {
        continue;
      }
      styles[name] = value.replace(/\s/, "");
    }
    return styles;
  };
  getSvgStyles = function(node) {
    const styles = {};
    const attributes = getSvgAttributes(node);
    const length = Math.max(attributes.length, node.style.length);
    for (let i = 0;i < length; i++) {
      const command = node.style[i];
      const attribute = attributes[i];
      if (command) {
        styles[command] = node.style[command];
      }
      if (attribute) {
        styles[attribute] = node.getAttribute(attribute);
      }
    }
    return styles;
  };
  getSvgAttributes = function(node) {
    const attributes = node.getAttributeNames();
    for (let i = 0;i < reservedAttributesToRemove.length; i++) {
      const keyword = reservedAttributesToRemove[i];
      const index = Array.prototype.indexOf.call(attributes, keyword);
      if (index >= 0) {
        attributes.splice(index, 1);
      }
    }
    return attributes;
  };
  applySvgViewBox = function(node, value) {
    const elements = value.split(/[\s,]/);
    const x = -parseFloat(elements[0]);
    const y = -parseFloat(elements[1]);
    const width = parseFloat(elements[2]);
    const height = parseFloat(elements[3]);
    if (x && y) {
      for (let i = 0;i < node.children.length; i++) {
        const child = node.children[i];
        if ("translation" in child) {
          child.translation.add(x, y);
        } else if ("x" in child) {
          child.x = x;
        } else if ("y" in child) {
          child.y = y;
        }
      }
    }
    const xExists = typeof node.x === "number";
    const yExists = typeof node.y === "number";
    const widthExists = typeof node.width === "number";
    const heightExists = typeof node.height === "number";
    if (xExists) {
      node.translation.x += node.x;
    }
    if (yExists) {
      node.translation.y += node.y;
    }
    if (widthExists || heightExists) {
      node.scale = new Vector(1, 1);
    }
    if (widthExists) {
      node.scale.x = node.width / width;
    }
    if (heightExists) {
      node.scale.y = node.height / height;
    }
    node.mask = new Rectangle(0, 0, width, height);
    node.mask.origin.set(-width / 2, -height / 2);
    return node;
  };
  applySvgAttributes = function(node, elem, parentStyles) {
    const styles = {}, attributes = {}, extracted = {};
    let i, m, key, value, prop, attr;
    let transforms, x, y;
    let id, scene, ref, tagName;
    let ca, cb, cc, error;
    if (node === null) {
      return styles;
    }
    if (root.getComputedStyle) {
      const computedStyles = root.getComputedStyle(node);
      i = computedStyles.length;
      while (i--) {
        key = computedStyles[i];
        value = computedStyles[key];
        if (typeof value !== "undefined") {
          styles[key] = value;
        }
      }
    }
    for (i = 0;i < node.attributes.length; i++) {
      attr = node.attributes[i];
      if (/style/i.test(attr.nodeName)) {
        extractCSSText(attr.value, extracted);
      } else {
        attributes[attr.nodeName] = attr.value;
      }
    }
    if (typeof styles.opacity !== "undefined") {
      styles["stroke-opacity"] = styles.opacity;
      styles["fill-opacity"] = styles.opacity;
      delete styles.opacity;
    }
    if (parentStyles) {
      _.defaults(styles, parentStyles);
    }
    _.extend(styles, extracted, attributes);
    styles.visible = !(typeof styles.display === "undefined" && /none/i.test(styles.display)) || typeof styles.visibility === "undefined" && /hidden/i.test(styles.visibility);
    for (key in styles) {
      value = styles[key];
      switch (key) {
        case "gradientTransform":
          if (/none/i.test(value))
            break;
          m = node.gradientTransform && node.gradientTransform.baseVal && node.gradientTransform.baseVal.length > 0 ? node.gradientTransform.baseVal[0].matrix : node.getCTM ? node.getCTM() : null;
          if (m === null)
            break;
          transforms = decomposeMatrix(m);
          switch (elem._renderer.type) {
            case "linear-gradient":
              applyTransformsToVector(transforms, elem.left);
              applyTransformsToVector(transforms, elem.right);
              break;
            case "radial-gradient":
              elem.center.x += transforms.translateX;
              elem.center.y += transforms.translateY;
              elem.focal.x += transforms.translateX;
              elem.focal.y += transforms.translateY;
              elem.radius *= Math.max(transforms.scaleX, transforms.scaleY);
              break;
          }
          break;
        case "transform":
          if (/none/i.test(value))
            break;
          m = node.transform && node.transform.baseVal && node.transform.baseVal.length > 0 ? node.transform.baseVal[0].matrix : node.getCTM ? node.getCTM() : null;
          if (m === null)
            break;
          if (Constants.AutoCalculateImportedMatrices) {
            transforms = decomposeMatrix(m);
            elem.translation.set(transforms.translateX, transforms.translateY);
            elem.rotation = Math.PI * (transforms.rotation / 180);
            elem.scale = new Vector(transforms.scaleX, transforms.scaleY);
            x = parseFloat((styles.x + "").replace("px"));
            y = parseFloat((styles.y + "").replace("px"));
            if (x) {
              elem.translation.x = x;
            }
            if (y) {
              elem.translation.y = y;
            }
          } else {
            m = node.getCTM();
            elem._matrix.manual = true;
            elem._matrix.set(m.a, m.b, m.c, m.d, m.e, m.f);
          }
          break;
        case "visible":
          if (elem instanceof Group) {
            elem._visible = value;
            break;
          }
          elem.visible = value;
          break;
        case "stroke-linecap":
          if (elem instanceof Group) {
            elem._cap = value;
            break;
          }
          elem.cap = value;
          break;
        case "stroke-linejoin":
          if (elem instanceof Group) {
            elem._join = value;
            break;
          }
          elem.join = value;
          break;
        case "stroke-miterlimit":
          if (elem instanceof Group) {
            elem._miter = value;
            break;
          }
          elem.miter = value;
          break;
        case "stroke-width":
          if (elem instanceof Group) {
            elem._linewidth = parseFloat(value);
            break;
          }
          elem.linewidth = parseFloat(value);
          break;
        case "opacity":
        case "stroke-opacity":
        case "fill-opacity":
          if (elem instanceof Group) {
            elem._opacity = parseFloat(value);
            break;
          }
          elem.opacity = parseFloat(value);
          break;
        case "clip-path":
          if (regex2.cssBackgroundImage.test(value)) {
            id = value.replace(regex2.cssBackgroundImage, "$1");
            if (read.defs.current && read.defs.current.contains(id)) {
              ref = read.defs.current.get(id);
              if (ref && ref.childNodes.length > 0) {
                ref = ref.childNodes[0];
                tagName = getTagName(ref.nodeName);
                elem.mask = read[tagName].call(this, ref, {});
                switch (elem._renderer.type) {
                  case "text":
                  case "path":
                    elem.position.add(elem.mask.position);
                    elem.mask.position.clear();
                    break;
                }
              }
            }
          }
          break;
        case "fill":
        case "stroke":
          prop = (elem instanceof Group ? "_" : "") + key;
          if (regex2.cssBackgroundImage.test(value)) {
            id = value.replace(regex2.cssBackgroundImage, "$1");
            if (read.defs.current && read.defs.current.contains(id)) {
              ref = read.defs.current.get(id);
              if (!ref.object) {
                tagName = getTagName(ref.nodeName);
                ref.object = read[tagName].call(this, ref, {});
              }
              ref = ref.object;
            } else {
              scene = getScene(this);
              ref = scene.getById(id);
            }
            elem[prop] = ref;
          } else {
            elem[prop] = value;
          }
          break;
        case "id":
          elem.id = value;
          break;
        case "class":
        case "className":
          elem.classList = value.split(" ");
          elem._flagClassName = true;
          break;
        case "x":
        case "y":
          ca = elem instanceof Gradient;
          cb = elem instanceof LinearGradient;
          cc = elem instanceof RadialGradient;
          if (ca || cb || cc) {
            break;
          }
          if (value.match("[a-z%]$") && !value.endsWith("px")) {
            error = new TwoError("only pixel values are supported with the " + key + " attribute.");
            console.warn(error.name, error.message);
          }
          elem.translation[key] = parseFloat(value);
          break;
        case "font-family":
          if (elem instanceof Text) {
            elem.family = value;
          }
          break;
        case "font-size":
          if (elem instanceof Text) {
            elem.size = value;
          }
          break;
        case "font-weight":
          if (elem instanceof Text) {
            elem.weight = value;
          }
          break;
        case "font-style":
          if (elem instanceof Text) {
            elem.style = value;
          }
          break;
        case "text-decoration":
          if (elem instanceof Text) {
            elem.decoration = value;
          }
          break;
        case "line-height":
          if (elem instanceof Text) {
            elem.leading = value;
          }
          break;
      }
    }
    if (Object.keys(node.dataset).length)
      elem.dataset = node.dataset;
    return styles;
  };
  updateDefsCache = function(node, defsCache) {
    for (let i = 0, l = node.childNodes.length;i < l; i++) {
      const n = node.childNodes[i];
      if (!n.id)
        continue;
      const tagName = getTagName(node.nodeName);
      if (tagName === "#text")
        continue;
      defsCache.add(n.id, n);
    }
  };
  getScene = function(node) {
    while (node.parent) {
      node = node.parent;
    }
    return node.scene;
  };
  xhr = function(path, callback) {
    const xhr2 = new XMLHttpRequest;
    xhr2.open("GET", path);
    xhr2.onreadystatechange = function() {
      if (xhr2.readyState === 4 && xhr2.status === 200) {
        callback(xhr2.responseText);
      }
    };
    xhr2.send();
    return xhr2;
  };
  FlagTextures = function() {
    this._flagTextures = true;
  };
  BindTextures = function(items) {
    let i = items.length;
    while (i--) {
      items[i].bind(Events.Types.change, this._renderer.flagTextures);
    }
    this._renderer.flagTextures();
  };
  UnbindTextures = function(items) {
    let i = items.length;
    while (i--) {
      items[i].unbind(Events.Types.change, this._renderer.flagTextures);
    }
    this._renderer.flagTextures();
  };
  GenerateTexture = function(obj) {
    if (obj instanceof Texture) {
      return obj;
    } else if (typeof obj === "string") {
      return new Texture(obj);
    }
  };
  fitToWindow = function() {
    const wr = document.body.getBoundingClientRect();
    const width = this.width = wr.width;
    const height = this.height = wr.height;
    this.renderer.setSize(width, height, this.ratio);
  };
  fitToParent = function() {
    const parent = this.renderer.domElement.parentElement;
    if (!parent) {
      console.warn("Two.js: Attempting to fit to parent, but no parent found.");
      return;
    }
    const wr = parent.getBoundingClientRect();
    const width = this.width = wr.width;
    const height = this.height = wr.height;
    this.renderer.setSize(width, height, this.ratio);
  };
  updateDimensions = function(width, height) {
    this.width = width;
    this.height = height;
    this.trigger(Events.Types.resize, width, height);
  };
  loop = function() {
    for (let i = 0;i < Two.Instances.length; i++) {
      const t = Two.Instances[i];
      if (t.playing) {
        t.update();
      }
    }
    Two.nextFrameID = raf(loop);
  };
  __defProp2 = Object.defineProperty;
  __defNormalProp = (obj, key, value) => (key in obj) ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  __export2 = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  Commands = {
    move: "M",
    line: "L",
    curve: "C",
    arc: "A",
    close: "Z"
  };
  math_exports = {};
  __export2(math_exports, {
    HALF_PI: () => HALF_PI,
    NumArray: () => NumArray,
    TWO_PI: () => TWO_PI,
    decomposeMatrix: () => decomposeMatrix,
    getComputedMatrix: () => getComputedMatrix,
    getPoT: () => getPoT,
    lerp: () => lerp,
    mod: () => mod,
    setMatrix: () => setMatrix,
    toFixed: () => toFixed
  });
  if (typeof window !== "undefined") {
    root = window;
  } else if (typeof global !== "undefined") {
    root = global;
  } else if (typeof self !== "undefined") {
    root = self;
  }
  TWO_PI = Math.PI * 2;
  HALF_PI = Math.PI * 0.5;
  pots = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
  NumArray = root.Float32Array || Array;
  floor = Math.floor;
  curves_exports = {};
  __export2(curves_exports, {
    Curve: () => Curve,
    getAnchorsFromArcData: () => getAnchorsFromArcData,
    getComponentOnCubicBezier: () => getComponentOnCubicBezier,
    getControlPoints: () => getControlPoints,
    getCurveBoundingBox: () => getCurveBoundingBox,
    getCurveFromPoints: () => getCurveFromPoints,
    getCurveLength: () => getCurveLength,
    getReflection: () => getReflection,
    integrate: () => integrate,
    subdivide: () => subdivide
  });
  Events = class {
    constructor() {
      __publicField(this, "_events", {});
      __publicField(this, "_bound", false);
    }
    addEventListener(name, handler) {
      const list = this._events[name] || (this._events[name] = []);
      list.push(handler);
      this._bound = true;
      return this;
    }
    on() {
      return this.addEventListener.apply(this, arguments);
    }
    bind() {
      return this.addEventListener.apply(this, arguments);
    }
    removeEventListener(name, handler) {
      if (!this._events) {
        return this;
      }
      if (!name && !handler) {
        this._events = {};
        this._bound = false;
        return this;
      }
      const names = name ? [name] : Object.keys(this._events);
      for (let i = 0, l = names.length;i < l; i++) {
        name = names[i];
        let list = this._events[name];
        if (list) {
          let events = [];
          if (handler) {
            for (let j = 0, k = list.length;j < k; j++) {
              let e = list[j];
              e = e.handler ? e.handler : e;
              if (handler !== e) {
                events.push(e);
              }
            }
          }
          this._events[name] = events;
        }
      }
      return this;
    }
    off() {
      return this.removeEventListener.apply(this, arguments);
    }
    unbind() {
      return this.removeEventListener.apply(this, arguments);
    }
    dispatchEvent(name) {
      if (!this._events) {
        return this;
      }
      const args = Array.prototype.slice.call(arguments, 1);
      const events = this._events[name];
      if (events) {
        for (let i = 0;i < events.length; i++) {
          events[i].call(this, ...args);
        }
      }
      return this;
    }
    trigger() {
      return this.dispatchEvent.apply(this, arguments);
    }
    listen(obj, name, handler) {
      const scope = this;
      if (obj) {
        e.obj = obj;
        e.name = name;
        e.handler = handler;
        obj.on(name, e);
      }
      function e() {
        handler.apply(scope, arguments);
      }
      return scope;
    }
    ignore(obj, name, handler) {
      obj.off(name, handler);
      return this;
    }
  };
  __publicField(Events, "Types", {
    play: "play",
    pause: "pause",
    update: "update",
    render: "render",
    resize: "resize",
    change: "change",
    remove: "remove",
    insert: "insert",
    order: "order",
    load: "load"
  });
  __publicField(Events, "Methods", [
    "addEventListener",
    "on",
    "removeEventListener",
    "off",
    "unbind",
    "dispatchEvent",
    "trigger",
    "listen",
    "ignore"
  ]);
  proto = {
    x: {
      enumerable: true,
      get: function() {
        return this._x;
      },
      set: function(v) {
        if (this._x !== v) {
          this._x = v;
          if (this._bound) {
            this.dispatchEvent(Events.Types.change);
          }
        }
      }
    },
    y: {
      enumerable: true,
      get: function() {
        return this._y;
      },
      set: function(v) {
        if (this._y !== v) {
          this._y = v;
          if (this._bound) {
            this.dispatchEvent(Events.Types.change);
          }
        }
      }
    }
  };
  _Vector = class extends Events {
    constructor(x = 0, y = 0) {
      super();
      __publicField(this, "_x", 0);
      __publicField(this, "_y", 0);
      for (let prop in proto) {
        Object.defineProperty(this, prop, proto[prop]);
      }
      this.x = x;
      this.y = y;
    }
    static add(v1, v2) {
      return new _Vector(v1.x + v2.x, v1.y + v2.y);
    }
    static sub(v1, v2) {
      return new _Vector(v1.x - v2.x, v1.y - v2.y);
    }
    static subtract(v1, v2) {
      return _Vector.sub(v1, v2);
    }
    static ratioBetween(v1, v2) {
      return (v1.x * v2.x + v1.y * v2.y) / (v1.length() * v2.length());
    }
    static angleBetween(v1, v2) {
      if (arguments.length >= 4) {
        const dx2 = arguments[0] - arguments[2];
        const dy2 = arguments[1] - arguments[3];
        return Math.atan2(dy2, dx2);
      }
      const dx = v1.x - v2.x;
      const dy = v1.y - v2.y;
      return Math.atan2(dy, dx);
    }
    static distanceBetween(v1, v2) {
      return Math.sqrt(_Vector.distanceBetweenSquared(v1, v2));
    }
    static distanceBetweenSquared(v1, v2) {
      const dx = v1.x - v2.x;
      const dy = v1.y - v2.y;
      return dx * dx + dy * dy;
    }
    set(x, y) {
      this.x = x;
      this.y = y;
      return this;
    }
    copy(v) {
      this.x = v.x;
      this.y = v.y;
      return this;
    }
    clear() {
      this.x = 0;
      this.y = 0;
      return this;
    }
    clone() {
      return new _Vector(this.x, this.y);
    }
    add(x, y) {
      if (arguments.length <= 0) {
        return this;
      } else if (arguments.length <= 1) {
        if (typeof x === "number") {
          this.x += x;
          this.y += x;
        } else if (x && typeof x.x === "number" && typeof x.y === "number") {
          this.x += x.x;
          this.y += x.y;
        }
      } else {
        this.x += x;
        this.y += y;
      }
      return this;
    }
    addSelf(v) {
      return this.add.apply(this, arguments);
    }
    sub(x, y) {
      if (arguments.length <= 0) {
        return this;
      } else if (arguments.length <= 1) {
        if (typeof x === "number") {
          this.x -= x;
          this.y -= x;
        } else if (x && typeof x.x === "number" && typeof x.y === "number") {
          this.x -= x.x;
          this.y -= x.y;
        }
      } else {
        this.x -= x;
        this.y -= y;
      }
      return this;
    }
    subtract() {
      return this.sub.apply(this, arguments);
    }
    subSelf(v) {
      return this.sub.apply(this, arguments);
    }
    subtractSelf(v) {
      return this.sub.apply(this, arguments);
    }
    multiply(x, y) {
      if (arguments.length <= 0) {
        return this;
      } else if (arguments.length <= 1) {
        if (typeof x === "number") {
          this.x *= x;
          this.y *= x;
        } else if (x && typeof x.x === "number" && typeof x.y === "number") {
          this.x *= x.x;
          this.y *= x.y;
        }
      } else {
        this.x *= x;
        this.y *= y;
      }
      return this;
    }
    multiplySelf(v) {
      return this.multiply.apply(this, arguments);
    }
    multiplyScalar(s) {
      return this.multiply(s);
    }
    divide(x, y) {
      if (arguments.length <= 0) {
        return this;
      } else if (arguments.length <= 1) {
        if (typeof x === "number") {
          this.x /= x;
          this.y /= x;
        } else if (x && typeof x.x === "number" && typeof x.y === "number") {
          this.x /= x.x;
          this.y /= x.y;
        }
      } else {
        this.x /= x;
        this.y /= y;
      }
      if (isNaN(this.x)) {
        this.x = 0;
      }
      if (isNaN(this.y)) {
        this.y = 0;
      }
      return this;
    }
    divideSelf(v) {
      return this.divide.apply(this, arguments);
    }
    divideScalar(s) {
      return this.divide(s);
    }
    negate() {
      return this.multiply(-1);
    }
    dot(v) {
      return this.x * v.x + this.y * v.y;
    }
    length() {
      return Math.sqrt(this.lengthSquared());
    }
    lengthSquared() {
      return this.x * this.x + this.y * this.y;
    }
    normalize() {
      return this.divideScalar(this.length());
    }
    distanceTo(v) {
      return Math.sqrt(this.distanceToSquared(v));
    }
    distanceToSquared(v) {
      const dx = this.x - v.x;
      const dy = this.y - v.y;
      return dx * dx + dy * dy;
    }
    setLength(l) {
      return this.normalize().multiplyScalar(l);
    }
    equals(v, eps) {
      eps = typeof eps === "undefined" ? 0.0001 : eps;
      return this.distanceTo(v) < eps;
    }
    lerp(v, t) {
      const x = (v.x - this.x) * t + this.x;
      const y = (v.y - this.y) * t + this.y;
      return this.set(x, y);
    }
    isZero(eps) {
      eps = typeof eps === "undefined" ? 0.0001 : eps;
      return this.length() < eps;
    }
    toString() {
      return this.x + ", " + this.y;
    }
    toObject() {
      return { x: this.x, y: this.y };
    }
    rotate(radians) {
      const x = this.x;
      const y = this.y;
      const cos7 = Math.cos(radians);
      const sin7 = Math.sin(radians);
      this.x = x * cos7 - y * sin7;
      this.y = x * sin7 + y * cos7;
      return this;
    }
  };
  Vector = _Vector;
  __publicField(Vector, "zero", new _Vector);
  __publicField(Vector, "left", new _Vector(-1, 0));
  __publicField(Vector, "right", new _Vector(1, 0));
  __publicField(Vector, "up", new _Vector(0, -1));
  __publicField(Vector, "down", new _Vector(0, 1));
  Anchor = class extends Vector {
    constructor(x = 0, y = 0, ax = 0, ay = 0, bx = 0, by = 0, command = Commands.move) {
      super(x, y);
      __publicField(this, "controls", {
        left: new Vector,
        right: new Vector
      });
      __publicField(this, "_command", Commands.move);
      __publicField(this, "_relative", true);
      __publicField(this, "_rx", 0);
      __publicField(this, "_ry", 0);
      __publicField(this, "_xAxisRotation", 0);
      __publicField(this, "_largeArcFlag", 0);
      __publicField(this, "_sweepFlag", 1);
      for (let prop in proto2) {
        Object.defineProperty(this, prop, proto2[prop]);
      }
      this.command = command;
      this.relative = true;
      const broadcast = Anchor.makeBroadcast(this);
      this.controls.left.set(ax, ay).addEventListener(Events.Types.change, broadcast);
      this.controls.right.set(bx, by).addEventListener(Events.Types.change, broadcast);
    }
    static makeBroadcast(scope) {
      return broadcast;
      function broadcast() {
        if (scope._bound) {
          scope.dispatchEvent(Events.Types.change);
        }
      }
    }
    copy(v) {
      this.x = v.x;
      this.y = v.y;
      if (typeof v.command === "string") {
        this.command = v.command;
      }
      if (v.controls) {
        if (v.controls.left) {
          this.controls.left.copy(v.controls.left);
        }
        if (v.controls.right) {
          this.controls.right.copy(v.controls.right);
        }
      }
      if (typeof v.relative === "boolean") {
        this.relative = v.relative;
      }
      if (typeof v.rx === "number") {
        this.rx = v.rx;
      }
      if (typeof v.ry === "number") {
        this.ry = v.ry;
      }
      if (typeof v.xAxisRotation === "number") {
        this.xAxisRotation = v.xAxisRotation;
      }
      if (typeof v.largeArcFlag === "number") {
        this.largeArcFlag = v.largeArcFlag;
      }
      if (typeof v.sweepFlag === "number") {
        this.sweepFlag = v.sweepFlag;
      }
      return this;
    }
    clone() {
      return new Anchor().copy(this);
    }
    toObject() {
      return {
        x: this.x,
        y: this.y,
        command: this.command,
        relative: this.relative,
        controls: {
          left: this.controls.left.toObject(),
          right: this.controls.right.toObject()
        },
        rx: this.rx,
        ry: this.ry,
        xAxisRotation: this.xAxisRotation,
        largeArcFlag: this.largeArcFlag,
        sweepFlag: this.sweepFlag
      };
    }
    toString() {
      return JSON.stringify(this.toObject());
    }
  };
  proto2 = {
    command: {
      enumerable: true,
      get: function() {
        return this._command;
      },
      set: function(command) {
        if (this._command !== command) {
          this._command = command;
          if (this._bound) {
            this.dispatchEvent(Events.Types.change);
          }
        }
      }
    },
    relative: {
      enumerable: true,
      get: function() {
        return this._relative;
      },
      set: function(relative) {
        if (this._relative !== !!relative) {
          this._relative = !!relative;
          if (this._bound) {
            this.dispatchEvent(Events.Types.change);
          }
        }
      }
    },
    rx: {
      enumerable: true,
      get: function() {
        return this._rx;
      },
      set: function(rx) {
        if (this._rx !== rx) {
          this._rx = rx;
          if (this._bound) {
            this.dispatchEvent(Events.Types.change);
          }
        }
      }
    },
    ry: {
      enumerable: true,
      get: function() {
        return this._ry;
      },
      set: function(ry) {
        if (this._ry !== ry) {
          this._ry = ry;
          if (this._bound) {
            this.dispatchEvent(Events.Types.change);
          }
        }
      }
    },
    xAxisRotation: {
      enumerable: true,
      get: function() {
        return this._xAxisRotation;
      },
      set: function(xAxisRotation) {
        if (this._xAxisRotation !== xAxisRotation) {
          this._xAxisRotation = xAxisRotation;
          if (this._bound) {
            this.dispatchEvent(Events.Types.change);
          }
        }
      }
    },
    largeArcFlag: {
      enumerable: true,
      get: function() {
        return this._largeArcFlag;
      },
      set: function(largeArcFlag) {
        if (this._largeArcFlag !== largeArcFlag) {
          this._largeArcFlag = largeArcFlag;
          if (this._bound) {
            this.dispatchEvent(Events.Types.change);
          }
        }
      }
    },
    sweepFlag: {
      get: function() {
        return this._sweepFlag;
      },
      set: function(sweepFlag) {
        if (this._sweepFlag !== sweepFlag) {
          this._sweepFlag = sweepFlag;
          if (this._bound) {
            this.dispatchEvent(Events.Types.change);
          }
        }
      }
    }
  };
  count = 0;
  Constants = {
    nextFrameID: null,
    Types: {
      webgl: "WebGLRenderer",
      svg: "SVGRenderer",
      canvas: "CanvasRenderer"
    },
    Version: "v0.8.13",
    PublishDate: "2024-02-22T06:40:05.376Z",
    Identifier: "two-",
    Resolution: 12,
    AutoCalculateImportedMatrices: true,
    Instances: [],
    uniqueId: function() {
      return count++;
    }
  };
  Curve = {
    CollinearityEpsilon: Math.pow(10, -30),
    RecursionLimit: 16,
    CuspLimit: 0,
    Tolerance: {
      distance: 0.25,
      angle: 0,
      epsilon: Number.EPSILON
    },
    abscissas: [
      [0.5773502691896257],
      [0, 0.7745966692414834],
      [0.33998104358485626, 0.8611363115940526],
      [0, 0.5384693101056831, 0.906179845938664],
      [0.2386191860831969, 0.6612093864662645, 0.932469514203152],
      [0, 0.4058451513773972, 0.7415311855993945, 0.9491079123427585],
      [0.1834346424956498, 0.525532409916329, 0.7966664774136267, 0.9602898564975363],
      [0, 0.3242534234038089, 0.6133714327005904, 0.8360311073266358, 0.9681602395076261],
      [0.14887433898163122, 0.4333953941292472, 0.6794095682990244, 0.8650633666889845, 0.9739065285171717],
      [0, 0.26954315595234496, 0.5190961292068118, 0.7301520055740494, 0.8870625997680953, 0.978228658146057],
      [0.1252334085114689, 0.3678314989981802, 0.5873179542866175, 0.7699026741943047, 0.9041172563704749, 0.9815606342467192],
      [0, 0.2304583159551348, 0.44849275103644687, 0.6423493394403402, 0.8015780907333099, 0.9175983992229779, 0.9841830547185881],
      [0.10805494870734367, 0.31911236892788974, 0.5152486363581541, 0.6872929048116855, 0.827201315069765, 0.9284348836635735, 0.9862838086968123],
      [0, 0.20119409399743451, 0.3941513470775634, 0.5709721726085388, 0.7244177313601701, 0.8482065834104272, 0.937273392400706, 0.9879925180204854],
      [0.09501250983763744, 0.2816035507792589, 0.45801677765722737, 0.6178762444026438, 0.755404408355003, 0.8656312023878318, 0.9445750230732326, 0.9894009349916499]
    ],
    weights: [
      [1],
      [0.8888888888888888, 0.5555555555555556],
      [0.6521451548625461, 0.34785484513745385],
      [0.5688888888888889, 0.47862867049936647, 0.23692688505618908],
      [0.46791393457269104, 0.3607615730481386, 0.17132449237917036],
      [0.4179591836734694, 0.3818300505051189, 0.27970539148927664, 0.1294849661688697],
      [0.362683783378362, 0.31370664587788727, 0.22238103445337448, 0.10122853629037626],
      [0.3302393550012598, 0.31234707704000286, 0.26061069640293544, 0.1806481606948574, 0.08127438836157441],
      [0.29552422471475287, 0.26926671930999635, 0.21908636251598204, 0.1494513491505806, 0.06667134430868814],
      [0.2729250867779006, 0.26280454451024665, 0.23319376459199048, 0.18629021092773426, 0.1255803694649046, 0.05566856711617366],
      [0.24914704581340277, 0.2334925365383548, 0.20316742672306592, 0.16007832854334622, 0.10693932599531843, 0.04717533638651183],
      [0.2325515532308739, 0.22628318026289723, 0.2078160475368885, 0.17814598076194574, 0.13887351021978725, 0.09212149983772845, 0.04048400476531588],
      [0.2152638534631578, 0.2051984637212956, 0.18553839747793782, 0.15720316715819355, 0.12151857068790319, 0.08015808715976021, 0.03511946033175186],
      [0.2025782419255613, 0.19843148532711158, 0.1861610000155622, 0.16626920581699392, 0.13957067792615432, 0.10715922046717194, 0.07036604748810812, 0.03075324199611727],
      [0.1894506104550685, 0.18260341504492358, 0.16915651939500254, 0.14959598881657674, 0.12462897125553388, 0.09515851168249279, 0.062253523938647894, 0.027152459411754096]
    ]
  };
  devicePixelRatio = root.devicePixelRatio || 1;
  slice = Array.prototype.slice;
  _ = {
    isNaN: function(obj) {
      return typeof obj === "number" && obj !== +obj;
    },
    isElement: function(obj) {
      return !!(obj && obj.nodeType === 1);
    },
    isObject: function(obj) {
      const type = typeof obj;
      return type === "function" || type === "object" && !!obj;
    },
    extend: function(base) {
      const sources = slice.call(arguments, 1);
      for (let i = 0;i < sources.length; i++) {
        const obj = sources[i];
        for (let k in obj) {
          base[k] = obj[k];
        }
      }
      return base;
    },
    defaults: function(base) {
      const sources = slice.call(arguments, 1);
      for (let i = 0;i < sources.length; i++) {
        const obj = sources[i];
        for (let k in obj) {
          if (base[k] === undefined) {
            base[k] = obj[k];
          }
        }
      }
      return base;
    },
    each: function(obj, iteratee, context) {
      const ctx = context || this;
      const keys = !isArrayLike(obj) && Object.keys(obj);
      const length = (keys || obj).length;
      for (let i = 0;i < length; i++) {
        const k = keys ? keys[i] : i;
        iteratee.call(ctx, obj[k], k, obj);
      }
      return obj;
    },
    performance: root.performance && root.performance.now ? root.performance : Date
  };
  Element = class extends Events {
    constructor() {
      super();
      __publicField(this, "_flagId", false);
      __publicField(this, "_flagClassName", false);
      __publicField(this, "_renderer", {});
      __publicField(this, "_id", "");
      __publicField(this, "_className", "");
      __publicField(this, "classList", []);
      for (let prop in proto3) {
        Object.defineProperty(this, prop, proto3[prop]);
      }
    }
    flagReset() {
      this._flagId = this._flagClassName = false;
    }
  };
  proto3 = {
    renderer: {
      enumerable: false,
      get: function() {
        return this._renderer;
      }
    },
    id: {
      enumerable: true,
      get: function() {
        return this._id;
      },
      set: function(v) {
        const id = this._id;
        if (v === this._id) {
          return;
        }
        this._id = v;
        this._flagId = true;
        if (this.parent) {
          delete this.parent.children.ids[id];
          this.parent.children.ids[this._id] = this;
        }
      }
    },
    className: {
      enumerable: true,
      get: function() {
        return this._className;
      },
      set: function(v) {
        if (this._className !== v) {
          this._flagClassName = true;
          this.classList = v.split(/\s+?/);
          this._className = v;
        }
      }
    }
  };
  cos = Math.cos;
  sin = Math.sin;
  tan = Math.tan;
  array = [];
  _Matrix = class extends Events {
    constructor(a, b, c, d, e, f) {
      super();
      __publicField(this, "elements", new NumArray(9));
      __publicField(this, "manual", false);
      let elements = a;
      if (!Array.isArray(elements)) {
        elements = Array.prototype.slice.call(arguments);
      }
      this.identity();
      if (elements.length > 0) {
        this.set(elements);
      }
    }
    static Multiply(A, B, C) {
      if (B.length <= 3) {
        const e = A;
        let x, y, z;
        const a = B[0] || 0, b = B[1] || 0, c = B[2] || 0;
        x = e[0] * a + e[1] * b + e[2] * c;
        y = e[3] * a + e[4] * b + e[5] * c;
        z = e[6] * a + e[7] * b + e[8] * c;
        return [x, y, z];
      }
      const A0 = A[0], A1 = A[1], A2 = A[2];
      const A3 = A[3], A4 = A[4], A5 = A[5];
      const A6 = A[6], A7 = A[7], A8 = A[8];
      const B0 = B[0], B1 = B[1], B2 = B[2];
      const B3 = B[3], B4 = B[4], B5 = B[5];
      const B6 = B[6], B7 = B[7], B8 = B[8];
      C = C || new NumArray(9);
      C[0] = A0 * B0 + A1 * B3 + A2 * B6;
      C[1] = A0 * B1 + A1 * B4 + A2 * B7;
      C[2] = A0 * B2 + A1 * B5 + A2 * B8;
      C[3] = A3 * B0 + A4 * B3 + A5 * B6;
      C[4] = A3 * B1 + A4 * B4 + A5 * B7;
      C[5] = A3 * B2 + A4 * B5 + A5 * B8;
      C[6] = A6 * B0 + A7 * B3 + A8 * B6;
      C[7] = A6 * B1 + A7 * B4 + A8 * B7;
      C[8] = A6 * B2 + A7 * B5 + A8 * B8;
      return C;
    }
    set(a, b, c, d, e, f, g, h, i) {
      if (typeof b === "undefined") {
        const elements = a;
        a = elements[0];
        b = elements[1];
        c = elements[2];
        d = elements[3];
        e = elements[4];
        f = elements[5];
        g = elements[6];
        h = elements[7];
        i = elements[8];
      }
      this.elements[0] = a;
      this.elements[1] = b;
      this.elements[2] = c;
      this.elements[3] = d;
      this.elements[4] = e;
      this.elements[5] = f;
      this.elements[6] = g;
      this.elements[7] = h;
      this.elements[8] = i;
      return this.trigger(Events.Types.change);
    }
    copy(m) {
      this.elements[0] = m.elements[0];
      this.elements[1] = m.elements[1];
      this.elements[2] = m.elements[2];
      this.elements[3] = m.elements[3];
      this.elements[4] = m.elements[4];
      this.elements[5] = m.elements[5];
      this.elements[6] = m.elements[6];
      this.elements[7] = m.elements[7];
      this.elements[8] = m.elements[8];
      this.manual = m.manual;
      return this.trigger(Events.Types.change);
    }
    identity() {
      this.elements[0] = _Matrix.Identity[0];
      this.elements[1] = _Matrix.Identity[1];
      this.elements[2] = _Matrix.Identity[2];
      this.elements[3] = _Matrix.Identity[3];
      this.elements[4] = _Matrix.Identity[4];
      this.elements[5] = _Matrix.Identity[5];
      this.elements[6] = _Matrix.Identity[6];
      this.elements[7] = _Matrix.Identity[7];
      this.elements[8] = _Matrix.Identity[8];
      return this.trigger(Events.Types.change);
    }
    multiply(a, b, c, d, e, f, g, h, i) {
      if (typeof b === "undefined") {
        this.elements[0] *= a;
        this.elements[1] *= a;
        this.elements[2] *= a;
        this.elements[3] *= a;
        this.elements[4] *= a;
        this.elements[5] *= a;
        this.elements[6] *= a;
        this.elements[7] *= a;
        this.elements[8] *= a;
        return this.trigger(Events.Types.change);
      }
      if (typeof c === "undefined") {
        c = 1;
      }
      if (typeof d === "undefined") {
        a = a || 0;
        b = b || 0;
        c = c || 0;
        e = this.elements;
        const x = e[0] * a + e[1] * b + e[2] * c;
        const y = e[3] * a + e[4] * b + e[5] * c;
        const z = e[6] * a + e[7] * b + e[8] * c;
        return [x, y, z];
      }
      const A = this.elements;
      const B = [a, b, c, d, e, f, g, h, i];
      const A0 = A[0], A1 = A[1], A2 = A[2];
      const A3 = A[3], A4 = A[4], A5 = A[5];
      const A6 = A[6], A7 = A[7], A8 = A[8];
      const B0 = B[0], B1 = B[1], B2 = B[2];
      const B3 = B[3], B4 = B[4], B5 = B[5];
      const B6 = B[6], B7 = B[7], B8 = B[8];
      this.elements[0] = A0 * B0 + A1 * B3 + A2 * B6;
      this.elements[1] = A0 * B1 + A1 * B4 + A2 * B7;
      this.elements[2] = A0 * B2 + A1 * B5 + A2 * B8;
      this.elements[3] = A3 * B0 + A4 * B3 + A5 * B6;
      this.elements[4] = A3 * B1 + A4 * B4 + A5 * B7;
      this.elements[5] = A3 * B2 + A4 * B5 + A5 * B8;
      this.elements[6] = A6 * B0 + A7 * B3 + A8 * B6;
      this.elements[7] = A6 * B1 + A7 * B4 + A8 * B7;
      this.elements[8] = A6 * B2 + A7 * B5 + A8 * B8;
      return this.trigger(Events.Types.change);
    }
    inverse(out) {
      const a = this.elements;
      out = out || new _Matrix;
      const a00 = a[0], a01 = a[1], a02 = a[2];
      const a10 = a[3], a11 = a[4], a12 = a[5];
      const a20 = a[6], a21 = a[7], a22 = a[8];
      const b01 = a22 * a11 - a12 * a21;
      const b11 = -a22 * a10 + a12 * a20;
      const b21 = a21 * a10 - a11 * a20;
      let det = a00 * b01 + a01 * b11 + a02 * b21;
      if (!det) {
        return null;
      }
      det = 1 / det;
      out.elements[0] = b01 * det;
      out.elements[1] = (-a22 * a01 + a02 * a21) * det;
      out.elements[2] = (a12 * a01 - a02 * a11) * det;
      out.elements[3] = b11 * det;
      out.elements[4] = (a22 * a00 - a02 * a20) * det;
      out.elements[5] = (-a12 * a00 + a02 * a10) * det;
      out.elements[6] = b21 * det;
      out.elements[7] = (-a21 * a00 + a01 * a20) * det;
      out.elements[8] = (a11 * a00 - a01 * a10) * det;
      return out;
    }
    scale(sx, sy) {
      const l = arguments.length;
      if (l <= 1) {
        sy = sx;
      }
      return this.multiply(sx, 0, 0, 0, sy, 0, 0, 0, 1);
    }
    rotate(Number2) {
      const c = cos(Number2);
      const s = sin(Number2);
      return this.multiply(c, -s, 0, s, c, 0, 0, 0, 1);
    }
    translate(x, y) {
      return this.multiply(1, 0, x, 0, 1, y, 0, 0, 1);
    }
    skewX(Number2) {
      const a = tan(Number2);
      return this.multiply(1, a, 0, 0, 1, 0, 0, 0, 1);
    }
    skewY(Number2) {
      const a = tan(Number2);
      return this.multiply(1, 0, 0, a, 1, 0, 0, 0, 1);
    }
    toString(fullMatrix) {
      array.length = 0;
      this.toTransformArray(fullMatrix, array);
      return array.map(toFixed).join(" ");
    }
    toTransformArray(fullMatrix, output) {
      const elements = this.elements;
      const hasOutput = !!output;
      const a = elements[0];
      const b = elements[1];
      const c = elements[2];
      const d = elements[3];
      const e = elements[4];
      const f = elements[5];
      if (fullMatrix) {
        const g = elements[6];
        const h = elements[7];
        const i = elements[8];
        if (hasOutput) {
          output[0] = a;
          output[1] = d;
          output[2] = g;
          output[3] = b;
          output[4] = e;
          output[5] = h;
          output[6] = c;
          output[7] = f;
          output[8] = i;
          return;
        }
        return [
          a,
          d,
          g,
          b,
          e,
          h,
          c,
          f,
          i
        ];
      }
      if (hasOutput) {
        output[0] = a;
        output[1] = d;
        output[2] = b;
        output[3] = e;
        output[4] = c;
        output[5] = f;
        return;
      }
      return [
        a,
        d,
        b,
        e,
        c,
        f
      ];
    }
    toArray(fullMatrix, output) {
      const elements = this.elements;
      const hasOutput = !!output;
      const a = elements[0];
      const b = elements[1];
      const c = elements[2];
      const d = elements[3];
      const e = elements[4];
      const f = elements[5];
      if (fullMatrix) {
        const g = elements[6];
        const h = elements[7];
        const i = elements[8];
        if (hasOutput) {
          output[0] = a;
          output[1] = b;
          output[2] = c;
          output[3] = d;
          output[4] = e;
          output[5] = f;
          output[6] = g;
          output[7] = h;
          output[8] = i;
          return;
        }
        return [
          a,
          b,
          c,
          d,
          e,
          f,
          g,
          h,
          i
        ];
      }
      if (hasOutput) {
        output[0] = a;
        output[1] = b;
        output[2] = c;
        output[3] = d;
        output[4] = e;
        output[5] = f;
        return;
      }
      return [
        a,
        b,
        c,
        d,
        e,
        f
      ];
    }
    toObject() {
      return {
        elements: this.toArray(true),
        manual: !!this.manual
      };
    }
    clone() {
      return new _Matrix().copy(this);
    }
  };
  Matrix2 = _Matrix;
  __publicField(Matrix2, "Identity", [
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1
  ]);
  setMatrix(Matrix2);
  Shape = class extends Element {
    constructor() {
      super();
      __publicField(this, "_flagMatrix", true);
      __publicField(this, "_flagScale", false);
      __publicField(this, "_matrix", null);
      __publicField(this, "_worldMatrix", null);
      __publicField(this, "_position", null);
      __publicField(this, "_rotation", 0);
      __publicField(this, "_scale", 1);
      __publicField(this, "_skewX", 0);
      __publicField(this, "_skewY", 0);
      for (let prop in proto4) {
        Object.defineProperty(this, prop, proto4[prop]);
      }
      this._renderer.flagMatrix = FlagMatrix.bind(this);
      this.isShape = true;
      this.id = Constants.Identifier + Constants.uniqueId();
      this.matrix = new Matrix2;
      this.worldMatrix = new Matrix2;
      this.position = new Vector;
      this.rotation = 0;
      this.scale = 1;
      this.skewX = 0;
      this.skewY = 0;
    }
    get renderer() {
      return this._renderer;
    }
    set renderer(v) {
      this._renderer = v;
    }
    get translation() {
      return proto4.position.get.apply(this, arguments);
    }
    set translation(v) {
      proto4.position.set.apply(this, arguments);
    }
    addTo(group) {
      group.add(this);
      return this;
    }
    remove() {
      if (!this.parent) {
        return this;
      }
      this.parent.remove(this);
      return this;
    }
    clone(parent) {
      const clone = new Shape;
      clone.position.copy(this.position);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.skewX = this.skewX;
      clone.skewY = this.skewY;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      if (parent) {
        parent.add(clone);
      }
      return clone._update();
    }
    _update(bubbles) {
      if (!this._matrix.manual && this._flagMatrix) {
        this._matrix.identity().translate(this.position.x, this.position.y);
        if (this._scale instanceof Vector) {
          this._matrix.scale(this._scale.x, this._scale.y);
        } else {
          this._matrix.scale(this._scale);
        }
        this._matrix.rotate(this.rotation);
        this._matrix.skewX(this.skewX);
        this._matrix.skewY(this.skewY);
      }
      if (bubbles) {
        if (this.parent && this.parent._update) {
          this.parent._update();
        }
      }
      return this;
    }
    flagReset() {
      this._flagMatrix = this._flagScale = false;
      super.flagReset.call(this);
      return this;
    }
  };
  proto4 = {
    position: {
      enumerable: true,
      get: function() {
        return this._position;
      },
      set: function(v) {
        if (this._position) {
          this._position.unbind(Events.Types.change, this._renderer.flagMatrix);
        }
        this._position = v;
        this._position.bind(Events.Types.change, this._renderer.flagMatrix);
        FlagMatrix.call(this);
      }
    },
    rotation: {
      enumerable: true,
      get: function() {
        return this._rotation;
      },
      set: function(v) {
        this._rotation = v;
        this._flagMatrix = true;
      }
    },
    scale: {
      enumerable: true,
      get: function() {
        return this._scale;
      },
      set: function(v) {
        if (this._scale instanceof Vector) {
          this._scale.unbind(Events.Types.change, this._renderer.flagMatrix);
        }
        this._scale = v;
        if (this._scale instanceof Vector) {
          this._scale.bind(Events.Types.change, this._renderer.flagMatrix);
        }
        this._flagMatrix = true;
        this._flagScale = true;
      }
    },
    skewX: {
      enumerable: true,
      get: function() {
        return this._skewX;
      },
      set: function(v) {
        this._skewX = v;
        this._flagMatrix = true;
      }
    },
    skewY: {
      enumerable: true,
      get: function() {
        return this._skewY;
      },
      set: function(v) {
        this._skewY = v;
        this._flagMatrix = true;
      }
    },
    matrix: {
      enumerable: true,
      get: function() {
        return this._matrix;
      },
      set: function(v) {
        this._matrix = v;
        this._flagMatrix = true;
      }
    },
    worldMatrix: {
      enumerable: true,
      get: function() {
        getComputedMatrix(this, this._worldMatrix);
        return this._worldMatrix;
      },
      set: function(v) {
        this._worldMatrix = v;
      }
    }
  };
  Collection = class extends Array {
    constructor() {
      super();
      __publicField(this, "_events", new Events);
      if (arguments[0] && Array.isArray(arguments[0])) {
        if (arguments[0].length > 0) {
          this.push.apply(this, arguments[0]);
        }
      } else if (arguments.length > 0) {
        this.push.apply(this, arguments);
      }
    }
    get _bound() {
      return this._events._bound;
    }
    set _bound(v) {
      this._events._bound = v;
    }
    addEventListener() {
      return this._events.addEventListener.apply(this, arguments);
    }
    on() {
      return this._events.on.apply(this, arguments);
    }
    bind() {
      return this._events.bind.apply(this, arguments);
    }
    removeEventListener() {
      return this._events.removeEventListener.apply(this, arguments);
    }
    off() {
      return this._events.off.apply(this, arguments);
    }
    unbind() {
      return this._events.unbind.apply(this, arguments);
    }
    dispatchEvent() {
      return this._events.dispatchEvent.apply(this, arguments);
    }
    trigger() {
      return this._events.trigger.apply(this, arguments);
    }
    listen() {
      return this._events.listen.apply(this, arguments);
    }
    ignore() {
      return this._events.ignore.apply(this, arguments);
    }
    pop() {
      const popped = super.pop.apply(this, arguments);
      this.trigger(Events.Types.remove, [popped]);
      return popped;
    }
    shift() {
      const shifted = super.shift.apply(this, arguments);
      this.trigger(Events.Types.remove, [shifted]);
      return shifted;
    }
    push() {
      const pushed = super.push.apply(this, arguments);
      this.trigger(Events.Types.insert, arguments);
      return pushed;
    }
    unshift() {
      const unshifted = super.unshift.apply(this, arguments);
      this.trigger(Events.Types.insert, arguments);
      return unshifted;
    }
    splice() {
      const spliced = super.splice.apply(this, arguments);
      this.trigger(Events.Types.remove, spliced);
      if (arguments.length > 2) {
        const inserted = this.slice(arguments[0], arguments[0] + arguments.length - 2);
        this.trigger(Events.Types.insert, inserted);
        this.trigger(Events.Types.order);
      }
      return spliced;
    }
    sort() {
      super.sort.apply(this, arguments);
      this.trigger(Events.Types.order);
      return this;
    }
    reverse() {
      super.reverse.apply(this, arguments);
      this.trigger(Events.Types.order);
      return this;
    }
    indexOf() {
      return super.indexOf.apply(this, arguments);
    }
    map(func, scope) {
      const results = [];
      for (let key = 0;key < this.length; key++) {
        const value = this[key];
        let result;
        if (scope) {
          result = func.call(scope, value, key);
        } else {
          result = func(value, key);
        }
        results.push(result);
      }
      return results;
    }
  };
  Children = class extends Collection {
    constructor(children) {
      children = Array.isArray(children) ? children : Array.prototype.slice.call(arguments);
      super(children);
      __publicField(this, "ids", {});
      this.attach(children);
      this.on(Events.Types.insert, this.attach);
      this.on(Events.Types.remove, this.detach);
    }
    attach(children) {
      for (let i = 0;i < children.length; i++) {
        const child = children[i];
        if (child && child.id) {
          this.ids[child.id] = child;
        }
      }
      return this;
    }
    detach(children) {
      for (let i = 0;i < children.length; i++) {
        delete this.ids[children[i].id];
      }
      return this;
    }
  };
  min = Math.min;
  max = Math.max;
  _Group = class extends Shape {
    constructor(children) {
      super();
      __publicField(this, "_flagAdditions", false);
      __publicField(this, "_flagSubtractions", false);
      __publicField(this, "_flagOrder", false);
      __publicField(this, "_flagOpacity", true);
      __publicField(this, "_flagBeginning", false);
      __publicField(this, "_flagEnding", false);
      __publicField(this, "_flagLength", false);
      __publicField(this, "_flagMask", false);
      __publicField(this, "_fill", "#fff");
      __publicField(this, "_stroke", "#000");
      __publicField(this, "_linewidth", 1);
      __publicField(this, "_opacity", 1);
      __publicField(this, "_visible", true);
      __publicField(this, "_cap", "round");
      __publicField(this, "_join", "round");
      __publicField(this, "_miter", 4);
      __publicField(this, "_closed", true);
      __publicField(this, "_curved", false);
      __publicField(this, "_automatic", true);
      __publicField(this, "_beginning", 0);
      __publicField(this, "_ending", 1);
      __publicField(this, "_length", 0);
      __publicField(this, "_mask", null);
      for (let prop in proto5) {
        Object.defineProperty(this, prop, proto5[prop]);
      }
      this._renderer.type = "group";
      this.additions = [];
      this.subtractions = [];
      this.children = Array.isArray(children) ? children : Array.prototype.slice.call(arguments);
    }
    static InsertChildren(children) {
      for (let i = 0;i < children.length; i++) {
        replaceParent.call(this, children[i], this);
      }
    }
    static RemoveChildren(children) {
      for (let i = 0;i < children.length; i++) {
        replaceParent.call(this, children[i]);
      }
    }
    static OrderChildren(children) {
      this._flagOrder = true;
    }
    clone(parent) {
      const clone = new _Group;
      const children = this.children.map(function(child) {
        return child.clone();
      });
      clone.add(children);
      clone.opacity = this.opacity;
      if (this.mask) {
        clone.mask = this.mask;
      }
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.className = this.className;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      if (parent) {
        parent.add(clone);
      }
      return clone._update();
    }
    toObject() {
      const result = {
        children: [],
        translation: this.translation.toObject(),
        rotation: this.rotation,
        scale: this.scale instanceof Vector ? this.scale.toObject() : this.scale,
        opacity: this.opacity,
        className: this.className,
        mask: this.mask ? this.mask.toObject() : null
      };
      if (this.matrix.manual) {
        result.matrix = this.matrix.toObject();
      }
      _.each(this.children, function(child, i) {
        result.children[i] = child.toObject();
      }, this);
      return result;
    }
    corner() {
      const rect = this.getBoundingClientRect(true);
      for (let i = 0;i < this.children.length; i++) {
        const child = this.children[i];
        child.translation.x -= rect.left;
        child.translation.y -= rect.top;
      }
      if (this.mask) {
        this.mask.translation.x -= rect.left;
        this.mask.translation.y -= rect.top;
      }
      return this;
    }
    center() {
      const rect = this.getBoundingClientRect(true);
      const cx = rect.left + rect.width / 2 - this.translation.x;
      const cy = rect.top + rect.height / 2 - this.translation.y;
      for (let i = 0;i < this.children.length; i++) {
        const child = this.children[i];
        if (child.isShape) {
          child.translation.x -= cx;
          child.translation.y -= cy;
        }
      }
      if (this.mask) {
        this.mask.translation.x -= cx;
        this.mask.translation.y -= cy;
      }
      return this;
    }
    getById(id) {
      let found = null;
      function search(node) {
        if (node.id === id) {
          return node;
        } else if (node.children) {
          for (let i = 0;i < node.children.length; i++) {
            found = search(node.children[i]);
            if (found) {
              return found;
            }
          }
        }
        return null;
      }
      return search(this);
    }
    getByClassName(className) {
      const found = [];
      function search(node) {
        if (Array.prototype.indexOf.call(node.classList, className) >= 0) {
          found.push(node);
        }
        if (node.children) {
          for (let i = 0;i < node.children.length; i++) {
            const child = node.children[i];
            search(child);
          }
        }
        return found;
      }
      return search(this);
    }
    getByType(type) {
      const found = [];
      function search(node) {
        if (node instanceof type) {
          found.push(node);
        }
        if (node.children) {
          for (let i = 0;i < node.children.length; i++) {
            const child = node.children[i];
            search(child);
          }
        }
        return found;
      }
      return search(this);
    }
    add(objects) {
      if (!(objects instanceof Array)) {
        objects = Array.prototype.slice.call(arguments);
      } else {
        objects = objects.slice();
      }
      for (let i = 0;i < objects.length; i++) {
        const child = objects[i];
        if (!(child && child.id)) {
          continue;
        }
        const index = Array.prototype.indexOf.call(this.children, child);
        if (index >= 0) {
          this.children.splice(index, 1);
        }
        this.children.push(child);
      }
      return this;
    }
    remove(objects) {
      const l = arguments.length, grandparent = this.parent;
      if (l <= 0 && grandparent) {
        grandparent.remove(this);
        return this;
      }
      if (!(objects instanceof Array)) {
        objects = Array.prototype.slice.call(arguments);
      } else {
        objects = objects.slice();
      }
      for (let i = 0;i < objects.length; i++) {
        const object = objects[i];
        if (!object || !this.children.ids[object.id]) {
          continue;
        }
        const index = this.children.indexOf(object);
        if (index >= 0) {
          this.children.splice(index, 1);
        }
      }
      return this;
    }
    getBoundingClientRect(shallow) {
      let rect, matrix, tc, lc, rc, bc;
      this._update(true);
      let left = Infinity, right = (-Infinity), top = Infinity, bottom = (-Infinity);
      const regex3 = /texture|gradient/i;
      matrix = shallow ? this.matrix : this.worldMatrix;
      for (let i = 0;i < this.children.length; i++) {
        const child = this.children[i];
        if (!child.visible || regex3.test(child._renderer.type)) {
          continue;
        }
        rect = child.getBoundingClientRect(shallow);
        tc = typeof rect.top !== "number" || _.isNaN(rect.top) || !isFinite(rect.top);
        lc = typeof rect.left !== "number" || _.isNaN(rect.left) || !isFinite(rect.left);
        rc = typeof rect.right !== "number" || _.isNaN(rect.right) || !isFinite(rect.right);
        bc = typeof rect.bottom !== "number" || _.isNaN(rect.bottom) || !isFinite(rect.bottom);
        if (tc || lc || rc || bc) {
          continue;
        }
        if (shallow) {
          const [ax, ay] = matrix.multiply(rect.left, rect.top);
          const [bx, by] = matrix.multiply(rect.right, rect.top);
          const [cx, cy] = matrix.multiply(rect.left, rect.bottom);
          const [dx, dy] = matrix.multiply(rect.right, rect.bottom);
          top = min(ay, by, cy, dy);
          left = min(ax, bx, cx, dx);
          right = max(ax, bx, cx, dx);
          bottom = max(ay, by, cy, dy);
        } else {
          top = min(rect.top, top);
          left = min(rect.left, left);
          right = max(rect.right, right);
          bottom = max(rect.bottom, bottom);
        }
      }
      return {
        top,
        left,
        right,
        bottom,
        width: right - left,
        height: bottom - top
      };
    }
    noFill() {
      this.children.forEach(function(child) {
        child.noFill();
      });
      return this;
    }
    noStroke() {
      this.children.forEach(function(child) {
        child.noStroke();
      });
      return this;
    }
    subdivide() {
      const args = arguments;
      this.children.forEach(function(child) {
        child.subdivide.apply(child, args);
      });
      return this;
    }
    _update() {
      let i, l, child;
      if (this._flagBeginning || this._flagEnding) {
        const beginning = Math.min(this._beginning, this._ending);
        const ending = Math.max(this._beginning, this._ending);
        const length = this.length;
        let sum = 0;
        const bd = beginning * length;
        const ed = ending * length;
        for (i = 0;i < this.children.length; i++) {
          child = this.children[i];
          l = child.length;
          if (bd > sum + l) {
            child.beginning = 1;
            child.ending = 1;
          } else if (ed < sum) {
            child.beginning = 0;
            child.ending = 0;
          } else if (bd > sum && bd < sum + l) {
            child.beginning = (bd - sum) / l;
            child.ending = 1;
          } else if (ed > sum && ed < sum + l) {
            child.beginning = 0;
            child.ending = (ed - sum) / l;
          } else {
            child.beginning = 0;
            child.ending = 1;
          }
          sum += l;
        }
      }
      return super._update.apply(this, arguments);
    }
    flagReset() {
      if (this._flagAdditions) {
        this.additions.length = 0;
        this._flagAdditions = false;
      }
      if (this._flagSubtractions) {
        this.subtractions.length = 0;
        this._flagSubtractions = false;
      }
      this._flagOrder = this._flagMask = this._flagOpacity = this._flagBeginning = this._flagEnding = false;
      super.flagReset.call(this);
      return this;
    }
  };
  Group = _Group;
  __publicField(Group, "Children", Children);
  __publicField(Group, "Properties", [
    "fill",
    "stroke",
    "linewidth",
    "cap",
    "join",
    "miter",
    "closed",
    "curved",
    "automatic"
  ]);
  proto5 = {
    visible: {
      enumerable: true,
      get: function() {
        return this._visible;
      },
      set: function(v) {
        this._flagVisible = this._visible !== v || this._flagVisible;
        this._visible = v;
      }
    },
    opacity: {
      enumerable: true,
      get: function() {
        return this._opacity;
      },
      set: function(v) {
        this._flagOpacity = this._opacity !== v || this._flagOpacity;
        this._opacity = v;
      }
    },
    beginning: {
      enumerable: true,
      get: function() {
        return this._beginning;
      },
      set: function(v) {
        this._flagBeginning = this._beginning !== v || this._flagBeginning;
        this._beginning = v;
      }
    },
    ending: {
      enumerable: true,
      get: function() {
        return this._ending;
      },
      set: function(v) {
        this._flagEnding = this._ending !== v || this._flagEnding;
        this._ending = v;
      }
    },
    length: {
      enumerable: true,
      get: function() {
        if (this._flagLength || this._length <= 0) {
          this._length = 0;
          if (!this.children) {
            return this._length;
          }
          for (let i = 0;i < this.children.length; i++) {
            const child = this.children[i];
            this._length += child.length;
          }
        }
        return this._length;
      }
    },
    fill: {
      enumerable: true,
      get: function() {
        return this._fill;
      },
      set: function(v) {
        this._fill = v;
        for (let i = 0;i < this.children.length; i++) {
          const child = this.children[i];
          child.fill = v;
        }
      }
    },
    stroke: {
      enumerable: true,
      get: function() {
        return this._stroke;
      },
      set: function(v) {
        this._stroke = v;
        for (let i = 0;i < this.children.length; i++) {
          const child = this.children[i];
          child.stroke = v;
        }
      }
    },
    linewidth: {
      enumerable: true,
      get: function() {
        return this._linewidth;
      },
      set: function(v) {
        this._linewidth = v;
        for (let i = 0;i < this.children.length; i++) {
          const child = this.children[i];
          child.linewidth = v;
        }
      }
    },
    join: {
      enumerable: true,
      get: function() {
        return this._join;
      },
      set: function(v) {
        this._join = v;
        for (let i = 0;i < this.children.length; i++) {
          const child = this.children[i];
          child.join = v;
        }
      }
    },
    miter: {
      enumerable: true,
      get: function() {
        return this._miter;
      },
      set: function(v) {
        this._miter = v;
        for (let i = 0;i < this.children.length; i++) {
          const child = this.children[i];
          child.miter = v;
        }
      }
    },
    cap: {
      enumerable: true,
      get: function() {
        return this._cap;
      },
      set: function(v) {
        this._cap = v;
        for (let i = 0;i < this.children.length; i++) {
          const child = this.children[i];
          child.cap = v;
        }
      }
    },
    closed: {
      enumerable: true,
      get: function() {
        return this._closed;
      },
      set: function(v) {
        this._closed = v;
        for (let i = 0;i < this.children.length; i++) {
          const child = this.children[i];
          child.closed = v;
        }
      }
    },
    curved: {
      enumerable: true,
      get: function() {
        return this._curved;
      },
      set: function(v) {
        this._curved = v;
        for (let i = 0;i < this.children.length; i++) {
          const child = this.children[i];
          child.curved = v;
        }
      }
    },
    automatic: {
      enumerable: true,
      get: function() {
        return this._automatic;
      },
      set: function(v) {
        this._automatic = v;
        for (let i = 0;i < this.children.length; i++) {
          const child = this.children[i];
          child.automatic = v;
        }
      }
    },
    children: {
      enumerable: true,
      get: function() {
        return this._children;
      },
      set: function(children) {
        const insertChildren = Group.InsertChildren.bind(this);
        const removeChildren = Group.RemoveChildren.bind(this);
        const orderChildren = Group.OrderChildren.bind(this);
        if (this._children) {
          this._children.unbind();
          if (this._children.length > 0) {
            removeChildren(this._children);
          }
        }
        this._children = new Children(children);
        this._children.bind(Events.Types.insert, insertChildren);
        this._children.bind(Events.Types.remove, removeChildren);
        this._children.bind(Events.Types.order, orderChildren);
        if (children.length > 0) {
          insertChildren(children);
        }
      }
    },
    mask: {
      enumerable: true,
      get: function() {
        return this._mask;
      },
      set: function(v) {
        this._mask = v;
        this._flagMask = true;
        if (_.isObject(v) && !v.clip) {
          v.clip = true;
        }
      }
    }
  };
  emptyArray = [];
  max2 = Math.max;
  min2 = Math.min;
  abs = Math.abs;
  sin2 = Math.sin;
  cos2 = Math.cos;
  acos = Math.acos;
  sqrt = Math.sqrt;
  canvas = {
    isHidden: /(undefined|none|transparent)/i,
    alignments: {
      left: "start",
      middle: "center",
      right: "end"
    },
    baselines: {
      top: "top",
      middle: "middle",
      bottom: "bottom",
      baseline: "alphabetic"
    },
    shim: function(elem, name) {
      elem.tagName = elem.nodeName = name || "canvas";
      elem.nodeType = 1;
      elem.getAttribute = function(prop) {
        return this[prop];
      };
      elem.setAttribute = function(prop, val) {
        this[prop] = val;
        return this;
      };
      return elem;
    },
    group: {
      renderChild: function(child) {
        canvas[child._renderer.type].render.call(child, this.ctx, true, this.clip);
      },
      render: function(ctx) {
        if (!this._visible) {
          return this;
        }
        this._update();
        const matrix = this._matrix.elements;
        const parent = this.parent;
        this._renderer.opacity = this._opacity * (parent && parent._renderer ? parent._renderer.opacity : 1);
        const mask = this._mask;
        const defaultMatrix = isDefaultMatrix(matrix);
        const shouldIsolate = !defaultMatrix || !!mask;
        if (!this._renderer.context) {
          this._renderer.context = {};
        }
        this._renderer.context.ctx = ctx;
        if (shouldIsolate) {
          ctx.save();
          if (!defaultMatrix) {
            ctx.transform(matrix[0], matrix[3], matrix[1], matrix[4], matrix[2], matrix[5]);
          }
        }
        if (mask) {
          canvas[mask._renderer.type].render.call(mask, ctx, true);
        }
        if (this._opacity > 0 && this._scale !== 0) {
          for (let i = 0;i < this.children.length; i++) {
            const child = this.children[i];
            canvas[child._renderer.type].render.call(child, ctx);
          }
        }
        if (shouldIsolate) {
          ctx.restore();
        }
        return this.flagReset();
      }
    },
    path: {
      render: function(ctx, forced, parentClipped) {
        let matrix, stroke, linewidth, fill, opacity, visible, cap, join, miter, closed2, commands, length, last, prev, a, b, c, d, ux, uy, vx, vy, ar, bl, br, cl, x, y, mask, clip, defaultMatrix, isOffset, dashes, po;
        po = this.parent && this.parent._renderer ? this.parent._renderer.opacity : 1;
        mask = this._mask;
        clip = this._clip;
        opacity = this._opacity * (po || 1);
        visible = this._visible;
        if (!forced && (!visible || clip || opacity === 0)) {
          return this;
        }
        this._update();
        matrix = this._matrix.elements;
        stroke = this._stroke;
        linewidth = this._linewidth;
        fill = this._fill;
        cap = this._cap;
        join = this._join;
        miter = this._miter;
        closed2 = this._closed;
        commands = this._renderer.vertices;
        length = commands.length;
        last = length - 1;
        defaultMatrix = isDefaultMatrix(matrix);
        dashes = this.dashes;
        if (!defaultMatrix) {
          ctx.save();
          ctx.transform(matrix[0], matrix[3], matrix[1], matrix[4], matrix[2], matrix[5]);
        }
        if (mask) {
          canvas[mask._renderer.type].render.call(mask, ctx, true);
        }
        if (fill) {
          if (typeof fill === "string") {
            ctx.fillStyle = fill;
          } else {
            canvas[fill._renderer.type].render.call(fill, ctx, this);
            ctx.fillStyle = fill._renderer.effect;
          }
        }
        if (stroke) {
          if (typeof stroke === "string") {
            ctx.strokeStyle = stroke;
          } else {
            canvas[stroke._renderer.type].render.call(stroke, ctx, this);
            ctx.strokeStyle = stroke._renderer.effect;
          }
          if (linewidth) {
            ctx.lineWidth = linewidth;
          }
          if (miter) {
            ctx.miterLimit = miter;
          }
          if (join) {
            ctx.lineJoin = join;
          }
          if (!closed2 && cap) {
            ctx.lineCap = cap;
          }
        }
        if (typeof opacity === "number") {
          ctx.globalAlpha = opacity;
        }
        if (dashes && dashes.length > 0) {
          ctx.lineDashOffset = dashes.offset || 0;
          ctx.setLineDash(dashes);
        }
        ctx.beginPath();
        let rx, ry, xAxisRotation, largeArcFlag, sweepFlag, ax, ay;
        for (let i = 0;i < length; i++) {
          b = commands[i];
          x = b.x;
          y = b.y;
          switch (b.command) {
            case Commands.close:
              ctx.closePath();
              break;
            case Commands.arc:
              rx = b.rx;
              ry = b.ry;
              xAxisRotation = b.xAxisRotation;
              largeArcFlag = b.largeArcFlag;
              sweepFlag = b.sweepFlag;
              prev = closed2 ? mod(i - 1, length) : max2(i - 1, 0);
              a = commands[prev];
              ax = a.x;
              ay = a.y;
              canvas.renderSvgArcCommand(ctx, ax, ay, rx, ry, largeArcFlag, sweepFlag, xAxisRotation, x, y);
              break;
            case Commands.curve:
              prev = closed2 ? mod(i - 1, length) : Math.max(i - 1, 0);
              a = commands[prev];
              ar = a.controls && a.controls.right || Vector.zero;
              bl = b.controls && b.controls.left || Vector.zero;
              if (a._relative) {
                vx = ar.x + a.x;
                vy = ar.y + a.y;
              } else {
                vx = ar.x;
                vy = ar.y;
              }
              if (b._relative) {
                ux = bl.x + b.x;
                uy = bl.y + b.y;
              } else {
                ux = bl.x;
                uy = bl.y;
              }
              ctx.bezierCurveTo(vx, vy, ux, uy, x, y);
              if (i >= last && closed2) {
                c = d;
                br = b.controls && b.controls.right || Vector.zero;
                cl = c.controls && c.controls.left || Vector.zero;
                if (b._relative) {
                  vx = br.x + b.x;
                  vy = br.y + b.y;
                } else {
                  vx = br.x;
                  vy = br.y;
                }
                if (c._relative) {
                  ux = cl.x + c.x;
                  uy = cl.y + c.y;
                } else {
                  ux = cl.x;
                  uy = cl.y;
                }
                x = c.x;
                y = c.y;
                ctx.bezierCurveTo(vx, vy, ux, uy, x, y);
              }
              break;
            case Commands.line:
              ctx.lineTo(x, y);
              break;
            case Commands.move:
              d = b;
              ctx.moveTo(x, y);
              break;
          }
        }
        if (closed2) {
          ctx.closePath();
        }
        if (!clip && !parentClipped) {
          if (!canvas.isHidden.test(fill)) {
            isOffset = fill._renderer && fill._renderer.offset;
            if (isOffset) {
              ctx.save();
              ctx.translate(-fill._renderer.offset.x, -fill._renderer.offset.y);
              ctx.scale(fill._renderer.scale.x, fill._renderer.scale.y);
            }
            ctx.fill();
            if (isOffset) {
              ctx.restore();
            }
          }
          if (!canvas.isHidden.test(stroke)) {
            isOffset = stroke._renderer && stroke._renderer.offset;
            if (isOffset) {
              ctx.save();
              ctx.translate(-stroke._renderer.offset.x, -stroke._renderer.offset.y);
              ctx.scale(stroke._renderer.scale.x, stroke._renderer.scale.y);
              ctx.lineWidth = linewidth / stroke._renderer.scale.x;
            }
            ctx.stroke();
            if (isOffset) {
              ctx.restore();
            }
          }
        }
        if (!defaultMatrix) {
          ctx.restore();
        }
        if (clip && !parentClipped) {
          ctx.clip();
        }
        if (dashes && dashes.length > 0) {
          ctx.setLineDash(emptyArray);
        }
        return this.flagReset();
      }
    },
    points: {
      render: function(ctx, forced, parentClipped) {
        let me, stroke, linewidth, fill, opacity, visible, size, commands, length, b, x, y, defaultMatrix, isOffset, dashes, po;
        po = this.parent && this.parent._renderer ? this.parent._renderer.opacity : 1;
        opacity = this._opacity * (po || 1);
        visible = this._visible;
        if (!forced && (!visible || opacity === 0)) {
          return this;
        }
        this._update();
        me = this._matrix.elements;
        stroke = this._stroke;
        linewidth = this._linewidth;
        fill = this._fill;
        commands = this._renderer.collection;
        length = commands.length;
        defaultMatrix = isDefaultMatrix(me);
        dashes = this.dashes;
        size = this._size;
        if (!defaultMatrix) {
          ctx.save();
          ctx.transform(me[0], me[3], me[1], me[4], me[2], me[5]);
        }
        if (fill) {
          if (typeof fill === "string") {
            ctx.fillStyle = fill;
          } else {
            canvas[fill._renderer.type].render.call(fill, ctx, this);
            ctx.fillStyle = fill._renderer.effect;
          }
        }
        if (stroke) {
          if (typeof stroke === "string") {
            ctx.strokeStyle = stroke;
          } else {
            canvas[stroke._renderer.type].render.call(stroke, ctx, this);
            ctx.strokeStyle = stroke._renderer.effect;
          }
          if (linewidth) {
            ctx.lineWidth = linewidth;
          }
        }
        if (typeof opacity === "number") {
          ctx.globalAlpha = opacity;
        }
        if (dashes && dashes.length > 0) {
          ctx.lineDashOffset = dashes.offset || 0;
          ctx.setLineDash(dashes);
        }
        ctx.beginPath();
        let radius = size * 0.5, m;
        if (!this._sizeAttenuation) {
          m = this.worldMatrix.elements;
          m = decomposeMatrix(m[0], m[3], m[1], m[4], m[2], m[5]);
          radius /= Math.max(m.scaleX, m.scaleY);
        }
        for (let i = 0;i < length; i++) {
          b = commands[i];
          x = b.x;
          y = b.y;
          ctx.moveTo(x + radius, y);
          ctx.arc(x, y, radius, 0, TWO_PI);
        }
        if (!parentClipped) {
          if (!canvas.isHidden.test(fill)) {
            isOffset = fill._renderer && fill._renderer.offset;
            if (isOffset) {
              ctx.save();
              ctx.translate(-fill._renderer.offset.x, -fill._renderer.offset.y);
              ctx.scale(fill._renderer.scale.x, fill._renderer.scale.y);
            }
            ctx.fill();
            if (isOffset) {
              ctx.restore();
            }
          }
          if (!canvas.isHidden.test(stroke)) {
            isOffset = stroke._renderer && stroke._renderer.offset;
            if (isOffset) {
              ctx.save();
              ctx.translate(-stroke._renderer.offset.x, -stroke._renderer.offset.y);
              ctx.scale(stroke._renderer.scale.x, stroke._renderer.scale.y);
              ctx.lineWidth = linewidth / stroke._renderer.scale.x;
            }
            ctx.stroke();
            if (isOffset) {
              ctx.restore();
            }
          }
        }
        if (!defaultMatrix) {
          ctx.restore();
        }
        if (dashes && dashes.length > 0) {
          ctx.setLineDash(emptyArray);
        }
        return this.flagReset();
      }
    },
    text: {
      render: function(ctx, forced, parentClipped) {
        const po = this.parent && this.parent._renderer ? this.parent._renderer.opacity : 1;
        const opacity = this._opacity * po;
        const visible = this._visible;
        const mask = this._mask;
        const clip = this._clip;
        if (!forced && (!visible || clip || opacity === 0)) {
          return this;
        }
        this._update();
        const matrix = this._matrix.elements;
        const stroke = this._stroke;
        const linewidth = this._linewidth;
        const fill = this._fill;
        const decoration = this._decoration;
        const direction = this._direction;
        const defaultMatrix = isDefaultMatrix(matrix);
        const isOffset = fill._renderer && fill._renderer.offset && stroke._renderer && stroke._renderer.offset;
        const dashes = this.dashes;
        const alignment = canvas.alignments[this._alignment] || this._alignment;
        const baseline = canvas.baselines[this._baseline] || this._baseline;
        let a, b, c, d, e, sx, sy, x1, y1, x2, y2;
        if (!defaultMatrix) {
          ctx.save();
          ctx.transform(matrix[0], matrix[3], matrix[1], matrix[4], matrix[2], matrix[5]);
        }
        if (mask) {
          canvas[mask._renderer.type].render.call(mask, ctx, true);
        }
        if (!isOffset) {
          ctx.font = [this._style, this._weight, this._size + "px/" + this._leading + "px", this._family].join(" ");
        }
        ctx.textAlign = alignment;
        ctx.textBaseline = baseline;
        ctx.direction = direction;
        if (fill) {
          if (typeof fill === "string") {
            ctx.fillStyle = fill;
          } else {
            canvas[fill._renderer.type].render.call(fill, ctx, this);
            ctx.fillStyle = fill._renderer.effect;
          }
        }
        if (stroke) {
          if (typeof stroke === "string") {
            ctx.strokeStyle = stroke;
          } else {
            canvas[stroke._renderer.type].render.call(stroke, ctx, this);
            ctx.strokeStyle = stroke._renderer.effect;
          }
          if (linewidth) {
            ctx.lineWidth = linewidth;
          }
        }
        if (typeof opacity === "number") {
          ctx.globalAlpha = opacity;
        }
        if (dashes && dashes.length > 0) {
          ctx.lineDashOffset = dashes.offset || 0;
          ctx.setLineDash(dashes);
        }
        if (!clip && !parentClipped) {
          if (!canvas.isHidden.test(fill)) {
            if (fill._renderer && fill._renderer.offset) {
              sx = fill._renderer.scale.x;
              sy = fill._renderer.scale.y;
              ctx.save();
              ctx.translate(-fill._renderer.offset.x, -fill._renderer.offset.y);
              ctx.scale(sx, sy);
              a = this._size / fill._renderer.scale.y;
              b = this._leading / fill._renderer.scale.y;
              ctx.font = [
                this._style,
                this._weight,
                a + "px/",
                b + "px",
                this._family
              ].join(" ");
              c = fill._renderer.offset.x / fill._renderer.scale.x;
              d = fill._renderer.offset.y / fill._renderer.scale.y;
              ctx.fillText(this.value, c, d);
              ctx.restore();
            } else {
              ctx.fillText(this.value, 0, 0);
            }
          }
          if (!canvas.isHidden.test(stroke)) {
            if (stroke._renderer && stroke._renderer.offset) {
              sx = stroke._renderer.scale.x;
              sy = stroke._renderer.scale.y;
              ctx.save();
              ctx.translate(-stroke._renderer.offset.x, -stroke._renderer.offset.y);
              ctx.scale(sx, sy);
              a = this._size / stroke._renderer.scale.y;
              b = this._leading / stroke._renderer.scale.y;
              ctx.font = [
                this._style,
                this._weight,
                a + "px/",
                b + "px",
                this._family
              ].join(" ");
              c = stroke._renderer.offset.x / stroke._renderer.scale.x;
              d = stroke._renderer.offset.y / stroke._renderer.scale.y;
              e = linewidth / stroke._renderer.scale.x;
              ctx.lineWidth = e;
              ctx.strokeText(this.value, c, d);
              ctx.restore();
            } else {
              ctx.strokeText(this.value, 0, 0);
            }
          }
        }
        if (/(underline|strikethrough)/i.test(decoration)) {
          const metrics = ctx.measureText(this.value);
          let scalar = 1;
          switch (decoration) {
            case "underline":
              y1 = metrics.actualBoundingBoxDescent;
              y2 = metrics.actualBoundingBoxDescent;
              break;
            case "strikethrough":
              y1 = 0;
              y2 = 0;
              scalar = 0.5;
              break;
          }
          switch (baseline) {
            case "top":
              y1 += this._size * scalar;
              y2 += this._size * scalar;
              break;
            case "baseline":
            case "bottom":
              y1 -= this._size * scalar;
              y2 -= this._size * scalar;
              break;
          }
          switch (alignment) {
            case "left":
            case "start":
              x1 = 0;
              x2 = metrics.width;
              break;
            case "right":
            case "end":
              x1 = -metrics.width;
              x2 = 0;
              break;
            default:
              x1 = -metrics.width / 2;
              x2 = metrics.width / 2;
          }
          ctx.lineWidth = Math.max(Math.floor(this._size / 15), 1);
          ctx.strokeStyle = ctx.fillStyle;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
        if (!defaultMatrix) {
          ctx.restore();
        }
        if (clip && !parentClipped) {
          ctx.clip();
        }
        if (dashes && dashes.length > 0) {
          ctx.setLineDash(emptyArray);
        }
        return this.flagReset();
      }
    },
    "linear-gradient": {
      render: function(ctx, parent) {
        if (!parent) {
          return;
        }
        this._update();
        if (!this._renderer.effect || this._flagEndPoints || this._flagStops || this._flagUnits) {
          let rect;
          let lx = this.left._x;
          let ly = this.left._y;
          let rx = this.right._x;
          let ry = this.right._y;
          if (/objectBoundingBox/i.test(this._units)) {
            rect = parent.getBoundingClientRect(true);
            lx = (lx - 0.5) * rect.width;
            ly = (ly - 0.5) * rect.height;
            rx = (rx - 0.5) * rect.width;
            ry = (ry - 0.5) * rect.height;
          }
          this._renderer.effect = ctx.createLinearGradient(lx, ly, rx, ry);
          for (let i = 0;i < this.stops.length; i++) {
            const stop = this.stops[i];
            this._renderer.effect.addColorStop(stop._offset, stop._color);
          }
        }
        return this.flagReset();
      }
    },
    "radial-gradient": {
      render: function(ctx, parent) {
        if (!parent) {
          return;
        }
        this._update();
        if (!this._renderer.effect || this._flagCenter || this._flagFocal || this._flagRadius || this._flagStops || this._flagUnits) {
          let rect;
          let cx = this.center._x;
          let cy = this.center._y;
          let fx = this.focal._x;
          let fy = this.focal._y;
          let radius = this._radius;
          if (/objectBoundingBox/i.test(this._units)) {
            rect = parent.getBoundingClientRect(true);
            cx = cx * rect.width * 0.5;
            cy = cy * rect.height * 0.5;
            fx = fx * rect.width * 0.5;
            fy = fy * rect.height * 0.5;
            radius *= Math.min(rect.width, rect.height) * 0.5;
          }
          this._renderer.effect = ctx.createRadialGradient(cx, cy, 0, fx, fy, radius);
          for (let i = 0;i < this.stops.length; i++) {
            const stop = this.stops[i];
            this._renderer.effect.addColorStop(stop._offset, stop._color);
          }
        }
        return this.flagReset();
      }
    },
    texture: {
      render: function(ctx) {
        this._update();
        const image = this.image;
        if (!this._renderer.effect || (this._flagLoaded || this._flagImage || this._flagVideo || this._flagRepeat) && this.loaded) {
          this._renderer.effect = ctx.createPattern(this.image, this._repeat);
        }
        if (this._flagOffset || this._flagLoaded || this._flagScale) {
          if (!(this._renderer.offset instanceof Vector)) {
            this._renderer.offset = new Vector;
          }
          this._renderer.offset.x = -this._offset.x;
          this._renderer.offset.y = -this._offset.y;
          if (image) {
            this._renderer.offset.x += image.width / 2;
            this._renderer.offset.y += image.height / 2;
            if (this._scale instanceof Vector) {
              this._renderer.offset.x *= this._scale.x;
              this._renderer.offset.y *= this._scale.y;
            } else {
              this._renderer.offset.x *= this._scale;
              this._renderer.offset.y *= this._scale;
            }
          }
        }
        if (this._flagScale || this._flagLoaded) {
          if (!(this._renderer.scale instanceof Vector)) {
            this._renderer.scale = new Vector;
          }
          if (this._scale instanceof Vector) {
            this._renderer.scale.copy(this._scale);
          } else {
            this._renderer.scale.set(this._scale, this._scale);
          }
        }
        return this.flagReset();
      }
    },
    renderSvgArcCommand: function(ctx, ax, ay, rx, ry, largeArcFlag, sweepFlag, xAxisRotation, x, y) {
      xAxisRotation = xAxisRotation * Math.PI / 180;
      rx = abs(rx);
      ry = abs(ry);
      const dx2 = (ax - x) / 2;
      const dy2 = (ay - y) / 2;
      const x1p = cos2(xAxisRotation) * dx2 + sin2(xAxisRotation) * dy2;
      const y1p = -sin2(xAxisRotation) * dx2 + cos2(xAxisRotation) * dy2;
      const x1ps = x1p * x1p;
      const y1ps = y1p * y1p;
      let rxs = rx * rx;
      let rys = ry * ry;
      const cr = x1ps / rxs + y1ps / rys;
      if (cr > 1) {
        const s = sqrt(cr);
        rx = s * rx;
        ry = s * ry;
        rxs = rx * rx;
        rys = ry * ry;
      }
      const dq = rxs * y1ps + rys * x1ps;
      const pq = (rxs * rys - dq) / dq;
      let q = sqrt(max2(0, pq));
      if (largeArcFlag === sweepFlag)
        q = -q;
      const cxp = q * rx * y1p / ry;
      const cyp = -q * ry * x1p / rx;
      const cx = cos2(xAxisRotation) * cxp - sin2(xAxisRotation) * cyp + (ax + x) / 2;
      const cy = sin2(xAxisRotation) * cxp + cos2(xAxisRotation) * cyp + (ay + y) / 2;
      const startAngle = svgAngle(1, 0, (x1p - cxp) / rx, (y1p - cyp) / ry);
      const delta = svgAngle((x1p - cxp) / rx, (y1p - cyp) / ry, (-x1p - cxp) / rx, (-y1p - cyp) / ry) % TWO_PI;
      const endAngle = startAngle + delta;
      const clockwise = sweepFlag === 0;
      renderArcEstimate(ctx, cx, cy, rx, ry, startAngle, endAngle, clockwise, xAxisRotation);
    }
  };
  Renderer = class extends Events {
    constructor(params) {
      super();
      const smoothing = params.smoothing !== false;
      this.domElement = params.domElement || document.createElement("canvas");
      this.ctx = this.domElement.getContext("2d");
      this.overdraw = params.overdraw || false;
      if (typeof this.ctx.imageSmoothingEnabled !== "undefined") {
        this.ctx.imageSmoothingEnabled = smoothing;
      }
      this.scene = new Group;
      this.scene.parent = this;
    }
    setSize(width, height, ratio) {
      this.width = width;
      this.height = height;
      this.ratio = typeof ratio === "undefined" ? getRatio(this.ctx) : ratio;
      this.domElement.width = width * this.ratio;
      this.domElement.height = height * this.ratio;
      if (this.domElement.style) {
        _.extend(this.domElement.style, {
          width: width + "px",
          height: height + "px"
        });
      }
      return this.trigger(Events.Types.resize, width, height, ratio);
    }
    render() {
      const isOne = this.ratio === 1;
      if (!isOne) {
        this.ctx.save();
        this.ctx.scale(this.ratio, this.ratio);
      }
      if (!this.overdraw) {
        this.ctx.clearRect(0, 0, this.width, this.height);
      }
      canvas.group.render.call(this.scene, this.ctx);
      if (!isOne) {
        this.ctx.restore();
      }
      return this;
    }
  };
  __publicField(Renderer, "Utils", canvas);
  CanvasShim = {
    Image: null,
    isHeadless: false,
    shim: function(canvas3, Image2) {
      Renderer.Utils.shim(canvas3);
      if (typeof Image2 !== "undefined") {
        CanvasShim.Image = Image2;
      }
      CanvasShim.isHeadless = true;
      return canvas3;
    }
  };
  dom = {
    hasEventListeners: typeof root.addEventListener === "function",
    bind: function(elem, event, func, bool) {
      if (this.hasEventListeners) {
        elem.addEventListener(event, func, !!bool);
      } else {
        elem.attachEvent("on" + event, func);
      }
      return dom;
    },
    unbind: function(elem, event, func, bool) {
      if (dom.hasEventListeners) {
        elem.removeEventListeners(event, func, !!bool);
      } else {
        elem.detachEvent("on" + event, func);
      }
      return dom;
    },
    getRequestAnimationFrame: function() {
      const vendors = ["ms", "moz", "webkit", "o"];
      let lastTime = 0;
      let request = root.requestAnimationFrame;
      if (!request) {
        for (let i = 0;i < vendors.length; i++) {
          request = root[vendors[i] + "RequestAnimationFrame"] || request;
        }
        request = request || fallbackRequest;
      }
      function fallbackRequest(callback, element) {
        const currTime = new Date().getTime();
        const timeToCall = Math.max(0, 16 - (currTime - lastTime));
        const id = root.setTimeout(nextRequest, timeToCall);
        lastTime = currTime + timeToCall;
        function nextRequest() {
          callback(currTime + timeToCall);
        }
        return id;
      }
      return request;
    }
  };
  temp = root.document ? root.document.createElement("div") : {};
  temp.id = "help-two-load";
  Object.defineProperty(dom, "temp", {
    enumerable: true,
    get: function() {
      if (_.isElement(temp) && !root.document.head.contains(temp)) {
        temp.style.display = "none";
        root.document.head.appendChild(temp);
      }
      return temp;
    }
  });
  TwoError = class extends Error {
    constructor(message) {
      super();
      __publicField(this, "name", "Two.js");
      __publicField(this, "message");
      this.message = message;
    }
  };
  Registry = class {
    constructor() {
      __publicField(this, "map", {});
    }
    add(id, obj) {
      this.map[id] = obj;
      return this;
    }
    remove(id) {
      delete this.map[id];
      return this;
    }
    get(id) {
      return this.map[id];
    }
    contains(id) {
      return id in this.map;
    }
  };
  _Stop = class extends Element {
    constructor(offset, color, opacity) {
      super();
      __publicField(this, "_flagOffset", true);
      __publicField(this, "_flagOpacity", true);
      __publicField(this, "_flagColor", true);
      __publicField(this, "_offset", 0);
      __publicField(this, "_opacity", 1);
      __publicField(this, "_color", "#fff");
      for (let prop in proto6) {
        Object.defineProperty(this, prop, proto6[prop]);
      }
      this._renderer.type = "stop";
      this.offset = typeof offset === "number" ? offset : _Stop.Index <= 0 ? 0 : 1;
      this.opacity = typeof opacity === "number" ? opacity : 1;
      this.color = typeof color === "string" ? color : _Stop.Index <= 0 ? "#fff" : "#000";
      _Stop.Index = (_Stop.Index + 1) % 2;
    }
    clone(parent) {
      const clone = new _Stop;
      _.each(_Stop.Properties, function(property) {
        clone[property] = this[property];
      }, this);
      if (parent && parent.stops) {
        parent.stops.push(clone);
      }
      return clone;
    }
    toObject() {
      const result = {};
      _.each(_Stop.Properties, function(k) {
        result[k] = this[k];
      }, this);
      return result;
    }
    flagReset() {
      this._flagOffset = this._flagColor = this._flagOpacity = false;
      super.flagReset.call(this);
      return this;
    }
  };
  Stop = _Stop;
  __publicField(Stop, "Index", 0);
  __publicField(Stop, "Properties", ["offset", "opacity", "color"]);
  proto6 = {
    offset: {
      enumerable: true,
      get: function() {
        return this._offset;
      },
      set: function(v) {
        this._offset = v;
        this._flagOffset = true;
        if (this.parent) {
          this.parent._flagStops = true;
        }
      }
    },
    opacity: {
      enumerable: true,
      get: function() {
        return this._opacity;
      },
      set: function(v) {
        this._opacity = v;
        this._flagOpacity = true;
        if (this.parent) {
          this.parent._flagStops = true;
        }
      }
    },
    color: {
      enumerable: true,
      get: function() {
        return this._color;
      },
      set: function(v) {
        this._color = v;
        this._flagColor = true;
        if (this.parent) {
          this.parent._flagStops = true;
        }
      }
    }
  };
  _Gradient = class extends Element {
    constructor(stops) {
      super();
      __publicField(this, "_flagStops", false);
      __publicField(this, "_flagSpread", false);
      __publicField(this, "_flagUnits", false);
      __publicField(this, "_spread", "");
      __publicField(this, "_units", "");
      for (let prop in proto7) {
        Object.defineProperty(this, prop, proto7[prop]);
      }
      this._renderer.type = "gradient";
      this.id = Constants.Identifier + Constants.uniqueId();
      this.classList = [];
      this._renderer.flagStops = FlagStops.bind(this);
      this._renderer.bindStops = BindStops.bind(this);
      this._renderer.unbindStops = UnbindStops.bind(this);
      this.spread = "pad";
      this.units = "objectBoundingBox";
      if (stops) {
        this.stops = stops;
      }
    }
    clone(parent) {
      const stops = this.stops.map(function(s) {
        return s.clone();
      });
      const clone = new _Gradient(stops);
      _.each(_Gradient.Properties, function(k) {
        clone[k] = this[k];
      }, this);
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const result = {
        stops: this.stops.map(function(s) {
          return s.toObject();
        })
      };
      _.each(_Gradient.Properties, function(k) {
        result[k] = this[k];
      }, this);
      return result;
    }
    _update() {
      if (this._flagSpread || this._flagStops) {
        this.trigger(Events.Types.change);
      }
      return this;
    }
    flagReset() {
      this._flagSpread = this._flagUnits = this._flagStops = false;
      super.flagReset.call(this);
      return this;
    }
  };
  Gradient = _Gradient;
  __publicField(Gradient, "Stop", Stop);
  __publicField(Gradient, "Properties", ["spread", "stops", "renderer", "units"]);
  proto7 = {
    spread: {
      enumerable: true,
      get: function() {
        return this._spread;
      },
      set: function(v) {
        this._spread = v;
        this._flagSpread = true;
      }
    },
    units: {
      enumerable: true,
      get: function() {
        return this._units;
      },
      set: function(v) {
        this._units = v;
        this._flagUnits = true;
      }
    },
    stops: {
      enumerable: true,
      get: function() {
        return this._stops;
      },
      set: function(stops) {
        const bindStops = this._renderer.bindStops;
        const unbindStops = this._renderer.unbindStops;
        if (this._stops) {
          this._stops.unbind(Events.Types.insert, bindStops).unbind(Events.Types.remove, unbindStops);
        }
        this._stops = new Collection((stops || []).slice(0));
        this._stops.bind(Events.Types.insert, bindStops).bind(Events.Types.remove, unbindStops);
        bindStops(this._stops);
      }
    }
  };
  _LinearGradient = class extends Gradient {
    constructor(x1, y1, x2, y2, stops) {
      super(stops);
      __publicField(this, "_flagEndPoints", false);
      __publicField(this, "_left", null);
      __publicField(this, "_right", null);
      for (let prop in proto8) {
        Object.defineProperty(this, prop, proto8[prop]);
      }
      this._renderer.type = "linear-gradient";
      this._renderer.flagEndPoints = FlagEndPoints.bind(this);
      this.left = new Vector;
      this.right = new Vector;
      if (typeof x1 === "number") {
        this.left.x = x1;
      }
      if (typeof y1 === "number") {
        this.left.y = y1;
      }
      if (typeof x2 === "number") {
        this.right.x = x2;
      }
      if (typeof y2 === "number") {
        this.right.y = y2;
      }
    }
    clone(parent) {
      const stops = this.stops.map(function(stop) {
        return stop.clone();
      });
      const clone = new _LinearGradient(this.left._x, this.left._y, this.right._x, this.right._y, stops);
      _.each(Gradient.Properties, function(k) {
        clone[k] = this[k];
      }, this);
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const result = super.toObject.call(this);
      result.left = this.left.toObject();
      result.right = this.right.toObject();
      return result;
    }
    _update() {
      if (this._flagEndPoints || this._flagSpread || this._flagStops) {
        this.trigger(Events.Types.change);
      }
      return this;
    }
    flagReset() {
      this._flagEndPoints = false;
      super.flagReset.call(this);
      return this;
    }
  };
  LinearGradient = _LinearGradient;
  __publicField(LinearGradient, "Properties", ["left", "right"]);
  __publicField(LinearGradient, "Stop", Stop);
  proto8 = {
    left: {
      enumerable: true,
      get: function() {
        return this._left;
      },
      set: function(v) {
        if (this._left instanceof Vector) {
          this._left.unbind(Events.Types.change, this._renderer.flagEndPoints);
        }
        this._left = v;
        this._left.bind(Events.Types.change, this._renderer.flagEndPoints);
        this._flagEndPoints = true;
      }
    },
    right: {
      enumerable: true,
      get: function() {
        return this._right;
      },
      set: function(v) {
        if (this._right instanceof Vector) {
          this._right.unbind(Events.Types.change, this._renderer.flagEndPoints);
        }
        this._right = v;
        this._right.bind(Events.Types.change, this._renderer.flagEndPoints);
        this._flagEndPoints = true;
      }
    }
  };
  _RadialGradient = class extends Gradient {
    constructor(cx, cy, r, stops, fx, fy) {
      super(stops);
      __publicField(this, "_flagRadius", false);
      __publicField(this, "_flagCenter", false);
      __publicField(this, "_flagFocal", false);
      __publicField(this, "_radius", 0);
      __publicField(this, "_center", null);
      __publicField(this, "_focal", null);
      for (let prop in proto9) {
        Object.defineProperty(this, prop, proto9[prop]);
      }
      this._renderer.type = "radial-gradient";
      this._renderer.flagCenter = FlagCenter.bind(this);
      this._renderer.flagFocal = FlagFocal.bind(this);
      this.center = new Vector;
      this.radius = typeof r === "number" ? r : 1;
      this.focal = new Vector;
      if (typeof cx === "number") {
        this.center.x = cx;
      }
      if (typeof cy === "number") {
        this.center.y = cy;
      }
      this.focal.copy(this.center);
      if (typeof fx === "number") {
        this.focal.x = fx;
      }
      if (typeof fy === "number") {
        this.focal.y = fy;
      }
    }
    clone(parent) {
      const stops = this.stops.map(function(stop) {
        return stop.clone();
      });
      const clone = new _RadialGradient(this.center._x, this.center._y, this._radius, stops, this.focal._x, this.focal._y);
      _.each(Gradient.Properties.concat(_RadialGradient.Properties), function(k) {
        clone[k] = this[k];
      }, this);
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const result = super.toObject.call(this);
      _.each(_RadialGradient.Properties, function(k) {
        result[k] = this[k];
      }, this);
      result.center = this.center.toObject();
      result.focal = this.focal.toObject();
      return result;
    }
    _update() {
      if (this._flagRadius || this._flatCenter || this._flagFocal || this._flagSpread || this._flagStops) {
        this.trigger(Events.Types.change);
      }
      return this;
    }
    flagReset() {
      this._flagRadius = this._flagCenter = this._flagFocal = false;
      super.flagReset.call(this);
      return this;
    }
  };
  RadialGradient = _RadialGradient;
  __publicField(RadialGradient, "Stop", Stop);
  __publicField(RadialGradient, "Properties", ["center", "radius", "focal"]);
  proto9 = {
    radius: {
      enumerable: true,
      get: function() {
        return this._radius;
      },
      set: function(v) {
        this._radius = v;
        this._flagRadius = true;
      }
    },
    center: {
      enumerable: true,
      get: function() {
        return this._center;
      },
      set: function(v) {
        if (this._center) {
          this._center.unbind(Events.Types.change, this._renderer.flagCenter);
        }
        this._center = v;
        this._center.bind(Events.Types.change, this._renderer.flagCenter);
        this._flagCenter = true;
      }
    },
    focal: {
      enumerable: true,
      get: function() {
        return this._focal;
      },
      set: function(v) {
        if (this._focal) {
          this._focal.unbind(Events.Types.change, this._renderer.flagFocal);
        }
        this._focal = v;
        this._focal.bind(Events.Types.change, this._renderer.flagFocal);
        this._flagFocal = true;
      }
    }
  };
  regex = {
    video: /\.(mp4|webm|ogg)$/i,
    image: /\.(jpe?g|png|gif|tiff|webp)$/i,
    effect: /texture|gradient/i
  };
  if (root.document) {
    anchor = document.createElement("a");
  }
  _Texture = class extends Element {
    constructor(src, callback) {
      super();
      __publicField(this, "_flagSrc", false);
      __publicField(this, "_flagImage", false);
      __publicField(this, "_flagVideo", false);
      __publicField(this, "_flagLoaded", false);
      __publicField(this, "_flagRepeat", false);
      __publicField(this, "_flagOffset", false);
      __publicField(this, "_flagScale", false);
      __publicField(this, "_src", "");
      __publicField(this, "_image", null);
      __publicField(this, "_loaded", false);
      __publicField(this, "_repeat", "no-repeat");
      __publicField(this, "_scale", 1);
      __publicField(this, "_offset", null);
      this._renderer = {};
      for (let prop in proto10) {
        Object.defineProperty(this, prop, proto10[prop]);
      }
      this._renderer.type = "texture";
      this._renderer.flagOffset = FlagOffset.bind(this);
      this._renderer.flagScale = FlagScale.bind(this);
      this.id = Constants.Identifier + Constants.uniqueId();
      this.classList = [];
      this.loaded = false;
      this.repeat = "no-repeat";
      this.offset = new Vector;
      if (typeof callback === "function") {
        const loaded = function() {
          this.unbind(Events.Types.load, loaded);
          if (typeof callback === "function") {
            callback();
          }
        }.bind(this);
        this.bind(Events.Types.load, loaded);
      }
      if (typeof src === "string") {
        this.src = src;
      } else if (typeof src === "object") {
        const elemString = Object.prototype.toString.call(src);
        if (elemString === "[object HTMLImageElement]" || elemString === "[object HTMLCanvasElement]" || elemString === "[object HTMLVideoElement]" || elemString === "[object Image]") {
          this.image = src;
        }
      }
      this._update();
    }
    static getAbsoluteURL(path) {
      if (!anchor) {
        return path;
      }
      anchor.href = path;
      return anchor.href;
    }
    static loadHeadlessBuffer(texture, loaded) {
      texture.image.onload = loaded;
      texture.image.src = texture.src;
    }
    static getTag(image) {
      return image && image.nodeName && image.nodeName.toLowerCase() || "img";
    }
    static getImage(src) {
      const absoluteSrc = _Texture.getAbsoluteURL(src);
      if (_Texture.ImageRegistry.contains(absoluteSrc)) {
        return _Texture.ImageRegistry.get(absoluteSrc);
      }
      let image;
      if (CanvasShim.Image) {
        image = new CanvasShim.Image;
        Renderer.Utils.shim(image, "img");
      } else if (root.document) {
        if (regex.video.test(absoluteSrc)) {
          image = document.createElement("video");
        } else {
          image = document.createElement("img");
        }
      } else {
        console.warn("Two.js: no prototypical image defined for Two.Texture");
      }
      image.crossOrigin = "anonymous";
      image.referrerPolicy = "no-referrer";
      return image;
    }
    static load(texture, callback) {
      let image = texture.image;
      let tag = _Texture.getTag(image);
      if (texture._flagImage) {
        if (/canvas/i.test(tag)) {
          _Texture.Register.canvas(texture, callback);
        } else {
          texture._src = !CanvasShim.isHeadless && image.getAttribute("two-src") || image.src;
          _Texture.Register[tag](texture, callback);
        }
      }
      if (texture._flagSrc) {
        if (!image) {
          image = _Texture.getImage(texture.src);
          texture.image = image;
        }
        tag = _Texture.getTag(image);
        _Texture.Register[tag](texture, callback);
      }
    }
    clone() {
      const clone = new _Texture(this.src);
      clone.repeat = this.repeat;
      clone.offset.copy(this.origin);
      clone.scale = this.scale;
      return clone;
    }
    toObject() {
      return {
        src: this.src,
        repeat: this.repeat,
        origin: this.origin.toObject(),
        scale: typeof this.scale === "number" ? this.scale : this.scale.toObject()
      };
    }
    _update() {
      if (this._flagSrc || this._flagImage) {
        this.trigger(Events.Types.change);
        if (this._flagSrc || this._flagImage) {
          this.loaded = false;
          _Texture.load(this, function() {
            this.loaded = true;
            this.trigger(Events.Types.change).trigger(Events.Types.load);
          }.bind(this));
        }
      }
      if (this._image && this._image.readyState >= 4) {
        this._flagVideo = true;
      }
      return this;
    }
    flagReset() {
      this._flagSrc = this._flagImage = this._flagLoaded = this._flagRepeat = this._flagVideo = this._flagScale = this._flagOffset = false;
      super.flagReset.call(this);
      return this;
    }
  };
  Texture = _Texture;
  __publicField(Texture, "Properties", [
    "src",
    "loaded",
    "repeat",
    "scale",
    "offset",
    "image"
  ]);
  __publicField(Texture, "RegularExpressions", regex);
  __publicField(Texture, "ImageRegistry", new Registry);
  __publicField(Texture, "Register", {
    canvas: function(texture, callback) {
      texture._src = "#" + texture.id;
      _Texture.ImageRegistry.add(texture.src, texture.image);
      if (typeof callback === "function") {
        callback();
      }
    },
    img: function(texture, callback) {
      const image = texture.image;
      const loaded = function(e) {
        if (!CanvasShim.isHeadless && image.removeEventListener && typeof image.removeEventListener === "function") {
          image.removeEventListener("load", loaded, false);
          image.removeEventListener("error", error, false);
        }
        if (typeof callback === "function") {
          callback();
        }
      };
      const error = function(e) {
        if (!CanvasShim.isHeadless && typeof image.removeEventListener === "function") {
          image.removeEventListener("load", loaded, false);
          image.removeEventListener("error", error, false);
        }
        throw new TwoError("unable to load " + texture.src);
      };
      if (typeof image.width === "number" && image.width > 0 && typeof image.height === "number" && image.height > 0) {
        loaded();
      } else if (!CanvasShim.isHeadless && typeof image.addEventListener === "function") {
        image.addEventListener("load", loaded, false);
        image.addEventListener("error", error, false);
      }
      texture._src = _Texture.getAbsoluteURL(texture._src);
      if (!CanvasShim.isHeadless && image && image.getAttribute("two-src")) {
        return;
      }
      if (!CanvasShim.isHeadless) {
        image.setAttribute("two-src", texture.src);
      }
      _Texture.ImageRegistry.add(texture.src, image);
      if (CanvasShim.isHeadless) {
        _Texture.loadHeadlessBuffer(texture, loaded);
      } else {
        texture.image.src = texture.src;
      }
    },
    video: function(texture, callback) {
      if (CanvasShim.isHeadless) {
        throw new TwoError("video textures are not implemented in headless environments.");
      }
      const loaded = function(e) {
        texture.image.removeEventListener("canplaythrough", loaded, false);
        texture.image.removeEventListener("error", error, false);
        texture.image.width = texture.image.videoWidth;
        texture.image.height = texture.image.videoHeight;
        if (typeof callback === "function") {
          callback();
        }
      };
      const error = function(e) {
        texture.image.removeEventListener("canplaythrough", loaded, false);
        texture.image.removeEventListener("error", error, false);
        throw new TwoError("unable to load " + texture.src);
      };
      texture._src = _Texture.getAbsoluteURL(texture._src);
      if (!texture.image.getAttribute("two-src")) {
        texture.image.setAttribute("two-src", texture.src);
        _Texture.ImageRegistry.add(texture.src, texture.image);
      }
      if (texture.image.readyState >= 4) {
        loaded();
      } else {
        texture.image.addEventListener("canplaythrough", loaded, false);
        texture.image.addEventListener("error", error, false);
        texture.image.src = texture.src;
        texture.image.load();
      }
    }
  });
  proto10 = {
    src: {
      enumerable: true,
      get: function() {
        return this._src;
      },
      set: function(v) {
        this._src = v;
        this._flagSrc = true;
      }
    },
    loaded: {
      enumerable: true,
      get: function() {
        return this._loaded;
      },
      set: function(v) {
        this._loaded = v;
        this._flagLoaded = true;
      }
    },
    repeat: {
      enumerable: true,
      get: function() {
        return this._repeat;
      },
      set: function(v) {
        this._repeat = v;
        this._flagRepeat = true;
      }
    },
    image: {
      enumerable: true,
      get: function() {
        return this._image;
      },
      set: function(image) {
        const tag = Texture.getTag(image);
        let index;
        switch (tag) {
          case "canvas":
            index = "#" + image.id;
            break;
          default:
            index = image.src;
        }
        if (Texture.ImageRegistry.contains(index)) {
          this._image = Texture.ImageRegistry.get(image.src);
        } else {
          this._image = image;
        }
        this._flagImage = true;
      }
    },
    offset: {
      enumerable: true,
      get: function() {
        return this._offset;
      },
      set: function(v) {
        if (this._offset) {
          this._offset.unbind(Events.Types.change, this._renderer.flagOffset);
        }
        this._offset = v;
        this._offset.bind(Events.Types.change, this._renderer.flagOffset);
        this._flagOffset = true;
      }
    },
    scale: {
      enumerable: true,
      get: function() {
        return this._scale;
      },
      set: function(v) {
        if (this._scale instanceof Vector) {
          this._scale.unbind(Events.Types.change, this._renderer.flagScale);
        }
        this._scale = v;
        if (this._scale instanceof Vector) {
          this._scale.bind(Events.Types.change, this._renderer.flagScale);
        }
        this._flagScale = true;
      }
    }
  };
  min3 = Math.min;
  max3 = Math.max;
  ceil = Math.ceil;
  floor2 = Math.floor;
  vector = new Vector;
  _Path = class extends Shape {
    constructor(vertices, closed2, curved, manual) {
      super();
      __publicField(this, "_flagVertices", true);
      __publicField(this, "_flagLength", true);
      __publicField(this, "_flagFill", true);
      __publicField(this, "_flagStroke", true);
      __publicField(this, "_flagLinewidth", true);
      __publicField(this, "_flagOpacity", true);
      __publicField(this, "_flagVisible", true);
      __publicField(this, "_flagCap", true);
      __publicField(this, "_flagJoin", true);
      __publicField(this, "_flagMiter", true);
      __publicField(this, "_flagMask", false);
      __publicField(this, "_flagClip", false);
      __publicField(this, "_length", 0);
      __publicField(this, "_fill", "#fff");
      __publicField(this, "_stroke", "#000");
      __publicField(this, "_linewidth", 1);
      __publicField(this, "_opacity", 1);
      __publicField(this, "_visible", true);
      __publicField(this, "_cap", "round");
      __publicField(this, "_join", "round");
      __publicField(this, "_miter", 4);
      __publicField(this, "_closed", true);
      __publicField(this, "_curved", false);
      __publicField(this, "_automatic", true);
      __publicField(this, "_beginning", 0);
      __publicField(this, "_ending", 1);
      __publicField(this, "_mask", null);
      __publicField(this, "_clip", false);
      __publicField(this, "_dashes", null);
      for (let prop in proto11) {
        Object.defineProperty(this, prop, proto11[prop]);
      }
      this._renderer.type = "path";
      this._renderer.flagVertices = FlagVertices.bind(this);
      this._renderer.bindVertices = BindVertices.bind(this);
      this._renderer.unbindVertices = UnbindVertices.bind(this);
      this._renderer.flagFill = FlagFill.bind(this);
      this._renderer.flagStroke = FlagStroke.bind(this);
      this._renderer.vertices = [];
      this._renderer.collection = [];
      this.closed = !!closed2;
      this.curved = !!curved;
      this.beginning = 0;
      this.ending = 1;
      this.fill = "#fff";
      this.stroke = "#000";
      this.linewidth = 1;
      this.opacity = 1;
      this.className = "";
      this.visible = true;
      this.cap = "butt";
      this.join = "miter";
      this.miter = 4;
      this.vertices = vertices;
      this.automatic = !manual;
      this.dashes = [];
      this.dashes.offset = 0;
    }
    clone(parent) {
      const clone = new _Path;
      for (let j = 0;j < this.vertices.length; j++) {
        clone.vertices.push(this.vertices[j].clone());
      }
      for (let i = 0;i < _Path.Properties.length; i++) {
        const k = _Path.Properties[i];
        clone[k] = this[k];
      }
      clone.className = this.className;
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.skewX = this.skewX;
      clone.skewY = this.skewY;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      if (parent) {
        parent.add(clone);
      }
      return clone._update();
    }
    toObject() {
      const result = {
        vertices: this.vertices.map(function(v) {
          return v.toObject();
        })
      };
      _.each(_Path.Properties, function(k) {
        if (typeof this[k] !== "undefined") {
          if (this[k].toObject) {
            result[k] = this[k].toObject();
          } else {
            result[k] = this[k];
          }
        }
      }, this);
      result.className = this.className;
      result.translation = this.translation.toObject();
      result.rotation = this.rotation;
      result.scale = this.scale instanceof Vector ? this.scale.toObject() : this.scale;
      result.skewX = this.skewX;
      result.skewY = this.skewY;
      if (this.matrix.manual) {
        result.matrix = this.matrix.toObject();
      }
      return result;
    }
    noFill() {
      this.fill = "none";
      return this;
    }
    noStroke() {
      this.stroke = "none";
      return this;
    }
    corner() {
      const rect = this.getBoundingClientRect(true);
      const hw = rect.width / 2;
      const hh = rect.height / 2;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      for (let i = 0;i < this.vertices.length; i++) {
        const v = this.vertices[i];
        v.x -= cx;
        v.y -= cy;
        v.x += hw;
        v.y += hh;
      }
      if (this.mask) {
        this.mask.translation.x -= cx;
        this.mask.translation.x += hw;
        this.mask.translation.y -= cy;
        this.mask.translation.y += hh;
      }
      return this;
    }
    center() {
      const rect = this.getBoundingClientRect(true);
      const cx = rect.left + rect.width / 2 - this.translation.x;
      const cy = rect.top + rect.height / 2 - this.translation.y;
      for (let i = 0;i < this.vertices.length; i++) {
        const v = this.vertices[i];
        v.x -= cx;
        v.y -= cy;
      }
      if (this.mask) {
        this.mask.translation.x -= cx;
        this.mask.translation.y -= cy;
      }
      return this;
    }
    getBoundingClientRect(shallow) {
      let matrix, border, l, i, v0, v1;
      let left = Infinity, right = (-Infinity), top = Infinity, bottom = (-Infinity);
      this._update(true);
      matrix = shallow ? this.matrix : this.worldMatrix;
      border = (this.linewidth || 0) / 2;
      l = this._renderer.vertices.length;
      if (this.linewidth > 0 || this.stroke && !/(transparent|none)/i.test(this.stroke)) {
        if (this.matrix.manual) {
          const { scaleX, scaleY } = decomposeMatrix(matrix.elements[0], matrix.elements[3], matrix.elements[1], matrix.elements[4], matrix.elements[2], matrix.elements[5]);
          if (typeof scaleX === "number" && typeof scaleY === "number") {
            border = Math.max(scaleX, scaleY) * (this.linewidth || 0) / 2;
          }
        } else {
          border *= typeof this.scale === "number" ? this.scale : Math.max(this.scale.x, this.scale.y);
        }
      }
      if (l <= 0) {
        return {
          width: 0,
          height: 0
        };
      }
      for (i = 0;i < l; i++) {
        v1 = this._renderer.vertices[i];
        v0 = this._renderer.vertices[(i + l - 1) % l];
        const [v0x, v0y] = matrix.multiply(v0.x, v0.y);
        const [v1x, v1y] = matrix.multiply(v1.x, v1.y);
        if (v0.controls && v1.controls) {
          let rx = v0.controls.right.x;
          let ry = v0.controls.right.y;
          if (v0.relative) {
            rx += v0.x;
            ry += v0.y;
          }
          let [c0x, c0y] = matrix.multiply(rx, ry);
          let lx = v1.controls.left.x;
          let ly = v1.controls.left.y;
          if (v1.relative) {
            lx += v1.x;
            ly += v1.y;
          }
          let [c1x, c1y] = matrix.multiply(lx, ly);
          const bb = getCurveBoundingBox(v0x, v0y, c0x, c0y, c1x, c1y, v1x, v1y);
          top = min3(bb.min.y - border, top);
          left = min3(bb.min.x - border, left);
          right = max3(bb.max.x + border, right);
          bottom = max3(bb.max.y + border, bottom);
        } else {
          if (i <= 1) {
            top = min3(v0y - border, top);
            left = min3(v0x - border, left);
            right = max3(v0x + border, right);
            bottom = max3(v0y + border, bottom);
          }
          top = min3(v1y - border, top);
          left = min3(v1x - border, left);
          right = max3(v1x + border, right);
          bottom = max3(v1y + border, bottom);
        }
      }
      return {
        top,
        left,
        right,
        bottom,
        width: right - left,
        height: bottom - top
      };
    }
    getPointAt(t, obj) {
      let ia, ib, result;
      let x, x1, x2, x3, x4, y, y1, y2, y3, y4, left, right;
      let target = this.length * Math.min(Math.max(t, 0), 1);
      const length = this.vertices.length;
      const last = length - 1;
      let a = null;
      let b = null;
      for (let i = 0, l = this._lengths.length, sum = 0;i < l; i++) {
        if (sum + this._lengths[i] >= target) {
          if (this._closed) {
            ia = mod(i, length);
            ib = mod(i - 1, length);
            if (i === 0) {
              ia = ib;
              ib = i;
            }
          } else {
            ia = i;
            ib = Math.min(Math.max(i - 1, 0), last);
          }
          a = this.vertices[ia];
          b = this.vertices[ib];
          target -= sum;
          if (this._lengths[i] !== 0) {
            t = target / this._lengths[i];
          } else {
            t = 0;
          }
          break;
        }
        sum += this._lengths[i];
      }
      if (a === null || b === null) {
        return null;
      }
      if (!a) {
        return b;
      } else if (!b) {
        return a;
      }
      right = b.controls && b.controls.right;
      left = a.controls && a.controls.left;
      x1 = b.x;
      y1 = b.y;
      x2 = (right || b).x;
      y2 = (right || b).y;
      x3 = (left || a).x;
      y3 = (left || a).y;
      x4 = a.x;
      y4 = a.y;
      if (right && b.relative) {
        x2 += b.x;
        y2 += b.y;
      }
      if (left && a.relative) {
        x3 += a.x;
        y3 += a.y;
      }
      x = getComponentOnCubicBezier(t, x1, x2, x3, x4);
      y = getComponentOnCubicBezier(t, y1, y2, y3, y4);
      const t1x = lerp(x1, x2, t);
      const t1y = lerp(y1, y2, t);
      const t2x = lerp(x2, x3, t);
      const t2y = lerp(y2, y3, t);
      const t3x = lerp(x3, x4, t);
      const t3y = lerp(y3, y4, t);
      const brx = lerp(t1x, t2x, t);
      const bry = lerp(t1y, t2y, t);
      const alx = lerp(t2x, t3x, t);
      const aly = lerp(t2y, t3y, t);
      if (_.isObject(obj)) {
        obj.x = x;
        obj.y = y;
        if (obj instanceof Anchor) {
          obj.controls.left.x = brx;
          obj.controls.left.y = bry;
          obj.controls.right.x = alx;
          obj.controls.right.y = aly;
          if (!(typeof obj.relative === "boolean") || obj.relative) {
            obj.controls.left.x -= x;
            obj.controls.left.y -= y;
            obj.controls.right.x -= x;
            obj.controls.right.y -= y;
          }
        }
        obj.t = t;
        return obj;
      }
      result = new Anchor(x, y, brx - x, bry - y, alx - x, aly - y, this._curved ? Commands.curve : Commands.line);
      result.t = t;
      return result;
    }
    plot() {
      if (this.curved) {
        getCurveFromPoints(this._collection, this.closed);
        return this;
      }
      for (let i = 0;i < this._collection.length; i++) {
        this._collection[i].command = i === 0 ? Commands.move : Commands.line;
      }
      return this;
    }
    subdivide(limit) {
      this._update();
      const last = this.vertices.length - 1;
      const closed2 = this._closed || this.vertices[last]._command === Commands.close;
      let b = this.vertices[last];
      let points = [], verts;
      _.each(this.vertices, function(a, i) {
        if (i <= 0 && !closed2) {
          b = a;
          return;
        }
        if (a.command === Commands.move) {
          points.push(new Anchor(b.x, b.y));
          if (i > 0) {
            points[points.length - 1].command = Commands.line;
          }
          b = a;
          return;
        }
        verts = getSubdivisions(a, b, limit);
        points = points.concat(verts);
        _.each(verts, function(v, i2) {
          if (i2 <= 0 && b.command === Commands.move) {
            v.command = Commands.move;
          } else {
            v.command = Commands.line;
          }
        });
        if (i >= last) {
          if (this._closed && this._automatic) {
            b = a;
            verts = getSubdivisions(a, b, limit);
            points = points.concat(verts);
            _.each(verts, function(v, i2) {
              if (i2 <= 0 && b.command === Commands.move) {
                v.command = Commands.move;
              } else {
                v.command = Commands.line;
              }
            });
          } else if (closed2) {
            points.push(new Anchor(a.x, a.y));
          }
          points[points.length - 1].command = closed2 ? Commands.close : Commands.line;
        }
        b = a;
      }, this);
      this._automatic = false;
      this._curved = false;
      this.vertices = points;
      return this;
    }
    _updateLength(limit, silent) {
      if (!silent) {
        this._update();
      }
      const length = this.vertices.length;
      const last = length - 1;
      const closed2 = false;
      let b = this.vertices[last];
      let sum = 0;
      if (typeof this._lengths === "undefined") {
        this._lengths = [];
      }
      _.each(this.vertices, function(a, i) {
        if (i <= 0 && !closed2 || a.command === Commands.move) {
          b = a;
          this._lengths[i] = 0;
          return;
        }
        this._lengths[i] = getCurveLength2(a, b, limit);
        sum += this._lengths[i];
        if (i >= last && closed2) {
          b = this.vertices[(i + 1) % length];
          this._lengths[i + 1] = getCurveLength2(a, b, limit);
          sum += this._lengths[i + 1];
        }
        b = a;
      }, this);
      this._length = sum;
      this._flagLength = false;
      return this;
    }
    _update() {
      if (this._flagVertices) {
        if (this._automatic) {
          this.plot();
        }
        if (this._flagLength) {
          this._updateLength(undefined, true);
        }
        const l = this._collection.length;
        const closed2 = this._closed;
        const beginning = Math.min(this._beginning, this._ending);
        const ending = Math.max(this._beginning, this._ending);
        const bid = getIdByLength(this, beginning * this._length);
        const eid = getIdByLength(this, ending * this._length);
        const low = ceil(bid);
        const high = floor2(eid);
        let left, right, prev, next, v, i;
        this._renderer.vertices.length = 0;
        for (i = 0;i < l; i++) {
          if (this._renderer.collection.length <= i) {
            this._renderer.collection.push(new Anchor);
          }
          if (i > high && !right) {
            v = this._renderer.collection[i].copy(this._collection[i]);
            this.getPointAt(ending, v);
            v.command = this._renderer.collection[i].command;
            this._renderer.vertices.push(v);
            right = v;
            prev = this._collection[i - 1];
            if (prev && prev.controls) {
              if (v.relative) {
                v.controls.right.clear();
              } else {
                v.controls.right.copy(v);
              }
              if (prev.relative) {
                this._renderer.collection[i - 1].controls.right.copy(prev.controls.right).lerp(Vector.zero, 1 - v.t);
              } else {
                this._renderer.collection[i - 1].controls.right.copy(prev.controls.right).lerp(prev, 1 - v.t);
              }
            }
          } else if (i >= low && i <= high) {
            v = this._renderer.collection[i].copy(this._collection[i]);
            this._renderer.vertices.push(v);
            if (i === high && contains(this, ending)) {
              right = v;
              if (!closed2 && right.controls) {
                if (right.relative) {
                  right.controls.right.clear();
                } else {
                  right.controls.right.copy(right);
                }
              }
            } else if (i === low && contains(this, beginning)) {
              left = v;
              left.command = Commands.move;
              if (!closed2 && left.controls) {
                if (left.relative) {
                  left.controls.left.clear();
                } else {
                  left.controls.left.copy(left);
                }
              }
            }
          }
        }
        if (low > 0 && !left) {
          i = low - 1;
          v = this._renderer.collection[i].copy(this._collection[i]);
          this.getPointAt(beginning, v);
          v.command = Commands.move;
          this._renderer.vertices.unshift(v);
          next = this._collection[i + 1];
          if (next && next.controls) {
            v.controls.left.clear();
            if (next.relative) {
              this._renderer.collection[i + 1].controls.left.copy(next.controls.left).lerp(Vector.zero, v.t);
            } else {
              vector.copy(next);
              this._renderer.collection[i + 1].controls.left.copy(next.controls.left).lerp(next, v.t);
            }
          }
        }
      }
      Shape.prototype._update.apply(this, arguments);
      return this;
    }
    flagReset() {
      this._flagVertices = this._flagLength = this._flagFill = this._flagStroke = this._flagLinewidth = this._flagOpacity = this._flagVisible = this._flagCap = this._flagJoin = this._flagMiter = this._flagClip = false;
      Shape.prototype.flagReset.call(this);
      return this;
    }
  };
  Path = _Path;
  __publicField(Path, "Properties", [
    "fill",
    "stroke",
    "linewidth",
    "opacity",
    "visible",
    "cap",
    "join",
    "miter",
    "closed",
    "curved",
    "automatic",
    "beginning",
    "ending"
  ]);
  __publicField(Path, "Utils", {
    getCurveLength: getCurveLength2
  });
  proto11 = {
    linewidth: {
      enumerable: true,
      get: function() {
        return this._linewidth;
      },
      set: function(v) {
        this._linewidth = v;
        this._flagLinewidth = true;
      }
    },
    opacity: {
      enumerable: true,
      get: function() {
        return this._opacity;
      },
      set: function(v) {
        this._opacity = v;
        this._flagOpacity = true;
      }
    },
    visible: {
      enumerable: true,
      get: function() {
        return this._visible;
      },
      set: function(v) {
        this._visible = v;
        this._flagVisible = true;
      }
    },
    cap: {
      enumerable: true,
      get: function() {
        return this._cap;
      },
      set: function(v) {
        this._cap = v;
        this._flagCap = true;
      }
    },
    join: {
      enumerable: true,
      get: function() {
        return this._join;
      },
      set: function(v) {
        this._join = v;
        this._flagJoin = true;
      }
    },
    miter: {
      enumerable: true,
      get: function() {
        return this._miter;
      },
      set: function(v) {
        this._miter = v;
        this._flagMiter = true;
      }
    },
    fill: {
      enumerable: true,
      get: function() {
        return this._fill;
      },
      set: function(f) {
        if (this._fill instanceof Gradient || this._fill instanceof LinearGradient || this._fill instanceof RadialGradient || this._fill instanceof Texture) {
          this._fill.unbind(Events.Types.change, this._renderer.flagFill);
        }
        this._fill = f;
        this._flagFill = true;
        if (this._fill instanceof Gradient || this._fill instanceof LinearGradient || this._fill instanceof RadialGradient || this._fill instanceof Texture) {
          this._fill.bind(Events.Types.change, this._renderer.flagFill);
        }
      }
    },
    stroke: {
      enumerable: true,
      get: function() {
        return this._stroke;
      },
      set: function(f) {
        if (this._stroke instanceof Gradient || this._stroke instanceof LinearGradient || this._stroke instanceof RadialGradient || this._stroke instanceof Texture) {
          this._stroke.unbind(Events.Types.change, this._renderer.flagStroke);
        }
        this._stroke = f;
        this._flagStroke = true;
        if (this._stroke instanceof Gradient || this._stroke instanceof LinearGradient || this._stroke instanceof RadialGradient || this._stroke instanceof Texture) {
          this._stroke.bind(Events.Types.change, this._renderer.flagStroke);
        }
      }
    },
    length: {
      get: function() {
        if (this._flagLength) {
          this._updateLength();
        }
        return this._length;
      }
    },
    closed: {
      enumerable: true,
      get: function() {
        return this._closed;
      },
      set: function(v) {
        this._closed = !!v;
        this._flagVertices = true;
      }
    },
    curved: {
      enumerable: true,
      get: function() {
        return this._curved;
      },
      set: function(v) {
        this._curved = !!v;
        this._flagVertices = true;
      }
    },
    automatic: {
      enumerable: true,
      get: function() {
        return this._automatic;
      },
      set: function(v) {
        if (v === this._automatic) {
          return;
        }
        this._automatic = !!v;
        const method = this._automatic ? "ignore" : "listen";
        _.each(this.vertices, function(v2) {
          v2[method]();
        });
      }
    },
    beginning: {
      enumerable: true,
      get: function() {
        return this._beginning;
      },
      set: function(v) {
        this._beginning = v;
        this._flagVertices = true;
      }
    },
    ending: {
      enumerable: true,
      get: function() {
        return this._ending;
      },
      set: function(v) {
        this._ending = v;
        this._flagVertices = true;
      }
    },
    vertices: {
      enumerable: true,
      get: function() {
        return this._collection;
      },
      set: function(vertices) {
        const bindVertices = this._renderer.bindVertices;
        const unbindVertices = this._renderer.unbindVertices;
        if (this._collection) {
          this._collection.unbind(Events.Types.insert, bindVertices).unbind(Events.Types.remove, unbindVertices);
        }
        if (vertices instanceof Collection) {
          this._collection = vertices;
        } else {
          this._collection = new Collection(vertices || []);
        }
        this._collection.bind(Events.Types.insert, bindVertices).bind(Events.Types.remove, unbindVertices);
        bindVertices(this._collection);
      }
    },
    mask: {
      enumerable: true,
      get: function() {
        return this._mask;
      },
      set: function(v) {
        this._mask = v;
        this._flagMask = true;
        if (_.isObject(v) && !v.clip) {
          v.clip = true;
        }
      }
    },
    clip: {
      enumerable: true,
      get: function() {
        return this._clip;
      },
      set: function(v) {
        this._clip = v;
        this._flagClip = true;
      }
    },
    dashes: {
      enumerable: true,
      get: function() {
        return this._dashes;
      },
      set: function(v) {
        if (typeof v.offset !== "number") {
          v.offset = this.dashes && this._dashes.offset || 0;
        }
        this._dashes = v;
      }
    }
  };
  _Rectangle = class extends Path {
    constructor(x, y, width, height) {
      const points = [
        new Anchor,
        new Anchor,
        new Anchor,
        new Anchor
      ];
      super(points, true, false, true);
      __publicField(this, "_flagWidth", 0);
      __publicField(this, "_flagHeight", 0);
      __publicField(this, "_width", 0);
      __publicField(this, "_height", 0);
      __publicField(this, "_origin", null);
      for (let prop in proto12) {
        Object.defineProperty(this, prop, proto12[prop]);
      }
      this.width = typeof width === "number" ? width : 1;
      this.height = typeof height === "number" ? height : 1;
      this.origin = new Vector;
      if (typeof x === "number") {
        this.translation.x = x;
      }
      if (typeof y === "number") {
        this.translation.y = y;
      }
      this._update();
    }
    _update() {
      if (this._flagVertices || this._flagWidth || this._flagHeight) {
        const xr = this._width / 2;
        const yr = this._height / 2;
        if (!this._closed && this.vertices.length === 4) {
          this.vertices.push(new Anchor);
        }
        this.vertices[0].set(-xr, -yr).sub(this._origin).command = Commands.move;
        this.vertices[1].set(xr, -yr).sub(this._origin).command = Commands.line;
        this.vertices[2].set(xr, yr).sub(this._origin).command = Commands.line;
        this.vertices[3].set(-xr, yr).sub(this._origin).command = Commands.line;
        if (this.vertices[4]) {
          this.vertices[4].set(-xr, -yr).sub(this._origin).command = Commands.line;
        }
      }
      super._update.call(this);
      return this;
    }
    flagReset() {
      this._flagWidth = this._flagHeight = false;
      super.flagReset.call(this);
      return this;
    }
    clone(parent) {
      const clone = new _Rectangle(0, 0, this.width, this.height);
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.skewX = this.skewX;
      clone.skewY = this.skewY;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      for (let i = 0;i < Path.Properties.length; i++) {
        const k = Path.Properties[i];
        clone[k] = this[k];
      }
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const object = super.toObject.call(this);
      object.width = this.width;
      object.height = this.height;
      object.origin = this.origin.toObject();
      return object;
    }
  };
  Rectangle = _Rectangle;
  __publicField(Rectangle, "Properties", ["width", "height"]);
  proto12 = {
    width: {
      enumerable: true,
      get: function() {
        return this._width;
      },
      set: function(v) {
        this._width = v;
        this._flagWidth = true;
      }
    },
    height: {
      enumerable: true,
      get: function() {
        return this._height;
      },
      set: function(v) {
        this._height = v;
        this._flagHeight = true;
      }
    },
    origin: {
      enumerable: true,
      get: function() {
        return this._origin;
      },
      set: function(v) {
        if (this._origin) {
          this._origin.unbind(Events.Types.change, this._renderer.flagVertices);
        }
        this._origin = v;
        this._origin.bind(Events.Types.change, this._renderer.flagVertices);
        this._renderer.flagVertices();
      }
    }
  };
  _Sprite = class extends Rectangle {
    constructor(path, ox, oy, cols, rows, frameRate) {
      super(ox, oy, 0, 0);
      __publicField(this, "_flagTexture", false);
      __publicField(this, "_flagColumns", false);
      __publicField(this, "_flagRows", false);
      __publicField(this, "_flagFrameRate", false);
      __publicField(this, "_flagIndex", false);
      __publicField(this, "_amount", 1);
      __publicField(this, "_duration", 0);
      __publicField(this, "_startTime", 0);
      __publicField(this, "_playing", false);
      __publicField(this, "_firstFrame", 0);
      __publicField(this, "_lastFrame", 0);
      __publicField(this, "_loop", true);
      __publicField(this, "_texture", null);
      __publicField(this, "_columns", 1);
      __publicField(this, "_rows", 1);
      __publicField(this, "_frameRate", 0);
      __publicField(this, "_index", 0);
      __publicField(this, "_origin", null);
      for (let prop in proto13) {
        Object.defineProperty(this, prop, proto13[prop]);
      }
      this.noStroke();
      this.noFill();
      if (path instanceof Texture) {
        this.texture = path;
      } else if (typeof path === "string") {
        this.texture = new Texture(path);
      }
      this.origin = new Vector;
      this._update();
      if (typeof cols === "number") {
        this.columns = cols;
      }
      if (typeof rows === "number") {
        this.rows = rows;
      }
      if (typeof frameRate === "number") {
        this.frameRate = frameRate;
      }
      this.index = 0;
    }
    play(firstFrame, lastFrame, onLastFrame) {
      this._playing = true;
      this._firstFrame = 0;
      this._lastFrame = this.amount - 1;
      this._startTime = _.performance.now();
      if (typeof firstFrame === "number") {
        this._firstFrame = firstFrame;
      }
      if (typeof lastFrame === "number") {
        this._lastFrame = lastFrame;
      }
      if (typeof onLastFrame === "function") {
        this._onLastFrame = onLastFrame;
      } else {
        delete this._onLastFrame;
      }
      if (this._index !== this._firstFrame) {
        this._startTime -= 1000 * Math.abs(this._index - this._firstFrame) / this._frameRate;
      }
      return this;
    }
    pause() {
      this._playing = false;
      return this;
    }
    stop() {
      this._playing = false;
      this._index = 0;
      return this;
    }
    clone(parent) {
      const clone = new _Sprite(this.texture, this.translation.x, this.translation.y, this.columns, this.rows, this.frameRate);
      if (this.playing) {
        clone.play(this._firstFrame, this._lastFrame);
        clone._loop = this._loop;
      }
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const object = super.toObject.call(this);
      object.texture = this.texture.toObject();
      object.columns = this.columns;
      object.rows = this.rows;
      object.frameRate = this.frameRate;
      object.index = this.index;
      object._firstFrame = this._firstFrame;
      object._lastFrame = this._lastFrame;
      object._loop = this._loop;
      return object;
    }
    _update() {
      const effect = this._texture;
      const cols = this._columns;
      const rows = this._rows;
      let width, height, elapsed, amount, duration;
      let index, iw, ih, frames;
      if (effect) {
        if (this._flagColumns || this._flagRows) {
          this._amount = this._columns * this._rows;
        }
        if (this._flagFrameRate) {
          this._duration = 1000 * this._amount / this._frameRate;
        }
        if (this._flagTexture) {
          this.fill = effect;
        }
        if (effect.loaded) {
          iw = effect.image.width;
          ih = effect.image.height;
          width = iw / cols;
          height = ih / rows;
          amount = this._amount;
          if (this.width !== width) {
            this.width = width;
          }
          if (this.height !== height) {
            this.height = height;
          }
          if (this._playing && this._frameRate > 0) {
            if (_.isNaN(this._lastFrame)) {
              this._lastFrame = amount - 1;
            }
            elapsed = _.performance.now() - this._startTime;
            frames = this._lastFrame + 1;
            duration = 1000 * (frames - this._firstFrame) / this._frameRate;
            if (this._loop) {
              elapsed = elapsed % duration;
            } else {
              elapsed = Math.min(elapsed, duration);
            }
            index = lerp(this._firstFrame, frames, elapsed / duration);
            index = Math.floor(index);
            if (index !== this._index) {
              this._index = index;
              if (index >= this._lastFrame - 1 && this._onLastFrame) {
                this._onLastFrame();
              }
            }
          }
          const col = this._index % cols;
          const row = Math.floor(this._index / cols);
          const ox = -width * col + (iw - width) / 2;
          const oy = -height * row + (ih - height) / 2;
          if (ox !== effect.offset.x) {
            effect.offset.x = ox;
          }
          if (oy !== effect.offset.y) {
            effect.offset.y = oy;
          }
        }
      }
      super._update.call(this);
      return this;
    }
    flagReset() {
      this._flagTexture = this._flagColumns = this._flagRows = this._flagFrameRate = false;
      super.flagReset.call(this);
      return this;
    }
  };
  Sprite = _Sprite;
  __publicField(Sprite, "Properties", [
    "texture",
    "columns",
    "rows",
    "frameRate",
    "index"
  ]);
  proto13 = {
    texture: {
      enumerable: true,
      get: function() {
        return this._texture;
      },
      set: function(v) {
        this._texture = v;
        this._flagTexture = true;
      }
    },
    columns: {
      enumerable: true,
      get: function() {
        return this._columns;
      },
      set: function(v) {
        this._columns = v;
        this._flagColumns = true;
      }
    },
    rows: {
      enumerable: true,
      get: function() {
        return this._rows;
      },
      set: function(v) {
        this._rows = v;
        this._flagRows = true;
      }
    },
    frameRate: {
      enumerable: true,
      get: function() {
        return this._frameRate;
      },
      set: function(v) {
        this._frameRate = v;
        this._flagFrameRate = true;
      }
    },
    index: {
      enumerable: true,
      get: function() {
        return this._index;
      },
      set: function(v) {
        this._index = v;
        this._flagIndex = true;
      }
    }
  };
  cos3 = Math.cos;
  sin3 = Math.sin;
  _Circle = class extends Path {
    constructor(ox, oy, r, resolution) {
      const amount = resolution ? Math.max(resolution, 2) : 4;
      const points = [];
      for (let i = 0;i < amount; i++) {
        points.push(new Anchor(0, 0, 0, 0, 0, 0));
      }
      super(points, true, true, true);
      __publicField(this, "_flagRadius", false);
      __publicField(this, "_radius", 0);
      for (let prop in proto14) {
        Object.defineProperty(this, prop, proto14[prop]);
      }
      if (typeof r === "number") {
        this.radius = r;
      }
      this._update();
      if (typeof ox === "number") {
        this.translation.x = ox;
      }
      if (typeof oy === "number") {
        this.translation.y = oy;
      }
    }
    _update() {
      if (this._flagVertices || this._flagRadius) {
        let length = this.vertices.length;
        if (!this._closed && length > 2) {
          length -= 1;
        }
        const c = 4 / 3 * Math.tan(Math.PI / (length * 2));
        const radius = this._radius;
        const rc = radius * c;
        for (let i = 0;i < this.vertices.length; i++) {
          const pct = i / length;
          const theta = pct * TWO_PI;
          const x = radius * cos3(theta);
          const y = radius * sin3(theta);
          const lx = rc * cos3(theta - HALF_PI);
          const ly = rc * sin3(theta - HALF_PI);
          const rx = rc * cos3(theta + HALF_PI);
          const ry = rc * sin3(theta + HALF_PI);
          const v = this.vertices[i];
          v.command = i === 0 ? Commands.move : Commands.curve;
          v.set(x, y);
          v.controls.left.set(lx, ly);
          v.controls.right.set(rx, ry);
        }
      }
      super._update.call(this);
      return this;
    }
    flagReset() {
      this._flagRadius = false;
      super.flagReset.call(this);
      return this;
    }
    clone(parent) {
      const clone = new _Circle(0, 0, this.radius, this.vertices.length);
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.skewX = this.skewX;
      clone.skewY = this.skewY;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      for (let i = 0;i < Path.Properties.length; i++) {
        const k = Path.Properties[i];
        clone[k] = this[k];
      }
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const object = super.toObject.call(this);
      for (let i = 0;i < _Circle.Properties.length; i++) {
        const k = _Circle.Properties[i];
        object[k] = this[k];
      }
      return object;
    }
  };
  Circle = _Circle;
  __publicField(Circle, "Properties", ["radius"]);
  proto14 = {
    radius: {
      enumerable: true,
      get: function() {
        return this._radius;
      },
      set: function(v) {
        this._radius = v;
        this._flagRadius = true;
      }
    }
  };
  cos4 = Math.cos;
  sin4 = Math.sin;
  _Ellipse = class extends Path {
    constructor(x, y, rx, ry, resolution) {
      if (typeof ry !== "number" && typeof rx === "number") {
        ry = rx;
      }
      const amount = resolution ? Math.max(resolution, 2) : 4;
      const points = [];
      for (let i = 0;i < amount; i++) {
        points.push(new Anchor);
      }
      super(points, true, true, true);
      __publicField(this, "_flagWidth", false);
      __publicField(this, "_flagHeight", false);
      __publicField(this, "_width", 0);
      __publicField(this, "_height", 0);
      for (let prop in proto15) {
        Object.defineProperty(this, prop, proto15[prop]);
      }
      if (typeof rx === "number") {
        this.width = rx * 2;
      }
      if (typeof ry === "number") {
        this.height = ry * 2;
      }
      this._update();
      if (typeof x === "number") {
        this.translation.x = x;
      }
      if (typeof y === "number") {
        this.translation.y = y;
      }
    }
    _update() {
      if (this._flagVertices || this._flagWidth || this._flagHeight) {
        let length = this.vertices.length;
        if (!this._closed && length > 2) {
          length -= 1;
        }
        const c = 4 / 3 * Math.tan(Math.PI / (this.vertices.length * 2));
        const radiusX = this._width / 2;
        const radiusY = this._height / 2;
        for (let i = 0;i < this.vertices.length; i++) {
          const pct = i / length;
          const theta = pct * TWO_PI;
          const x = radiusX * cos4(theta);
          const y = radiusY * sin4(theta);
          const lx = radiusX * c * cos4(theta - HALF_PI);
          const ly = radiusY * c * sin4(theta - HALF_PI);
          const rx = radiusX * c * cos4(theta + HALF_PI);
          const ry = radiusY * c * sin4(theta + HALF_PI);
          const v = this.vertices[i];
          v.command = i === 0 ? Commands.move : Commands.curve;
          v.set(x, y);
          v.controls.left.set(lx, ly);
          v.controls.right.set(rx, ry);
        }
      }
      super._update.call(this);
      return this;
    }
    flagReset() {
      this._flagWidth = this._flagHeight = false;
      super.flagReset.call(this);
      return this;
    }
    clone(parent) {
      const rx = this.width / 2;
      const ry = this.height / 2;
      const resolution = this.vertices.length;
      const clone = new _Ellipse(0, 0, rx, ry, resolution);
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.skewX = this.skewX;
      clone.skewY = this.skewY;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      for (let i = 0;i < Path.Properties.length; i++) {
        const k = Path.Properties[i];
        clone[k] = this[k];
      }
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const object = super.toObject.call(this);
      for (let i = 0;i < _Ellipse.Properties.length; i++) {
        const k = _Ellipse.Properties[i];
        object[k] = this[k];
      }
      return object;
    }
  };
  Ellipse = _Ellipse;
  __publicField(Ellipse, "Properties", ["width", "height"]);
  proto15 = {
    width: {
      enumerable: true,
      get: function() {
        return this._width;
      },
      set: function(v) {
        this._width = v;
        this._flagWidth = true;
      }
    },
    height: {
      enumerable: true,
      get: function() {
        return this._height;
      },
      set: function(v) {
        this._height = v;
        this._flagHeight = true;
      }
    }
  };
  Line = class extends Path {
    constructor(x1, y1, x2, y2) {
      const points = [
        new Anchor(x1, y1),
        new Anchor(x2, y2)
      ];
      super(points);
      for (let prop in proto16) {
        Object.defineProperty(this, prop, proto16[prop]);
      }
      this.vertices[0].command = Commands.move;
      this.vertices[1].command = Commands.line;
      this.automatic = false;
    }
  };
  proto16 = {
    left: {
      enumerable: true,
      get: function() {
        return this.vertices[0];
      },
      set: function(v) {
        if (_.isObject(v)) {
          this.vertices.splice(0, 1, v);
        } else {
          const error = new TwoError("Two.Line.x argument is not an object.");
          console.warn(error.name, error.message);
        }
      }
    },
    right: {
      enumerable: true,
      get: function() {
        return this.vertices[1];
      },
      set: function(v) {
        if (_.isObject(v)) {
          this.vertices.splice(1, 1, v);
        } else {
          const error = new TwoError("Two.Line.y argument is not an object.");
          console.warn(error.name, error.message);
        }
      }
    }
  };
  _RoundedRectangle = class extends Path {
    constructor(x, y, width, height, radius) {
      if (typeof radius === "undefined" && typeof width === "number" && typeof height === "number") {
        radius = Math.floor(Math.min(width, height) / 12);
      }
      const points = [];
      for (let i = 0;i < 10; i++) {
        points.push(new Anchor(0, 0, 0, 0, 0, 0, i === 0 ? Commands.move : Commands.curve));
      }
      super(points);
      __publicField(this, "_flagWidth", false);
      __publicField(this, "_flagHeight", false);
      __publicField(this, "_flagRadius", false);
      __publicField(this, "_width", 0);
      __publicField(this, "_height", 0);
      __publicField(this, "_radius", 12);
      for (let prop in proto17) {
        Object.defineProperty(this, prop, proto17[prop]);
      }
      this.closed = true;
      this.automatic = false;
      this._renderer.flagRadius = FlagRadius.bind(this);
      if (typeof width === "number") {
        this.width = width;
      }
      if (typeof height === "number") {
        this.height = height;
      }
      if (typeof radius === "number") {
        this.radius = radius;
      }
      this._update();
      if (typeof x === "number") {
        this.translation.x = x;
      }
      if (typeof y === "number") {
        this.translation.y = y;
      }
    }
    _update() {
      if (this._flagVertices || this._flagWidth || this._flagHeight || this._flagRadius) {
        const width = this._width;
        const height = this._height;
        let rx, ry;
        if (this._radius instanceof Vector) {
          rx = this._radius.x;
          ry = this._radius.y;
        } else {
          rx = this._radius;
          ry = this._radius;
        }
        let v;
        let w = width / 2;
        let h = height / 2;
        v = this.vertices[0];
        v.x = -(w - rx);
        v.y = -h;
        v = this.vertices[1];
        v.x = w - rx;
        v.y = -h;
        v.controls.left.clear();
        v.controls.right.x = rx;
        v.controls.right.y = 0;
        v = this.vertices[2];
        v.x = w;
        v.y = -(h - ry);
        v.controls.right.clear();
        v.controls.left.clear();
        v = this.vertices[3];
        v.x = w;
        v.y = h - ry;
        v.controls.left.clear();
        v.controls.right.x = 0;
        v.controls.right.y = ry;
        v = this.vertices[4];
        v.x = w - rx;
        v.y = h;
        v.controls.right.clear();
        v.controls.left.clear();
        v = this.vertices[5];
        v.x = -(w - rx);
        v.y = h;
        v.controls.left.clear();
        v.controls.right.x = -rx;
        v.controls.right.y = 0;
        v = this.vertices[6];
        v.x = -w;
        v.y = h - ry;
        v.controls.left.clear();
        v.controls.right.clear();
        v = this.vertices[7];
        v.x = -w;
        v.y = -(h - ry);
        v.controls.left.clear();
        v.controls.right.x = 0;
        v.controls.right.y = -ry;
        v = this.vertices[8];
        v.x = -(w - rx);
        v.y = -h;
        v.controls.left.clear();
        v.controls.right.clear();
        v = this.vertices[9];
        v.copy(this.vertices[8]);
      }
      super._update.call(this);
      return this;
    }
    flagReset() {
      this._flagWidth = this._flagHeight = this._flagRadius = false;
      super.flagReset.call(this);
      return this;
    }
    clone(parent) {
      const width = this.width;
      const height = this.height;
      const radius = this.radius;
      const clone = new _RoundedRectangle(0, 0, width, height, radius);
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.skewX = this.skewX;
      clone.skewY = this.skewY;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      for (let i = 0;i < Path.Properties.length; i++) {
        const k = Path.Properties[i];
        clone[k] = this[k];
      }
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const object = super.toObject.call(this);
      for (let i = 0;i < _RoundedRectangle.Properties.length; i++) {
        const k = _RoundedRectangle.Properties[i];
        object[k] = this[k];
      }
      object.radius = typeof this.radius === "number" ? this.radius : this.radius.toObject();
      return object;
    }
  };
  RoundedRectangle = _RoundedRectangle;
  __publicField(RoundedRectangle, "Properties", ["width", "height", "radius"]);
  proto17 = {
    width: {
      enumerable: true,
      get: function() {
        return this._width;
      },
      set: function(v) {
        this._width = v;
        this._flagWidth = true;
      }
    },
    height: {
      enumerable: true,
      get: function() {
        return this._height;
      },
      set: function(v) {
        this._height = v;
        this._flagHeight = true;
      }
    },
    radius: {
      enumerable: true,
      get: function() {
        return this._radius;
      },
      set: function(v) {
        if (this._radius instanceof Vector) {
          this._radius.unbind(Events.Types.change, this._renderer.flagRadius);
        }
        this._radius = v;
        if (this._radius instanceof Vector) {
          this._radius.bind(Events.Types.change, this._renderer.flagRadius);
        }
        this._flagRadius = true;
      }
    }
  };
  min4 = Math.min;
  max4 = Math.max;
  if (root.document) {
    canvas2 = document.createElement("canvas");
  }
  _Text = class extends Shape {
    constructor(message, x, y, styles) {
      super();
      __publicField(this, "_flagValue", true);
      __publicField(this, "_flagFamily", true);
      __publicField(this, "_flagSize", true);
      __publicField(this, "_flagLeading", true);
      __publicField(this, "_flagAlignment", true);
      __publicField(this, "_flagBaseline", true);
      __publicField(this, "_flagStyle", true);
      __publicField(this, "_flagWeight", true);
      __publicField(this, "_flagDecoration", true);
      __publicField(this, "_flagFill", true);
      __publicField(this, "_flagStroke", true);
      __publicField(this, "_flagLinewidth", true);
      __publicField(this, "_flagOpacity", true);
      __publicField(this, "_flagVisible", true);
      __publicField(this, "_flagMask", false);
      __publicField(this, "_flagClip", false);
      __publicField(this, "_value", "");
      __publicField(this, "_family", "sans-serif");
      __publicField(this, "_size", 13);
      __publicField(this, "_leading", 17);
      __publicField(this, "_alignment", "center");
      __publicField(this, "_baseline", "middle");
      __publicField(this, "_style", "normal");
      __publicField(this, "_weight", 500);
      __publicField(this, "_decoration", "none");
      __publicField(this, "_direction", "ltr");
      __publicField(this, "_fill", "#000");
      __publicField(this, "_stroke", "none");
      __publicField(this, "_linewidth", 1);
      __publicField(this, "_opacity", 1);
      __publicField(this, "_visible", true);
      __publicField(this, "_mask", null);
      __publicField(this, "_clip", false);
      __publicField(this, "_dashes", null);
      for (let prop in proto18) {
        Object.defineProperty(this, prop, proto18[prop]);
      }
      this._renderer.type = "text";
      this._renderer.flagFill = FlagFill2.bind(this);
      this._renderer.flagStroke = FlagStroke2.bind(this);
      this.value = message;
      if (typeof x === "number") {
        this.translation.x = x;
      }
      if (typeof y === "number") {
        this.translation.y = y;
      }
      this.dashes = [];
      this.dashes.offset = 0;
      if (!_.isObject(styles)) {
        return this;
      }
      for (let i = 0;i < _Text.Properties.length; i++) {
        const property = _Text.Properties[i];
        if (property in styles) {
          this[property] = styles[property];
        }
      }
    }
    static Measure(text) {
      if (canvas2) {
        const ctx = canvas2.getContext("2d");
        ctx.font = [
          text._style,
          text._weight,
          `${text._size}px/${text._leading}px`,
          text._family
        ].join(" ");
        const metrics = ctx.measureText(text.value, 0, 0);
        const height = metrics.actualBoundingBoxDescent + metrics.actualBoundingBoxAscent;
        return {
          width: metrics.width,
          height
        };
      } else {
        const width = this.value.length * this.size * _Text.Ratio;
        const height = this.leading;
        console.warn("Two.Text: unable to accurately measure text, so using an approximation.");
        return {
          width,
          height
        };
      }
    }
    clone(parent) {
      const clone = new _Text(this.value);
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      for (let i = 0;i < _Text.Properties.length; i++) {
        const prop = _Text.Properties[i];
        clone[prop] = this[prop];
      }
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      if (parent) {
        parent.add(clone);
      }
      return clone._update();
    }
    toObject() {
      const result = {
        translation: this.translation.toObject(),
        rotation: this.rotation,
        scale: this.scale
      };
      if (this.matrix.manual) {
        result.matrix = this.matrix.toObject();
      }
      for (let i = 0;i < _Text.Properties.length; i++) {
        const prop = _Text.Properties[i];
        result[prop] = this[prop];
      }
      return result;
    }
    noFill() {
      this.fill = "none";
      return this;
    }
    noStroke() {
      this.stroke = "none";
      this.linewidth = 0;
      return this;
    }
    getBoundingClientRect(shallow) {
      let matrix;
      let left, right, top, bottom;
      this._update(true);
      matrix = shallow ? this.matrix : this.worldMatrix;
      const { width, height } = _Text.Measure(this);
      const border = (this._linewidth || 0) / 2;
      switch (this.alignment) {
        case "left":
          left = -border;
          right = width + border;
          break;
        case "right":
          left = -(width + border);
          right = border;
          break;
        default:
          left = -(width / 2 + border);
          right = width / 2 + border;
      }
      switch (this.baseline) {
        case "middle":
          top = -(height / 2 + border);
          bottom = height / 2 + border;
          break;
        default:
          top = -(height + border);
          bottom = border;
      }
      const [ax, ay] = matrix.multiply(left, top);
      const [bx, by] = matrix.multiply(left, bottom);
      const [cx, cy] = matrix.multiply(right, top);
      const [dx, dy] = matrix.multiply(right, bottom);
      top = min4(ay, by, cy, dy);
      left = min4(ax, bx, cx, dx);
      right = max4(ax, bx, cx, dx);
      bottom = max4(ay, by, cy, dy);
      return {
        top,
        left,
        right,
        bottom,
        width: right - left,
        height: bottom - top
      };
    }
    flagReset() {
      super.flagReset.call(this);
      this._flagValue = this._flagFamily = this._flagSize = this._flagLeading = this._flagAlignment = this._flagFill = this._flagStroke = this._flagLinewidth = this._flagOpacity = this._flagVisible = this._flagClip = this._flagDecoration = this._flagClassName = this._flagBaseline = this._flagWeight = this._flagStyle = false;
      return this;
    }
  };
  Text = _Text;
  __publicField(Text, "Ratio", 0.6);
  __publicField(Text, "Properties", [
    "value",
    "family",
    "size",
    "leading",
    "alignment",
    "linewidth",
    "style",
    "weight",
    "decoration",
    "direction",
    "baseline",
    "opacity",
    "visible",
    "fill",
    "stroke"
  ]);
  proto18 = {
    value: {
      enumerable: true,
      get: function() {
        return this._value;
      },
      set: function(v) {
        this._value = v;
        this._flagValue = true;
      }
    },
    family: {
      enumerable: true,
      get: function() {
        return this._family;
      },
      set: function(v) {
        this._family = v;
        this._flagFamily = true;
      }
    },
    size: {
      enumerable: true,
      get: function() {
        return this._size;
      },
      set: function(v) {
        this._size = v;
        this._flagSize = true;
      }
    },
    leading: {
      enumerable: true,
      get: function() {
        return this._leading;
      },
      set: function(v) {
        this._leading = v;
        this._flagLeading = true;
      }
    },
    alignment: {
      enumerable: true,
      get: function() {
        return this._alignment;
      },
      set: function(v) {
        this._alignment = v;
        this._flagAlignment = true;
      }
    },
    linewidth: {
      enumerable: true,
      get: function() {
        return this._linewidth;
      },
      set: function(v) {
        this._linewidth = v;
        this._flagLinewidth = true;
      }
    },
    style: {
      enumerable: true,
      get: function() {
        return this._style;
      },
      set: function(v) {
        this._style = v;
        this._flagStyle = true;
      }
    },
    weight: {
      enumerable: true,
      get: function() {
        return this._weight;
      },
      set: function(v) {
        this._weight = v;
        this._flagWeight = true;
      }
    },
    decoration: {
      enumerable: true,
      get: function() {
        return this._decoration;
      },
      set: function(v) {
        this._decoration = v;
        this._flagDecoration = true;
      }
    },
    direction: {
      enumerable: true,
      get: function() {
        return this._direction;
      },
      set: function(v) {
        this._direction = v;
        this._flagDirection = true;
      }
    },
    baseline: {
      enumerable: true,
      get: function() {
        return this._baseline;
      },
      set: function(v) {
        this._baseline = v;
        this._flagBaseline = true;
      }
    },
    opacity: {
      enumerable: true,
      get: function() {
        return this._opacity;
      },
      set: function(v) {
        this._opacity = v;
        this._flagOpacity = true;
      }
    },
    visible: {
      enumerable: true,
      get: function() {
        return this._visible;
      },
      set: function(v) {
        this._visible = v;
        this._flagVisible = true;
      }
    },
    fill: {
      enumerable: true,
      get: function() {
        return this._fill;
      },
      set: function(f) {
        if (this._fill instanceof Gradient || this._fill instanceof LinearGradient || this._fill instanceof RadialGradient || this._fill instanceof Texture) {
          this._fill.unbind(Events.Types.change, this._renderer.flagFill);
        }
        this._fill = f;
        this._flagFill = true;
        if (this._fill instanceof Gradient || this._fill instanceof LinearGradient || this._fill instanceof RadialGradient || this._fill instanceof Texture) {
          this._fill.bind(Events.Types.change, this._renderer.flagFill);
        }
      }
    },
    stroke: {
      enumerable: true,
      get: function() {
        return this._stroke;
      },
      set: function(f) {
        if (this._stroke instanceof Gradient || this._stroke instanceof LinearGradient || this._stroke instanceof RadialGradient || this._stroke instanceof Texture) {
          this._stroke.unbind(Events.Types.change, this._renderer.flagStroke);
        }
        this._stroke = f;
        this._flagStroke = true;
        if (this._stroke instanceof Gradient || this._stroke instanceof LinearGradient || this._stroke instanceof RadialGradient || this._stroke instanceof Texture) {
          this._stroke.bind(Events.Types.change, this._renderer.flagStroke);
        }
      }
    },
    mask: {
      enumerable: true,
      get: function() {
        return this._mask;
      },
      set: function(v) {
        this._mask = v;
        this._flagMask = true;
        if (_.isObject(v) && !v.clip) {
          v.clip = true;
        }
      }
    },
    clip: {
      enumerable: true,
      get: function() {
        return this._clip;
      },
      set: function(v) {
        this._clip = v;
        this._flagClip = true;
      }
    },
    dashes: {
      enumerable: true,
      get: function() {
        return this._dashes;
      },
      set: function(v) {
        if (typeof v.offset !== "number") {
          v.offset = this.dashes && this._dashes.offset || 0;
        }
        this._dashes = v;
      }
    }
  };
  regex2 = {
    path: /[+-]?(?:\d*\.\d+|\d+)(?:[eE][+-]\d+)?/g,
    cssBackgroundImage: /url\(['"]?#([\w\d-_]*)['"]?\)/i,
    unitSuffix: /[a-zA-Z%]*/i
  };
  alignments = {
    start: "left",
    middle: "center",
    end: "right"
  };
  reservedAttributesToRemove = ["id", "class", "transform", "xmlns", "viewBox"];
  overwriteAttrs = ["x", "y", "width", "height", "href", "xlink:href"];
  read = {
    svg: function(node) {
      const defs = read.defs.current = new Registry;
      const elements = node.getElementsByTagName("defs");
      for (let i = 0;i < elements.length; i++) {
        updateDefsCache(elements[i], defs);
      }
      const svg2 = read.g.call(this, node);
      const viewBox = node.getAttribute("viewBox");
      const x = node.getAttribute("x");
      const y = node.getAttribute("y");
      const width = node.getAttribute("width");
      const height = node.getAttribute("height");
      svg2.defs = defs;
      const viewBoxExists = viewBox !== null;
      const xExists = x !== null;
      const yExists = y !== null;
      const widthExists = width !== null;
      const heightExists = height !== null;
      if (xExists) {
        svg2.x = parseFloat(x.replace(regex2.unitSuffix, ""));
      }
      if (yExists) {
        svg2.y = parseFloat(y.replace(regex2.unitSuffix, ""));
      }
      if (widthExists) {
        svg2.width = parseFloat(width.replace(regex2.unitSuffix, ""));
      }
      if (heightExists) {
        svg2.height = parseFloat(height.replace(regex2.unitSuffix, ""));
      }
      if (viewBoxExists) {
        applySvgViewBox(svg2, viewBox);
      }
      delete read.defs.current;
      return svg2;
    },
    defs: function(node) {
      return null;
    },
    use: function(node, styles) {
      let error;
      const href = node.getAttribute("href") || node.getAttribute("xlink:href");
      if (!href) {
        error = new TwoError("encountered <use /> with no href.");
        console.warn(error.name, error.message);
        return null;
      }
      const id = href.slice(1);
      if (!read.defs.current.contains(id)) {
        error = new TwoError("unable to find element for reference " + href + ".");
        console.warn(error.name, error.message);
        return null;
      }
      const template = read.defs.current.get(id);
      const fullNode = template.cloneNode(true);
      for (let i = 0;i < node.attributes.length; i++) {
        const attr = node.attributes[i];
        const ca = overwriteAttrs.includes(attr.nodeName);
        const cb = !fullNode.hasAttribute(attr.nodeName);
        if (ca || cb) {
          fullNode.setAttribute(attr.nodeName, attr.value);
        }
      }
      const tagName = getTagName(fullNode.nodeName);
      return read[tagName].call(this, fullNode, styles);
    },
    g: function(node, parentStyles) {
      const group = new Group;
      applySvgAttributes.call(this, node, group, parentStyles);
      this.add(group);
      const styles = getSvgStyles.call(this, node);
      for (let i = 0, l = node.childNodes.length;i < l; i++) {
        const n = node.childNodes[i];
        const tag = n.nodeName;
        if (!tag)
          return;
        const tagName = getTagName(tag);
        if (tagName in read) {
          const o = read[tagName].call(group, n, styles);
          if (!!o && !o.parent) {
            group.add(o);
          }
        }
      }
      return group;
    },
    polygon: function(node, parentStyles) {
      let points;
      if (typeof node === "string") {
        points = node;
      } else {
        points = node.getAttribute("points");
      }
      const verts = [];
      points.replace(/(-?[\d.eE-]+)[,|\s](-?[\d.eE-]+)/g, function(match, p1, p2) {
        verts.push(new Anchor(parseFloat(p1), parseFloat(p2)));
      });
      const poly = new Path(verts, true).noStroke();
      poly.fill = "black";
      applySvgAttributes.call(this, node, poly, parentStyles);
      return poly;
    },
    polyline: function(node, parentStyles) {
      const poly = read.polygon.call(this, node, parentStyles);
      poly.closed = false;
      return poly;
    },
    path: function(node, parentStyles) {
      let path;
      if (typeof node === "string") {
        path = node;
        node = null;
      } else {
        path = node.getAttribute("d");
      }
      let points = [];
      let closed2 = false, relative = false;
      if (path) {
        let coord = new Anchor;
        let control, coords;
        let commands = path.match(/[a-df-z][^a-df-z]*/ig);
        const last = commands.length - 1;
        _.each(commands.slice(0), function(command, i) {
          const items = command.slice(1).trim().match(regex2.path);
          const type = command[0];
          const lower = type.toLowerCase();
          let bin, j, l, ct, times;
          const result = [];
          if (i === 0) {
            commands = [];
          }
          switch (lower) {
            case "h":
            case "v":
              if (items.length > 1) {
                bin = 1;
              }
              break;
            case "m":
            case "l":
            case "t":
              if (items.length > 2) {
                bin = 2;
              }
              break;
            case "s":
            case "q":
              if (items.length > 4) {
                bin = 4;
              }
              break;
            case "c":
              if (items.length > 6) {
                bin = 6;
              }
              break;
            case "a":
              if (items.length > 7) {
                bin = 7;
              }
              break;
          }
          if (bin) {
            for (j = 0, l = items.length, times = 0;j < l; j += bin) {
              ct = type;
              if (times > 0) {
                switch (type) {
                  case "m":
                    ct = "l";
                    break;
                  case "M":
                    ct = "L";
                    break;
                }
              }
              result.push(ct + items.slice(j, j + bin).join(" "));
              times++;
            }
            commands = Array.prototype.concat.apply(commands, result);
          } else {
            commands.push(command);
          }
        });
        _.each(commands, function(command, i) {
          let result, x, y;
          const type = command[0];
          const lower = type.toLowerCase();
          coords = command.slice(1).trim().match(regex2.path);
          relative = type === lower;
          let x1, y1, x2, y2, x3, y3, x4, y4, reflection;
          let a, b;
          let anchor2, rx, ry, xAxisRotation, largeArcFlag, sweepFlag;
          switch (lower) {
            case "z":
              if (i >= last) {
                closed2 = true;
              } else {
                x = coord.x;
                y = coord.y;
                result = new Anchor(x, y, undefined, undefined, undefined, undefined, Commands.close);
                for (let j = points.length - 1;j >= 0; j--) {
                  const point = points[j];
                  if (/m/i.test(point.command)) {
                    coord = point;
                    break;
                  }
                }
              }
              break;
            case "m":
            case "l":
              control = undefined;
              x = parseFloat(coords[0]);
              y = parseFloat(coords[1]);
              result = new Anchor(x, y, undefined, undefined, undefined, undefined, /m/i.test(lower) ? Commands.move : Commands.line);
              if (relative) {
                result.addSelf(coord);
              }
              coord = result;
              break;
            case "h":
            case "v":
              a = /h/i.test(lower) ? "x" : "y";
              b = /x/i.test(a) ? "y" : "x";
              result = new Anchor(undefined, undefined, undefined, undefined, undefined, undefined, Commands.line);
              result[a] = parseFloat(coords[0]);
              result[b] = coord[b];
              if (relative) {
                result[a] += coord[a];
              }
              coord = result;
              break;
            case "c":
            case "s":
              x1 = coord.x;
              y1 = coord.y;
              if (!control) {
                control = new Vector;
              }
              if (/c/i.test(lower)) {
                x2 = parseFloat(coords[0]);
                y2 = parseFloat(coords[1]);
                x3 = parseFloat(coords[2]);
                y3 = parseFloat(coords[3]);
                x4 = parseFloat(coords[4]);
                y4 = parseFloat(coords[5]);
              } else {
                reflection = getReflection(coord, control, relative);
                x2 = reflection.x;
                y2 = reflection.y;
                x3 = parseFloat(coords[0]);
                y3 = parseFloat(coords[1]);
                x4 = parseFloat(coords[2]);
                y4 = parseFloat(coords[3]);
              }
              if (relative) {
                x2 += x1;
                y2 += y1;
                x3 += x1;
                y3 += y1;
                x4 += x1;
                y4 += y1;
              }
              coord.controls.right.set(x2 - coord.x, y2 - coord.y);
              result = new Anchor(x4, y4, x3 - x4, y3 - y4, undefined, undefined, Commands.curve);
              coord = result;
              control = result.controls.left;
              break;
            case "t":
            case "q":
              x1 = coord.x;
              y1 = coord.y;
              if (!control) {
                control = new Vector;
              }
              if (/q/i.test(lower)) {
                x2 = parseFloat(coords[0]);
                y2 = parseFloat(coords[1]);
                x3 = parseFloat(coords[0]);
                y3 = parseFloat(coords[1]);
                x4 = parseFloat(coords[2]);
                y4 = parseFloat(coords[3]);
              } else {
                reflection = getReflection(coord, control, relative);
                x2 = reflection.x;
                y2 = reflection.y;
                x3 = reflection.x;
                y3 = reflection.y;
                x4 = parseFloat(coords[0]);
                y4 = parseFloat(coords[1]);
              }
              if (relative) {
                x2 += x1;
                y2 += y1;
                x3 += x1;
                y3 += y1;
                x4 += x1;
                y4 += y1;
              }
              coord.controls.right.set((x2 - coord.x) * 0.33, (y2 - coord.y) * 0.33);
              result = new Anchor(x4, y4, x3 - x4, y3 - y4, undefined, undefined, Commands.curve);
              coord = result;
              control = result.controls.left;
              break;
            case "a":
              x1 = coord.x;
              y1 = coord.y;
              rx = parseFloat(coords[0]);
              ry = parseFloat(coords[1]);
              xAxisRotation = parseFloat(coords[2]);
              largeArcFlag = parseFloat(coords[3]);
              sweepFlag = parseFloat(coords[4]);
              x4 = parseFloat(coords[5]);
              y4 = parseFloat(coords[6]);
              if (relative) {
                x4 += x1;
                y4 += y1;
              }
              anchor2 = new Anchor(x4, y4);
              anchor2.command = Commands.arc;
              anchor2.rx = rx;
              anchor2.ry = ry;
              anchor2.xAxisRotation = xAxisRotation;
              anchor2.largeArcFlag = largeArcFlag;
              anchor2.sweepFlag = sweepFlag;
              result = anchor2;
              coord = anchor2;
              control = undefined;
              break;
          }
          if (result) {
            if (Array.isArray(result)) {
              points = points.concat(result);
            } else {
              points.push(result);
            }
          }
        });
      }
      path = new Path(points, closed2, undefined, true).noStroke();
      path.fill = "black";
      const rect = path.getBoundingClientRect(true);
      rect.centroid = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
      _.each(path.vertices, function(v) {
        v.subSelf(rect.centroid);
      });
      applySvgAttributes.call(this, node, path, parentStyles);
      path.translation.addSelf(rect.centroid);
      return path;
    },
    circle: function(node, parentStyles) {
      const x = parseFloat(node.getAttribute("cx"));
      const y = parseFloat(node.getAttribute("cy"));
      const r = parseFloat(node.getAttribute("r"));
      const circle = new Circle(0, 0, r).noStroke();
      circle.fill = "black";
      applySvgAttributes.call(this, node, circle, parentStyles);
      circle.translation.x = x;
      circle.translation.y = y;
      return circle;
    },
    ellipse: function(node, parentStyles) {
      const x = parseFloat(node.getAttribute("cx"));
      const y = parseFloat(node.getAttribute("cy"));
      const width = parseFloat(node.getAttribute("rx"));
      const height = parseFloat(node.getAttribute("ry"));
      const ellipse = new Ellipse(0, 0, width, height).noStroke();
      ellipse.fill = "black";
      applySvgAttributes.call(this, node, ellipse, parentStyles);
      ellipse.translation.x = x;
      ellipse.translation.y = y;
      return ellipse;
    },
    rect: function(node, parentStyles) {
      const rx = parseFloat(node.getAttribute("rx"));
      const ry = parseFloat(node.getAttribute("ry"));
      if (!_.isNaN(rx) || !_.isNaN(ry)) {
        return read["rounded-rect"](node);
      }
      const width = parseFloat(node.getAttribute("width"));
      const height = parseFloat(node.getAttribute("height"));
      const w2 = width / 2;
      const h2 = height / 2;
      const rect = new Rectangle(0, 0, width, height).noStroke();
      rect.fill = "black";
      applySvgAttributes.call(this, node, rect, parentStyles);
      rect.translation.x += w2;
      rect.translation.y += h2;
      return rect;
    },
    "rounded-rect": function(node, parentStyles) {
      const rx = parseFloat(node.getAttribute("rx")) || 0;
      const ry = parseFloat(node.getAttribute("ry")) || 0;
      const width = parseFloat(node.getAttribute("width"));
      const height = parseFloat(node.getAttribute("height"));
      const w2 = width / 2;
      const h2 = height / 2;
      const radius = new Vector(rx, ry);
      const rect = new RoundedRectangle(0, 0, width, height, radius).noStroke();
      rect.fill = "black";
      applySvgAttributes.call(this, node, rect, parentStyles);
      rect.translation.x += w2;
      rect.translation.y += h2;
      return rect;
    },
    line: function(node, parentStyles) {
      const x1 = parseFloat(node.getAttribute("x1"));
      const y1 = parseFloat(node.getAttribute("y1"));
      const x2 = parseFloat(node.getAttribute("x2"));
      const y2 = parseFloat(node.getAttribute("y2"));
      const line = new Line(x1, y1, x2, y2).noFill();
      applySvgAttributes.call(this, node, line, parentStyles);
      return line;
    },
    lineargradient: function(node, parentStyles) {
      let units = node.getAttribute("gradientUnits");
      let spread = node.getAttribute("spreadMethod");
      if (!units) {
        units = "objectBoundingBox";
      }
      if (!spread) {
        spread = "pad";
      }
      let x1 = parseFloat(node.getAttribute("x1") || 0);
      let y1 = parseFloat(node.getAttribute("y1") || 0);
      let x2 = parseFloat(node.getAttribute("x2") || 0);
      let y2 = parseFloat(node.getAttribute("y2") || 0);
      const ox = (x2 + x1) / 2;
      const oy = (y2 + y1) / 2;
      if (/userSpaceOnUse/i.test(units)) {
        x1 -= ox;
        y1 -= oy;
        x2 -= ox;
        y2 -= oy;
      }
      const stops = [];
      for (let i = 0;i < node.children.length; i++) {
        const child = node.children[i];
        let offset = child.getAttribute("offset");
        if (/%/ig.test(offset)) {
          offset = parseFloat(offset.replace(/%/ig, "")) / 100;
        }
        offset = parseFloat(offset);
        let color = child.getAttribute("stop-color");
        let opacity = child.getAttribute("stop-opacity");
        let style = child.getAttribute("style");
        let matches;
        if (color === null) {
          matches = style ? style.match(/stop-color:\s?([#a-fA-F0-9]*)/) : false;
          color = matches && matches.length > 1 ? matches[1] : undefined;
        }
        if (opacity === null) {
          matches = style ? style.match(/stop-opacity:\s?([0-9.-]*)/) : false;
          opacity = matches && matches.length > 1 ? parseFloat(matches[1]) : 1;
        } else {
          opacity = parseFloat(opacity);
        }
        stops.push(new Stop(offset, color, opacity));
      }
      const gradient = new LinearGradient(x1, y1, x2, y2, stops);
      gradient.spread = spread;
      gradient.units = units;
      applySvgAttributes.call(this, node, gradient, parentStyles);
      return gradient;
    },
    radialgradient: function(node, parentStyles) {
      let units = node.getAttribute("gradientUnits");
      let spread = node.getAttribute("spreadMethod");
      if (!units) {
        units = "objectBoundingBox";
      }
      if (!spread) {
        spread = "pad";
      }
      let cx = parseFloat(node.getAttribute("cx")) || 0;
      let cy = parseFloat(node.getAttribute("cy")) || 0;
      let r = parseFloat(node.getAttribute("r"));
      let fx = parseFloat(node.getAttribute("fx"));
      let fy = parseFloat(node.getAttribute("fy"));
      if (_.isNaN(fx)) {
        fx = cx;
      }
      if (_.isNaN(fy)) {
        fy = cy;
      }
      const ox = Math.abs(cx + fx) / 2;
      const oy = Math.abs(cy + fy) / 2;
      if (/userSpaceOnUse/i.test(units)) {
        cx -= ox;
        cy -= oy;
        fx -= ox;
        fy -= oy;
      }
      const stops = [];
      for (let i = 0;i < node.children.length; i++) {
        const child = node.children[i];
        let offset = child.getAttribute("offset");
        if (/%/ig.test(offset)) {
          offset = parseFloat(offset.replace(/%/ig, "")) / 100;
        }
        offset = parseFloat(offset);
        let color = child.getAttribute("stop-color");
        let opacity = child.getAttribute("stop-opacity");
        let style = child.getAttribute("style");
        let matches;
        if (color === null) {
          matches = style ? style.match(/stop-color:\s?([#a-fA-F0-9]*)/) : false;
          color = matches && matches.length > 1 ? matches[1] : undefined;
        }
        if (opacity === null) {
          matches = style ? style.match(/stop-opacity:\s?([0-9.-]*)/) : false;
          opacity = matches && matches.length > 1 ? parseFloat(matches[1]) : 1;
        } else {
          opacity = parseFloat(opacity);
        }
        stops.push(new Stop(offset, color, opacity));
      }
      const gradient = new RadialGradient(cx, cy, r, stops, fx, fy);
      gradient.spread = spread;
      gradient.units = units;
      applySvgAttributes.call(this, node, gradient, parentStyles);
      return gradient;
    },
    text: function(node, parentStyles) {
      const alignment = getAlignment(node.getAttribute("text-anchor")) || "left";
      const baseline = getBaseline(node) || "baseline";
      const message = node.textContent;
      const text = new Text(message);
      applySvgAttributes.call(this, node, text, parentStyles);
      text.alignment = alignment;
      text.baseline = baseline;
      return text;
    },
    clippath: function(node, parentStyles) {
      if (read.defs.current && !read.defs.current.contains(node.id)) {
        read.defs.current.add(node.id, node);
      }
      return null;
    },
    image: function(node, parentStyles) {
      let error;
      const href = node.getAttribute("href") || node.getAttribute("xlink:href");
      if (!href) {
        error = new TwoError("encountered <image /> with no href.");
        console.warn(error.name, error.message);
        return null;
      }
      const x = parseFloat(node.getAttribute("x")) || 0;
      const y = parseFloat(node.getAttribute("y")) || 0;
      const width = parseFloat(node.getAttribute("width"));
      const height = parseFloat(node.getAttribute("height"));
      const sprite = new Sprite(href, x, y);
      if (!_.isNaN(width)) {
        sprite.width = width;
      }
      if (!_.isNaN(height)) {
        sprite.height = height;
      }
      applySvgAttributes.call(this, node, sprite, parentStyles);
      return sprite;
    }
  };
  _ImageSequence = class extends Rectangle {
    constructor(paths, ox, oy, frameRate) {
      super(ox, oy, 0, 0);
      __publicField(this, "_flagTextures", false);
      __publicField(this, "_flagFrameRate", false);
      __publicField(this, "_flagIndex", false);
      __publicField(this, "_amount", 1);
      __publicField(this, "_duration", 0);
      __publicField(this, "_index", 0);
      __publicField(this, "_startTime", 0);
      __publicField(this, "_playing", false);
      __publicField(this, "_firstFrame", 0);
      __publicField(this, "_lastFrame", 0);
      __publicField(this, "_loop", true);
      __publicField(this, "_textures", null);
      __publicField(this, "_frameRate", 0);
      __publicField(this, "_origin", null);
      for (let prop in proto19) {
        Object.defineProperty(this, prop, proto19[prop]);
      }
      this._renderer.flagTextures = FlagTextures.bind(this);
      this._renderer.bindTextures = BindTextures.bind(this);
      this._renderer.unbindTextures = UnbindTextures.bind(this);
      this.noStroke();
      this.noFill();
      if (Array.isArray(paths)) {
        this.textures = paths.map(GenerateTexture.bind(this));
      } else {
        this.textures = [GenerateTexture(paths)];
      }
      this.origin = new Vector;
      this._update();
      if (typeof frameRate === "number") {
        this.frameRate = frameRate;
      } else {
        this.frameRate = _ImageSequence.DefaultFrameRate;
      }
      this.index = 0;
    }
    play(firstFrame, lastFrame, onLastFrame) {
      this._playing = true;
      this._firstFrame = 0;
      this._lastFrame = this.amount - 1;
      this._startTime = _.performance.now();
      if (typeof firstFrame === "number") {
        this._firstFrame = firstFrame;
      }
      if (typeof lastFrame === "number") {
        this._lastFrame = lastFrame;
      }
      if (typeof onLastFrame === "function") {
        this._onLastFrame = onLastFrame;
      } else {
        delete this._onLastFrame;
      }
      if (this._index !== this._firstFrame) {
        this._startTime -= 1000 * Math.abs(this._index - this._firstFrame) / this._frameRate;
      }
      return this;
    }
    pause() {
      this._playing = false;
      return this;
    }
    stop() {
      this._playing = false;
      this._index = this._firstFrame;
      return this;
    }
    clone(parent) {
      const clone = new _ImageSequence(this.textures, this.translation.x, this.translation.y, this.frameRate);
      clone._loop = this._loop;
      if (this._playing) {
        clone.play();
      }
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const object = super.toObject.call(this);
      object.textures = this.textures.map(function(texture) {
        return texture.toObject();
      });
      object.frameRate = this.frameRate;
      object.index = this.index;
      object._firstFrame = this._firstFrame;
      object._lastFrame = this._lastFrame;
      object._loop = this._loop;
      return object;
    }
    _update() {
      const effect = this._textures;
      let width, height, elapsed, amount, duration, texture;
      let index, frames;
      if (effect) {
        if (this._flagTextures) {
          this._amount = effect.length;
        }
        if (this._flagFrameRate) {
          this._duration = 1000 * this._amount / this._frameRate;
        }
        if (this._playing && this._frameRate > 0) {
          amount = this._amount;
          if (_.isNaN(this._lastFrame)) {
            this._lastFrame = amount - 1;
          }
          elapsed = _.performance.now() - this._startTime;
          frames = this._lastFrame + 1;
          duration = 1000 * (frames - this._firstFrame) / this._frameRate;
          if (this._loop) {
            elapsed = elapsed % duration;
          } else {
            elapsed = Math.min(elapsed, duration);
          }
          index = lerp(this._firstFrame, frames, elapsed / duration);
          index = Math.floor(index);
          if (index !== this._index) {
            this._index = index;
            texture = effect[this._index];
            if (texture.loaded) {
              width = texture.image.width;
              height = texture.image.height;
              if (this.width !== width) {
                this.width = width;
              }
              if (this.height !== height) {
                this.height = height;
              }
              this.fill = texture;
              if (index >= this._lastFrame - 1 && this._onLastFrame) {
                this._onLastFrame();
              }
            }
          }
        } else if (this._flagIndex || !(this.fill instanceof Texture)) {
          texture = effect[this._index];
          if (texture.loaded) {
            width = texture.image.width;
            height = texture.image.height;
            if (this.width !== width) {
              this.width = width;
            }
            if (this.height !== height) {
              this.height = height;
            }
          }
          this.fill = texture;
        }
      }
      super._update.call(this);
      return this;
    }
    flagReset() {
      this._flagTextures = this._flagFrameRate = false;
      super.flagReset.call(this);
      return this;
    }
  };
  ImageSequence = _ImageSequence;
  __publicField(ImageSequence, "Properties", [
    "textures",
    "frameRate",
    "index"
  ]);
  __publicField(ImageSequence, "DefaultFrameRate", 30);
  proto19 = {
    frameRate: {
      enumerable: true,
      get: function() {
        return this._frameRate;
      },
      set: function(v) {
        this._frameRate = v;
        this._flagFrameRate = true;
      }
    },
    index: {
      enumerable: true,
      get: function() {
        return this._index;
      },
      set: function(v) {
        this._index = v;
        this._flagIndex = true;
      }
    },
    textures: {
      enumerable: true,
      get: function() {
        return this._textures;
      },
      set: function(textures) {
        const bindTextures = this._renderer.bindTextures;
        const unbindTextures = this._renderer.unbindTextures;
        if (this._textures) {
          this._textures.unbind(Events.Types.insert, bindTextures).unbind(Events.Types.remove, unbindTextures);
        }
        this._textures = new Collection((textures || []).slice(0));
        this._textures.bind(Events.Types.insert, bindTextures).bind(Events.Types.remove, unbindTextures);
        bindTextures(this._textures);
      }
    }
  };
  _ArcSegment = class extends Path {
    constructor(x, y, ir, or, sa, ea, res) {
      const amount = res || Constants.Resolution * 3;
      const points = [];
      for (let i = 0;i < amount; i++) {
        points.push(new Anchor);
      }
      super(points, true, false, true);
      __publicField(this, "_flagStartAngle", false);
      __publicField(this, "_flagEndAngle", false);
      __publicField(this, "_flagInnerRadius", false);
      __publicField(this, "_flagOuterRadius", false);
      __publicField(this, "_startAngle", 0);
      __publicField(this, "_endAngle", TWO_PI);
      __publicField(this, "_innerRadius", 0);
      __publicField(this, "_outerRadius", 0);
      for (let prop in proto20) {
        Object.defineProperty(this, prop, proto20[prop]);
      }
      if (typeof ir === "number") {
        this.innerRadius = ir;
      }
      if (typeof or === "number") {
        this.outerRadius = or;
      }
      if (typeof sa === "number") {
        this.startAngle = sa;
      }
      if (typeof ea === "number") {
        this.endAngle = ea;
      }
      this._update();
      if (typeof x === "number") {
        this.translation.x = x;
      }
      if (typeof y === "number") {
        this.translation.y = y;
      }
    }
    _update() {
      if (this._flagVertices || this._flagStartAngle || this._flagEndAngle || this._flagInnerRadius || this._flagOuterRadius) {
        const sa = this._startAngle;
        const ea = this._endAngle;
        const ir = this._innerRadius;
        const or = this._outerRadius;
        const connected = mod(sa, TWO_PI) === mod(ea, TWO_PI);
        const punctured = ir > 0;
        const vertices = this.vertices;
        let length = punctured ? vertices.length / 2 : vertices.length;
        let command, id = 0;
        let i, last, pct, v, theta, step, x, y, amp;
        if (connected) {
          length--;
        } else if (!punctured) {
          length -= 2;
        }
        for (i = 0, last = length - 1;i < length; i++) {
          pct = i / last;
          v = vertices[id];
          theta = pct * (ea - sa) + sa;
          step = (ea - sa) / length;
          x = or * Math.cos(theta);
          y = or * Math.sin(theta);
          switch (i) {
            case 0:
              command = Commands.move;
              break;
            default:
              command = Commands.curve;
          }
          v.command = command;
          v.x = x;
          v.y = y;
          v.controls.left.clear();
          v.controls.right.clear();
          if (v.command === Commands.curve) {
            amp = or * step / Math.PI;
            v.controls.left.x = amp * Math.cos(theta - HALF_PI);
            v.controls.left.y = amp * Math.sin(theta - HALF_PI);
            v.controls.right.x = amp * Math.cos(theta + HALF_PI);
            v.controls.right.y = amp * Math.sin(theta + HALF_PI);
            if (i === 1) {
              v.controls.left.multiplyScalar(2);
            }
            if (i === last) {
              v.controls.right.multiplyScalar(2);
            }
          }
          id++;
        }
        if (punctured) {
          if (connected) {
            vertices[id].command = Commands.close;
            id++;
          } else {
            length--;
            last = length - 1;
          }
          for (i = 0;i < length; i++) {
            pct = i / last;
            v = vertices[id];
            theta = (1 - pct) * (ea - sa) + sa;
            step = (ea - sa) / length;
            x = ir * Math.cos(theta);
            y = ir * Math.sin(theta);
            command = Commands.curve;
            if (i <= 0) {
              command = connected ? Commands.move : Commands.line;
            }
            v.command = command;
            v.x = x;
            v.y = y;
            v.controls.left.clear();
            v.controls.right.clear();
            if (v.command === Commands.curve) {
              amp = ir * step / Math.PI;
              v.controls.left.x = amp * Math.cos(theta + HALF_PI);
              v.controls.left.y = amp * Math.sin(theta + HALF_PI);
              v.controls.right.x = amp * Math.cos(theta - HALF_PI);
              v.controls.right.y = amp * Math.sin(theta - HALF_PI);
              if (i === 1) {
                v.controls.left.multiplyScalar(2);
              }
              if (i === last) {
                v.controls.right.multiplyScalar(2);
              }
            }
            id++;
          }
          vertices[id].copy(vertices[0]);
          vertices[id].command = Commands.line;
        } else if (!connected) {
          vertices[id].command = Commands.line;
          vertices[id].x = 0;
          vertices[id].y = 0;
          id++;
          vertices[id].copy(vertices[0]);
          vertices[id].command = Commands.line;
        }
      }
      super._update.call(this);
      return this;
    }
    flagReset() {
      super.flagReset.call(this);
      this._flagStartAngle = this._flagEndAngle = this._flagInnerRadius = this._flagOuterRadius = false;
      return this;
    }
    clone(parent) {
      const ir = this.innerRadius;
      const or = this.outerRadius;
      const sa = this.startAngle;
      const ea = this.endAngle;
      const resolution = this.vertices.length;
      const clone = new _ArcSegment(0, 0, ir, or, sa, ea, resolution);
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.skewX = this.skewX;
      clone.skewY = this.skewY;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      for (let i = 0;i < Path.Properties.length; i++) {
        const k = Path.Properties[i];
        clone[k] = this[k];
      }
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const object = super.toObject.call(this);
      for (let i = 0;i < _ArcSegment.Properties.length; i++) {
        const k = _ArcSegment.Properties[i];
        object[k] = this[k];
      }
      return object;
    }
  };
  ArcSegment = _ArcSegment;
  __publicField(ArcSegment, "Properties", ["startAngle", "endAngle", "innerRadius", "outerRadius"]);
  proto20 = {
    startAngle: {
      enumerable: true,
      get: function() {
        return this._startAngle;
      },
      set: function(v) {
        this._startAngle = v;
        this._flagStartAngle = true;
      }
    },
    endAngle: {
      enumerable: true,
      get: function() {
        return this._endAngle;
      },
      set: function(v) {
        this._endAngle = v;
        this._flagEndAngle = true;
      }
    },
    innerRadius: {
      enumerable: true,
      get: function() {
        return this._innerRadius;
      },
      set: function(v) {
        this._innerRadius = v;
        this._flagInnerRadius = true;
      }
    },
    outerRadius: {
      enumerable: true,
      get: function() {
        return this._outerRadius;
      },
      set: function(v) {
        this._outerRadius = v;
        this._flagOuterRadius = true;
      }
    }
  };
  ceil2 = Math.ceil;
  floor3 = Math.floor;
  _Points = class extends Shape {
    constructor(vertices) {
      super();
      __publicField(this, "_flagVertices", true);
      __publicField(this, "_flagLength", true);
      __publicField(this, "_flagFill", true);
      __publicField(this, "_flagStroke", true);
      __publicField(this, "_flagLinewidth", true);
      __publicField(this, "_flagOpacity", true);
      __publicField(this, "_flagVisible", true);
      __publicField(this, "_flagSize", true);
      __publicField(this, "_flagSizeAttenuation", true);
      __publicField(this, "_length", 0);
      __publicField(this, "_fill", "#fff");
      __publicField(this, "_stroke", "#000");
      __publicField(this, "_linewidth", 1);
      __publicField(this, "_opacity", 1);
      __publicField(this, "_visible", true);
      __publicField(this, "_size", 1);
      __publicField(this, "_sizeAttenuation", false);
      __publicField(this, "_beginning", 0);
      __publicField(this, "_ending", 1);
      __publicField(this, "_dashes", null);
      __publicField(this, "noFill", Path.prototype.noFill);
      __publicField(this, "noStroke", Path.prototype.noStroke);
      __publicField(this, "corner", Path.prototype.corner);
      __publicField(this, "center", Path.prototype.center);
      __publicField(this, "getBoundingClientRect", Path.prototype.getBoundingClientRect);
      __publicField(this, "_updateLength", Path.prototype._updateLength);
      for (let prop in proto21) {
        Object.defineProperty(this, prop, proto21[prop]);
      }
      this._renderer.type = "points";
      this._renderer.flagVertices = FlagVertices.bind(this);
      this._renderer.bindVertices = BindVertices.bind(this);
      this._renderer.unbindVertices = UnbindVertices.bind(this);
      this._renderer.flagFill = FlagFill.bind(this);
      this._renderer.flagStroke = FlagStroke.bind(this);
      this._renderer.vertices = null;
      this._renderer.collection = null;
      this.sizeAttenuation = false;
      this.beginning = 0;
      this.ending = 1;
      this.fill = "#fff";
      this.stroke = "#000";
      this.className = "";
      this.visible = true;
      this.vertices = vertices;
      this.dashes = [];
      this.dashes.offset = 0;
    }
    clone(parent) {
      const clone = new _Points;
      for (let j = 0;j < this.vertices.length; j++) {
        clone.vertices.push(this.vertices[j].clone());
      }
      for (let i = 0;i < _Points.Properties.length; i++) {
        const k = _Points.Properties[i];
        clone[k] = this[k];
      }
      clone.className = this.className;
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.skewX = this.skewX;
      clone.skewY = this.skewY;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      if (parent) {
        parent.add(clone);
      }
      return clone._update();
    }
    toObject() {
      const result = {
        vertices: this.vertices.map(function(v) {
          return v.toObject();
        })
      };
      _.each(_Points.Properties, function(k) {
        result[k] = this[k];
      }, this);
      result.className = this.className;
      result.translation = this.translation.toObject();
      result.rotation = this.rotation;
      result.scale = this.scale instanceof Vector ? this.scale.toObject() : this.scale;
      result.skewX = this.skewX;
      result.skewY = this.skewY;
      if (this.matrix.manual) {
        result.matrix = this.matrix.toObject();
      }
      return result;
    }
    subdivide(limit) {
      this._update();
      let points = [];
      for (let i = 0;i < this.vertices.length; i++) {
        const a = this.vertices[i];
        const b = this.vertices[i - 1];
        if (!b) {
          continue;
        }
        const x1 = a.x;
        const y1 = a.y;
        const x2 = b.x;
        const y2 = b.y;
        const subdivisions = subdivide(x1, y1, x1, y1, x2, y2, x2, y2, limit);
        points = points.concat(subdivisions);
      }
      this.vertices = points;
      return this;
    }
    _update() {
      if (this._flagVertices) {
        if (this._flagLength) {
          this._updateLength(undefined, true);
        }
        const beginning = Math.min(this._beginning, this._ending);
        const ending = Math.max(this._beginning, this._ending);
        const bid = getIdByLength(this, beginning * this._length);
        const eid = getIdByLength(this, ending * this._length);
        const low = ceil2(bid);
        const high = floor3(eid);
        let j = 0, v;
        this._renderer.vertices = [];
        this._renderer.collection = [];
        for (let i = 0;i < this._collection.length; i++) {
          if (i >= low && i <= high) {
            v = this._collection[i];
            this._renderer.collection.push(v);
            this._renderer.vertices[j * 2 + 0] = v.x;
            this._renderer.vertices[j * 2 + 1] = v.y;
            j++;
          }
        }
      }
      super._update.apply(this, arguments);
      return this;
    }
    flagReset() {
      this._flagVertices = this._flagLength = this._flagFill = this._flagStroke = this._flagLinewidth = this._flagOpacity = this._flagVisible = this._flagSize = this._flagSizeAttenuation = false;
      super.flagReset.call(this);
      return this;
    }
  };
  Points = _Points;
  __publicField(Points, "Properties", [
    "fill",
    "stroke",
    "linewidth",
    "opacity",
    "visible",
    "size",
    "sizeAttenuation",
    "beginning",
    "ending"
  ]);
  proto21 = {
    linewidth: {
      enumerable: true,
      get: function() {
        return this._linewidth;
      },
      set: function(v) {
        this._linewidth = v;
        this._flagLinewidth = true;
      }
    },
    opacity: {
      enumerable: true,
      get: function() {
        return this._opacity;
      },
      set: function(v) {
        this._opacity = v;
        this._flagOpacity = true;
      }
    },
    visible: {
      enumerable: true,
      get: function() {
        return this._visible;
      },
      set: function(v) {
        this._visible = v;
        this._flagVisible = true;
      }
    },
    size: {
      enumerable: true,
      get: function() {
        return this._size;
      },
      set: function(v) {
        this._size = v;
        this._flagSize = true;
      }
    },
    sizeAttenuation: {
      enumerable: true,
      get: function() {
        return this._sizeAttenuation;
      },
      set: function(v) {
        this._sizeAttenuation = v;
        this._flagSizeAttenuation = true;
      }
    },
    fill: {
      enumerable: true,
      get: function() {
        return this._fill;
      },
      set: function(f) {
        if (this._fill instanceof Gradient || this._fill instanceof LinearGradient || this._fill instanceof RadialGradient || this._fill instanceof Texture) {
          this._fill.unbind(Events.Types.change, this._renderer.flagFill);
        }
        this._fill = f;
        this._flagFill = true;
        if (this._fill instanceof Gradient || this._fill instanceof LinearGradient || this._fill instanceof RadialGradient || this._fill instanceof Texture) {
          this._fill.bind(Events.Types.change, this._renderer.flagFill);
        }
      }
    },
    stroke: {
      enumerable: true,
      get: function() {
        return this._stroke;
      },
      set: function(f) {
        if (this._stroke instanceof Gradient || this._stroke instanceof LinearGradient || this._stroke instanceof RadialGradient || this._stroke instanceof Texture) {
          this._stroke.unbind(Events.Types.change, this._renderer.flagStroke);
        }
        this._stroke = f;
        this._flagStroke = true;
        if (this._stroke instanceof Gradient || this._stroke instanceof LinearGradient || this._stroke instanceof RadialGradient || this._stroke instanceof Texture) {
          this._stroke.bind(Events.Types.change, this._renderer.flagStroke);
        }
      }
    },
    length: {
      get: function() {
        if (this._flagLength) {
          this._updateLength();
        }
        return this._length;
      }
    },
    beginning: {
      enumerable: true,
      get: function() {
        return this._beginning;
      },
      set: function(v) {
        this._beginning = v;
        this._flagVertices = true;
      }
    },
    ending: {
      enumerable: true,
      get: function() {
        return this._ending;
      },
      set: function(v) {
        this._ending = v;
        this._flagVertices = true;
      }
    },
    vertices: {
      enumerable: true,
      get: function() {
        return this._collection;
      },
      set: function(vertices) {
        const bindVertices = this._renderer.bindVertices;
        const unbindVertices = this._renderer.unbindVertices;
        if (this._collection) {
          this._collection.unbind(Events.Types.insert, bindVertices).unbind(Events.Types.remove, unbindVertices);
        }
        if (vertices instanceof Collection) {
          this._collection = vertices;
        } else {
          this._collection = new Collection(vertices || []);
        }
        this._collection.bind(Events.Types.insert, bindVertices).bind(Events.Types.remove, unbindVertices);
        bindVertices(this._collection);
      }
    },
    dashes: {
      enumerable: true,
      get: function() {
        return this._dashes;
      },
      set: function(v) {
        if (typeof v.offset !== "number") {
          v.offset = this.dashes && this._dashes.offset || 0;
        }
        this._dashes = v;
      }
    }
  };
  cos5 = Math.cos;
  sin5 = Math.sin;
  _Polygon = class extends Path {
    constructor(x, y, radius, sides) {
      sides = Math.max(sides || 0, 3);
      super();
      __publicField(this, "_flagWidth", false);
      __publicField(this, "_flagHeight", false);
      __publicField(this, "_flagSides", false);
      __publicField(this, "_radius", 0);
      __publicField(this, "_width", 0);
      __publicField(this, "_height", 0);
      __publicField(this, "_sides", 0);
      for (let prop in proto22) {
        Object.defineProperty(this, prop, proto22[prop]);
      }
      this.closed = true;
      this.automatic = false;
      if (typeof radius === "number") {
        this.radius = radius;
      }
      if (typeof sides === "number") {
        this.sides = sides;
      }
      this._update();
      if (typeof x === "number") {
        this.translation.x = x;
      }
      if (typeof y === "number") {
        this.translation.y = y;
      }
    }
    _update() {
      if (this._flagVertices || this._flagWidth || this._flagHeight || this._flagSides) {
        const sides = this._sides;
        const amount = sides + 1;
        let length = this.vertices.length;
        if (length > sides) {
          this.vertices.splice(sides - 1, length - sides);
          length = sides;
        }
        for (let i = 0;i < amount; i++) {
          const pct = (i + 0.5) / sides;
          const theta = TWO_PI * pct + Math.PI / 2;
          const x = this._width * cos5(theta) / 2;
          const y = this._height * sin5(theta) / 2;
          if (i >= length) {
            this.vertices.push(new Anchor(x, y));
          } else {
            this.vertices[i].set(x, y);
          }
          this.vertices[i].command = i === 0 ? Commands.move : Commands.line;
        }
      }
      super._update.call(this);
      return this;
    }
    flagReset() {
      this._flagWidth = this._flagHeight = this._flagSides = false;
      super.flagReset.call(this);
      return this;
    }
    clone(parent) {
      const clone = new _Polygon(0, 0, 0, this.sides);
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.skewX = this.skewX;
      clone.skewY = this.skewY;
      clone.width = this.width;
      clone.height = this.height;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      for (let i = 0;i < Path.Properties.length; i++) {
        const k = Path.Properties[i];
        clone[k] = this[k];
      }
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const object = super.toObject.call(this);
      for (let i = 0;i < _Polygon.Properties.length; i++) {
        const k = _Polygon.Properties[i];
        object[k] = this[k];
      }
      return object;
    }
  };
  Polygon = _Polygon;
  __publicField(Polygon, "Properties", ["width", "height", "sides"]);
  proto22 = {
    radius: {
      enumerable: true,
      get: function() {
        return this._radius;
      },
      set: function(v) {
        this._radius = v;
        this.width = v * 2;
        this.height = v * 2;
      }
    },
    width: {
      enumerable: true,
      get: function() {
        return this._width;
      },
      set: function(v) {
        this._width = v;
        this._flagWidth = true;
        this._radius = Math.max(this.width, this.height) / 2;
      }
    },
    height: {
      enumerable: true,
      get: function() {
        return this._height;
      },
      set: function(v) {
        this._height = v;
        this._flagHeight = true;
        this._radius = Math.max(this.width, this.height) / 2;
      }
    },
    sides: {
      enumerable: true,
      get: function() {
        return this._sides;
      },
      set: function(v) {
        this._sides = v;
        this._flagSides = true;
      }
    }
  };
  cos6 = Math.cos;
  sin6 = Math.sin;
  _Star = class extends Path {
    constructor(x, y, innerRadius, outerRadius, sides) {
      if (arguments.length <= 3) {
        outerRadius = innerRadius;
        innerRadius = outerRadius / 2;
      }
      if (typeof sides !== "number" || sides <= 0) {
        sides = 5;
      }
      super();
      __publicField(this, "_flagInnerRadius", false);
      __publicField(this, "_flagOuterRadius", false);
      __publicField(this, "_flagSides", false);
      __publicField(this, "_innerRadius", 0);
      __publicField(this, "_outerRadius", 0);
      __publicField(this, "_sides", 0);
      for (let prop in proto23) {
        Object.defineProperty(this, prop, proto23[prop]);
      }
      this.closed = true;
      this.automatic = false;
      if (typeof innerRadius === "number") {
        this.innerRadius = innerRadius;
      }
      if (typeof outerRadius === "number") {
        this.outerRadius = outerRadius;
      }
      if (typeof sides === "number") {
        this.sides = sides;
      }
      this._update();
      if (typeof x === "number") {
        this.translation.x = x;
      }
      if (typeof y === "number") {
        this.translation.y = y;
      }
    }
    _update() {
      if (this._flagVertices || this._flagInnerRadius || this._flagOuterRadius || this._flagSides) {
        const sides = this._sides * 2;
        const amount = sides + 1;
        let length = this.vertices.length;
        if (length > sides) {
          this.vertices.splice(sides - 1, length - sides);
          length = sides;
        }
        for (let i = 0;i < amount; i++) {
          const pct = (i + 0.5) / sides;
          const theta = TWO_PI * pct;
          const r = (!(i % 2) ? this._innerRadius : this._outerRadius) / 2;
          const x = r * cos6(theta);
          const y = r * sin6(theta);
          if (i >= length) {
            this.vertices.push(new Anchor(x, y));
          } else {
            this.vertices[i].set(x, y);
          }
          this.vertices[i].command = i === 0 ? Commands.move : Commands.line;
        }
      }
      super._update.call(this);
      return this;
    }
    flagReset() {
      this._flagInnerRadius = this._flagOuterRadius = this._flagSides = false;
      super.flagReset.call(this);
      return this;
    }
    clone(parent) {
      const ir = this.innerRadius;
      const or = this.outerRadius;
      const sides = this.sides;
      const clone = new _Star(0, 0, ir, or, sides);
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.skewX = this.skewX;
      clone.skewY = this.skewY;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      for (let i = 0;i < Path.Properties.length; i++) {
        const k = Path.Properties[i];
        clone[k] = this[k];
      }
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const object = super.toObject.call(this);
      for (let i = 0;i < _Star.Properties.length; i++) {
        const k = _Star.Properties[i];
        object[k] = this[k];
      }
      return object;
    }
  };
  Star = _Star;
  __publicField(Star, "Properties", ["innerRadius", "outerRadius", "sides"]);
  proto23 = {
    innerRadius: {
      enumerable: true,
      get: function() {
        return this._innerRadius;
      },
      set: function(v) {
        this._innerRadius = v;
        this._flagInnerRadius = true;
      }
    },
    outerRadius: {
      enumerable: true,
      get: function() {
        return this._outerRadius;
      },
      set: function(v) {
        this._outerRadius = v;
        this._flagOuterRadius = true;
      }
    },
    sides: {
      enumerable: true,
      get: function() {
        return this._sides;
      },
      set: function(v) {
        this._sides = v;
        this._flagSides = true;
      }
    }
  };
  svg = {
    version: 1.1,
    ns: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    alignments: {
      left: "start",
      center: "middle",
      right: "end"
    },
    baselines: {
      top: "hanging",
      middle: "middle",
      bottom: "ideographic",
      baseline: "alphabetic"
    },
    createElement: function(name, attrs) {
      const tag = name;
      const elem = document.createElementNS(svg.ns, tag);
      if (tag === "svg") {
        attrs = _.defaults(attrs || {}, {
          version: svg.version
        });
      }
      if (attrs && Object.keys(attrs).length > 0) {
        svg.setAttributes(elem, attrs);
      }
      return elem;
    },
    setAttributes: function(elem, attrs) {
      const keys = Object.keys(attrs);
      for (let i = 0;i < keys.length; i++) {
        if (/href/.test(keys[i])) {
          elem.setAttributeNS(svg.xlink, keys[i], attrs[keys[i]]);
        } else {
          elem.setAttribute(keys[i], attrs[keys[i]]);
        }
      }
      return this;
    },
    removeAttributes: function(elem, attrs) {
      for (let key in attrs) {
        elem.removeAttribute(key);
      }
      return this;
    },
    toString: function(points, closed2) {
      let l = points.length, last = l - 1, d, string = "";
      for (let i = 0;i < l; i++) {
        const b = points[i];
        const prev = closed2 ? mod(i - 1, l) : Math.max(i - 1, 0);
        const a = points[prev];
        let command, c;
        let vx, vy, ux, uy, ar, bl, br, cl;
        let rx, ry, xAxisRotation, largeArcFlag, sweepFlag;
        let x = toFixed(b.x);
        let y = toFixed(b.y);
        switch (b.command) {
          case Commands.close:
            command = Commands.close;
            break;
          case Commands.arc:
            rx = b.rx;
            ry = b.ry;
            xAxisRotation = b.xAxisRotation;
            largeArcFlag = b.largeArcFlag;
            sweepFlag = b.sweepFlag;
            command = Commands.arc + " " + rx + " " + ry + " " + xAxisRotation + " " + largeArcFlag + " " + sweepFlag + " " + x + " " + y;
            break;
          case Commands.curve:
            ar = a.controls && a.controls.right || Vector.zero;
            bl = b.controls && b.controls.left || Vector.zero;
            if (a.relative) {
              vx = toFixed(ar.x + a.x);
              vy = toFixed(ar.y + a.y);
            } else {
              vx = toFixed(ar.x);
              vy = toFixed(ar.y);
            }
            if (b.relative) {
              ux = toFixed(bl.x + b.x);
              uy = toFixed(bl.y + b.y);
            } else {
              ux = toFixed(bl.x);
              uy = toFixed(bl.y);
            }
            command = (i === 0 ? Commands.move : Commands.curve) + " " + vx + " " + vy + " " + ux + " " + uy + " " + x + " " + y;
            break;
          case Commands.move:
            d = b;
            command = Commands.move + " " + x + " " + y;
            break;
          default:
            command = b.command + " " + x + " " + y;
        }
        if (i >= last && closed2) {
          if (b.command === Commands.curve) {
            c = d;
            br = b.controls && b.controls.right || b;
            cl = c.controls && c.controls.left || c;
            if (b.relative) {
              vx = toFixed(br.x + b.x);
              vy = toFixed(br.y + b.y);
            } else {
              vx = toFixed(br.x);
              vy = toFixed(br.y);
            }
            if (c.relative) {
              ux = toFixed(cl.x + c.x);
              uy = toFixed(cl.y + c.y);
            } else {
              ux = toFixed(cl.x);
              uy = toFixed(cl.y);
            }
            x = toFixed(c.x);
            y = toFixed(c.y);
            command += " C " + vx + " " + vy + " " + ux + " " + uy + " " + x + " " + y;
          }
          if (b.command !== Commands.close) {
            command += " Z";
          }
        }
        string += command + " ";
      }
      return string;
    },
    pointsToString: function(points, size) {
      let string = "";
      const r = size * 0.5;
      for (let i = 0;i < points.length; i++) {
        const x = points[i].x;
        const y = points[i].y - r;
        string += Commands.move + " " + x + " " + y + " ";
        string += "a " + r + " " + r + " 0 1 0 0.001 0 Z";
      }
      return string;
    },
    getClip: function(shape, domElement) {
      let clip = shape._renderer.clip;
      if (!clip) {
        clip = shape._renderer.clip = svg.createElement("clipPath", {
          "clip-rule": "nonzero"
        });
      }
      if (clip.parentNode === null) {
        domElement.defs.appendChild(clip);
      }
      return clip;
    },
    defs: {
      update: function(domElement) {
        const { defs } = domElement;
        if (defs._flagUpdate) {
          const children = Array.prototype.slice.call(defs.children, 0);
          for (let i = 0;i < children.length; i++) {
            const child = children[i];
            const id = child.id;
            const selector = `[fill="url(#${id})"],[stroke="url(#${id})"],[clip-path="url(#${id})"]`;
            const exists = domElement.querySelector(selector);
            if (!exists) {
              defs.removeChild(child);
            }
          }
          defs._flagUpdate = false;
        }
      }
    },
    group: {
      appendChild: function(object) {
        const elem = object._renderer.elem;
        if (!elem) {
          return;
        }
        const tag = elem.nodeName;
        if (!tag || /(radial|linear)gradient/i.test(tag) || object._clip) {
          return;
        }
        this.elem.appendChild(elem);
      },
      removeChild: function(object) {
        const elem = object._renderer.elem;
        if (!elem || elem.parentNode != this.elem) {
          return;
        }
        const tag = elem.nodeName;
        if (!tag) {
          return;
        }
        if (object._clip) {
          return;
        }
        this.elem.removeChild(elem);
      },
      orderChild: function(object) {
        this.elem.appendChild(object._renderer.elem);
      },
      renderChild: function(child) {
        svg[child._renderer.type].render.call(child, this);
      },
      render: function(domElement) {
        if (!this._visible && !this._flagVisible || this._opacity === 0 && !this._flagOpacity) {
          return this;
        }
        this._update();
        if (!this._renderer.elem) {
          this._renderer.elem = svg.createElement("g", {
            id: this.id
          });
          domElement.appendChild(this._renderer.elem);
        }
        const flagMatrix = this._matrix.manual || this._flagMatrix;
        const context = {
          domElement,
          elem: this._renderer.elem
        };
        if (flagMatrix) {
          this._renderer.elem.setAttribute("transform", "matrix(" + this._matrix.toString() + ")");
        }
        for (let i = 0;i < this.children.length; i++) {
          const child = this.children[i];
          svg[child._renderer.type].render.call(child, domElement);
        }
        if (this._flagId) {
          this._renderer.elem.setAttribute("id", this._id);
        }
        if (this._flagOpacity) {
          this._renderer.elem.setAttribute("opacity", this._opacity);
        }
        if (this._flagVisible) {
          this._renderer.elem.setAttribute("display", this._visible ? "inline" : "none");
        }
        if (this._flagClassName) {
          this._renderer.elem.setAttribute("class", this.classList.join(" "));
        }
        if (this._flagAdditions) {
          this.additions.forEach(svg.group.appendChild, context);
        }
        if (this._flagSubtractions) {
          this.subtractions.forEach(svg.group.removeChild, context);
        }
        if (this._flagOrder) {
          this.children.forEach(svg.group.orderChild, context);
        }
        if (this._flagMask) {
          if (this._mask) {
            svg[this._mask._renderer.type].render.call(this._mask, domElement);
            this._renderer.elem.setAttribute("clip-path", "url(#" + this._mask.id + ")");
          } else {
            this._renderer.elem.removeAttribute("clip-path");
          }
        }
        if (this.dataset) {
          Object.assign(this._renderer.elem.dataset, this.dataset);
        }
        return this.flagReset();
      }
    },
    path: {
      render: function(domElement) {
        if (this._opacity === 0 && !this._flagOpacity) {
          return this;
        }
        this._update();
        const changed = {};
        const flagMatrix = this._matrix.manual || this._flagMatrix;
        if (flagMatrix) {
          changed.transform = "matrix(" + this._matrix.toString() + ")";
        }
        if (this._flagId) {
          changed.id = this._id;
        }
        if (this._flagVertices) {
          const vertices = svg.toString(this._renderer.vertices, this._closed);
          changed.d = vertices;
        }
        if (this._fill && this._fill._renderer) {
          this._renderer.hasFillEffect = true;
          this._fill._update();
          svg[this._fill._renderer.type].render.call(this._fill, domElement, true);
        }
        if (this._flagFill) {
          changed.fill = this._fill && this._fill.id ? "url(#" + this._fill.id + ")" : this._fill;
          if (this._renderer.hasFillEffect && typeof this._fill.id === "undefined") {
            domElement.defs._flagUpdate = true;
            delete this._renderer.hasFillEffect;
          }
        }
        if (this._stroke && this._stroke._renderer) {
          this._renderer.hasStrokeEffect = true;
          this._stroke._update();
          svg[this._stroke._renderer.type].render.call(this._stroke, domElement, true);
        }
        if (this._flagStroke) {
          changed.stroke = this._stroke && this._stroke.id ? "url(#" + this._stroke.id + ")" : this._stroke;
          if (this._renderer.hasStrokeEffect && typeof this._stroke.id === "undefined") {
            domElement.defs._flagUpdate = true;
            delete this._renderer.hasStrokeEffect;
          }
        }
        if (this._flagLinewidth) {
          changed["stroke-width"] = this._linewidth;
        }
        if (this._flagOpacity) {
          changed["stroke-opacity"] = this._opacity;
          changed["fill-opacity"] = this._opacity;
        }
        if (this._flagClassName) {
          changed["class"] = this.classList.join(" ");
        }
        if (this._flagVisible) {
          changed.visibility = this._visible ? "visible" : "hidden";
        }
        if (this._flagCap) {
          changed["stroke-linecap"] = this._cap;
        }
        if (this._flagJoin) {
          changed["stroke-linejoin"] = this._join;
        }
        if (this._flagMiter) {
          changed["stroke-miterlimit"] = this._miter;
        }
        if (this.dashes && this.dashes.length > 0) {
          changed["stroke-dasharray"] = this.dashes.join(" ");
          changed["stroke-dashoffset"] = this.dashes.offset || 0;
        }
        if (!this._renderer.elem) {
          changed.id = this._id;
          this._renderer.elem = svg.createElement("path", changed);
          domElement.appendChild(this._renderer.elem);
        } else {
          svg.setAttributes(this._renderer.elem, changed);
        }
        if (this._flagClip) {
          const clip = svg.getClip(this, domElement);
          const elem = this._renderer.elem;
          if (this._clip) {
            elem.removeAttribute("id");
            clip.setAttribute("id", this.id);
            clip.appendChild(elem);
          } else {
            clip.removeAttribute("id");
            elem.setAttribute("id", this.id);
            this.parent._renderer.elem.appendChild(elem);
          }
        }
        if (this._flagMask) {
          if (this._mask) {
            svg[this._mask._renderer.type].render.call(this._mask, domElement);
            this._renderer.elem.setAttribute("clip-path", "url(#" + this._mask.id + ")");
          } else {
            this._renderer.elem.removeAttribute("clip-path");
          }
        }
        return this.flagReset();
      }
    },
    points: {
      render: function(domElement) {
        if (this._opacity === 0 && !this._flagOpacity) {
          return this;
        }
        this._update();
        const changed = {};
        const flagMatrix = this._matrix.manual || this._flagMatrix;
        if (flagMatrix) {
          changed.transform = "matrix(" + this._matrix.toString() + ")";
        }
        if (this._flagId) {
          changed.id = this._id;
        }
        if (this._flagVertices || this._flagSize || this._flagSizeAttenuation) {
          let size = this._size;
          if (!this._sizeAttenuation) {
            const me = this.worldMatrix.elements;
            const m = decomposeMatrix(me[0], me[3], me[1], me[4], me[2], me[5]);
            size /= Math.max(m.scaleX, m.scaleY);
          }
          const vertices = svg.pointsToString(this._renderer.collection, size);
          changed.d = vertices;
        }
        if (this._fill && this._fill._renderer) {
          this._renderer.hasFillEffect = true;
          this._fill._update();
          svg[this._fill._renderer.type].render.call(this._fill, domElement, true);
        }
        if (this._flagFill) {
          changed.fill = this._fill && this._fill.id ? "url(#" + this._fill.id + ")" : this._fill;
          if (this._renderer.hasFillEffect && typeof this._fill.id === "undefined") {
            domElement.defs._flagUpdate = true;
            delete this._renderer.hasFillEffect;
          }
        }
        if (this._stroke && this._stroke._renderer) {
          this._renderer.hasStrokeEffect = true;
          this._stroke._update();
          svg[this._stroke._renderer.type].render.call(this._stroke, domElement, true);
        }
        if (this._flagStroke) {
          changed.stroke = this._stroke && this._stroke.id ? "url(#" + this._stroke.id + ")" : this._stroke;
          if (this._renderer.hasStrokeEffect && typeof this._stroke.id === "undefined") {
            domElement.defs._flagUpdate = true;
            delete this._renderer.hasStrokeEffect;
          }
        }
        if (this._flagLinewidth) {
          changed["stroke-width"] = this._linewidth;
        }
        if (this._flagOpacity) {
          changed["stroke-opacity"] = this._opacity;
          changed["fill-opacity"] = this._opacity;
        }
        if (this._flagClassName) {
          changed["class"] = this.classList.join(" ");
        }
        if (this._flagVisible) {
          changed.visibility = this._visible ? "visible" : "hidden";
        }
        if (this.dashes && this.dashes.length > 0) {
          changed["stroke-dasharray"] = this.dashes.join(" ");
          changed["stroke-dashoffset"] = this.dashes.offset || 0;
        }
        if (!this._renderer.elem) {
          changed.id = this._id;
          this._renderer.elem = svg.createElement("path", changed);
          domElement.appendChild(this._renderer.elem);
        } else {
          svg.setAttributes(this._renderer.elem, changed);
        }
        return this.flagReset();
      }
    },
    text: {
      render: function(domElement) {
        this._update();
        const changed = {};
        const flagMatrix = this._matrix.manual || this._flagMatrix;
        if (flagMatrix) {
          changed.transform = "matrix(" + this._matrix.toString() + ")";
        }
        if (this._flagId) {
          changed.id = this._id;
        }
        if (this._flagFamily) {
          changed["font-family"] = this._family;
        }
        if (this._flagSize) {
          changed["font-size"] = this._size;
        }
        if (this._flagLeading) {
          changed["line-height"] = this._leading;
        }
        if (this._flagAlignment) {
          changed["text-anchor"] = svg.alignments[this._alignment] || this._alignment;
        }
        if (this._flagBaseline) {
          changed["dominant-baseline"] = svg.baselines[this._baseline] || this._baseline;
        }
        if (this._flagStyle) {
          changed["font-style"] = this._style;
        }
        if (this._flagWeight) {
          changed["font-weight"] = this._weight;
        }
        if (this._flagDecoration) {
          changed["text-decoration"] = this._decoration;
        }
        if (this._flagDirection) {
          changed["direction"] = this._direction;
        }
        if (this._fill && this._fill._renderer) {
          this._renderer.hasFillEffect = true;
          this._fill._update();
          svg[this._fill._renderer.type].render.call(this._fill, domElement, true);
        }
        if (this._flagFill) {
          changed.fill = this._fill && this._fill.id ? "url(#" + this._fill.id + ")" : this._fill;
          if (this._renderer.hasFillEffect && typeof this._fill.id === "undefined") {
            domElement.defs._flagUpdate = true;
            delete this._renderer.hasFillEffect;
          }
        }
        if (this._stroke && this._stroke._renderer) {
          this._renderer.hasStrokeEffect = true;
          this._stroke._update();
          svg[this._stroke._renderer.type].render.call(this._stroke, domElement, true);
        }
        if (this._flagStroke) {
          changed.stroke = this._stroke && this._stroke.id ? "url(#" + this._stroke.id + ")" : this._stroke;
          if (this._renderer.hasStrokeEffect && typeof this._stroke.id === "undefined") {
            domElement.defs._flagUpdate = true;
            delete this._renderer.hasStrokeEffect;
          }
        }
        if (this._flagLinewidth) {
          changed["stroke-width"] = this._linewidth;
        }
        if (this._flagOpacity) {
          changed.opacity = this._opacity;
        }
        if (this._flagClassName) {
          changed["class"] = this.classList.join(" ");
        }
        if (this._flagVisible) {
          changed.visibility = this._visible ? "visible" : "hidden";
        }
        if (this.dashes && this.dashes.length > 0) {
          changed["stroke-dasharray"] = this.dashes.join(" ");
          changed["stroke-dashoffset"] = this.dashes.offset || 0;
        }
        if (!this._renderer.elem) {
          changed.id = this._id;
          this._renderer.elem = svg.createElement("text", changed);
          domElement.appendChild(this._renderer.elem);
        } else {
          svg.setAttributes(this._renderer.elem, changed);
        }
        if (this._flagClip) {
          const clip = svg.getClip(this, domElement);
          const elem = this._renderer.elem;
          if (this._clip) {
            elem.removeAttribute("id");
            clip.setAttribute("id", this.id);
            clip.appendChild(elem);
          } else {
            clip.removeAttribute("id");
            elem.setAttribute("id", this.id);
            this.parent._renderer.elem.appendChild(elem);
          }
        }
        if (this._flagMask) {
          if (this._mask) {
            svg[this._mask._renderer.type].render.call(this._mask, domElement);
            this._renderer.elem.setAttribute("clip-path", "url(#" + this._mask.id + ")");
          } else {
            this._renderer.elem.removeAttribute("clip-path");
          }
        }
        if (this._flagValue) {
          this._renderer.elem.textContent = this._value;
        }
        return this.flagReset();
      }
    },
    "linear-gradient": {
      render: function(domElement, silent) {
        if (!silent) {
          this._update();
        }
        const changed = {};
        if (this._flagId) {
          changed.id = this._id;
        }
        if (this._flagEndPoints) {
          changed.x1 = this.left._x;
          changed.y1 = this.left._y;
          changed.x2 = this.right._x;
          changed.y2 = this.right._y;
        }
        if (this._flagSpread) {
          changed.spreadMethod = this._spread;
        }
        if (this._flagUnits) {
          changed.gradientUnits = this._units;
        }
        if (!this._renderer.elem) {
          changed.id = this._id;
          this._renderer.elem = svg.createElement("linearGradient", changed);
        } else {
          svg.setAttributes(this._renderer.elem, changed);
        }
        if (this._renderer.elem.parentNode === null) {
          domElement.defs.appendChild(this._renderer.elem);
        }
        if (this._flagStops) {
          const lengthChanged = this._renderer.elem.childNodes.length !== this.stops.length;
          if (lengthChanged) {
            while (this._renderer.elem.lastChild) {
              this._renderer.elem.removeChild(this._renderer.elem.lastChild);
            }
          }
          for (let i = 0;i < this.stops.length; i++) {
            const stop = this.stops[i];
            const attrs = {};
            if (stop._flagOffset) {
              attrs.offset = 100 * stop._offset + "%";
            }
            if (stop._flagColor) {
              attrs["stop-color"] = stop._color;
            }
            if (stop._flagOpacity) {
              attrs["stop-opacity"] = stop._opacity;
            }
            if (!stop._renderer.elem) {
              stop._renderer.elem = svg.createElement("stop", attrs);
            } else {
              svg.setAttributes(stop._renderer.elem, attrs);
            }
            if (lengthChanged) {
              this._renderer.elem.appendChild(stop._renderer.elem);
            }
            stop.flagReset();
          }
        }
        return this.flagReset();
      }
    },
    "radial-gradient": {
      render: function(domElement, silent) {
        if (!silent) {
          this._update();
        }
        const changed = {};
        if (this._flagId) {
          changed.id = this._id;
        }
        if (this._flagCenter) {
          changed.cx = this.center._x;
          changed.cy = this.center._y;
        }
        if (this._flagFocal) {
          changed.fx = this.focal._x;
          changed.fy = this.focal._y;
        }
        if (this._flagRadius) {
          changed.r = this._radius;
        }
        if (this._flagSpread) {
          changed.spreadMethod = this._spread;
        }
        if (this._flagUnits) {
          changed.gradientUnits = this._units;
        }
        if (!this._renderer.elem) {
          changed.id = this._id;
          this._renderer.elem = svg.createElement("radialGradient", changed);
        } else {
          svg.setAttributes(this._renderer.elem, changed);
        }
        if (this._renderer.elem.parentNode === null) {
          domElement.defs.appendChild(this._renderer.elem);
        }
        if (this._flagStops) {
          const lengthChanged = this._renderer.elem.childNodes.length !== this.stops.length;
          if (lengthChanged) {
            while (this._renderer.elem.lastChild) {
              this._renderer.elem.removeChild(this._renderer.elem.lastChild);
            }
          }
          for (let i = 0;i < this.stops.length; i++) {
            const stop = this.stops[i];
            const attrs = {};
            if (stop._flagOffset) {
              attrs.offset = 100 * stop._offset + "%";
            }
            if (stop._flagColor) {
              attrs["stop-color"] = stop._color;
            }
            if (stop._flagOpacity) {
              attrs["stop-opacity"] = stop._opacity;
            }
            if (!stop._renderer.elem) {
              stop._renderer.elem = svg.createElement("stop", attrs);
            } else {
              svg.setAttributes(stop._renderer.elem, attrs);
            }
            if (lengthChanged) {
              this._renderer.elem.appendChild(stop._renderer.elem);
            }
            stop.flagReset();
          }
        }
        return this.flagReset();
      }
    },
    texture: {
      render: function(domElement, silent) {
        if (!silent) {
          this._update();
        }
        const changed = {};
        const styles = { x: 0, y: 0 };
        const image = this.image;
        if (this._flagId) {
          changed.id = this._id;
        }
        if (this._flagLoaded && this.loaded) {
          switch (image.nodeName.toLowerCase()) {
            case "canvas":
              styles.href = styles["xlink:href"] = image.toDataURL("image/png");
              break;
            case "img":
            case "image":
              styles.href = styles["xlink:href"] = this.src;
              break;
          }
        }
        if (this._flagOffset || this._flagLoaded || this._flagScale) {
          changed.x = this._offset.x;
          changed.y = this._offset.y;
          if (image) {
            changed.x -= image.width / 2;
            changed.y -= image.height / 2;
            if (this._scale instanceof Vector) {
              changed.x *= this._scale.x;
              changed.y *= this._scale.y;
            } else {
              changed.x *= this._scale;
              changed.y *= this._scale;
            }
          }
          if (changed.x > 0) {
            changed.x *= -1;
          }
          if (changed.y > 0) {
            changed.y *= -1;
          }
        }
        if (this._flagScale || this._flagLoaded || this._flagRepeat) {
          changed.width = 0;
          changed.height = 0;
          if (image) {
            styles.width = changed.width = image.width;
            styles.height = changed.height = image.height;
            switch (this._repeat) {
              case "no-repeat":
                changed.width += 1;
                changed.height += 1;
                break;
            }
            if (this._scale instanceof Vector) {
              changed.width *= this._scale.x;
              changed.height *= this._scale.y;
            } else {
              changed.width *= this._scale;
              changed.height *= this._scale;
            }
          }
        }
        if (this._flagScale || this._flagLoaded) {
          if (!this._renderer.image) {
            this._renderer.image = svg.createElement("image", styles);
          } else {
            svg.setAttributes(this._renderer.image, styles);
          }
        }
        if (!this._renderer.elem) {
          changed.id = this._id;
          changed.patternUnits = "userSpaceOnUse";
          this._renderer.elem = svg.createElement("pattern", changed);
        } else if (Object.keys(changed).length !== 0) {
          svg.setAttributes(this._renderer.elem, changed);
        }
        if (this._renderer.elem.parentNode === null) {
          domElement.defs.appendChild(this._renderer.elem);
        }
        if (this._renderer.elem && this._renderer.image && !this._renderer.appended) {
          this._renderer.elem.appendChild(this._renderer.image);
          this._renderer.appended = true;
        }
        return this.flagReset();
      }
    }
  };
  Renderer2 = class extends Events {
    constructor(params) {
      super();
      this.domElement = params.domElement || svg.createElement("svg");
      this.scene = new Group;
      this.scene.parent = this;
      this.defs = svg.createElement("defs");
      this.defs._flagUpdate = false;
      this.domElement.appendChild(this.defs);
      this.domElement.defs = this.defs;
      this.domElement.style.overflow = "hidden";
    }
    setSize(width, height) {
      this.width = width;
      this.height = height;
      svg.setAttributes(this.domElement, {
        width,
        height
      });
      return this.trigger(Events.Types.resize, width, height);
    }
    render() {
      svg.group.render.call(this.scene, this.domElement);
      svg.defs.update(this.domElement);
      return this;
    }
  };
  __publicField(Renderer2, "Utils", svg);
  shaders = {
    create: function(gl, source, type) {
      const shader = gl.createShader(gl[type]);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
      if (!compiled) {
        const error = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw new TwoError("unable to compile shader " + shader + ": " + error);
      }
      return shader;
    },
    types: {
      vertex: "VERTEX_SHADER",
      fragment: "FRAGMENT_SHADER"
    },
    path: {
      vertex: `
      precision mediump float;
      attribute vec2 a_position;

      uniform mat3 u_matrix;
      uniform vec2 u_resolution;
      uniform vec4 u_rect;

      varying vec2 v_textureCoords;

      void main() {
        vec2 rectCoords = (a_position * (u_rect.zw - u_rect.xy)) + u_rect.xy;
        vec2 projected = (u_matrix * vec3(rectCoords, 1.0)).xy;
        vec2 normal = projected / u_resolution;
        vec2 clipspace = (normal * 2.0) - 1.0;

        gl_Position = vec4(clipspace * vec2(1.0, -1.0), 0.0, 1.0);
        v_textureCoords = a_position;
      }
    `,
      fragment: `
      precision mediump float;

      uniform sampler2D u_image;
      varying vec2 v_textureCoords;

      void main() {
        vec4 texel = texture2D(u_image, v_textureCoords);
        if (texel.a == 0.0) {
          discard;
        }
        gl_FragColor = texel;
      }
    `
    },
    points: {
      vertex: `
      precision mediump float;
      attribute vec2 a_position;

      uniform float u_size;
      uniform mat3 u_matrix;
      uniform vec2 u_resolution;

      varying vec2 v_textureCoords;

      void main() {
        vec2 projected = (u_matrix * vec3(a_position, 1.0)).xy;
        vec2 normal = projected / u_resolution;
        vec2 clipspace = (normal * 2.0) - 1.0;

        gl_PointSize = u_size;
        gl_Position = vec4(clipspace * vec2(1.0, -1.0), 0.0, 1.0);
        v_textureCoords = a_position;
      }
    `,
      fragment: `
      precision mediump float;

      uniform sampler2D u_image;

      void main() {
        vec4 texel = texture2D(u_image, gl_PointCoord);
        if (texel.a == 0.0) {
          discard;
        }
        gl_FragColor = texel;
      }
    `
    }
  };
  multiplyMatrix = Matrix2.Multiply;
  identity = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  transformation = new NumArray(9);
  CanvasUtils = Renderer.Utils;
  vector2 = new Vector;
  quad = new NumArray([
    0,
    0,
    1,
    0,
    0,
    1,
    0,
    1,
    1,
    0,
    1,
    1
  ]);
  webgl = {
    precision: 0.9,
    isHidden: /(undefined|none|transparent)/i,
    canvas: root.document ? root.document.createElement("canvas") : { getContext: function() {
    } },
    alignments: {
      left: "start",
      middle: "center",
      right: "end"
    },
    matrix: new Matrix2,
    group: {
      removeChild: function(child, gl) {
        if (child.children) {
          for (let i = 0;i < child.children.length; i++) {
            webgl.group.removeChild(child.children[i], gl);
          }
        }
        if (child._renderer.texture) {
          gl.deleteTexture(child._renderer.texture);
          delete child._renderer.texture;
        }
        if (child._renderer.positionBuffer) {
          gl.deleteBuffer(child._renderer.positionBuffer);
          delete child._renderer.positionBuffer;
        }
      },
      render: function(gl, programs) {
        if (!this._visible) {
          return;
        }
        this._update();
        const parent = this.parent;
        const flagParentMatrix = parent._matrix && parent._matrix.manual || parent._flagMatrix;
        const flagMatrix = this._matrix.manual || this._flagMatrix;
        if (flagParentMatrix || flagMatrix) {
          if (!this._renderer.matrix) {
            this._renderer.matrix = new NumArray(9);
          }
          this._matrix.toTransformArray(true, transformation);
          multiplyMatrix(transformation, parent._renderer.matrix, this._renderer.matrix);
          if (!(this._renderer.scale instanceof Vector)) {
            this._renderer.scale = new Vector;
          }
          if (this._scale instanceof Vector) {
            this._renderer.scale.x = this._scale.x;
            this._renderer.scale.y = this._scale.y;
          } else {
            this._renderer.scale.x = this._scale;
            this._renderer.scale.y = this._scale;
          }
          if (!/renderer/i.test(parent._renderer.type)) {
            this._renderer.scale.x *= parent._renderer.scale.x;
            this._renderer.scale.y *= parent._renderer.scale.y;
          }
          if (flagParentMatrix) {
            this._flagMatrix = true;
          }
        }
        if (this._mask) {
          gl.clear(gl.STENCIL_BUFFER_BIT);
          gl.enable(gl.STENCIL_TEST);
          gl.stencilFunc(gl.ALWAYS, 1, 0);
          gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);
          gl.colorMask(false, false, false, false);
          webgl[this._mask._renderer.type].render.call(this._mask, gl, programs, this);
          gl.stencilFunc(gl.EQUAL, 1, 255);
          gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
          gl.colorMask(true, true, true, true);
        }
        this._flagOpacity = parent._flagOpacity || this._flagOpacity;
        this._renderer.opacity = this._opacity * (parent && parent._renderer ? parent._renderer.opacity : 1);
        let i;
        if (this._flagSubtractions) {
          for (i = 0;i < this.subtractions.length; i++) {
            webgl.group.removeChild(this.subtractions[i], gl);
          }
        }
        for (i = 0;i < this.children.length; i++) {
          const child = this.children[i];
          webgl[child._renderer.type].render.call(child, gl, programs);
        }
        if (this._mask) {
          gl.disable(gl.STENCIL_TEST);
        }
        return this.flagReset();
      }
    },
    path: {
      updateCanvas: function(gl, elem) {
        let prev, a, c, ux, uy, vx, vy, ar, bl, br, cl, x, y;
        let isOffset;
        const commands = elem._renderer.vertices;
        const canvas3 = this.canvas;
        const ctx = this.ctx;
        const ratio = gl.renderer.ratio;
        const scale = vector2.copy(elem._renderer.scale).multiply(ratio);
        const stroke = elem._stroke;
        const linewidth = elem._linewidth;
        const fill = elem._fill;
        const opacity = elem._renderer.opacity || elem._opacity;
        const cap = elem._cap;
        const join = elem._join;
        const miter = elem._miter;
        const closed2 = elem._closed;
        const dashes = elem.dashes;
        const length = commands.length;
        const last = length - 1;
        canvas3.width = Math.max(Math.ceil(elem._renderer.rect.width * scale.x), 1);
        canvas3.height = Math.max(Math.ceil(elem._renderer.rect.height * scale.y), 1);
        const centroid = elem._renderer.rect.centroid;
        const cx = centroid.x;
        const cy = centroid.y;
        ctx.clearRect(0, 0, canvas3.width, canvas3.height);
        if (fill) {
          if (typeof fill === "string") {
            ctx.fillStyle = fill;
          } else {
            webgl[fill._renderer.type].render.call(fill, ctx, elem);
            ctx.fillStyle = fill._renderer.effect;
          }
        }
        if (stroke) {
          if (typeof stroke === "string") {
            ctx.strokeStyle = stroke;
          } else {
            webgl[stroke._renderer.type].render.call(stroke, ctx, elem);
            ctx.strokeStyle = stroke._renderer.effect;
          }
          if (linewidth) {
            ctx.lineWidth = linewidth;
          }
          if (miter) {
            ctx.miterLimit = miter;
          }
          if (join) {
            ctx.lineJoin = join;
          }
          if (!closed2 && cap) {
            ctx.lineCap = cap;
          }
        }
        if (typeof opacity === "number") {
          ctx.globalAlpha = opacity;
        }
        if (dashes && dashes.length > 0) {
          ctx.lineDashOffset = dashes.offset || 0;
          ctx.setLineDash(dashes);
        }
        let d, rx, ry, xAxisRotation, largeArcFlag, sweepFlag, ax, ay;
        ctx.save();
        ctx.scale(scale.x, scale.y);
        ctx.translate(cx, cy);
        ctx.beginPath();
        for (let i = 0;i < commands.length; i++) {
          const b = commands[i];
          x = b.x;
          y = b.y;
          switch (b.command) {
            case Commands.close:
              ctx.closePath();
              break;
            case Commands.arc:
              rx = b.rx;
              ry = b.ry;
              xAxisRotation = b.xAxisRotation;
              largeArcFlag = b.largeArcFlag;
              sweepFlag = b.sweepFlag;
              prev = closed2 ? mod(i - 1, length) : Math.max(i - 1, 0);
              a = commands[prev];
              ax = a.x;
              ay = a.y;
              CanvasUtils.renderSvgArcCommand(ctx, ax, ay, rx, ry, largeArcFlag, sweepFlag, xAxisRotation, x, y);
              break;
            case Commands.curve:
              prev = closed2 ? mod(i - 1, length) : Math.max(i - 1, 0);
              a = commands[prev];
              ar = a.controls && a.controls.right || Vector.zero;
              bl = b.controls && b.controls.left || Vector.zero;
              if (a._relative) {
                vx = ar.x + a.x;
                vy = ar.y + a.y;
              } else {
                vx = ar.x;
                vy = ar.y;
              }
              if (b._relative) {
                ux = bl.x + b.x;
                uy = bl.y + b.y;
              } else {
                ux = bl.x;
                uy = bl.y;
              }
              ctx.bezierCurveTo(vx, vy, ux, uy, x, y);
              if (i >= last && closed2) {
                c = d;
                br = b.controls && b.controls.right || Vector.zero;
                cl = c.controls && c.controls.left || Vector.zero;
                if (b._relative) {
                  vx = br.x + b.x;
                  vy = br.y + b.y;
                } else {
                  vx = br.x;
                  vy = br.y;
                }
                if (c._relative) {
                  ux = cl.x + c.x;
                  uy = cl.y + c.y;
                } else {
                  ux = cl.x;
                  uy = cl.y;
                }
                x = c.x;
                y = c.y;
                ctx.bezierCurveTo(vx, vy, ux, uy, x, y);
              }
              break;
            case Commands.line:
              ctx.lineTo(x, y);
              break;
            case Commands.move:
              d = b;
              ctx.moveTo(x, y);
              break;
          }
        }
        if (closed2) {
          ctx.closePath();
        }
        if (!webgl.isHidden.test(fill)) {
          isOffset = fill._renderer && fill._renderer.offset;
          if (isOffset) {
            ctx.save();
            ctx.translate(-fill._renderer.offset.x, -fill._renderer.offset.y);
            ctx.scale(fill._renderer.scale.x, fill._renderer.scale.y);
          }
          ctx.fill();
          if (isOffset) {
            ctx.restore();
          }
        }
        if (!webgl.isHidden.test(stroke)) {
          isOffset = stroke._renderer && stroke._renderer.offset;
          if (isOffset) {
            ctx.save();
            ctx.translate(-stroke._renderer.offset.x, -stroke._renderer.offset.y);
            ctx.scale(stroke._renderer.scale.x, stroke._renderer.scale.y);
            ctx.lineWidth = linewidth / stroke._renderer.scale.x;
          }
          ctx.stroke();
          if (isOffset) {
            ctx.restore();
          }
        }
        ctx.restore();
      },
      getBoundingClientRect: function(vertices, border, rect) {
        let left = Infinity, right = (-Infinity), top = Infinity, bottom = (-Infinity), width, height;
        vertices.forEach(function(v) {
          const { x, y, controls } = v;
          let a, b, c, d, cl, cr;
          top = Math.min(y, top);
          left = Math.min(x, left);
          right = Math.max(x, right);
          bottom = Math.max(y, bottom);
          if (!v.controls) {
            return;
          }
          cl = controls.left;
          cr = controls.right;
          if (!cl || !cr) {
            return;
          }
          a = v._relative ? cl.x + x : cl.x;
          b = v._relative ? cl.y + y : cl.y;
          c = v._relative ? cr.x + x : cr.x;
          d = v._relative ? cr.y + y : cr.y;
          if (!a || !b || !c || !d) {
            return;
          }
          top = Math.min(b, d, top);
          left = Math.min(a, c, left);
          right = Math.max(a, c, right);
          bottom = Math.max(b, d, bottom);
        });
        if (typeof border === "number") {
          top -= border;
          left -= border;
          right += border;
          bottom += border;
        }
        width = right - left;
        height = bottom - top;
        rect.top = top;
        rect.left = left;
        rect.right = right;
        rect.bottom = bottom;
        rect.width = width;
        rect.height = height;
        if (!rect.centroid) {
          rect.centroid = {};
        }
        rect.centroid.x = -left;
        rect.centroid.y = -top;
      },
      render: function(gl, programs, forcedParent) {
        if (!this._visible || !this._opacity) {
          return this;
        }
        this._update();
        const parent = forcedParent || this.parent;
        const program = programs[this._renderer.type];
        const flagParentMatrix = parent._matrix.manual || parent._flagMatrix;
        const flagMatrix = this._matrix.manual || this._flagMatrix;
        const parentChanged = this._renderer.parent !== parent;
        const flagTexture = this._flagVertices || this._flagFill || this._fill instanceof LinearGradient && (this._fill._flagSpread || this._fill._flagStops || this._fill._flagEndPoints) || this._fill instanceof RadialGradient && (this._fill._flagSpread || this._fill._flagStops || this._fill._flagRadius || this._fill._flagCenter || this._fill._flagFocal) || this._fill instanceof Texture && (this._fill._flagLoaded && this._fill.loaded || this._fill._flagImage || this._fill._flagVideo || this._fill._flagRepeat || this._fill._flagOffset || this._fill._flagScale) || this._stroke instanceof LinearGradient && (this._stroke._flagSpread || this._stroke._flagStops || this._stroke._flagEndPoints) || this._stroke instanceof RadialGradient && (this._stroke._flagSpread || this._stroke._flagStops || this._stroke._flagRadius || this._stroke._flagCenter || this._stroke._flagFocal) || this._stroke instanceof Texture && (this._stroke._flagLoaded && this._stroke.loaded || this._stroke._flagImage || this._stroke._flagVideo || this._stroke._flagRepeat || this._stroke._flagOffset || this._fill._flagScale) || this._flagStroke || this._flagLinewidth || this._flagOpacity || parent._flagOpacity || this._flagVisible || this._flagCap || this._flagJoin || this._flagMiter || this._flagScale || this.dashes && this.dashes.length > 0 || !this._renderer.texture;
        if (flagParentMatrix || flagMatrix || parentChanged) {
          if (!this._renderer.matrix) {
            this._renderer.matrix = new NumArray(9);
          }
          this._matrix.toTransformArray(true, transformation);
          multiplyMatrix(transformation, parent._renderer.matrix, this._renderer.matrix);
          if (!(this._renderer.scale instanceof Vector)) {
            this._renderer.scale = new Vector;
          }
          if (this._scale instanceof Vector) {
            this._renderer.scale.x = this._scale.x * parent._renderer.scale.x;
            this._renderer.scale.y = this._scale.y * parent._renderer.scale.y;
          } else {
            this._renderer.scale.x = this._scale * parent._renderer.scale.x;
            this._renderer.scale.y = this._scale * parent._renderer.scale.y;
          }
          if (parentChanged) {
            this._renderer.parent = parent;
          }
        }
        if (this._mask) {
          gl.clear(gl.STENCIL_BUFFER_BIT);
          gl.enable(gl.STENCIL_TEST);
          gl.stencilFunc(gl.ALWAYS, 1, 0);
          gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);
          gl.colorMask(false, false, false, false);
          webgl[this._mask._renderer.type].render.call(this._mask, gl, programs, this);
          gl.stencilFunc(gl.EQUAL, 1, 255);
          gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
          gl.colorMask(true, true, true, true);
        }
        if (flagTexture) {
          if (!this._renderer.rect) {
            this._renderer.rect = {};
          }
          this._renderer.opacity = this._opacity * parent._renderer.opacity;
          webgl.path.getBoundingClientRect(this._renderer.vertices, this._linewidth, this._renderer.rect);
          webgl.updateTexture.call(webgl, gl, this);
        } else {
          if (this._fill && this._fill._update) {
            this._fill._update();
          }
          if (this._stroke && this._stroke._update) {
            this._stroke._update();
          }
        }
        if (this._clip && !forcedParent || !this._renderer.texture) {
          return this;
        }
        if (programs.current !== program) {
          gl.useProgram(program);
          gl.bindBuffer(gl.ARRAY_BUFFER, programs.buffers.position);
          gl.vertexAttribPointer(program.position, 2, gl.FLOAT, false, 0, 0);
          gl.enableVertexAttribArray(program.position);
          gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
          if (!programs.resolution.flagged) {
            gl.uniform2f(gl.getUniformLocation(program, "u_resolution"), programs.resolution.width, programs.resolution.height);
          }
          programs.current = program;
        }
        if (programs.resolution.flagged) {
          gl.uniform2f(gl.getUniformLocation(program, "u_resolution"), programs.resolution.width, programs.resolution.height);
        }
        gl.bindTexture(gl.TEXTURE_2D, this._renderer.texture);
        const rect = this._renderer.rect;
        gl.uniformMatrix3fv(program.matrix, false, this._renderer.matrix);
        gl.uniform4f(program.rect, rect.left, rect.top, rect.right, rect.bottom);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        if (this._mask) {
          gl.disable(gl.STENCIL_TEST);
        }
        return this.flagReset();
      }
    },
    points: {
      updateCanvas: function(gl, elem) {
        let isOffset;
        const canvas3 = this.canvas;
        const ctx = this.ctx;
        const ratio = gl.renderer.ratio;
        const stroke = elem._stroke;
        const linewidth = elem._linewidth;
        const fill = elem._fill;
        const opacity = elem._renderer.opacity || elem._opacity;
        const dashes = elem.dashes;
        const size = elem._size * ratio;
        let dimension = size;
        if (!webgl.isHidden.test(stroke)) {
          dimension += linewidth;
        }
        canvas3.width = getPoT(dimension);
        canvas3.height = canvas3.width;
        const aspect = dimension / canvas3.width;
        const cx = canvas3.width / 2;
        const cy = canvas3.height / 2;
        ctx.clearRect(0, 0, canvas3.width, canvas3.height);
        if (fill) {
          if (typeof fill === "string") {
            ctx.fillStyle = fill;
          } else {
            webgl[fill._renderer.type].render.call(fill, ctx, elem);
            ctx.fillStyle = fill._renderer.effect;
          }
        }
        if (stroke) {
          if (typeof stroke === "string") {
            ctx.strokeStyle = stroke;
          } else {
            webgl[stroke._renderer.type].render.call(stroke, ctx, elem);
            ctx.strokeStyle = stroke._renderer.effect;
          }
          if (linewidth) {
            ctx.lineWidth = linewidth / aspect;
          }
        }
        if (typeof opacity === "number") {
          ctx.globalAlpha = opacity;
        }
        if (dashes && dashes.length > 0) {
          ctx.lineDashOffset = dashes.offset || 0;
          ctx.setLineDash(dashes);
        }
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(webgl.precision, webgl.precision);
        ctx.beginPath();
        ctx.arc(0, 0, size / aspect * 0.5, 0, TWO_PI);
        ctx.restore();
        if (closed) {
          ctx.closePath();
        }
        if (!webgl.isHidden.test(fill)) {
          isOffset = fill._renderer && fill._renderer.offset;
          if (isOffset) {
            ctx.save();
            ctx.translate(-fill._renderer.offset.x, -fill._renderer.offset.y);
            ctx.scale(fill._renderer.scale.x, fill._renderer.scale.y);
          }
          ctx.fill();
          if (isOffset) {
            ctx.restore();
          }
        }
        if (!webgl.isHidden.test(stroke)) {
          isOffset = stroke._renderer && stroke._renderer.offset;
          if (isOffset) {
            ctx.save();
            ctx.translate(-stroke._renderer.offset.x, -stroke._renderer.offset.y);
            ctx.scale(stroke._renderer.scale.x, stroke._renderer.scale.y);
            ctx.lineWidth = linewidth / stroke._renderer.scale.x;
          }
          ctx.stroke();
          if (isOffset) {
            ctx.restore();
          }
        }
      },
      render: function(gl, programs, forcedParent) {
        if (!this._visible || !this._opacity) {
          return this;
        }
        this._update();
        let size = this._size;
        const parent = forcedParent || this.parent;
        const program = programs[this._renderer.type];
        const sizeAttenuation = this._sizeAttenuation;
        const stroke = this._stroke;
        const linewidth = this._linewidth;
        const flagParentMatrix = parent._matrix.manual || parent._flagMatrix;
        const flagMatrix = this._matrix.manual || this._flagMatrix;
        const parentChanged = this._renderer.parent !== parent;
        const commands = this._renderer.vertices;
        const length = this._renderer.collection.length;
        const flagVertices = this._flagVertices;
        const flagTexture = this._flagFill || this._fill instanceof LinearGradient && (this._fill._flagSpread || this._fill._flagStops || this._fill._flagEndPoints) || this._fill instanceof RadialGradient && (this._fill._flagSpread || this._fill._flagStops || this._fill._flagRadius || this._fill._flagCenter || this._fill._flagFocal) || this._fill instanceof Texture && (this._fill._flagLoaded && this._fill.loaded || this._fill._flagImage || this._fill._flagVideo || this._fill._flagRepeat || this._fill._flagOffset || this._fill._flagScale) || this._stroke instanceof LinearGradient && (this._stroke._flagSpread || this._stroke._flagStops || this._stroke._flagEndPoints) || this._stroke instanceof RadialGradient && (this._stroke._flagSpread || this._stroke._flagStops || this._stroke._flagRadius || this._stroke._flagCenter || this._stroke._flagFocal) || this._stroke instanceof Texture && (this._stroke._flagLoaded && this._stroke.loaded || this._stroke._flagImage || this._stroke._flagVideo || this._stroke._flagRepeat || this._stroke._flagOffset || this._fill._flagScale) || this._flagStroke || this._flagLinewidth || this._flagOpacity || parent._flagOpacity || this._flagVisible || this._flagScale || this.dashes && this.dashes.length > 0 || !this._renderer.texture;
        if (flagParentMatrix || flagMatrix || parentChanged) {
          if (!this._renderer.matrix) {
            this._renderer.matrix = new NumArray(9);
          }
          this._matrix.toTransformArray(true, transformation);
          multiplyMatrix(transformation, parent._renderer.matrix, this._renderer.matrix);
          if (!(this._renderer.scale instanceof Vector)) {
            this._renderer.scale = new Vector;
          }
          if (this._scale instanceof Vector) {
            this._renderer.scale.x = this._scale.x * parent._renderer.scale.x;
            this._renderer.scale.y = this._scale.y * parent._renderer.scale.y;
          } else {
            this._renderer.scale.x = this._scale * parent._renderer.scale.x;
            this._renderer.scale.y = this._scale * parent._renderer.scale.y;
          }
          if (parentChanged) {
            this._renderer.parent = parent;
          }
        }
        if (flagVertices) {
          const positionBuffer = this._renderer.positionBuffer;
          if (positionBuffer) {
            gl.deleteBuffer(positionBuffer);
          }
          this._renderer.positionBuffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, this._renderer.positionBuffer);
          gl.vertexAttribPointer(program.position, 2, gl.FLOAT, false, 0, 0);
          gl.enableVertexAttribArray(program.position);
          gl.bufferData(gl.ARRAY_BUFFER, commands, gl.STATIC_DRAW);
        }
        if (flagTexture) {
          this._renderer.opacity = this._opacity * parent._renderer.opacity;
          webgl.updateTexture.call(webgl, gl, this);
        } else {
          if (this._fill && this._fill._update) {
            this._fill._update();
          }
          if (this._stroke && this._stroke._update) {
            this._stroke._update();
          }
        }
        if (this._clip && !forcedParent || !this._renderer.texture) {
          return this;
        }
        if (!webgl.isHidden.test(stroke)) {
          size += linewidth;
        }
        size /= webgl.precision;
        if (sizeAttenuation) {
          size *= Math.max(this._renderer.scale.x, this._renderer.scale.y);
        }
        if (programs.current !== program) {
          gl.useProgram(program);
          if (!programs.resolution.flagged) {
            gl.uniform2f(gl.getUniformLocation(program, "u_resolution"), programs.resolution.width, programs.resolution.height);
          }
          programs.current = program;
        }
        if (programs.resolution.flagged) {
          gl.uniform2f(gl.getUniformLocation(program, "u_resolution"), programs.resolution.width, programs.resolution.height);
        }
        gl.bindTexture(gl.TEXTURE_2D, this._renderer.texture);
        gl.uniformMatrix3fv(program.matrix, false, this._renderer.matrix);
        gl.uniform1f(program.size, size * programs.resolution.ratio);
        gl.drawArrays(gl.POINTS, 0, length);
        return this.flagReset();
      }
    },
    text: {
      updateCanvas: function(gl, elem) {
        const canvas3 = this.canvas;
        const ctx = this.ctx;
        const ratio = gl.renderer.ratio;
        const scale = vector2.copy(elem._renderer.scale).multiply(ratio);
        const stroke = elem._stroke;
        const linewidth = elem._linewidth;
        const fill = elem._fill;
        const opacity = elem._renderer.opacity || elem._opacity;
        const dashes = elem.dashes;
        const decoration = elem._decoration;
        const direction = elem._direction;
        canvas3.width = Math.max(Math.ceil(elem._renderer.rect.width * scale.x), 1);
        canvas3.height = Math.max(Math.ceil(elem._renderer.rect.height * scale.y), 1);
        const centroid = elem._renderer.rect.centroid;
        const cx = centroid.x;
        const cy = centroid.y;
        let a, b, c, d, e, sx, sy, x1, y1, x2, y2;
        const isOffset = fill._renderer && fill._renderer.offset && stroke._renderer && stroke._renderer.offset;
        ctx.clearRect(0, 0, canvas3.width, canvas3.height);
        if (!isOffset) {
          ctx.font = [elem._style, elem._weight, elem._size + "px/" + elem._leading + "px", elem._family].join(" ");
        }
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.textDirection = direction;
        if (fill) {
          if (typeof fill === "string") {
            ctx.fillStyle = fill;
          } else {
            webgl[fill._renderer.type].render.call(fill, ctx, elem);
            ctx.fillStyle = fill._renderer.effect;
          }
        }
        if (stroke) {
          if (typeof stroke === "string") {
            ctx.strokeStyle = stroke;
          } else {
            webgl[stroke._renderer.type].render.call(stroke, ctx, elem);
            ctx.strokeStyle = stroke._renderer.effect;
          }
          if (linewidth) {
            ctx.lineWidth = linewidth;
          }
        }
        if (typeof opacity === "number") {
          ctx.globalAlpha = opacity;
        }
        if (dashes && dashes.length > 0) {
          ctx.lineDashOffset = dashes.offset || 0;
          ctx.setLineDash(dashes);
        }
        ctx.save();
        ctx.scale(scale.x, scale.y);
        ctx.translate(cx, cy);
        if (!webgl.isHidden.test(fill)) {
          if (fill._renderer && fill._renderer.offset) {
            sx = fill._renderer.scale.x;
            sy = fill._renderer.scale.y;
            ctx.save();
            ctx.translate(-fill._renderer.offset.x, -fill._renderer.offset.y);
            ctx.scale(sx, sy);
            a = elem._size / fill._renderer.scale.y;
            b = elem._leading / fill._renderer.scale.y;
            ctx.font = [
              elem._style,
              elem._weight,
              a + "px/",
              b + "px",
              elem._family
            ].join(" ");
            c = fill._renderer.offset.x / fill._renderer.scale.x;
            d = fill._renderer.offset.y / fill._renderer.scale.y;
            ctx.fillText(elem.value, c, d);
            ctx.restore();
          } else {
            ctx.fillText(elem.value, 0, 0);
          }
        }
        if (!webgl.isHidden.test(stroke)) {
          if (stroke._renderer && stroke._renderer.offset) {
            sx = stroke._renderer.scale.x;
            sy = stroke._renderer.scale.y;
            ctx.save();
            ctx.translate(-stroke._renderer.offset.x, -stroke._renderer.offset.y);
            ctx.scale(sx, sy);
            a = elem._size / stroke._renderer.scale.y;
            b = elem._leading / stroke._renderer.scale.y;
            ctx.font = [
              elem._style,
              elem._weight,
              a + "px/",
              b + "px",
              elem._family
            ].join(" ");
            c = stroke._renderer.offset.x / stroke._renderer.scale.x;
            d = stroke._renderer.offset.y / stroke._renderer.scale.y;
            e = linewidth / stroke._renderer.scale.x;
            ctx.lineWidth = e;
            ctx.strokeText(elem.value, c, d);
            ctx.restore();
          } else {
            ctx.strokeText(elem.value, 0, 0);
          }
        }
        if (/(underline|strikethrough)/i.test(decoration)) {
          const metrics = ctx.measureText(elem.value);
          switch (decoration) {
            case "underline":
              y1 = metrics.actualBoundingBoxDescent;
              y2 = metrics.actualBoundingBoxDescent;
              break;
            case "strikethrough":
              y1 = 0;
              y2 = 0;
              break;
          }
          x1 = -metrics.width / 2;
          x2 = metrics.width / 2;
          ctx.lineWidth = Math.max(Math.floor(elem._size / 15), 1);
          ctx.strokeStyle = ctx.fillStyle;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
        ctx.restore();
      },
      getBoundingClientRect: function(elem, rect) {
        const ctx = webgl.ctx;
        ctx.font = [elem._style, elem._weight, elem._size + "px/" + elem._leading + "px", elem._family].join(" ");
        ctx.textAlign = "center";
        ctx.textBaseline = Renderer.Utils.baselines[elem._baseline] || elem._baseline;
        const metrics = ctx.measureText(elem._value);
        let width = metrics.width;
        let height = 1.15 * (metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent);
        if (this._linewidth && !webgl.isHidden.test(this._stroke)) {
          width += this._linewidth * 2;
          height += this._linewidth * 2;
        }
        const w = width / 2;
        const h = height / 2;
        switch (webgl.alignments[elem._alignment] || elem._alignment) {
          case webgl.alignments.left:
            if (elem.direction === "ltr") {
              rect.left = 0;
              rect.right = width;
            } else {
              rect.left = -width;
              rect.right = 0;
            }
            break;
          case webgl.alignments.right:
            if (elem.direction === "ltr") {
              rect.left = -width;
              rect.right = 0;
            } else {
              rect.left = 0;
              rect.right = width;
            }
            break;
          default:
            rect.left = -w;
            rect.right = w;
        }
        switch (elem._baseline) {
          case "bottom":
            rect.top = -height;
            rect.bottom = 0;
            break;
          case "top":
            rect.top = 0;
            rect.bottom = height;
            break;
          case "baseline":
            rect.top = -h * 1.5;
            rect.bottom = h * 0.5;
            break;
          default:
            rect.top = -h;
            rect.bottom = h;
        }
        rect.width = width;
        rect.height = height;
        if (!rect.centroid) {
          rect.centroid = {};
        }
        rect.centroid.x = w;
        rect.centroid.y = h;
      },
      render: function(gl, programs, forcedParent) {
        if (!this._visible || !this._opacity) {
          return this;
        }
        this._update();
        const parent = forcedParent || this.parent;
        const program = programs[this._renderer.type];
        const flagParentMatrix = parent._matrix.manual || parent._flagMatrix;
        const flagMatrix = this._matrix.manual || this._flagMatrix;
        const parentChanged = this._renderer.parent !== parent;
        const flagTexture = this._flagVertices || this._flagFill || this._fill instanceof LinearGradient && (this._fill._flagSpread || this._fill._flagStops || this._fill._flagEndPoints) || this._fill instanceof RadialGradient && (this._fill._flagSpread || this._fill._flagStops || this._fill._flagRadius || this._fill._flagCenter || this._fill._flagFocal) || this._fill instanceof Texture && (this._fill._flagLoaded && this._fill.loaded || this._fill._flagImage || this._fill._flagVideo || this._fill._flagRepeat || this._fill._flagOffset || this._fill._flagScale) || this._stroke instanceof LinearGradient && (this._stroke._flagSpread || this._stroke._flagStops || this._stroke._flagEndPoints) || this._stroke instanceof RadialGradient && (this._stroke._flagSpread || this._stroke._flagStops || this._stroke._flagRadius || this._stroke._flagCenter || this._stroke._flagFocal) || this._stroke instanceof Texture && (this._stroke._flagLoaded && this._stroke.loaded || this._stroke._flagImage || this._stroke._flagVideo || this._stroke._flagRepeat || this._stroke._flagOffset || this._fill._flagScale) || this._flagStroke || this._flagLinewidth || this._flagOpacity || parent._flagOpacity || this._flagVisible || this._flagScale || this._flagValue || this._flagFamily || this._flagSize || this._flagLeading || this._flagAlignment || this._flagBaseline || this._flagStyle || this._flagWeight || this._flagDecoration || this.dashes && this.dashes.length > 0 || !this._renderer.texture;
        if (flagParentMatrix || flagMatrix || parentChanged) {
          if (!this._renderer.matrix) {
            this._renderer.matrix = new NumArray(9);
          }
          this._matrix.toTransformArray(true, transformation);
          multiplyMatrix(transformation, parent._renderer.matrix, this._renderer.matrix);
          if (!(this._renderer.scale instanceof Vector)) {
            this._renderer.scale = new Vector;
          }
          if (this._scale instanceof Vector) {
            this._renderer.scale.x = this._scale.x * parent._renderer.scale.x;
            this._renderer.scale.y = this._scale.y * parent._renderer.scale.y;
          } else {
            this._renderer.scale.x = this._scale * parent._renderer.scale.x;
            this._renderer.scale.y = this._scale * parent._renderer.scale.y;
          }
          if (parentChanged) {
            this._renderer.parent = parent;
          }
        }
        if (this._mask) {
          gl.clear(gl.STENCIL_BUFFER_BIT);
          gl.enable(gl.STENCIL_TEST);
          gl.stencilFunc(gl.ALWAYS, 1, 0);
          gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);
          gl.colorMask(false, false, false, false);
          webgl[this._mask._renderer.type].render.call(this._mask, gl, programs, this);
          gl.stencilFunc(gl.EQUAL, 1, 255);
          gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
          gl.colorMask(true, true, true, true);
        }
        if (flagTexture) {
          if (!this._renderer.rect) {
            this._renderer.rect = {};
          }
          this._renderer.opacity = this._opacity * parent._renderer.opacity;
          webgl.text.getBoundingClientRect(this, this._renderer.rect);
          webgl.updateTexture.call(webgl, gl, this);
        } else {
          if (this._fill && this._fill._update) {
            this._fill._update();
          }
          if (this._stroke && this._stroke._update) {
            this._stroke._update();
          }
        }
        if (this._clip && !forcedParent || !this._renderer.texture) {
          return this;
        }
        if (programs.current !== program) {
          gl.useProgram(program);
          gl.bindBuffer(gl.ARRAY_BUFFER, programs.buffers.position);
          gl.vertexAttribPointer(program.position, 2, gl.FLOAT, false, 0, 0);
          gl.enableVertexAttribArray(program.position);
          gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
          if (!programs.resolution.flagged) {
            gl.uniform2f(gl.getUniformLocation(program, "u_resolution"), programs.resolution.width, programs.resolution.height);
          }
          programs.current = program;
        }
        if (programs.resolution.flagged) {
          gl.uniform2f(gl.getUniformLocation(program, "u_resolution"), programs.resolution.width, programs.resolution.height);
        }
        gl.bindTexture(gl.TEXTURE_2D, this._renderer.texture);
        const rect = this._renderer.rect;
        gl.uniformMatrix3fv(program.matrix, false, this._renderer.matrix);
        gl.uniform4f(program.rect, rect.left, rect.top, rect.right, rect.bottom);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        if (this._mask) {
          gl.disable(gl.STENCIL_TEST);
        }
        return this.flagReset();
      }
    },
    "linear-gradient": {
      render: function(ctx, parent) {
        if (!ctx.canvas.getContext("2d") || !parent) {
          return;
        }
        this._update();
        if (!this._renderer.effect || this._flagEndPoints || this._flagStops || this._flagUnits) {
          let rect;
          let lx = this.left._x;
          let ly = this.left._y;
          let rx = this.right._x;
          let ry = this.right._y;
          if (/objectBoundingBox/i.test(this._units)) {
            rect = parent.getBoundingClientRect(true);
            lx = (lx - 0.5) * rect.width;
            ly = (ly - 0.5) * rect.height;
            rx = (rx - 0.5) * rect.width;
            ry = (ry - 0.5) * rect.height;
          }
          this._renderer.effect = ctx.createLinearGradient(lx, ly, rx, ry);
          for (let i = 0;i < this.stops.length; i++) {
            const stop = this.stops[i];
            this._renderer.effect.addColorStop(stop._offset, stop._color);
          }
        }
        return this.flagReset();
      }
    },
    "radial-gradient": {
      render: function(ctx, parent) {
        if (!ctx.canvas.getContext("2d") || !parent) {
          return;
        }
        this._update();
        if (!this._renderer.effect || this._flagCenter || this._flagFocal || this._flagRadius || this._flagStops || this._flagUnits) {
          let rect;
          let cx = this.center._x;
          let cy = this.center._y;
          let fx = this.focal._x;
          let fy = this.focal._y;
          let radius = this._radius;
          if (/objectBoundingBox/i.test(this._units)) {
            rect = parent.getBoundingClientRect(true);
            cx = cx * rect.width * 0.5;
            cy = cy * rect.height * 0.5;
            fx = fx * rect.width * 0.5;
            fy = fy * rect.height * 0.5;
            radius *= Math.min(rect.width, rect.height) * 0.5;
          }
          this._renderer.effect = ctx.createRadialGradient(cx, cy, 0, fx, fy, radius);
          for (let i = 0;i < this.stops.length; i++) {
            const stop = this.stops[i];
            this._renderer.effect.addColorStop(stop._offset, stop._color);
          }
        }
        return this.flagReset();
      }
    },
    texture: {
      render: function(ctx, elem) {
        if (!ctx.canvas.getContext("2d")) {
          return;
        }
        this._update();
        const image = this.image;
        if ((this._flagLoaded || this._flagImage || this._flagVideo || this._flagRepeat) && this.loaded) {
          this._renderer.effect = ctx.createPattern(image, this._repeat);
        } else if (!this._renderer.effect) {
          return this.flagReset();
        }
        if (this._flagOffset || this._flagLoaded || this._flagScale) {
          if (!(this._renderer.offset instanceof Vector)) {
            this._renderer.offset = new Vector;
          }
          this._renderer.offset.x = -this._offset.x;
          this._renderer.offset.y = -this._offset.y;
          if (image) {
            this._renderer.offset.x += image.width / 2;
            this._renderer.offset.y += image.height / 2;
            if (this._scale instanceof Vector) {
              this._renderer.offset.x *= this._scale.x;
              this._renderer.offset.y *= this._scale.y;
            } else {
              this._renderer.offset.x *= this._scale;
              this._renderer.offset.y *= this._scale;
            }
          }
        }
        if (this._flagScale || this._flagLoaded) {
          if (!(this._renderer.scale instanceof Vector)) {
            this._renderer.scale = new Vector;
          }
          if (this._scale instanceof Vector) {
            this._renderer.scale.copy(this._scale);
          } else {
            this._renderer.scale.set(this._scale, this._scale);
          }
        }
        return this.flagReset();
      }
    },
    updateTexture: function(gl, elem) {
      this[elem._renderer.type].updateCanvas.call(webgl, gl, elem);
      if (this.canvas.width <= 0 || this.canvas.height <= 0) {
        if (elem._renderer.texture) {
          gl.deleteTexture(elem._renderer.texture);
        }
        delete elem._renderer.texture;
        return;
      }
      if (!elem._renderer.texture) {
        elem._renderer.texture = gl.createTexture();
      }
      gl.bindTexture(gl.TEXTURE_2D, elem._renderer.texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.canvas);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    },
    program: {
      create: function(gl, shaders2) {
        let program, linked, error;
        program = gl.createProgram();
        _.each(shaders2, function(s) {
          gl.attachShader(program, s);
        });
        gl.linkProgram(program);
        linked = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (!linked) {
          error = gl.getProgramInfoLog(program);
          gl.deleteProgram(program);
          throw new TwoError("unable to link program: " + error);
        }
        return program;
      }
    },
    extensions: {
      init: function(gl) {
        const extensions = {};
        const names = [
          "EXT_texture_filter_anisotropic",
          "WEBGL_compressed_texture_s3tc",
          "OES_texture_float_linear",
          "WEBGL_multisampled_render_to_texture"
        ];
        for (let i = 0;i < names.length; i++) {
          const name = names[i];
          extensions[name] = webgl.extensions.get(gl, name);
        }
        return extensions;
      },
      get: function(gl, name) {
        return gl.getExtension(name) || gl.getExtension(`MOZ_${name}`) || gl.getExtension(`WEBKIT_${name}`);
      }
    },
    TextureRegistry: new Registry
  };
  webgl.ctx = webgl.canvas.getContext("2d");
  Renderer3 = class extends Events {
    constructor(params) {
      super();
      let gl, program, vs, fs;
      this.domElement = params.domElement || document.createElement("canvas");
      if (typeof params.offscreenElement !== "undefined") {
        webgl.canvas = params.offscreenElement;
        webgl.ctx = webgl.canvas.getContext("2d");
      }
      this.scene = new Group;
      this.scene.parent = this;
      this._renderer = {
        type: "renderer",
        matrix: new NumArray(identity),
        scale: 1,
        opacity: 1
      };
      this._flagMatrix = true;
      params = _.defaults(params || {}, {
        antialias: false,
        alpha: true,
        premultipliedAlpha: true,
        stencil: true,
        preserveDrawingBuffer: true,
        overdraw: false
      });
      this.overdraw = params.overdraw;
      gl = this.ctx = this.domElement.getContext("webgl", params) || this.domElement.getContext("experimental-webgl", params);
      if (!this.ctx) {
        throw new TwoError("unable to create a webgl context. Try using another renderer.");
      }
      vs = shaders.create(gl, shaders.path.vertex, shaders.types.vertex);
      fs = shaders.create(gl, shaders.path.fragment, shaders.types.fragment);
      this.programs = {
        current: null,
        buffers: {
          position: gl.createBuffer()
        },
        resolution: {
          width: 0,
          height: 0,
          ratio: 1,
          flagged: false
        }
      };
      program = this.programs.path = webgl.program.create(gl, [vs, fs]);
      this.programs.text = this.programs.path;
      gl.extensions = webgl.extensions.init(gl);
      gl.renderer = this;
      program.position = gl.getAttribLocation(program, "a_position");
      program.matrix = gl.getUniformLocation(program, "u_matrix");
      program.rect = gl.getUniformLocation(program, "u_rect");
      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(program.position, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(program.position);
      gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
      vs = shaders.create(gl, shaders.points.vertex, shaders.types.vertex);
      fs = shaders.create(gl, shaders.points.fragment, shaders.types.fragment);
      program = this.programs.points = webgl.program.create(gl, [vs, fs]);
      program.position = gl.getAttribLocation(program, "a_position");
      program.matrix = gl.getUniformLocation(program, "u_matrix");
      program.size = gl.getUniformLocation(program, "u_size");
      gl.enable(gl.BLEND);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
      gl.blendEquation(gl.FUNC_ADD);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    }
    setSize(width, height, ratio) {
      let w, h;
      const ctx = this.ctx;
      this.width = width;
      this.height = height;
      this.ratio = typeof ratio === "undefined" ? getRatio(ctx) : ratio;
      this.domElement.width = width * this.ratio;
      this.domElement.height = height * this.ratio;
      if (_.isObject(this.domElement.style)) {
        _.extend(this.domElement.style, {
          width: width + "px",
          height: height + "px"
        });
      }
      this._renderer.matrix[0] = this._renderer.matrix[4] = this._renderer.scale = this.ratio;
      this._flagMatrix = true;
      w = width * this.ratio;
      h = height * this.ratio;
      ctx.viewport(0, 0, w, h);
      this.programs.resolution.width = w;
      this.programs.resolution.height = h;
      this.programs.resolution.ratio = this.ratio;
      this.programs.resolution.flagged = true;
      return this.trigger(Events.Types.resize, width, height, ratio);
    }
    render() {
      const gl = this.ctx;
      if (!this.overdraw) {
        gl.clear(gl.COLOR_BUFFER_BIT);
      }
      webgl.group.render.call(this.scene, gl, this.programs);
      this._flagMatrix = false;
      this.programs.resolution.flagged = true;
      return this;
    }
  };
  __publicField(Renderer3, "Utils", webgl);
  Utils = _.extend({
    Error: TwoError,
    getRatio,
    read,
    xhr
  }, _, CanvasShim, curves_exports, math_exports);
  _Two = class {
    constructor(options) {
      __publicField(this, "_events", new Events);
      __publicField(this, "type", "");
      __publicField(this, "renderer", null);
      __publicField(this, "scene", null);
      __publicField(this, "width", 0);
      __publicField(this, "height", 0);
      __publicField(this, "frameCount", 0);
      __publicField(this, "timeDelta", 0);
      __publicField(this, "playing", false);
      const params = _.defaults(options || {}, {
        fullscreen: false,
        fitted: false,
        width: 640,
        height: 480,
        type: _Two.Types.svg,
        autostart: false
      });
      _.each(params, function(v, k) {
        if (/fullscreen/i.test(k) || /autostart/i.test(k)) {
          return;
        }
        this[k] = v;
      }, this);
      if (_.isElement(params.domElement)) {
        const tagName = params.domElement.tagName.toLowerCase();
        if (!/^(CanvasRenderer-canvas|WebGLRenderer-canvas|SVGRenderer-svg)$/.test(this.type + "-" + tagName)) {
          this.type = _Two.Types[tagName];
        }
      }
      this.renderer = new _Two[this.type](this);
      this.setPlaying(params.autostart);
      this.frameCount = 0;
      if (params.fullscreen) {
        this.fit = fitToWindow.bind(this);
        this.fit.domElement = window;
        this.fit.attached = true;
        _.extend(document.body.style, {
          overflow: "hidden",
          margin: 0,
          padding: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: "fixed"
        });
        _.extend(this.renderer.domElement.style, {
          display: "block",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: "fixed"
        });
        dom.bind(this.fit.domElement, "resize", this.fit);
        this.fit();
      } else if (params.fitted) {
        this.fit = fitToParent.bind(this);
        _.extend(this.renderer.domElement.style, {
          display: "block"
        });
      } else if (!_.isElement(params.domElement)) {
        this.renderer.setSize(params.width, params.height, this.ratio);
        this.width = params.width;
        this.height = params.height;
      }
      this.renderer.bind(Events.Types.resize, updateDimensions.bind(this));
      this.scene = this.renderer.scene;
      _Two.Instances.push(this);
      if (params.autostart) {
        raf.init();
      }
    }
    get _bound() {
      return this._events._bound;
    }
    set _bound(v) {
      this._events._bound = v;
    }
    addEventListener() {
      return this._events.addEventListener.apply(this, arguments);
    }
    on() {
      return this._events.addEventListener.apply(this, arguments);
    }
    bind() {
      return this._events.addEventListener.apply(this, arguments);
    }
    removeEventListener() {
      return this._events.removeEventListener.apply(this, arguments);
    }
    off() {
      return this._events.removeEventListener.apply(this, arguments);
    }
    unbind() {
      return this._events.removeEventListener.apply(this, arguments);
    }
    dispatchEvent() {
      return this._events.dispatchEvent.apply(this, arguments);
    }
    trigger() {
      return this._events.dispatchEvent.apply(this, arguments);
    }
    listen() {
      return this._events.listen.apply(this, arguments);
    }
    ignore() {
      return this._events.ignore.apply(this, arguments);
    }
    appendTo(elem) {
      elem.appendChild(this.renderer.domElement);
      if (this.fit) {
        if (this.fit.domElement !== window) {
          this.fit.domElement = elem;
          this.fit.attached = false;
        }
        this.update();
      }
      return this;
    }
    play() {
      this.playing = true;
      raf.init();
      return this.trigger(Events.Types.play);
    }
    pause() {
      this.playing = false;
      return this.trigger(Events.Types.pause);
    }
    setPlaying(p) {
      this.playing = p;
    }
    release(obj) {
      let i, v, child;
      if (!_.isObject(obj)) {
        return this.release(this.scene);
      }
      if (typeof obj.unbind === "function") {
        obj.unbind();
      }
      if (obj.vertices) {
        if (typeof obj.vertices.unbind === "function") {
          obj.vertices.unbind();
        }
        for (i = 0;i < obj.vertices.length; i++) {
          v = obj.vertices[i];
          if (typeof v.unbind === "function") {
            v.unbind();
          }
          if (v.controls) {
            if (v.controls.left && typeof v.controls.left.unbind === "function") {
              v.controls.left.unbind();
            }
            if (v.controls.right && typeof v.controls.right.unbind === "function") {
              v.controls.right.unbind();
            }
          }
        }
      }
      if (obj.children) {
        for (i = 0;i < obj.children.length; i++) {
          child = obj.children[i];
          this.release(child);
        }
        if (typeof obj.children.unbind === "function") {
          obj.children.unbind();
        }
      }
      return obj;
    }
    update() {
      const animated = !!this._lastFrame;
      const now = _.performance.now();
      if (animated) {
        this.timeDelta = parseFloat((now - this._lastFrame).toFixed(3));
      }
      this._lastFrame = now;
      if (this.fit && this.fit.domElement && !this.fit.attached) {
        dom.bind(this.fit.domElement, "resize", this.fit);
        this.fit.attached = true;
        this.fit();
      }
      const width = this.width;
      const height = this.height;
      const renderer = this.renderer;
      if (width !== renderer.width || height !== renderer.height) {
        renderer.setSize(width, height, this.ratio);
      }
      this.trigger(Events.Types.update, this.frameCount, this.timeDelta);
      return this.render();
    }
    render() {
      this.renderer.render();
      return this.trigger(Events.Types.render, this.frameCount++);
    }
    add(objects) {
      if (!(objects instanceof Array)) {
        objects = Array.prototype.slice.call(arguments);
      }
      this.scene.add(objects);
      return this;
    }
    remove(objects) {
      if (!(objects instanceof Array)) {
        objects = Array.prototype.slice.call(arguments);
      }
      this.scene.remove(objects);
      return this;
    }
    clear() {
      this.scene.remove(this.scene.children);
      return this;
    }
    makeLine(x1, y1, x2, y2) {
      const line = new Line(x1, y1, x2, y2);
      this.scene.add(line);
      return line;
    }
    makeArrow(x1, y1, x2, y2, size) {
      const headlen = typeof size === "number" ? size : 10;
      const angle = Math.atan2(y2 - y1, x2 - x1);
      const vertices = [
        new Anchor(x1, y1, undefined, undefined, undefined, undefined, Commands.move),
        new Anchor(x2, y2, undefined, undefined, undefined, undefined, Commands.line),
        new Anchor(x2 - headlen * Math.cos(angle - Math.PI / 4), y2 - headlen * Math.sin(angle - Math.PI / 4), undefined, undefined, undefined, undefined, Commands.line),
        new Anchor(x2, y2, undefined, undefined, undefined, undefined, Commands.move),
        new Anchor(x2 - headlen * Math.cos(angle + Math.PI / 4), y2 - headlen * Math.sin(angle + Math.PI / 4), undefined, undefined, undefined, undefined, Commands.line)
      ];
      const path = new Path(vertices, false, false, true);
      path.noFill();
      path.cap = "round";
      path.join = "round";
      this.scene.add(path);
      return path;
    }
    makeRectangle(x, y, width, height) {
      const rect = new Rectangle(x, y, width, height);
      this.scene.add(rect);
      return rect;
    }
    makeRoundedRectangle(x, y, width, height, sides) {
      const rect = new RoundedRectangle(x, y, width, height, sides);
      this.scene.add(rect);
      return rect;
    }
    makeCircle(x, y, radius, resolution) {
      const circle = new Circle(x, y, radius, resolution);
      this.scene.add(circle);
      return circle;
    }
    makeEllipse(x, y, rx, ry, resolution) {
      const ellipse = new Ellipse(x, y, rx, ry, resolution);
      this.scene.add(ellipse);
      return ellipse;
    }
    makeStar(x, y, outerRadius, innerRadius, sides) {
      const star = new Star(x, y, outerRadius, innerRadius, sides);
      this.scene.add(star);
      return star;
    }
    makeCurve(points) {
      const l = arguments.length;
      if (!Array.isArray(points)) {
        points = [];
        for (let i = 0;i < l; i += 2) {
          const x = arguments[i];
          if (typeof x !== "number") {
            break;
          }
          const y = arguments[i + 1];
          points.push(new Anchor(x, y));
        }
      }
      const last = arguments[l - 1];
      const curve = new Path(points, !(typeof last === "boolean" ? last : undefined), true);
      const rect = curve.getBoundingClientRect();
      curve.center().translation.set(rect.left + rect.width / 2, rect.top + rect.height / 2);
      this.scene.add(curve);
      return curve;
    }
    makePolygon(x, y, radius, sides) {
      const poly = new Polygon(x, y, radius, sides);
      this.scene.add(poly);
      return poly;
    }
    makeArcSegment(x, y, innerRadius, outerRadius, startAngle, endAngle, resolution) {
      const arcSegment = new ArcSegment(x, y, innerRadius, outerRadius, startAngle, endAngle, resolution);
      this.scene.add(arcSegment);
      return arcSegment;
    }
    makePoints(p) {
      const l = arguments.length;
      let vertices = p;
      if (!Array.isArray(p)) {
        vertices = [];
        for (let i = 0;i < l; i += 2) {
          const x = arguments[i];
          if (typeof x !== "number") {
            break;
          }
          const y = arguments[i + 1];
          vertices.push(new Vector(x, y));
        }
      }
      const points = new Points(vertices);
      this.scene.add(points);
      return points;
    }
    makePath(p) {
      const l = arguments.length;
      let points = p;
      if (!Array.isArray(p)) {
        points = [];
        for (let i = 0;i < l; i += 2) {
          const x = arguments[i];
          if (typeof x !== "number") {
            break;
          }
          const y = arguments[i + 1];
          points.push(new Anchor(x, y));
        }
      }
      const last = arguments[l - 1];
      const path = new Path(points, !(typeof last === "boolean" ? last : undefined));
      const rect = path.getBoundingClientRect();
      if (typeof rect.top === "number" && typeof rect.left === "number" && typeof rect.right === "number" && typeof rect.bottom === "number") {
        path.center().translation.set(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }
      this.scene.add(path);
      return path;
    }
    makeText(message, x, y, styles) {
      const text = new Text(message, x, y, styles);
      this.add(text);
      return text;
    }
    makeLinearGradient(x1, y1, x2, y2) {
      const stops = Array.prototype.slice.call(arguments, 4);
      const gradient = new LinearGradient(x1, y1, x2, y2, stops);
      this.add(gradient);
      return gradient;
    }
    makeRadialGradient(x1, y1, radius) {
      const stops = Array.prototype.slice.call(arguments, 3);
      const gradient = new RadialGradient(x1, y1, radius, stops);
      this.add(gradient);
      return gradient;
    }
    makeSprite(pathOrTexture, x, y, columns, rows, frameRate, autostart) {
      const sprite = new Sprite(pathOrTexture, x, y, columns, rows, frameRate);
      if (autostart) {
        sprite.play();
      }
      this.add(sprite);
      return sprite;
    }
    makeImageSequence(pathsOrTextures, x, y, frameRate, autostart) {
      const imageSequence = new ImageSequence(pathsOrTextures, x, y, frameRate);
      if (autostart) {
        imageSequence.play();
      }
      this.add(imageSequence);
      return imageSequence;
    }
    makeTexture(pathOrSource, callback) {
      const texture = new Texture(pathOrSource, callback);
      return texture;
    }
    makeGroup(objects) {
      if (!(objects instanceof Array)) {
        objects = Array.prototype.slice.call(arguments);
      }
      const group = new Group;
      this.scene.add(group);
      group.add(objects);
      return group;
    }
    interpret(svg2, shallow, add) {
      const tag = svg2.tagName.toLowerCase();
      add = typeof add !== "undefined" ? add : true;
      if (!(tag in read)) {
        return null;
      }
      const node = read[tag].call(this, svg2);
      if (add) {
        this.add(shallow && node instanceof Group ? node.children : node);
      } else if (node.parent) {
        node.remove();
      }
      return node;
    }
    load(pathOrSVGContent, callback) {
      const group = new Group;
      let elem, i, child;
      const attach = function(data) {
        dom.temp.innerHTML = data;
        for (i = 0;i < dom.temp.children.length; i++) {
          elem = dom.temp.children[i];
          child = this.interpret(elem, false, false);
          if (child !== null) {
            group.add(child);
          }
        }
        if (typeof callback === "function") {
          const svg2 = dom.temp.children.length <= 1 ? dom.temp.children[0] : dom.temp.children;
          callback(group, svg2);
        }
      }.bind(this);
      if (/\.svg$/i.test(pathOrSVGContent)) {
        xhr(pathOrSVGContent, attach);
        return group;
      }
      attach(pathOrSVGContent);
      return group;
    }
  };
  Two = _Two;
  __publicField(Two, "nextFrameID", Constants.nextFrameID);
  __publicField(Two, "Types", Constants.Types);
  __publicField(Two, "Version", Constants.Version);
  __publicField(Two, "PublishDate", Constants.PublishDate);
  __publicField(Two, "Identifier", Constants.Identifier);
  __publicField(Two, "Resolution", Constants.Resolution);
  __publicField(Two, "AutoCalculateImportedMatrices", Constants.AutoCalculateImportedMatrices);
  __publicField(Two, "Instances", Constants.Instances);
  __publicField(Two, "uniqueId", Constants.uniqueId);
  __publicField(Two, "Anchor", Anchor);
  __publicField(Two, "Collection", Collection);
  __publicField(Two, "Events", Events);
  __publicField(Two, "Group", Group);
  __publicField(Two, "Matrix", Matrix2);
  __publicField(Two, "Path", Path);
  __publicField(Two, "Registry", Registry);
  __publicField(Two, "Shape", Shape);
  __publicField(Two, "Text", Text);
  __publicField(Two, "Vector", Vector);
  __publicField(Two, "Gradient", Gradient);
  __publicField(Two, "ImageSequence", ImageSequence);
  __publicField(Two, "LinearGradient", LinearGradient);
  __publicField(Two, "RadialGradient", RadialGradient);
  __publicField(Two, "Sprite", Sprite);
  __publicField(Two, "Stop", Stop);
  __publicField(Two, "Texture", Texture);
  __publicField(Two, "ArcSegment", ArcSegment);
  __publicField(Two, "Circle", Circle);
  __publicField(Two, "Ellipse", Ellipse);
  __publicField(Two, "Line", Line);
  __publicField(Two, "Points", Points);
  __publicField(Two, "Polygon", Polygon);
  __publicField(Two, "Rectangle", Rectangle);
  __publicField(Two, "RoundedRectangle", RoundedRectangle);
  __publicField(Two, "Star", Star);
  __publicField(Two, "CanvasRenderer", Renderer);
  __publicField(Two, "SVGRenderer", Renderer2);
  __publicField(Two, "WebGLRenderer", Renderer3);
  __publicField(Two, "Commands", Commands);
  __publicField(Two, "Utils", Utils);
  raf = dom.getRequestAnimationFrame();
  raf.init = function() {
    loop();
    raf.init = function() {
    };
  };
});

// src/canvas.ts
function onUpdate(fn) {
  updateListeners.push(fn);
}
var Matter, update, engine, runner, two, updateListeners, canvas_default;
var init_canvas = __esm(() => {
  Matter = __toESM(require_matter(), 1);
  init_two_module();
  update = function() {
    Matter.Engine.update(engine);
    updateListeners.forEach((fn) => fn());
  };
  engine = Matter.Engine.create({ gravity: { y: 0 } });
  runner = Matter.Runner.create();
  two = new Two({
    autostart: false,
    fullscreen: true
  });
  updateListeners = [];
  two.appendTo(document.body);
  two.bind("update", update);
  canvas_default = {
    init: () => {
      two.clear();
      two.play();
    }
  };
});

// src/looping.ts
var exports_looping = {};
__export(exports_looping, {
  start: () => {
    {
      return start;
    }
  }
});
function start() {
  const center = { x: two.width / 2, y: two.height / 2 };
  const loopsNum = 100;
  const loopRadius = Math.min(two.width, two.height) / 1.5;
  const loopResolution = 6;
  const maxAngleVariance = 0.3;
  const maxCenterVariance = 30;
  const maxRadiusVariance = 30;
  const curve = two.makeCurve([new Two.Anchor(two.width / 2, two.height / 2)], true);
  curve.stroke = "white";
  curve.noFill();
  function addPoint() {
    if (curve.vertices.length === loopsNum * loopResolution) {
      return;
    }
    const index = curve.vertices.length - 1;
    const loopIndex = Math.floor(index / loopResolution);
    console.log(loopIndex, index);
    const angle = index % loopResolution / loopResolution * Math.PI * 2 + getRandomVariance(maxAngleVariance);
    const radius = loopRadius + getRandomVariance(maxRadiusVariance);
    const x = center.x + getRandomVariance(maxCenterVariance) + radius * Math.cos(angle) * (two.width / two.height);
    const y = center.y + getRandomVariance(maxCenterVariance) + radius * Math.sin(angle);
    curve.vertices.splice(0, 0, new Two.Anchor(x - two.width / 2, y - two.height / 2));
  }
  onUpdate(() => {
    addPoint();
  });
}
var getRandomVariance;
var init_looping = __esm(() => {
  init_two_module();
  init_canvas();
  getRandomVariance = function(maxVariance) {
    return Math.random() * maxVariance * 2 - maxVariance;
  };
});

// src/index.ts
init_canvas();
async function selectView(view) {
  console.log("select", view);
  canvas_default.init();
  (await views[view]).start();
}
var views = {
  looping: Promise.resolve().then(() => (init_looping(), exports_looping))
};
var selectEl = document.getElementById("select");
Object.keys(views).forEach((view) => {
  const option = document.createElement("option");
  option.innerText = view;
  selectEl?.appendChild(option);
});
selectEl?.addEventListener("change", (event) => {
  selectView(event.target.value);
});
selectView("looping");

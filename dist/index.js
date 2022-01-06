"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ymdh = exports.betweenTime = exports.modifyDate = exports.setDateTime = exports.setTime = exports.setDate = exports.getDateTimeStr = exports.getTimeStr = exports.getDateStr = exports.getDateTimeArr = exports.getTimeArr = exports.getDateArr = exports.padN = exports.msToM = exports.mToMs = exports.sToM = exports.mToS = exports.sToMs = exports.msToS = void 0;
var msToS = function (ms) {
    return ms / 1000;
};
exports.msToS = msToS;
var sToMs = function (s) {
    return s * 1000;
};
exports.sToMs = sToMs;
var mToS = function (m) {
    return m * 60;
};
exports.mToS = mToS;
var sToM = function (s) {
    return s / 60;
};
exports.sToM = sToM;
var mToMs = function (m) {
    return (0, exports.sToMs)((0, exports.mToS)(m));
};
exports.mToMs = mToMs;
var msToM = function (ms) {
    return (0, exports.sToM)((0, exports.msToS)(ms));
};
exports.msToM = msToM;
var padN = function (n, count) {
    if (count === void 0) { count = 2; }
    return (n + "").padStart(count, "0");
};
exports.padN = padN;
var getDateArr = function (d) {
    if (d === void 0) { d = new Date(); }
    return [
        d.getFullYear(),
        d.getMonth() + 1,
        d.getDate(),
    ];
};
exports.getDateArr = getDateArr;
var getTimeArr = function (d) {
    if (d === void 0) { d = new Date(); }
    return [
        d.getHours(),
        d.getMinutes(),
        d.getSeconds(),
    ];
};
exports.getTimeArr = getTimeArr;
var getDateTimeArr = function (d) {
    if (d === void 0) { d = new Date(); }
    return [
        (0, exports.getDateArr)(d),
        (0, exports.getTimeArr)(d),
    ];
};
exports.getDateTimeArr = getDateTimeArr;
var getDateStr = function (d) {
    if (d === void 0) { d = new Date(); }
    return d instanceof Date
        ? (0, exports.getDateStr)((0, exports.getDateArr)(d))
        : d.map(function (x) { return (0, exports.padN)(x); }).join("-");
};
exports.getDateStr = getDateStr;
var getTimeStr = function (d) {
    if (d === void 0) { d = new Date(); }
    return d instanceof Date
        ? (0, exports.getTimeStr)((0, exports.getTimeArr)(d))
        : d.map(function (x) { return (0, exports.padN)(x); }).join("-");
};
exports.getTimeStr = getTimeStr;
var getDateTimeStr = function (d) {
    if (d === void 0) { d = new Date(); }
    return d instanceof Date
        ? (0, exports.getDateTimeStr)([(0, exports.getDateArr)(d), (0, exports.getTimeArr)(d)])
        : "".concat((0, exports.getDateStr)(d[0]), "-").concat((0, exports.getTimeStr)(d[1]));
};
exports.getDateTimeStr = getDateTimeStr;
var setDate = function (date, _a) {
    var y = _a[0], m = _a[1], d = _a[2];
    date.setFullYear(y);
    date.setMonth(m - 1);
    date.setDate(d);
    return date;
};
exports.setDate = setDate;
var setTime = function (date, _a) {
    var h = _a[0], m = _a[1], s = _a[2];
    date.setHours(h || 0);
    date.setMinutes(m || 0);
    date.setSeconds(s || 0);
    return date;
};
exports.setTime = setTime;
var setDateTime = function (date, _a) {
    var d = _a[0], t = _a[1];
    (0, exports.setDate)(date, d);
    (0, exports.setTime)(date, t);
    return date;
};
exports.setDateTime = setDateTime;
var modifyDate = function (date, fn) {
    return fn(date) || date;
};
exports.modifyDate = modifyDate;
var betweenTime = function (start, end, current) {
    var s = +start;
    var e = +end;
    var c = +current;
    return c >= s && c <= e;
};
exports.betweenTime = betweenTime;
var ymdh = function (date) {
    return (0, exports.getDateTimeStr)(date).split("-").slice(0, 4);
};
exports.ymdh = ymdh;

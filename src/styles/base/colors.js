import { parseVariables } from '../../helpers/styles';
//const colorsTxt = require('raw!./colors.styl');
let colorsTxt = `$blue-10 = #bfe6ff
$blue-20 = #79c6ff
$blue-30 = #56a8fd
$blue-40 = #5294e9
$blue-50 = #3e76c0
$blue-60 = #305b81
$blue-70 = #244a61
$blue-80 = #1c364a
$blue-90 = #142936
$blue-100 = #010205

$green-10 = #c7f18a
$green-20 = #b3e244
$green-30 = #8ad400
$green-40 = #57a900
$green-50 = #498500
$green-60 = #2b6700
$green-70 = #114e10
$green-80 = #063d00
$green-90 = #0a2906
$green-100 = #010200

$teal-10 = #a4fbe6
$teal-20 = #68eed8
$teal-30 = #36d7c3
$teal-40 = #00b5a0
$teal-50 = #008671
$teal-60 = #006d5d
$teal-70 = #005448
$teal-80 = #003c32
$teal-90 = #002b22
$teal-100 = #000202

$purple-10 = #efd1ff
$purple-20 = #d8a8ff
$purple-30 = #bb8cfa
$purple-40 = #b06aeb
$purple-50 = #9950d7
$purple-60 = #743d9a
$purple-70 = #572c74
$purple-80 = #422157
$purple-90 = #311842
$purple-100 = #030103

$red-10 = #ffd2dd
$red-20 = #ffa4b3
$red-30 = #ff7c85
$red-40 = #ff4e4b
$red-50 = #ea172a
$red-60 = #af1220
$red-70 = #8e0d18
$red-80 = #6f071c
$red-90 = #4d0816
$red-100 = #040001

$grey-10 = #e0e0e0
$grey-20 = #c7c7c7
$grey-30 = #aeaeae
$grey-40 = #959595
$grey-50 = #777677
$grey-60 = #5a5a5a
$grey-70 = #464646
$grey-80 = #323232
$grey-90 = #121212
$grey-100 = #000000

$black = #000000

$white = #ffffff
$white-1 = #fdfdfd
$white-2 = #f9f9f9
$white-3 = #f4f4f4
$white-4 = #ececec`;

const colors = parseVariables(colorsTxt);

export default colors;

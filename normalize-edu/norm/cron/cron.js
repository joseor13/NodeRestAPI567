var _0x152e=['every\x20day\x20at\x20midnight','0\x200\x200\x20*\x20*\x20*','every\x2015\x20days\x20at\x20midnight','0\x200\x200\x2015\x20*\x20*','0\x200\x200\x207\x20*\x20*','log','Running\x20a\x20task\x20','start','defineProperty','__esModule','node-cron','cluster','schedule','worker','env','every\x205\x20second','every\x20minute','*\x20*\x20*\x20*\x20*','0\x20*/55\x20*\x20*\x20*\x20*','0\x200\x20*/2\x20*\x20*\x20*','every\x20day\x20at\x203am','1\x201\x203\x20*\x20*\x20*','every\x20day\x20at\x206am','1\x201\x206\x20*\x20*\x20*'];(function(_0x58659e,_0x358827){var _0x28d52c=function(_0x1ea723){while(--_0x1ea723){_0x58659e['push'](_0x58659e['shift']());}};_0x28d52c(++_0x358827);}(_0x152e,0x68));var _0x1f03=function(_0x3eda87,_0x50a5d0){_0x3eda87=_0x3eda87-0x0;var _0x4c0709=_0x152e[_0x3eda87];return _0x4c0709;};'use strict';Object[_0x1f03('0x0')](exports,_0x1f03('0x1'),{'value':!![]});const cron=require(_0x1f03('0x2'));class Cron{constructor(_0x4a9bac,_0x1c7fdf){this['options']=_0x4a9bac;this[_0x1f03('0x3')]=_0x1c7fdf;}[_0x1f03('0x4')](_0x517daa,_0x106d07,_0xe24dde){if(this['options']['cluster']&&this[_0x1f03('0x3')]&&this[_0x1f03('0x3')][_0x1f03('0x5')]&&this[_0x1f03('0x3')]['worker']['process'][_0x1f03('0x6')]['role']=='data_broker'||!this['options']['cluster']){let _0x376475='';switch(_0x517daa){case'every\x20second':_0x376475='*\x20*\x20*\x20*\x20*\x20*';break;case _0x1f03('0x7'):_0x376475='*/5\x20*\x20*\x20*\x20*\x20*';break;case _0x1f03('0x8'):_0x376475=_0x1f03('0x9');break;case'every\x20hour':_0x376475='0\x20*/59\x20*\x20*\x20*\x20*';break;case'every\x2055\x20min':_0x376475=_0x1f03('0xa');break;case'every\x20other\x20hour':_0x376475=_0x1f03('0xb');break;case _0x1f03('0xc'):_0x376475=_0x1f03('0xd');break;case _0x1f03('0xe'):_0x376475=_0x1f03('0xf');break;case _0x1f03('0x10'):_0x376475=_0x1f03('0x11');break;case _0x1f03('0x12'):_0x376475=_0x1f03('0x13');break;case'every\x207\x20days\x20at\x20midnight':_0x376475=_0x1f03('0x14');break;default:_0x376475=_0x1f03('0x11');break;}return cron[_0x1f03('0x4')](_0x376475,()=>{_0xe24dde&&_0xe24dde[_0x1f03('0x15')]?console[_0x1f03('0x15')](_0x1f03('0x16')+_0x517daa):'';_0x106d07();},_0xe24dde&&_0xe24dde['start']?_0xe24dde[_0x1f03('0x17')]:![]);}else{return![];}}}exports['Cron']=Cron;
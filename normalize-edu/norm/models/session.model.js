var _0x4e21=['defineProperty','__esModule','./base.model','BaseModel','A\x20numeric\x20property\x20used\x20to\x20identify\x20','\x20record.','cascade','options','Session'];(function(_0x2f3e31,_0x3a89c9){var _0x2c6db2=function(_0x1fa352){while(--_0x1fa352){_0x2f3e31['push'](_0x2f3e31['shift']());}};_0x2c6db2(++_0x3a89c9);}(_0x4e21,0x10e));var _0x2366=function(_0x583beb,_0x438552){_0x583beb=_0x583beb-0x0;var _0xffffa5=_0x4e21[_0x583beb];return _0xffffa5;};'use strict';/*
    Required. A table used to store user session and login data.
*/Object[_0x2366('0x0')](exports,_0x2366('0x1'),{'value':!![]});const base_model_1=require(_0x2366('0x2'));class Session extends base_model_1[_0x2366('0x3')]{constructor(_0x258917,_0x522179,_0x36b7cd){super(_0x258917,_0x522179,{'id':{'type':Number,'key':'primary','desc':_0x2366('0x4')+_0x522179+_0x2366('0x5'),'nice_name':''},'sid':{'type':String,'default':null,'desc':'','nice_name':''},'sess':{'type':JSON,'defalut':null,'desc':'','nice_name':''},'expire':{'type':Date,'default':null,'desc':'','nice_name':''},'user_id':{'type':Number,'key':'foreign','references':{'table':'User','foreignKey':'id'},'onDelete':_0x2366('0x6'),'onUpdate':'cascade','desc':'','nice_name':''}},'A\x20table\x20used\x20to\x20store\x20user\x20session\x20and\x20login\x20data.',[],_0x36b7cd);this[_0x2366('0x7')]=_0x258917;this['name']=_0x522179;this['api']=_0x36b7cd;}}exports[_0x2366('0x8')]=Session;
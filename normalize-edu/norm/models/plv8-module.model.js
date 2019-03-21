var _0x2814=['__esModule','./base.model','cluster','BaseModel','A\x20table\x20used\x20to\x20store\x20javascript\x20modules\x20for\x20the\x20purpose\x20of\x20requiring\x20it\x20in\x20plv8\x20environment.\x20Useful\x20for\x20creating\x20custom\x20stored\x20procedures\x20and\x20aggregate\x20functions.','options','name','api','addModule','worker','process','env','role','data_broker','plv8','model','controller','dbName','init','existCheck','PLV8Module','module','cryptojs','fetchCode','/../../node_modules/crypto-js/crypto-js.js','insertModule','replace','createSPDecript','createDiff','createAccountHistoryItem','proname','sp_decrypt','create','CREATE\x20OR\x20REPLACE\x20FUNCTION\x20sp_decrypt(str\x20text)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20RETURNS\x20text\x20AS\x20$$\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20CryptoJS\x20=\x20require(\x27cryptojs\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20decrypted\x20=\x20CryptoJS.AES.decrypt(str.toString(),\x20\x27','BY_KEY','\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20decrypted.toString(CryptoJS.enc.Utf8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20$$\x20LANGUAGE\x20plv8\x20IMMUTABLE\x20STRICT;','sp_diff','createAccountHistoryTable','CREATE\x20OR\x20REPLACE\x20FUNCTION\x20sp_account_history_table(prev\x20text,\x20pres\x20text,\x20prop\x20text,\x20branch_id\x20text)\x20RETURNS\x20json\x20AS\x20$$\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20query\x20=\x20\x27select\x20sp_decrypt(client_name)\x20as\x20client_name,\x20row_to_json(acct.*)\x20as\x20\x27\x20+\x20prop\x20+\x20\x27_data\x20from\x20\x22Client\x22\x20as\x20c\x20inner\x20join\x20(select\x20mv.pres_xp_id,\x20mv.pres_last_updated,\x20mv.pres_\x27\x20+\x20prop\x20+\x20\x27,\x20mv.prev_last_updated,\x20mv.prev_\x27\x20+\x20prop\x20+\x20\x27,\x20round((pres_\x27\x20+\x20prop\x20+\x20\x27\x20-\x20prev_\x27\x20+\x20prop\x20+\x20\x27)\x20/\x20prev_\x27\x20+\x20prop\x20+\x20\x27,\x205)\x20as\x20change\x20from\x20(select\x20*\x20from\x20(select\x20distinct\x20on\x20(xp_id)\x20xp_id\x20as\x20pres_xp_id,\x20balance_last_updated\x20as\x20pres_last_updated,\x20\x27\x20+\x20prop\x20+\x20\x27\x20as\x20pres_\x27\x20+\x20prop\x20+\x20\x27\x20from\x20(select\x20balance_last_updated,\x20xp_id,\x20\x27\x20+\x20prop\x20+\x20\x27\x20from\x20\x22Account\x22\x20where\x20\x20balance_last_updated\x20<=\x20$1\x20and\x20balance_last_updated\x20>=\x20$2\x27\x20+\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27\x20order\x20by\x20balance_last_updated\x20desc,\x20xp_id\x20asc)\x20v0\x20group\x20by\x20balance_last_updated,\x20xp_id,\x20\x27\x20+\x20prop\x20+\x20\x27\x20order\x20by\x20xp_id\x20asc,\x20balance_last_updated\x20desc)\x20v1\x27\x20+\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27\x20inner\x20join\x27\x20+\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27\x20(select\x20distinct\x20on\x20(xp_id)\x20xp_id\x20\x20as\x20prev_xp_id,\x20balance_last_updated\x20as\x20prev_last_updated,\x20\x27\x20+\x20prop\x20+\x20\x27\x20as\x20prev_\x27\x20+\x20prop\x20+\x20\x27\x20from\x20(select\x20balance_last_updated,\x20xp_id,\x20\x27\x20+\x20prop\x20+\x20\x27\x20from\x20\x22Account\x22\x20where\x20\x20balance_last_updated\x20<=\x20$1\x20and\x20balance_last_updated\x20>=\x20$2\x27\x20+\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27\x20order\x20by\x20balance_last_updated\x20asc,\x20xp_id\x20asc)\x20v0\x20group\x20by\x20balance_last_updated,\x20xp_id,\x20\x27\x20+\x20prop\x20+\x20\x27\x20order\x20by\x20xp_id\x20asc,\x20balance_last_updated\x20asc)\x20v2\x20on(v2.prev_xp_id=v1.pres_xp_id)\x20where\x20prev_\x27\x20+\x20prop\x20+\x20\x27\x20>\x200\x20)\x20mv)\x20acct\x20on\x20(c.xp_id=acct.pres_xp_id)\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(branch_id\x20&&\x20branch_id\x20!==\x20\x27null\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20query\x20+=\x20\x27\x20where\x20branch_id=\x27\x20+\x20branch_id\x20+\x20\x27\x20group\x20by\x20sp_decrypt(c.client_name),\x20acct.*\x20order\x20by\x20sp_decrypt(c.client_name)\x20ASC\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20query\x20+=\x20\x27\x20group\x20by\x20sp_decrypt(c.client_name),\x20acct.*\x20order\x20by\x20sp_decrypt(c.client_name)\x20ASC\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20rows\x20=\x20plv8.execute(query,\x20[pres,\x20prev]);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(rows.length\x20===\x200)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20plv8.elog(NOTICE,\x20\x27cannot\x20find\x20account:\x20\x27\x20+\x20prop);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20null;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20rows;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20$$\x20LANGUAGE\x20plv8\x20IMMUTABLE\x20STRICT;','CREATE\x20OR\x20REPLACE\x20FUNCTION\x20sp_account_history(xpid\x20text,\x20prev\x20text,\x20pres\x20text,\x20prop\x20text)\x20RETURNS\x20json\x20AS\x20$$\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20cond\x20=\x20\x27\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(xpid\x20!==\x20\x27null\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cond\x20=\x20\x27(select\x20\x27\x20+\x20prop\x20+\x20\x20\x27\x20from\x20\x22Account\x22\x20where\x20xp_id\x20=\x20\x27\x20+\x20xpid\x20+\x20\x27\x20and\x20\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cond\x20=\x20\x27(select\x20\x27\x20+\x20prop\x20+\x20\x20\x27\x20from\x20\x22Account\x22\x20where\x20\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20presVal\x20=\x20cond\x20+\x20\x27\x20balance_last_updated\x20<=\x20$1\x20and\x20balance_last_updated\x20>=\x20$2\x27\x20+\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27\x20order\x20by\x20balance_last_updated\x20desc\x20limit\x201)\x27;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20prevVal\x20=\x20cond\x20+\x20\x27\x20balance_last_updated\x20<=\x20$1\x20and\x20balance_last_updated\x20>=\x20$2\x27\x20+\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27\x20order\x20by\x20balance_last_updated\x20asc\x20limit\x201)\x27;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20diff\x20=\x20\x27select\x20round((\x27\x20+\x20presVal\x20+\x20\x27\x20-\x20\x27\x20+\x20prevVal\x20+\x20\x27)\x20/\x20\x27\x20+\x20prevVal\x20+\x20\x27,\x205)\x20as\x20change\x27;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20rows\x20=\x20plv8.execute(diff,\x20[pres,\x20prev]);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(rows.length\x20===\x200)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20plv8.elog(NOTICE,\x20\x27cannot\x20find\x20account:\x20\x27\x20+\x20prop);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20null;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20rows;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20$$\x20LANGUAGE\x20plv8\x20IMMUTABLE\x20STRICT;','__awaiter','next','throw','value','then','apply','defineProperty'];(function(_0x18b2fc,_0x58ae47){var _0x6a3854=function(_0x1ac637){while(--_0x1ac637){_0x18b2fc['push'](_0x18b2fc['shift']());}};_0x6a3854(++_0x58ae47);}(_0x2814,0xe4));var _0x1836=function(_0xdec31f,_0x6830b5){_0xdec31f=_0xdec31f-0x0;var _0x53139c=_0x2814[_0xdec31f];return _0x53139c;};'use strict';/*
    Required. A table used to store javascript modules for the purpose of requiring it in plv8 environment. Useful for creating custom stored procedures and aggregate functions.
*/var __awaiter=this&&this[_0x1836('0x0')]||function(_0x575181,_0x4d025b,_0x56d7de,_0xf39f11){return new(_0x56d7de||(_0x56d7de=Promise))(function(_0x33448a,_0x5357bb){function _0x17301e(_0x449c41){try{_0x5672da(_0xf39f11[_0x1836('0x1')](_0x449c41));}catch(_0x2cb963){_0x5357bb(_0x2cb963);}}function _0x322192(_0x1a5bda){try{_0x5672da(_0xf39f11[_0x1836('0x2')](_0x1a5bda));}catch(_0x1041ab){_0x5357bb(_0x1041ab);}}function _0x5672da(_0x4736ba){_0x4736ba['done']?_0x33448a(_0x4736ba['value']):new _0x56d7de(function(_0x33448a){_0x33448a(_0x4736ba[_0x1836('0x3')]);})[_0x1836('0x4')](_0x17301e,_0x322192);}_0x5672da((_0xf39f11=_0xf39f11[_0x1836('0x5')](_0x575181,_0x4d025b||[]))[_0x1836('0x1')]());});};Object[_0x1836('0x6')](exports,_0x1836('0x7'),{'value':!![]});const base_model_1=require(_0x1836('0x8'));const plv8_1=require('../encryption/plv8');const cluster=require(_0x1836('0x9'));class PLV8Module extends base_model_1[_0x1836('0xa')]{constructor(_0x2d413b,_0x1842f1,_0x1a74d0){super(_0x2d413b,_0x1842f1,{'id':{'type':Number,'key':'primary'},'module':{'type':String,'maxlength':0x96,'unique':!![]},'source':{'type':String,'maxlength':Infinity},'autoload':{'type':Boolean,'default':!![]}},_0x1836('0xb'),[],_0x1a74d0);this[_0x1836('0xc')]=_0x2d413b;this[_0x1836('0xd')]=_0x1842f1;this[_0x1836('0xe')]=_0x1a74d0;this[_0x1836('0xf')]();}['addModule'](){return __awaiter(this,void 0x0,void 0x0,function*(){if(this['options'][_0x1836('0x9')]&&cluster&&!cluster['isMaster']&&cluster[_0x1836('0x10')]&&cluster[_0x1836('0x10')][_0x1836('0x11')][_0x1836('0x12')][_0x1836('0x13')]==_0x1836('0x14')||!this['options']['cluster']){this[_0x1836('0x15')]==null?this[_0x1836('0x15')]=yield new plv8_1['PLV8'](this[_0x1836('0x16')][_0x1836('0x17')],this[_0x1836('0xc')][_0x1836('0x18')])[_0x1836('0x19')]():null;const _0xd81cc8=yield this[_0x1836('0x15')][_0x1836('0x1a')](_0x1836('0x1b'),_0x1836('0x1c'),_0x1836('0x1d'));if(!_0xd81cc8){let _0x2182cb=yield this[_0x1836('0x15')][_0x1836('0x1e')](__dirname+_0x1836('0x1f'));if(_0x2182cb){yield this['plv8'][_0x1836('0x20')](_0x1836('0x1d'),!![],_0x2182cb[_0x1836('0x21')](/'/g,'\x27\x27'));}}yield this[_0x1836('0x22')]();yield this[_0x1836('0x23')]();yield this[_0x1836('0x24')]();yield this['createAccountHistoryTable']();}});}[_0x1836('0x22')](){return __awaiter(this,void 0x0,void 0x0,function*(){return new Promise(_0x26b292=>__awaiter(this,void 0x0,void 0x0,function*(){const _0x37b9da=yield this[_0x1836('0x15')][_0x1836('0x1a')]('pg_proc',_0x1836('0x25'),_0x1836('0x26'));;if(!_0x37b9da){let _0x4bf5fa=yield this['plv8'][_0x1836('0x27')](_0x1836('0x28')+process[_0x1836('0x12')][_0x1836('0x29')]+_0x1836('0x2a'));_0x26b292(!![]);}_0x26b292(![]);}));});}[_0x1836('0x23')](){return __awaiter(this,void 0x0,void 0x0,function*(){return new Promise(_0xd15c78=>__awaiter(this,void 0x0,void 0x0,function*(){const _0x54c7ed=yield this['plv8'][_0x1836('0x1a')]('pg_proc','proname',_0x1836('0x2b'));if(!_0x54c7ed){let _0x3dda47=yield this['plv8'][_0x1836('0x27')]('CREATE\x20OR\x20REPLACE\x20FUNCTION\x20sp_diff(var1\x20integer,\x20var2\x20integer)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20RETURNS\x20integer\x20AS\x20$$\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20var1\x20-\x20var2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20$$\x20LANGUAGE\x20plv8\x20IMMUTABLE\x20STRICT;');_0xd15c78(!![]);}_0xd15c78(![]);}));});}[_0x1836('0x2c')](){return __awaiter(this,void 0x0,void 0x0,function*(){return new Promise(_0x1b598d=>__awaiter(this,void 0x0,void 0x0,function*(){let _0xcdb8be=yield this[_0x1836('0x15')][_0x1836('0x27')](_0x1836('0x2d'));_0x1b598d(_0xcdb8be);}));});}[_0x1836('0x24')](){return __awaiter(this,void 0x0,void 0x0,function*(){return new Promise(_0x2e3370=>__awaiter(this,void 0x0,void 0x0,function*(){let _0x40caf4=yield this['plv8'][_0x1836('0x27')](_0x1836('0x2e'));_0x2e3370(_0x40caf4);}));});}}exports[_0x1836('0x1b')]=PLV8Module;
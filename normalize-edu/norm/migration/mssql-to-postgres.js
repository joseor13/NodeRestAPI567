var _0x48b3=['base64','nchar','toISOString',')\x20values(','insert\x20query','\x20k:\x20','-------------------\x20err\x20------------------->\x20\x0a','err','DROP\x20TABLE\x20IF\x20EXISTS\x20\x22','dropTableIfExist\x20err','----\x20i,\x20',',\x20Table\x20','\x20deleted\x20if\x20exist.\x20migration\x20has\x20started\x20---------->','MSSQLToPG','defineProperty','__esModule','mssql','async-foreach','forEach','../encryption/encryptor','api','legacyDB','MSSQLWrapper','encryptor','Encryptor','env','run','log','----\x20run()\x20migrate\x20----->','tables','length','options','migrate','dbDriver','dbUser','dbPassword','dbServer','dbName','connect','then','postgres','dropTableIfExistThenMigrate','getType','attribute','type','convertToUTCDate','indexOf','sanitize','toString','replace','slice','...','prepareCreate','COLUMN_NAME','ENABLE_DB_ENCRYPTION','PRECISION','\x22\x20integer','bit','boolean','\x22\x20boolean\x20default\x20false','char','text','image','\x22\x20text','date','datetime2','datetime','smalldatetime','uniqueidentifier','\x22\x20varchar(','encrypt','true','table','secretFields','query','exec\x20sp_columns\x20','push','\x22created_at\x22\x20timestamp,\x20\x22updated_at\x22\x20timestamp,\x20\x22deleted_at\x22\x20timestamp','create\x20table\x20\x22','\x22\x20(','resp','SELECT\x20*\x20FROM\x20\x22','err\x20from\x20legacyDB\x20select','async','int','int\x20identity','decimal'];(function(_0x73ced0,_0x209e6b){var _0x233b1b=function(_0xd6caf4){while(--_0xd6caf4){_0x73ced0['push'](_0x73ced0['shift']());}};_0x233b1b(++_0x209e6b);}(_0x48b3,0x65));var _0x651d=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=_0x48b3[_0x2d8f05];return _0x4d74cb;};'use strict';Object[_0x651d('0x0')](exports,_0x651d('0x1'),{'value':!![]});const sql=require(_0x651d('0x2'));const pg=require('pg');const fs=require('fs');const asyncForEach=require(_0x651d('0x3'))[_0x651d('0x4')];const mssql_wrapper_1=require('../wrapper/mssql.wrapper');const encryptor_1=require(_0x651d('0x5'));class MSSQLToPG{constructor(_0xabda0d,_0x672f12,_0x248277){this['api']=_0x248277;this['tables']=_0x672f12;this['options']=_0xabda0d;this['db']=this[_0x651d('0x6')]['db'];MSSQLToPG[_0x651d('0x7')]=new mssql_wrapper_1[(_0x651d('0x8'))](_0xabda0d,null);MSSQLToPG[_0x651d('0x9')]=new encryptor_1[(_0x651d('0xa'))](process[_0x651d('0xb')]['BY_KEY']);}[_0x651d('0xc')](){console[_0x651d('0xd')](_0x651d('0xe'));let _0x39b8f3=this[_0x651d('0xf')];if(_0x39b8f3[_0x651d('0x10')]>0x0){let _0x1a10b1=this[_0x651d('0x11')];if(_0x1a10b1[_0x651d('0x12')]!=null){if(_0x1a10b1['migrate'][_0x651d('0x13')]=='mssql'){const _0x4605c3={'user':_0x1a10b1[_0x651d('0x12')][_0x651d('0x14')],'password':_0x1a10b1[_0x651d('0x12')][_0x651d('0x15')],'server':_0x1a10b1[_0x651d('0x12')][_0x651d('0x16')],'database':_0x1a10b1[_0x651d('0x12')][_0x651d('0x17')],'requestTimeout':0x493e0,'pool':{'idleTimeoutMillis':0x493e0,'max':0x64}};this[_0x651d('0x18')](_0x4605c3)[_0x651d('0x19')](_0x51d93c=>{if(_0x51d93c){if(_0x1a10b1['dbType']==_0x651d('0x1a')){this[_0x651d('0x1b')](_0x39b8f3,this[_0x651d('0x12')]);}}});}}}else{console[_0x651d('0xd')]('No\x20tables\x20were\x20configured\x20to\x20migrate!');}}[_0x651d('0x18')](_0x49e44b){return MSSQLToPG[_0x651d('0x7')][_0x651d('0x18')](_0x49e44b)[_0x651d('0x19')](_0x2bc381=>{return _0x2bc381;});}static[_0x651d('0x1c')](_0x469599,_0x4f80a8){for(let _0x4cd79d in _0x4f80a8){if(_0x4f80a8[_0x4cd79d][_0x651d('0x1d')]==_0x469599){return _0x4f80a8[_0x4cd79d][_0x651d('0x1e')];}}}static[_0x651d('0x1f')](_0x3d83a3){let _0x2cf7da=_0x3d83a3||null;let _0x288a98;if(_0x2cf7da!=null){_0x288a98=_0x2cf7da['slice'](0x0,_0x2cf7da[_0x651d('0x20')]('T'));}return _0x288a98;}static[_0x651d('0x21')](_0x1ef0e5){let _0x3e9cb4=_0x1ef0e5[_0x651d('0x22')]()[_0x651d('0x23')](/(^\s+|\s+$)/g,'')['trim']();if(_0x3e9cb4['includes']('\x27')){_0x3e9cb4=_0x3e9cb4[_0x651d('0x23')](/'/g,'\x27\x27');}if(_0x3e9cb4[_0x651d('0x10')]>=0xfe){_0x3e9cb4=_0x3e9cb4[_0x651d('0x24')](0x0,0xfa)+_0x651d('0x25');}return _0x3e9cb4;}static[_0x651d('0x26')](_0x3e3e20){let _0x210cd8='';let _0x636a13=_0x3e3e20[_0x651d('0x27')],_0x2c42e2=process['env'][_0x651d('0x28')]==='true'||![],_0x15a2c3=_0x2c42e2?0x400:_0x3e3e20['CHAR_OCTET_LENGTH'],_0x54f2fa=_0x2c42e2?0x400:_0x3e3e20[_0x651d('0x29')];switch(_0x3e3e20['TYPE_NAME']){case'int':return _0x210cd8='\x22'+_0x636a13+_0x651d('0x2a');case _0x651d('0x2b'):case _0x651d('0x2c'):return _0x210cd8='\x22'+_0x636a13+_0x651d('0x2d');case _0x651d('0x2e'):return _0x210cd8='\x22'+_0x636a13+'\x22\x20varchar('+(_0x15a2c3!=null?_0x15a2c3:_0x54f2fa)+')';case _0x651d('0x2f'):case _0x651d('0x30'):return _0x210cd8='\x22'+_0x636a13+_0x651d('0x31');case _0x651d('0x32'):case _0x651d('0x33'):case _0x651d('0x34'):case _0x651d('0x35'):return _0x210cd8='\x22'+_0x636a13+'\x22\x20timestamp';case _0x651d('0x36'):return _0x210cd8='\x22'+_0x636a13+_0x651d('0x37')+(_0x15a2c3!=null?_0x15a2c3:_0x54f2fa)+')';default:return _0x210cd8='\x22'+_0x636a13+_0x651d('0x37')+(_0x15a2c3!=null?_0x15a2c3:_0x54f2fa)+')';}}static[_0x651d('0x38')](_0x55c715,_0x29dbdf,_0x34a58a){const _0x5d9d7f=process[_0x651d('0xb')][_0x651d('0x28')]===_0x651d('0x39');if(_0x34a58a&&_0x34a58a[_0x651d('0x20')](_0x55c715)!=-0x1&&_0x5d9d7f){return MSSQLToPG[_0x651d('0x9')][_0x651d('0x38')](_0x29dbdf);}else{return _0x29dbdf;}}[_0x651d('0x12')](_0x57476f){let _0xe92c2c=_0x57476f[_0x651d('0x3a')][_0x651d('0x24')](0x1,_0x57476f[_0x651d('0x3a')][_0x651d('0x10')]),_0x156ed7=_0x57476f[_0x651d('0x3a')],_0x37be4e=_0x57476f[_0x651d('0x3b')]!=null?_0x57476f[_0x651d('0x3b')]:![];MSSQLToPG[_0x651d('0x7')][_0x651d('0x3c')](_0x651d('0x3d')+_0xe92c2c,(_0x3a3353,_0x57a6bb)=>{let _0x2fd426='',_0x53ae1d=[];let _0x1aa474='';for(let _0x2b205b in _0x57a6bb){_0x53ae1d[_0x651d('0x3e')]({'attribute':_0x57a6bb[_0x2b205b][_0x651d('0x27')],'type':_0x57a6bb[_0x2b205b]['TYPE_NAME']});_0x2fd426+='\x22'+_0x57a6bb[_0x2b205b][_0x651d('0x27')]+'\x22\x20'+',\x20';_0x1aa474+=''+MSSQLToPG[_0x651d('0x26')](_0x57a6bb[_0x2b205b])+',\x20';}_0x2fd426+='\x22created_at\x22,\x20\x22updated_at\x22,\x20\x22deleted_at\x22';_0x1aa474+=_0x651d('0x3f');let _0x2447c2=_0x651d('0x40')+_0x156ed7+_0x651d('0x41')+_0x1aa474+')';this[_0x651d('0x6')]['db'][_0x651d('0x3c')](_0x2447c2,null,(_0x3a3353,_0x57476f)=>{if(_0x57476f){console['log'](_0x651d('0x42'),_0x57476f);MSSQLToPG[_0x651d('0x7')]['query'](_0x651d('0x43')+_0xe92c2c+'\x22\x20order\x20by\x20'+_0x57a6bb[0x0]['COLUMN_NAME'],(_0x3a3353,_0x81af83)=>{let _0x5d3ad1=_0x81af83['lenght'];if(_0x3a3353){console[_0x651d('0xd')](_0x651d('0x44'),_0x3a3353);}else{asyncForEach(_0x81af83,function(_0x3412bc,_0xb2d9ab,_0x15eb5c){let _0x2028ad='',_0x290464=this[_0x651d('0x45')]();for(let _0x631f74 in _0x3412bc){let _0x36c6d2=MSSQLToPG[_0x651d('0x1c')](_0x631f74,_0x53ae1d),_0x200864=_0x3412bc[_0x631f74]!=null||_0x3412bc[_0x631f74]!=''?_0x3412bc[_0x631f74]:null;switch(_0x36c6d2){case _0x651d('0x46'):case _0x651d('0x47'):_0x2028ad+=_0x200864!=null?MSSQLToPG['encrypt'](_0x631f74,parseInt(_0x200864),_0x37be4e)+',\x20':null+',\x20';break;case _0x651d('0x48'):_0x2028ad+=_0x200864!=null?MSSQLToPG[_0x651d('0x38')](_0x631f74,parseFloat(_0x200864),_0x37be4e)+',\x20':null+',\x20';break;case'image':_0x2028ad+=_0x200864!=null?'\x27'+MSSQLToPG[_0x651d('0x38')](_0x631f74,_0x200864[_0x651d('0x22')](_0x651d('0x49')),_0x37be4e)+'\x27'+',\x20':null+',\x20';break;case _0x651d('0x2b'):case _0x651d('0x2e'):case _0x651d('0x2f'):case'varchar':case _0x651d('0x36'):case _0x651d('0x4a'):_0x2028ad+=_0x200864!=null?'\x27'+MSSQLToPG['encrypt'](_0x631f74,MSSQLToPG[_0x651d('0x21')](_0x200864),_0x37be4e)+'\x27'+',\x20':null+',\x20';break;case _0x651d('0x32'):case _0x651d('0x33'):case _0x651d('0x34'):case'smalldatetime':_0x2028ad+=_0x200864!=null?'\x27'+MSSQLToPG[_0x651d('0x38')](_0x631f74,MSSQLToPG[_0x651d('0x1f')](_0x200864[_0x651d('0x4b')]()),_0x37be4e)+'\x27'+',\x20':null+',\x20';break;default:_0x2028ad+=_0x200864!=null?'\x27'+MSSQLToPG[_0x651d('0x38')](_0x631f74,MSSQLToPG[_0x651d('0x21')](_0x200864),_0x37be4e)+'\x27'+',\x20':null+',\x20';break;}}_0x2028ad+='\x27'+MSSQLToPG[_0x651d('0x1f')](new Date()[_0x651d('0x4b')]())+'\x27'+',\x20';_0x2028ad+='\x27'+MSSQLToPG[_0x651d('0x1f')](new Date()[_0x651d('0x4b')]())+'\x27'+',\x20';_0x2028ad+=null;let _0x355033='INSERT\x20INTO\x20\x22'+_0x156ed7+_0x651d('0x41')+_0x2fd426+_0x651d('0x4c')+_0x2028ad+')';console[_0x651d('0xd')](_0x651d('0x4d'),_0x355033);console[_0x651d('0xd')]('-------------------\x20end\x20------------------->\x20\x0a');this[_0x651d('0x6')]['db'][_0x651d('0x3c')](_0x355033,null,(_0x3a3353,_0x57a6bb)=>{if(_0x57a6bb){console[_0x651d('0xd')]('-------------------\x20resp\x20------------------->\x20\x0a',_0x57a6bb,_0x651d('0x4e'),_0xb2d9ab);}else{console[_0x651d('0xd')](_0x651d('0x4f'),_0x3a3353,_0x651d('0x4e'),_0xb2d9ab);}_0x290464();});});}});}else{console[_0x651d('0xd')](_0x651d('0x50'),_0x3a3353);}});});}[_0x651d('0x1b')](_0x5679d9,_0x399be0){asyncForEach(_0x5679d9,function(_0x167fb8,_0x3a6489,_0x57008f){let _0x3c9de3=_0x167fb8[_0x651d('0x3a')],_0x2222b6=_0x651d('0x51')+_0x3c9de3+'\x22',_0x10fa62=this[_0x651d('0x45')]();console[_0x651d('0xd')](_0x2222b6);this['api']['db'][_0x651d('0x3c')](_0x2222b6,null,(_0x428c9b,_0x214a1d)=>{if(_0x428c9b){console[_0x651d('0xd')](_0x651d('0x52'),_0x428c9b);_0x10fa62();}else{console[_0x651d('0xd')](_0x651d('0x53')+_0x3a6489+_0x651d('0x54')+_0x3c9de3+_0x651d('0x55'));_0x399be0(_0x167fb8);_0x10fa62();}});});}}exports[_0x651d('0x56')]=MSSQLToPG;
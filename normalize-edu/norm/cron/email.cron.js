var _0x5d09=['Emailer','User','controller','every\x20day\x20at\x20midnight','email','password_reset_at','locked','DESC','length','forEach','days','sendMail','lockAccount','api','updateSet','getSchema','email_reminder_count','maxEmailSend','(first\x20reminder)','(second\x20reminder)','(third\x20reminder)','emailer','send','env','TEST_EMAIL','<p>Password\x20must\x20be\x20updated\x20every\x20','!\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20go\x20<a\x20href=\x22','/#/password-reset?token=','sign','psql','EmailCron','__awaiter','next','done','value','apply','defineProperty','__esModule','./cron','../email/mailer','jsonwebtoken','Cron','options','cluster'];(function(_0x50ab72,_0x5d5ca1){var _0x338907=function(_0x4dbafb){while(--_0x4dbafb){_0x50ab72['push'](_0x50ab72['shift']());}};_0x338907(++_0x5d5ca1);}(_0x5d09,0xcf));var _0x3a02=function(_0x56da03,_0x47a853){_0x56da03=_0x56da03-0x0;var _0xb5166e=_0x5d09[_0x56da03];return _0xb5166e;};'use strict';var __awaiter=this&&this[_0x3a02('0x0')]||function(_0x39bc00,_0x28089e,_0x1884a1,_0x1ae148){return new(_0x1884a1||(_0x1884a1=Promise))(function(_0x130bcc,_0x1b14e4){function _0x2be868(_0x4392ff){try{_0x563f2c(_0x1ae148[_0x3a02('0x1')](_0x4392ff));}catch(_0x25ae39){_0x1b14e4(_0x25ae39);}}function _0x56f4a8(_0x10ca04){try{_0x563f2c(_0x1ae148['throw'](_0x10ca04));}catch(_0x4698cf){_0x1b14e4(_0x4698cf);}}function _0x563f2c(_0x3f868b){_0x3f868b[_0x3a02('0x2')]?_0x130bcc(_0x3f868b[_0x3a02('0x3')]):new _0x1884a1(function(_0x130bcc){_0x130bcc(_0x3f868b[_0x3a02('0x3')]);})['then'](_0x2be868,_0x56f4a8);}_0x563f2c((_0x1ae148=_0x1ae148[_0x3a02('0x4')](_0x39bc00,_0x28089e||[]))[_0x3a02('0x1')]());});};Object[_0x3a02('0x5')](exports,_0x3a02('0x6'),{'value':!![]});const cron_1=require(_0x3a02('0x7'));const moment=require('moment');const mailer_1=require(_0x3a02('0x8'));const jwt=require(_0x3a02('0x9'));class EmailCron extends cron_1[_0x3a02('0xa')]{constructor(_0x2c9d20,_0x17540f,_0x42f72f){super(_0x17540f,_0x42f72f);this['api']=_0x2c9d20;this[_0x3a02('0xb')]=_0x17540f;this[_0x3a02('0xc')]=_0x42f72f;this['emailer']=new mailer_1[(_0x3a02('0xd'))]();}['scheduleMassPasswordReset'](_0x1d4a19){const _0x2fa48d=this['api']['getSchema'](_0x3a02('0xe'))[_0x3a02('0xf')];this['schedule'](_0x3a02('0x10'),()=>{let _0x1d34aa=moment();_0x2fa48d['psql']['get']({'body':{'get':['id',_0x3a02('0x11'),_0x3a02('0x12'),'email_reminder_count',_0x3a02('0x13')],'sort':{'password_reset_at':_0x3a02('0x14')}}},null,null,_0x363451=>{if(_0x363451&&_0x363451[_0x3a02('0x15')]>0x0){_0x363451[_0x3a02('0x16')]((_0x3b122b,_0x26a415,_0x31b320)=>__awaiter(this,void 0x0,void 0x0,function*(){if(_0x3b122b[_0x3a02('0x12')]!=null){let _0x448fbc=moment(_0x3b122b[_0x3a02('0x12')]);_0x448fbc['subtract'](_0x1d4a19[_0x3a02('0x17')],_0x3a02('0x17'));let _0x416758=_0x1d34aa['diff'](_0x448fbc,_0x3a02('0x17'));if(_0x416758>=_0x1d4a19['days']){yield this[_0x3a02('0x18')](_0x3b122b,_0x1d4a19);}}}));}});},{'log':!![],'start':!![]});}[_0x3a02('0x19')](_0x4c6501,_0x3aa349){const _0x351e19=this[_0x3a02('0x1a')]['getSchema'](_0x3a02('0xe'))[_0x3a02('0xf')];let _0x53b57c={'body':{'locked':!![],'where':{'id':_0x4c6501['id']}}};_0x351e19['psql'][_0x3a02('0x1b')](_0x53b57c,null,null,_0xa38bb0=>{this[_0x3a02('0x18')](_0x4c6501,_0x3aa349);});}['sendMail'](_0x525867,_0x2acbac){return new Promise(_0x276e0f=>{const _0x57ea93=this[_0x3a02('0x1a')][_0x3a02('0x1c')](_0x3a02('0xe'))[_0x3a02('0xf')];let _0x557ef9=_0x525867[_0x3a02('0x1d')]!=null?parseInt(_0x525867['email_reminder_count']):0x0;if(_0x557ef9<_0x2acbac[_0x3a02('0x1e')]){let _0x1db12a=_0x557ef9==0x1?_0x3a02('0x1f'):_0x557ef9==0x2?_0x3a02('0x20'):_0x557ef9==0x3?_0x3a02('0x21'):'';this[_0x3a02('0x22')][_0x3a02('0x23')]({'from':process[_0x3a02('0x24')][_0x3a02('0x25')],'to':process[_0x3a02('0x24')][_0x3a02('0x25')],'subject':'Password\x20Reset\x20Required!\x20'+_0x1db12a,'html':_0x3a02('0x26')+_0x2acbac['days']+_0x3a02('0x27')+process['env']['CLIENT_URL']+_0x3a02('0x28')+jwt[_0x3a02('0x29')]({'email':_0x525867['email'],'id':_0x525867['id']},process[_0x3a02('0x24')]['JWT_SECRET'],{'expiresIn':0x3c*0x1e})+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Here</a>\x20to\x20reset\x20your\x20password.\x20This\x20link\x20is\x20only\x20valid\x20for\x20the\x20next\x2030\x20minutes.</p>'},_0x5a6214=>{_0x57ea93[_0x3a02('0x2a')]['updateSet']({'body':{'email_reminder_count':_0x557ef9+0x1,'where':{'id':_0x525867['id']}}},null,null,_0x397f91=>{});});}});}}exports[_0x3a02('0x2b')]=EmailCron;
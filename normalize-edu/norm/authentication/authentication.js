var _0x2f78=['oldPassword\x20must\x20be\x20defined!','recoverPassword','newPassword','Recover\x20Password!','newPassword\x20must\x20be\x20defined!','Token\x20is\x20no\x20longer\x20valid\x20or\x20has\x20expired!','user\x20does\x20not\x20exist!','sendRecoverEmail','Password\x20Reset\x20Request!','<p>You\x20have\x20requested\x20a\x20password\x20reset!\x20Please\x20go\x20<a\x20href=\x22','/#/password-reset?token=','\x22>Here</a>\x20to\x20reset\x20your\x20password.\x20This\x20link\x20is\x20only\x20valid\x20for\x20the\x20next\x2030\x20minutes.</p>','Emailer','secretFields','getAllSecretFields','find\x20by\x20email\x20error!\x20User\x20may\x20not\x20exist!','get','activateAccount','Account\x20Locked!','<p>Dear\x20Admin</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>The\x20account\x20for\x20user\x20email:\x20','\x20is\x20locked\x20because\x20of\x20too\x20many\x20failed\x20login\x20attempt!</p>','__esModule','../email/mailer','bcrypt','request','options','name','isSuperAdmin','mongo','params','json','model','controller','send','sendError','postgres','super_admin','psql','assign','body','findByEmail','then','appendSecretFields','findUser','insert','TEST_EMAIL','env','Secure\x20User\x20Created!','<p>You\x20are\x20now\x20a\x20part\x20of\x20NobleOne\x20user\x20group!</p>','emailer','user\x20already\x20exist!','user','undefined','User\x20is\x20not\x20logged\x20in!','logout','User\x20is\x20logged\x20out!','session','User\x20session\x20not\x20found!','login','DOC_STORAGE_API_URL','dbType','findOne','email','password','Incorrect\x20password!','sign','JWT_SECRET','findIndex','length','loginErrCount','errorCode','locked','compare','lockAccount','is_activated','docServerLogin','reqUser','Account\x20Locked!\x20This\x20is\x20unusual!','updateSet','Account\x20Restored!','<p>Dear\x20User</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Your\x20account\x20has\x20been\x20unlocked\x20and\x20restored\x20by\x20an\x20administrator!</p>','Account\x20Restored!\x20Your\x20account\x20has\x20been\x20restored!','POST','application/json','FILE_STORAGE_APP_PASSWORD','status','changePassword','getRequestUser','getToken','oldPassword','password_reset_at','localtimestamp','email_reminder_count','update','Password\x20updated!','Change\x20Password!','<p>You\x20have\x20changed\x20your\x20password!\x20Please\x20Login.</p>','Trying\x20to\x20change\x20someone\x20else\x27s\x20password?'];(function(_0x2cb162,_0x4894ee){var _0x423a48=function(_0x5b3c52){while(--_0x5b3c52){_0x2cb162['push'](_0x2cb162['shift']());}};_0x423a48(++_0x4894ee);}(_0x2f78,0x13b));var _0x1420=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=_0x2f78[_0x2d8f05];return _0x4d74cb;};'use strict';Object['defineProperty'](exports,_0x1420('0x0'),{'value':!![]});const mailer_1=require(_0x1420('0x1'));const bcrypt=require(_0x1420('0x2'));const jwt=require('jsonwebtoken');const saltRounds=0xa;const request=require(_0x1420('0x3'))['defaults']({'encoding':null});class Authentication{constructor(_0x5922fa,_0x383c07,_0x40b405){this['model']=_0x5922fa;this[_0x1420('0x4')]=_0x383c07;this[_0x1420('0x5')]=_0x40b405;this[_0x1420('0x6')]=(_0x298f2b,_0x5c883f,_0x5b44bd)=>{if(this['options']['dbType']==_0x1420('0x7')){this['model']['findById'](_0x298f2b[_0x1420('0x8')]['id'],(_0x2d8076,_0x17d388)=>{if(!_0x2d8076){_0x5c883f[_0x1420('0x9')](this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0xc')](0xc8,{'is_super_admin':_0x17d388['super_admin']}));}else{_0x5c883f[_0x1420('0x9')](this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0xd')](0x1f4,_0x2d8076));}});}else if(this['options']['dbType']==_0x1420('0xe')){const _0x53f8c5={'get':[_0x1420('0xf')],'table':this[_0x1420('0x5')],'where':{'id':_0x298f2b[_0x1420('0x8')]['id']}};this['model'][_0x1420('0xb')][_0x1420('0x10')]['get'](Object[_0x1420('0x11')](_0x298f2b[_0x1420('0x12')],{'body':_0x53f8c5}),_0x5c883f,_0x5b44bd,_0x484168=>{if(_0x484168['length']>0x0){_0x5c883f[_0x1420('0x9')](this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0xc')](0xc8,_0x484168[0x0]));}else{_0x5c883f['json'](this[_0x1420('0xa')]['controller'][_0x1420('0xd')](0x1f4,_0x484168));}});}};this[_0x1420('0x13')]=(_0x1bf87c,_0x4b64f2,_0x3585de)=>{this['findUser'](_0x1bf87c,_0x4b64f2,_0x3585de)[_0x1420('0x14')](_0xa4551a=>{_0x4b64f2[_0x1420('0x9')](this[_0x1420('0xa')][_0x1420('0xb')]['send'](0xc8,_0xa4551a));});};this['createSecureUser']=(_0x1a4f26,_0xec5f63,_0x970c2b)=>{this[_0x1420('0x15')](_0x1a4f26);this[_0x1420('0x16')](_0x1a4f26,_0xec5f63,_0x970c2b)[_0x1420('0x14')](_0x34a972=>{if(_0x34a972['errorCode']==0x1f4){this[_0x1420('0xa')][_0x1420('0xb')]['psql'][_0x1420('0x17')](_0x1a4f26,_0xec5f63,_0x970c2b,_0xa62be5=>{if(_0xa62be5){const _0x11edbc={'from':process['env'][_0x1420('0x18')],'to':process[_0x1420('0x19')][_0x1420('0x18')],'subject':_0x1420('0x1a'),'html':_0x1420('0x1b')};this[_0x1420('0x1c')][_0x1420('0xc')](_0x11edbc);_0xec5f63['json'](this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0xc')](0xc8,_0xa62be5));}});}else{_0xec5f63[_0x1420('0x9')](this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0xd')](0x191,_0x1420('0x1d')));}});};this['isLoggedIn']=(_0x22e80a,_0x330af2,_0x457564)=>{const _0x2ffd84=typeof _0x22e80a['session'][_0x1420('0x1e')]!==_0x1420('0x1f');if(_0x2ffd84){_0x330af2[_0x1420('0x9')](this['model']['controller'][_0x1420('0xc')](0xc8,_0x2ffd84));}else{_0x330af2['json'](this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0xd')](0x1f4,_0x1420('0x20')));}};this[_0x1420('0x21')]=(_0x4c99d0,_0x162790,_0x4b8896)=>{_0x4c99d0['session']['destroy'](_0x221cda=>{_0x162790[_0x1420('0x9')](this[_0x1420('0xa')]['controller']['send'](0xc8,_0x1420('0x22')));});};this['getSessionUser']=(_0x15d265,_0x1421a2,_0x1652e6)=>{if(typeof _0x15d265[_0x1420('0x23')][_0x1420('0x1e')]!==_0x1420('0x1f')){_0x1421a2[_0x1420('0x9')](this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0xc')](0xc8,_0x15d265[_0x1420('0x23')][_0x1420('0x1e')]));}else{_0x1421a2[_0x1420('0x9')](this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0xd')](0x1f4,_0x1420('0x24')));}};this[_0x1420('0x25')]=(_0x3a4dfb,_0x3b05b4,_0x2df625)=>{const _0x47812c=process[_0x1420('0x19')]['DOC_STORAGE_API_URL']!=null&&process[_0x1420('0x19')][_0x1420('0x26')]!='';if(this[_0x1420('0x4')][_0x1420('0x27')]=='mongo'){this[_0x1420('0xa')][_0x1420('0x28')]({'email':_0x3a4dfb[_0x1420('0x12')][_0x1420('0x29')]},(_0x5a685d,_0x48660d)=>{if(_0x5a685d){_0x3b05b4[_0x1420('0x9')](this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0xd')](0x1f4,_0x5a685d));}else if(_0x48660d){bcrypt['compare'](_0x3a4dfb[_0x1420('0x12')][_0x1420('0x2a')],_0x48660d[_0x1420('0x2a')],(_0x5a685d,_0x43fd27)=>{if(!_0x43fd27){_0x3b05b4[_0x1420('0x9')](this[_0x1420('0xa')]['controller'][_0x1420('0xd')](0x1f4,_0x1420('0x2b')));}else{_0x3b05b4[_0x1420('0x9')]({'token':jwt[_0x1420('0x2c')](_0x48660d,process[_0x1420('0x19')][_0x1420('0x2d')]),'user':_0x48660d});}});}else{_0x3b05b4['json'](this[_0x1420('0xa')][_0x1420('0xb')]['sendError'](0x1f4,_0x5a685d));}});}else if(this[_0x1420('0x4')][_0x1420('0x27')]==_0x1420('0xe')){_0x3a4dfb[_0x1420('0x23')]['login']==null?_0x3a4dfb[_0x1420('0x23')][_0x1420('0x25')]=[]:null;const _0x5f128b={};_0x5f128b[_0x3a4dfb[_0x1420('0x12')]['email']]={};let _0x101408=_0x3a4dfb[_0x1420('0x23')][_0x1420('0x25')][_0x1420('0x2e')]((_0x54b7c9,_0x5cdd2e,_0x55f455)=>{return _0x54b7c9[_0x3a4dfb[_0x1420('0x12')][_0x1420('0x29')]]!=null;});if(_0x101408==-0x1){_0x3a4dfb[_0x1420('0x23')][_0x1420('0x25')]['push'](_0x5f128b);_0x101408=_0x3a4dfb[_0x1420('0x23')][_0x1420('0x25')][_0x1420('0x2f')]-0x1;}_0x3a4dfb[_0x1420('0x23')][_0x1420('0x25')][_0x101408][_0x1420('0x30')]==null?_0x3a4dfb[_0x1420('0x23')][_0x1420('0x25')][_0x101408][_0x1420('0x30')]=0x0:null;this[_0x1420('0x16')](_0x3a4dfb,_0x3b05b4,_0x2df625)[_0x1420('0x14')](_0x831f03=>{if(_0x831f03[_0x1420('0x31')]==0x1f4){_0x3b05b4[_0x1420('0x9')](this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0xd')](0x1f4,_0x831f03));}else if(_0x831f03){if(!_0x831f03[_0x1420('0x32')]){bcrypt[_0x1420('0x33')](_0x3a4dfb[_0x1420('0x12')][_0x1420('0x2a')],_0x831f03[_0x1420('0x2a')],(_0x3748af,_0x3edf06)=>{if(!_0x3edf06){_0x3a4dfb[_0x1420('0x23')][_0x1420('0x25')][_0x101408][_0x1420('0x30')]++;if(_0x3a4dfb[_0x1420('0x23')][_0x1420('0x25')][_0x101408][_0x1420('0x30')]>=0x5){this[_0x1420('0x34')](_0x831f03,_0x101408,_0x3a4dfb,_0x3b05b4,_0x2df625);}else{_0x3b05b4[_0x1420('0x9')](this[_0x1420('0xa')]['controller'][_0x1420('0xd')](0x1f4,{'message':_0x1420('0x2b'),'attempt':_0x3a4dfb[_0x1420('0x23')][_0x1420('0x25')][_0x101408]['loginErrCount']}));}}else{_0x3a4dfb[_0x1420('0x23')]['login'][_0x101408][_0x1420('0x30')]=0x0;this[_0x1420('0x15')](_0x3a4dfb);if(!_0x831f03[_0x1420('0x35')]){this['activateAccount'](_0x831f03,_0x3a4dfb,_0x3b05b4,_0x2df625,_0x16ae81=>{_0x3a4dfb[_0x1420('0x23')]['user']=_0x16ae81[0x0];if(_0x47812c){this['docServerLogin'](_0x3a4dfb,_0x3b05b4,_0x2df625,_0x16ae81[0x0]);}else{_0x3b05b4['json']({'token':jwt[_0x1420('0x2c')](_0x16ae81[0x0],process[_0x1420('0x19')][_0x1420('0x2d')]),'user':_0x16ae81[0x0],'session':_0x3a4dfb[_0x1420('0x23')]});}});}else{_0x3a4dfb['session'][_0x1420('0x1e')]=_0x831f03;if(_0x47812c){this[_0x1420('0x36')](_0x3a4dfb,_0x3b05b4,_0x2df625,_0x831f03);}else{_0x3b05b4[_0x1420('0x9')]({'token':jwt['sign'](_0x831f03,process['env']['JWT_SECRET']),'user':_0x831f03,'session':_0x3a4dfb['session']});}}}});}else{_0x3b05b4[_0x1420('0x9')](this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0xd')](0x1a7,'Your\x20account\x20has\x20been\x20locked!\x20Please\x20contact\x20your\x20administrator\x20to\x20unlock\x20your\x20account!'));}}else{_0x3b05b4[_0x1420('0x9')](this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0xd')](0x1f4,'User\x20not\x20found!'));}});}};this['unlockAccount']=(_0x166ce5,_0x578898,_0x67323b)=>{let _0x497868={'body':{'email':_0x166ce5[_0x1420('0x37')][_0x1420('0x29')]}};this[_0x1420('0x16')](_0x497868,_0x578898,_0x67323b)[_0x1420('0x14')](_0x1ba884=>{if(_0x1ba884['errorCode']==0x1f4){_0x578898[_0x1420('0x9')](this['model'][_0x1420('0xb')]['sendError'](0x1f4,_0x1420('0x38')));}else if(_0x1ba884){if(_0x1ba884[_0x1420('0xf')]){const _0x5989c4={'body':{'locked':![],'where':{'id':_0x166ce5[_0x1420('0x12')]['userID']}}};this['model'][_0x1420('0xb')][_0x1420('0x10')][_0x1420('0x39')](_0x5989c4,_0x578898,_0x67323b,_0x12d482=>{if(_0x12d482){this[_0x1420('0x1c')]['send']({'from':process[_0x1420('0x19')][_0x1420('0x18')],'to':process['env'][_0x1420('0x18')],'subject':_0x1420('0x3a'),'html':_0x1420('0x3b')});_0x578898[_0x1420('0x9')](this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0xc')](0xc8,_0x1420('0x3c')));}});}else{_0x578898[_0x1420('0x9')](this[_0x1420('0xa')][_0x1420('0xb')]['sendError'](0x1f4,'Account\x20Restore\x20Failed!\x20Your\x20account\x20does\x20not\x20have\x20proper\x20privileges\x20to\x20unlock\x20account!\x20Please\x20contact\x20an\x20administrator!'));}}});};this[_0x1420('0x36')]=(_0x202770,_0x4e1b1d,_0x312c35,_0xdd911b)=>{return new Promise(_0x15111b=>{request({'url':process[_0x1420('0x19')][_0x1420('0x26')]+'/user/login','method':_0x1420('0x3d'),'json':!![],'headers':{'content-type':_0x1420('0x3e')},'body':{'email':process['env']['FILE_STORAGE_APP_EMAIL'],'password':process[_0x1420('0x19')][_0x1420('0x3f')]}},(_0x49473d,_0x36eeb2,_0x4ad6c8)=>{if(!_0x49473d&&_0x36eeb2['statusCode']==0xc8){_0x4e1b1d[_0x1420('0x9')]({'token':jwt[_0x1420('0x2c')](_0xdd911b,process[_0x1420('0x19')]['JWT_SECRET']),'docToken':_0x4ad6c8['token'],'user':_0xdd911b});}else{_0x4e1b1d[_0x1420('0x40')](0x1f4)[_0x1420('0xc')]({'message':'Unable\x20to\x20login\x20to\x20document\x20server'});}});});};this[_0x1420('0x41')]=(_0xa9f114,_0x369315,_0x580246)=>{this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0x42')](this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0x43')](_0xa9f114),(_0x355e12,_0x533112)=>{this[_0x1420('0x16')](_0xa9f114,_0x369315,_0x580246)[_0x1420('0x14')](_0x2c3af5=>{_0xa9f114[_0x1420('0x37')]==null?_0xa9f114[_0x1420('0x37')]=_0x533112:null;if(!_0x2c3af5[_0x1420('0x31')]){const _0x3c32d8=_0xa9f114[_0x1420('0x12')]['oldPassword'];const _0x278945=_0xa9f114[_0x1420('0x12')][_0x1420('0x2a')];if(_0x3c32d8&&_0x3c32d8!=null){bcrypt['compare'](_0xa9f114[_0x1420('0x12')][_0x1420('0x44')],_0x2c3af5[_0x1420('0x2a')],(_0x355e12,_0x193cea)=>{if(!_0x193cea){_0x369315[_0x1420('0x9')](this[_0x1420('0xa')][_0x1420('0xb')]['sendError'](0x1f4,'Incorrect\x20password!'));}else{const _0x38b489=_0xa9f114['reqUser']&&_0xa9f114[_0x1420('0x37')]!=null?_0xa9f114['reqUser']['email']===_0x2c3af5['email']&&parseInt(_0xa9f114[_0x1420('0x8')]['id'],null)===parseInt(_0xa9f114[_0x1420('0x37')]['id'],null)||_0x2c3af5[_0x1420('0xf')]:![];if(_0x38b489){if(_0x278945){_0xa9f114['body']['email']?delete _0xa9f114[_0x1420('0x12')][_0x1420('0x29')]:null;_0xa9f114[_0x1420('0x12')][_0x1420('0x45')]=_0x1420('0x46');_0xa9f114[_0x1420('0x12')][_0x1420('0x47')]=0x0;_0xa9f114[_0x1420('0x12')][_0x1420('0x32')]=![];this['model'][_0x1420('0xb')][_0x1420('0x10')][_0x1420('0x48')](_0xa9f114,_0x369315,_0x580246,_0x193cea=>{if(_0x193cea){_0x369315[_0x1420('0x9')](this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0xc')](0xc8,_0x1420('0x49')));this[_0x1420('0x1c')][_0x1420('0xc')]({'from':process[_0x1420('0x19')][_0x1420('0x18')],'to':process[_0x1420('0x19')][_0x1420('0x18')],'subject':_0x1420('0x4a'),'html':_0x1420('0x4b')});}});}else{_0x369315['json'](this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0xd')](0x1f4,'Password\x20must\x20be\x20defined!'));}}else{_0x369315[_0x1420('0x9')](this['model'][_0x1420('0xb')]['sendError'](0x1f4,_0x1420('0x4c')));}}});}else{_0x369315[_0x1420('0x9')](this['model']['controller'][_0x1420('0xd')](0x191,_0x1420('0x4d')));}}else if(_0x2c3af5[_0x1420('0x31')]==0x1f4){_0x369315[_0x1420('0x9')](this[_0x1420('0xa')][_0x1420('0xb')]['sendError'](0x191,'user\x20does\x20not\x20exist!'));}});});};this[_0x1420('0x4e')]=(_0x345536,_0x2919ed,_0x5c802a)=>{this[_0x1420('0x16')](_0x345536,_0x2919ed,_0x5c802a)[_0x1420('0x14')](_0x32cf3b=>{if(!_0x32cf3b[_0x1420('0x31')]){const _0x885b48=_0x345536[_0x1420('0x12')][_0x1420('0x4f')];const _0x645510=_0x345536[_0x1420('0x12')][_0x1420('0x29')]&&_0x345536[_0x1420('0x12')][_0x1420('0x29')]!=null?_0x345536[_0x1420('0x12')][_0x1420('0x29')]===_0x32cf3b[_0x1420('0x29')]:![];let _0x5d55aa=![];jwt['verify'](_0x345536['body']['token'],process[_0x1420('0x19')]['JWT_SECRET'],(_0x2363e6,_0x54ed67)=>{if(_0x2363e6){_0x5d55aa=!![];}if(_0x645510&&!_0x5d55aa){if(_0x885b48){this[_0x1420('0x15')](_0x345536);_0x345536['body']={'password':_0x345536[_0x1420('0x12')][_0x1420('0x4f')],'password_reset_at':_0x1420('0x46'),'email_reminder_count':0x0,'locked':![],'where':{'id':_0x32cf3b['id']}};this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0x10')][_0x1420('0x39')](_0x345536,_0x2919ed,_0x5c802a,_0x56eff0=>{if(_0x56eff0){this[_0x1420('0x1c')]['send']({'from':process[_0x1420('0x19')]['TEST_EMAIL'],'to':process[_0x1420('0x19')][_0x1420('0x18')],'subject':_0x1420('0x50'),'html':'<p>You\x20have\x20recovered\x20your\x20password!\x20Please\x20Login!</p>'});_0x2919ed[_0x1420('0x9')](this['model'][_0x1420('0xb')]['send'](0xc8,_0x56eff0));}});}else{_0x2919ed['json'](this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0xd')](0x1f4,_0x1420('0x51')));}}else{_0x2919ed[_0x1420('0x9')](this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0xd')](0x1f4,_0x1420('0x52')));}});}else if(_0x32cf3b[_0x1420('0x31')]==0x1f4){_0x2919ed[_0x1420('0x9')](this[_0x1420('0xa')]['controller'][_0x1420('0xd')](0x191,_0x1420('0x53')));}});};this[_0x1420('0x54')]=(_0x1197af,_0x579436,_0x46b013)=>{this[_0x1420('0x16')](_0x1197af,_0x579436,_0x46b013)[_0x1420('0x14')](_0x156287=>{if(!_0x156287[_0x1420('0x31')]){this[_0x1420('0x1c')][_0x1420('0xc')]({'from':process[_0x1420('0x19')][_0x1420('0x18')],'to':process[_0x1420('0x19')][_0x1420('0x18')],'subject':_0x1420('0x55'),'html':_0x1420('0x56')+process[_0x1420('0x19')]['CLIENT_URL']+_0x1420('0x57')+jwt['sign']({'email':_0x156287[_0x1420('0x29')],'id':_0x156287['id']},process[_0x1420('0x19')][_0x1420('0x2d')],{'expiresIn':0x3c*0x1e})+_0x1420('0x58')},_0x470418=>{_0x579436[_0x1420('0x9')](this['model']['controller']['send'](0xc8,[]));});}else if(_0x156287[_0x1420('0x31')]==0x1f4){_0x579436[_0x1420('0x9')](this['model'][_0x1420('0xb')][_0x1420('0xd')](0x191,'user\x20does\x20not\x20exist!'));}});};this[_0x1420('0x1c')]=new mailer_1[(_0x1420('0x59'))]();}[_0x1420('0x15')](_0x224a2e){_0x224a2e[_0x1420('0x5a')]==null?_0x224a2e['secretFields']=this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0x5b')]():null;return _0x224a2e;}[_0x1420('0x16')](_0x36ebbe,_0x3fd4f8,_0x4049d0){return new Promise(_0x9ad4f2=>{if(this[_0x1420('0x4')][_0x1420('0x27')]==_0x1420('0x7')){this[_0x1420('0xa')]['findOne']({'email':_0x36ebbe[_0x1420('0x12')][_0x1420('0x29')]},(_0x4d88c8,_0x18e490)=>{if(_0x4d88c8){_0x9ad4f2(_0x4d88c8);}else if(_0x18e490){_0x9ad4f2(_0x18e490);}else{_0x9ad4f2({'errorCode':0x1f4,'errorMessage':_0x1420('0x5c')});}});}else if(this['options'][_0x1420('0x27')]==_0x1420('0xe')){const _0xb59d37={'get':['*'],'table':this[_0x1420('0x5')],'where':{'email':_0x36ebbe[_0x1420('0x12')]['email']}};this['model'][_0x1420('0xb')][_0x1420('0x10')][_0x1420('0x5d')](Object[_0x1420('0x11')](_0x36ebbe[_0x1420('0x12')],{'body':_0xb59d37}),_0x3fd4f8,_0x4049d0,_0x1dbd16=>{if(_0x1dbd16[_0x1420('0x2f')]==0x0){_0x9ad4f2({'errorCode':0x1f4,'errorMessage':_0x1420('0x5c')});}else{_0x9ad4f2(_0x1dbd16[0x0]);}});}});}[_0x1420('0x5e')](_0x966fa5,_0x47027a,_0x54058f,_0x433a39,_0x58d854){_0x47027a[_0x1420('0x12')]={'is_activated':!![],'where':{'id':_0x966fa5['id']}};this[_0x1420('0xa')][_0x1420('0xb')]['psql']['updateSet'](_0x47027a,_0x54058f,_0x433a39,_0x42b4e9=>{if(_0x42b4e9){this[_0x1420('0x1c')][_0x1420('0xc')]({'from':process[_0x1420('0x19')][_0x1420('0x18')],'to':process['env']['TEST_EMAIL'],'subject':'Change\x20Password!','html':_0x1420('0x4b')});_0x58d854(_0x42b4e9);}});}[_0x1420('0x34')](_0x2eaeb6,_0x3e1329,_0x267656,_0x470ea3,_0x24ab16){_0x267656[_0x1420('0x12')]={'locked':!![],'where':{'id':_0x2eaeb6['id']}};this[_0x1420('0xa')][_0x1420('0xb')][_0x1420('0x10')][_0x1420('0x39')](_0x267656,_0x470ea3,_0x24ab16,_0x1fbb86=>{if(_0x1fbb86){_0x267656[_0x1420('0x23')][_0x1420('0x25')][_0x3e1329]['loginErrCount']=0x0;this[_0x1420('0x1c')][_0x1420('0xc')]({'from':process[_0x1420('0x19')][_0x1420('0x18')],'to':process[_0x1420('0x19')][_0x1420('0x18')],'subject':_0x1420('0x5f'),'html':_0x1420('0x60')+_0x2eaeb6[_0x1420('0x29')]+_0x1420('0x61')});_0x470ea3['json'](this[_0x1420('0xa')]['controller'][_0x1420('0xd')](0x1a7,'Your\x20account\x20has\x20been\x20locked!\x20Please\x20contact\x20your\x20administrator\x20to\x20unlock\x20your\x20account!'));}});}}exports['Authentication']=Authentication;
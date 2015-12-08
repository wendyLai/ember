import Ember from 'ember';
import Func from '../models/func';
import Kind from '../models/kind';

/*三级导航*/

var kind01 = Kind.create({
	name:'路由状态',
	id  :'1'
});

var kind02 = Kind.create({
	name:'无线设备',
	id  :'2'
});

var kind03 = Kind.create({
	name:'外接USB设备',
	id  :'3'
});

var kind04 = Kind.create({
	name:'在线设备',
	id  :'4'
});

var kind05 = Kind.create({
	name:'历史设备',
	id  :'5'
});

var kind06 = Kind.create({
	name:'黑名单',
	id  :'6'
});

var kind07 = Kind.create({
	name:'外接USB设备',
	id  :'7'
});

var kind08 = Kind.create({
	name:'互联网(WAN)设置',
	id  :'8'
});

var kind09 = Kind.create({
	name:'局域网(WAN)设置',
	id  :'9'
});

var kind10 = Kind.create({
	name:'小悦网关助手',
	id  :'10'
});

var kind11 = Kind.create({
	name:'无线(wifi)设置',
	id  :'11'
});

var kind12 = Kind.create({
	name:'路由器管理密码重置',
	id  :'12'
});

var kind13 = Kind.create({
	name:'系统版本更新',
	id  :'13'
});

var kind14 = Kind.create({
	name:'恢复出厂设置',
	id  :'14'
});

var kind15 = Kind.create({
	name:'总流量统计',
	id  :'15'
});

var kind16 = Kind.create({
	name:'互联网连接状态',
	id  :'16'
});

var kind17 = Kind.create({
	name:'局域网连接状态',
	id  :'17'
});

var kind18 = Kind.create({
	name:'无线运行状态',
	id  :'18'
});

/*一级导航*/
var func1 = Func.create({
	name:'路由状态',
	e_name:'routestatus',
	kinds:[kind01,kind02,kind03]
});

var func2 = Func.create({
	name:'设备连接管理器',
	e_name:'devicemanager',
	kinds:[kind04,kind05,kind06,kind07]
});

var func3 = Func.create({
	name:'互联网WAN设置',
	e_name:'WANsetting',
	kinds:[kind08]
});

var func4 = Func.create({
	name:'局域网LAN设置',
	e_name:'LANsetting',
	kinds:[kind09]
});

var func5 = Func.create({
	name:'小悅网关助手',
	e_name:'gatewayhelper',
	kinds:[kind10]
});

var func6 = Func.create({
	name:'无线设置',
	e_name:'wirelesssetting',
	kinds:[kind11]
});

var func7 = Func.create({
	name:'系统设置',
	e_name:'systemsetting',
	kinds:[kind12,kind13,kind14]
});

var func8 = Func.create({
	name:'运行状态',
	e_name:'runningstatus',
	kinds:[kind15,kind16,kind17,kind18]
});


var funcs=[func1,func2,func3,func4,func5,func6,func7,func8];

export default Ember.Route.extend({
	model: function() {
		return funcs;
	}/*,
	afterModel: function(model) {
		var funcs = model;
		if (funcs.num === 1) {
			this.transitionTo('funcs.func', bands.get('firstObject'));
		}
	}*/
});

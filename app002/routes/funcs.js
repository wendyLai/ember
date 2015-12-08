import Ember from 'ember';
import Func from '../models/func';
import Kind from '../models/kind';
import Row from '../models/row';

/*三级导航*/

var kind111 = Kind.create({
	name:'路由状态',
	id  :'1'
});

var kind121 = Kind.create({
	name:'无线设备',
	id  :'2'
});

var kind131 = Kind.create({
	name:'外接USB设备',
	id  :'3'
});

var kind211 = Kind.create({
	name:'在线设备',
	id  :'4'
});

var kind212 = Kind.create({
	name:'历史设备',
	id  :'5'
});

var kind213 = Kind.create({
	name:'黑名单',
	id  :'6'
});

var kind221 = Kind.create({
	name:'外接USB设备',
	id  :'7'
});

var kind311 = Kind.create({
	name:'互联网(WAN)设置',
	id  :'8'
});

var kind411 = Kind.create({
	name:'局域网(WAN)设置',
	id  :'9'
});

var kind511 = Kind.create({
	name:'小悦网关助手',
	id  :'10'
});

var kind611 = Kind.create({
	name:'无线(wifi)设置',
	id  :'11'
});

var kind711 = Kind.create({
	name:'路由器管理密码重置',
	id  :'12'
});

var kind721 = Kind.create({
	name:'系统版本更新',
	id  :'13'
});

var kind731 = Kind.create({
	name:'恢复出厂设置',
	id  :'14'
});

var kind811 = Kind.create({
	name:'总流量统计',
	id  :'15'
});

var kind821 = Kind.create({
	name:'互联网连接状态',
	id  :'16'
});

var kind831 = Kind.create({
	name:'局域网连接状态',
	id  :'17'
});

var kind841 = Kind.create({
	name:'无线运行状态',
	id  :'18'
});

/*二级导航*/

var row11 = Row.create({
	num:'1',
	kinds:[kind111]
});

var row12 = Row.create({
	num:'2',
	kinds:[kind121]
});

var row13 = Row.create({
	num:'3',
	kinds:[kind131]
});

var row21 = Row.create({
	num:'1',
	kinds:[kind211,kind212,kind213]
});

var row22 = Row.create({
	num:'2',
	kinds:[kind221]
});

var row31 = Row.create({
	num:'1',
	kinds:[kind311]
});

var row41 = Row.create({
	num:'1',
	kinds:[kind411]
});

var row51 = Row.create({
	num:'1',
	kinds:[kind511]
});

var row61 = Row.create({
	num:'1',
	kinds:[kind611]
});

var row71 = Row.create({
	num:'1',
	kinds:[kind711]
});

var row72 = Row.create({
	num:'2',
	kinds:[kind721]
});

var row73 = Row.create({
	num:'3',
	kinds:[kind731]
});
var row81 = Row.create({
	num:'1',
	kinds:[kind811]
});

var row82 = Row.create({
	num:'2',
	kinds:[kind821]
});

var row83 = Row.create({
	num:'3',
	kinds:[kind831]
});

var row84 = Row.create({
	num:'4',
	kinds:[kind841]
});

/*一级导航*/
var func1 = Func.create({
	name:'路由状态',
	rows:[row11,row12,row13]
});

var func2 = Func.create({
	name:'设备连接管理器',
	rows:[row21,row22]
});

var func3 = Func.create({
	name:'互联网WAN设置',
	rows:[row31]
});

var func4 = Func.create({
	name:'局域网LAN设置',
	rows:[row41]
});

var func5 = Func.create({
	name:'小悅网关助手',
	rows:[row51]
});

var func6 = Func.create({
	name:'无线设置',
	rows:[row61]
});

var func7 = Func.create({
	name:'系统设置',
	rows:[row71,row72,row73]
});

var func8 = Func.create({
	name:'运行状态',
	rows:[row81,row82,row83]
});


var funcs=[func1,func2,func3,func4,func5,func6,func7,func8];

export default Ember.Route.extend({
	model: function() {
		return funcs;
	},
	afterModel: function(model) {
		var funcs = model;
		if (funcs.num === 1) {
			this.transitionTo('funcs.func', bands.get('firstObject'));
		}
	}
});

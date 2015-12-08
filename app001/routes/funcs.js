import Ember from 'ember';
import Func from '../models/func';
import Bsetting from '../models/bigsetting';
import Setting from '../models/setting';

/*三级导航*/

var setting111 = Setting.create({
	name:'路由状态'
});

var setting121 = Setting.create({
	name:'无线设备'
});

var setting131 = Setting.create({
	name:'外接USB设备'
});

var setting211 = Setting.create({
	name:'在线设备'
});

var setting212 = Setting.create({
	name:'历史设备'
});

var setting213 = Setting.create({
	name:'黑名单'
});

var setting221 = Setting.create({
	name:'外接USB设备'
});

var setting311 = Setting.create({
	name:'互联网(WAN)设置'
});

var setting411 = Setting.create({
	name:'局域网(WAN)设置'
});

var setting511 = Setting.create({
	name:'小悦网关助手'
});

var setting611 = Setting.create({
	name:'无线(wifi)设置'
});

var setting711 = Setting.create({
	name:'路由器管理密码重置'
});

var setting721 = Setting.create({
	name:'系统版本更新'
});

var setting731 = Setting.create({
	name:'恢复出厂设置'
});

var setting811 = Setting.create({
	name:'总流量统计'
});

var setting821 = Setting.create({
	name:'互联网连接状态'
});

var setting831 = Setting.create({
	name:'局域网连接状态'
});

var setting841 = Setting.create({
	name:'无线运行状态'
});

/*二级导航*/

var bsetting11 = Bsetting.create({
	length:'1',
	setting:[setting111]
});

var bsetting12 = Bsetting.create({
	length:'2',
	setting:[setting121]
});

var bsetting13 = Bsetting.create({
	length:'3',
	setting:[setting131]
});

var bsetting21 = Bsetting.create({
	length:'1',
	setting:[setting211,setting212,setting213]
});

var bsetting22 = Bsetting.create({
	length:'2',
	setting:[setting221]
});

var bsetting31 = Bsetting.create({
	length:'1',
	setting:[setting311]
});

var bsetting41 = Bsetting.create({
	length:'1',
	setting:[setting411]
});

var bsetting51 = Bsetting.create({
	length:'1',
	setting:[setting511]
});

var bsetting61 = Bsetting.create({
	length:'1',
	setting:[setting611]
});

var bsetting71 = Bsetting.create({
	length:'1',
	setting:[setting711]
});

var bsetting72 = Bsetting.create({
	length:'2',
	setting:[setting721]
});

var bsetting73 = Bsetting.create({
	length:'3',
	setting:[setting731]
});
var bsetting81 = Bsetting.create({
	length:'1',
	setting:[setting811]
});

var bsetting82 = Bsetting.create({
	length:'2',
	setting:[setting821]
});

var bsetting83 = Bsetting.create({
	length:'3',
	setting:[setting831]
});

var bsetting84 = Bsetting.create({
	length:'4',
	setting:[setting841]
});

/*一级导航*/
var func_no1 = Func.create({
	name:'路由状态',
	bsetting:[bsetting11,bsetting12,bsetting13]
});

var func_no2 = Func.create({
	name:'设备连接管理器',
	bsetting:[bsetting21,bsetting22]
});

var func_no3 = Func.create({
	name:'互联网WAN设置',
	bsetting:[bsetting31]
});

var func_no4 = Func.create({
	name:'局域网LAN设置',
	bsetting:[bsetting41]
});

var func_no5 = Func.create({
	name:'小悅网关助手',
	bsetting:[bsetting51]
});

var func_no6 = Func.create({
	name:'无线设置',
	bsetting:[bsetting61]
});

var func_no7 = Func.create({
	name:'系统设置',
	bsetting:[bsetting71,bsetting72,bsetting73]
});

var func_no8 = Func.create({
	name:'运行状态',
	bsetting:[bsetting81,bsetting82,bsetting83]
});


var funcs=[func_no1,func_no2,func_no3,func_no4,func_no5,func_no6,func_no7,func_no8];
//var bsettings=[bsetting11,bsetting12,bsetting13,bsetting21,bsetting22,bsetting31,bsetting41,bsetting51,bsetting61,bsetting71,bsetting72,bsetting73,bsetting81,bsetting82,bsetting83,bsetting84];

export default Ember.Route.extend({
	model: function() {
		return funcs;
	},
	afterModel: function(model) {
		var funcs = model;
		if (funcs.length === 1) {
			this.transitionTo('funcs.func', bands.get('firstObject'));
		}
	}
});

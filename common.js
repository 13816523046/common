const common = {
	getParamFromURL:function(name){//获取具体参数，通过URL
        let url = window.location.href;
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
  	}
}
window.common = common;
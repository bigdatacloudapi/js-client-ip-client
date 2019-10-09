;(function(_w,$) {
	var BDCClientIp=function(endpoint,server) {
		this.endpoint=endpoint ? endpoint : 'client-ip';
		this.server=server ? server : 'api.bigdatacloud.net';
	};
	BDCClientIp.prototype={
		getClientIp:function(cb) {
			var _this=this;
			if (!cb) return false;
			this.callApi(function(result) {
				cb(result);
			},function(err) {
				console.error(err);
				cb(false);
			});
		},
		callApi:function(cb) {
			var xhr = new XMLHttpRequest()
			xhr.open(
				'GET',
				'https://'+this.server+'/data/'+this.endpoint,
				true
				);
			xhr.onreadystatechange = function() {
				if (this.readyState === XMLHttpRequest.DONE) {
					if (this.status === 200) {
						try {
							cb(JSON.parse(this.responseText))
						} catch (e) {
							cb(false)
						}
					} else {
						try {
							var result=JSON.parse(this.responseText);
							console.error(result,this.status);
							cb(false);
						} catch (e) {
							console.error(this.responseText,this.status);
							cb(false);
						}
					}
				}
			}
			xhr.send();
		}
	}

	_w.BDCClientIp=BDCClientIp;
	_w.BDCClientIpClient= new BDCClientIp();
	_w.getBDCClientIp=BDCClientIpClient.getClientIp.bind(BDCClientIpClient);
})(window);
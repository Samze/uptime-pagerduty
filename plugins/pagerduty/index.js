var CheckEvent = require('../../models/checkEvent');
var PagerDuty = require('pagerduty');

exports.initWebApp = function(options) {
  	var config = options.config.pagerduty;
	var pager = new PagerDuty({serviceKey:config.serviceKey});

 	CheckEvent.on('afterInsert', function(checkEvent) {
	    checkEvent.findCheck(function(err, check) {
	    	console.log(check);
	    	console.log(checkEvent);
	      	if(!check.isUp){
			    pager.create({
					description:check.name,
					details:checkEvent.message,
					incidentKey: checkEvent._id,
					callback: function(err1,response1){
						if(err1){
							console.log(err1);
						} else {
							console.log(response1);
						}
					}
				});
			}
    	});
  });
}
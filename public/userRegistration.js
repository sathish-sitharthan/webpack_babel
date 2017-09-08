


import FalcorDataSource from 'falcor-http-datasource';

function showRating() {	
	
	console.log("I am in here");
	 "use strict";	
	 console.log("Called ...11"); 
	 class PublishingAppDataSource extends FalcorDataSource {	
	 	  onBeforeRequest ( config ) {
	 	    const token = "dsfdsfdsfdsfdsfsdf";
	 	    const username = "sathish";
	 	    const role = "admin";

	 	    if (token && username && role) {
	 	      config.headers['token'] = token;
	 	      config.headers['username'] = username;
	 	      config.headers['role'] = role;
	 	    }
	 	  }
	 	}
	 console.log("Called ...22"); 
		const model = new falcor.Model({			
		  source: new PublishingAppDataSource('/model.json')
		});

		//module.exports=model;
	 
    	console.log("Called ..."); 
	 
	/* var model = new falcor.Model({
         source: new falcor.HttpDataSource('/model.json'),
     }); */	
    
    	 model.get(["getRate"]).
    	 then(function (json){
			 console.log(JSON.stringify(json, null,5));
			 document.getElementById('testDiv').innerText = JSON.stringify(json,null,5);
		 })    
		
    }

showRating();
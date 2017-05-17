var Mock = require('../lib/mock.js').Mock;
Mock.mock(/test/, {
    'age': 100,
    "list|100|1000": [
    	{
    		"name":"@cname",
    		"age|1-100": 1
    	}
    ]
});
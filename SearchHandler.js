import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View } from 'react-native';
import Timestamp from 'react-timestamp';


var AWSSignature = require('react-native-aws-signature');
var awsSignature = new AWSSignature();
// let credentials = {
// 	SecretKey: 'kdeUEfKKZc/yEP4hBd0wxOUugSDSJH0AtEg6Fy44',
// 	AccessKeyId: 'AKIAJP5ZZJSE2X76LRBQ'
// };

// // var options = {
// // 	path: '/?Param2=value2&Param1=value1',
// //     method: 'get',
// //     service: 'AWSECommerceService',
// //     headers: {
// //         'X-Amz-Date': awsSignature._formatDateTime('2015-02-09T10:00:00Z'),
// //         'host': 'http://webservices.amazon.com/onca/xml?'
// //     },
// // 	region: 'us-east-1',
// // 	body: ''
// // };

// awsSignature.setParams(options);
// var signature = awsSignature.getSignature();
// var authorization = awsSignature.getAuthorizationHeader();




export default class SearchHandler extends Component {
	constructor(props) {
		super(props)
		this.state = {
			credentials: {
				SecretKey: 'kdeUEfKKZc/yEP4hBd0wxOUugSDSJH0AtEg6Fy44',
				AccessKeyId: 'AKIAJP5ZZJSE2X76LRBQ'
			}
		}	
		this.awsSignature = new AWSSignature();
	}

	componentWillMount() {
		this.getItems();
	}


	// Convert parameter JSON into string
	queryParams(params) {
	    return Object.keys(params)
	        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
	        .join('&');
	}

	getItems() {
		var params = {
			"Service": "AWSECommerceService",
			"Operation": "ItemSearch",
		    "AWSAccessKeyId": "AKIAJP5ZZJSE2X76LRBQ",
		    "AssociateTag": "bulkbuybuddie-20",
		    "SearchIndex": "All",
		    "Keywords": "bottle",
		    "ResponseGroup": "Images,ItemAttributes"
		}
		var esc = encodeURIComponent;
		var query = Object.keys(params)
			.map(k => esc(k) + '=' + esc(params[k]))
			.join('&')

		var url = 'http://webservices.amazon.com/onca/xml?' + query

		return fetch(url, {
			method: 'GET',
			headers: {
				"SecretKey": 'kdeUEfKKZc/yEP4hBd0wxOUugSDSJH0AtEg6Fy44',
				"AccessKeyId": 'AKIAJP5ZZJSE2X76LRBQ',
				"AssociateTag": "bulkbuybuddie-20"
			}})
			.then(function(data) {
				console.log(data);
			})
			.catch(function(error) {
				console.log(error);
			});
 	}

	checkStatus(response) {
		if (response.ok) {
			return response;
		} else {
			let error = new Error(response.statusText);
			error.response = response;
			throw error;
		}
	}
	render() {
	    return (
	      <View style={style.container}>
	        <Text style={style.description}>Hello Janis!</Text>
	      </View>
	    );
	 }
}

const style = StyleSheet.create({
    header: {
        ...Platform.select({
           android: {
           backgroundColor: '#e1e8ee',
           }
        })
    },
    indicator: {
        backgroundColor: '#0B5091'
    },
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    description: {
      fontSize: 38,
      textAlign: 'center',
      color: 'navy',
      marginTop: 10,
  },
})
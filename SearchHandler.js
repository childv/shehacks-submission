import React, { Component } from 'react';
import { StyleSheet, Platform, Button, View, AsyncStorage } from 'react-native';
import Timestamp from 'react-timestamp';
import AWSSignature from 'react-native-aws-signature';


export default class SearchHandler extends Component {
	constructor(props) {
		super(props)
		this.state = {
			credentials: {
				SecretKey: 'kdeUEfKKZc/yEP4hBd0wxOUugSDSJH0AtEg6Fy44',
				AccessKeyId: 'AKIAJP5ZZJSE2X76LRBQ'
			},
			data:[]
		}
	}

	componentDidMount() {
		AsyncStorage.getItem("myKey").then((value) => {
			this.setState({"myKey": value});
		}).done();
	}

	/*
	Function to generate GET request to Amazon's ItemSearch API
	How to write a request: https://docs.aws.amazon.com/AWSECommerceService/latest/DG/rest-signature.html#rest_detailedexample
	ERROR - Signature Invalid
	*/
	get() {
		console.log("CALLING API!");

		let awsSignature = new AWSSignature();
		let auth_date = new Date().toISOString();

		// DON'T LOOK IT'S PRIVATE!!
		let credentials = {
			SecretKey: 'kdeUEfKKZc/yEP4hBd0wxOUugSDSJH0AtEg6Fy44',
			AccessKeyId: 'AKIAJP5ZZJSE2X76LRBQ'
		};

		// Params MUST be sorted in ASCII order
		var params = {
			"AWSAccessKeyId": "AKIAJP5ZZJSE2X76LRBQ",
			"AssociateTag": "bulkbuybuddie-20",
			"Keywords": "bottle",
			"Operation": "ItemSearch",
		    "ResponseGroup": "Images,ItemAttributes",
		    "SearchIndex": "All",
			"Service": "AWSECommerceService",
		    "Timestamp": auth_date
		}

		var esc = encodeURIComponent;
		var query = Object.keys(params)
			.map(k => esc(k) + '=' + esc(params[k]))
			.join('&')

		console.log("Sorted query: ", query)

		var url = 'http://webservices.amazon.com/onca/xml?' + query

		let auth_header = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'dataType': 'json',
			'X-Amz-Date': auth_date,
			'host': 'webservices.amazon.com'
		}

		var auth_options = {
			path: query,
			method: 'GET',
			service: 'AWSECommerceService',
			headers: {
				'X-Amz-Date': auth_date,
				'host': 'webservices.amazon.com'
			},
			region: 'us-east-1',
			body: '',
			credentials
		};

		awsSignature.setParams(auth_options);

		var authorization = awsSignature.getAuthorizationHeader();
		var signature = awsSignature.getSignature();
		auth_header['Authorization'] = authorization['Authorization']

		let option = Object.assign({
			method: 'GET',
			headers: auth_header
		});

		// Add signature
		url = url + '&Signature=' + signature
		

		//console.log("Authorization:", authorization)
		//console.log("Authorized headers: ", auth_header['Authorization'])
		//console.log("Signature ", auth_header['Signature'])
		console.log("My Signature ", signature)

		//Example URL: "http://webservices.amazon.com/onca/xml?AWSAccessKeyId=AKIAJP5ZZJSE2X76LRBQ&AssociateTag=bulkbuybuddie-20&Keywords=bottle&Operation=ItemSearch&ResponseGroup=Images%2CItemAttributes&SearchIndex=All&Service=AWSECommerceService&Timestamp=2018-01-28T01%3A56%3A30.000Z&Signature=AACszmJo6zyQMGnDNLlOfNYokkFwZqeI5DqbLHrQzS8%3D"
		// Confirm url here: http://associates-amazon.s3.amazonaws.com/signed-requests/helper/index.html
		//return fetch("http://webservices.amazon.com/onca/xml?AWSAccessKeyId=AKIAJP5ZZJSE2X76LRBQ&AssociateTag=bulkbuybuddie-20&Keywords=bottle&Operation=ItemSearch&ResponseGroup=Images%2CItemAttributes&SearchIndex=All&Service=AWSECommerceService&Timestamp=2018-01-28T04%3A57%3A08.001Z&Signature=D1gIGIaIIeIxonZFHHSR%2F70Ygt5CAQbuKSJ7wVDbzCw%3D")
		return fetch(url)
			.then(function(data) {
				console.log(data);
			})
			.catch(function(error) {
				console.log(error);
			});	
	}


	// Convert parameter JSON into string
	queryParams(params) {
	    return Object.keys(params)
	        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
	        .join('&');
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
	        <Button onPress={this.get} title="Call API" />
	      </View>
	    );
	}

	saveData(key, value) {
		AsyncStorage.setItem(key, value);
		this.setState({"myKey": value});
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
      fontSize: 20,
      textAlign: 'center',
      color: 'navy',
      marginTop: 10,
  },
})
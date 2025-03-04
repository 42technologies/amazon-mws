1.0.0
    - update to lockfile v2
    - move mocha/chai to dev dependencies

0.0.28
    - Stop support for the lower than NodeJs 8 version
    - Remove old examples
    - Add the vscode config to ensure code standard on different PRs
    - Remove the example
    - Clean the README.md file
    - Add the Result at the top of the response
    - Add support for the easyShip API
    - Add support for the shipmentInvoicing API

0.0.27
    - Bug Fix Read Content Type
    - Set HTTP Proxy Dynamically
    - Remove bluebird from dependency

0.0.26
    - Bug Fix CSV Multiline issue
    - Correct TypeScript usage

0.0.25
    - Modify Travis version to check up to node 12
    - Added proxy agent
    - Modify test cases to use host to cross across different region
    - Add example for the read stream
    - Add example for the feeds upload

0.0.24
  - Add Subscription in Typescript definition
  - Correct Documentation
  - Allow user to change response type into XML format
  - Allow user to change content type for request

0.0.23
  - Bug Fix for Feed Result charset

0.0.22
  - Bug Fix Default value for XML parsing
  - Add Support for the Subscription APIs, Recommendations API
  - Add Example for CreateSubscription, DeleteSubscription, ListSubscriptions, RegisterDestination
  - Add Example for GetLastUpdatedTimeForRecommendations, ListRecommendations

0.0.21
  - Handle for non content type responses
  - Bug fix for GetMyPriceForASIN and similar other products API
  - Add example, test case for GetMyPriceForASIN
  - Add test case for failure/error responses
  - Add support for RequestReport API
  - Add example for GetMyFeesEstimate in Products
  - Add force check for the XML string

0.0.19
  - Correct lint and increase test case timeout
  - Added Status Code in Error Response.
  - Added Status Code in Success Response
  - Remove OS Dependent Modules
  - Use the light version of the iconv
  - Fix Tab delimited CSV Report
  - Removes node-expat & xml2json
  - Add xml parser package as xml2js

0.0.18
  - Add basic Test cases
  - Add jshint lint checking
  - Code Reformatting
  - Add support for parsing special characters
  - Add support for API which return data as binary file format
  - Extend support for GetLowestPricedOffersForASIN, GetLowestPricedOffersForSKU and other product methods
  - Added test cases for Feeds, Finances, Fulfillment Inventory, Fulfillment Outbound Shipment, Fulfillment Inbound Shipment, Products, Orders, Sellers

0.0.17
  - Extend support for TypeScript typed definition : feeds, finances, fulfillmentInboundShipment, fulfillmentInventory, fulfillmentOutboundShipment, merchantFulfillment, orders, products, sellers

0.0.16
  - Added example of MerchantFulfillment
  - Added support for the comma delimiter report
  - Added example of Comma delimiter report

0.0.15
  - Bug fixed ResponseMetadata (RequestId) in success response
  - Added throttling details in non-xml response

0.0.14
  - Clean code
  - Added typeScript example of reports
  - Additional error & exception handling
  - Add the support for CreateFulfillmentOrder action
  - Added typeScript example of reports
  - Added javaScript example of Filter Orders
  - Added javaScript example of override/set the default options before making the request.
  - Bug Fix : Parallel request
  - Update to latest packages and remove deprecate packages
  - Add support upto NODE 8
  - Added ListOrderItems example of Orders

0.0.13 December 08, 2017
  - Add the MWS Version Detail
  - Additional error & exception handling

0.0.12 November 25, 2017
  - Enhance SubmitFeed API
  - Add GetFeedSubmissionResult Example
  - Add FulfillmentOutboundShipment Feature
  - Add List All Fulfillment Orders API

0.0.11
  - ListInventorySupply Bug fix
  - Add SubmitFeed API
  - LICENCE Details

0.0.10
  - Update dependency, Add Promise example

0.0.9 July 31, 2017
  - Added ResponseMetadata (RequestId) in success response

0.0.8 July 29, 2017
  - Matching keywords, Get Report List, Get Report

0.0.7 July 19, 2017
  - Simplify JSON Object, Added Debug Module
  - Add Example for Get Matching Product and Get Matching Product for Multiple ASIN

0.0.6 July 14, 2017
  - Add Orders API, Feeds API, Finances API, FulfillmentInboundShipment API, FulfillmentInventory API

0.0.5 July 14, 2017
  - Add Products API, Added Check for Node 7

0.0.2 July 13, 2017
  - Update request pattern

0.0.1 July 13, 2017
  - Initial release with Sellers API

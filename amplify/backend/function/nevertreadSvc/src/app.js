/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	AUTH_NEVERTREAD82CEE984_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const uuid = require('uuid').v4;

var express = require('express');
var bodyParser = require('body-parser');
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

/**********************
 * Example get method *
 **********************/

app.get('/feed', (req, res) => {
    res.json([uuid(), uuid(), uuid(), uuid(), uuid()]);
});

app.post('/post', (req, res) => {

});

app.get('/post/:postId', (req, res) => {
    const postId = req.params.postId;

    res.json({
        id: req.params.postId,
        postedBy: 'James Flesher',
        timestamp: new Date(),
        content: `post - ${postId}`,
        commentCount: randomInt(),
        reactionCount: randomInt(),
        shareCount: randomInt(),
    });
});

function randomInt(max = 1000000) {
    return Math.floor(Math.random() * Math.floor(max));
}

app.get('/items', function (req, res) {
    // Add your code here
    console.log('i am here');
    res.json([
        {
            id: uuid(),
            postedBy: 'James Flesher',
            timestamp: new Date(),
            content: 'post1',
            commentCount: 1,
            reactionCount: 1,
            shareCount: 1,
            image:
                'https://assets-global.website-files.com/5ebb0930dd82631397ddca92/5f0ce06d83f430659aef8bd6_element-formstack-dark-logo.svg',
        },
        {
            id: uuid(),
            timestamp: new Date(),
            content: 'post2',
            commentCount: 0,
            reactionCount: 0,
            shareCount: 0,
        },
        {
            id: uuid(),
            timestamp: new Date(),
            content: 'post3',
            commentCount: 10,
            reactionCount: 10,
            shareCount: 10,
        },
        {
            id: uuid(),
            timestamp: new Date(),
            content: 'post4',
            commentCount: 100,
            reactionCount: 100,
            shareCount: 100,
        },
        {
            id: uuid(),
            timestamp: new Date(),
            content: 'post5',
            commentCount: 1000,
            reactionCount: 1000,
            shareCount: 1000,
        },
    ]);
});

app.get('/items/*', function (req, res) {
    // Add your code here
    res.json({ success: 'get call succeed!', url: req.url });
});

/****************************
 * Example post method *
 ****************************/

app.post('/items', function (req, res) {
    // Add your code here
    res.json({ success: 'post call succeed!', url: req.url, body: req.body });
});

app.post('/items/*', function (req, res) {
    // Add your code here
    res.json({ success: 'post call succeed!', url: req.url, body: req.body });
});

/****************************
 * Example put method *
 ****************************/

app.put('/items', function (req, res) {
    // Add your code here
    res.json({ success: 'put call succeed!', url: req.url, body: req.body });
});

app.put('/items/*', function (req, res) {
    // Add your code here
    res.json({ success: 'put call succeed!', url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete('/items', function (req, res) {
    // Add your code here
    res.json({ success: 'delete call succeed!', url: req.url });
});

app.delete('/items/*', function (req, res) {
    // Add your code here
    res.json({ success: 'delete call succeed!', url: req.url });
});

app.listen(3000, function () {
    console.log('App started');
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;

(function (exports) {
    exports.appConfiguration = {
        userPool: new AmazonCognitoIdentity.CognitoUserPool({
            UserPoolId: 'us-west-2_R2Oc9bizA',
            ClientId: '5qfesqe27s1puou0b2b7eaqccs'
        }),
        appUrl: 'https://daleu0zx40.execute-api.us-west-2.amazonaws.com/Prod'
    };
    
})(window);


The advantages of serverless are sometimes taken away by all the configuration to make the thing work - securely.  But 3 hours today saves 100 hours throughout the year.

This is the manual method of setting up a policy that is not FullAdministrator mode.  It can be further locked down if you were doing government/policy strict work, and you'd want to do it programmatically so it's automated and auditable.


## User with Lambda, SES, API Gateway and CloudFormation Full Access


[![AWS IAM Policy for Serverless](https://i.mylomylo.com/wp-content/uploads/2018/04/IAM-policy-serverless-lambda-email-997x1024.png)](https://i.mylomylo.com/wp-content/uploads/2018/04/IAM-policy-serverless-lambda-email.png)


## Serverless Errors From Email Address Send To Permissions


![Serverless resource permissions](https://i.mylomylo.com/wp-content/uploads/2018/04/serverless-resource-permission-email-sandbox.png)


## Add Policy For Receiver Address


[![SES Email Address Policy](https://i.mylomylo.com/wp-content/uploads/2018/04/ses-email-address-add-policy-1024x616.png)](https://i.mylomylo.com/wp-content/uploads/2018/04/ses-email-address-add-policy.png)



Then you can deploy your app with full deploy and sending email capabilities.

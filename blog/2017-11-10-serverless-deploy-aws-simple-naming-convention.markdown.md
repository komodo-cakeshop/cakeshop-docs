
Serverless deploy and remove commands to keep things tidy and using and stages for separating [API versioning](https://www.troyhunt.com/your-api-versioning-is-wrong-which-is/) (when you're getting into some inelegant developer experiences with mixing cloud and testing out what different blockchain.  I'm lucky enough to control the backend and front-end for this particular task, so I like to keep version numbers in there.  A workaround if needed is to do redirection to the most recent API version - YMMV

With reference to serverless.yml config file.


## DynamoDB Table name


**DynamoDB table** = {service name}-{stage}

    
    <span class="s1"><span class="Apple-converted-space">  </span>environment:</span>
    <span class="s1"><span class="Apple-converted-space">    </span>DYNAMODB_TABLE: ${self:service}-${opt:stage, self:provider.stage}</span>


If you wanted to hard code it, this is where you'd do it.  But for this blog entry the DynamoDB table is **iMyloMylo-Task-v0**


## API Version


**API version** = stage

    
    <span class="s1">provider:</span>
    <span class="s1"><span class="Apple-converted-space">  </span>name: aws</span>
    <span class="s1"><span class="Apple-converted-space">  </span>runtime: nodejs4.3</span>
    <span class="s1"><span class="Apple-converted-space">  </span>memorySize: 128</span>
    <span class="s1"><span class="Apple-converted-space">  </span>region: ap-southeast-2</span>
    <span class="s1"><span class="Apple-converted-space">  </span><strong>stage: v0</strong>
    
    </span>


URL for your API: https://b4ury4mee1.execute-api.ap-southeast-2.amazonaws.com/**v0/**


## API URL


**URL Path** = path

    
    <span class="s1">functions:</span>
    <span class="s1"><span class="Apple-converted-space">  </span>create:</span>
    <span class="s1"><span class="Apple-converted-space">    </span>handler: task/create.create</span>
    <span class="s1"><span class="Apple-converted-space">    </span>events:</span>
    <span class="s1"><span class="Apple-converted-space">      </span>- http:</span>
    <span class="s1"><span class="Apple-converted-space">          </span><strong>path: task</strong></span>
    <span class="s1"><span class="Apple-converted-space">          </span>method: post</span>
    <span class="s1"><span class="Apple-converted-space">          </span>cors: true</span>
    
    <span class="s1"><span class="Apple-converted-space">  </span>list:</span>
    <span class="s1"><span class="Apple-converted-space">    </span>handler: task/list.list</span>
    <span class="s1"><span class="Apple-converted-space">    </span>events:</span>
    <span class="s1"><span class="Apple-converted-space">      </span>- http:</span>
    <span class="s1"><span class="Apple-converted-space">          </span><strong>path: task</strong></span>
    <span class="s1"><span class="Apple-converted-space">          </span>method: get</span>
    <span class="s1"><span class="Apple-converted-space">          </span>cors: true</span>
    
    <span class="s1"><span class="Apple-converted-space">  </span>get:</span>
    <span class="s1"><span class="Apple-converted-space">    </span>handler: task/get.get</span>
    <span class="s1"><span class="Apple-converted-space">    </span>events:</span>
    <span class="s1"><span class="Apple-converted-space">      </span>- http:</span>
    <span class="s1"><span class="Apple-converted-space">          </span><strong>path: task/{id}</strong></span>
    <span class="s1"><span class="Apple-converted-space">          </span>method: get</span>
    <span class="s1"><span class="Apple-converted-space">          </span>cors: true</span>




endpoints:




  POST - https://b4ury4mee1.execute-api.ap-southeast-2.amazonaws.com/v0/**task**




  GET - https://b4ury4mee1.execute-api.ap-southeast-2.amazonaws.com/v0/**task**




  GET - https://b4ury4mee1.execute-api.ap-southeast-2.amazonaws.com/v0/**task/{id}**





## Setting the project name & region for easy reference when in AWS Console



    
    <strong><span class="s1">service: iMyloMylo-Task</span></strong>
    
    <span class="s1">frameworkVersion: ">=1.1.0 <2.0.0"</span>
    
    <span class="s1">provider:</span>
    <span class="s1"><span class="Apple-converted-space">  </span>name: aws</span>
    <span class="s1"><span class="Apple-converted-space">  </span>runtime: nodejs4.3</span>
    <span class="s1"><span class="Apple-converted-space">  </span>memorySize: 128</span>
    <span class="s1"><span class="Apple-converted-space">  </span><strong>region: ap-southeast-2</strong></span>
    <span class="s1"><span class="Apple-converted-space">  </span>stage: v0</span>





## Serverless Deploy & Remove housekeeping


So when you're testing out a bunch of things and it's really cheap to deploy to the cloud and make a bunch of branches in your repo, you'll want to delete all your mess.

When you

    
    serverless deploy


you will inevitably want to

    
    serverless remove


The naming convention between branches will help you track what you have missed when it comes time to tear down.



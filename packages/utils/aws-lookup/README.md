# aws-lookup
Overrides core `dns` to lookup domains with AWS Service Discovery.

## Usage
```js
const awsLookup = require('@goldwasserexchange/aws-lookup');

awsLookup(
  [ // List of domain names to resolve via AWS Service Discovery
    'apps.internal'
  ],
  { // Additional AWS SDK client options
    region: 'eu-west-1'
  }
);

// dns.lookup is now overridden
```

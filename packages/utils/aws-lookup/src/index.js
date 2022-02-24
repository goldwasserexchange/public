const dns = require('dns');
const { ServiceDiscovery } = require('aws-sdk');

// Save dns.lookup
const dnsLookup = dns.lookup;

const awsLookup = (domains = [], clientOptions) => { // eslint-disable-line default-param-last
  const uniqueDomains = new Set([...domains]);

  const serviceDiscovery = new ServiceDiscovery({
    apiVersion: '2017-03-14',
    ...clientOptions,
  });

  dns.lookup = function lookup(hostname, options, callback) { // eslint-disable-line consistent-return
    if (typeof options === 'function') {
      callback = options; // eslint-disable-line no-param-reassign
      options = {}; // eslint-disable-line no-param-reassign
    }

    const optsFamily = typeof options === 'object' ? options.family : options;
    const family = optsFamily || 4;

    const attribute = `AWS_INSTANCE_IPV${family}`;

    const match = [...uniqueDomains].reduce((res, domain, idx, array) => {
      if (new RegExp(`.${domain}$`).test(hostname)) {
        array.splice(1); // return early
        return domain;
      }
      return undefined;
    }, undefined);

    if (match) {
      serviceDiscovery.discoverInstances(
        {
          NamespaceName: match,
          ServiceName: hostname.replace(`.${match}`, ''),
        },
        (err, data) => {
          const dnsError = { errno: dns.NOTFOUND, code: dns.NOTFOUND, hostname };

          if (err || !data.Instances || data.Instances.length === 0) return callback(dnsError);

          // Pick a random instance
          const index = Math.floor(Math.random() * data.Instances.length);
          const instance = data.Instances[index];

          if (!instance.Attributes || !instance.Attributes[attribute]) return callback(dnsError);

          return callback(null, instance.Attributes[attribute], family);
        }
      );
    } else {
      return dnsLookup.call(this, hostname, options, callback);
    }
  };
};

module.exports = awsLookup;

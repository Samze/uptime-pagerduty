uptime-pagerduty
======

A plugin for uptime that allows notifications to be sent to www.pagerduty.com

Uptime can be found here
https://github.com/fzaninotto/uptime

Use
--------


Install the plugin by adding
` plugins/pagerduty/index.js` file to uptime.

This plugin requires the https://www.npmjs.com/package/pagerduty node module.
```sh
npm install pagerduty --save
```

Add the following configuration to your uptime's default.yaml.
```yaml
pagerduty:
  serviceKey: <pagerduty-service-key>
```

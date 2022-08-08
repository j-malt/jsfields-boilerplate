# jsfields-boilerplate

A partial conversion of the [CMS theme boilerplate](https://github.com/HubSpot/cms-theme-boilerplate) to use the [HubSpot CLI Javascript Fields feature](https://github.com/HubSpot/hubspot-cli/pull/712).

The converted modules are 
  - blog-listings
  - blog-pagination
  - button
  - card
  - menu
  
The output of the `fields.js` files are in the same folder, called `fields.output.json`. To build yourself, clone the JS Fields PR and run:
```
yarn hs upload --src=<path-to-jsfields-boilerplate> --dest=jsfields-boilerplate --processFieldsJs
```

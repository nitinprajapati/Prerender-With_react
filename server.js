const express = require('express');
// const redis = require("redis");
const app = express();
const port = process.env.PORT || 1000;
// const client = redis.createClient();
//const prerender = require('prerender-node');
/** middleware to listen chatbots or seo */
//app.use(prerender.set('prerenderServiceUrl', 'https://prerenderserver.herokuapp.com/'));
app.use(require('prerender-node').set('prerenderToken', ''));
app.use(express.static('build'));

/* Redis settings for caching*/
// prerender.set('beforeRender', function(req, done) {
// 	client.get(req.url, done);
// }).set('afterRender', function(err, req, prerender_res) {
// 	client.set(req.url, prerender_res.body)
// });

app.get('/', (req, res) => res.sendFile('./build/index.html'));

/** Server listen */
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

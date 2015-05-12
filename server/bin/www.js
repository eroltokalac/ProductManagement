/**
 * Created by ErolTokalac on 05/12/15.
 */

// BASE SETUP
// =============================================================================
var app = require('../app');

app.set('port', process.env.PORT || 3001);

// START THE SERVER
// =============================================================================
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

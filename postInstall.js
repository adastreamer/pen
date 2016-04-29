require('shelljs/global');

var is_production = process.env.NODE_ENV == "production";

if (is_production) {
  console.log('running bower install');
  exec('node node_modules/bower/bin/bower install');
  console.log('running gulp build');
  exec('node node_modules/gulp/bin/gulp.js build');
  return;
}

console.error('No postinstall task');
process.exit(0);
Package.describe({
	name    : 'koad:io-router-progress',
	version : '3.3.0',
	summary : 'Progressbar for koad:io-router',
});

Package.onUse(function (api) {

	api.use([
		'coffeescript',
		'less',
		'underscore',
		'templating',
		'jquery',
		'reactive-var',
		'koad:io-router',
		// 'koad:io-layout'
	], 'client');

	api.imply('koad:io-router');

	api.addFiles([
		'progress.html',
		'progress.coffee',
		'progress.less'
	], 'client');
});

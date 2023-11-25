Package.describe({
	name    : 'koad:io-router-progress',
	version : '1.0.3',
	summary : 'Progressbar for koad:io-router',
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@1.2');

	api.use([
		'coffeescript',
		'less@3.0.1',
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

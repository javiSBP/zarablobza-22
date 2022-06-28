// Static
						const frontmatter = {"layout":"../../layouts/post.astro","title":"Zarablobza en la Noche Insomne","client":"Self","publishDate":"2022-06-27T00:00:00.000Z","img":"https://pbs.twimg.com/media/FSO975PXoAAbhCC?format=jpg","description":"Zarblobza formará parte de la Noche Insomne '22.\n"};
						const file = "/Users/javisanz/projects/zarablobza-22/src/pages/post/zarablobza-en-la-noche-insomne.md";
						const url = "/post/zarablobza-en-la-noche-insomne";
						function rawContent() {
							return "\nLa Noche Insomne es un evento de juegos alternativos para todos los públicos que parte de una premisa muy sencilla: pasar unas horas de diversión haciendo algo diferente.\n\nLa próxima edición será el 1 de Octubre de 2022 desde las cinco de la tarde hasta las cinco de la mañana (17h a 5h.).\n\nDesde el año 2016, La Noche Insomne se celebra en la Sala Multiusos del Auditorio de Zaragoza, organizada por el Club Tercios de Flandes y el Ayuntamiento de Zaragoza.\n\nNos complace anunciar que Zarablobza formará parte de la Noche Insomne '22.\n\nLos asistentes al evento podrán inscribirse en otras actividades y disfrutar de una tarde/noche de juegos completa.\n\nAdemás, desde Zarablobz enseñaremos a jugar a Arkham Horror LCG a quién se quiera acercar a las 23h. Una oportunidad de tener una toma de contacto guiada con este pedazo de juego.\n\nTan pronto como se disponga del programa de actividades lo anunciaremos aquí, pero para que veáis una muestra de lo divertido que puede ser el evento que nos acoge, os dejamos una imagen de la edición de 2019.\n\n<img src=\"https://nochedejuegosinsomne.files.wordpress.com/2019/09/actividades-web.jpg\" alt=\"noche insomne 2019\"/>\n\nPara estar a la última podéis seguir a Noche Insomne en <a href=\"https://twitter.com/nocheinsomnezgz?lang=es\">Twitter</a>.\n";
						}
						async function compiledContent() {
							return load().then((m) => m.compiledContent());
						}
						function $$loadMetadata() {
							return load().then((m) => m.$$metadata);
						}
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n._; }));
						}
						function Content(...args) {
							return load().then((m) => m.default(...args));
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers);
						}

export { $$loadMetadata, Content, compiledContent, load as default, file, frontmatter, getHeaders, rawContent, url };

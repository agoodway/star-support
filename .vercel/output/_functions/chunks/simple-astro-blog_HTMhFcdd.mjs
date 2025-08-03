const simpleAstroBlog = new Proxy({"src":"/_astro/simple-astro-blog.Dl86rePH.png","width":2256,"height":1320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/chasepursley/Development/ai/star-support/src/assets/thumbnails/simple-astro-blog.png";
							}
							
							return target[name];
						}
					});

export { simpleAstroBlog as default };

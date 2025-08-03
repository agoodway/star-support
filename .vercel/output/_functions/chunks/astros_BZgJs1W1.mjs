const astros = new Proxy({"src":"/_astro/astros.CA8z6dbD.png","width":2256,"height":1320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/chasepursley/Development/ai/star-support/src/assets/thumbnails/astros.png";
							}
							
							return target[name];
						}
					});

export { astros as default };

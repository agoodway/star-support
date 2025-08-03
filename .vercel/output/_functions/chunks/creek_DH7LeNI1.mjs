const creek = new Proxy({"src":"/_astro/creek.CgpBUanV.png","width":2256,"height":1320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/chasepursley/Development/ai/star-support/src/assets/thumbnails/creek.png";
							}
							
							return target[name];
						}
					});

export { creek as default };

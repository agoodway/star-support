const resume01 = new Proxy({"src":"/_astro/resume01.CAukhX1f.png","width":2256,"height":1320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/chasepursley/Development/ai/star-support/src/assets/thumbnails/resume01.png";
							}
							
							return target[name];
						}
					});

export { resume01 as default };

const sendit = new Proxy({"src":"/_astro/sendit.Cu8vxERj.png","width":2256,"height":1320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/chasepursley/Development/ai/star-support/src/assets/thumbnails/sendit.png";
							}
							
							return target[name];
						}
					});

export { sendit as default };

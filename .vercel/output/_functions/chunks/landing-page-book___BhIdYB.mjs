const landingPageBook = new Proxy({"src":"/_astro/landing-page-book.DCFZcTol.png","width":2256,"height":1320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/chasepursley/Development/ai/star-support/src/assets/thumbnails/landing-page-book.png";
							}
							
							return target[name];
						}
					});

export { landingPageBook as default };

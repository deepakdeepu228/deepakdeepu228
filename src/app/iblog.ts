export interface IBlog {
                        blogId: "string",
						title: "string",
						description: "string",
						bodyHtml: "string",
						views: number,
						isPublished: boolean,
						category: "string",
						author: "string",
						tags: object,
						created: "date",
                        lastModified: "date"
                    }
module.exports = {
	tags: ["posts"],
	layout: "layouts/post.njk",
	permalink: function ({ title, page }) {
		const slug = title ? this.slugify(title) : this.slugify(page.fileSlug);
		return `/${slug}/`;
	},
};

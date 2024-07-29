module.exports = {
	tags: ["posts"],
	layout: "layouts/post.njk",
	permalink: function ({ title, page }) {
		const slug = title ? this.slugify(title) : this.slugify(page.fileSlug);
		const date = new Date(page.date);
		return `/${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${slug}/`;
	},
};

import { join } from "path/posix";

const authorInfo = {
	name: "Sumeet Yadav",
	networks: {
		mastodon: {
			platform: "",
			id: "@sumeatt",
			link: "https://mastodon.design/@sumeatt"
		},
		instagram: {
			platform: "Instagram",
			id: "@sumeatt",
			link: "https://www.instagram.com/sumeatt/"
		},
		github: {
			platform: "GitHub",
			id: "@sumeatt",
			link: "https://github.com/sumeatt"
		},
		linkedin: {
			platform: "LinkedIn",
			id: "sumeatt",
			link: "https://in.linkedin.com/in/sumeatt"
		},
	}
};

const siteInfo = {
	version: "4.0.0",
	title: authorInfo.name,
	description: `Personal space of ${authorInfo.name} on the web`,
	author: authorInfo,
	repository: "https://github.com/sumeatt/site.git",
	siteBase: "https://sumeatt.github.io",
	editBase: "https://github.com/sumeatt/site/edit/main",
	issueBase: "https://github.com/sumeatt/site/issues/new",
	maxFeedItems: 20,
	maxPageItems: 20,
	maxTocDepth: 3
};

const editUrl = new URL(siteInfo.editBase);

function fullLink(path, base = siteInfo.siteBase) {
	return new URL(path, base).href;
}

function editLink(path) {
	return fullLink(join(editUrl.pathname, path), editUrl.origin);
}

function postPathname(slug) {
	return `/post/${slug}/`;
}

function paginationPathname(base, pageNumber) {
	return pageNumber > 1 ? `/${base}/${pageNumber}/` : `/${base}/`;
}

export {
	siteInfo as default,
	fullLink,
	editLink,
	postPathname,
	paginationPathname
};

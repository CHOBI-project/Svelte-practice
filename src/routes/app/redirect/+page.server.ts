import { redirect } from "@sveltejs/kit";

const urls = [
	"animation",
	"crud",
	"dom",
	"elements",
	"form",
	"markup",
	"routing",
	"rune",
	"store",
	"style",
];

export function load() {
	const rand = Math.floor(Math.random() * urls.length);

	redirect(307, urls[rand]);
}

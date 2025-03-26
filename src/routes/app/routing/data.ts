type DataModel = {
	id: string;
	directory: string;
	title: string;
	desc: string;
};

export const data: DataModel[] = [
	{
		id: "1",
		directory: "rune",
		title: "Rune(ルーン)",
		desc: "Runeは「.svelteファイル」や「.svelte.js/.svelte.tsファイル」で使用するシンボルで、Svelteコンパイラをコントロールします。",
	},

	{
		id: "2",
		directory: "markup",
		title: "Markup",
		desc: "Svelteの構文の記述の仕方",
	},

	{
		id: "3",
		directory: "elements",
		title: "Special Elements",
		desc: "通常のHTMLタグとは異なる特殊な動作を持つSvelteコンパイラによって特別に解釈される要素。",
	},

	{
		id: "4",
		directory: "style",
		title: "Styling",
		desc: "svelteにおけるレイアウトの仕方",
	},

	{
		id: "5",
		directory: "store",
		title: "svelte/store",
		desc: "svelteで使用可能なストア",
	},

	{
		id: "6",
		directory: "animation",
		title: "Animation",
		desc: "svelteを使ったanimationを自作",
	},

	{
		id: "7",
		directory: "dom",
		title: "Dom操作",
		desc: "svelteのdom操作はbooleanで行うことを推奨している",
	},

	{
		id: "8",
		directory: "routing",
		title: "routing",
		desc: "svelteでのルーティングの仕方",
	},
];

interface Profile {
	fullName: string
	title: string
	institute: string
	author_name: string
	research_areas: { title: string; description: string; field: string }[]
}

export const profile: Profile = {
	fullName: 'Jingwen Zheng',
	title: 'Master’s Student · Computer Architecture',
	institute: '', // TODO: Add university after confirmation
	author_name: 'Jingwen Zheng',
	research_areas: [
		{ title: 'LLM × PIM', description: 'Memory-efficient inference and GPU–PIM heterogeneous systems for long-context language models.', field: 'computer-science' },
		{ title: 'Reliable Computing', description: 'Cross-layer reliability analysis for emerging ReRAM-based accelerators.', field: 'computer-science' },
		{ title: 'Computer Architecture', description: 'Architecture and systems research at the intersection of memory, accelerators, and AI workloads.', field: 'computer-science' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: '',
	linkedin: '',
	x: '',
	bluesky: '',
	github: 'https://github.com/ImWen-97',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const template = {
	website_url: 'https://imwen-97.github.io',
	menu_left: false,
	transitions: false,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Jingwen Zheng | Research & ArchEcho',
	default_description: 'Research notes and projects in computer architecture, processing-in-memory, reliable computing, and efficient LLM inference.',
	default_image: '/social-preview.svg',
}

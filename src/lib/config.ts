export const CLUB_EMAIL = 'hungamunga2026@gmail.com';

interface TimelineRow {
	month: string;
	event: string;
	status: 'active' | 'future' | 'done';
}

export const TIMELINE: TimelineRow[] = [
	{ month: 'Sep',    event: 'Kickoff: game reveal, brainstorm, first prototypes',         status: 'active' },
	{ month: 'Oct',    event: 'Build season: robot development, CADs for main systems',     status: 'future' },
	{ month: 'Nov-Dec',event: 'League Meets: iterate on autonomous and driver performance', status: 'future' },
	{ month: 'Jan',    event: 'Final refinements: either redesign or refine current',       status: 'future' },
	{ month: 'Feb',    event: 'League Championship',                                        status: 'future' },
];

interface OutreachItem {
	n: string;
	title: string;
	desc: string;
	tag: string;
}

export const OUTREACH: OutreachItem[] = [
	{ n: 'I',   title: 'FLL Mentoring',   desc: 'Mentoring local FIRST Lego League teams, helping younger students build their first robots and prepare for competition.', tag: 'ongoing'   },
	{ n: 'II',  title: 'Demonstrations',  desc: 'Visiting elementary and middle schools to show off our robot and get kids excited about STEM.',                           tag: 'quarterly' },
	{ n: 'III', title: 'Open Shop',       desc: 'Sharing our resources, code, and designs with rookie teams to help grow the FIRST community.',                           tag: 'always'    },
];

interface Member {
	name: string;
	role: string;
	pfp: string;
}

export const MEMBERS: Member[] = [
	{ name: 'Arnav Saraf',     role: 'Captain', pfp: 'favicon.png' },
	{ name: 'Jayan Patel',     role: 'Member',  pfp: 'favicon.png' },
	{ name: 'Owen Cassidy',    role: 'Member',  pfp: 'favicon.png' },
	{ name: 'Reeyansh Hande',  role: 'Member',  pfp: 'favicon.png' },
	{ name: 'Vibha Pulluru',   role: 'Member',  pfp: 'favicon.png' },
	{ name: 'James Harker',    role: 'Member',  pfp: 'favicon.png' },
	{ name: 'Aiden Chrisman',  role: 'Member',  pfp: 'favicon.png' },
	{ name: 'Bhaskara Bosuru', role: 'Member',  pfp: 'favicon.png' },
	{ name: 'David Hernan',    role: 'Member',  pfp: 'favicon.png' },
	{ name: 'Rohan Dash',      role: 'Member',  pfp: 'favicon.png' },
	{ name: 'Ethan Li',        role: 'Member',  pfp: 'favicon.png' },
	{ name: 'Ethan Wu',        role: 'Member',  pfp: 'favicon.png' },
	{ name: 'Madhuvan Kanike', role: 'Member',  pfp: 'favicon.png' },
	{ name: 'Tanvi Chakka',    role: 'Member',  pfp: 'favicon.png' },
	{ name: 'Po Lun Ting',     role: 'Member',  pfp: 'favicon.png' },
];

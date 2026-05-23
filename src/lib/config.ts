export const CLUB_EMAIL = 'hungamunga17113@gmail.com';

export interface TimelineRow {
	month: string;
	event: string;
	status: 'active' | 'future' | 'done';
}

export const TIMELINE: TimelineRow[] = [
	{ month: 'Sep', event: 'Kickoff: game reveal, brainstorm, first prototypes', status: 'active' },
	{ month: 'Oct', event: 'Build season: robot development, CADs for main systems', status: 'future' },
	{ month: 'Nov-Dec', event: 'League Meets: iterate on autonomous and driver performance', status: 'future' },
	{ month: 'Jan', event: 'Final refinements: either redesign or refine current', status: 'future' },
	{ month: 'Feb', event: 'League Championship', status: 'future' },
];

export interface OutreachItem {
	n: string;
	title: string;
	desc: string;
	tag: string;
}

export const OUTREACH: OutreachItem[] = [
	{ n: 'I', title: 'FLL Mentoring', desc: 'Mentoring local FIRST Lego League teams, helping younger students build their first robots and prepare for competition.', tag: 'ongoing' },
	{ n: 'II', title: 'Demonstrations', desc: 'Visiting elementary and middle schools to show off our robot and get kids excited about STEM.', tag: 'quarterly' },
	{ n: 'III', title: 'Open Shop', desc: 'Sharing our resources, code, and designs with rookie teams to help grow the FIRST community.', tag: 'always' },
];

export interface Member {
	name: string;
	role: string;
	pfp: string;
}

export const MEMBERS: Member[] = [
	{ name: 'Arnav Saraf',     role: 'Captain', pfp: '' },
	{ name: 'Jayan Patel',     role: 'Member',  pfp: '' },
	{ name: 'Owen Cassidy',    role: 'Member',  pfp: '' },
	{ name: 'Reeyansh Hande',  role: 'Member',  pfp: '' },
	{ name: 'Vibha Pulluru',   role: 'Member',  pfp: '' },
	{ name: 'James Harker',    role: 'Member',  pfp: '' },
	{ name: 'Aiden Chrisman',  role: 'Member',  pfp: '' },
	{ name: 'Bhaskara Bosuru', role: 'Member',  pfp: '' },
	{ name: 'David Hernan',    role: 'Member',  pfp: '' },
	{ name: 'Rohan Dash',      role: 'Member',  pfp: '' },
	{ name: 'Ethan Li',        role: 'Member',  pfp: '' },
	{ name: 'Ethan Wu',        role: 'Member',  pfp: '' },
	{ name: 'Madhuvan Kanike', role: 'Member',  pfp: '' },
	{ name: 'Tanvi Chakka',    role: 'Member',  pfp: '' },
	{ name: 'Po Lun Ting',     role: 'Member',  pfp: '' },
];

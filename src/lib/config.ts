export const SPEC_VERSION = 'v1.0.1';

export const SEASON_END_MONTH = 11;

export const CLUB_EMAIL = 'team17113@gmail.com';

export interface Member {
	name: string;
	role: string;
	pfp: string; // relative path to /static, e.g. '/members/jihoon.jpg'
}

export const MEMBERS: Member[] = [
	{ name: 'Arnav Saraf',  role: 'Captain', pfp: '' },
	{ name: 'Jayan Patel',  role: 'Member', pfp: '' },
	{ name: 'Owen Cassidy',  role: 'Member', pfp: '' },
	{ name: 'Reeyansh Hande',  role: 'Member', pfp: '' },
	{ name: 'Vibha Pulluru',  role: 'Member', pfp: '' },
	{ name: 'James Harker',  role: 'Member', pfp: '' },
	{ name: 'Aiden Chrisman',  role: 'Member', pfp: '' },
	{ name: 'Bhaskara Bosuru',  role: 'Member', pfp: '' },
	{ name: 'David Hernan',  role: 'Member', pfp: '' },
	{ name: 'Rohan Dash', role: 'Member', pfp: '' },
	{ name: 'Ethan Li', role: 'Member', pfp: '' },
	{ name: 'Ethan Wu', role: 'Member', pfp: '' },
	{ name: 'Madhuvan Kanike', role: 'Member', pfp: '' },
	{ name: 'Tanvi Chakka', role: 'Member', pfp: '' },
	{ name: 'Po Lun Ting', role: 'Member', pfp: '' },
];

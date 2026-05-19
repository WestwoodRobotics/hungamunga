export const SPEC_VERSION = 'v1.0.1';

export const SEASON_END_MONTH = 11;

export const CLUB_EMAIL = 'team17113@gmail.com';

export interface Member {
	name: string;
	role: string;
	pfp: string; // relative path to /static, e.g. '/members/jihoon.jpg'
}

export const MEMBERS: Member[] = [
	{ name: 'Member 1',  role: 'Role', pfp: '' },
	{ name: 'Member 2',  role: 'Role', pfp: '' },
	{ name: 'Member 3',  role: 'Role', pfp: '' },
	{ name: 'Member 4',  role: 'Role', pfp: '' },
	{ name: 'Member 5',  role: 'Role', pfp: '' },
	{ name: 'Member 6',  role: 'Role', pfp: '' },
	{ name: 'Member 7',  role: 'Role', pfp: '' },
	{ name: 'Member 8',  role: 'Role', pfp: '' },
	{ name: 'Member 9',  role: 'Role', pfp: '' },
	{ name: 'Member 10', role: 'Role', pfp: '' },
	{ name: 'Member 11', role: 'Role', pfp: '' },
	{ name: 'Member 12', role: 'Role', pfp: '' },
	{ name: 'Member 13', role: 'Role', pfp: '' },
	{ name: 'Member 14', role: 'Role', pfp: '' },
	{ name: 'Member 15', role: 'Role', pfp: '' },
];

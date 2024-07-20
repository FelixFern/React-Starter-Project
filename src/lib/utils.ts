import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const capitalizeString = (val: string) => {
	return `${val.slice(0, 1).toUpperCase()}${val.slice(1)}`;
};

export const mapTypeColor = (type: string) => {
	switch (type) {
		case 'normal':
			return 'bg-stone-400';
		case 'fire':
			return 'bg-orange-400';
		case 'water':
			return 'bg-blue-400';
		case 'electric':
			return 'bg-yellow-400';
		case 'grass':
			return 'bg-green-400';
		case 'ice':
			return 'bg-sky-400';
		case 'fighting':
			return 'bg-red-400';
		case 'poison':
			return 'bg-purple-600';
		case 'ground':
			return 'bg-amber-800';
		case 'flying':
			return 'bg-purple-400';
		case 'psychic':
			return 'bg-pink-400';
		case 'bug':
			return 'bg-lime-700';
		case 'rock':
			return 'bg-amber-950';
		case 'ghost':
			return 'bg-indigo-400';
		case 'dragon':
			return 'bg-violet-400';
		case 'dark':
			return 'bg-slate-400';
		case 'steel':
			return 'bg-zinc-800';
		case 'fairy':
			return 'bg-pink-300';
		case 'stellar':
			return 'bg-cyan-400';
	}
};

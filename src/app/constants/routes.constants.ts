import { NavigationItem } from "@models/navigation-item.interface";

export const RoutePaths = {
    HOME: '',
    NOT_FOUND: '404',
    ABOUT_ME: 'about-me',
    CREW: 'crew',
    FAVORITES: 'favorites',
    WRESTLING: 'wrestling',
    BUNNY_FACTS: 'bunny-facts',
    PLAYLIST: 'playlist',
    KPOP: 'kpop'
} as const;

export type RoutePath = typeof RoutePaths[keyof typeof RoutePaths];

export const navRoutes: NavigationItem[] = [
    { path: "/" + RoutePaths.ABOUT_ME, label: "About Me" },
    { path: "/" + RoutePaths.CREW, label: "My Crew" },
    { path: "/" + RoutePaths.FAVORITES, label: "Favorites" },
    { path: "/" + RoutePaths.WRESTLING, label: "In The Ring" },
    { path: "/" + RoutePaths.KPOP, label: "K-Pop Boys" },
    { path: "/" + RoutePaths.PLAYLIST, label: "My Playlist" },
    { path: "/" + RoutePaths.BUNNY_FACTS, label: "Bunny Facts" }
];
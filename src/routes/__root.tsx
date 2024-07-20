import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList
} from '@/components/ui/navigation-menu';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
	component: () => (
		<>
			<NavigationMenu className='p-4 h-fit'>
				<NavigationMenuList className='flex items-center gap-4'>
					<NavigationMenuItem>
						<h1 className='font-bold text-md'>
							React + Tanstack Query Project Starter
						</h1>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link
							to='/'
							className='[&.active]:border-b-2 [&.active]:text-red-500 pb-1 border-red-500'
						>
							<NavigationMenuLink>Home</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link
							to='/pokemon'
							className='[&.active]:border-b-2 [&.active]:text-red-500 pb-1 border-red-500'
							search
						>
							<NavigationMenuLink>Pokemon</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<hr />
			<div className='container pt-12'>
				<Outlet />
			</div>
			<TanStackRouterDevtools />
		</>
	)
});

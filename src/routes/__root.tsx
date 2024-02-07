import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
    component: () => (
        <>
            <NavigationMenu className='fixed p-4 h-fit'>
                <NavigationMenuList className='flex items-center gap-4'>
                    <NavigationMenuItem>
                        <h1 className='font-bold text-md'>
                            React + Tanstack Query Project Starter
                        </h1>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to='/'>
                            <NavigationMenuLink>Home</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    )
});


import { Icon } from '@/components/icon';
import AppLayout from '@/layouts/app-layout';

import { NavItem, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { LayoutGrid } from 'lucide-react';
import { useMemo } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
const bgColors: string[] = [
    "bg-red-200",
    "bg-green-200",
    "bg-blue-200",
    "bg-yellow-200",
    "bg-main",
    "bg-purple-200",
    "bg-teal-200",
];
const dashboardCards: NavItem[] = [

    {
        title: 'Contract Generator',
        href: '/contracts/create',
        icon: LayoutGrid,
    },


];

export default function Dashboard() {
    const cardsWithColors = useMemo(() => {
        const shuffledColors = [...bgColors].sort(() => 0.5 - Math.random());
        return dashboardCards.map((card, index) => ({
            ...card,
            bgColor: shuffledColors[index % shuffledColors.length],
        }));
    }, []);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {
                        cardsWithColors.map((item) => (
                            <Link
                                className={`border-border shadow-shadow text-main-foreground rounded-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY border-2 p-5 transition-all hover:shadow-none min-h-56 flex flex-col items-center justify-center ${item.bgColor}`}


                                href={item.href}
                            >
                                {item.icon && <Icon iconNode={item.icon} className="h-10 w-10 sm:h-12 sm:w-12" />}

                                <p className="font-heading mt-3 text-lg sm:text-xl">
                                    {item.title}
                                </p>

                            </Link>

                        ))
                    }
                </div>

            </div>
        </AppLayout>
    );
}

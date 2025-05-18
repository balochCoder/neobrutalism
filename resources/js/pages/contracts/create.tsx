import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Generate Contract',
        href: '/contracts/create',
    },
];
export default function Create() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
               <Head title="Appearance settings" />

        </AppLayout>
    )
}

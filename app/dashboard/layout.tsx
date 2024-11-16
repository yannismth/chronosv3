"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Sidebarr from "@/components/Sidebarr";
import { ReactNode } from 'react';

interface DashboardLayoutProps {
    children: ReactNode; // Spécifie que 'children' peut être n'importe quel élément React
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <SidebarProvider>
            <div className="flex w-full h-full">
                <Sidebarr /> {/* Ajoute la sidebar ici si tu veux qu'elle apparaisse dans le layout */}
                <main className="flex-1">
                    <SidebarTrigger></SidebarTrigger>
                    {children}
                </main>
            </div>
        </SidebarProvider>
    );
};

export default DashboardLayout;

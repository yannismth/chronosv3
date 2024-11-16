"use client";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { BarChart3, Users, Wallet2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
 
// Menu items avec les routes Next.js
const items = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: BarChart3,
    group: "Principal"
  },
  {
    title: "Équipe",
    path: "/dashboard/team",
    icon: Users,
    group: "Principal"
  },
  {
    title: "Finances",
    path: "/dashboard/finances",
    icon: Wallet2,
    group: "Principal"
  },
  {
    title: "Calendrier",
    path: "/dashboard/calendar",
    icon: Calendar,
    group: "Outils"
  },
  {
    title: "Messages",
    path: "/dashboard/inbox",
    icon: Inbox,
    group: "Outils"
  },
  {
    title: "Paramètres",
    path: "/dashboard/settings",
    icon: Settings,
    group: "Système"
  },
]

const Sidebarr = () => {
    const pathname = usePathname();

    // Grouper les items par catégorie
    const groupedItems = items.reduce((acc, item) => {
        if (!acc[item.group]) {
            acc[item.group] = [];
        }
        acc[item.group].push(item);
        return acc;
    }, {} as Record<string, typeof items>);

    return (
        <>
        <Sidebar>
            <SidebarContent>
                {Object.entries(groupedItems).map(([groupName, groupItems]) => (
                    <SidebarGroup key={groupName}>
                        <SidebarGroupLabel>{groupName}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {groupItems.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={pathname === item.path}
                                        >
                                            <Link href={item.path}>
                                                <item.icon className="h-4 w-4" />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
        </Sidebar>
        </>
    )
}

export default Sidebarr
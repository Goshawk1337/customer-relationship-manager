"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroupContent,
    SidebarMenu
} from "@/components/ui/sidebar"
import { Home, Users, Handshake, Calendar, Settings, SettingsIcon } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
const menus = [
    {
        label: "Dashboard",
        link: "/",
        icon: Home
    },
    {
        label: "Clients",
        link: "/clients",
        icon: Users
    },
    {
        label: "Deals",
        link: "/deals",
        icon: Handshake
    },
    {
        label: "Calendar",
        link: "/calendar",
        icon: Calendar
    },
    {
        label: "Settings",
        link: "/settings",
        icon: SettingsIcon
    },
]
export function AppSidebar() {
    return (
        <Sidebar >
            <SidebarHeader className="text-center ">
                <h1 className="font-bold text-2xl">CRM Menu</h1>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroupLabel>Menus</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu >
                        {menus.map((menu) => (
                            <SidebarMenuItem key={menu.label}>
                                <SidebarMenuButton asChild >
                                    <Link href={menu.link}>
                                        <menu.icon />
                                        <span>{menu.label}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter > 
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Button className="text-center w-full" variant={"destructive"}>
                            Log out
                        </Button>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
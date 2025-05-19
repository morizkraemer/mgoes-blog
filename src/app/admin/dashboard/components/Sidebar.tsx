import { Calendar, Home, ImagePlus, Inbox, Search, Settings, Settings2 } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

// Menu items.
const items = [
    {
        title: "art",
        url: "/admin/dashboard/art",
    },
    {
        title: "music",
        url: "/admin/dashboard/music",
    },
    {
        title: "shop",
        url: "#",
    },
    {
        title: "insights",
        url: "#"
    }
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="text-4xl">dashboard</SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <span className={`${item.url === "#" ? "text-gray-500" : "text-foreground"} text-2xl`}>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem className="flex justify-end">
                        <SidebarMenuButton className="w-fit">
                            <Settings />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>

            </SidebarFooter>
        </Sidebar>
    )
}

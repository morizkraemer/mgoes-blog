import { SidebarProvider } from "@/components/ui/sidebar";
import AuthProvider from "./components/AuthProvider";
import { AppSidebar } from "./components/Sidebar";

export default function DashboardLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

    return (
        <div className="h-[100vh]">
            <AuthProvider>
                <SidebarProvider>
                    <AppSidebar />
                    <main className="h-full w-full p-5">
                        {children}
                    </main>
                </SidebarProvider>
            </AuthProvider>
        </div>
    )
}

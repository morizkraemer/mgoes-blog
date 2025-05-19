'use client'
import { logoutAction } from "@/actions/auth-actions";

export default function Dashboard() {
    
    async function handleLogout() {
        const {success, error} = await logoutAction()
        if (success) return <div>logged out</div>
    }

    return (
        <div>
            <button onClick={handleLogout}>logout</button>
        </div>
    )

}

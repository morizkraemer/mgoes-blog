import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {

    return (
        <div className="h-full w-full flex flex-col gap-y-5">
            <div className="w-full flex justify-end">
                <Link href="/admin/dashboard/music/tracks-upload"><Button>Upload Tracks</Button></Link>
            </div>
            <div className="border flex justify-center">
                Images
            </div>

        </div>
    )
};

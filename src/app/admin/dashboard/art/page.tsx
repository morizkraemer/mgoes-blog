import { getAllImages } from "@/actions/db-images-actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image'

export default async function page() {
    const { data, error } = await getAllImages();
    if (!data) return <div>error loading images</div>

    return (
        <div className="h-full w-full flex flex-col gap-y-5">
            <div className="w-full flex justify-end">
                <Link href="/admin/dashboard/art/image-upload"><Button>Upload Image</Button></Link>
            </div>

            <div className="flex ">
                {data.map((image) => {
                    return (
                        <div>
                            <Image key={image.imageBucketKey} src={process.env.R2_PUBLIC_URL + image.imageBucketKey} alt={image.caption} width={300} height={300} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

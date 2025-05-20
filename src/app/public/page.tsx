import { getAllImages } from "@/actions/db-images-actions"
import Image from "next/image";

export default async function page() {

    const images = await getAllImages();

    if (!images) return <div>no images</div>

    return (
    <div>
            {
                images.data!.map((image) => {
                    console.log(image)
                    const bucketUrl = process.env.R2_PUBLIC_URL + image.imageBucketKey
                    return <Image key={bucketUrl} src={bucketUrl} alt={image.caption} width={400} height={400}/>
                })
            }
        </div>
    )
};

import { getAllPictures } from "@/actions/db-actions"
import Image from "next/image";

export default async function page() {

    const images = await getAllPictures();

    if (!images) return <div>no images</div>

    return (
    <div>
            {
                images.data!.map((image) => {
                    console.log(image)
                    return <Image key={image.imageUrl} src={image.imageUrl} alt={image.caption} width={400} height={400}/>
                })
            }
        </div>
    )
};

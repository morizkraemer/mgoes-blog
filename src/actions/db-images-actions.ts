'use server'
import { Image } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { ActionResult } from "@/types/generic-types";
import { format } from "path";

type ImageType = {
    name: string;
    caption: string;
    imageKey: string
}

export async function getAllImages(): Promise<ActionResult<Image[]>> {
    const images = await prisma.image.findMany({});
    if (images) {
        return { success: true, data: images }
    }

    return { success: false, error: "failed to get images" }

}

export async function addImageToDb(formData: ImageType): Promise<ActionResult<null>> {
    try {
        await prisma.image.create({
            data: {
                name: formData.name,
                caption: formData.caption,
                imageBucketKey: formData.imageKey
            }
        })
        return { success: true }
    } catch (error) {
        console.log(error)
        return { success: false, error: "prisma error failed to create image" }
    }
}


'use server'
import { Image, PrismaClient } from "@/generated/prisma";
import { s3Client } from "@/lib/r2-bucket";
import { ActionResult } from "@/types/generic-types";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'


const prisma = new PrismaClient();

export type ImageType = {
    name: string;
    caption: string;
    imageUrl: string
}

export async function getAllPictures(): Promise<ActionResult<Image[]>> {
    const images = await prisma.image.findMany({});
    if (images) {
        return { success: true, data: images}
    }

    return {success: false, error: "failed to get images"}

}

export async function uploadPicture(formData: ImageType): Promise<ActionResult<null>> {
    try {
        await prisma.image.create({
            data: {
                ...formData,
                imageUrl: process.env.R2_PUBLIC_URL + formData.imageUrl
            } 
        })
    } catch (error) {
        return { success: false, error: "prisma error failed to create image" }
    }
    return { success: true }
}

export async function getSignedUploadUrl(key: string): Promise<ActionResult<string>> {
    const command =
        new PutObjectCommand({
            Key: key,
            Bucket: process.env.R2_BUCKET_NAME,
        });
    const url = await getSignedUrl(
        s3Client,
        command,
        {
            expiresIn: 3600
        }
    )

    return { success: true, data: url }
}

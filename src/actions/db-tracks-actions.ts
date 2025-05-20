'use server'
import { Album, Prisma } from '@/generated/prisma'
import { prisma } from '@/lib/prisma'
import { ActionResult } from '@/types/generic-types'

export async function addAlbumToDb(formData: Prisma.AlbumCreateInput): Promise<ActionResult<null>> {
    try {await prisma.album.create({
        data: formData
    })
        return { success: true }
    } catch (error) {
        console.log(error);
        return {success: false, error: "failed to create album in db"}
    }

}

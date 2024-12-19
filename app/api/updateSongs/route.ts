import {NextResponse} from "next/server";
import getSongs from "@/actions/getSongs";

let cachedSongs: any = null;

export async function GET() {
    try {
        cachedSongs = await getSongs();
        return NextResponse.json({
            message: "Songs updated successfully",
            cachedSongs,
        });
    } catch (error) {
        return NextResponse.json({error: "Failed to fetch songs"}, {status: 500});
    }
}
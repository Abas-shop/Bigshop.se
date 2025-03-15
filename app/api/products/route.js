import { NextResponse } from "next/server";
import pool from "@/lib/database";

export async function GET( ) {
    try {
        const { rows } = await pool.query("SELECT * FROM products");
        return NextResponse.json(rows);
    } catch (error) {
        return NextResponse.json({ error: "Databasfel" }, { status: 500 });
    }
}

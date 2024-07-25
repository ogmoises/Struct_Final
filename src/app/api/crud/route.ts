import { NextRequest, NextResponse } from "next/server";
import { db } from "~/server/db";

//GET

export async function GET(req:NextRequest) {
    try {
        const produtos = await db.produto.findMany()
        return NextResponse.json({message: 'OK', produtos})
    }   catch (err){

        if(err instanceof Error){
            return  NextResponse.json(
                {
                    message: 'Erro',
                    err:err.message
                },
                {
                    status: 500
                }
            )
        }
    }
}

//POST

export async function POST(req:NextRequest){
    const { nome } = await req.json() as {nome: string }
    const { Description } = await req.json() as {Description: string }
    const { quantidade } = await req.json() as {quantidade: number }
    try {

        const produto = await db.produto.create({
            data: {
                nome,
                Description,
                quantidade
            }
          
        })
        return NextResponse.json({message: 'OK', produto})

    }   catch (err){

        if(err instanceof Error){
            return  NextResponse.json(
                {
                    message: 'Erro',
                    err:err.message
                },
                {
                    status: 500
                }
            )
        }
    }
}
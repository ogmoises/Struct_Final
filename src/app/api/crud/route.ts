import { NextRequest, NextResponse } from "next/server";
import { number } from "zod";
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
    const { nome, Description, quantidade } = await req.json() as {nome: string ,Description: string ,quantidade:  number}
 
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

//PATCH

export async function PATCH(req:NextRequest){
    const { nome, Description, quantidade, Id } = await req.json() as {nome: string ,Description: string ,quantidade:  number ,Id: number}
    try {
        
        const produto = await db.produto.update({

            where:{
                Id

            },
            data:{
                nome,
                Description,
                quantidade
            }
        })
        return NextResponse.json({message: 'OK', produto})
    }  catch (err){

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


//DELETE

export async function DELETE(req:NextRequest){
    const { Id } = await req.json() as {Id: number}
    try {
        
        const produto = await db.produto.delete({

            where:{
                Id

            }
           
        })
        return NextResponse.json({message: 'OK', produto})
    }  catch (err){

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
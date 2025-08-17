'use client'
import Button from "@/components/Button/Index"
import Header from "@/components/Header/Index"
import IconAdd from "../../../public/IconAdd"
import ContainerBorder from "@/components/ContainerBorder/Index"
import IconRecentes from "../../../public/iconRecentes"

import IconAlimentacao from "../../../public/iconAlimentacao"
import ContainerCategoria from "@/components/ContainerCategoria/Index"
import Categoria from "@/components/Categoria/Index"
import HeaderAbas from "@/components/HeaderAbas/Index"
import { useState } from "react"


function Extrato(){

    const [selected, setSelected] = useState('Teste')

    const optionsHeader = [
    {
        "label": "Teste"
    },
    {
        "label": "teste2"
    },
]

    return(
        <main className="w-full p-10">
            {/* <Header title="Receitas e Despesas">
                <Button label="adicionar receita" variant="secondary">
                    <IconAdd width="18"/>
                </Button>
                
                <Button label="adicionar despesa" variant="primary">
                    <IconAdd width="18"/>
                </Button>
            </Header> */}

            <HeaderAbas options={optionsHeader} selected={selected} handleSelected={setSelected}/>

            <div className="flex gap-4 h-[84%] mt-7">

                <section className="w-full">
                    <ContainerBorder iconChildren={<IconRecentes width="20"/>} label="recentes">
                    <div className="max-h-[330px]  overflow-y-auto">

                        <div className="flex flex-col gap-3 ">
                            <div className="self-end">
                                <span className="text-[#393939] font-semibold">07/08</span>

                            </div>
                            <div>
                            <ContainerCategoria color="text-[#CC4444]">
                                <Categoria name={'Alimentação'} description="Aniversário mari/ Armázem" color="#FFDCBC">
                                    <IconAlimentacao width="24"/>
                                </Categoria>

                                <span>R$ 39,98</span>
                            </ContainerCategoria>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="self-end">
                                <span className="text-[#393939] font-semibold">07/08</span>

                            </div>
                            <div>
                            <ContainerCategoria color="text-[#CC4444]">
                                <Categoria name={'Alimentação'} description="Aniversário mari/ Armázem" color="#FFDCBC">
                                    <IconAlimentacao width="24"/>
                                </Categoria>

                                <span>R$ 39,98</span>
                            </ContainerCategoria>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="self-end">
                                <span className="text-[#393939] font-semibold">07/08</span>

                            </div>
                            <div>
                            <ContainerCategoria color="text-[#CC4444]">
                                <Categoria name={'Alimentação'} description="Aniversário mari/ Armázem" color="#FFDCBC">
                                    <IconAlimentacao width="24"/>
                                </Categoria>

                                <span>R$ 39,98</span>
                            </ContainerCategoria>
                            </div>
                            <div>
                            <ContainerCategoria color="text-[#CC4444]">
                                <Categoria name={'Alimentação'} description="Aniversário mari/ Armázem" color="#FFDCBC">
                                    <IconAlimentacao width="24"/>
                                </Categoria>

                                <span>R$ 39,98</span>
                            </ContainerCategoria>
                            </div>
                            <div>
                            <ContainerCategoria color="text-[#CC4444]">
                                <Categoria name={'Alimentação'} description="Aniversário mari/ Armázem" color="#FFDCBC">
                                    <IconAlimentacao width="24"/>
                                </Categoria>

                                <span>R$ 39,98</span>
                            </ContainerCategoria>
                            </div>
                            <div>
                            <ContainerCategoria color="text-[#CC4444]">
                                <Categoria name={'Alimentação'} description="Aniversário mari/ Armázem" color="#FFDCBC">
                                    <IconAlimentacao width="24"/>
                                </Categoria>

                                <span>R$ 39,98</span>
                            </ContainerCategoria>
                            </div>
                            <div>
                            <ContainerCategoria color="text-[#CC4444]">
                                <Categoria name={'Alimentação'} description="Aniversário mari/ Armázem" color="#FFDCBC">
                                    <IconAlimentacao width="24"/>
                                </Categoria>

                                <span>R$ 39,98</span>
                            </ContainerCategoria>
                            </div>
                            <div>
                            <ContainerCategoria color="text-[#CC4444]">
                                <Categoria name={'Alimentação'} description="Aniversário mari/ Armázem" color="#FFDCBC">
                                    <IconAlimentacao width="24"/>
                                </Categoria>

                                <span>R$ 39,98</span>
                            </ContainerCategoria>
                            </div>
                            <div>
                            <ContainerCategoria color="text-[#CC4444]">
                                <Categoria name={'Alimentação'} description="Aniversário mari/ Armázem" color="#FFDCBC">
                                    <IconAlimentacao width="24"/>
                                </Categoria>

                                <span>R$ 39,98</span>
                            </ContainerCategoria>
                            </div>
                        </div>
                    </div>

                    </ContainerBorder>
                </section>


                
                <section className="w-[50%]">

                    <ContainerBorder label="recorrentes">


                    </ContainerBorder>
                </section>
            </div>


        </main>
    )
}

export default Extrato
import { FormEvent, useContext, useEffect, useState } from "react";
import { Button } from "../components/Button";
import { RadioGroupDemo2 } from "../components/radioGroup2/RadioGroup2";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { AnswerContext } from "../contexts/answer";
// interface CheckAgeProps {
//   legalAge: boolean;
// }

export function CheckAge() {
    const navigate = useNavigate();

    const { checkAge, setCheckAge } = useContext(AnswerContext);

    useEffect(() => {
        setCheckAge(undefined)
    }, []);

    async function passSectionOrStep(event: FormEvent) {
        event.preventDefault();
        if (checkAge == undefined) return toast.error("Por favor preencha todos os campos");
        if (!checkAge) return navigate("/agradecimentos")
        navigate("/sociodemografico")
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <form onSubmit={passSectionOrStep} className="flex flex-col justify-start items-center min-h-[83vh] bg-slate-100">

            <table style={{ width: "25%", border: "2px solid black" }}>
                <tr className="border-b border-black">
                    <td>
                        <strong>Quantidade</strong>
                    </td>
                    <td>
                        <strong>Equivale à</strong>
                    </td>
                </tr>
                <tr>
                    <th colSpan={2}>DESTILADOS</th>
                </tr>
                <tr>
                    <td>1 drink com água ou gelo</td>
                    <td>1 dose</td>
                </tr>
                <tr>
                    <td>1 dose de aguardente (25ml)</td>
                    <td>1 dose</td>
                </tr>
                <tr>
                    <td>1 dose destilado (whisky, vodka) (50ml)</td>
                    <td>2 dose</td>
                </tr>
                <tr className="border-b border-black">
                    <td>1 garrafa de aguardente ou whisky (750ml)</td>
                    <td>30 dose</td>
                </tr>


                <tr>
                    <th colSpan={2}>VINHO</th>
                </tr>
                <tr>
                    <td>1 copo de vinho (100 ml)</td>
                    <td>1 dose</td>
                </tr>
                <tr>
                    <td>1 "cooler" de vinho</td>
                    <td>1 dose</td>
                </tr>
                <tr className="border-b border-black">
                    <td>1 copo de sherry ou Vinho do Porto</td>
                    <td>2 dose</td>
                </tr>

                <tr>
                    <th colSpan={2}>CERVEJA</th>
                </tr>
                <tr>
                    <td>1 lata/garrafa pequena de cerveja (350ml)</td>
                    <td>1,5 dose</td>
                </tr>
                <tr>
                    <td>1 garrafa de 600 ml</td>
                    <td>3 dose</td>
                </tr>
                <tr>
                    <td>1 copo chopp (200ml)</td>
                    <td>1 dose</td>
                </tr>
            </table>

            <div>
                <RadioGroupDemo2 label="Você é maior de idade (possui no mínimo 18 anos de idade completos)?"
                    values={["Sim, eu possuo 18 anos completos ou mais.", "Não, eu possuo menos de 18 anos de idade."]}
                    onAnswer={(ans: any) => ans.primaryValue == "Sim, eu possuo 18 anos completos ou mais." ? setCheckAge(true) : setCheckAge(false)}
                    questionId="5000"
                />

                <div className="flex flex-col mx-1">
                    <Button value="Próxima" />
                </div>
            </div>

        </form>
    );
}
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

    const [agreeChecked, setAgreeChecked] = useState(false);

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
            <div>
                <h5 className="text-center my-5 text-lg font-semibold">Termo de Consentimento Livre e Esclarecido</h5>
                <div className=" max-w-2xl text-justify overflow-y-scroll max-h-[25rem] p-5 bg-gray-200
                    max-[430px]:text-sm rounded "
                >
                    Prezado Participante,

                    Gostaríamos de lhe convidar para participar da pesquisa sobre Saúde Mental entre estudantes da área de saúde da UNEB, que lhe apresentamos agora em linhas gerais. É pesquisa coordenada pelo pesquisador responsável e psiquiatra Prof. Dr. Carlos Tadeu da Silva Lima, do Curso de Medicina/Departamento de Ciências da Vida I (DCV1), com a colaboração dos acadêmicos pesquisadores Adriano Tito Souza Vieira e Benjamim Messias de Souza Filho. Não há aqui nenhum financiamento externo. Observa-se que alguns problemas de saúde mental, esgotamento mental (burnout), hábitos de vida, tais como consumo de álcool, e estresse são mais frequentes entre estudantes universitários do que na população geral, mas existem poucos dados sobre esses fenômenos em nossa Instituição.
                    <br />
                    O Objetivo Principal de nossa pesquisa é quantificar esses fenômenos e verificar se há associação com algumas condições de vida e de estudo em nossa Universidade. Este ainda é um estudo-piloto, porque antes de examinarmos estes problemas em detalhe, precisamos estar certos de que estamos usando procedimentos apropriados para atingirmos nossos objetivos, nos certificando inclusive de que as nossas perguntas conseguem detectar o que pretendemos mensurar. Por isso você vai notar que alguns temas são perguntados de mais do que uma forma. Vamos então estabelecer a adequação do questionário e a clareza das questões.
                    <br />
                    O convite à sua participação se deve ao fato de você ser estudante da área de saúde. Você está sendo contactado por e-mail devido ao momento sanitário particular devido à pandemia de COVID-19, onde o distanciamento social é imperativo. Precisamos atingir um número mínimo de 250 participantes/respondentes para atingirmos nossos objetivos nessa etapa. Desta forma, você foi escolhido sem nenhuma razão especial. A escolha de realmente participar deste estudo, entretanto, é inteiramente sua. Como em qualquer pesquisa sobre sintomas psíquicos você pode eventualmente se sentir constrangido ou desconfortável em responder o questionário. As perguntas foram elaboradas de maneira julgada respeitosa, mas, se isso ocorrer, você pode escolher sair do estudo a qualquer momento. Você não será penalizado de nenhuma forma por qualquer decisão que tomar. Os resultados do estudo-piloto, juntamente com as suas opiniões, se as quiser nos fornecer, nos ajudarão a elaborar um estudo bem melhor no próximo ano, ou quando forem liberadas atividades presenciais em nossa Universidade.
                    <br />
                    Você está sendo contactado pelo e-mail que você forneceu à Universidade, mas as informações que você fornecer serão confidenciais e irão diretamente para os autores deste trabalho, no caso, os pesquisadores da UNEB, pelo recurso web desenvolvido por George Guilherme Soares da Silva e João Paulo Fontes Vasconcelos (desenvolvedores de software), onde será solicitado que você responda ao questionário on-line. O formulário com as questões não irão pedir seu nome. A identificação, para fins de organização operacional da pesquisa, será feita apenas através do e-mail e número de matrícula na UNEB que você registrar no formulário, além de algumas informações sociodemograficas. Ainda que muito improvável, existe a possibilidade de algum tipo de atividade hacker obter os dados da pesquisa. As informações ficarão vinculadas a e-mail próprio do grupo de pesquisa, saudementalnauneb@gmail.com. Ninguém mais terá acesso aos dados, que serão guardados em um arquivo sob forma de planilha, com acesso mediante senha de conhecimento exclusivo do Coordenador da pesquisa pelo prazo mínimo de 5 anos. Os dados só serão analisados através de planilha sem menção a nomes, já que eles sequer constarão na base de dados. Só serão divulgados os relatórios finais da pesquisa, onde constarão dados epidemiológicos e estatísticos sob a forma de tabelas e gráficos referentes ao total dos indivíduos entrevistados, com a respectiva análise, sem nenhuma informação sobre indivíduos em particular.
                    <br />
                    Além do direito a não querer participar, você tem direito a solicitar informações sobre suas respostas pessoais e sobre os resultados gerais da pesquisa, através de contato especificado no fim desse termo de consentimento. No fim, a sua decisão será sempre respeitada.
                    <br />
                    Neste momento pedimos a você que clique no botão na parte inferior da tela, “eu declaro compreender e aceitar os termos de consentimento”, concordando em participar desta pesquisa. Você pode imprimir ou guardar cópia eletrônica do termo assinado.
                    <br />
                    A duração do estudo-piloto é de um ano e, com os seus resultados, além de possíveis reformulações no estudo principal, espera-se que muitas ações de saúde possam vir a ser desenvolvidas pela UNEB, visto que ela estará munida de dados quantitativos sobre a saúde mental de seus estudantes. Se houver algum dano, comprovadamente decorrente da presente pesquisa, você terá direito à indenização, através das vias judiciais, como dispõem o Código Civil, o Código de Processo Civil e a Resolução nº 466/2012, do Conselho Nacional de Saúde (CNS).
                    <br />
                    Em caso de dúvida quanto à condução ética do estudo, entre em contato com o Comitê de Ética em Pesquisa da UNEB através do e-mail cepuneb@uneb.br ou pelo telefone (71) 3117-2399. Se preferir, vá diretamente ao CEP-UNEB, localizado na Avenida Engenheiro Oscar Pontes s/n, antigo prédio da Petrobras 2º andar, sala 23. Água de Meninos, Salvador-BA. CEP: 40460-120. O Comitê de Ética é a instância que tem por objetivo defender os interesses dos participantes da pesquisa em sua integridade e dignidade e para contribuir no desenvolvimento da pesquisa dentro de padrões éticos. Dessa forma o comitê tem o papel de avaliar e monitorar o andamento do projeto de modo que a pesquisa respeite os princípios éticos de proteção aos direitos humanos, da dignidade, da autonomia, da não maleficência, da confidencialidade e da privacidade. Se preferir, entre em contato com os pesquisadores através do e-mail do grupo de pesquisa, saudementalnauneb@gmail.com.
                </div>
                <div className="mt-3">
                    <input
                        type="checkbox"
                        id="agree"
                        name="agree"
                        className="mx-2"
                        checked={agreeChecked}
                        onChange={() => setAgreeChecked(!agreeChecked)}
                    />
                    <label htmlFor="agree" className="font-semibold max-[520px]:text-sm">
                        Eu declaro compreender e aceitar os termos de consentimento.
                    </label>
                </div>

                <RadioGroupDemo2 label="Você é maior de idade (possui no mínimo 18 anos de idade )?"
                    values={["Sim, eu possuo 18 anos ou mais.", "Não, eu possuo menos de 18 anos de idade."]}
                    onAnswer={(ans: any) => ans.primaryValue == "Sim, eu possuo 18 anos ou mais." ? setCheckAge(true) : setCheckAge(false)}
                    questionId="5000"
                />

                <div className="flex flex-col mx-1">
                    <Button value="Próxima" enable={agreeChecked} />
                </div>
            </div>

        </form>
    );
}
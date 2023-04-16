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

                    Gostaríamos de lhe convidar para participar da pesquisa sobre <span className="text-red-600 font-semibold">Saúde Mental entre estudantes da área de saúde da Universidade do Estado da Bahia (UNEB)</span>, que lhe apresentamos agora em linhas gerais. É uma pesquisa coordenada pelo pesquisador responsável e psiquiatra Prof. Dr. Carlos Tadeu da Silva Lima, do Curso de Medicina/Departamento de Ciências da Vida I (DCV1), com a colaboração dos acadêmicos pesquisadores <span className="text-violet-600 font-semibold">Adriano Tito Souza Vieira, Benjamim Messias de Souza Filho, Giovanna Beatriz Benjamin Alves Cordeiro, Heloízie Moura Pereira, Gabriel Matias Queiroz, Pedro Eduardo de Moura Souza,</span> <span className="text-violet-600 italic">Isis Gabriella Bernardes Marques e Jéssica de Andrade Ribeiro Lima.</span>
                    <br />
                    Não há aqui nenhum financiamento externo.
                    <br />
                    Observa-se que alguns problemas de saúde mental, esgotamento mental (burnout), hábitos de vida (tais como consumo de álcool) e estresse são mais frequentes entre estudantes universitários do que na população geral.  Ademais, evidências demonstram que esses agravos à saúde estão associados a alguns fatores específicos do processo ensino-aprendizagem, além de outros mais gerais da situação social dos estudantes, mas existem poucos dados sobre esses fenômenos em nossa Instituição.
                    <br />
                    O Objetivo Principal de nossa pesquisa é quantificar esses fenômenos e verificar se há associação com algumas condições de vida e de estudo em nossa Universidade. Você está sendo convidado a participar desta pesquisa por ser estudante <span className="text-red-600 font-semibold">da área de Saúde da UNEB</span>. Sua participação é muito importante para o bom andamento de nossa pesquisa e você foi escolhido(a) sem nenhuma razão específica, apenas pelo fato de ser um indivíduo de nossa população-alvo.
                    <br />
                    Para participar da pesquisa, após assinatura deste Termo de Consentimento Livre e Esclarecido, é solicitado que você preencha formulário de pesquisa anônimo, aqui mesmo nesta aplicação própria publicada na plataforma Vercel. O formulário com as questões não pedirá seu nome. A identificação, para fins de organização operacional da pesquisa, será feita apenas através do e-mail e número de matrícula na UNEB que você registrar no formulário, além de sexo do participante, curso e semestre. O questionário inclui perguntas sobre aspectos sociodemográficos, condições de ensino-aprendizagem e de saúde mental, sendo a maioria de múltipla escolha.  Os questionários <span className="text-red-600 font-semibold">respondidos</span> formarão um banco de dados, em formato de planilha, para análise estatística posterior. Ainda que muito improvável, existe a possibilidade de algum tipo de atividade hacker quebrar o sigilo da pesquisa. Para diminuir esses riscos, após o fim da coleta de dados, os dados serão baixados em computador, e deletados de qualquer tipo de drive, plataforma compartilhada online ou “nuvem”. Outro possível risco é o aumento da percepção de sintomas psicológicos. Só serão divulgados os relatórios finais da pesquisa, onde constarão dados epidemiológicos e estatísticos sob a forma de tabelas e gráficos referentes ao total dos indivíduos entrevistados, sem nenhuma informação sobre indivíduos em particular, e discutidos com comparação à literatura científica existente.
                    <br />
                    A duração deste estudo é de até um ano e, com os seus resultados, espera-se que muitas ações de saúde possam vir a ser desenvolvidas pela UNEB, visto que ela estará munida de dados sobre a saúde mental de seus estudantes. Os resultados dessa pesquisa poderão orientar efetivas ações da UNEB para minorar agravos à saúde mental entre seus estudantes. Se houver algum dano, comprovadamente decorrente da presente pesquisa, você terá direito à indenização, através das vias judiciais, como dispõem o Código Civil, o Código de Processo Civil e a Resolução nº 466/2012, do Conselho Nacional de Saúde (CNS).
                    <br />
                    A escolha de participar do estudo é unicamente sua. Entendemos que conversar sobre saúde mental nem sempre é fácil e expõe eventuais vulnerabilidades individuais, razão pela qual você tem direito de não responder alguma questão que julgar incômoda (mesmo aquelas que constam como obrigatórias no formulário), ou mesmo de desistir da pesquisa a qualquer momento, sem qualquer tipo de penalidade. Justamente pensando nisso, as questões foram elaboradas da maneira mais respeitosa possível. Além do direito de sair da pesquisa a qualquer tempo, é também seu direito requerer suas respostas, o que pode ser feito através de contato pelo e-mail especificado no final deste documento. Ainda, é seu direito também retirar seu consentimento livre e esclarecido a qualquer tempo da pesquisa. Nesse caso, os dados por você fornecidos serão deletados do banco de dados sem nenhum ônus para você.
                    <br />
                    Neste momento pedimos a você que clique no botão na parte inferior da tela, “eu declaro compreender e aceitar os termos de consentimento”, concordando em participar desta pesquisa. Você pode imprimir ou guardar cópia eletrônica do termo assinado, ação a qual encorajamos você a realizar.
                    <br />
                    Anteriormente, fizemos um <span className="text-red-600 font-semibold">estudo-piloto entre estudantes de Medicina e Enfermagem</span> para alinhar nosso instrumento de pesquisa, e talvez você tenha participado dele. Assim, <span className="text-red-600 font-semibold">se você é estudante de um desses cursos</span>, é possível que você se perceba respondendo a perguntas similares. Entretanto, apesar de similares, os objetivos dos estudos são distintos: no piloto, queríamos definir a qualidade de nossas ferramentas de investigação e, aqui, usaremos essas ferramentas para aferir a prevalência de agravos à saúde mental e fatores de risco e proteção a eles associados. <span className="text-red-600 font-semibold">Os dados globais referentes aos estudantes de Medicina e Enfermagem do estudo-piloto serão comparados com os dados globais desta segunda coleta nesse mesmo grupo, visando entender o efeito do período de maior isolamento social, quando ocorreu o estudo-piloto, e o efeito do período de ensino híbrido, com maior flexibilização de mobilidade e contato interpessoal, como ocorre atualmente.</span>
                    <br />
                    Em caso de dúvidas quanto à conduta ética do estudo, entre em contato com o Comitê de Ética em Pesquisa da UNEB através do e-mail cepuneb@uneb.br ou pelo telefone (71) 3117-2399. Se preferir, vá diretamente ao CEP-UNEB, localizado na Avenida Engenheiro Oscar Pontes s/n, antigo prédio da Petrobras 2º andar, sala 23. Água de Meninos, Salvador - BA, CEP: 40460-120. O Comitê de Ética é a instância que tem por objetivo defender os interesses dos participantes da pesquisa em sua integridade e dignidade e para contribuir no desenvolvimento da pesquisa dentro de padrões éticos. Dessa forma o comitê tem o papel de avaliar e monitorar o andamento do projeto de modo que a pesquisa respeite os princípios éticos de proteção aos direitos humanos, da dignidade, da autonomia, da não maleficência, da confidencialidade e da privacidade. Se preferir, entre em contato com os pesquisadores através do e-mail do grupo de pesquisa, saudementalnauneb@gmail.com.
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
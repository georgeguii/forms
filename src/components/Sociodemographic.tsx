import { useContext } from 'react';
import { AnswerContext } from '../contexts/answer';

import { Button } from "./micro-components/Button";
import { InputText } from "./micro-components/InputText";
import { RadioGroupDemo } from "./micro-components/radioGroup/RadioGroup";

export function Sociodemographic() {

  const { submitAnswers } = useContext(AnswerContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    submitAnswers()
  }

  return (
    <div className="flex justify-center items-center ">
      <div className=" flex flex-col justify-center items-center ">
        {/* bg-white rounded-md border-2 */}

        <h2 className="border-b-2 pb-2 text-2xl">Variáveis Sociodemográficas</h2>
        <form onSubmit={handleSubmit}>

          <div className="flex flex-col items-start">

            <InputText label="Número de matrícula UNEB" placeholder="Seu número de matricula, utilizando apenas números" />
            <InputText label="Email" placeholder="Preencha com seu e-mail principal" />
            <InputText label="Idade" placeholder="Sua idade" />

            <RadioGroupDemo label="Sexo:"
              values={["Masculino", "Feminino"]}
              onAnswer={() => console.log("teste")}
              questionId="3"
            />

            <RadioGroupDemo label="Graduação que está cursando atualmente na UNEB"
              values={["Enfermagem", "Medicina"]}
              onAnswer={() => console.log("teste")}
              questionId="4"
            />


            <div className="bg-white rounded-md border-2 mt-4 w-full p-3">
              <span className="ml-8 text-zinc-800 font-semibold">Ano do curso de graduação:</span>
              <div className="flex gap-20 my-4">
                <div className="ml-8">
                  <div>
                    <input type="radio" id="1ano" name="ano" value="1" />
                    <label className="ml-2 text-zinc-800 font-semibold" htmlFor="1ano">1º Ano</label>
                  </div>
                  <div>
                    <input type="radio" id="2ano" name="ano" value="2" />
                    <label className="ml-2 text-zinc-800 font-semibold" htmlFor="2ano">2º Ano</label>
                  </div>
                  <div>
                    <input type="radio" id="3ano" name="ano" value="3" />
                    <label className="ml-2 text-zinc-800 font-semibold" htmlFor="3ano">3º Ano</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="radio" id="4ano" name="ano" value="4" />
                    <label className="ml-2 text-zinc-800 font-semibold" htmlFor="4ano">4º Ano</label>
                  </div>
                  <div>
                    <input type="radio" id="5ano" name="ano" value="5" />
                    <label className="ml-2 text-zinc-800 font-semibold" htmlFor="5ano">5º Ano</label>
                  </div>
                  <div>
                    <input type="radio" id="6ano" name="ano" value="6" />
                    <label className="ml-2 text-zinc-800 font-semibold" htmlFor="6ano">6º Ano</label>
                  </div>
                </div>
              </div>
            </div>


            <div className="bg-white rounded-md border-2 mt-4 w-full p-3">
              <span className="ml-8 text-zinc-800 font-semibold">Semestre atual da graduação</span>
              <div className="flex gap-20 my-4">
                <div className="ml-8">
                  <div>
                    <input type="radio" id="1semestre" name="periodo" value="1" />
                    <label className="ml-2 text-zinc-800 font-semibold" htmlFor="1semestre">1º semestre</label>
                  </div>
                  <div>
                    <input type="radio" id="2semestre" name="periodo" value="2" />
                    <label className="ml-2 text-zinc-800 font-semibold" htmlFor="2semestre">2º semestre</label>
                  </div>
                  <div>
                    <input type="radio" id="3semestre" name="periodo" value="3" />
                    <label className="ml-2 text-zinc-800 font-semibold" htmlFor="3semestre">3º semestre</label>
                  </div>
                  <div>
                    <input type="radio" id="4semestre" name="periodo" value="4" />
                    <label className="ml-2 text-zinc-800 font-semibold" htmlFor="4semestre">4º semestre</label>
                  </div>
                  <div>
                    <input type="radio" id="5semestre" name="periodo" value="5" />
                    <label className="ml-2 text-zinc-800 font-semibold" htmlFor="5semestre">5º semestre</label>
                  </div>
                  <div>
                    <input type="radio" id="6semestre" name="periodo" value="6" />
                    <label className="ml-2 text-zinc-800 font-semibold" htmlFor="6semestre">6º semestre</label>
                  </div>
                  <div>
                    <input type="radio" id="semestre" name="periodo" value="0" />
                    <label className="ml-2 text-zinc-800 font-semibold" htmlFor="semestre">Estou dessemestralizado(a)</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="radio" id="7semestre" name="periodo" value="7" />
                    <label className="ml-2 text-zinc-800 font-semibold" htmlFor="7semestre">7º semestre</label>
                  </div>
                  <div>
                    <input type="radio" id="8semestre" name="periodo" value="8" />
                    <label className="ml-2 text-zinc-800 font-semibold" htmlFor="8semestre">8º semestre</label>
                  </div>
                  <div>
                    <input type="radio" id="9semestre" name="periodo" value="9" />
                    <label className="ml-2 text-zinc-800 font-semibold" htmlFor="9semestre">9º semestre</label>
                  </div>
                  <div>
                    <input type="radio" id="10semestre" name="periodo" value="10" />
                    <label className="ml-2 text-zinc-800 font-semibold" htmlFor="10semestre">10º semestre</label>
                  </div>
                  <div>
                    <input type="radio" id="11semestre" name="periodo" value="11" />
                    <label className="ml-2 text-zinc-800 font-semibold" htmlFor="11semestre">11º semestre</label>
                  </div>
                  <div>
                    <input type="radio" id="12semestre" name="periodo" value="12" />
                    <label className="ml-2 text-zinc-800 font-semibold" htmlFor="12semestre">12º semestre</label>
                  </div>
                </div>
              </div>
            </div>


            <RadioGroupDemo label="Renda familiar mensal média"
              values={["Até 2 salários mínimos", "Entre 2 e 4 salários mínimos", "Entre 4 e 10 salários mínimos", "Entre 10 e 20 salários mínimos", "Acima de 20 salários mínimos"]}
              onAnswer={() => console.log("teste")}
              questionId="10"
            />


            <RadioGroupDemo label="Eu considero ter uma rede de apoio familiar sólida"
              values={["Concordo fortemente", "Concordo", "Discordo", "Discordo fortemente"]}
              onAnswer={() => console.log("teste")}
              questionId="11"
            />

            <RadioGroupDemo label="Status de relacionamento"
              values={["Solteiro", "Namorando", "Casado", "Viúvo"]}
              onAnswer={() => console.log("teste")}
              questionId="12"
            />

            <RadioGroupDemo label="O participante considera ter dificuldade para fazer amigos?"
              values={["Sim", "Não"]}
              onAnswer={() => console.log("teste")}
              questionId="13"
            />

            <RadioGroupDemo label="Autoavaliação do desempenho escolar"
              values={["Péssimo", "Regular", "Bom", "Excelente"]}
              onAnswer={() => console.log("teste")}
              questionId="13"
            />

            <RadioGroupDemo label="O participante pensa ou já pensou em desistir do curso de graduação?"
              values={["Não, nunca", "Sim, mas não penso mais", "Sim, ainda penso"]}
              onAnswer={() => console.log("teste")}
              questionId="14"
            />

            <RadioGroupDemo label="Número de horas de estudo, por semana, nos últimos 3 meses"
              values={["Poucas (<24h)", "Moderadas (>24h - <40h)", "Muitas (>40h)"]}
              onAnswer={() => console.log("teste")}
              questionId="15"
            />

          </div>

          <div className="flex justify-end">
            <Button value="Continuar" />
          </div>

        </form>

      </div>
    </div>
  );
}
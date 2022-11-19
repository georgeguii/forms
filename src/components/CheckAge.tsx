import { Footer } from "./Footer";
import { Button } from "./micro-components/Button";
import { RadioGroupDemo } from "./micro-components/radioGroup/RadioGroup";

export function CheckAge() {
  return (
    <div className="flex flex-col justify-center items-center ">

      <h2 className="my-10 text-2xl font-bold">Estudo Piloto - Saúde Mental UNEB: CIS-R + PHQ9 + GHQ12</h2>

      <div>
        <RadioGroupDemo label="Você é maior de idade (possui no mínimo 18 anos de idade completos)?"
          values={["Sim, eu possuo 18 anos completos ou mais.", "Não, eu possuo menos de 18 anos de idade."]}
          onAnswer={() => console.log("teste")}
          questionId="1"
        />
        <Button value="Próxima" />
      </div>

      <Footer />
    </div>
  );
}
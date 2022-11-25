
import { useState } from "react";
import { Button } from "./micro-components/Button";
import { RadioGroupDemo } from "./micro-components/radioGroup/RadioGroup";

// interface CheckAgeProps {
//   legalAge: boolean;
// }

// const [legalAge, setlegalAge] = useState<boolean>(false);

export function CheckAge() {
  return (
    <div className="flex flex-col justify-center items-center ">

      <div>
        <RadioGroupDemo label="Você é maior de idade (possui no mínimo 18 anos de idade completos)?"
          values={["Sim, eu possuo 18 anos completos ou mais.", "Não, eu possuo menos de 18 anos de idade."]}
          onAnswer={() => console.log("teste")}
          questionId="1"
        />
        <div className="flex flex-col items-end">
          <Button value="Próxima" />
        </div>
      </div>

    </div>
  );
}
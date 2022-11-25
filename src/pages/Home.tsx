import { CheckAge } from '../components/CheckAge';
import { Sociodemographic } from '../components/Sociodemographic';

interface Answer {
  questionId: string;
  value: string;
  description: string
}

export function Home() {

  let answers: Answer[] = [];

  function handleAnswers(answer: Answer) {
    const indexAnswer = answers.findIndex(ans => ans.questionId === answer.questionId);
    if (indexAnswer > -1) answers[indexAnswer] = answer;
    else answers.push(answer);
    console.log(answer)
  }

  return (

    <div className='bg-slate-100 min-h-[81vh]'>
      <h2 className="flex justify-center items-center py-10 text-2xl font-bold">Estudo Piloto - Saúde Mental UNEB: CIS-R + PHQ9 + GHQ12</h2>
      <Sociodemographic />

    </div>
  )
}
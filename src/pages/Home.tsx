import { useEffect, useState, FormEvent, useContext, useRef } from 'react';
import { Button } from '../components/Button';
import { RadioGroupDemo } from '../components/radioGroup/RadioGroup';
import { useFetch } from '../hooks/useFetch';
import { useRegister } from '../hooks/useRegister';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { TextField } from '../components/TextField';
import { AnswerContext } from '../contexts/answer';
import { RadioGroupDemo2 } from '../components/radioGroup2/RadioGroup2';
import ProgressDemo from '../components/progress/Progress';
import { LabelForm } from '../components/Label';

interface Answer {
  questionId: number;
  primaryValue: string;
  secondaryValue: string;
  radioIndex: string;
  type: number;
  sectionId?: number;
}

interface section {
  name: string,
  questions: any,
  id: number
  description?: string;
}

export function Home() {

  const { data: sections, isFetching } = useFetch<section[]>('/section')
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [actualStep, setActualStep] = useState<any>();
  const { answer, setAnswer } = useContext(AnswerContext);

  const navigate = useNavigate();

  var isFinished = useRef(false)
  var isFirstSection19 = useRef(true)

  let count = useRef(0)

  useEffect(() => {
    if (count.current == 0 && Object.values(answer).findIndex((val: any) => ["", null, undefined].includes(val)) >= 0) {
      navigate("/agradecimentos")
    }

  }, [answer]);

  useEffect(() => {
  }, [currentSection, actualStep]);

  var currentStep: any
  var nextStep: any

  let lastSection = false


  splitQuestions()
  function splitQuestions() {

    if (!sections) return;

    if (actualStep?.find((q: any) => q.id == 59)) {
      if (answers.findIndex(ans => [58, 57, 56].includes(Number(ans.questionId)) && ans.primaryValue == "1") < 0) {
        actualStep.shift();
      }

    }

    let questions = actualStep?.length > 0 ? actualStep : []
    if (questions.length == 0) {
      if (sections[currentSection].name == "PÂNICO") {
        if (answers.findIndex(ans => [76, 70].includes(ans.questionId)) <= 0) {
          setCurrentSection(currentSection + 1)
        }
      }
      questions = sections[currentSection].questions
    }

    let questionFiltred = questions.find((question: any) => question.radios.some((radio: any) => radio.action != null))

    let indexFilterQuestion = 100000;
    if (questionFiltred) {
      indexFilterQuestion = questionFiltred.id
    }

    currentStep = questions.filter((question: any) => question.id <= indexFilterQuestion) //carrega todas as questoes até a pergunta filtro (ele é incluida)
    nextStep = currentStep.length != questions.length ? questions.slice(currentStep.length, questions.length) : [] // carrega todas as questoes após a primeira questão filtro
    if (nextStep.length == 0 && (sections && sections[sections.length - 1].name == sections[currentSection].name)) lastSection = true;

  }

  function convertDate(date: string) {
    if (!date) return date;
    const [year, month, day] = date.split('-');
    return [month, day, year].join('/');
  }


  function generateQuestions() {
    if (!currentStep) return;

    if (currentSection == 18) {
      let obj = {} as any;

      for (let index = 2; index < 19; index++) {
        obj["sec" + (index - 1)] = answers.filter(ans => ans.type == 1 && ans.sectionId == index).reduce((a, { primaryValue }) => a + Number(primaryValue), 0).toString();
      }

      let sectionsToShow = Object.values(obj).map((value: any, index: any) => { if (Number(value) >= 2) { return index + 2 } }).filter((ans: any) => ans);

      if (sectionsToShow.length <= 0) {
        setCurrentSection(19)
        return;
      }

      if (isFirstSection19.current) {
        handleAnswers({ primaryValue: "", secondaryValue: "", radioIndex: "", questionId: 112, sectionId: 19, type: 1 })
        handleAnswers({ sectionId: 19, type: 0, primaryValue: "", questionId: 113, secondaryValue: "", radioIndex: "" })
        isFirstSection19.current = false;
      }

      return <>

        <RadioGroupDemo2 label="Você me disse que teve alguns problemas durante a semana passada, qual desses problemas mais o incomodou?"
          values={sections ? sections?.filter((sec: any) => sectionsToShow.includes(sec.id)).map((sec: any) => sec.name) : []}
          onAnswer={(ans: any) => handleAnswers({ ...ans, questionId: 112, sectionId: 19, type: 1 })}
          questionId="112"
        />
        <div className="mt-4 pl-8 pr-6 py-8 w-full bg-white rounded-md border-2">
          <LabelForm label="Quando este problema começou? " />
          <input className="bg-slate-100 py-3 px-4 rounded text-sm mt-1
          border-b-slate-500 text-gray-700
          placeholder:text-gray-400
          hover:border-gray-800
          focus:text-gray-800
          focus:border-gray-50 "
            onChange={(e: any) => handleAnswers({ sectionId: 19, type: 0, primaryValue: convertDate(e.target.value), questionId: 113, secondaryValue: "", radioIndex: "" })} type="date"></input>
        </div>
      </>

    }


    return currentStep.map((question: any) => {
      switch (question.type) {
        case 0:
          return <TextField label={question.label} key={question.id} questionId={question.id} onAnswer={(answer: Answer) => handleAnswers(answer)} />
        case 1:
          return <RadioGroupDemo sectionId={sections != null ? sections[currentSection].id : undefined} questionType={question.type} label={question.label} values={question.radios} questionId={question.id} onAnswer={(answer: Answer) => handleAnswers(answer)} key={question.id} questionDescription={question.description} />
        case 2:
          return <RadioGroupDemo sectionId={sections != null ? sections[currentSection].id : undefined} questionType={question.type} label={question.label} values={question.radios} questionId={question.id} onAnswer={(answer: Answer) => handleAnswers(answer)} key={question.id} showRadioWithChildren={true} questionDescription={question.description} />
        case 3:
          return <RadioGroupDemo sectionId={sections != null ? sections[currentSection].id : undefined} questionType={question.type} label={question.label} values={question.radios} questionId={question.id} onAnswer={(answer: Answer) => handleAnswers(answer)} showDescription={true} key={question.id} questionDescription={question.description} />
        case 4:
          return <RadioGroupDemo sectionId={sections != null ? sections[currentSection].id : undefined} questionType={question.type} label={question.label} values={question.radios} questionId={question.id} onAnswer={(answer: Answer) => handleAnswers(answer)} showOtherType={true} key={question.id} questionDescription={question.description} />
      }
    })
  }


  function handleAnswers(answer: Answer) {
    const indexAnswer = answers.findIndex(ans => ans.questionId === answer.questionId);
    if (indexAnswer > -1) answers[indexAnswer] = answer;
    else answers.push(answer);

    setAnswers(answers)
  }

  function generateProgress() {
    return <ProgressDemo value={currentSection} />
  }

  async function passSectionOrStep(event: FormEvent) {
    event.preventDefault();

    if (isFinished.current) return;

    //Valida se todas as questoes foram respondidas, incluindo o campo secundario se houver
    if (sections) {
      if (answers.findIndex(ans => [null, "", []].includes(ans.primaryValue)) >= 0) return toast.error("Por favor preencha todos os campos"); // se estiver faltando questão sem resposta

      let questionsWithSecondaryValue = sections[currentSection].questions.filter((question: any) => [2, 3].includes(question.type)).map((question: any) => ({ id: question.id, firstRadioValue: question.radios[0].value }))
      if (questionsWithSecondaryValue.findIndex((q: any) => answers.findIndex(ans => (ans.questionId == q.id && ans.primaryValue != q.firstRadioValue && !ans.secondaryValue)) >= 0) >= 0) return toast.error("Por favor preencha todos os campos");

      let questionsWithSecondaryValue2 = sections[currentSection].questions.filter((question: any) => 4 == question.type).map((question: any) => ({ id: question.id, lastRadioValue: question.radios[question.radios.length - 1].value }))
      if (questionsWithSecondaryValue2.findIndex((q: any) => answers.findIndex(ans => (ans.questionId == q.id && ans.primaryValue == q.lastRadioValue && !ans.secondaryValue)) >= 0) >= 0) return toast.error("Por favor preencha todos os campos");
    }

    let lastQuestion = currentStep[currentStep.length - 1];
    let indexRadioFilter = lastQuestion.radios.findIndex((radio: any) => radio.action != null)
    let isQuestionFilter = indexRadioFilter >= 0

    let lastAnswer = isQuestionFilter ? answers.find(ans => ans.questionId == lastQuestion.id) : null
    let isEnterSection = isQuestionFilter ? lastAnswer?.radioIndex == indexRadioFilter && lastQuestion.radios[indexRadioFilter].action == 5 && lastAnswer?.primaryValue == lastQuestion.radios[indexRadioFilter].value : false
    let isToSkipSection = isQuestionFilter ? lastAnswer?.radioIndex == indexRadioFilter && lastQuestion.radios[indexRadioFilter].action == 0 && lastAnswer?.primaryValue == lastQuestion.radios[indexRadioFilter].value : nextStep.length == 0
    let isToSkipTwoSections = isQuestionFilter && !isToSkipSection && !isEnterSection ? lastAnswer?.radioIndex == indexRadioFilter && lastQuestion.radios[indexRadioFilter].action == 1 && lastAnswer?.primaryValue == lastQuestion.radios[indexRadioFilter].value : false

    console.log(answers)
    
    if(lastQuestion.id == 10 ){
      if( answers.filter(ans => [10, 9].includes(ans.questionId) && ans.radioIndex.toString() == "1").length > 0 ) isEnterSection = true;
    } 

    if(lastQuestion.id == 50 ){
      if( answers.filter(ans => [50, 49].includes(ans.questionId) && ans.radioIndex.toString() == "1").length > 0 ) isEnterSection = true;
    } 

    if (lastSection) {

      isFinished.current = true;

      let sectionSums = [] as any;

      for (let index = 2; index < 28; index++) {
        let obj = {} as any;
        obj.Sum = answers.filter(ans => ans.type == 1 && ans.sectionId == index && ![9,10,11,16,17,23,24,29,30,36,37,43,44,61,62,68,69,81,82,88,89,95,96,102,103,86,87].includes(ans.questionId)).reduce((a, { primaryValue }) => a + Number(primaryValue), 0).toString()
        obj.SectionRef = index - 1;
        sectionSums.push(obj)
      }
      await useRegister('/form', {
        sociodemographic: answer,
        answers,
        sectionSums
      })
      navigate("/agradecimentos");
    }

    if (isEnterSection || isToSkipTwoSections) {
      let questionToExclude = [] as any;
      nextStep.forEach((question: any) => {
        if (question.radios.findIndex((radio: any) => radio.action == 5) >= 0) {
          questionToExclude.push(question.id)

        }
      })
      if (questionToExclude.length > 0) {
        nextStep = nextStep.filter((question: any) => !questionToExclude.includes(question.id))
      }
      setActualStep(nextStep)
    }
    else if (isToSkipSection) {
      setCurrentSection(currentSection + 1)
      setActualStep(null)
    }
    else if (lastQuestion.radios[indexRadioFilter].action == 1 && nextStep.findIndex((question: any) => question.radios.findIndex((radio: any) => radio.action == 1) >= 0) < 0) {
      setCurrentSection(currentSection + 2)
      setActualStep(null)
    }
    else if (lastQuestion.radios[indexRadioFilter].action == 5 && nextStep.findIndex((question: any) => question.radios.findIndex((radio: any) => radio.action != null) >= 0) < 0) {
      setCurrentSection(currentSection + 1)
      setActualStep(null)
    }
    //fazer validação
    else if (!isToSkipSection) {
      setActualStep(nextStep)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {answer ?
        <div className="flex flex-col justify-center items-center bg-slate-100">
          <form className="min-h-[84vh] max-w-4xl my-5" onSubmit={passSectionOrStep}>
            <h1 className='text-bluePurple-500 text-2xl font-bold ml-2'>{sections ? sections[currentSection].name : ""}</h1>
            <div className='my-3 ml-2'>
              {sections ? generateProgress() : ""}
            </div>

            <h1 className='text-bluePurple-500 text-base mt-4 font-bold ml-2'>{sections ? sections[currentSection].description ?? "" : ""}</h1>
            <div >
              {

                sections && sections[currentSection].name == "AUDIT-C" ?
                  <table className='my-3 w-full border-2 border-black'>
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
                  :
                  ""
              }
            </div>
            <hr />
            {isFetching && <span>Carregando...</span>}
            {generateQuestions()}

            <div className='flex flex-col  mx-1'>
              {sections ? <Button value={lastSection && nextStep.length == 0 ? 'Finalizar' : 'Continuar'} /> : ""}
            </div>
          </form>
        </div>
        :
        setAnswer(undefined)
      }
    </>
  )
}
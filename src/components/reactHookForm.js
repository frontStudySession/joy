// react hook form study memo

/*
import { useForm } from 'react-hook-form';

1️⃣ useForm Props

const { register } = useForm<FormInputs>({
  mode: 'onSubmit',
  reValidateMode: 'onChange',
  defaultValues: {},
  resolver: undefined,
  context: undefined,
  criteriaMode: "firstError",
  shouldFocusError: true,
  shouldUnregister: false,
  shouldUseNativeValidation: false,
  delayError: undefined
})

  • mode : onSubmit(default) | onChange | onBlur | onTouched | all = 'onSubmit'
      form의 유효성 검사를 어느 동작때 시행할지 설정
      onChange와 all은 과도한 렌더링으로 성능 저하 발생

  • reValidateMode : onChange(default) | onBlur | onSubmit = 'onChange'
      form 제출 후 오류가 발생할때, 다시 유효성 검사할때 어느 동작에 시행할지 설정

  • defaultValues : Record<string, any> = {}
      form의 기본값 세팅
      기본적으로 <input>태그에 defaultValue를 설정하면 <input>태그 안에 값을 가짐
      그러나 useForm의 defaultValues를 사용하면, <input>태그 안에 값을 가지지 않음
  
  • resolver : (values: any, context?: object) => Promise<ResolverResult> | ResolverResult
      유효성 검사 라이브러리  

  • conext : 유효성 검사 라이브러리인 Yup 의 context로 사용
    
  • criteriaMode : firstError(default) | all
      감지할 에러 설정
      firstError로 설정시 register로 등록된 form의 에러들 중, 첫번째 에러만 감지
      all로 설정시 모든 에러 감지

  • shouldUnregister : boolean = true | false(default)
      form이 unmount되면 값이 사라지게 만들지, 아닐지 설정

  • shouldFocusError : boolean = true(default) | false
      유효성 검사 실행 후, 에러가 발생한 form의 focus를 시행할지 설정
      focus는 register를 등록한 순서(위에서 아래로) 진행

  • shouldUseNativeValidation : boolean = false(default) | true
      브라우저의 기본 유효성 검사를 활성화할지 설정
      :valid, :invalid와 같은 CSS 선택자로 스타일링 가능

  • delayError : number
      에러메시지 표시 지연시간 설정


2️⃣ register Options

  • ref
      ex) <input {...register("test")} />

  • required
      ex) required {
        value: boolean = true | false,
        message: string
      }
      form 입력 유무를 확인, value: true이면 필수 입력
      미입력시 error가 발생하며, message: '에러 메시지' 로 에러메시지 설정
  
  • maxLength
      ex) maxLength : {
          value: number,
          message: string
      }
      form의 최대길이 설정. 최대길이 오버시 에러 발생
  
  • minLength
      ex) minLength : {
        value: number,
        message: string
      }
      form의 최소길이 설정. 최소길이 미충족시 에러 발생

  • max
      ex) max : {
        value: number,
        message: string
      }
      form inputType이 숫자일 때 최댓값 설정. 최댓값 오버시 에러 발생

  • min
      ex) min : {
        value: number,
        message: string
      }
      form inputType이 숫자일 때 최솟값 설정. 최솟값 미충족시 에러 발생
  
  • pattern
      ex) pattern : {
        value: RegExp,
        message: string
      }
      정규식 적용. 

  • disabled
      ex) disabled : boolean = false(default) | true
      <input disabled /> 와 동일하게 동작
  
  • onChange
      ex) onChange : (e: SyntheticEvent) => void
      onChange 이벤트 설정

  • onBlur
      ex) onBlur : (e: SyntheticEvent) => void
      onBlur 이벤트 설정
  
  • value
      ex) value: any
      초기 입력값 설정
      

3️⃣ Controller

  속성
  • control : useForm에서 제공하는 control을 등록
  • name : 유효성 검증하려는 변수명 입력
  • render : 검증이 필요한 컴포넌트 등록

  field 값
  • onChange : 컴포넌트에서 발생된 onChange 이벤트를 hook form에 전달
  • onBlur : 컴포넌트에서 발생된 onBlur 이벤트를 hook form에 전달
  • value : 현재 hook form에 저장되어 있는 Controller에 등록된 name의 value값
  • ref : error가 발생되었을 때 focusing 제공을 위해 사용
*/

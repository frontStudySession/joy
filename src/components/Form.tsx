import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

// Field Values
interface MyFormInput {
  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  phonenumber: number | undefined;
  title: string | undefined;
  developer: boolean | undefined;
}

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aligns-item: center;
  font-size: 0.7rem;
  width: 100%;
  max-width: 600px;
`;

const Input = styled.input<{ 'aria-invalid': string | null }>`
  outline: none;
  border: 0;
  border-radius: 0.3rem;
  padding: 0.7rem;
  margin-top: 0.3rem;
  background-color: ${(props) => props['aria-invalid']};
`;

const Label = styled.label`
  margin-top: 0.8rem;
  font-weight: 600;
`;

const SelectBox = styled.select`
  border: 0;
  border-radius: 0.3rem;
  padding: 0.7rem;
  background: #f9f9f9;
  margin-top: 0.3rem;
  &:active {
    border: 0;
  }
`;

const JobInput = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SubmitButton = styled.input`
  outline: none;
  border: 0;
  border-radius: 0.3rem;
  padding: 1rem;
  background: #e5f0ff;
  margin: 0.5rem 0;
  font-family: 'DNFBitBitv2';
`;

const ErrorMessage = styled.p`
  color: Red;
  margin-top: 0.1rem;
  margin-bottom: 0rem;
`;

export default function Form() {
  // register 함수로 입력란 등록
  // handleSubmit 함수로 form 요소에서 발생하는 event 처리
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<MyFormInput>();

  const onValid = (data: any) => {
    alert('SUCCESS');
    console.log(data);
    for (const input in data) {
      console.log(`${input}: ${data[input]}`);
    }
  };
  const onInvalid = (errors: any) => {
    alert('FAIL');
    for (const error in errors) {
      console.log(`${error} => ${errors[error].message}`);
    }
  };

  return (
    <MyForm onSubmit={handleSubmit(onValid, onInvalid)}>
      <Label htmlFor="name">First name</Label>
      <Input
        type="text"
        placeholder="ex. 미지"
        aria-invalid={errors.firstname ? '#fee9ec' : '#f9f9f9'}
        {...register('firstname', {
          required: 'Required first name',
          maxLength: 80,
          minLength: 1,
        })}
      />
      {errors.firstname && (
        <ErrorMessage>{errors.firstname.message}</ErrorMessage>
      )}

      <Label htmlFor="name">Last name</Label>
      <Input
        type="text"
        placeholder="ex. 김"
        aria-invalid={errors.lastname ? '#fee9ec' : '#f9f9f9'}
        {...register('lastname', {
          required: 'Required last name',
          maxLength: 100,
          minLength: 1,
        })}
      />
      {errors.lastname && (
        <ErrorMessage>{errors.lastname.message}</ErrorMessage>
      )}

      <Label htmlFor="email">Email</Label>
      <Input
        type="text"
        placeholder="ex. unknown@gmail.com"
        aria-invalid={errors.email ? '#fee9ec' : '#f9f9f9'}
        {...register('email', {
          required: 'Required email',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: '이메일 형식에 맞지 않습니다.',
          },
        })}
      />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

      <Label htmlFor="phonenum">Phone number</Label>
      <Input
        type="number"
        placeholder="ex. 01012345678"
        aria-invalid={errors.phonenumber ? '#fee9ec' : '#f9f9f9'}
        {...register('phonenumber', {
          required: 'Required phone number',
          minLength: 6,
          maxLength: 11,
        })}
      />
      {errors.phonenumber && (
        <ErrorMessage>{errors.phonenumber.message}</ErrorMessage>
      )}

      <Label htmlFor="name">Title</Label>
      <SelectBox {...register('title', { required: 'Required title' })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </SelectBox>
      {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}

      <p>Are you a developer?</p>
      <JobInput>
        <label htmlFor="developer">Yes</label>
        <input
          {...register('developer', { required: 'Required developer' })}
          type="radio"
          value="Yes"
          checked
        />
        <label htmlFor="developer">No</label>
        <input
          {...register('developer', { required: 'Required developer' })}
          type="radio"
          value="No"
        />
      </JobInput>
      {errors.developer && (
        <ErrorMessage>{errors.developer.message}</ErrorMessage>
      )}

      <SubmitButton
        type="submit"
        value="submit"
      />
    </MyForm>
  );
}

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import { formSchema } from '@src/schema/formSchema';

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aligns-item: center;
  font-size: 0.7rem;
  width: 100%;
  max-width: 600px;
`;

const Input = styled.input`
  outline: none;
  border: 0;
  border-radius: 0.3rem;
  padding: 0.7rem;
  margin-top: 0.3rem;
  background-color: ${(props) =>
    props['aria-invalid'] ? '#fee9ec' : '#f9f9f9'};
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

// schema
const schema = formSchema.required();

export default function Form() {
  // register 함수로 입력란 등록
  // handleSubmit 함수로 form 요소에서 발생하는 event 처리
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      // 초기값 설정
      firstName: '',
      lastName: '',
      email: '',
      phone: 1234,
      title: 'Mr',
      developer: 'yes',
    },
  });

  const onValid = (data: any) => {
    console.log('SUCCESS', data);
    for (const input in data) {
      console.log(`${input}: ${data[input]}`);
    }
  };
  const onInvalid = (errors: any) => {
    console.log('FAIL');
    for (const error in errors) {
      console.log(`${error} => ${errors[error].message}`);
    }
  };

  const encodeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.currentTarget as HTMLInputElement;
    const files = fileInput.files;
    if (files && files.length) {
      const isText = /\.txt$/i.test(files[0].name);
      if (!isText) {
        alert('it takes only .txt extension.');
        fileInput.value = '';
        return;
      }
      const text = await files[0].text();
      alert(`text file => ${text}`);
    }
  };

  return (
    <MyForm onSubmit={handleSubmit(onValid, onInvalid)}>
      <Label htmlFor="firstName">First name</Label>
      <Controller
        control={control}
        name={'firstName'}
        render={({ field: { value, onChange, ref } }) => (
          <Input
            id="firstName"
            type="text"
            placeholder="ex. 미지"
            aria-invalid={errors.firstName ? true : false}
            ref={ref}
            value={value}
            onChange={onChange}
          />
        )}
      />
      {errors.firstName && (
        <ErrorMessage>{errors.firstName.message}</ErrorMessage>
      )}

      <Label htmlFor="lastName">Last name</Label>
      <Controller
        control={control}
        name={'lastName'}
        render={({ field: { value, onChange, ref } }) => (
          <Input
            id="lastName"
            type="text"
            placeholder="ex. 김"
            aria-invalid={errors.lastName ? true : false}
            ref={ref}
            value={value}
            onChange={onChange}
          />
        )}
      />
      {errors.lastName && (
        <ErrorMessage>{errors.lastName.message}</ErrorMessage>
      )}

      <Label htmlFor="email">Email</Label>
      <Controller
        control={control}
        name={'email'}
        render={({ field: { value, onChange, ref } }) => (
          <Input
            id="email"
            type="text"
            placeholder="ex. unknown@gmail.com"
            aria-invalid={errors.email ? true : false}
            ref={ref}
            value={value}
            onChange={onChange}
          />
        )}
      />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

      <Label htmlFor="phone">Phone number</Label>
      <Controller
        control={control}
        name={'phone'}
        render={({ field: { value, onChange, ref } }) => (
          <Input
            id="phone"
            type="text"
            input-mode="numeric"
            placeholder="ex. 01012345678"
            aria-invalid={errors.phone ? true : false}
            ref={ref}
            value={value}
            onChange={onChange}
          />
        )}
      />
      {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}

      <Label htmlFor="title">Title</Label>
      <Controller
        control={control}
        name={'title'}
        render={({ field: { value, onChange, ref } }) => (
          <SelectBox
            id="title"
            ref={ref}
            value={value}
            onChange={onChange}
          >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </SelectBox>
        )}
      />
      {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}

      <p>Are you a developer?</p>
      <JobInput>
        <label htmlFor="developer">Yes</label>
        <Controller
          control={control}
          name={'developer'}
          render={({ field: { value, onChange, ref } }) => (
            <input
              id="developer"
              name="developer"
              type="radio"
              value="yes"
              ref={ref}
              onChange={onChange}
              checked
            />
          )}
        />
        <label htmlFor="developer">No</label>
        <Controller
          control={control}
          name={'developer'}
          render={({ field: { value, onChange, ref } }) => (
            <input
              id="developer"
              name="developer"
              type="radio"
              value="no"
              ref={ref}
              onChange={onChange}
            />
          )}
        />
      </JobInput>
      {errors.developer && (
        <ErrorMessage>{errors.developer.message}</ErrorMessage>
      )}

      <Label htmlFor="file">File</Label>
      <Controller
        control={control}
        name={'file'}
        render={({ field: { value, onChange, ref } }) => (
          <Input
            id="file"
            type="file"
            accept=".txt"
            aria-invalid={errors.file ? true : false}
            ref={ref}
            onChange={(e) => encodeFile(e)}
          />
        )}
      />

      <SubmitButton
        type="submit"
        value="submit"
      />
    </MyForm>
  );
}

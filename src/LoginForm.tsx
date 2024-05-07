import { useCallback } from 'react';
import { useForm, SubmitHandler, Controller, ControllerProps } from "react-hook-form";
import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';

import { useLoginMutation } from './api';
import { isErrorWithMessage } from './helpers';
import { LoginFormData } from './types';

export const LoginForm = () => {
  const [login, result] = useLoginMutation();
  const { register, formState: { errors }, control, handleSubmit } = useForm<LoginFormData>()

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    login(data);
  };

  const passwordRenderFn = useCallback<
    ControllerProps<LoginFormData, "password">["render"]
  >(
    ({ field }) => (
        <>
          <FloatLabel>
            <Password
              id="password"
              toggleMask
              feedback={false}
              invalid={Boolean(errors.password)}
              inputRef={field.ref}
              onChange={field.onChange}
            />
            <label htmlFor="password" className={classNames({'text-red-500': Boolean(errors.password)})}>Password*</label>
          </FloatLabel>
          {errors.password && <div className="text-red-500 pt-2">{errors.password.message}</div>}
        </>
      ),
  [errors.password]);

  return (
    <div className="flex justify-content-center">
      <div className="max-w-30rem w-full">
        <h5 className="text-center mb-5 text-color">Login Form</h5>
        <form className="p-fluid" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <FloatLabel>
              <IconField>
                <InputIcon className={'pi pi-envelope'} />
                <InputText
                  id="username"
                  className={classNames({'p-invalid': errors.username})}
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
              </IconField>
              <label htmlFor="username" className={classNames({ 'text-red-500': errors.username })}>Username*</label>
            </FloatLabel>
            {errors.username && <div className="text-red-500 pt-2">{errors.username?.message}</div>}
          </div>
          <div className="mb-5">
            <Controller
              control={control}
              name="password"
              rules={{ required: "Password is required" }}
              render={passwordRenderFn}
            />
          </div>
          {isErrorWithMessage(result.error) && <div className="text-red-500 mb-4">{result.error.data.message}</div>}
          {result.data && <div className="successful-login-message mb-5">Loginned Successfully</div>}
          <Button type="submit" className="login-button" label="Login" />
        </form>
      </div>
    </div>
  );
}

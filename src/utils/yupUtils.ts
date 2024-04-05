import * as Yup from 'yup';
import { FormikProps, FormikValues } from 'formik';

interface ValidationError {
  path: string;
  message: string;
}

export const setValidationErrors = (
  formRef: React.RefObject<FormikProps<FormikValues>>,
  errors: Yup.ValidationError
) => {
  const validationErrors: { [key: string]: string } = {};

  errors.inner.forEach((error) => {
    if (error.path) {
      validationErrors[error.path] = error.message;
    }
  });

  formRef.current?.setErrors(validationErrors);
};

export const setValidationError = (
  formRef: React.RefObject<FormikProps<FormikValues>>,
  error: ValidationError
) => {
  if (error.path && error.message) {
    formRef.current?.setFieldError(error.path, error.message);
  }
};
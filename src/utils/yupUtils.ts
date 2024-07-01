import * as Yup from 'yup';
import {FormikProps} from 'formik';

type NestedErrorsType = {[key: string]: string};

export const setValidationErrors = (
  formRef: React.RefObject<FormikProps<any>>,
  errors: Yup.ValidationError,
) => {
  const validationErrors: NestedErrorsType = {};

  errors.inner.forEach(error => {
    if (error.path) {
      const path = error.path.split('.');
      let nested: any = validationErrors;

      for (let i = 0; i < path.length - 1; i++) {
        if (!nested[path[i]]) {
          nested[path[i]] = {};
        }
        nested = nested[path[i]];
      }

      nested[path[path.length - 1]] = error.message;
    }
  });

  formRef.current?.setErrors(validationErrors);
};

export const setValidationError = (
  formRef: React.RefObject<FormikProps<any>>,
  error: Yup.ValidationError,
) => {
  if (error.path && error.message) {
    const path = error.path.split('.');
    let nested: any = formRef.current?.errors;

    for (let i = 0; i < path.length - 1; i++) {
      if (!nested[path[i]]) {
        nested[path[i]] = {};
      }
      nested = nested[path[i]];
    }

    nested[path[path.length - 1]] = error.message;
  }
};

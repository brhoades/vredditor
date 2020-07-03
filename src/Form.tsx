import React from 'react';
import { Form as FinalForm, Field, FormRenderProps } from 'react-final-form';
import { FormApi, FORM_ERROR } from 'final-form';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import FinalFormControl from './FinalFormControl';
import SpinButton from './SpinButton';
import {
  getURLs,
} from './api';

type Values = {
  url: string;
};

type ErrorValues = Partial<Values> & {
  [FORM_ERROR]?: string;
};

const onSubmit = (setURLs: (urls: string[]) => void) => ({ url }: Values): Promise<ErrorValues> => (
  new Promise((resolve) => {
    getURLs(url)
      .then((urls) => {
        setURLs(urls);
        resolve();
      })
      .catch((error) => {
        resolve({
          [FORM_ERROR]: error,
        });
      });
  })
);

const URLForm = ({
  handleSubmit,
  submitting,
  pristine,
  dirtySinceLastSubmit,
  invalid,
  error,
  submitError,
  submitErrors,
}: FormRenderProps<Values>) => {
  const formError = submitError || error;
  const serverError = submitErrors !== undefined && submitErrors[FORM_ERROR] !== undefined;
  // Allow server errors (submitError) to retry without changes.
  const disabledFromUserError = !serverError && !dirtySinceLastSubmit;

  return (
    <Form onSubmit={handleSubmit}>
      <h2>v.redd.it URL Covnerter</h2>
      { formError && <Alert variant="danger">{`${formError}`}</Alert> }
    <Row sm="12" md="8">
      <Form.Group as={Col} md="12" lg="8">
        <Form.Label>v.redd.it URL</Form.Label>
        <Field
          component={FinalFormControl}
          name="url"
          type="text"
          defaultValue="https://v.redd.it/wfjunu51nj851"
          placeholder="https://v.redd.it/asdf1234"
        />
      </Form.Group>

      <Col md="8">
        <SpinButton
          variant="primary"
          type="submit"
          message="Convert"
          loading={submitting}
          loadingMessage="Converting..."
          disabled={submitting || pristine || (invalid && disabledFromUserError)}
        />
      </Col>
    </Row>
    </Form>
  );
};

export default ({ setURLs }: { setURLs: (urls: string[]) => void }) => (
  <FinalForm
    onSubmit={onSubmit(setURLs)}
    render={URLForm}
  />
);

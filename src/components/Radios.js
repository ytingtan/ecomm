import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Button, FormLabel, Text } from '@chakra-ui/react';

const Radios = () => (
  <div>
    <Formik
      initialValues={{
        picked: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <Text id="my-radio-group">Color</Text>
          <div role="group" aria-labelledby="my-radio-group">
            <FormLabel>
              <Field type="radio" name="picked" value="Black" />
              Black
            </FormLabel>
            <FormLabel>
              <Field type="radio" name="picked" value="Brown" />
              Brown
            </FormLabel>
          </div>

          <Button type="submit">Add to Cart!</Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Radios;
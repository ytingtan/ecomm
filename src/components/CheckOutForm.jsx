import React from 'react'
import { Button } from '@chakra-ui/react'
import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
import styles from "../form.css";

function CheckOutForm() {
    function validate(value) {
      let error
      if (!value) {
        error = 'This field is required'
      } 
      return error
    }
  
    return (
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) => (
          <Form className={styles.form}>
            <Field name='firstname' validate={validate}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>First name</FormLabel>
                  <Input {...field} placeholder='First Name' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='lastname' validate={validate}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Last name</FormLabel>
                  <Input {...field} placeholder='Last Name' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='address' validate={validate}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Shipping Address</FormLabel>
                  <Input {...field} placeholder='Address' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='payment' validate={validate}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Card Number</FormLabel>
                  <Input {...field} placeholder='Card Number' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme='teal'
              isLoading={props.isSubmitting}
              type='submit'
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    )
  }
export default CheckOutForm
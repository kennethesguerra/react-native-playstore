import React from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global';
import * as yup from 'yup';

const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4), 
  body: yup.string()
    .required()
    .min(8), 
  rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    })
})

export default function ReviewForm({
  addReview
}) {
  return (
    <View style={styles.container}>
      <Formik 
            initialValues={{
              title: '', 
              body: '', 
              rating: ''
            }} 
            validationSchema={reviewSchema} 
            onSubmit={(values, actions) => {
              addReview(values);
              actions.resetForm();
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <View>
                  <TextInput 
                    style={globalStyles.input} 
                    placeholder='Review Title' 
                    onChangeText={handleChange('title')}
                    value={values.title}
                  />

                  <TextInput 
                    multiline
                    style={globalStyles.input} 
                    placeholder='Review body' 
                    onChangeText={handleChange('body')}
                    value={values.body}
                  />
                  <TextInput 
                    style={globalStyles.input} 
                    placeholder='Rating (1-5)' 
                    onChangeText={handleChange('rating')}
                    value={values.rating} 
                    keyboardType='numeric'
                  />
                <Button onPress={handleSubmit} color='maroon' title="Submit" style={globalStyles.submitBtn} />
              </View>
          )}

          </Formik>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})

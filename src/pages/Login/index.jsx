import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Row, Col, Alert } from 'antd'
import { Formik } from 'formik'
import * as Yup from 'yup'
import './style.css'

const LoginPage = () => {
  return (
    <Row type="flex" justify="center">
      <Col span={8} className="login-form">
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required('email is required.'),
            password: Yup.string()
              .min(8, 'Password too short!')
              .test(
                'checkPassword',
                'should not contain the word "password"',
                // eslint-disable-next-line func-names
                function(fieldValue) {
                  return (
                    !fieldValue.includes('password') &&
                    !fieldValue.includes('p455w0rd')
                  )
                }
              )
              .required('Password is needed!')
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // eslint-disable-next-line no-console
              console.log(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <Form onSubmit={handleSubmit} className="login-form">
              {/* Email Field */}
              <Form.Item>
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email"
                />
                {errors.email && touched.email && (
                  <Alert message={errors.email} type="warning" showIcon />
                )}
              </Form.Item>

              {/* Password Field */}
              <Form.Item>
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  type="password"
                  placeholder="Password"
                />
                {errors.password && touched.password && (
                  <Alert message={errors.password} type="warning" showIcon />
                )}
              </Form.Item>

              {/* Remember Me & Login Button */}
              <Form.Item>
                <Checkbox>Remember me</Checkbox>
                <a className="login-form-forgot" href="/forgot-password">
                  Forgot password
                </a>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  disabled={isSubmitting}
                >
                  Log in
                </Button>
                Or <a href="/register">register now!</a>
              </Form.Item>
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  )
}

export default LoginPage

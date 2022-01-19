import React, { useCallback, useContext } from "react";
import { FormControl, InputLabel, Box, Button } from "@mui/material";
import AppContext from "./appContext";
import { Formik, Form, Field } from "formik";
import InputFormNumber from "./InputForm";
import InputArea from "./InputAeraForm";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const FormAddEntry = () => {
  const theme = createTheme({
    palette: {
      primary: { main: "#900C3F" },
    },
  });

  const handleFormSubmit = useCallback(({ content }, { resetForm }) => {
    console.log({ content });
    resetForm();
    return true;
  }, []);

  return (
    <Box sx={{ px: "20%", py: "2%" }}>
      <Formik
        initialValues={{
          value: 0,
          description: "",
        }}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, isSubmitting, values, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Amount</InputLabel>
              <Field
                name="data"
                value={values.value}
                onChange={handleChange}
                as={InputFormNumber}
              />
            </FormControl>
            <Field
              placeholder="Description"
              name="description"
              as={InputArea}
            />
            <ThemeProvider theme={theme}>
              <Button
                type="submit"
                disabled={isSubmitting}
                sx={{ mt: 2 }}
                color="primary"
                variant="contained"
                fullWidth
              >
                Submit
              </Button>
            </ThemeProvider>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default FormAddEntry;

import React, { useCallback, useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import AppContext from "../appContext";
import { Formik, Form, Field } from "formik";
import InputFormNumber from "./InputForm";
import InputArea from "./InputAeraForm";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as Yup from "yup";

const FormAddEntry = () => {
  const theme = createTheme({
    palette: {
      primary: { main: "#900C3F" },
    },
  });

  const { addToList } = useContext(AppContext);

  const AddEntrySchema = Yup.object().shape({
    amount: Yup.number()
      .typeError("The amount me be a number")
      .test(
        "amount = 0",
        "Amount must not be one of the following values: 0",
        (amount) => amount != 0
      )
      .required("Required"),
    description: Yup.string().required("Description is a required field"),
  });

  const handleFormSubmit = useCallback(
    (value, { resetForm }) => {
      addToList({
        value: value.amount,
        description: value.description,
      });
      resetForm();
    },
    [addToList]
  );

  return (
    <Box sx={{ px: "20%", py: "2%" }}>
      <Formik
        validationSchema={AddEntrySchema}
        initialValues={{
          amount: 0,
          description: "",
        }}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, isSubmitting, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <Field name="amount" placeholder="Amount" as={InputFormNumber} />
            <Typography variant="body" color={"error.main"}>
              {errors.amount && touched.amount ? errors.amount : null}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Field
                placeholder="Description"
                name="description"
                as={InputArea}
              />
            </Box>
            <Typography variant="body" color={"error.main"} sx={{ pb: 2 }}>
              {errors.description && touched.description
                ? errors.description
                : null}
            </Typography>
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

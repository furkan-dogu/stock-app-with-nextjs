"use client";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useRouter } from "next/navigation";
import { object, string } from "yup";
import image from "@/public/result.png";
import Image from "next/image";
import { Stack } from "@mui/material";
import { Form, Formik } from "formik";
import useAuthCalls from "@/hooks/useAuthCalls";

export default function Home() {
  const router = useRouter();
  const { login } = useAuthCalls();

  const loginSchema = object({
    email: string()
      .email("Please enter a valid e-mail.")
      .required("E-mail entry is mandatory."),
    password: string()
      .required("Password is mandatory.")
      .min(8, "The password must contain at least 8 characters.")
      .max(16, "The password must contain a maximum of 16 characters.")
      .matches(/\d+/, "The password must contain at least one number.")
      .matches(
        /[a-z]/,
        "The password must contain at least one lower case letter."
      )
      .matches(
        /[A-Z]/,
        "The password must contain at least one capital letter."
      )
      .matches(
        /[@$!%*?&]+/,
        "The password must contain at least one special character (@$!%*?&)."
      ),
  });

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent={"center"}
        direction={"row-reverse"}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <Avatar sx={{ bgcolor: "secondary.main", margin: "auto" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h4" align="center" color={"secondary.main"}>
            Login
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              login(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {({ handleChange, values, touched, errors, handleBlur }) => (
              <Form>
                <Box sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={errors.email}
                    onBlur={handleBlur}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={values.password}
                    onChange={handleChange}
                    error={touched.password && Boolean(errors.password)}
                    helperText={errors.password}
                    onBlur={handleBlur}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Stack direction={"row"} justifyContent="center" spacing={1}>
                    <Typography variant="body1">
                      Don't have an account?
                    </Typography>
                    <Typography
                      variant="body1"
                      color={"error"}
                      sx={{ cursor: "pointer" }}
                      onClick={() => router.push("/register")}
                    >
                      Sign up
                    </Typography>
                  </Stack>
                </Box>
              </Form>
            )}
          </Formik>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <Image
              src={image}
              alt="Stock Image"
              layout="responsive"
              width={"100%"}
              height={500}
            />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

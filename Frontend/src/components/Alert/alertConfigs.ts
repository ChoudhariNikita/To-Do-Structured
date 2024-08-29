import { SweetAlertOptions } from "sweetalert2";

const alertConfigs: Record<string, SweetAlertOptions> = {
  loginSuccess: {
    icon: "success",
    title: "Login Successful",
    text: "Welcome back!",
    background: "#d4edda",
    color: "#155724",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Proceed",
  },
  authenticationFailed: {
    icon: "error",
    title: "Authentication Failed",
    text: "Enter correct credentials!!",
    background: "#f8d7da",
    color: "#721c24",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Try Again",
  },
  registerSuccess: {
    icon: "success",
    title: "Registration Successful",
    text: "You can now log in!",
    background: "#d4edda",
    color: "#155724",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Login",
  },
  registerFailed: {
    icon: "error",
    title: "Registration Failed",
    text: "An error occurred. Please try again.",
    background: "#f8d7da",
    color: "#721c24",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Try Again",
  },
  taskCannotBeEmpty: {
    icon: "error",
    title: "Task cannot be empty",
    text: "Please enter a task.",
    background: "#f8d7da",
    color: "#721c24",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Try Again",
  },
  logout: {
    icon: "info",
    title: "Logout",
    text: "Are you sure you want to log out?",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, log out",
    cancelButtonText: "Cancel",
  },
};

export default alertConfigs;
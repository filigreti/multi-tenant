import { z } from "zod";

export const LoginValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

export type TLoginCredentialsValidator = z.infer<typeof LoginValidator>;

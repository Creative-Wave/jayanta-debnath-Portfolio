import { z } from "zod";

export const fromSchema = z.object({
  YourName: z.string().min(1, "Name is required"),
  YourEmail: z.string().email("Invalid email address"),
  Message: z.string().min(1, "Message is required"),
});

export type FromType = z.infer<typeof fromSchema>;

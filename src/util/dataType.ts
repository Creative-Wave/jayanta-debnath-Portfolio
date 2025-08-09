import { z } from "zod";
import { fromSchema } from "./fromSchema";

export type FromType = z.infer<typeof fromSchema>;

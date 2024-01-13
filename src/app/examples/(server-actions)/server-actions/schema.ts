import { z } from "zod";

// frontend can use this same schema with react-hook-form, etc..
export const schema = z.object({
  name: z.string().min(2, '"name" must be at least 2 characters'),
});

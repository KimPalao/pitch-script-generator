'use server';

import { z } from 'zod';

const FormSchema = z.object({
  prompt: z.string(),
  minutes: z.coerce.number().gt(0),
  instructions: z.string()
});

export type State = {
  errors?: {
    prompt?: string[],
    minutes?: string[],
    instructions?: string[];
  },
  message?: string | null;
};

const PromptPitch = FormSchema.omit({});

export async function promptPitch(prevState: State, formData: FormData) {
  const validatedFields = PromptPitch.safeParse(formData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to generate pitch.'
    };
  }

  const { prompt, minutes, instructions } = validatedFields.data;
}
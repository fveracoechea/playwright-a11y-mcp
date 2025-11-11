import { z } from 'zod';

/**
 *
 * SERVER SIDE ONLY.
 * Load and validates environment variables using Zod schema.
 *
 * @trhows `ZodError` If the environment variables do not match the schema.
 * */
export function loadEnv<S extends z.ZodTypeAny>(env: unknown, schema: S) {
  try {
    return schema.parse(env) as z.infer<S>;
  } catch (error) {
    if (error instanceof z.ZodError) {
      let message = 'Missing or Invalid ENV variables: \n';
      error.issues.forEach(issue => {
        message += `- ${issue.path[0]} \n`;
      });
      const e = new Error(message);
      throw e;
    } else {
      throw error;
    }
  }
}

const EnvSchema = z.object({
  AUTH_COOKIE_NAME: z.string(),
  AUTH_COOKIE_VALUE: z.string().jwt(),
});

export const env = loadEnv(Bun.env, EnvSchema);

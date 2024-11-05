import { env } from 'node:process';

export function getAPIKey(cloudflareEnv: Env) {
  /**
   * The `cloudflareEnv` is only used when deployed or when previewing locally.
   * In development the environment variables are available through `env`.
   */
  return env.ANTHROPIC_API_KEY || cloudflareEnv.ANTHROPIC_API_KEY;
}

export function getAnthropicVertexProjectInfo(cloudflareEnv: Env) {
  return {
    projectId: env.VERTEX_PROJECT_ID || cloudflareEnv.VERTEX_PROJECT_ID,
    region: env.VERTEX_REGION || cloudflareEnv.VERTEX_REGION,
  };
}

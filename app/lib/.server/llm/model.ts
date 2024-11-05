import { createAnthropic } from '@ai-sdk/anthropic';
import { createAnthropicVertex } from 'anthropic-vertex-ai';

export function getAnthropicModel(apiKey: string) {
  const anthropic = createAnthropic({
    apiKey,
  });

  return anthropic('claude-3-5-sonnet-20240620');
}

export function getAnthropicVertexModel(model: string, projectId: string, region: string) {
  const anthropicVertex = createAnthropicVertex({
    region, // us-east5からしかアクセスできないから注意
    projectId,
  });

  return anthropicVertex(String(model));
}

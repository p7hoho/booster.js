import { UpstreamOptions, NetworkOptions } from './types';

export const selectUpstream = (
  upstreamOptions: UpstreamOptions | UpstreamOptions[],
  networkOptions?: NetworkOptions,
): UpstreamOptions => {
  const method = networkOptions?.loadBalancingMethod || 'random';
  const upstream = Array.isArray(upstreamOptions) ? upstreamOptions : [upstreamOptions];
  if (method === 'random') {
    return upstream[Math.floor(Math.random() * upstream.length)];
  }
  return upstream[0];
};

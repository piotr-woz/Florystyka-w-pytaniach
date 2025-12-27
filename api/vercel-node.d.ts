declare module '@vercel/node' {
  import { IncomingMessage, ServerResponse } from 'http';

  export interface VercelRequest extends IncomingMessage {
    query: Record<string, string | string[]>;
    body?: any;
    cookies?: Record<string, string>;
    env?: Record<string, string>;
    method?: string;
  }

  export interface VercelResponse extends ServerResponse {
    json: (body: any) => VercelResponse;
    status: (code: number) => VercelResponse;
    setHeader: (name: string, value: string) => void;
  }
}

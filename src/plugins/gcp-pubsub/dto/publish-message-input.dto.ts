import { PublishOptions } from '@google-cloud/pubsub/build/src/topic';

export class PublishMessageInput {
  readonly topic: string;

  readonly data:
    | string
    | Uint8Array
    | number[]
    | ArrayBuffer
    | SharedArrayBuffer;

  readonly attributes: { [key: string]: string };

  // eslint-disable-next-line no-undef
  readonly encoding?: BufferEncoding;

  readonly options?: PublishOptions;

  readonly orderingKey?: string;
}

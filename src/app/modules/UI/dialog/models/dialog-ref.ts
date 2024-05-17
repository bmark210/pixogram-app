export interface DialogRef {
  id: string;
  group: string;
  closed: Promise<unknown>;
  dismissed: Promise<unknown>;
}

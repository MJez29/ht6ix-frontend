export interface NotePreview {
  date: string;
  body: string;
  _id: string;
  canEdit: boolean;
}

export type Notes = NotePreview[];

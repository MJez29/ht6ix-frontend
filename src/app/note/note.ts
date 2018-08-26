export interface NoteResponse {
  message: Note;
};

export interface Note {
  date: string;
  body: string;
  canEdit: string;
  _id: string;
};

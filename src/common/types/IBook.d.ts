import {INote} from '../types';

interface IBook {
  id: number;
  title: string;
  bookColor: string;
  selectedNoteId: number;
  notes: INote[];
}

export interface Student {
  id: string;
  name: string;
  studentId: string;
  class: string;
  modules: Module[];
  isPresent: boolean;
}

export interface Module {
  id: string;
  name: string;
  subjects: Subject[];
  finalGrade?: number;
  validated?: boolean;
}

export interface Subject {
  id: string;
  name: string;
  grade: number;
}
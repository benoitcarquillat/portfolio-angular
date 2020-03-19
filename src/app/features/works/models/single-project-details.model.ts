export interface singleWork {
  id: number;
  sectionTitle: string;
  technology: singleWorkItem[];
  role: singleWorkItem[];
}

export interface singleWorkItem {
  id: number;
  label: string;
}

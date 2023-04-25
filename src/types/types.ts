export type FormValues = {
    name?: string;
    email?: string;
    error?:string;
  }
export type loading = boolean;
export interface ParamField {
  value?: string; 
  placeholder:string;
}
export interface ParamButton {
  title: string;
  onClick: () => void;
}
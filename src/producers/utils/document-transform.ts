import { cnpj, cpf } from "cpf-cnpj-validator";

export default function documentTransform(document: string) {
    return cpf.isValid(document)?cpf.strip(document):cnpj.strip(document)
}
  

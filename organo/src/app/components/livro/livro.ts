import { GeneroLiterario } from "./genero-literario";

export interface Livro {
    titulo: string;
    autoria: string;
    imagem: string;
    favorito: boolean;
    genero: GeneroLiterario;
}
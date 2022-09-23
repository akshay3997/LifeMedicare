import { Filehandle } from "./_model/file-handel.model";

export class Product {
    id:number;
    title: string;
    price: string;
    description:string;
    category: string;
    image:Filehandle[];
}

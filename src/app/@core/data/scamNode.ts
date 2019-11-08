import { Observable } from 'rxjs';

export interface scamNode {
    ip: number;
    address: string;
    region: string;
    coin: string;
    category: string;
    subcategory;
    description: string;
    status: string;
    url: string;
    name: string;
}

export abstract class scamNodeData {
    abstract getscamNodeData(period: string): Observable<scamNode[]>;
}

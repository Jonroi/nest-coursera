import { SaynameDto } from '../dto/sayname.dto';
import { SaynameService } from './sayname.service';
export declare class SaynameController {
    private readonly saynameService;
    constructor(saynameService: SaynameService);
    sayMyName(name: SaynameDto): string;
}

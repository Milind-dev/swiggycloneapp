import {ProductEnvironment} from './environment.prod';
import { DevEnvironment } from './environment.dev';

export interface Environment{
    db_url:string
}

export function getEnvironmentVariables () {
    if(process.env.NODE_ENV === 'production'){
        return ProductEnvironment;
    }
    return DevEnvironment
}



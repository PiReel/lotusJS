/**
 * Created by dsmiley on 10/10/17.
 */
import * as Lavender from 'lavenderjs/lib';
export declare class InputCollectionModel extends Lavender.Subject {
    static TYPE_INPUT: number;
    static TYPE_LIST: number;
    static TYPE_RADIO_GROUP: number;
    static TYPE_FILE: number;
    selectionRequired: boolean;
    private _type;
    private _collection;
    private _isValid;
    private _validators;
    private _errors;
    private _label;
    constructor(type: number, collection: Lavender.ArrayList, selectionRequired?: boolean, validators?: Lavender.ArrayList);
    label: string;
    errors: Lavender.ArrayList;
    validators: Lavender.ArrayList;
    isValid: boolean;
    type: number;
    collection: Lavender.ArrayList;
    protected addEventListeners(): void;
    protected removeEventListeners(): void;
    setUpBindings(): void;
    validate(value?: boolean): Lavender.ArrayList;
    clear(): void;
    destroy(): void;
}

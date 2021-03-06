/**
 * Created by dsmiley on 9/26/17.
 */
import { AbstractCollectionView } from "./AbstractCollectionView";
import { FileEvent } from "../control/events/FileEvent";
import { AbstractItemView } from "./AbstractItemView";
export declare class FileCollectionView extends AbstractCollectionView {
    constructor();
    private _fileInput;
    private _selectBtn;
    fileInput: HTMLInputElement;
    selectBtn: HTMLButtonElement;
    protected getUploadEvent(file: any): FileEvent;
    protected uploadFiles(files: FileList): void;
    protected addViewEventListeners(view: AbstractItemView): void;
    protected removeViewEventListeners(view: AbstractItemView): void;
    onRemoveAbortFile(event: FileEvent): void;
    defineSkinParts(): void;
    onSkinPartAdded(part: string, element: HTMLElement): void;
    onFileInputChange(event: Event): void;
    onFileBtnClick(event: Event): void;
    destroy(): void;
}

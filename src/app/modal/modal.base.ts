export class ModalBase {
    destroy: Function;
    componentIndex: number;
    closeModal() {
        this.destroy();
    }
}

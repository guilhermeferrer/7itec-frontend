interface IUseResizeReturn {
    width: number;
    height: number;
}

type IUseResize = () => IUseResizeReturn;

declare module "@realdennis/use-resize" {
    const useResize: IUseResize;
    export default useResize;
}
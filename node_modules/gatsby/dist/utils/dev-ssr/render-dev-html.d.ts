import { GatsbyReduxStore } from "../../redux";
import { IGatsbyPage } from "../../redux/types";
export declare const initDevWorkerPool: () => void;
export declare const restartWorker: (htmlComponentRendererPath: string) => void;
interface IRenderDevHtmlProps {
    path: string;
    page: IGatsbyPage;
    skipSsr?: boolean;
    store: GatsbyReduxStore;
    error?: {
        codeFrame: string;
        source: string;
        line: number;
        column: number;
        sourceMessage?: string;
        stack?: string;
    };
    htmlComponentRendererPath: string;
    directory: string;
}
export declare const renderDevHTML: ({ path, page, skipSsr, store, error, htmlComponentRendererPath, directory, }: IRenderDevHtmlProps) => Promise<string>;
export {};

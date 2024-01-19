import { ReactNode } from "react";
import { AlertTypes } from "../Types/Types";

export interface IAlertInterface {
    type: AlertTypes,
    title: string,
    icon: ReactNode,
    description?: string,
    children?: ReactNode
}
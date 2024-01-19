import { ReactNode } from "react";

export interface IAlertProps {
    title: string,
    description: string,
    icon: ReactNode,
    type: string
}
import type {ReactElement, ReactNode} from 'react';
import {NextPage} from "next";

export type className = (...classes: any[]) => string;

export type setItemOnEventHandler = (event: any) => void;

export type deleteHandlerFunc = () => Promise<void>;

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};
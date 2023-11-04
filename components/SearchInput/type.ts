import { FocusEvent } from 'react';


export type SearchInputType = {
    isClear?:boolean
    onClear?: () => void
    onChange?: (e: any) => void
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void
}
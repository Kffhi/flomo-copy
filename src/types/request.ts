/**
 * 响应类型
 */
import { AxiosResponse } from 'axios'

export interface MyResponseType<T> {
    code: number
    data: T | null
    message: string
    status: boolean
}

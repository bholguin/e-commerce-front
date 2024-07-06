import {writable} from "svelte/store"
import { browser } from "$app/environment"
import type { UserOrder } from "../types"

export const orders = writable<Array<UserOrder>>(browser ? JSON.parse(localStorage.getItem("orders") || "[]") : []) 

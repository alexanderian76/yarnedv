import { getSuggestedQuery } from "@testing-library/react"
import { makeAutoObservable } from "mobx"

export default class WidthStore {
    constructor() {
        this._width = 0
        makeAutoObservable(this)
    }

    setWidth(width) {
        this._width = width
        console.log(width)
    }

    update(data){
        
        console.log(data)
    }

    get width() {
        return this._width
    }


}
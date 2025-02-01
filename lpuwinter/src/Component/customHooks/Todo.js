import React from 'react'
import useList from './useList'

export default function Todo(){
    const {list}=useList()
    return (
        <div>
            <form>
                <input/>
            </form>
            <ul>
                {list.map((item)=><li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}

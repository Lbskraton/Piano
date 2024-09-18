import getNoteFromKey from "./noteUtil"
import {test,expect} from 'vitest'


test('si le paso la letra a devolvera C4',()=>{
    let note=getNoteFromKey('a')
    expect(note).toBe('C4')
})

test('si le paso la letra A devolvera C4',()=>{
    let note=getNoteFromKey('A')
    expect(note).toBe('C4')
})

test('si no le paso una letra ',()=>{
    let note=getNoteFromKey('null')
    expect(note).toBeUndefined()
})

test('si no le paso undefined ',()=>{
    let note=getNoteFromKey('undefined')
    expect(note).toBeUndefined()
})
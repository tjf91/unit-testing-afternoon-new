import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from "../../server/utils"
import { longText, posts, shortText, users } from './__data__/testData'

test('does not alter string over 100', ()=>{
    expect(
        shortenText(shortText)
    )
        .toHaveLength(shortText.length)
    
})

test('test for str length of 100 and ... at the end if string over 100',()=>{
      
    expect(shortenText(longText)).not.toHaveLength(100)
    expect(shortenText(longText).slice(-3)).toBe('...')


})

test('check total word count',()=>{
    expect(wordCount(posts)).toBe(233)
})

test('check for display name property',()=>{
    expect(attachUserName(users,posts)[0]).toHaveProperty('displayName')
})

test('check for post removal',()=>{
    expect(attachUserName(users,posts)).not.toContainEqual(posts[5])
})
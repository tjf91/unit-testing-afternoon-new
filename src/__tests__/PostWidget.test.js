import React from 'react'
import {render} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import PostWidget from '../components/PostWidget'
import { posts } from './__data__/testData'
import { shortenText } from '../utils/functions'


const longPost = posts[0]
const post = posts[1]

it('renders post',()=>{
    const {container} = render(
        <MemoryRouter>
            <PostWidget {...post} />
        </MemoryRouter>
    )
    expect(container.textContent).toContain(post.text)
})

it('renders post',()=>{
    const {container} = render(
        <MemoryRouter>
            <PostWidget {...longPost} />
        </MemoryRouter>
    )
    expect(container.textContent).toContain(shortenText(longPost.text))
})

it('renders post',()=>{
    const {container} = render(
        <MemoryRouter>
            <PostWidget expanded={true} {...longPost} />
        </MemoryRouter>
    )
    expect(container.textContent).toContain(longPost.text)
})
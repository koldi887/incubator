import React from 'react'
import {render, screen} from '@testing-library/react'
import {Message} from '../Message'

describe('Message component', () => {
    it('find text "test message name"', () => {
        render((
            <Message
                avatar=""
                name="test message name"
                message=""
                time=""
            />
        ))
        expect(screen.getByText(/test message name/i)).toBeInTheDocument()
    })

    it('find text "test message"', () => {
        render((
            <Message
                avatar=""
                name=""
                message="test message"
                time=""
            />
        ))
        expect(screen.getByText(/test message/i)).toBeInTheDocument()
    })
    it('find text "test message time"', () => {
        render((
            <Message
                avatar=""
                name=""
                message=""
                time="test message time"
            />
        ))
        expect(screen.getByText(/test message time/i)).toBeInTheDocument()
    })
})


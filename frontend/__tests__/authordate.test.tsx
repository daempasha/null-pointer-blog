import { getByText, render, screen } from '@testing-library/react'
import moment from 'moment'
import { AuthorDate } from '../components/AuthorDate/authordate.component'


it("shows name and date", () => {
    const author = "Theodore Roosevelt"
    const date = moment.now()
    const dateFormat = "D MMM YYYY";

    const { container } = render(<AuthorDate author={author} date={date} />)
    
    expect(screen.getByText(author)).toBeInTheDocument();
    expect(screen.getByText(moment(date).format(dateFormat))).toBeInTheDocument();

})


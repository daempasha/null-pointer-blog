import { getByText, render, screen } from '@testing-library/react'
import { Footer } from '../components/Footer/footer.component';


it("renders properly", () => {
    const footer = render(<Footer />);

    expect(footer).toMatchSnapshot();
})


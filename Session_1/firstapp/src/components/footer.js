function Footer() {
    return (
        <div>
            <h3 className="m - 2 p - 2 text-danger text-center">Footer</h3>

            <div className="p - 2 text-bg-success text-center">
                <div classNameName="p - 2 text-bg-primary text-center">
                    Quote
                </div>
                
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>A well-known quote, contained in a blockquote element.</p>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}
export default Footer;